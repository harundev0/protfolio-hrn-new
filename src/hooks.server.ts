import type { Handle } from '@sveltejs/kit/hooks';
import { isLocale, matchLocale } from '#lib/i18n/index.ts';

export const handle: Handle = async ({ event, resolve }) => {
  // ?lang= gives each language its own crawlable URL (used by hreflang); then cookie, then browser language
  const query = event.url.searchParams.get('lang');
  const saved = event.cookies.get('lang');
  const lang = isLocale(query) ? query : isLocale(saved) ? saved : matchLocale(event.request.headers.get('accept-language'));
  event.locals.lang = lang;
  const response = await resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', lang) });
  if (response.headers.get('content-type')?.startsWith('text/html')) response.headers.set('vary', 'Accept-Language, Cookie');
  return response;
};

// TEMP: surface the server error message while debugging the Vercel 500 on "/"; remove after fix
export const handleError = ({ error }: { error: unknown }) => {
  console.error(error);
  const e = error as Error;
  return { message: `${e?.message ?? String(error)} || ${(e?.stack ?? '').split('\n').slice(0, 4).join(' | ')}` };
};
