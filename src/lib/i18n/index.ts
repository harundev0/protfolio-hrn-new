import { getContext, setContext } from 'svelte';
import en from './en';
import id from './id';
import ja from './ja';
import fr from './fr';
import deCH from './de-CH';

export type Dict = typeof en;

export const locales = ['en', 'id', 'ja', 'fr', 'de-CH'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  id: 'Bahasa Indonesia',
  ja: '日本語',
  fr: 'Français',
  'de-CH': 'Deutsch (Schweiz)'
};

const dictionaries: Record<Locale, Dict> = { en, id, ja, fr, 'de-CH': deCH };

export const isLocale = (v: unknown): v is Locale => locales.includes(v as Locale);

// Picks the first supported language from an Accept-Language header; any German maps to de-CH.
export function matchLocale(header: string | null): Locale {
  for (const part of (header ?? '').split(',')) {
    const tag = part.split(';')[0].trim().toLowerCase();
    const exact = locales.find((l) => l.toLowerCase() === tag);
    if (exact) return exact;
    const base = tag.split('-')[0];
    if (base === 'de') return 'de-CH';
    const loose = locales.find((l) => l.toLowerCase() === base);
    if (loose) return loose;
  }
  return 'en';
}

type I18n = { readonly lang: Locale; readonly t: Dict; setLang: (l: Locale) => void };
const KEY = Symbol('i18n');

// Context (not module state) so SSR requests never share a language.
export function setI18n(get: () => Locale, set: (l: Locale) => void): I18n {
  return setContext(KEY, {
    get lang() {
      return get();
    },
    get t() {
      return dictionaries[get()];
    },
    setLang: set
  });
}

export const getI18n = () => getContext<I18n>(KEY);
