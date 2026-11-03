<script lang="ts">
  import '../app.css';
  import type { Snippet } from 'svelte';
  import { onMount, untrack } from 'svelte';
  import { page } from '$app/state';
  import { replaceState } from '$app/navigation';
  import Icon from '#lib/components/Icon.svelte';
  import ScrollRuler from '../lib/components/ScrollRuler.svelte';
  import Footer from '../lib/components/Footer.svelte';
  import LangPicker from '../lib/components/LangPicker.svelte';
  import { setI18n, loadDict, type Locale, type Dict } from '#lib/i18n/index.ts';
  import { site } from '#lib/site.ts';
  import { alternates, localeUrl, ogLocale } from '#lib/seo.ts';
  import { workIndex } from '#lib/work.ts';
  import { spyLine } from '#lib/reveal.ts';

  let { children, data }: { children: Snippet; data: { lang: Locale; dict: Dict } } = $props();

  // Server value seeds the state once; later switches are client-side only.
  let lang = $state<Locale>(untrack(() => data.lang));
  let dict = $state.raw<Dict>(untrack(() => data.dict));
  let wanted: Locale;
  const i18n = setI18n(
    () => lang,
    () => dict,
    async (l) => {
      wanted = l;
      const next = await loadDict(l);
      if (wanted !== l) return; // a later pick won the race
      dict = next;
      lang = l;
      document.cookie = `lang=${l}; path=/; max-age=31536000; samesite=lax`;
      document.documentElement.lang = l;
      // the URL carries the language (pages are cached per URL), so a reload or shared link keeps it
      const url = new URL(location.href);
      if (l === 'en') url.searchParams.delete('lang');
      else url.searchParams.set('lang', l);
      replaceState(url, {});
    }
  );
  let t = $derived(i18n.t);

  let isDark = $state(true);
  let mounted = $state(false);
  let scrollSection = $state('hero');
  let mobileMenuOpen = $state(false);

  let isAboutPage = $derived(page.url.pathname === '/about');
  let caseIndex = $derived(page.error ? -1 : workIndex(page.params.slug));
  let caseItem = $derived(caseIndex >= 0 ? t.work.items[caseIndex] : null);
  let metaTitle = $derived(page.error ? t.error.title : caseItem ? `${caseItem.name} (${caseItem.kind}) — ${site.name}` : isAboutPage ? t.meta.aboutTitle : t.meta.title);
  let metaDesc = $derived(caseItem ? caseItem.desc : isAboutPage ? t.meta.aboutDescription : t.meta.description);
  let noindex = $derived(!!page.error);
  let canonical = $derived(localeUrl(page.url.origin, page.url.pathname, lang));

  // Structured data: who this is, for search results and AI answer engines
  let jsonLd = $derived.by(() => {
    const o = page.url.origin;
    const person = {
      '@type': 'Person',
      '@id': `${o}/#person`,
      name: site.name,
      url: `${o}/`,
      image: `${o}/og.png`,
      email: `mailto:${site.email}`,
      jobTitle: 'Product Engineer',
      description: t.meta.description,
      address: { '@type': 'PostalAddress', addressLocality: 'Subang', addressRegion: 'West Java', addressCountry: 'ID' },
      sameAs: [site.github, site.linkedin].filter(Boolean),
      worksFor: { '@type': 'Organization', name: 'GoThru' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Subang', alternateName: 'Universitas Subang' },
      knowsLanguage: ['en', 'id'],
      knowsAbout: ['Product engineering', 'UI/UX design', 'Frontend engineering', 'Design systems', 'Figma', 'React', 'Svelte', 'TypeScript', 'Tailwind CSS', 'Web accessibility', 'Web performance', 'AI-assisted development', 'Prompt engineering'],
      hasOccupation: { '@type': 'Occupation', name: 'Product Engineer', skills: 'UI/UX design, frontend engineering, React, Svelte, TypeScript, Tailwind CSS, Figma' },
      ...(site.resume ? { subjectOf: { '@type': 'DigitalDocument', name: `${site.name} CV`, url: `${o}${site.resume}`, encodingFormat: 'application/pdf' } } : {})
    };
    const data = {
      '@context': 'https://schema.org',
      '@graph': [
        person,
        { '@type': 'WebSite', '@id': `${o}/#website`, url: `${o}/`, name: site.name, inLanguage: ['en', 'id', 'ja', 'fr', 'de-CH'], publisher: { '@id': `${o}/#person` } },
        { '@type': isAboutPage ? 'ProfilePage' : 'WebPage', '@id': `${canonical}#page`, url: canonical, name: metaTitle, description: metaDesc, inLanguage: lang, isPartOf: { '@id': `${o}/#website` }, mainEntity: { '@id': `${o}/#person` } }
      ]
    };
    // escape < so the JSON can never close the script tag
    return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</` + 'script>';
  });

  // Active nav id derived from route or scroll
  let activeNav = $derived(isAboutPage ? 'about' : caseItem ? 'work' : scrollSection);

  let navLinks = $derived([
    { href: '/', id: 'hero', label: t.nav.home },
    { href: '/#work', id: 'work', label: t.nav.work },
    { href: '/#expertise', id: 'expertise', label: t.nav.expertise },
    { href: '/about', id: 'about', label: t.nav.about },
    { href: '/#stack', id: 'stack', label: t.nav.stack },
    { href: '/#contact', id: 'contact', label: t.nav.contact }
  ]);

  function toggleTheme() {
    isDark = !isDark;
    updateTheme(isDark);
  }

  function updateTheme(dark: boolean) {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
    // browser chrome follows the chosen theme, not only the OS one
    document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute('content', dark ? '#050505' : '#FAF9F8'));
  }

  // Mobile drawer: focus its first link, make the page behind inert and stop it scrolling
  let menuToggle: HTMLButtonElement;
  let drawer = $state<HTMLElement>();
  let pageWrap: HTMLElement;
  $effect(() => {
    if (!mobileMenuOpen) return;
    drawer?.querySelector('a')?.focus();
    pageWrap.inert = true;
    document.body.style.overflow = 'hidden';
    return () => {
      pageWrap.inert = false;
      document.body.style.overflow = '';
      if (drawer?.contains(document.activeElement) || document.activeElement === document.body) menuToggle?.focus();
    };
  });

  function scrollToSection(id: string) {
    scrollSection = id;
    mobileMenuOpen = false;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Navbar scroll spy on the home page: the section crossing a line 20% down the viewport.
  // Approach has no nav item, so the previous one stays lit while it's on screen.
  $effect(() => {
    if (page.url.pathname !== '/') return;
    scrollSection = 'hero';
    return spyLine(['hero', 'work', 'expertise', 'stack', 'contact'], 0.2, (id) => (scrollSection = id));
  });

  onMount(() => {
    isDark = document.documentElement.classList.contains('dark') ||
             (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    updateTheme(isDark);
    mounted = true;
  });
</script>

<svelte:head>
  <title>{metaTitle}</title>
  <meta name="description" content={metaDesc} />
  <link rel="canonical" href={canonical} />
  {#each alternates(page.url.origin, page.url.pathname) as alt}<link rel="alternate" hreflang={alt.hreflang} href={alt.href} />{/each}
  <meta name="author" content={site.name} />
  <meta name="robots" content={noindex ? 'noindex' : 'index, follow, max-image-preview:large, max-snippet:-1'} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={site.name} />
  <meta property="og:title" content={metaTitle} />
  <meta property="og:description" content={metaDesc} />
  <meta property="og:url" content={canonical} />
  <meta property="og:locale" content={ogLocale[lang]} />
  {#each Object.entries(ogLocale).filter(([l]) => l !== lang) as [, loc]}<meta property="og:locale:alternate" content={loc} />{/each}
  <meta property="og:image" content="{page.url.origin}/og.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="{site.name}, Product · UI/UX · Frontend Engineer" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={metaTitle} />
  <meta name="twitter:description" content={metaDesc} />
  <meta name="twitter:image" content="{page.url.origin}/og.png" />
  {@html jsonLd}
</svelte:head>

{#snippet githubIcon()}
  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
{/snippet}

{#snippet linkedinIcon()}
  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
{/snippet}


<svelte:window onkeydown={(e) => { if (e.key === 'Escape') mobileMenuOpen = false; }} />

<!-- ArtCraft aesthetic: razor-thin borders, deep backdrop, structural grid -->
<a href="#content" class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black font-mono text-[11px] font-bold tracking-[0.12em] uppercase">{t.nav.skip}</a>
<div class="min-h-[100dvh] w-full flex flex-col relative selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
  <div class="fixed inset-0 pointer-events-none bg-paper dark:bg-ink -z-20"></div>

  <!-- Subtle glowing core -->
  <div class="fixed inset-0 pointer-events-none opacity-0 dark:opacity-100 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.02] via-ink to-ink -z-10"></div>

  <!-- Subtle dot grid background -->
  <div class="fixed inset-0 pointer-events-none bg-dot-grid -z-10"></div>

  <!-- App Header - Portfolio Concept with Exact ArtCraft Visual Architecture -->
  <nav id="site-nav" class="w-full h-12 border-b border-black/10 dark:border-white/10 flex items-stretch justify-between fixed top-0 z-50 bg-paper/95 dark:bg-ink/95 backdrop-blur-sm select-none">

    <!-- Left Section: Mobile Menu Button + Logo + Desktop Portfolio Nav Items -->
    <div class="flex items-stretch min-w-0">

      <!-- Mobile Menu Toggle Button (Visible on screens < lg; tablets get the drawer too) -->
      <button
        bind:this={menuToggle}
        onclick={() => mobileMenuOpen = !mobileMenuOpen}
        class="flex lg:hidden items-center justify-center px-3.5 border-r border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
        aria-label={t.nav.toggleMenu}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
      >
        {#if mobileMenuOpen}
          <Icon name="X" class="w-4 h-4" />
        {:else}
          <Icon name="List" class="w-4 h-4" />
        {/if}
      </button>

      <!-- Harun Bahrudin Monogram Mark -->
      <a
        href="/"
        onclick={() => { scrollSection = 'hero'; mobileMenuOpen = false; }}
        class="flex items-center gap-2.5 border-r border-black/10 dark:border-white/10 px-3.5 sm:px-5 hover:opacity-85 transition-opacity"
        aria-label="{site.name}, {t.nav.homeAria}"
      >
        <img
          src="/assets/logo/logo-light.webp"
          loading="lazy"
          alt=""
          width="28"
          height="28"
          class="h-7 w-auto dark:hidden object-contain"
        />
        <img
          src="/assets/logo/logo-dark.webp"
          loading="lazy"
          alt=""
          width="28"
          height="28"
          class="h-7 w-auto hidden dark:block object-contain"
        />
        <span class="font-mono font-bold tracking-widest text-xs text-black dark:text-white hidden sm:inline lg:hidden xl:inline">HARUN</span>
      </a>

      <!-- Desktop Primary Portfolio Nav Links (lg:flex) -->
      <ul class="hidden lg:flex items-stretch list-none m-0 p-0">
        {#each navLinks as item}
          <li class="flex items-stretch">
            <a
              href={item.href}
              onclick={() => scrollToSection(item.id)}
              class="group flex h-full items-center px-1.5 xl:px-2.5 font-mono text-[11px] font-bold tracking-[0.12em] uppercase whitespace-nowrap cursor-pointer transition-colors {
                activeNav === item.id
                  ? 'text-black dark:text-white'
                  : 'text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white'
              }"
            >
              {#if activeNav === item.id}
                <!-- Active High-Contrast Block Tag (1:1 ArtCraft style) -->
                <span class="flex items-center px-2 py-0.5 bg-black text-white dark:bg-white dark:text-black font-bold">
                  {item.label}
                </span>
              {:else}
                <span class="flex items-center px-1.5 py-0.5 group-hover:bg-black/5 dark:group-hover:bg-white/10 transition-colors">
                  {item.label}
                </span>
              {/if}
            </a>
          </li>
        {/each}

        {#if site.resume}
          <li class="flex items-stretch border-l border-black/10 dark:border-white/10 pl-1">
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              class="group flex h-full items-center px-2 xl:px-3 font-mono text-[11px] font-bold tracking-[0.12em] uppercase text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white transition-colors"
            >
              <span class="px-1.5 py-0.5 group-hover:bg-black/5 dark:group-hover:bg-white/10 transition-colors">
                {t.nav.resume}
              </span>
            </a>
          </li>
        {/if}
      </ul>
    </div>

    <!-- Right Section: GitHub, LinkedIn, Language, Theme Toggle, Contact CTA -->
    <div class="flex items-stretch">
      <div class="hidden xl:flex items-center gap-4 px-4 font-mono text-[11px] font-bold tracking-[0.12em] uppercase text-black/55 dark:text-white/55">
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          class="flex items-center gap-1.5 hover:text-black dark:hover:text-white transition-colors"
        >
          {@render githubIcon()}
          <span>GITHUB</span>
        </a>
        {#if site.linkedin}
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            class="flex items-center gap-1.5 hover:text-black dark:hover:text-white transition-colors"
          >
            {@render linkedinIcon()}
            <span>LINKEDIN</span>
          </a>
        {/if}
      </div>

      <LangPicker class="hidden sm:flex border-l border-black/10 dark:border-white/10" />

      <!-- Theme Switcher -->
      {#if mounted}
        <button
          onclick={toggleTheme}
          class="flex items-center justify-center px-3 sm:px-3.5 border-l border-black/10 dark:border-white/10 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          aria-label={t.nav.toggleTheme}
        >
          {#if isDark}
            <Icon name="Sun" class="w-3.5 h-3.5" />
          {:else}
            <Icon name="Moon" class="w-3.5 h-3.5" />
          {/if}
        </button>
      {/if}

      <!-- GET IN TOUCH CTA (Responsive padding so it never crowds mobile header) -->
      <a
        href="/#contact"
        onclick={() => scrollToSection('contact')}
        class="inline-flex items-center justify-center border-l border-black/10 dark:border-white/10 px-3.5 sm:px-4 xl:px-5 font-mono text-[11px] font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase whitespace-nowrap bg-black text-white dark:bg-white dark:text-black hover:opacity-85 transition-opacity"
      >
        {t.nav.getInTouch}
      </a>
    </div>
  </nav>

  <!-- MOBILE NAVIGATION DRAWER (ArtCraft Blueprint Drawer for < lg screens) -->
  {#if mobileMenuOpen}
    <div
      class="fixed inset-0 top-12 z-40 lg:hidden bg-black/40 backdrop-blur-sm"
      onclick={() => mobileMenuOpen = false}
      role="presentation"
    >
      <div
        bind:this={drawer}
        id="mobile-menu"
        class="w-full bg-paper dark:bg-ink border-b border-black/10 dark:border-white/10 shadow-2xl flex flex-col divide-y divide-black/10 dark:divide-white/10 animate-in fade-in slide-in-from-top-4 duration-200"
        onclick={(e) => e.stopPropagation()}
        role="presentation"
      >
        <!-- Nav Links List -->
        <div class="flex flex-col py-2">
          {#each navLinks as item}
            <a
              href={item.href}
              onclick={() => scrollToSection(item.id)}
              class="flex items-center justify-between px-6 py-3 font-mono text-[12px] font-bold tracking-[0.15em] uppercase transition-colors {
                activeNav === item.id
                  ? 'bg-black/5 dark:bg-white/5 text-black dark:text-white'
                  : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
              }"
            >
              <span>{item.label}</span>
              {#if activeNav === item.id}
                <span class="px-2 py-0.5 bg-black text-white dark:bg-white dark:text-black text-[11px]">
                  {t.nav.active}
                </span>
              {/if}
            </a>
          {/each}
          {#if site.resume}
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              class="flex items-center justify-between px-6 py-3 font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
            >
              {t.nav.resume}
            </a>
          {/if}
        </div>

        <!-- Mobile Social & Utilities Strip -->
        <div class="px-6 py-3.5 flex items-center justify-between font-mono text-[11px] tracking-wider text-black/60 dark:text-white/60 bg-black/[0.02] dark:bg-white/[0.02]">
          <div class="flex items-center gap-4">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              class="flex items-center gap-1.5 hover:text-black dark:hover:text-white"
            >
              {@render githubIcon()}
              <span>GITHUB</span>
            </a>
            {#if site.linkedin}
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                class="flex items-center gap-1.5 hover:text-black dark:hover:text-white"
              >
                {@render linkedinIcon()}
                <span>LINKEDIN</span>
              </a>
            {/if}
          </div>

          <LangPicker placement="up" class="-my-2" />
        </div>
      </div>
    </div>
  {/if}

  <!-- MAIN WRAPPER -->
  <div bind:this={pageWrap} class="w-full flex-1 pt-12 relative flex flex-col">
    <!-- Exact 1:1 ArtCraft Scroll Ruler HUD Component (hidden on mobile, cleanly positioned on desktop) -->
    <ScrollRuler />

    <main id="content" tabindex="-1" class="flex flex-col outline-none">
      {@render children()}
    </main>

    <!-- ArtCraft Standard Footer with Logo -->
    <Footer />
  </div>
</div>
