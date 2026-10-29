<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { Sparkle, Flag, ChatCircleText, FolderOpen } from 'phosphor-svelte';
  import { getI18n } from '#lib/i18n/index.ts';
  import { site } from '#lib/site.ts';
  import { revealOnScroll, pauseOffscreen } from '#lib/reveal.ts';

  const i18n = getI18n();
  let t = $derived(i18n.t.about);

  let container: HTMLElement;
  let ctx: any;
  let destroyed = false;

  // Order matches t.about.beyond.cards
  const beyondIcons = [Flag, ChatCircleText, FolderOpen, Sparkle];
  // Chapter scene background tints, from the about-hero flux palette
  const sceneTints = [['#3EC6F5', '#B48CFF'], ['#FFC24B', '#FF7A7A'], ['#F37CE0', '#B48CFF'], ['#3EC6F5', '#FFC24B']];

  onMount(() => {
    if (!container) return;
    const stopReveal = revealOnScroll(container, '.about-reveal');
    const stopPause = pauseOffscreen(container);

    // gsap loads after hydration so its 110 KB stays out of the first-paint/LCP path
    import('gsap').then(({ gsap }) => {
      if (destroyed) return;
      ctx = gsap.context(() => {
        gsap.from('.anim-about-hero', {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.1
        });
      }, container);
    });
    return () => { stopReveal(); stopPause(); };
  });

  onDestroy(() => {
    destroyed = true;
    if (ctx) ctx.revert();
  });
</script>

<!-- Section Header (Sticky 1:1 ArtCraft) -->
{#snippet eyebrow(n: string, left: string, right: string)}
  <div class="sticky top-12 z-30 border-y border-black/10 dark:border-white/10 bg-[#FAF9F8]/80 dark:bg-[#050505]/80 backdrop-blur-md transition-colors">
    <div class="flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-black/60 dark:text-white/60 py-3 px-6 md:px-10">
      <span class="flex items-center gap-2"><span class="text-black/55 dark:text-white/50">{n}</span><span>/</span><span>{left}</span></span>
      <span class="hidden sm:inline text-black/55 dark:text-white/50">{right}</span>
    </div>
  </div>
{/snippet}

<!-- Values that take turns in the same slot (one every 2s of a 6s loop) -->
{#snippet cycle(vals: string[], cls: string)}
  <span class="relative inline-block align-bottom w-[7ch] h-[1.4em]">
    {#each vals as v, k}<span class="cyc absolute left-0 top-0 {cls}" style:animation-delay="{k ? k * 2 - 6 : 0}s">{v}</span>{/each}
  </span>
{/snippet}

<!-- Color picker with a cursor that clicks each swatch in turn (swatch centers at 11/31/51px) -->
{#snippet picker(colors: string[])}
  <span class="relative self-start ml-2 sm:ml-3 my-0.5 inline-flex gap-[6px] p-1 rounded-md bg-white dark:bg-[#1c1c1f] border border-black/10 dark:border-white/15 shadow-sm">
    {#each colors as c, k}<i class="pk-sw block w-3.5 h-3.5 rounded-sm" style:background={c} style:animation-delay="{k ? k * 2 - 6 : 0}s"></i>{/each}
    <span class="pk-cursor absolute left-0 top-0 pointer-events-none">
      <i class="pk-ripple absolute -left-2 -top-2 w-4 h-4 rounded-full border-2 border-[#2D81FF]"></i>
      <svg viewBox="0 0 12 16" class="relative w-2.5 h-3.5 sm:w-3 sm:h-4 drop-shadow"><path d="M1 1v12l3-3 2.5 5 2-1-2.5-5h4.5z" fill="#111" stroke="#fff" stroke-width="1" stroke-linejoin="round" /></svg>
    </span>
  </span>
{/snippet}

{#snippet sectionTitle(s: { titlePre: string; titleEm: string; titlePost: string; body: string })}
  <div class="py-14 md:py-20 px-6 md:px-10 border-b border-black/10 dark:border-white/10 about-reveal">
    <h2 class="text-3xl md:text-5xl font-medium tracking-tight text-black dark:text-white">
      {s.titlePre} <span class="font-serif italic font-normal">{s.titleEm}</span>{s.titlePost}
    </h2>
    <p class="mt-4 text-black/60 dark:text-white/60 text-base md:text-lg max-w-xl leading-relaxed">
      {s.body}
    </p>
  </div>
{/snippet}

<div bind:this={container} class="w-full flex flex-col">

  <!-- ABOUT HERO SECTION -->
  <section id="bio" class="w-full relative min-h-[65vh] flex flex-col justify-center pt-10 pb-16 overflow-hidden border-b border-black/10 dark:border-white/10">

    <!-- Background: soft color blobs drifting along the bottom (own CSS, no video asset) -->
    <div class="flux absolute inset-0 pointer-events-none" aria-hidden="true">
      {#each ['#FFC24B', '#FF7A7A', '#F37CE0', '#B48CFF', '#3EC6F5'] as c, i}
        <span style:--c={c} style:--x="{i * 21 - 8}%" style:--delay="{i * -1.7}s" style:--dur="{6 + i * 1.3}s" style:--dir={i % 2 ? 'alternate-reverse' : 'alternate'}></span>
      {/each}
    </div>

    <!-- Background Technical Crosshairs (Hidden on mobile so it never slices through heading text) -->
    <div class="absolute inset-0 pointer-events-none hidden sm:flex justify-between px-8 md:px-16 opacity-15">
      <div class="h-full border-r border-dashed border-black dark:border-white"></div>
      <div class="h-full border-r border-dashed border-black dark:border-white"></div>
    </div>

    <div class="max-w-[1280px] mx-auto w-full px-5 sm:px-8 md:px-10 z-10 flex flex-col items-start">

      <!-- Eyebrow Meta Strip -->
      <div class="anim-about-hero flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
        <span class="px-2 py-0.5 bg-black text-white dark:bg-white dark:text-black font-mono text-[10px] font-bold tracking-widest uppercase">
          {t.eyebrow}
        </span>
        <span class="font-mono text-[9px] sm:text-[10px] text-black/55 dark:text-white/50 tracking-wider uppercase">
          {t.eyebrowMeta}
        </span>
      </div>

      <!-- Main Display Headline -->
      <h1 class="anim-about-hero text-3xl sm:text-5xl md:text-6xl lg:text-[5.2rem] font-bold tracking-[-0.035em] text-black dark:text-white leading-[1.06] max-w-5xl mb-6 sm:mb-8">
        {t.titlePre} <br/>
        <i class="font-serif italic font-normal text-black/55 dark:text-white/50">{t.titleEm}</i>{t.titlePost}
      </h1>

      <!-- Intro Subgrid -->
      <div class="anim-about-hero grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 w-full pt-6 sm:pt-8 border-t border-black/10 dark:border-white/10">
        <div class="lg:col-span-8">
          {#each t.intro as para}
            <p class="text-base sm:text-lg text-black/75 dark:text-white/75 leading-relaxed max-w-3xl mb-4 last:mb-0">
              {para}
            </p>
          {/each}
        </div>

        <div class="lg:col-span-4 flex flex-col justify-end items-start lg:items-end gap-2.5 font-mono text-[11px] tracking-wider uppercase text-black/60 dark:text-white/60">
          <div class="flex items-center gap-2 px-3 py-1.5 border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
            <span class="w-2 h-2 rounded-full bg-emerald-500 motion-safe:animate-pulse"></span>
            <span>{t.openToWork}</span>
          </div>
          <span class="text-[10px] text-black/55 dark:text-white/50">{t.languages}</span>
          <span class="text-[10px] text-black/55 dark:text-white/50">{t.timezone}</span>
        </div>
      </div>

    </div>
  </section>

  <!-- HIGHLIGHTS: user-supplied results, stat + label + one line -->
  <section id="highlights" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col">
      {@render eyebrow('01', t.highlights.title, t.statusFocus)}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border-b border-black/10 dark:border-white/10 bg-black/10 dark:bg-white/10">
        {#each t.highlights.items as h}
          <div class="about-reveal bg-[#FAF9F8] dark:bg-[#050505] p-6 md:p-8 flex flex-col gap-3">
            <span class="h-12 md:h-[3.75rem] flex items-end font-display font-light tracking-tight text-black dark:text-white leading-none {h.stat.length > 4 ? 'text-2xl md:text-3xl' : 'text-5xl md:text-6xl'}">{h.stat}</span>
            <span class="font-mono text-[10px] tracking-widest uppercase text-[#1D63D8] dark:text-[#2D81FF] font-semibold">{h.label}</span>
            <p class="text-sm text-black/70 dark:text-white/70 leading-relaxed">{h.text}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- SECTION 01: STORY -->
  <section id="chronicles" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col">
      {@render eyebrow('02', t.story.eyebrow, t.story.eyebrowRight)}

      <!-- WORKSPACE BANNER -->
      <div class="about-reveal w-full border-b border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] overflow-hidden relative group">
        <div class="flex items-center font-mono text-[9px] sm:text-[10px] tracking-widest uppercase text-black/55 dark:text-white/55 px-6 md:px-10 py-2.5 border-b border-black/10 dark:border-white/10 bg-[#FAF9F8] dark:bg-[#050505]">
          <div class="flex items-center gap-3">
            <span class="w-1.5 h-1.5 bg-[#2D81FF] shadow-[0_0_6px_#2D81FF]"></span>
            <span>{t.story.bannerLabel}</span>
          </div>
        </div>

        <!-- Dynamic Theme Banner Image (Light / Dark Adaptive) -->
        <div class="relative w-full overflow-hidden bg-black/5 dark:bg-white/5">
          <!-- Crosshair corner indicators -->
          <div class="absolute top-2 left-3 z-10 text-[9px] font-mono text-black/55 dark:text-white/50 pointer-events-none select-none">+ 00.00</div>
          <div class="absolute top-2 right-3 z-10 text-[9px] font-mono text-black/55 dark:text-white/50 pointer-events-none select-none">+ 99.99</div>
          <div class="absolute bottom-2 left-3 z-10 text-[9px] font-mono text-black/55 dark:text-white/50 pointer-events-none select-none">HB_{new Date().getFullYear()}</div>

          <!-- lazy: the hidden theme's image is never fetched -->
          <img
            src="/assets/images/banners/harun-banner-light.webp"
            srcset="/assets/images/banners/harun-banner-light-1024.webp 1024w, /assets/images/banners/harun-banner-light-1440.webp 1440w, /assets/images/banners/harun-banner-light.webp 2056w"
            sizes="(min-width: 1280px) 1280px, 100vw"
            alt={t.story.bannerAltLight}
            width="2056"
            height="765"
            class="w-full h-auto max-h-[480px] object-cover object-center dark:hidden transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/assets/images/banners/harun-banner-dark.webp"
            srcset="/assets/images/banners/harun-banner-dark-1024.webp 1024w, /assets/images/banners/harun-banner-dark-1440.webp 1440w, /assets/images/banners/harun-banner-dark.webp 2056w"
            sizes="(min-width: 1280px) 1280px, 100vw"
            alt={t.story.bannerAltDark}
            width="2056"
            height="765"
            class="w-full h-auto max-h-[480px] object-cover object-center hidden dark:block transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            loading="lazy"
            decoding="async"
          />
        </div>

        <!-- Bottom Banner Caption Strip -->
        <div class="flex flex-wrap items-center justify-between font-mono text-[9px] sm:text-[10px] tracking-wider uppercase text-black/55 dark:text-white/50 px-6 md:px-10 py-2.5 border-t border-black/10 dark:border-white/10 bg-[#FAF9F8] dark:bg-[#050505] gap-2">
          <span>{t.story.caption}</span>
          <span class="text-[#1D63D8] dark:text-[#2D81FF] font-semibold">{t.story.roles}</span>
        </div>
      </div>

      {@render sectionTitle(t.story)}

      <!-- Alternating Story Chapters (Zig-zag Storytelling) -->
      <div class="divide-y divide-black/10 dark:divide-white/10 border-b border-black/10 dark:border-white/10">
        {#each t.story.chapters as chapter, idx}
          {@const node = String(idx + 1).padStart(2, '0')}
          <article class="about-reveal grid grid-cols-1 lg:grid-cols-12 gap-0 relative group">

            <!-- Chapter Info Column (Swaps order on desktop for alternating zig-zag rhythm) -->
            <div class="lg:col-span-6 p-6 sm:p-10 border-b lg:border-b-0 {idx % 2 === 1 ? 'lg:order-2 lg:border-l border-black/10 dark:border-white/10' : 'lg:order-1 lg:border-r border-black/10 dark:border-white/10'} flex flex-col justify-between bg-[#FAF9F8] dark:bg-[#050505]">
              <div>
                <div class="flex items-center font-mono text-[11px] tracking-widest uppercase text-black/55 dark:text-white/50 mb-6">
                  <span class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-[#2D81FF] shadow-[0_0_8px_#2D81FF]"></span>
                    {t.story.chapter} {node}
                  </span>
                </div>

                <div class="font-mono text-[10px] tracking-widest text-[#1D63D8] dark:text-[#2D81FF] font-bold uppercase mb-2">
                  {chapter.tag}
                </div>

                <h3 class="text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white mb-6">
                  {chapter.title}
                </h3>

                <p class="text-base sm:text-lg text-black/75 dark:text-white/75 leading-relaxed">
                  {chapter.narrative}
                </p>
              </div>

              <!-- Spec Table for Chapter -->
              <div class="mt-8 pt-6 border-t border-black/10 dark:border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[10px]">
                {#each chapter.specs as spec}
                  <div class="flex flex-col gap-1">
                    <span class="text-black/55 dark:text-white/50 tracking-wider uppercase">{spec.label}</span>
                    <span class="font-bold text-black/80 dark:text-white/80">{spec.val}</span>
                  </div>
                {/each}
              </div>
            </div>

            <!-- Chapter Specimen Box -->
            <div class="lg:col-span-6 p-6 sm:p-10 {idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} bg-black/[0.015] dark:bg-white/[0.015] flex flex-col justify-center">
              <div class="w-full border border-black/10 dark:border-white/10 bg-[#FAF9F8] dark:bg-[#050505] p-5 relative shadow-sm transition-transform duration-300 group-hover:scale-[1.01]">

                <!-- Corner Crosshair Marks (+) -->
                <div class="absolute top-1 left-1 text-[8px] font-mono text-black/20 dark:text-white/20 select-none">+</div>
                <div class="absolute top-1 right-1 text-[8px] font-mono text-black/20 dark:text-white/20 select-none">+</div>
                <div class="absolute bottom-1 left-1 text-[8px] font-mono text-black/20 dark:text-white/20 select-none">+</div>
                <div class="absolute bottom-1 right-1 text-[8px] font-mono text-black/20 dark:text-white/20 select-none">+</div>

                <div class="flex items-center justify-between font-mono text-[9px] tracking-widest uppercase text-black/55 dark:text-white/55 pb-3 border-b border-black/5 dark:border-white/5 mb-4">
                  <span>{chapter.specimenTitle}</span>
                  <span>CH_{node}</span>
                </div>

                <!-- Live mini-scene per chapter: what that stage of learning looked like -->
                <div class="scene relative w-full aspect-[16/10] border border-black/10 dark:border-white/10 overflow-hidden" style:--a={sceneTints[idx][0]} style:--b={sceneTints[idx][1]} aria-hidden="true">
                  {#if idx === 0}
                    <!-- DevTools: the cursor picks a color, the h1 on the page follows -->
                    <div class="absolute inset-3 sm:inset-5 grid grid-cols-[1.1fr_1fr] gap-2 sm:gap-3">
                      <div class="win flex flex-col">
                        <div class="flex items-center gap-1 px-2.5 py-1.5 border-b border-black/10 dark:border-white/10">
                          {#each ['#FF5F57', '#FEBC2E', '#28C840'] as dot}<i class="w-1.5 h-1.5 rounded-full" style:background={dot}></i>{/each}
                          <span class="ml-1.5 px-1.5 py-px rounded-full bg-black/5 dark:bg-white/10 font-mono text-[7px] sm:text-[8px] text-black/55 dark:text-white/55">localhost:3000</span>
                        </div>
                        <div class="flex-1 p-2.5 sm:p-4 flex flex-col gap-1.5 sm:gap-2 justify-center">
                          <span class="relative self-start mt-3">
                            <span class="dv-heading block font-bold text-sm sm:text-xl tracking-tight">Hello, web.</span>
                            <span class="dv-inspect absolute -inset-1 border border-[#2D81FF] bg-[#2D81FF]/10"></span>
                            <span class="absolute left-0 -top-4 sm:-top-5 px-1 bg-[#1D63D8] text-white font-mono text-[6px] sm:text-[8px] whitespace-nowrap">h1 · 248 × 32</span>
                          </span>
                          <i class="block h-1 sm:h-1.5 w-full rounded-full bg-black/10 dark:bg-white/15"></i>
                          <i class="block h-1 sm:h-1.5 w-4/5 rounded-full bg-black/10 dark:bg-white/15"></i>
                          <span class="dv-btn self-start mt-1 px-2 py-0.5 sm:py-1 rounded text-white text-[7px] sm:text-[9px] font-medium">Learn more</span>
                        </div>
                      </div>
                      <div class="win flex flex-col font-mono text-[7px] sm:text-[10px] leading-relaxed text-black/80 dark:text-white/80">
                        <div class="px-2.5 py-1.5 border-b border-black/10 dark:border-white/10 text-black/55 dark:text-white/50">Elements · <b class="text-black dark:text-white font-medium">Styles</b></div>
                        <div class="flex-1 p-2 sm:p-3 flex flex-col justify-center">
                          <span><span class="text-[#7C3AED]">h1</span> {'{'}</span>
                          <span class="pl-2 sm:pl-3 flex items-center gap-1">color: <i class="dv-swatch inline-block w-2 h-2 rounded-sm"></i>{@render cycle(['#111111', '#2D81FF', '#F97316'], 'text-[#1D63D8] dark:text-[#2D81FF]')}</span>
                          {@render picker(['var(--ink)', '#2D81FF', '#F97316'])}
                          <span class="pl-2 sm:pl-3">font-size: <span class="text-[#F97316]">28px</span>;</span>
                          <span>{'}'}</span>
                        </div>
                      </div>
                    </div>
                  {:else if idx === 1}
                    <!-- The page gets built one rendering step at a time, then splits into compositor layers -->
                    <div class="absolute inset-3 sm:inset-5 flex flex-col gap-2 sm:gap-3">
                      <div class="flex items-center">
                        {#each ['Parse', 'Style', 'Layout', 'Paint', 'Composite'] as step, k}
                          {#if k}<i class="flex-1 h-px min-w-1 bg-black/15 dark:bg-white/20"></i>{/if}
                          <span class="pipe-step px-1 sm:px-2 py-0.5 sm:py-1 rounded-full border font-mono text-[6px] sm:text-[9px] uppercase tracking-wider" style:animation-delay="{k * 1.2 - 6}s">{step}</span>
                        {/each}
                      </div>
                      <div class="relative flex-1 [perspective:800px]">
                        <div class="bp-page win absolute inset-y-0 left-[14%] right-[14%] p-1.5 sm:p-2.5 grid grid-cols-2 grid-rows-[1fr_2.4fr_2fr] gap-1 sm:gap-1.5">
                          {#each [['col-span-2', '30%', '140%', '8deg', '50px', 'bg-black/80 dark:bg-white/80'], ['col-span-2', '-18%', '50%', '-5deg', '25px', 'bg-gradient-to-br from-[#FFC24B] to-[#FF7A7A]'], ['', '35%', '-70%', '12deg', '70px', 'bg-[#B48CFF]'], ['', '-45%', '-100%', '-10deg', '70px', 'bg-[#3EC6F5]']] as [span, dx, dy, r, z, fill]}
                            <div class="bp-el relative border border-dashed border-black/30 dark:border-white/35 rounded-sm {span}" style:--dx={dx} style:--dy={dy} style:--r={r} style:--z={z}>
                              <span class="bp-fill absolute inset-0 rounded-sm {fill}"></span>
                              <span class="bp-txt relative flex flex-col gap-0.5 sm:gap-1 p-1 sm:p-1.5">
                                <i class="block h-0.5 sm:h-1 w-1/2 rounded-full bg-black/40 dark:bg-white/50 mix-blend-difference"></i>
                                <i class="block h-0.5 sm:h-1 w-1/3 rounded-full bg-black/25 dark:bg-white/30"></i>
                              </span>
                            </div>
                          {/each}
                        </div>
                      </div>
                      <div class="flex justify-between font-mono text-[6px] sm:text-[9px] uppercase tracking-widest text-black/60 dark:text-white/55">
                        <span>Frame budget · 16.7 ms</span><span class="text-[#10B981] font-bold">60 fps</span>
                      </div>
                    </div>
                  {:else if idx === 2}
                    <!-- Design tokens: the cursor picks a new primary color, the whole mini app follows -->
                    <div class="absolute inset-3 sm:inset-5 grid grid-cols-[1fr_1.05fr] gap-2 sm:gap-3">
                      <div class="win flex flex-col font-mono text-[7px] sm:text-[10px] leading-relaxed text-black/80 dark:text-white/80">
                        <div class="px-2.5 py-1.5 border-b border-black/10 dark:border-white/10 text-black/55 dark:text-white/50">Variables · <b class="text-black dark:text-white font-medium">tokens</b></div>
                        <div class="flex-1 p-2 sm:p-3 flex flex-col justify-center gap-0.5 sm:gap-1">
                          <span class="flex items-center gap-1 whitespace-nowrap">primary <i class="tk-swatch inline-block w-2 h-2 rounded-sm shrink-0"></i>{@render cycle(['#1D63D8', '#6D28D9', '#047857'], 'text-[#1D63D8] dark:text-[#2D81FF]')}</span>
                          {@render picker(['#1D63D8', '#6D28D9', '#047857'])}
                          <span class="flex items-center gap-1 whitespace-nowrap">radius {@render cycle(['4px', '12px', '999px'], 'text-[#F97316]')}</span>
                          <span class="whitespace-nowrap">space <span class="text-[#F97316]">8px</span></span>
                        </div>
                      </div>
                      <div class="win p-2 sm:p-3 flex flex-col justify-center gap-1.5 sm:gap-2.5">
                        <span class="flex items-center gap-1.5">
                          <i class="tk-ring block w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 bg-gradient-to-br from-[#FFC24B] to-[#F37CE0]"></i>
                          <span class="flex flex-col gap-0.5"><i class="block h-1 w-10 sm:w-14 rounded-full bg-black/70 dark:bg-white/80"></i><i class="block h-1 w-6 sm:w-9 rounded-full bg-black/20 dark:bg-white/25"></i></span>
                        </span>
                        <span class="block h-1 sm:h-1.5 w-full rounded-full bg-black/10 dark:bg-white/15 overflow-hidden"><i class="tk-fill tk-bar block h-full w-2/3"></i></span>
                        <span class="flex items-center gap-1.5">
                          <span class="tk-fill tk-round px-2 sm:px-3 py-1 text-white font-medium text-[7px] sm:text-[10px]">Get started</span>
                          <span class="tk-ring tk-round px-1.5 sm:px-2 py-0.5 sm:py-1 border font-medium text-[7px] sm:text-[9px]">Pro</span>
                        </span>
                        <span class="flex items-center gap-1.5 text-[7px] sm:text-[9px] text-black/70 dark:text-white/70">
                          <span class="tk-fill tk-round relative w-5 h-3 sm:w-6 sm:h-3.5 shrink-0"><i class="absolute right-0.5 top-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white"></i></span>Notifications
                        </span>
                      </div>
                    </div>
                  {:else}
                    <!-- Design and code in sync: a beam runs from the selected layer to its line of code -->
                    <div class="absolute inset-3 sm:inset-5 grid grid-cols-[1fr_1.5rem_1.25fr] sm:grid-cols-[1fr_3rem_1.25fr]">
                      <div class="win flex flex-col">
                        <div class="h-6 shrink-0 px-2.5 flex items-center border-b border-black/10 dark:border-white/10 font-mono text-[7px] sm:text-[9px] text-black/55 dark:text-white/50">Figma · Card</div>
                        <div class="flex-1 grid grid-rows-[1.6fr_1fr_1fr] items-center gap-1 px-3 sm:px-4 py-2">
                          <span class="sync-box block h-full max-h-14 rounded-sm bg-gradient-to-br from-[#B48CFF] to-[#3EC6F5]" style:animation-delay="-4.8s"></span>
                          <span class="sync-box block h-2 sm:h-2.5 w-3/4 rounded-full bg-black/70 dark:bg-white/80" style:animation-delay="-3.2s"></span>
                          <span class="sync-box justify-self-start px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#1D63D8] text-white text-[7px] sm:text-[9px] font-medium" style:animation-delay="-1.6s">Open</span>
                        </div>
                      </div>
                      <div class="flex flex-col">
                        <div class="h-6 shrink-0"></div>
                        <div class="flex-1 grid grid-rows-[1.6fr_1fr_1fr] py-2">
                          {#each [-4.8, -3.2, -1.6] as d}
                            <span class="relative flex items-center">
                              <i class="beam-line block w-full h-px" style:animation-delay="{d}s"></i>
                              <span class="beam-run absolute inset-0 flex items-center" style:animation-delay="{d}s"><i class="block w-1.5 h-1.5 -ml-0.5 rounded-full bg-[#2D81FF] shadow-[0_0_8px_2px_rgba(45,129,255,0.7)]"></i></span>
                            </span>
                          {/each}
                        </div>
                      </div>
                      <div class="win flex flex-col font-mono text-[7px] sm:text-[10px] text-black/80 dark:text-white/80 whitespace-nowrap overflow-hidden">
                        <div class="h-6 shrink-0 px-2.5 flex items-center border-b border-black/10 dark:border-white/10 text-black/55 dark:text-white/50">Card.svelte</div>
                        <div class="flex-1 grid grid-rows-[1.6fr_1fr_1fr] items-center py-2">
                          <span class="sync-line px-2" style:animation-delay="-4.8s"><span class="text-[#7C3AED]">&lt;img</span> src={'{cover}'} /&gt;</span>
                          <span class="sync-line px-2" style:animation-delay="-3.2s"><span class="text-[#7C3AED]">&lt;h3&gt;</span>{'{title}'}<span class="text-[#7C3AED]">&lt;/h3&gt;</span></span>
                          <span class="sync-line px-2" style:animation-delay="-1.6s"><span class="text-[#7C3AED]">&lt;Button&gt;</span>Open<span class="text-[#7C3AED]">&lt;/Button&gt;</span></span>
                        </div>
                      </div>
                    </div>
                  {/if}
                </div>
                <p class="mt-3 font-mono text-[10px] tracking-widest uppercase text-black/60 dark:text-white/55">{chapter.specimenSubtitle}</p>
              </div>
            </div>

          </article>
        {/each}
      </div>

    </div>
  </section>

  <!-- SECTION 02: EXPERIENCE -->
  <section id="experience" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col">
      {@render eyebrow('03', t.experience.eyebrow, t.experience.eyebrowRight)}
      {@render sectionTitle(t.experience)}

      <div class="divide-y divide-black/10 dark:divide-white/10 border-b border-black/10 dark:border-white/10">
        {#each t.experience.milestones as job}
          <div class="about-reveal grid grid-cols-1 md:grid-cols-12 gap-0 p-6 md:p-10 hover:bg-black/[0.015] dark:hover:bg-white/[0.015] transition-colors relative">
            <div class="md:col-span-3 mb-6 md:mb-0 flex flex-col justify-start">
              <span class="font-mono text-[12px] font-bold tracking-wider text-black dark:text-white">
                {job.period}
              </span>
              <span class="mt-2 font-mono text-[10px] tracking-widest text-[#1D63D8] dark:text-[#2D81FF] font-semibold uppercase">
                {job.tag}
              </span>
            </div>

            <div class="md:col-span-4 mb-6 md:mb-0 pr-6">
              <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white">
                {job.role}
              </h3>
              <p class="font-mono text-[12px] text-black/60 dark:text-white/60 mt-1">
                {job.company}
              </p>
            </div>

            <div class="md:col-span-5 flex flex-col gap-2.5">
              {#each job.deliverables as bullet}
                <div class="flex items-start gap-2.5 text-sm text-black/75 dark:text-white/75 leading-relaxed">
                  <span class="text-[#1D63D8] dark:text-[#2D81FF] font-mono mt-0.5 select-none font-bold">›</span>
                  <span>{bullet}</span>
                </div>
              {/each}
            </div>
          </div>
        {:else}
          <p class="p-6 md:p-10 font-mono text-[11px] tracking-wider uppercase text-black/55 dark:text-white/55">
            {t.experience.empty}
          </p>
        {/each}
      </div>

    </div>
  </section>

  <!-- SECTION 03: BEYOND CODE -->
  <section id="curation" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col">
      {@render eyebrow('04', t.beyond.eyebrow, t.beyond.eyebrowRight)}
      {@render sectionTitle(t.beyond)}

      <div class="grid grid-cols-1 md:grid-cols-2 gap-px border-b border-black/10 dark:border-white/10 bg-black/10 dark:bg-white/10">
        {#each t.beyond.cards as card, i}
          {@const Icon = beyondIcons[i]}
          <article class="p-8 bg-[#FAF9F8] dark:bg-[#050505] flex flex-col justify-between about-reveal">
            <div>
              <div class="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-black/55 dark:text-white/50 mb-6">
                <span>{card.label}</span>
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div class="flex items-center gap-3 mb-4">
                <Icon aria-hidden="true" class="w-6 h-6 text-[#1D63D8] dark:text-[#2D81FF]" />
                <h3 class="text-xl font-bold tracking-tight text-black dark:text-white">{card.title}</h3>
              </div>
              {#if 'items' in card}
                <ul class="text-black/70 dark:text-white/70 leading-relaxed mb-6 space-y-1.5 font-mono text-[11px]">
                  {#each card.items as item}
                    <li class="flex items-center gap-2">
                      <span class="w-1.5 h-1.5 bg-[#2D81FF] shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  {/each}
                </ul>
              {:else}
                <p class="text-sm text-black/70 dark:text-white/70 leading-relaxed mb-6">
                  {card.body}
                </p>
              {/if}
            </div>
            <div class="pt-4 border-t border-black/10 dark:border-white/10 font-mono text-[10px] tracking-wider uppercase text-black/55 dark:text-white/50">
              {card.foot}
            </div>
          </article>
        {/each}
      </div>

    </div>
  </section>

  <!-- SECTION 04: CALL TO ACTION -->
  <section id="collab" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col items-center justify-center py-24 md:py-32 px-6 text-center about-reveal border-b border-black/10 dark:border-white/10">
      <div class="text-[10px] uppercase font-mono tracking-widest text-black/55 dark:text-white/50 mb-6">
        {t.collab.eyebrow}
      </div>

      <h2 class="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-black dark:text-white">
        {t.collab.titlePre} <span class="font-serif italic font-normal">{t.collab.titleEm}</span>{t.collab.titlePost}
      </h2>
      <p class="text-black/60 dark:text-white/60 mb-10 max-w-md text-base leading-relaxed">
        {t.collab.body}
      </p>

      <div class="flex flex-wrap items-center justify-center gap-3">
        <a href="mailto:{site.email}" class="px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-[11px] font-mono font-bold uppercase tracking-[0.12em] hover:opacity-85 transition-opacity">
          {t.collab.email}
        </a>
        <a href="/" class="group relative overflow-hidden px-6 py-3 border border-black/20 dark:border-white/20 text-black dark:text-white text-[11px] font-mono font-bold uppercase tracking-[0.12em] transition-colors duration-500 hover:border-transparent hover:text-white hover:bg-zinc-900 dark:hover:bg-transparent focus-visible:border-transparent focus-visible:text-white focus-visible:bg-zinc-900 dark:focus-visible:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D81FF]">
          <!-- Same colorful glow as the hero CTA, revealed on hover -->
          <span class="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 blur transition-opacity duration-500 group-hover:opacity-80 group-focus-visible:opacity-80" aria-hidden="true"></span>
          <span class="relative">{t.collab.back}</span>
        </a>
      </div>
    </div>
  </section>

</div>

<style>
  /* radial-gradient instead of filter: blur, so drifting stays cheap */
  .flux span {
    position: absolute;
    left: var(--x);
    bottom: -22%;
    width: 36%;
    aspect-ratio: 5 / 2;
    border-radius: 50%;
    background: radial-gradient(closest-side, var(--c), transparent);
    opacity: 0.7;
    animation: flux-drift var(--dur) ease-in-out var(--delay) infinite var(--dir);
  }
  :global(.dark) .flux span { opacity: 0.6; }
  @keyframes flux-drift {
    0% { transform: translate(-25%, 0) scale(1); opacity: 0.55; }
    33% { transform: translate(20%, -12%) scale(1.15); opacity: 0.85; }
    66% { transform: translate(38%, 4%) scale(0.88); opacity: 0.6; }
    100% { transform: translate(-12%, -6%) scale(1.08); opacity: 0.8; }
  }
  /* Chapter scenes. Shared loops are split into equal turns; negative delays offset each element's turn. */
  .scene {
    --ink: #111; --base: #F6F3EF; --muted: rgb(0 0 0 / 0.6); --line: rgb(0 0 0 / 0.15); --mix: 45%;
    background:
      radial-gradient(85% 95% at 0% 0%, color-mix(in srgb, var(--a) var(--mix), transparent), transparent 70%),
      radial-gradient(85% 95% at 100% 100%, color-mix(in srgb, var(--b) var(--mix), transparent), transparent 70%),
      var(--base);
  }
  :global(.dark) .scene { --ink: #fff; --base: #0A0A0C; --muted: rgb(255 255 255 / 0.55); --line: rgb(255 255 255 / 0.18); --mix: 28%; }
  .win {
    border-radius: 8px;
    border: 1px solid rgb(0 0 0 / 0.08);
    background: rgb(255 255 255 / 0.88);
    box-shadow: 0 18px 36px -18px rgb(30 20 60 / 0.35);
  }
  :global(.dark) .win { border-color: rgb(255 255 255 / 0.1); background: rgb(18 18 22 / 0.88); box-shadow: 0 18px 36px -18px rgb(0 0 0 / 0.8); }

  .cyc { opacity: 0; animation: cyc 6s cubic-bezier(0.23, 1, 0.32, 1) infinite both; }
  .cyc:first-child { opacity: 1; }
  @keyframes cyc {
    0% { opacity: 0; transform: translateY(45%); }
    4%, 30% { opacity: 1; transform: none; }
    33.3%, 100% { opacity: 0; transform: translateY(-45%); }
  }

  /* picker: cursor glides to the next swatch just before each color change, ripple on arrival */
  .pk-cursor { transform: translate(11px, 11px); animation: pk-cursor 6s cubic-bezier(0.77, 0, 0.175, 1) infinite; }
  @keyframes pk-cursor {
    0%, 27% { transform: translate(11px, 11px); }
    33.3%, 60% { transform: translate(31px, 11px); }
    66.6%, 94% { transform: translate(51px, 11px); }
    100% { transform: translate(11px, 11px); }
  }
  .pk-ripple { opacity: 0; animation: pk-ripple 2s ease-out infinite; }
  @keyframes pk-ripple { 0% { opacity: 0.9; transform: scale(0.3); } 50%, 100% { opacity: 0; transform: scale(1.6); } }
  .pk-sw { outline: 2px solid transparent; outline-offset: 1px; animation: pk-on 6s infinite; }
  .pk-sw:first-child { outline-color: #2D81FF; }
  @keyframes pk-on { 0%, 30% { outline-color: #2D81FF; } 33.3%, 100% { outline-color: transparent; } }

  .dv-heading { color: var(--ink); animation: dv-color 6s infinite; }
  .dv-swatch, .dv-btn { background: var(--ink); animation: dv-fill 6s infinite; }
  .dv-btn { color: var(--base); }
  @keyframes dv-color {
    0%, 30% { color: var(--ink); } 33.3%, 63% { color: #2D81FF; } 66.6%, 97% { color: #F97316; } 100% { color: var(--ink); }
  }
  @keyframes dv-fill {
    0%, 30% { background: var(--ink); } 33.3%, 63% { background: #2D81FF; } 66.6%, 97% { background: #F97316; } 100% { background: var(--ink); }
  }
  .dv-inspect { animation: dv-pulse 2s ease-in-out infinite; }
  @keyframes dv-pulse { 50% { opacity: 0.35; } }

  /* build the page: Parse (outlines) > Style (text) > Layout (snap into place) > Paint (fills) > Composite (layers lift) */
  .pipe-step { --chip: rgb(255 255 255 / 0.7); background: var(--chip); color: var(--muted); border-color: var(--line); animation: pipe-lit 6s infinite; }
  :global(.dark) .pipe-step { --chip: rgb(0 0 0 / 0.4); }
  @keyframes pipe-lit {
    0%, 18% { background: #2D81FF; color: #fff; border-color: #2D81FF; }
    20%, 100% { background: var(--chip); color: var(--muted); border-color: var(--line); }
  }
  .bp-page { transform-style: preserve-3d; animation: bp-page 6s cubic-bezier(0.77, 0, 0.175, 1) infinite; }
  @keyframes bp-page {
    0%, 80% { transform: none; }
    88%, 95% { transform: rotateX(48deg) rotateZ(-28deg) scale(0.82); }
    100% { transform: none; }
  }
  .bp-el { animation: bp-layout 6s cubic-bezier(0.23, 1, 0.32, 1) infinite, bp-in 6s linear infinite; }
  @keyframes bp-layout {
    0%, 38% { transform: translate(var(--dx), var(--dy)) rotate(var(--r)); }
    52%, 80% { transform: none; }
    88%, 95% { transform: translateZ(var(--z)); }
    100% { transform: translate(var(--dx), var(--dy)) rotate(var(--r)); }
  }
  @keyframes bp-in { 0% { opacity: 0; } 6%, 94% { opacity: 1; } 100% { opacity: 0; } }
  .bp-txt { animation: bp-txt 6s infinite; }
  @keyframes bp-txt { 0%, 20% { opacity: 0; } 26%, 100% { opacity: 1; } }
  .bp-fill { animation: bp-fill 6s infinite; }
  @keyframes bp-fill { 0%, 60% { opacity: 0; } 66%, 100% { opacity: 1; } }

  /* fill shades keep white label text at 4.5:1 or better */
  .tk-swatch, .tk-fill { background: #1D63D8; animation: tk-fill 6s infinite; }
  .tk-ring { color: #2D81FF; border-color: #2D81FF; animation: tk-ring 6s infinite; }
  .tk-round { border-radius: 4px; animation-name: tk-fill, tk-round; animation-duration: 6s; animation-iteration-count: infinite; }
  .tk-ring.tk-round { animation-name: tk-ring, tk-round; }
  .tk-bar { transform-origin: left; animation-name: tk-fill, tk-bar; animation-duration: 6s; animation-iteration-count: infinite; animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1); }
  @keyframes tk-fill { 0%, 30% { background: #1D63D8; } 33.3%, 63% { background: #6D28D9; } 66.6%, 97% { background: #047857; } 100% { background: #1D63D8; } }
  @keyframes tk-ring {
    0%, 30% { color: #2D81FF; border-color: #2D81FF; } 33.3%, 63% { color: #7C3AED; border-color: #7C3AED; }
    66.6%, 97% { color: #10B981; border-color: #10B981; } 100% { color: #2D81FF; border-color: #2D81FF; }
  }
  @keyframes tk-round { 0%, 30% { border-radius: 4px; } 33.3%, 63% { border-radius: 12px; } 66.6%, 97% { border-radius: 999px; } 100% { border-radius: 4px; } }
  @keyframes tk-bar { 0%, 30% { transform: scaleX(0.5); } 33.3%, 63% { transform: scaleX(0.75); } 66.6%, 97% { transform: scaleX(1); } 100% { transform: scaleX(0.5); } }

  /* design and code: the active pair glows and a dot runs along the beam between them */
  .sync-box { outline: 1.5px solid transparent; outline-offset: 3px; animation: sync-box 4.8s infinite; }
  .sync-line { border-left: 2px solid transparent; animation: sync-line 4.8s infinite; }
  @keyframes sync-box { 0%, 30% { outline-color: #2D81FF; } 33.3%, 100% { outline-color: transparent; } }
  @keyframes sync-line {
    0%, 30% { background: rgb(45 129 255 / 0.14); border-left-color: #2D81FF; }
    33.3%, 100% { background: transparent; border-left-color: transparent; }
  }
  .beam-line { background: var(--line); animation: beam-line 4.8s infinite; }
  @keyframes beam-line { 0%, 30% { background: #2D81FF; } 33.3%, 100% { background: var(--line); } }
  .beam-run { opacity: 0; animation: beam-run 4.8s cubic-bezier(0.77, 0, 0.175, 1) infinite; }
  @keyframes beam-run {
    0% { opacity: 1; transform: translateX(0); }
    26%, 30% { opacity: 1; transform: translateX(100%); }
    33.3%, 100% { opacity: 0; transform: translateX(100%); }
  }

  @media (prefers-reduced-motion: reduce) {
    .flux span, .cyc, .pk-cursor, .pk-ripple, .pk-sw, .dv-heading, .dv-swatch, .dv-btn, .dv-inspect, .pipe-step,
    .bp-page, .bp-el, .bp-txt, .bp-fill, .tk-swatch, .tk-fill, .tk-ring, .tk-round, .tk-bar,
    .sync-box, .sync-line, .beam-line, .beam-run { animation: none; }
  }
</style>
