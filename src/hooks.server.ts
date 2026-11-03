import type { Handle } from '@sveltejs/kit/hooks';
import { createHash } from 'node:crypto';
import { isLocale, matchLocale } from '#lib/i18n/index.ts';

// SvelteKit's boot script (start of the hydration import) and its module preload hints
const BOOT = /import\("([^"]+\/_app\/immutable\/entry\/start\.[\w-]+\.js)"\)\.then\(async \(kit\) => \{/;
const PRELOAD = /<link href="([^"]+)" rel="modulepreload">/g;
const INLINE_SCRIPT = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g;

// First paint is plain HTML/CSS. Hydration (and the module preloads it needs) starts once the first
// contentful frame is painted, so JS never competes with the document and hero on slow phones. Preloads are then
// injected all at once, so the modules still download in parallel. Leaves the page untouched if
// SvelteKit's boot script ever changes shape.
function hydrateAfterPaint(html: string) {
  if (!BOOT.test(html)) return html;
  const hrefs = [...html.matchAll(PRELOAD)].map((m) => m[1]);
  return html
    .replace(PRELOAD, '')
    .replace(
      BOOT,
      (_, start) =>
        `${AFTER_FCP}.then(() => { for (const href of ${JSON.stringify(hrefs)}) document.head.append(Object.assign(document.createElement('link'), { rel: 'modulepreload', href })); return import("${start}"); }).then(async (kit) => {`
    );
}

// Resolves once the browser reports first-contentful-paint (3 s cap for tabs that never paint)
const AFTER_FCP =
  "new Promise((r) => { setTimeout(r, 3000); if (performance.getEntriesByName('first-contentful-paint').length) return r(); try { new PerformanceObserver((l, o) => { if (l.getEntriesByName('first-contentful-paint').length) { o.disconnect(); r(); } }).observe({ type: 'paint', buffered: true }); } catch { r(); } })";

// script-src allows exactly the inline scripts this response contains (theme script, SvelteKit boot);
// hashed here, after every rewrite, so the policy always matches what ships. JSON-LD is a data block CSP ignores.
function csp(html: string) {
  const hashes = new Set([...html.matchAll(INLINE_SCRIPT)].map((m) => `'sha256-${createHash('sha256').update(m[1]).digest('base64')}'`));
  return `script-src 'self' ${[...hashes].join(' ')}; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'`;
}

export const handle: Handle = async ({ event, resolve }) => {
  // ?lang= gives each language its own crawlable URL (used by hreflang); then cookie, then browser language
  const query = event.url.searchParams.get('lang');
  const saved = event.cookies.get('lang');
  const lang = isLocale(query) ? query : isLocale(saved) ? saved : matchLocale(event.request.headers.get('accept-language'));
  event.locals.lang = lang;

  let response = await resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', lang) });
  if (response.headers.get('content-type')?.startsWith('text/html')) {
    const html = hydrateAfterPaint(await response.text());
    response = new Response(html, { status: response.status, statusText: response.statusText, headers: response.headers });
    response.headers.delete('content-length'); // body was rewritten
    response.headers.set('vary', 'Accept-Language, Cookie');
    response.headers.set('content-security-policy', csp(html));
  }
  response.headers.set('x-content-type-options', 'nosniff');
  response.headers.set('referrer-policy', 'strict-origin-when-cross-origin');
  response.headers.set('permissions-policy', 'camera=(), microphone=(), geolocation=()');
  return response;
};
