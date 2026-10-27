<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { Terminal, Cpu, Books, Sparkle, Flag, ChatCircleText, FolderOpen } from 'phosphor-svelte';
  import { getI18n } from '#lib/i18n/index.ts';
  import { site } from '#lib/site.ts';

  const i18n = getI18n();
  let t = $derived(i18n.t.about);

  let container: HTMLElement;
  let ctx: any;

  // Order matches t.about.story.chapters and t.about.beyond.cards
  const chapterIcons = [Terminal, Cpu, Sparkle, Books];
  const beyondIcons = [Flag, ChatCircleText, FolderOpen, Sparkle];

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!container) return;

    ctx = gsap.context(() => {
      gsap.from('.anim-about-hero', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.1
      });

      gsap.utils.toArray('.about-reveal').forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%'
          },
          y: 24,
          opacity: 0,
          duration: 0.75,
          ease: 'power2.out'
        });
      });
    }, container);
  });

  onDestroy(() => {
    if (ctx) ctx.revert();
  });
</script>

<svelte:head>
  <title>{i18n.t.meta.aboutTitle}</title>
</svelte:head>

<!-- Section Header (Sticky 1:1 ArtCraft) -->
{#snippet eyebrow(n: string, left: string, right: string)}
  <div class="sticky top-12 z-30 border-y border-black/10 dark:border-white/10 bg-[#FAF9F8]/80 dark:bg-[#050505]/80 backdrop-blur-md transition-colors">
    <div class="flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-black/60 dark:text-white/60 py-3 px-6 md:px-10">
      <span class="flex items-center gap-2"><span class="text-black/35 dark:text-white/35">{n}</span><span>/</span><span>{left}</span></span>
      <span class="hidden sm:inline text-black/40 dark:text-white/40">{right}</span>
    </div>
  </div>
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
        <span class="font-mono text-[9px] sm:text-[10px] text-black/50 dark:text-white/50 tracking-wider uppercase">
          {t.eyebrowMeta}
        </span>
      </div>

      <!-- Main Display Headline -->
      <h1 class="anim-about-hero text-3xl sm:text-5xl md:text-6xl lg:text-[5.2rem] font-bold tracking-[-0.035em] text-black dark:text-white leading-[1.06] max-w-5xl mb-6 sm:mb-8">
        {t.titlePre} <br/>
        <i class="font-serif italic font-normal text-black/50 dark:text-white/50">{t.titleEm}</i>{t.titlePost}
      </h1>

      <!-- Intro Subgrid -->
      <div class="anim-about-hero grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 w-full pt-6 sm:pt-8 border-t border-black/10 dark:border-white/10">
        <div class="md:col-span-8">
          <p class="text-base sm:text-lg text-black/75 dark:text-white/75 leading-relaxed max-w-3xl">
            {t.intro}
          </p>
        </div>

        <div class="md:col-span-4 flex flex-col justify-end items-start md:items-end gap-2.5 font-mono text-[11px] tracking-wider uppercase text-black/60 dark:text-white/60">
          <div class="flex items-center gap-2 px-3 py-1.5 border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
            <span class="w-2 h-2 rounded-full bg-emerald-500 motion-safe:animate-pulse"></span>
            <span>{t.openToWork}</span>
          </div>
          <span class="text-[10px] text-black/40 dark:text-white/40">{t.timezone}</span>
        </div>
      </div>

    </div>
  </section>

  <!-- STATUS BAR -->
  <div class="w-full border-b border-black/10 dark:border-white/10">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between text-[9px] md:text-[11px] uppercase font-mono tracking-widest text-black/50 dark:text-white/50 py-3 px-6 md:px-10 gap-3">
      <div class="flex items-center gap-3">
        <span>{t.statusLeft}</span>
        <span>•</span>
        <span>{t.statusFocus}</span>
      </div>
      <span>{t.statusRight}</span>
    </div>
  </div>

  <!-- SECTION 01: STORY -->
  <section id="chronicles" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col">
      {@render eyebrow('01', t.story.eyebrow, t.story.eyebrowRight)}

      <!-- WORKSPACE BANNER -->
      <div class="about-reveal w-full border-b border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] overflow-hidden relative group">
        <div class="flex items-center font-mono text-[9px] sm:text-[10px] tracking-widest uppercase text-black/45 dark:text-white/45 px-6 md:px-10 py-2.5 border-b border-black/10 dark:border-white/10 bg-[#FAF9F8] dark:bg-[#050505]">
          <div class="flex items-center gap-3">
            <span class="w-1.5 h-1.5 bg-[#2D81FF] shadow-[0_0_6px_#2D81FF]"></span>
            <span>{t.story.bannerLabel}</span>
          </div>
        </div>

        <!-- Dynamic Theme Banner Image (Light / Dark Adaptive) -->
        <div class="relative w-full overflow-hidden bg-black/5 dark:bg-white/5">
          <!-- Crosshair corner indicators -->
          <div class="absolute top-2 left-3 z-10 text-[9px] font-mono text-black/40 dark:text-white/40 pointer-events-none select-none">+ 00.00</div>
          <div class="absolute top-2 right-3 z-10 text-[9px] font-mono text-black/40 dark:text-white/40 pointer-events-none select-none">+ 99.99</div>
          <div class="absolute bottom-2 left-3 z-10 text-[9px] font-mono text-black/40 dark:text-white/40 pointer-events-none select-none">HB_{new Date().getFullYear()}</div>

          <img
            src="/assets/images/banners/harun-banner-light.png"
            alt={t.story.bannerAltLight}
            class="w-full h-auto max-h-[480px] object-cover object-center dark:hidden transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            loading="eager"
          />
          <img
            src="/assets/images/banners/harun-banner-dark.png"
            alt={t.story.bannerAltDark}
            class="w-full h-auto max-h-[480px] object-cover object-center hidden dark:block transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            loading="eager"
          />
        </div>

        <!-- Bottom Banner Caption Strip -->
        <div class="flex flex-wrap items-center justify-between font-mono text-[9px] sm:text-[10px] tracking-wider uppercase text-black/50 dark:text-white/50 px-6 md:px-10 py-2.5 border-t border-black/10 dark:border-white/10 bg-[#FAF9F8] dark:bg-[#050505] gap-2">
          <span>{t.story.caption}</span>
          <span class="text-[#2D81FF] font-semibold">{t.story.roles}</span>
        </div>
      </div>

      {@render sectionTitle(t.story)}

      <!-- Alternating Story Chapters (Zig-zag Storytelling) -->
      <div class="divide-y divide-black/10 dark:divide-white/10 border-b border-black/10 dark:border-white/10">
        {#each t.story.chapters as chapter, idx}
          {@const Icon = chapterIcons[idx]}
          {@const node = String(idx + 1).padStart(2, '0')}
          <article class="about-reveal grid grid-cols-1 lg:grid-cols-12 gap-0 relative group">

            <!-- Chapter Info Column (Swaps order on desktop for alternating zig-zag rhythm) -->
            <div class="lg:col-span-6 p-6 sm:p-10 border-b lg:border-b-0 {idx % 2 === 1 ? 'lg:order-2 lg:border-l border-black/10 dark:border-white/10' : 'lg:order-1 lg:border-r border-black/10 dark:border-white/10'} flex flex-col justify-between bg-[#FAF9F8] dark:bg-[#050505]">
              <div>
                <div class="flex items-center font-mono text-[11px] tracking-widest uppercase text-black/50 dark:text-white/50 mb-6">
                  <span class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-[#2D81FF] shadow-[0_0_8px_#2D81FF]"></span>
                    {t.story.chapter} {node}
                  </span>
                </div>

                <div class="font-mono text-[10px] tracking-widest text-[#2D81FF] font-bold uppercase mb-2">
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
                    <span class="text-black/40 dark:text-white/40 tracking-wider uppercase">{spec.label}</span>
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

                <div class="flex items-center justify-between font-mono text-[9px] tracking-widest uppercase text-black/45 dark:text-white/45 pb-3 border-b border-black/5 dark:border-white/5 mb-4">
                  <span>{chapter.specimenTitle}</span>
                  <span>CH_{node}</span>
                </div>

                <div class="w-full aspect-[16/10] bg-black/[0.02] dark:bg-white/[0.02] border border-dashed border-black/15 dark:border-white/15 flex flex-col items-center justify-center relative overflow-hidden p-6 text-center">
                  <div class="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none"></div>

                  <div class="relative z-10 flex flex-col items-center gap-3">
                    <div class="w-12 h-12 rounded-sm border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center">
                      <Icon class="w-6 h-6 text-[#2D81FF]" />
                    </div>
                    <span class="font-mono text-[11px] font-bold tracking-wider text-black dark:text-white uppercase">
                      {chapter.specimenSubtitle}
                    </span>
                  </div>
                </div>
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
      {@render eyebrow('02', t.experience.eyebrow, t.experience.eyebrowRight)}
      {@render sectionTitle(t.experience)}

      <div class="divide-y divide-black/10 dark:divide-white/10 border-b border-black/10 dark:border-white/10">
        {#each t.experience.milestones as job}
          <div class="about-reveal grid grid-cols-1 md:grid-cols-12 gap-0 p-6 md:p-10 hover:bg-black/[0.015] dark:hover:bg-white/[0.015] transition-colors relative">
            <div class="md:col-span-3 mb-6 md:mb-0 flex flex-col justify-start">
              <span class="font-mono text-[12px] font-bold tracking-wider text-black dark:text-white">
                {job.period}
              </span>
              <span class="mt-2 font-mono text-[10px] tracking-widest text-[#2D81FF] font-semibold uppercase">
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
                  <span class="text-[#2D81FF] font-mono mt-0.5 select-none font-bold">›</span>
                  <span>{bullet}</span>
                </div>
              {/each}
            </div>
          </div>
        {:else}
          <p class="p-6 md:p-10 font-mono text-[11px] tracking-wider uppercase text-black/45 dark:text-white/45">
            {t.experience.empty}
          </p>
        {/each}
      </div>

    </div>
  </section>

  <!-- SECTION 03: BEYOND CODE -->
  <section id="curation" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col">
      {@render eyebrow('03', t.beyond.eyebrow, t.beyond.eyebrowRight)}
      {@render sectionTitle(t.beyond)}

      <div class="grid grid-cols-1 md:grid-cols-2 gap-px border-b border-black/10 dark:border-white/10 bg-black/10 dark:bg-white/10">
        {#each t.beyond.cards as card, i}
          {@const Icon = beyondIcons[i]}
          <article class="p-8 bg-[#FAF9F8] dark:bg-[#050505] flex flex-col justify-between about-reveal">
            <div>
              <div class="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-black/50 dark:text-white/50 mb-6">
                <span>{card.label}</span>
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div class="flex items-center gap-3 mb-4">
                <Icon class="w-6 h-6 text-[#2D81FF]" />
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
            <div class="pt-4 border-t border-black/10 dark:border-white/10 font-mono text-[10px] tracking-wider uppercase text-black/50 dark:text-white/50">
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
      <div class="text-[10px] uppercase font-mono tracking-widest text-black/50 dark:text-white/50 mb-6">
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
        <a href="/" class="px-6 py-3 border border-black/20 dark:border-white/20 text-black dark:text-white text-[11px] font-mono font-bold uppercase tracking-[0.12em] hover:border-transparent transition-colors">
          {t.collab.back}
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
  @media (prefers-reduced-motion: reduce) {
    .flux span { animation: none; }
  }
</style>
