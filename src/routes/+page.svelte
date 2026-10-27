<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { Code, Laptop, PaintBrush, RocketLaunch } from 'phosphor-svelte';
  import { fade } from 'svelte/transition';
  import { getI18n } from '#lib/i18n/index.ts';
  import { site } from '#lib/site.ts';

  const i18n = getI18n();
  let t = $derived(i18n.t);

  let container: HTMLElement;
  let ctx: any;
  let heroVideo: HTMLVideoElement;

  // Order matches t.expertise.cards
  const cardIcons = [Code, PaintBrush, Laptop, RocketLaunch];

  // Order matches t.stack.tools
  const stack = [
    { name: 'Svelte 5', icon: '/assets/icons/tech/svelte.svg', color: '#FF3E00', file: 'counter.svelte',
      code: ['let count = $state(0);', 'let double = $derived(count * 2);'] },
    { name: 'React 19', icon: '/assets/icons/tech/react.svg', color: '#61DAFB', file: 'dialog.tsx',
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
    if (heroVideo && window.matchMedia('(prefers-reduced-motion: reduce)').matches) heroVideo.pause();
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
      <span class="flex items-center gap-2"><span class="text-black/35 dark:text-white/35">{n}</span><span>/</span><span>{left}</span></span>
      <span class="hidden sm:inline text-black/40 dark:text-white/40">{right}</span>
    </div>
  </div>
{/snippet}

<div bind:this={container} class="w-full flex-col">

  <!-- HERO SECTION -->
  <section id="hero" class="w-full relative min-h-[75vh] flex flex-col items-center justify-center pt-10 overflow-hidden border-b border-black/10 dark:border-white/10">

    <!-- Background video: dark source; light mode inverts it (hue-rotate keeps ray colors) into a pastel version -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <video bind:this={heroVideo} class="w-full h-full object-cover invert hue-rotate-180 saturate-150 contrast-125 mix-blend-multiply dark:invert-0 dark:hue-rotate-0 dark:saturate-100 dark:contrast-100 dark:mix-blend-normal" src="/assets/videos/hero.mp4" autoplay muted loop playsinline preload="metadata"></video>
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
          {t.hero.titlePre} <i class="font-serif font-light text-black/50 dark:text-white/50 italic">{t.hero.titleEm}</i>
        </h2>
        <p class="text-xs md:text-sm text-black/60 dark:text-white/60 max-w-lg mt-2 leading-relaxed">
          {t.hero.body}
        </p>
      </div>

      <div class="anim-el flex flex-wrap items-center justify-center gap-3">
        <a href="#work" class="px-5 sm:px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 transition-colors text-[10px] font-mono font-bold tracking-widest uppercase">
          {t.hero.ctaPrimary}
        </a>
        <a href="/about" class="px-5 sm:px-6 py-2.5 border border-black/20 dark:border-white/20 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-[10px] font-mono font-bold tracking-widest uppercase">
          {t.hero.ctaSecondary}
        </a>
      </div>
    </div>
  </section>

  <!-- DIVIDER BAR -->
  <div class="w-full border-b border-black/10 dark:border-white/10">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex items-center justify-between text-[8px] md:text-[10px] uppercase font-mono tracking-widest text-black/50 dark:text-white/50 py-2.5 px-6 md:px-10">
      <div class="flex items-center gap-3 sm:gap-4">
        <span class="flex items-center gap-1.5"><img src="/assets/icons/tech/nodejs.svg" alt="" class="w-3.5 h-3.5 object-contain" /><span>NODE.JS</span></span>
        <span>•</span>
        <span class="flex items-center gap-1.5"><img src="/assets/icons/tech/svelte.svg" alt="" class="w-3.5 h-3.5 object-contain" /><span>SVELTE 5</span></span>
        <span>•</span>
        <span class="flex items-center gap-1.5"><img src="/assets/icons/tech/tailwind.svg" alt="" class="w-3.5 h-3.5 object-contain" /><span>TAILWIND 3</span></span>
      </div>
      <div class="hidden md:flex items-center gap-4">
        <span class="flex items-center gap-1.5"><img src="/assets/icons/tech/figma.svg" alt="" class="w-3.5 h-3.5 object-contain" /><span>FIGMA</span></span>
      </div>
    </div>
  </div>

  <!-- EXPERTISE SECTION -->
  <section id="work" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col">
      {@render eyebrow('01', t.expertise.eyebrow, t.expertise.eyebrowRight)}

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
          {@const Icon = cardIcons[i]}
          <article class="bg-[#FAF9F8] dark:bg-[#050505] flex flex-col scroll-reveal">
            <div class="flex items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 px-6 py-2.5 md:px-8 text-[11px] font-mono tracking-widest text-black/50 dark:text-white/50 uppercase">
              <span>{card.category}</span>
              <span>{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div class="relative aspect-video w-full overflow-hidden bg-black/[0.03] dark:bg-white/[0.03] flex items-center justify-center">
              <Icon class="w-12 h-12 text-black/20 dark:text-white/20" />
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
      {@render eyebrow('02', t.approach.eyebrow, t.approach.eyebrowRight)}

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
            <div class="flex items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 px-6 py-2.5 md:px-8 text-[11px] font-mono tracking-widest text-black/50 dark:text-white/50">
              <span>{'ABC'[i]}</span>
              <span>{['types.ts', '@container', ':focus-visible'][i]}</span>
            </div>

            <div class="relative aspect-[4/3] overflow-hidden bg-black/[0.03] dark:bg-white/[0.03] flex items-center justify-center p-8" aria-hidden="true">
              {#if i === 0}
                <!-- Maintainable: a typed, single-purpose unit that passes the checker -->
                <div class="w-full max-w-[15rem] border border-black/10 dark:border-white/10 bg-[#FAF9F8] dark:bg-[#050505] p-4 font-mono text-[11px] leading-relaxed text-black/70 dark:text-white/70">
                  <div><span class="text-[#2D81FF]">type</span> Card = {'{'}</div>
                  {#each [['title', 'string'], ['body', 'string'], ['tags?', 'string[]']] as [key, type]}
                    <div class="pl-4">{key}: <span class="px-0.5 text-black/45 dark:text-white/45 transition-colors group-hover:bg-[#2D81FF]/10 group-hover:text-[#2D81FF]">{type}</span></div>
                  {/each}
                  <div>{'}'}<span class="caret">▍</span></div>
                  <div class="mt-3 pt-3 border-t border-black/10 dark:border-white/10 flex items-center gap-2 text-[10px] text-black/50 dark:text-white/50">
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
                  <span class="font-mono text-[10px] tracking-widest text-black/40 dark:text-white/40">375 — 1440</span>
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
      {@render eyebrow('03', t.stack.eyebrow, t.stack.eyebrowRight)}

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

                <span class="font-mono text-[11px] tracking-widest transition-colors duration-200 {active ? 'text-black/70 dark:text-white/70' : 'text-black/30 dark:text-white/30'}">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span class="flex items-center gap-4 min-w-0">
                  <span class="text-3xl md:text-5xl font-medium tracking-[-0.03em] transition-colors duration-200 {active ? 'text-black dark:text-white' : 'text-black/35 dark:text-white/35 group-hover:text-black/60 dark:group-hover:text-white/60'}">
                    {tool.name}
                  </span>
                  <img src={tool.icon} alt="" class="w-6 h-6 md:w-7 md:h-7 object-contain transition-[opacity,transform] duration-300 ease-out {active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}" />
                </span>
                <span class="hidden sm:block font-mono text-[10px] uppercase tracking-widest text-right transition-colors duration-200 {active ? 'text-black/60 dark:text-white/60' : 'text-black/30 dark:text-white/30'}">
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

                <div class="relative flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-black/45 dark:text-white/45">
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
                  <div class="flex items-center gap-2 px-4 py-2 border-b border-black/10 dark:border-white/10 font-mono text-[10px] tracking-wider text-black/45 dark:text-white/45">
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
      <div class="text-[10px] uppercase font-mono tracking-widest text-black/50 dark:text-white/50 mb-6">
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
        <a href={site.github} target="_blank" rel="noreferrer" class="px-6 py-3 border border-black/20 dark:border-white/20 text-black dark:text-white text-[11px] font-mono font-bold uppercase tracking-[0.12em] hover:border-transparent transition-colors">
          {t.contact.github}
        </a>
        <a href="#hero" class="px-6 py-3 border border-black/20 dark:border-white/20 text-black dark:text-white text-[11px] font-mono font-bold uppercase tracking-[0.12em] hover:border-transparent transition-colors">
          {t.contact.top}
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

  @media (prefers-reduced-motion: reduce) {
    .rz-frame, .fk-ring, .fk-key, .caret { animation: none; }
  }
</style>
