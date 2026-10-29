<script lang="ts">
  import { ArrowUpRight, EnvelopeSimple } from 'phosphor-svelte';
  import { getI18n } from '#lib/i18n/index.ts';
  import { site } from '#lib/site.ts';

  const i18n = getI18n();
  let t = $derived(i18n.t.footer);

  const navHrefs = ['/', '/#projects', '/#work', '/about', '/#proof', '/#contact'];
  const aboutHrefs = ['/about#chronicles', '/about#experience', '/about#curation', '/about#curation'];
  const tools = ['Svelte & SvelteKit', 'React & Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Figma'];

  let connect = $derived(
    [
      { href: site.github, label: 'GitHub', external: true },
      { href: site.linkedin, label: 'LinkedIn', external: true },
      { href: site.resume, label: t.resume, external: true },
      { href: `mailto:${site.email}`, label: t.email, external: false }
    ].filter((l) => l.href)
  );

  const year = new Date().getFullYear();
</script>

{#snippet colTitle(n: string, title: string)}
  <p class="font-mono text-[10px] tracking-widest text-black/55 dark:text-white/55 uppercase font-bold mb-4 pb-2 border-b border-black/5 dark:border-white/5">
    {n} // {title}
  </p>
{/snippet}

{#snippet colFoot(text: string)}
  <div class="mt-6 pt-4 border-t border-black/5 dark:border-white/5 font-mono text-[9px] uppercase text-black/55 dark:text-white/50">
    {text}
  </div>
{/snippet}

<footer class="w-full border-t border-black/10 dark:border-white/10 mt-auto select-none bg-[#FAF9F8] dark:bg-[#050505]">
  <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col">

    <!-- Top Pre-footer HUD Strip -->
    <div class="flex flex-wrap items-center justify-between text-[9px] md:text-[10px] uppercase font-mono tracking-widest text-black/55 dark:text-white/50 py-3 px-6 md:px-10 border-b border-black/10 dark:border-white/10 gap-3">
      <div class="flex items-center gap-3">
        <span class="w-1.5 h-1.5 bg-[#2D81FF] shadow-[0_0_6px_#2D81FF]"></span>
        <span>{t.stripLeft}</span>
      </div>
      <div class="flex items-center gap-4">
        <span>{t.stripAvailable}</span>
        <span>•</span>
        <span>{t.stripTimezone}</span>
      </div>
    </div>

    <!-- Main Grid: Exact ArtCraft Column Ratios (2fr 1fr 1fr 1fr 1fr on desktop) -->
    <div class="grid gap-px bg-black/10 dark:bg-white/10 md:grid-cols-4 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">

      <!-- Brand & Bio Column (2fr) -->
      <div class="bg-[#FAF9F8] dark:bg-[#050505] p-6 sm:p-10 flex flex-col justify-between md:col-span-4 lg:col-span-1">
        <div>
          <!-- Adaptive Logo -->
          <a href="/" class="inline-flex items-center gap-3 group">
            <img
              src="/assets/logo/logo-light.webp"
              alt="HRN Logo"
              width="40"
              height="40"
              class="h-10 w-auto dark:hidden object-contain group-hover:scale-105 transition-transform"
            />
            <img
              src="/assets/logo/logo-dark.webp"
              alt="HRN Logo"
              width="40"
              height="40"
              class="h-10 w-auto hidden dark:block object-contain group-hover:scale-105 transition-transform"
            />
            <div class="flex flex-col">
              <span class="font-mono font-bold tracking-widest text-sm text-black dark:text-white leading-none">
                HARUN
              </span>
              <span class="font-mono text-[9px] tracking-[0.2em] text-black/55 dark:text-white/50 mt-1 uppercase">
                BAHRUDIN
              </span>
            </div>
          </a>

          <p class="mt-5 text-sm text-black/70 dark:text-white/70 leading-relaxed max-w-sm">
            {t.bio}
          </p>
        </div>

        <div class="mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex flex-col gap-2 font-mono text-[10px]">
          <a
            href="mailto:{site.email}"
            class="text-[#1D63D8] dark:text-[#2D81FF] hover:underline flex items-center gap-1.5 py-1.5 font-bold tracking-wider"
          >
            <EnvelopeSimple weight="bold" aria-hidden="true" class="w-3.5 h-3.5" />
            <span>{site.email}</span>
          </a>
          <span class="text-black/55 dark:text-white/50 tracking-wider uppercase">
            {t.based}
          </span>
        </div>
      </div>

      <!-- Nav Column 1: Navigation -->
      <nav aria-label={t.navTitle} class="bg-[#FAF9F8] dark:bg-[#050505] p-6 sm:p-8 flex flex-col justify-between">
        <div>
          {@render colTitle('01', t.navTitle)}
          <ul class="flex flex-col gap-1 font-mono text-[11px] tracking-wider">
            {#each t.navLinks as label, i}
              <li><a class="inline-block py-1 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors" href={navHrefs[i]}>{label}</a></li>
            {/each}
          </ul>
        </div>
        {@render colFoot(t.navFoot)}
      </nav>

      <!-- Nav Column 2: Toolchain -->
      <div class="bg-[#FAF9F8] dark:bg-[#050505] p-6 sm:p-8 flex flex-col justify-between">
        <div>
          {@render colTitle('02', t.toolsTitle)}
          <ul class="flex flex-col gap-2.5 font-mono text-[11px] tracking-wider text-black/70 dark:text-white/70">
            {#each tools as tool}
              <li>{tool}</li>
            {/each}
          </ul>
        </div>
        {@render colFoot(t.toolsFoot)}
      </div>

      <!-- Nav Column 3: About -->
      <nav aria-label={t.aboutTitle} class="bg-[#FAF9F8] dark:bg-[#050505] p-6 sm:p-8 flex flex-col justify-between">
        <div>
          {@render colTitle('03', t.aboutTitle)}
          <ul class="flex flex-col gap-1 font-mono text-[11px] tracking-wider">
            {#each t.aboutLinks as label, i}
              <li><a class="inline-block py-1 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors" href={aboutHrefs[i]}>{label}</a></li>
            {/each}
          </ul>
        </div>
        {@render colFoot(t.aboutFoot)}
      </nav>

      <!-- Nav Column 4: Connect -->
      <nav aria-label={t.connectTitle} class="bg-[#FAF9F8] dark:bg-[#050505] p-6 sm:p-8 flex flex-col justify-between">
        <div>
          {@render colTitle('04', t.connectTitle)}
          <ul class="flex flex-col gap-1 font-mono text-[11px] tracking-wider">
            {#each connect as link}
              <li>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  class="flex items-center justify-between py-1 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors group"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight aria-hidden="true" class="w-3 h-3 text-black/55 dark:text-white/50 group-hover:text-black dark:group-hover:text-white" />
                </a>
              </li>
            {/each}
          </ul>
        </div>
        {@render colFoot(t.connectFoot)}
      </nav>

    </div>

    <!-- Bottom Copyright & Colophon Bar -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-black/10 dark:border-white/10 px-6 sm:px-10 py-4 font-mono text-[10px] tracking-wider uppercase text-black/55 dark:text-white/50">
      <div class="flex items-center gap-2">
        <span>© {year} HARUN BAHRUDIN</span>
        <span>•</span>
        <span>{t.rights}</span>
      </div>
      <span>{t.builtWith}</span>
    </div>

  </div>
</footer>
