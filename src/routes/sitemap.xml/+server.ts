import { locales } from '#lib/i18n/index.ts';
import { alternates, localeUrl } from '#lib/seo.ts';

// One entry per page per language, each listing all its language versions (hreflang)
export const GET = ({ url }) => {
  const entries = ['/', '/about'].flatMap((path) => {
    const links = alternates(url.origin, path)
      .map((a) => `<xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href.replace(/&/g, '&amp;')}"/>`)
      .join('');
    return locales.map((l) => `<url><loc>${localeUrl(url.origin, path, l)}</loc>${links}</url>`);
  });
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries.join('')}</urlset>`,
    { headers: { 'content-type': 'application/xml' } }
  );
};
