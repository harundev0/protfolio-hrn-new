<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { ArrowUpRight } from 'phosphor-svelte';
  import { fade } from 'svelte/transition';
  import { getI18n } from '#lib/i18n/index.ts';
  import { site } from '#lib/site.ts';

  const i18n = getI18n();
  let t = $derived(i18n.t);

  let container: HTMLElement;
  let ctx: any;
  let heroVideo: HTMLVideoElement;

  // Order matches t.work.items
  // [file, width, height, blob colors]; blobs use the about-hero flux palette
  const workShots: [string, number, number, string[]][] = [
    ['panorra-web', 1104, 899, ['#F37CE0', '#B48CFF', '#FFC24B']],
    ['panorra-mobile', 976, 840, ['#FF7A7A', '#FFC24B', '#F37CE0']],
    ['gothru-dashboard', 1168, 712, ['#3EC6F5', '#B48CFF', '#F37CE0']],
    ['gothru-360', 1166, 760, ['#3EC6F5', '#FFC24B', '#B48CFF']]
  ];
  // blob placement (left, top) and drift timing, shared by every card
  const blobSpots = [['-40%', '-55%', '16s'], ['35%', '5%', '19s'], ['-25%', '35%', '22s']];

  // Expertise thumbnails, order matches t.expertise.cards: glow colors + positions per card
  const thumbGlow = [
    ['#6D28D9', '90% 0%', '#EA580C', '0% 100%'],
    ['#4F46E5', '100% 0%', '#DB2777', '40% 110%'],
    ['#7C3AED', '0% 0%', '#2D81FF', '100% 100%'],
    ['#4F46E5', '100% 0%', '#F97316', '15% 110%']
  ];
  // Product thumbnail: scribble (rough idea) that straightens into the release line
  const flowPath = 'M40 195 C 30 60, 175 45, 150 130 S 45 205, 92 150 S 215 35, 205 120 S 115 215, 172 192 S 222 150, 258 150 L 578 150';
  // seconds into the 4s comet loop when its head reaches each node (measured with getTotalLength)
  const flowHits = [2.7, 3.0, 3.29, 3.59];
  const pipeline = [['Research', '01', '#DB2777'], ['Scope', '02', '#F97316'], ['Build', '03', '#2D81FF'], ['Ship', '04', '#7C3AED']];
  // Core Web Vitals "good" thresholds (web.dev), not measured results
  const vitals = [['LCP', '< 2.5s', '#7C3AED'], ['INP', '< 200ms', '#2D81FF'], ['CLS', '< 0.1', '#F97316']];
  // Code thumbnail: [text, token class] per line
  const codeLines: [string, string][][] = [
    [['<script', 'k'], [' lang', 'a'], ['="ts"', 's'], ['>', 'k']],
    [['  let ', 'k'], ['{ title, body }', 't'], [': Props = ', 'p'], ['$props', 'f'], ['();', 'p']],
    [['<\/script>', 'k']],
    [['', 'p']],
    [['<article', 'k'], [' class', 'a'], ['="card"', 's'], ['>', 'k']],
    [['  <h3>', 'k'], ['{title}', 't'], ['</h3>', 'k']],
    [['  <p>', 'k'], ['{body}', 't'], ['</p>', 'k']],
    [['</article>', 'k']]
  ];

  // Order matches t.stack.tools
  const stack = [
    { name: 'Svelte', icon: '/assets/icons/tech/svelte.svg', color: '#FF3E00', file: 'counter.svelte',
      code: ['let count = $state(0);', 'let double = $derived(count * 2);'] },
    { name: 'React', icon: '/assets/icons/tech/react.svg', color: '#61DAFB', file: 'dialog.tsx',
      code: ['const [open, setOpen] = useState(false);', 'return <Dialog open={open} />;'] },
    { name: 'TypeScript', icon: '/assets/icons/tech/typescript.svg', color: '#3178C6', file: 'i18n.ts',
      code: ["type Locale = 'en' | 'id' | 'ja';", 'const t = (l: Locale) => dict[l];'] },
    { name: 'Tailwind', icon: '/assets/icons/tech/tailwind.svg', color: '#38BDF8', file: 'button.html',
      code: ['<button class="px-4 py-2', '  bg-black text-white">'] },
    { name: 'GSAP', icon: '/assets/icons/tech/gsap.svg', color: '#0AE448', file: 'reveal.ts',
      code: ["gsap.from('.card', {", '  y: 20, opacity: 0, stagger: 0.08 });'] }
  ];
  let activeTool = $state(0);

  // Hero name "decode": flicker random glyphs over a letter, then reveal it.
  // Glyphs render in an overlay (::after) so the letter's width never jitters.
  const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=/<>';
  function scramble(el: HTMLElement, ms: number) {
    if (el.classList.contains('scrambling')) return;
    el.classList.add('scrambling');
    const end = performance.now() + ms;
    const tick = () => {
      if (performance.now() >= end) return el.classList.remove('scrambling');
      el.dataset.glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      setTimeout(tick, 50);
    };
    tick();
  }

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    // 3.5 MB video only on tablet/desktop; phones, data saver and reduced motion keep the poster
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (heroVideo && window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)').matches && !saveData) {
      heroVideo.src = '/assets/videos/hero.mp4';
    }
    if (!container) return;

    ctx = gsap.context(() => {
      // reduced motion: fade only, no movement or flicker
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const chars = gsap.utils.toArray<HTMLElement>('.hero-char');
      if (reduce) {
        gsap.from(chars, { opacity: 0, duration: 0.4, ease: 'power2.out' });
      } else {
        gsap.set(chars, { transformPerspective: 800, transformOrigin: '50% 100%' });
        gsap.from(chars, {
          yPercent: 80,
          rotateX: -90,
          opacity: 0,
          duration: 1.1,
          ease: 'expo.out',
          delay: 0.15,
          stagger: {
            each: 0.05,
            from: 'center',
            onStart(this: gsap.core.Tween) { scramble(this.targets()[0] as HTMLElement, 600); }
          },
          onComplete() {
            if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
            chars.forEach((el) => el.addEventListener('pointerenter', () => {
              scramble(el, 350);
              gsap.to(el, { yPercent: -12, duration: 0.18, ease: 'power2.out', yoyo: true, repeat: 1, overwrite: true });
            }));
          }
        });
      }

      gsap.from('.anim-el', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.2
      });

      gsap.utils.toArray('.scroll-reveal').forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
      });
    }, container);
  });

  onDestroy(() => {
    if (ctx) ctx.revert();
  });
</script>

<!-- Sticky Eyebrow Header (1:1 ArtCraft Sticky Bar) -->
{#snippet eyebrow(n: string, left: string, right: string)}
  <div class="sticky top-12 z-30 border-y border-black/10 dark:border-white/10 bg-[#FAF9F8]/80 dark:bg-[#050505]/80 backdrop-blur-md transition-colors">
    <div class="flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-black/60 dark:text-white/60 py-3 px-6 md:px-10">
      <span class="flex items-center gap-2"><span class="text-black/55 dark:text-white/50">{n}</span><span>/</span><span>{left}</span></span>
      <span class="hidden sm:inline text-black/55 dark:text-white/50">{right}</span>
    </div>
  </div>
{/snippet}

<!-- UI/UX thumbnail layer: same geometry twice, as Figma spec (wire) and as built UI -->
{#snippet uiShot(wire: boolean)}
  <div class="absolute inset-0 flex items-center justify-center gap-4 md:gap-8 p-4">
    <div class="relative w-[46%] max-w-[15rem] border p-3 md:p-4 flex flex-col gap-2 {wire ? 'border-dashed border-[#2D81FF]/70' : 'border-white/15 bg-white/[0.06]'}">
      {#if wire}<span class="absolute -top-4 left-0 font-mono text-[7px] md:text-[8px] text-[#60A5FA]">Card · 240</span>{/if}
      <span class="block h-2.5 md:h-3 w-3/4 {wire ? 'border border-dashed border-white/40' : 'bg-white/85'}"></span>
      <span class="block h-1.5 w-full {wire ? 'border-t border-dashed border-white/30' : 'bg-white/25'}"></span>
      <span class="block h-1.5 w-5/6 {wire ? 'border-t border-dashed border-white/30' : 'bg-white/25'}"></span>
      <span class="relative mt-2 md:mt-3 self-start">
        <span class="block px-3 md:px-4 py-1.5 rounded-full border text-[8px] md:text-[10px] font-medium {wire ? 'border-dashed border-white/40 text-white/50' : 'border-transparent bg-gradient-to-r from-[#DB2777] to-[#7C3AED]'}">Get started</span>
        {#if wire}
          <span class="absolute -inset-1.5 border border-[#2D81FF]">
            {#each ['-left-[3px] -top-[3px]', '-right-[3px] -top-[3px]', '-left-[3px] -bottom-[3px]', '-right-[3px] -bottom-[3px]'] as pos}
              <i class="absolute w-1.5 h-1.5 bg-white border border-[#2D81FF] {pos}"></i>
            {/each}
          </span>
          <span class="absolute left-1/2 -translate-x-1/2 top-full mt-2.5 px-1 bg-[#2D81FF] font-mono text-[7px] md:text-[8px] whitespace-nowrap">120 × 32</span>
        {/if}
      </span>
    </div>
    <div class="flex flex-col gap-2 md:gap-3 font-mono text-[8px] md:text-[10px] tracking-widest uppercase {wire ? 'text-white/50' : 'text-white/75'}">
      {#each [['Loading', '#2D81FF'], ['Empty', '#F97316'], ['Error', '#DB2777']] as [state, hue]}
        <span class="flex items-center gap-2 border px-2.5 md:px-3 py-1.5 md:py-2 {wire ? 'border-dashed border-white/25' : 'border-white/15 bg-white/[0.06]'}">
          <i class="block w-1.5 h-1.5 rounded-full border" style:border-color={hue} style:background={wire ? 'transparent' : hue}></i>{state}
        </span>
      {/each}
    </div>
  </div>
{/snippet}

<div bind:this={container} class="w-full flex-col">

  <!-- HERO SECTION -->
  <section id="hero" class="w-full relative min-h-[75vh] flex flex-col items-center justify-center pt-10 overflow-hidden border-b border-black/10 dark:border-white/10">

    <!-- Background video: dark source; light mode inverts it (hue-rotate keeps ray colors) into a pastel version -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <video bind:this={heroVideo} class="w-full h-full object-cover invert hue-rotate-180 saturate-150 contrast-125 mix-blend-multiply dark:invert-0 dark:hue-rotate-0 dark:saturate-100 dark:contrast-100 dark:mix-blend-normal" poster="/assets/videos/hero-poster.webp" autoplay muted loop playsinline preload="metadata"></video>
      <div class="absolute inset-0 bg-[#FAF9F8]/25 dark:bg-[#050505]/55"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#FAF9F8_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_30%,#050505_100%)]"></div>
    </div>

    <div class="z-10 flex flex-col items-center text-center max-w-4xl px-4 mx-auto w-full">
      <h1 aria-label="Harun Bahrudin" class="text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-bold tracking-tighter leading-none text-black dark:text-white mb-6">
        {#each ['HARUN', 'BAHRUDIN'] as word}
          <span class="block" aria-hidden="true">{#each word as ch}<span class="hero-char relative inline-block">{ch}</span>{/each}</span>
        {/each}
      </h1>

      <div class="anim-el flex flex-col items-center gap-2 mb-8 bg-[#FAF9F8]/70 dark:bg-[#050505]/60 backdrop-blur-md px-4 py-2 border border-black/10 dark:border-white/10 rounded-sm">
        <h2 class="text-xl md:text-2xl font-bold tracking-tight text-black dark:text-white mt-1">
          {t.hero.titlePre} <i class="font-serif font-light text-black/55 dark:text-white/50 italic">{t.hero.titleEm}</i>
        </h2>
        <p class="text-xs md:text-sm text-black/60 dark:text-white/60 max-w-lg mt-2 leading-relaxed">
          {t.hero.body}
        </p>
      </div>

      <div class="anim-el flex flex-wrap items-center justify-center gap-3">
        <a href="#projects" class="px-5 sm:px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 transition-colors text-[10px] font-mono font-bold tracking-widest uppercase">
          {t.hero.ctaPrimary}
        </a>
        <!-- Colorful CTA: blurred gradient glow that brightens on hover -->
        <a href="/about" class="group relative overflow-hidden px-5 sm:px-6 py-2.5 bg-zinc-900 dark:bg-zinc-100 text-[10px] font-mono font-bold tracking-widest uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D81FF]">
          <span class="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-40 group-hover:opacity-80 blur transition-opacity duration-500" aria-hidden="true"></span>
          <span class="relative flex items-center gap-2 text-white dark:text-zinc-900">
            {t.hero.ctaSecondary}
            <ArrowUpRight weight="bold" class="w-3.5 h-3.5" />
          </span>
        </a>
      </div>
    </div>
  </section>

  <!-- DIVIDER BAR -->
  <div class="w-full border-b border-black/10 dark:border-white/10">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex items-center justify-between text-[8px] md:text-[10px] uppercase font-mono tracking-widest text-black/55 dark:text-white/50 py-2.5 px-6 md:px-10">
      <div class="flex items-center gap-3 sm:gap-4">
        <span class="flex items-center gap-1.5"><img src="/assets/icons/tech/nodejs.svg" alt="" class="w-3.5 h-3.5 object-contain" /><span>NODE.JS</span></span>
        <span>•</span>
        <span class="flex items-center gap-1.5"><img src="/assets/icons/tech/svelte.svg" alt="" class="w-3.5 h-3.5 object-contain" /><span>SVELTE</span></span>
        <span>•</span>
        <span class="flex items-center gap-1.5"><img src="/assets/icons/tech/tailwind.svg" alt="" class="w-3.5 h-3.5 object-contain" /><span>TAILWIND</span></span>
      </div>
      <div class="hidden md:flex items-center gap-4">
        <span class="flex items-center gap-1.5"><img src="/assets/icons/tech/figma.svg" alt="" class="w-3.5 h-3.5 object-contain" /><span>FIGMA</span></span>
      </div>
    </div>
  </div>

  <!-- SELECTED WORK SECTION -->
  <section id="projects" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col">
      {@render eyebrow('01', t.work.eyebrow, t.work.eyebrowRight)}

      <div class="pt-16 pb-20 px-6 md:px-10 scroll-reveal border-b border-black/10 dark:border-white/10">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.035em] text-black dark:text-white leading-[1.02] max-w-3xl">
          {t.work.titlePre} <span class="font-serif italic font-normal">{t.work.titleEm}</span>{t.work.titlePost}
        </h2>
        <p class="mt-5 text-black/60 dark:text-white/60 text-lg max-w-xl leading-relaxed">
          {t.work.body}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-px border-b border-black/10 dark:border-white/10 bg-black/10 dark:bg-white/10">
        {#each t.work.items as item, i}
          {@const [file, w, h, blobs] = workShots[i]}
          <article class="group bg-[#FAF9F8] dark:bg-[#050505] flex flex-col scroll-reveal">
            <div class="flex items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 px-6 py-2.5 md:px-8 text-[11px] font-mono tracking-widest text-black/55 dark:text-white/50 uppercase">
              <span>{item.kind}</span>
              <span>{String(i + 1).padStart(2, '0')}</span>
            </div>
            <!-- Transparent screenshot floating on soft drifting color blobs, like the about hero -->
            <div class="shot relative aspect-[4/3] overflow-hidden flex items-center justify-center p-6 md:p-10" style:--c0={blobs[0]} style:--c2={blobs[2]}>
              {#each blobs as c, b}
                {@const [x, y, dur] = blobSpots[b]}
                <span class="blob" style:--c={c} style:left={x} style:top={y} style:--dur={dur} style:--delay="{(i + b) * -2.3}s" aria-hidden="true"></span>
              {/each}
              <img
                src="/assets/images/work/{file}.webp"
                alt={item.alt}
                width={w}
                height={h}
                loading="lazy"
                decoding="async"
                class="relative max-w-full max-h-full w-auto h-auto object-contain drop-shadow-[0_24px_32px_rgba(30,20,60,0.25)] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-1.5 group-hover:scale-[1.02]"
              />
            </div>
            <div class="px-6 py-6 md:px-8 flex-1 flex flex-col">
              <h3 class="font-display text-2xl font-medium tracking-tight text-black dark:text-white">{item.name}</h3>
              <p class="mt-2 max-w-xl leading-relaxed text-sm text-black/60 dark:text-white/60">{item.desc}</p>
              <p class="mt-auto pt-5 font-mono text-[10px] tracking-widest uppercase text-black/55 dark:text-white/50">
                {t.work.role}: <span class="text-black dark:text-white">{t.work.roleVal}</span>
              </p>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <!-- EXPERTISE SECTION -->
  <section id="work" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col">
      {@render eyebrow('02', t.expertise.eyebrow, t.expertise.eyebrowRight)}

      <!-- Title -->
      <div class="pt-16 pb-20 px-6 md:px-10 scroll-reveal border-b border-black/10 dark:border-white/10">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.035em] text-black dark:text-white leading-[1.02] max-w-3xl">
          {t.expertise.titlePre} <span class="font-serif italic font-normal">{t.expertise.titleEm}</span>{t.expertise.titlePost}
        </h2>
        <p class="mt-5 text-black/60 dark:text-white/60 text-lg max-w-xl leading-relaxed">
          {t.expertise.body}
        </p>
      </div>

      <!-- EXACT ARTCRAFT GRID STYLE -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-px border-b border-black/10 dark:border-white/10 bg-black/10 dark:bg-white/10">
        {#each t.expertise.cards as card, i}
          {@const [g1, p1, g2, p2] = thumbGlow[i]}
          <article class="bg-[#FAF9F8] dark:bg-[#050505] flex flex-col scroll-reveal">
            <div class="flex items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 px-6 py-2.5 md:px-8 text-[11px] font-mono tracking-widest text-black/55 dark:text-white/50 uppercase">
              <span>{card.category}</span>
              <span>{String(i + 1).padStart(2, '0')}</span>
            </div>
            <!-- Dark mini-UI thumbnail: glow + halftone dots, content shows the card's skill -->
            <div class="thumb relative aspect-video w-full overflow-hidden text-white" style:--g1={g1} style:--p1={p1} style:--g2={g2} style:--p2={p2} aria-hidden="true">
              <span class="dots"></span>
              <div class="absolute inset-3 md:inset-5 border border-white/10 flex flex-col">
                {#if i === 0}
                  <!-- Product: a rough scribble that straightens into a shipped line, a light runs along it -->
                  <div class="px-4 md:px-5 py-2.5 md:py-3 border-b border-white/10 font-mono text-[9px] md:text-[10px] tracking-widest text-white/50 uppercase">Idea → Release</div>
                  <div class="relative flex-1">
                    <svg viewBox="0 0 600 240" class="absolute inset-0 w-full h-full" fill="none">
                      <defs>
                        <linearGradient id="flow-grad" gradientUnits="userSpaceOnUse" x1="30" y1="0" x2="580" y2="0">
                          <stop offset="0" stop-color="#DB2777" /><stop offset=".4" stop-color="#F97316" /><stop offset=".7" stop-color="#2D81FF" /><stop offset="1" stop-color="#A78BFA" />
                        </linearGradient>
                      </defs>
                      <text x="40" y="38" class="font-mono" font-size="10" letter-spacing="2" fill="rgb(255 255 255 / 0.45)">ROUGH IDEA</text>
                      <path d={flowPath} pathLength="1000" stroke="rgb(255 255 255 / 0.35)" stroke-width="1.5" stroke-dasharray="3 5" />
                      <path d={flowPath} pathLength="1000" stroke="url(#flow-grad)" stroke-width="2.5" stroke-linecap="round" class="flow-comet" />
                      <path d="M572 143 L580 150 L572 157" stroke="rgb(255 255 255 / 0.4)" stroke-width="1.5" />
                      {#each pipeline as [label, num, hue], k}
                        {@const x = 290 + k * 88}
                        <text {x} y="122" text-anchor="middle" class="font-display" font-size="36" font-weight="300" fill="rgb(255 255 255 / 0.85)">{num}</text>
                        <circle cx={x} cy="150" r="11" stroke={hue} class="flow-ping" style:animation-delay="{flowHits[k]}s" />
                        <circle cx={x} cy="150" r="5" fill="#0B0812" stroke={hue} stroke-width="2" />
                        <text {x} y="184" text-anchor="middle" class="font-mono" font-size="10" letter-spacing="2" fill="rgb(255 255 255 / 0.55)">{label.toUpperCase()}</text>
                      {/each}
                    </svg>
                  </div>
                {:else if i === 1}
                  <!-- UI/UX: Figma spec on the left, built component on the right, a seam sweeps between them -->
                  <div class="relative flex-1">
                    {@render uiShot(true)}
                    <div class="ui-built absolute inset-0 bg-[#0B0812]">{@render uiShot(false)}</div>
                    <div class="ui-seam absolute inset-0 pointer-events-none">
                      <span class="absolute left-0 inset-y-0 w-px bg-white/70"></span>
                      <span class="absolute top-2 right-full mr-2 font-mono text-[8px] md:text-[9px] tracking-widest text-[#60A5FA]">FIGMA</span>
                      <span class="absolute top-2 left-2 font-mono text-[8px] md:text-[9px] tracking-widest text-white/70">CODE</span>
                    </div>
                  </div>
                {:else if i === 2}
                  <!-- Frontend: code types itself out, the live preview floats in front -->
                  <div class="flex border-b border-white/10 font-mono text-[9px] md:text-[10px] text-white/50">
                    <span class="px-3 md:px-4 py-2 border-r border-white/10 text-white bg-white/[0.06]">Card.svelte</span>
                    <span class="px-3 md:px-4 py-2 border-r border-white/10">types.ts</span>
                  </div>
                  <div class="relative flex-1 flex flex-col justify-center gap-0.5 md:gap-1 px-3 md:px-5 font-mono text-[8px] md:text-[12px] leading-relaxed whitespace-pre">
                    {#each codeLines as line, n}
                      <div><span class="inline-block w-5 md:w-7 text-white/25 select-none">{n + 1}</span><span class="type-line" style:--n={n}>{#each line as [text, tok]}<span class="tok-{tok}">{text}</span>{/each}</span></div>
                    {/each}
                    <div class="preview absolute right-2 md:right-4 bottom-2 md:bottom-4 w-[40%] max-w-[15rem] border border-white/20 bg-[#15111F]/90 backdrop-blur-sm whitespace-normal">
                      <div class="flex items-center gap-1 px-2 py-1.5 border-b border-white/10">
                        {#each [0, 1, 2] as _}<i class="block w-1.5 h-1.5 rounded-full bg-white/25"></i>{/each}
                        <span class="ml-1.5 text-[7px] md:text-[9px] text-white/50 truncate">localhost:5173</span>
                      </div>
                      <div class="p-2 md:p-3 flex flex-col gap-1.5">
                        <span class="block h-8 md:h-14 bg-gradient-to-br from-[#7C3AED] to-[#2D81FF]"></span>
                        <span class="font-sans font-semibold text-[9px] md:text-[12px] text-white">{'{title}'}</span>
                        <span class="block h-1 w-full bg-white/25"></span>
                        <span class="block h-1 w-2/3 bg-white/25"></span>
                      </div>
                      <span class="hmr absolute -top-2.5 right-2 px-1.5 py-0.5 bg-[#10B981] text-[7px] md:text-[8px] font-bold tracking-widest text-[#04130D]">UPDATED</span>
                    </div>
                  </div>
                {:else}
                  <!-- Performance: load filmstrip, the playhead renders frames until LCP; targets below -->
                  <div class="px-4 md:px-5 py-2.5 md:py-3 border-b border-white/10 font-mono text-[9px] md:text-[10px] tracking-widest text-white/50 uppercase">Core Web Vitals · Target</div>
                  <div class="flex-1 flex items-center px-4 md:px-5">
                    <div class="relative w-full grid grid-cols-5 gap-1.5 md:gap-2.5">
                      {#each [1, 2, 3, 4, 5] as f}
                        <div class="flex flex-col gap-1">
                          <div class="relative aspect-[4/3] border border-white/15 bg-white/[0.04] p-1 md:p-1.5 flex flex-col gap-[3px] md:gap-1">
                            {#if f > 1}<i class="block h-[3px] md:h-1 bg-white/30"></i>{/if}
                            {#if f > 2}<i class="block h-1 md:h-1.5 w-2/3 bg-white/70"></i><i class="block h-[2px] md:h-[3px] w-1/2 bg-white/25"></i>{/if}
                            {#if f > 3}<i class="block flex-1 bg-gradient-to-br from-[#7C3AED]/70 to-[#2D81FF]/50 {f === 5 ? 'outline outline-1 outline-offset-1 outline-[#C4B5FD]' : ''}"></i>{/if}
                            {#if f === 5}<span class="absolute -top-2 right-1 px-1 bg-[#7C3AED] font-mono text-[6px] md:text-[8px] tracking-widest">LCP</span>{/if}
                          </div>
                          <span class="font-mono text-[7px] md:text-[9px] text-white/50">{(f / 2).toFixed(1)}s</span>
                        </div>
                      {/each}
                      <span class="perf-veil absolute -inset-1 bg-[#0B0812]/75"></span>
                      <span class="perf-head absolute -inset-y-1 inset-x-0 pointer-events-none"><i class="absolute left-0 inset-y-0 w-px bg-[#C4B5FD]"></i></span>
                    </div>
                  </div>
                  <div class="grid grid-cols-3 border-t border-white/10">
                    {#each vitals as [label, value, hue]}
                      <div class="relative px-3 md:px-5 py-2 md:py-3 border-r border-white/10 last:border-r-0">
                        <span class="absolute left-0 top-0 h-0.5 w-8 md:w-12" style:background={hue}></span>
                        <span class="block font-mono text-[7px] md:text-[9px] tracking-widest text-white/50">{label}</span>
                        <span class="block font-display font-light tracking-tight text-white/90 text-sm sm:text-lg md:text-3xl whitespace-nowrap">{value}</span>
                      </div>
                    {/each}
                  </div>
                {/if}
              </div>
            </div>
            <div class="px-6 py-6 md:px-8">
              <h3 class="font-display text-2xl font-medium tracking-tight text-black dark:text-white">{card.title}</h3>
              <p class="mt-2 max-w-xl leading-relaxed text-sm text-black/60 dark:text-white/60">
                {card.body}
              </p>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <!-- APPROACH SECTION -->
  <section id="about" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col">
      {@render eyebrow('03', t.approach.eyebrow, t.approach.eyebrowRight)}

      <!-- Title -->
      <div class="pt-16 pb-20 px-6 md:px-10 scroll-reveal border-b border-black/10 dark:border-white/10">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.035em] text-black dark:text-white leading-[1.02] max-w-3xl">
          {t.approach.titlePre} <span class="font-serif italic font-normal">{t.approach.titleEm}</span>{t.approach.titlePost}
        </h2>
        <p class="mt-5 text-black/60 dark:text-white/60 text-lg max-w-xl leading-relaxed">
          {t.approach.body}
        </p>
      </div>

      <!-- Principles: each card shows its principle as a small live demo -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-px border-b border-black/10 dark:border-white/10 bg-black/10 dark:bg-white/10">
        {#each t.approach.principles as item, i}
          <article class="group bg-[#FAF9F8] dark:bg-[#050505] flex flex-col scroll-reveal">
            <div class="flex items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 px-6 py-2.5 md:px-8 text-[11px] font-mono tracking-widest text-black/55 dark:text-white/50">
              <span>{'ABC'[i]}</span>
              <span>{['types.ts', '@container', ':focus-visible'][i]}</span>
            </div>

            <div class="relative aspect-[4/3] overflow-hidden bg-black/[0.03] dark:bg-white/[0.03] flex items-center justify-center p-8" aria-hidden="true">
              {#if i === 0}
                <!-- Maintainable: a typed, single-purpose unit that passes the checker -->
                <div class="w-full max-w-[15rem] border border-black/10 dark:border-white/10 bg-[#FAF9F8] dark:bg-[#050505] p-4 font-mono text-[11px] leading-relaxed text-black/70 dark:text-white/70">
                  <div><span class="text-[#1D63D8] dark:text-[#2D81FF]">type</span> Card = {'{'}</div>
                  {#each [['title', 'string'], ['body', 'string'], ['tags?', 'string[]']] as [key, type]}
                    <div class="pl-4">{key}: <span class="px-0.5 text-black/55 dark:text-white/45 transition-colors group-hover:bg-[#2D81FF]/10 group-hover:text-[#2D81FF]">{type}</span></div>
                  {/each}
                  <div>{'}'}<span class="caret">▍</span></div>
                  <div class="mt-3 pt-3 border-t border-black/10 dark:border-white/10 flex items-center gap-2 text-[10px] text-black/55 dark:text-white/50">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#0AE448]"></span>svelte-check · 0 errors
                  </div>
                </div>
              {:else if i === 1}
                <!-- Responsive: the frame resizes and the layout inside reflows via a container query -->
                <div class="w-full flex flex-col items-center gap-3">
                  <div class="rz-frame border border-black/15 dark:border-white/15 bg-[#FAF9F8] dark:bg-[#050505] p-2">
                    <div class="rz-grid">
                      <i class="rz-hd"></i><i class="rz-main"></i><i></i><i></i>
                    </div>
                  </div>
                  <span class="font-mono text-[10px] tracking-widest text-black/55 dark:text-white/50">375 — 1440</span>
                </div>
              {:else}
                <!-- Accessible: a focus ring stepping through controls on each Tab press -->
                <div class="flex flex-col items-center gap-6">
                  <div class="relative flex gap-2">
                    {#each ['01', '02', '03'] as n}
                      <span class="w-14 h-8 flex items-center justify-center rounded-sm border border-black/15 dark:border-white/15 bg-[#FAF9F8] dark:bg-[#050505] font-mono text-[10px] text-black/60 dark:text-white/60">{n}</span>
                    {/each}
                    <span class="fk-ring absolute left-0 top-0 w-14 h-8 rounded-sm"></span>
                  </div>
                  <kbd class="fk-key px-3 py-1.5 rounded border border-b-[3px] border-black/20 dark:border-white/20 bg-[#FAF9F8] dark:bg-[#050505] font-mono text-[10px] text-black/70 dark:text-white/70">Tab ⇥</kbd>
                </div>
              {/if}
            </div>

            <div class="px-6 py-6 md:px-8">
              <h3 class="font-display text-2xl font-medium tracking-tight text-black dark:text-white">{item.title}</h3>
              <p class="mt-2 text-sm text-black/60 dark:text-white/60 leading-relaxed">{item.body}</p>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <!-- STACK SECTION -->
  <section id="proof" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col">
      {@render eyebrow('04', t.stack.eyebrow, t.stack.eyebrowRight)}

      <!-- Title -->
      <div class="py-16 md:py-20 px-6 md:px-10 scroll-reveal border-b border-black/10 dark:border-white/10">
        <h2 class="text-4xl md:text-5xl font-medium tracking-tight text-black dark:text-white">
          {t.stack.titlePre} <span class="font-serif italic font-normal">{t.stack.titleEm}</span>{t.stack.titlePost}
        </h2>
        <p class="mt-4 text-black/60 dark:text-white/60 text-base max-w-xl leading-relaxed">
          {t.stack.body}
        </p>
      </div>

      <!-- Tech Stack Index: numbered list + sticky preview of the hovered/focused tool -->
      <div class="grid grid-cols-1 md:grid-cols-12 border-b border-black/10 dark:border-white/10">
        <ol class="md:col-span-7 divide-y divide-black/10 dark:divide-white/10 md:border-r border-black/10 dark:border-white/10">
          {#each stack as tool, i}
            {@const active = activeTool === i}
            <li class="scroll-reveal">
              <button
                type="button"
                onmouseenter={() => (activeTool = i)}
                onfocus={() => (activeTool = i)}
                onclick={() => (activeTool = i)}
                aria-pressed={active}
                style="--c: {tool.color}"
                class="group relative w-full grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 px-6 md:px-10 py-6 md:py-7 text-left cursor-pointer outline-none focus-visible:bg-black/[0.03] dark:focus-visible:bg-white/[0.04]"
              >
                <!-- Brand-color rail grows in on the active row -->
                <span class="absolute left-0 top-0 bottom-0 w-[3px] origin-top transition-transform duration-300 ease-out {active ? 'scale-y-100' : 'scale-y-0'}" style="background: var(--c)"></span>

                <span class="font-mono text-[11px] tracking-widest transition-colors duration-200 {active ? 'text-black/70 dark:text-white/70' : 'text-black/55 dark:text-white/50'}">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span class="flex items-center gap-4 min-w-0">
                  <span class="text-3xl md:text-5xl font-medium tracking-[-0.03em] transition-colors duration-200 {active ? 'text-black dark:text-white' : 'text-black/55 dark:text-white/50 group-hover:text-black/60 dark:group-hover:text-white/60'}">
                    {tool.name}
                  </span>
                  <img src={tool.icon} alt="" class="w-6 h-6 md:w-7 md:h-7 object-contain transition-[opacity,transform] duration-300 ease-out {active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}" />
                </span>
                <span class="hidden sm:block font-mono text-[10px] uppercase tracking-widest text-right transition-colors duration-200 {active ? 'text-black/60 dark:text-white/60' : 'text-black/55 dark:text-white/50'}">
                  {t.stack.tools[i].role}
                </span>

                <!-- Mobile: description inline, since the preview panel is desktop-only -->
                <span class="md:hidden col-start-2 col-span-2 mt-2 text-sm leading-relaxed text-black/60 dark:text-white/60">
                  {t.stack.tools[i].desc}
                </span>
              </button>
            </li>
          {/each}
        </ol>

        <!-- Preview panel -->
        <div class="hidden md:block md:col-span-5">
          <div class="sticky top-[6.5rem] p-10">
            {#key activeTool}
              {@const tool = stack[activeTool]}
              <div in:fade={{ duration: 180 }} style="--c: {tool.color}" class="relative">
                <div class="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_srgb,var(--c)_16%,transparent),transparent_60%)]"></div>

                <div class="relative flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-black/55 dark:text-white/45">
                  <span>{String(activeTool + 1).padStart(2, '0')} / {String(stack.length).padStart(2, '0')}</span>
                  <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full" style="background: var(--c)"></span>{t.stack.tools[activeTool].role}</span>
                </div>

                <div class="relative mt-10 w-20 h-20 p-4 flex items-center justify-center border border-black/10 dark:border-white/10 bg-[#FAF9F8] dark:bg-[#0b0b0b]">
                  <img src={tool.icon} alt="" class="w-full h-full object-contain" />
                </div>

                <h3 class="relative mt-6 text-4xl font-medium tracking-tight text-black dark:text-white">{tool.name}</h3>
                <p class="relative mt-3 max-w-sm text-base leading-relaxed text-black/60 dark:text-white/60">{t.stack.tools[activeTool].desc}</p>

                <!-- Code sample framed like an editor tab -->
                <div class="relative mt-8 border border-black/10 dark:border-white/10 bg-[#FAF9F8] dark:bg-[#0b0b0b]">
                  <div class="flex items-center gap-2 px-4 py-2 border-b border-black/10 dark:border-white/10 font-mono text-[10px] tracking-wider text-black/55 dark:text-white/45">
                    <span class="w-1.5 h-1.5 rounded-full" style="background: var(--c)"></span>{tool.file}
                  </div>
                  <pre class="px-4 py-3 font-mono text-xs leading-relaxed text-black/75 dark:text-white/75 overflow-x-auto">{tool.code.join('\n')}</pre>
                </div>
              </div>
            {/key}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT & BOTTOM CTA -->
  <section id="contact" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col items-center justify-center py-24 md:py-32 px-6 text-center scroll-reveal border-b border-black/10 dark:border-white/10">
      <div class="text-[10px] uppercase font-mono tracking-widest text-black/55 dark:text-white/50 mb-6">
        {t.contact.eyebrow}
      </div>

      <h2 class="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 text-black dark:text-white">
        {t.contact.titlePre} <span class="font-serif italic font-normal">{t.contact.titleEm}</span>{t.contact.titlePost}
      </h2>
      <p class="text-black/60 dark:text-white/60 mb-10 max-w-md text-base leading-relaxed">
        {t.contact.body}
      </p>

      <div class="flex flex-wrap items-center justify-center gap-3">
        <a href="mailto:{site.email}" class="px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-[11px] font-mono font-bold uppercase tracking-[0.12em] hover:opacity-80 transition-opacity">
          {t.contact.email}
        </a>
        <a href={site.github} target="_blank" rel="noreferrer" class="group relative overflow-hidden px-6 py-3 border border-black/20 dark:border-white/20 text-black dark:text-white text-[11px] font-mono font-bold uppercase tracking-[0.12em] transition-colors duration-500 hover:border-transparent hover:text-white hover:bg-zinc-900 dark:hover:bg-transparent focus-visible:border-transparent focus-visible:text-white focus-visible:bg-zinc-900 dark:focus-visible:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D81FF]">
          <!-- Same colorful glow as the hero CTA, revealed on hover -->
          <span class="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 blur transition-opacity duration-500 group-hover:opacity-80 group-focus-visible:opacity-80" aria-hidden="true"></span>
          <span class="relative">{t.contact.github}</span>
        </a>
        <a href="#hero" class="group relative overflow-hidden px-6 py-3 border border-black/20 dark:border-white/20 text-black dark:text-white text-[11px] font-mono font-bold uppercase tracking-[0.12em] transition-colors duration-500 hover:border-transparent hover:text-white hover:bg-zinc-900 dark:hover:bg-transparent focus-visible:border-transparent focus-visible:text-white focus-visible:bg-zinc-900 dark:focus-visible:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D81FF]">
          <!-- Same colorful glow as the hero CTA, revealed on hover -->
          <span class="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 blur transition-opacity duration-500 group-hover:opacity-80 group-focus-visible:opacity-80" aria-hidden="true"></span>
          <span class="relative">{t.contact.top}</span>
        </a>
      </div>
    </div>
  </section>

</div>

<style>
  .hero-char:global(.scrambling) {
    color: transparent;
  }
  .hero-char:global(.scrambling)::after {
    content: attr(data-glyph);
    position: absolute;
    inset: 0;
    text-align: center;
    color: #2D81FF;
  }

  /* Principle B: width animates on purpose, the reflow is the demo */
  .rz-frame {
    container-type: inline-size;
    width: 100%;
    animation: rz-resize 7s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  @keyframes rz-resize {
    0%, 12% { width: 100%; }
    33%, 45% { width: 58%; }
    66%, 78% { width: 32%; }
    100% { width: 100%; }
  }
  .rz-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 6px;
  }
  .rz-grid i {
    display: block;
    height: 21px;
    background: rgb(0 0 0 / 0.08);
  }
  :global(.dark) .rz-grid i { background: rgb(255 255 255 / 0.1); }
  .rz-grid .rz-hd { grid-column: 1 / -1; height: 8px; background: #2D81FF; opacity: 0.5; }
  .rz-grid .rz-main { grid-row: span 2; height: 48px; }
  @container (max-width: 160px) {
    .rz-grid { grid-template-columns: 1fr; }
    .rz-grid .rz-main { grid-row: auto; height: 32px; }
    .rz-grid i { height: 12px; }
  }

  /* Principle C: ring hops one control (w-14 + gap-2 = 64px) per Tab press */
  .fk-ring {
    outline: 2px solid #2D81FF;
    outline-offset: 3px;
    animation: fk-hop 4.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
  }
  @keyframes fk-hop {
    0%, 25% { transform: translateX(0); }
    33%, 58% { transform: translateX(64px); }
    66%, 91% { transform: translateX(128px); }
    100% { transform: translateX(0); }
  }
  .fk-key { animation: fk-press 4.5s ease-out infinite; }
  @keyframes fk-press {
    0%, 22%, 28%, 55%, 61%, 88%, 94%, 100% { transform: none; }
    25%, 58%, 91% { transform: translateY(2px); }
  }

  .caret { animation: caret-blink 1s steps(1) infinite; }
  @keyframes caret-blink { 50% { opacity: 0; } }

  /* Expertise thumbnails: dark ground, two corner glows, halftone dots fading out from the main glow */
  .thumb {
    background: #0B0812;
    isolation: isolate;
  }
  .thumb::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
      radial-gradient(65% 75% at var(--p1), var(--g1), transparent 70%),
      radial-gradient(60% 70% at var(--p2), var(--g2), transparent 70%);
    opacity: 0.6;
    transition: opacity 0.5s ease;
  }
  @media (hover: hover) and (pointer: fine) {
    article:hover .thumb::before { opacity: 0.9; }
  }
  .dots {
    position: absolute;
    inset: 0;
    z-index: -1;
    background-image: radial-gradient(rgb(255 255 255 / 0.25) 1px, transparent 1.4px);
    background-size: 7px 7px;
    mask-image: radial-gradient(55% 65% at var(--p1), #000, transparent);
  }
  /* Selected work: soft wash between two card colors, wide feathered blobs drifting over it,
     plus fine grain so the gradient never bands */
  .shot {
    --base: #F6F3EF;
    background: linear-gradient(135deg, color-mix(in srgb, var(--c0) 22%, var(--base)), color-mix(in srgb, var(--c2) 22%, var(--base)));
    isolation: isolate;
  }
  :global(.dark) .shot { --base: #0A0A0C; }
  .shot::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0.12;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    mix-blend-mode: soft-light;
    pointer-events: none;
  }
  .blob {
    position: absolute;
    z-index: -1;
    width: 115%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: radial-gradient(closest-side,
      color-mix(in srgb, var(--c) 85%, transparent) 0%,
      color-mix(in srgb, var(--c) 55%, transparent) 30%,
      color-mix(in srgb, var(--c) 22%, transparent) 60%,
      transparent 100%);
    opacity: 0.75;
    animation: blob-drift var(--dur) ease-in-out var(--delay) infinite alternate;
  }
  :global(.dark) .blob { opacity: 0.45; }
  @keyframes blob-drift {
    0% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(6%, -4%) scale(1.06); }
    100% { transform: translate(-5%, 3%) scale(0.97); }
  }

  /* Thumbnail loops. Base styles are the resting frame shown under reduced motion. */
  .flow-comet {
    stroke-dasharray: 90 1100;
    animation: flow-run 4s linear infinite;
    filter: drop-shadow(0 0 6px #F97316);
  }
  @keyframes flow-run {
    from { stroke-dashoffset: 90; }
    to { stroke-dashoffset: -1000; }
  }
  .flow-ping {
    opacity: 0;
    transform-box: fill-box;
    transform-origin: center;
    animation: flow-ping 4s cubic-bezier(0.23, 1, 0.32, 1) infinite;
  }
  @keyframes flow-ping {
    0% { opacity: 0.9; transform: scale(0.6); }
    25%, 100% { opacity: 0; transform: scale(2); }
  }

  .ui-built {
    clip-path: inset(0 0 0 50%);
    animation: ui-clip 6s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  .ui-seam {
    transform: translateX(50%);
    animation: ui-seam 6s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  @keyframes ui-clip {
    0%, 15% { clip-path: inset(0 0 0 78%); }
    50%, 65% { clip-path: inset(0 0 0 22%); }
    100% { clip-path: inset(0 0 0 78%); }
  }
  @keyframes ui-seam {
    0%, 15% { transform: translateX(78%); }
    50%, 65% { transform: translateX(22%); }
    100% { transform: translateX(78%); }
  }

  /* each line types in (stepped clip), holds, then erases; --n staggers lines */
  .type-line {
    display: inline-block;
    animation: type-line 9s steps(14, end) calc(var(--n) * 0.3s) infinite both;
  }
  @keyframes type-line {
    0% { clip-path: inset(0 100% 0 0); }
    6%, 82% { clip-path: inset(0 0 0 0); }
    90%, 100% { clip-path: inset(0 100% 0 0); }
  }
  .preview {
    transform: perspective(700px) rotateY(-14deg) rotateX(6deg);
    box-shadow: 0 20px 40px -12px rgb(0 0 0 / 0.8), 0 0 0 1px rgb(124 58 237 / 0.25);
  }
  .hmr { animation: hmr 9s ease-out infinite; }
  @keyframes hmr {
    0%, 28% { opacity: 0; transform: translateY(4px); }
    32%, 80% { opacity: 1; transform: none; }
    86%, 100% { opacity: 0; transform: none; }
  }

  .perf-veil {
    clip-path: inset(0 0 0 100%);
    animation: perf-veil 4.5s linear infinite;
  }
  .perf-head {
    opacity: 0;
    animation: perf-head 4.5s linear infinite;
  }
  @keyframes perf-veil {
    0% { clip-path: inset(0 0 0 0); }
    65%, 100% { clip-path: inset(0 0 0 100%); }
  }
  @keyframes perf-head {
    0% { transform: translateX(0); opacity: 1; }
    65% { transform: translateX(100%); opacity: 1; }
    75%, 100% { transform: translateX(100%); opacity: 0; }
  }

  .tok-k { color: #C4B5FD; }
  .tok-a { color: #93C5FD; }
  .tok-s { color: #FDBA74; }
  .tok-f { color: #60A5FA; }
  .tok-t { color: rgb(255 255 255 / 0.9); }
  .tok-p { color: rgb(255 255 255 / 0.5); }

  @media (prefers-reduced-motion: reduce) {
    .rz-frame, .fk-ring, .fk-key, .caret, .flow-ping, .blob, .ui-built, .ui-seam, .type-line, .hmr, .perf-veil, .perf-head { animation: none; }
    .flow-comet { animation: none; stroke-dasharray: none; }
  }
</style>
