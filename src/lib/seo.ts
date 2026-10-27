import { locales, type Locale } from '#lib/i18n/index.ts';

export const ogLocale: Record<Locale, string> = { en: 'en_US', id: 'id_ID', ja: 'ja_JP', fr: 'fr_FR', 'de-CH': 'de_CH' };

// English lives at the bare URL; other languages add ?lang= so search engines can index each one.
export const localeUrl = (origin: string, path: string, l: Locale) => `${origin}${path}${l === 'en' ? '' : `?lang=${l}`}`;

export const alternates = (origin: string, path: string) => [
  ...locales.map((l) => ({ hreflang: l, href: localeUrl(origin, path, l) })),
  { hreflang: 'x-default', href: localeUrl(origin, path, 'en') }
];
