# Harun Bahrudin — portfolio

Personal portfolio at [harunbahrudin.vercel.app](https://harunbahrudin.vercel.app): selected work, expertise, and an about page with work history. SvelteKit 3 + Svelte 5 (runes), Tailwind CSS 3, deployed on Vercel.

## Develop

```sh
npm install
npm run dev      # http://localhost:5173
npm run check    # svelte-check (types + a11y warnings)
npm run build && npm run preview
```

## Where things live

| What | Where |
| --- | --- |
| Contact links, email, CV path | `src/lib/site.ts` |
| All copy, 5 languages (en, id, ja, fr, de-CH) | `src/lib/i18n/*.ts` — `en.ts` defines the shape, the others must match it |
| Language detection (`?lang=` → cookie → `Accept-Language`) | `src/hooks.server.ts` |
| SEO: meta, hreflang, JSON-LD | `src/routes/+layout.svelte`, `src/lib/seo.ts` |
| `sitemap.xml`, `robots.txt`, `llms.txt` | `src/routes/*/+server.ts` (generated from the copy above) |
| CSP and security headers | `vite.config.ts` (`csp`), `src/hooks.server.ts` |
| Colors | `tailwind.config.js` — `paper` (light ground) and `ink` (dark ground) |
| CV | `static/Harun-Bahrudin-CV.pdf` |

## Notes

- Only the active language's dictionary reaches the browser: the server load sends it, and switching languages fetches the new one on demand.
- The inline script in `src/app.html` is allowed by CSP through a sha256 computed in `vite.config.ts`, so editing it needs no manual hash update.
- Every animation has a `prefers-reduced-motion` fallback, and loops pause when their section is off screen (`src/lib/reveal.ts`).
