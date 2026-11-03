import { getContext, setContext } from 'svelte';
import type en from './en';

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

// One chunk per language: the browser only downloads the dictionary it shows
const loaders: Record<Locale, () => Promise<{ default: Dict }>> = {
  en: () => import('./en'),
  id: () => import('./id'),
  ja: () => import('./ja'),
  fr: () => import('./fr'),
  'de-CH': () => import('./de-CH')
};

export const loadDict = async (l: Locale): Promise<Dict> => (await loaders[l]()).default;

export const isLocale = (v: unknown): v is Locale => locales.includes(v as Locale);

type I18n = { readonly lang: Locale; readonly t: Dict; setLang: (l: Locale) => void };
const KEY = Symbol('i18n');

// Context (not module state) so SSR requests never share a language.
export function setI18n(get: () => Locale, dict: () => Dict, set: (l: Locale) => void): I18n {
  return setContext(KEY, {
    get lang() {
      return get();
    },
    get t() {
      return dict();
    },
    setLang: set
  });
}

export const getI18n = () => getContext<I18n>(KEY);
