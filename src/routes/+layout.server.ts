import { loadDict } from '#lib/i18n/index.ts';

// Only the active language's copy goes into the page payload
export const load = async ({ locals }) => ({ lang: locals.lang, dict: await loadDict(locals.lang) });
