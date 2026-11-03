<script lang="ts">
  import { onMount } from 'svelte';

  import { page } from '$app/state';
  import { getI18n } from '#lib/i18n/index.ts';
  import { spyLine } from '#lib/reveal.ts';

  const i18n = getI18n();

  let scrollY = $state(0);
  let innerHeight = $state(0);
  let scrollHeight = $state(0);
  let isDragging = $state(false);

  let isAboutPage = $derived(page.url.pathname === '/about');

  let activeSection = $state('');

  // Exact 0-100% calculation
  let progress = $derived(
    scrollHeight > innerHeight 
      ? Math.min(100, Math.max(0, (scrollY / (scrollHeight - innerHeight)) * 100))
      : 0
  );

  // Pad to 3 digits e.g. 000%, 015%, 040%, 100%
  let formattedProgress = $derived(
    progress >= 100 
      ? '100%' 
      : `0${Math.floor(progress)}%`.slice(-4)
  );

  // Usable track height (viewport minus 48px navbar)
  let trackHeight = $derived(innerHeight > 48 ? innerHeight - 48 : innerHeight);

  // Height of the viewport indicator box relative to visible screen fraction
  let lensHeight = $derived(
    scrollHeight > 0 
      ? Math.max(70, Math.min(220, (innerHeight / scrollHeight) * trackHeight))
      : 120
  );

  // Y position of the laser line
  let laserY = $derived(
    (progress / 100) * (trackHeight - 48) + 24
  );

  // Y position of the lens box (centered on laser or bounded)
  let lensY = $derived(
    Math.max(0, Math.min(trackHeight - lensHeight, laserY - lensHeight / 2))
  );

  let t = $derived(i18n.t);

  // Dynamic sections depending on route
  let homeSections = $derived(
    (['work', 'expertise', 'approach', 'stack', 'contact'] as const).map((id) => ({ id, ...t.ruler.home[id] }))
  );

  let aboutSections = $derived(
    (['chronicles', 'experience', 'curation', 'collab'] as const).map((id) => ({ id, ...t.ruler.aboutPage[id] }))
  );

  // only the home and about pages have named sections; other routes show the bare ruler
  let currentSections = $derived(isAboutPage ? aboutSections : page.url.pathname === '/' ? homeSections : []);

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleScrollbarClick(e: MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const ratio = Math.min(1, Math.max(0, clickY / rect.height));
    window.scrollTo({
      top: ratio * (scrollHeight - innerHeight),
      behavior: 'smooth'
    });
  }

  // The ruler only exists from xl up: phones and tablets never render or run it
  let wide = $state(false);

  // Active label: the section crossing a line 40% down the viewport; the first one until any does
  $effect(() => {
    const ids = currentSections.map((s) => s.id);
    if (!wide || !ids.length) return;
    activeSection = ids[0];
    return spyLine(ids, 0.4, (id) => (activeSection = id));
  });

  onMount(() => {
    const mq = window.matchMedia('(min-width: 1280px)');
    let stop = () => {};

    const start = () => {
      // page height for the progress readout; ResizeObserver reports after layout, so this read is free
      const sizer = new ResizeObserver(() => {
        scrollHeight = document.documentElement.scrollHeight;
        innerHeight = window.innerHeight;
      });
      sizer.observe(document.body);
      return () => sizer.disconnect();
    };

    const sync = () => {
      wide = mq.matches;
      stop();
      stop = wide ? start() : () => {};
    };
    sync();
    mq.addEventListener('change', sync);
    return () => { mq.removeEventListener('change', sync); stop(); };
  });
</script>

<svelte:window bind:scrollY={scrollY} bind:innerHeight={innerHeight} />

<!-- Container covering the right side below the 48px fixed navbar -->
{#if wide}
<aside aria-label={t.ruler.position} class="fixed top-12 bottom-0 right-0 z-40 flex pointer-events-none select-none">
  
  <!-- FLOATING SECTION LABELS HUD (Positioned to the left of the ruler, shown when margin is spacious >= 2xl) -->
  <div class="relative w-auto max-w-[240px] h-full hidden 2xl:flex flex-col justify-between pt-6 pb-8 pr-4 items-end pointer-events-auto">
    <!-- Top Brand Tag -->
    <a 
      href={isAboutPage ? "/about" : "/"} 
      class="text-[11px] font-mono tracking-[0.25em] text-black/55 dark:text-white/50 uppercase font-bold hover:text-black dark:hover:text-white transition-colors whitespace-nowrap"
    >
      {isAboutPage ? t.ruler.aboutTag : t.ruler.portfolio}
    </a>

    <!-- Interactive Navigation Hierarchy - Aligned to the BOTTOM as requested -->
    <nav class="flex flex-col items-end gap-5 mt-auto pb-4">
      {#each currentSections as sec}
        <div class="flex flex-col items-end">
          <button
            onclick={() => scrollToSection(sec.id)}
            class="text-right transition-all duration-300 font-display tracking-tight cursor-pointer uppercase whitespace-nowrap {
              activeSection === sec.id
                ? 'text-black dark:text-white font-extrabold text-[24px] xl:text-[28px] leading-none drop-shadow-[0_0_12px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]'
                : 'text-black/55 dark:text-white/50 font-bold text-[11px] tracking-wider leading-relaxed hover:text-black/70 dark:hover:text-white/70'
            }"
          >
            {sec.label}
          </button>
          
          <!-- Sub-bullet label when active -->
          {#if activeSection === sec.id}
            <div class="flex items-center gap-2 mt-1.5 text-[11px] font-mono tracking-widest text-black/60 dark:text-white/60 whitespace-nowrap">
              <span class="w-1.5 h-1.5 bg-[#2D81FF] rounded-none inline-block shadow-[0_0_6px_#2D81FF]"></span>
              <span>{sec.sub}</span>
            </div>
          {/if}
        </div>
      {/each}
    </nav>
  </div>

  <!-- THE ARTCRAFT FILMSTRIP SCROLLBAR (Exact 60px Width Ruler) -->
  <!-- svelte-ignore a11y_interactive_supports_focus -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div 
    role="scrollbar" 
    aria-controls="content" 
    aria-orientation="vertical" 
    aria-valuemin={0} 
    aria-valuemax={100} 
    aria-valuenow={Math.round(progress)} 
    aria-label={t.ruler.position}
    onclick={handleScrollbarClick}
    class="relative w-[60px] h-full cursor-crosshair overflow-hidden pointer-events-auto border-l border-black/10 dark:border-white/10"
  >
    <!-- Child 1: Background Blur & Fade Mask (theme adaptive) -->
    <div 
      aria-hidden="true" 
      class="absolute inset-0 pointer-events-none backdrop-blur-[9px] bg-paper/60 dark:bg-ink/60" 
      style="mask-image: linear-gradient(to left, black 40%, rgba(0, 0, 0, 0.75) 47.5%, rgba(0, 0, 0, 0.53) 55%, rgba(0, 0, 0, 0.35) 62.5%, rgba(0, 0, 0, 0.22) 70%, rgba(0, 0, 0, 0.12) 77.5%, rgba(0, 0, 0, 0.05) 85%, rgba(0, 0, 0, 0.01) 92.5%, transparent 100%);"
    ></div>

    <!-- Child 2: Graduation ticks drawn as two repeating gradients (minor every 1%, major every 5%), numbers every 5 -->
    <div class="ticks absolute inset-y-6 right-0 w-full pointer-events-none text-black dark:text-white">
      {#each Array.from({ length: 21 }, (_, i) => i * 5) as mark}
        <span
          class="absolute right-[24px] -translate-y-1/2 font-mono leading-none text-black/55 dark:text-white/50 select-none"
          style="top: {mark}%; font-size: 9px; letter-spacing: 0.08em;"
        >{mark}</span>
      {/each}
    </div>

    <!-- 50% Section White Accent Indicator (matches ArtCraft midpoint bar) -->
    <div 
      class="absolute right-0 w-[30px] h-[2px] bg-black/80 dark:bg-white/80 pointer-events-none"
      style="top: 50%;"
    ></div>

    <!-- Child 3: The Floating Lens Viewport Box (moves with scroll) -->
    <div 
      aria-hidden="true" 
      class="absolute inset-x-0 pointer-events-none transition-transform duration-75 ease-out"
      style="height: {lensHeight}px; transform: translate3d(0px, {lensY}px, 0px);"
    >
      <!-- Translucent fill -->
      <div class="absolute inset-0 bg-black/10 dark:bg-white/10" style="opacity: 0.12;"></div>
      <!-- Top edge line -->
      <span class="absolute inset-x-0 top-0 block bg-black/40 dark:bg-white/40" style="height: 1px;"></span>
      <!-- Bottom edge line -->
      <span class="absolute inset-x-0 bottom-0 block bg-black/40 dark:bg-white/40" style="height: 1px;"></span>
    </div>

    <!-- Child 4: The Glowing Laser Indicator Line & Rolling Digital Percentage -->
    <div 
      aria-hidden="true" 
      class="absolute inset-x-0 pointer-events-none transition-transform duration-75 ease-out"
      style="height: 0px; transform: translate3d(0px, {laserY}px, 0px);"
    >
      <!-- Laser Accent Line with Blue Glow Box-Shadow -->
      <span 
        class="absolute block bg-[#2D81FF]" 
        style="right: 0px; top: 0px; width: 100vw; height: 1.5px; box-shadow: 0 0 8px #2D81FF;"
      ></span>
      
      <!-- Digit text positioned 4px below laser line -->
      <span 
        class="absolute whitespace-nowrap font-mono text-[#1D63D8] dark:text-[#2D81FF] font-bold select-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
        style="right: 2px; top: 4px; font-size: 9px; letter-spacing: 0.08em;"
      >
        <span>{formattedProgress}</span>
      </span>
    </div>

  </div>
</aside>
{/if}

<style>
  /* 1px lines at the top of each tile; the extra pixel lets the 100 mark land inside the box */
  .ticks::before {
    content: '';
    position: absolute;
    inset: 0 0 -1px auto;
    width: 20px;
    background:
      linear-gradient(color-mix(in srgb, currentColor 80%, transparent) 1px, transparent 1px) right top / 20px 5% repeat-y,
      linear-gradient(color-mix(in srgb, currentColor 40%, transparent) 1px, transparent 1px) right top / 10px 1% repeat-y;
  }
</style>
