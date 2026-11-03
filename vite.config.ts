import adapter from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
			// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter(),
			// Inline the CSS bundle (about 60 KB raw, 10 KB gzip) so it doesn't block first paint; headroom so it stays inline as it grows
			inlineStyleThreshold: 100000
		})
	],
	// deploy date for <lastmod> in sitemap.xml
	define: { __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)) }
});
