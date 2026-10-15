import type { Handle } from '@sveltejs/kit/hooks';
import { isLocale, matchLocale } from '#lib/i18n/index.ts';

export const handle: Handle = async ({ event, resolve }) => {
  const saved = event.cookies.get('lang');
  const lang = isLocale(saved) ? saved : matchLocale(event.request.headers.get('accept-language'));
  event.locals.lang = lang;
  return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', lang) });
};
