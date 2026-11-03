// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	/** Build date (YYYY-MM-DD), injected by vite.config.ts */
	const __BUILD_DATE__: string;
	namespace App {
		// interface Error {}
		interface Locals {
			lang: import('#lib/i18n/index.ts').Locale;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
