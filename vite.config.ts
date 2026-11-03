import adapter from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

// app.html's inline theme/font script, allowed by hash so script-src needs no 'unsafe-inline'
const appScript = readFileSync('src/app.html', 'utf8').match(/<script>([\s\S]*?)<\/script>/)![1];
const appScriptHash = `sha256-${createHash('sha256').update(appScript).digest('base64')}` as const;

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
			// Inline the small CSS bundle so it doesn't block first paint
			inlineStyleThreshold: 60000,
			// SvelteKit hashes its own inline scripts; JSON-LD is a data block, which CSP doesn't block
			csp: {
				mode: 'hash',
				directives: {
					'script-src': ['self', appScriptHash],
					'object-src': ['none'],
					'base-uri': ['self'],
					'form-action': ['self'],
					'frame-ancestors': ['none']
				}
			}
		})
	],
	// deploy date for <lastmod> in sitemap.xml
	define: { __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)) },
	// gsap ships ESM without "type": "module"; bundle it so Node on Vercel never loads it raw
	ssr: { noExternal: ['gsap'] }
});
