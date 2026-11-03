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
| CSP and security headers | `src/hooks.server.ts` |
| Colors | `tailwind.config.js` — `paper` (light ground) and `ink` (dark ground) |
| CV | `static/Harun-Bahrudin-CV.pdf` |

## Notes

- Only the active language's dictionary reaches the browser: the server load sends it, and switching languages fetches the new one on demand.
- CSP allows inline scripts by sha256, computed per response in `src/hooks.server.ts` after every HTML rewrite, so editing `src/app.html` needs no manual hash update.
- Hydration waits for the first painted frame, and module preloads are low priority: first paint is plain HTML/CSS.
- Every animation has a `prefers-reduced-motion` fallback, and loops pause when their section is off screen (`src/lib/reveal.ts`).
