<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { Code, Laptop, PaintBrush, RocketLaunch } from 'phosphor-svelte';

  let container: HTMLElement;
  let ctx: any;

  const floatingImages = [
    { top: '15%', left: '8%', size: 'w-32 h-20', delay: 0 },
    { top: '12%', right: '12%', size: 'w-48 h-28', delay: 0.2 },
    { top: '45%', left: '3%', size: 'w-24 h-16', delay: 0.4 },
    { top: '50%', right: '5%', size: 'w-40 h-24', delay: 0.6 },
    { bottom: '15%', left: '12%', size: 'w-48 h-28', delay: 0.1 },
    { bottom: '10%', right: '15%', size: 'w-32 h-20', delay: 0.3 }
  ];

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!container) return;

    ctx = gsap.context(() => {
      gsap.from('.anim-el', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.2
      });

      // Floating images radiating animation
      gsap.utils.toArray('.floating-img').forEach((img: any, i) => {
        gsap.from(img, {
          scale: 0.8,
          opacity: 0,
          duration: 1.5,
          delay: 0.5 + (i * 0.1),
          ease: 'power2.out'
        });
        
        gsap.to(img, {
          y: `+=${gsap.utils.random(10, 25)}`,
          rotation: `+=${gsap.utils.random(-3, 3)}`,
          duration: gsap.utils.random(4, 6),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
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

<div bind:this={container} class="w-full flex-col">
  
  <!-- HERO SECTION -->
  <section id="hero" class="w-full relative min-h-[75vh] flex flex-col items-center justify-center pt-10 overflow-hidden border-b border-black/10 dark:border-white/10">
    
    <!-- Floating Orbit Images (simulated bg elements) -->
    <div class="absolute inset-0 pointer-events-none hidden md:block">
      {#each floatingImages as img}
        <div class="floating-img absolute {img.size} rounded-sm overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-[2px] shadow-sm flex items-center justify-center" style="top: {img.top}; left: {img.left}; right: {img.right}; bottom: {img.bottom};">
          <div class="w-full h-full bg-black/10 dark:bg-white/10 opacity-50 mix-blend-overlay"></div>
        </div>
      {/each}
      <!-- Orbit lines -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] border border-black/5 dark:border-white/5 rounded-full border-dashed opacity-50"></div>
    </div>
    
    <div class="z-10 flex flex-col items-center text-center max-w-4xl px-4 mx-auto w-full">
      <h1 class="anim-el text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-bold tracking-tighter leading-none text-black dark:text-white mb-6">
        HARUN<br/>BAHRUDIN
      </h1>
      
      <div class="anim-el flex flex-col items-center gap-2 mb-8 bg-[#FAF9F8] dark:bg-[#050505] px-4 py-2 border border-black/10 dark:border-white/10 rounded-sm">
        <h2 class="text-xl md:text-2xl font-bold tracking-tight text-black dark:text-white mt-1">
          Capable engineering <i class="font-serif font-light text-black/50 dark:text-white/50 italic">for products.</i>
        </h2>
        <p class="text-xs md:text-sm text-black/60 dark:text-white/60 max-w-lg mt-2 leading-relaxed">
          Harun builds structural logic for user products. We pride ourselves on freedom of frontend control and robust architecture execution.
        </p>
      </div>

      <div class="anim-el flex flex-wrap items-center justify-center gap-3">
        <a href="#work" class="px-5 sm:px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 transition-colors text-[10px] font-mono font-bold tracking-widest uppercase">
          View Selected Work
        </a>
        <a href="/about" class="px-5 sm:px-6 py-2.5 border border-black/20 dark:border-white/20 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-[10px] font-mono font-bold tracking-widest uppercase">
          About Story
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
        <span>•</span>
        <span class="flex items-center gap-1.5"><img src="/assets/icons/tech/playwright.svg" alt="" class="w-3.5 h-3.5 object-contain" /><span>PLAYWRIGHT</span></span>
      </div>
    </div>
  </div>

  <!-- FEATURES SECTION -->
  <section id="work" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col">
      <!-- Sticky Eyebrow Header (1:1 ArtCraft Sticky Bar) -->
      <div class="sticky top-12 z-30 border-y border-black/10 dark:border-white/10 bg-[#FAF9F8]/80 dark:bg-[#050505]/80 backdrop-blur-md transition-colors">
        <div class="flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-black/60 dark:text-white/60 py-3 px-6 md:px-10">
          <span class="flex items-center gap-2"><span class="text-black/35 dark:text-white/35">01</span><span>/</span><span>SELECTED WORK</span></span>
          <span class="hidden sm:inline text-black/40 dark:text-white/40">ENGINEERING & INTERFACES</span>
        </div>
      </div>
      
      <!-- Title -->
      <div class="pt-16 pb-20 px-6 md:px-10 scroll-reveal border-b border-black/10 dark:border-white/10">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.035em] text-black dark:text-white leading-[1.02] max-w-3xl">
          The precision that mere <span class="font-serif italic font-normal">prompts</span> cannot buy.
        </h2>
        <p class="mt-5 text-black/60 dark:text-white/60 text-lg max-w-xl leading-relaxed">
          Code generation is neat, but actual products crave structural integrity. Compose the architecture yourself — then execute the perfect frontend.
        </p>
      </div>

      <!-- EXACT ARTCRAFT GRID STYLE -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-px border-b border-black/10 dark:border-white/10 bg-black/10 dark:bg-white/10">
        
        <!-- Card 1 -->
        <article class="bg-[#FAF9F8] dark:bg-[#050505] flex flex-col scroll-reveal">
          <div class="flex items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 px-6 py-2.5 md:px-8 text-[11px] font-mono tracking-widest text-black/50 dark:text-white/50 uppercase">
            <span>Product Engineering</span>
            <span>01</span>
          </div>
          <div class="relative aspect-video w-full overflow-hidden bg-black/[0.03] dark:bg-white/[0.03] flex items-center justify-center">
            <Code class="w-12 h-12 text-black/20 dark:text-white/20" />
          </div>
          <div class="px-6 py-6 md:px-8">
            <h3 class="font-display text-2xl font-medium tracking-tight text-black dark:text-white">Systems to Architecture</h3>
            <p class="mt-2 max-w-xl leading-relaxed text-sm text-black/60 dark:text-white/60">
              Place robust logic environments. Establish single-repository consistency without states disappearing.
            </p>
          </div>
        </article>

        <!-- Card 2 -->
        <article class="bg-[#FAF9F8] dark:bg-[#050505] flex flex-col scroll-reveal">
          <div class="flex items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 px-6 py-2.5 md:px-8 text-[11px] font-mono tracking-widest text-black/50 dark:text-white/50 uppercase">
            <span>Frontend Engineering</span>
            <span>02</span>
          </div>
          <div class="relative aspect-video w-full overflow-hidden bg-black/[0.03] dark:bg-white/[0.03] flex items-center justify-center">
            <Laptop class="w-12 h-12 text-black/20 dark:text-white/20" />
          </div>
          <div class="px-6 py-6 md:px-8">
            <h3 class="font-display text-2xl font-medium tracking-tight text-black dark:text-white">Build interfaces with depth</h3>
            <p class="mt-2 max-w-xl leading-relaxed text-sm text-black/60 dark:text-white/60">
              Use Svelte, React, and exact styling tools to build scenes with real interaction depth.
            </p>
          </div>
        </article>

        <!-- Card 3 -->
        <article class="bg-[#FAF9F8] dark:bg-[#050505] flex flex-col scroll-reveal">
          <div class="flex items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 px-6 py-2.5 md:px-8 text-[11px] font-mono tracking-widest text-black/50 dark:text-white/50 uppercase">
            <span>UI/UX Design</span>
            <span>03</span>
          </div>
          <div class="relative aspect-video w-full overflow-hidden bg-black/[0.03] dark:bg-white/[0.03] flex items-center justify-center">
            <PaintBrush class="w-12 h-12 text-black/20 dark:text-white/20" />
          </div>
          <div class="px-6 py-6 md:px-8">
            <h3 class="font-display text-2xl font-medium tracking-tight text-black dark:text-white">Precise layered control</h3>
            <p class="mt-2 max-w-xl leading-relaxed text-sm text-black/60 dark:text-white/60">
              Combine wireframes, motion curves, layouts, and accessibility boundaries to compose software the way you imagined it.
            </p>
          </div>
        </article>

        <!-- Card 4 -->
        <article class="bg-[#FAF9F8] dark:bg-[#050505] flex flex-col scroll-reveal">
          <div class="flex items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 px-6 py-2.5 md:px-8 text-[11px] font-mono tracking-widest text-black/50 dark:text-white/50 uppercase">
            <span>Performance</span>
            <span>04</span>
          </div>
          <div class="relative aspect-video w-full overflow-hidden bg-black/[0.03] dark:bg-white/[0.03] flex items-center justify-center">
            <RocketLaunch class="w-12 h-12 text-black/20 dark:text-white/20" />
          </div>
          <div class="px-6 py-6 md:px-8">
            <h3 class="font-display text-2xl font-medium tracking-tight text-black dark:text-white">60fps as a baseline</h3>
            <p class="mt-2 max-w-xl leading-relaxed text-sm text-black/60 dark:text-white/60">
              Turning hardware limits into fluid experiences. Block complex DOM layouts with intentional layouting instead of raw divs.
            </p>
          </div>
        </article>

      </div>
    </div>
  </section>

  <!-- PHILOSOPHY / ABOUT SECTION -->
  <section id="about" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col">
      <!-- Sticky Eyebrow Header (1:1 ArtCraft Sticky Bar) -->
      <div class="sticky top-12 z-30 border-y border-black/10 dark:border-white/10 bg-[#FAF9F8]/80 dark:bg-[#050505]/80 backdrop-blur-md transition-colors">
        <div class="flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-black/60 dark:text-white/60 py-3 px-6 md:px-10">
          <span class="flex items-center gap-2"><span class="text-black/35 dark:text-white/35">02</span><span>/</span><span>ABOUT & PHILOSOPHY</span></span>
          <span class="hidden sm:inline text-black/40 dark:text-white/40">OWNERSHIP OVER TEMPLATES</span>
        </div>
      </div>
      
      <!-- Title -->
      <div class="pt-16 pb-20 px-6 md:px-10 scroll-reveal border-b border-black/10 dark:border-white/10">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.035em] text-black dark:text-white leading-[1.02] max-w-3xl">
          Stop <span class="font-serif italic font-normal">renting</span> from templates.
        </h2>
        <p class="mt-5 text-black/60 dark:text-white/60 text-lg max-w-xl leading-relaxed">
          The codebase is yours to own and scale, forever. No unmaintainable shortcuts, no framework lock-ins.
        </p>
      </div>

      <!-- Multi-Column text block -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-px border-b border-black/10 dark:border-white/10 scroll-reveal bg-black/10 dark:bg-white/10">
        <div class="p-6 md:p-8 bg-[#FAF9F8] dark:bg-[#050505]">
          <div class="text-[11px] font-mono mb-6 text-black/40 dark:text-white/40">A</div>
          <h4 class="font-display text-2xl font-medium tracking-tight text-black dark:text-white mb-2">Systems built to scale</h4>
          <p class="mt-2 text-sm text-black/60 dark:text-white/60 leading-relaxed">Strictly typed, decoupled layers. Build it once, scale it indefinitely.</p>
        </div>
        <div class="p-6 md:p-8 bg-[#FAF9F8] dark:bg-[#050505]">
          <div class="text-[11px] font-mono mb-6 text-black/40 dark:text-white/40">B</div>
          <h4 class="font-display text-2xl font-medium tracking-tight text-black dark:text-white mb-2">High Frame Rates</h4>
          <p class="mt-2 text-sm text-black/60 dark:text-white/60 leading-relaxed">CSS-first motion and optimized repaints. 60fps budgets observed strictly.</p>
        </div>
        <div class="p-6 md:p-8 bg-[#FAF9F8] dark:bg-[#050505]">
          <div class="text-[11px] font-mono mb-6 text-black/40 dark:text-white/40">C</div>
          <h4 class="font-display text-2xl font-medium tracking-tight text-black dark:text-white mb-2">Flawless Accessibility</h4>
          <p class="mt-2 text-sm text-black/60 dark:text-white/60 leading-relaxed">WCAG parity is not an afterthought, it is the architectural baseline.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- STACK & PROOF SECTION -->
  <section id="proof" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col">
      <!-- Sticky Eyebrow Header (1:1 ArtCraft Sticky Bar) -->
      <div class="sticky top-12 z-30 border-y border-black/10 dark:border-white/10 bg-[#FAF9F8]/80 dark:bg-[#050505]/80 backdrop-blur-md transition-colors">
        <div class="flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-black/60 dark:text-white/60 py-3 px-6 md:px-10">
          <span class="flex items-center gap-2"><span class="text-black/35 dark:text-white/35">03</span><span>/</span><span>STACK & ARTIFACTS</span></span>
          <span class="hidden sm:inline text-black/40 dark:text-white/40">PRODUCTION TOOLCHAIN</span>
        </div>
      </div>
      
      <!-- Title -->
      <div class="py-16 md:py-20 px-6 md:px-10 scroll-reveal border-b border-black/10 dark:border-white/10">
        <h2 class="text-4xl md:text-5xl font-medium tracking-tight text-black dark:text-white">
          Made <span class="font-serif italic font-normal">with</span> Structure.
        </h2>
        <p class="mt-4 text-black/60 dark:text-white/60 text-base max-w-xl leading-relaxed">
          Delivering production grade code with verified typings, minimal bundle size, and responsive fidelity across viewport widths.
        </p>
      </div>

      <!-- Tech Stack Badges Grid (Icon + Text from thesvg.org) -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px border-b border-black/10 dark:border-white/10 bg-black/10 dark:bg-white/10 font-mono">
        
        <!-- Svelte 5 -->
        <div class="p-6 bg-[#FAF9F8] dark:bg-[#050505] flex flex-col items-center justify-center text-center gap-3 group hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
          <div class="w-11 h-11 rounded-sm bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 flex items-center justify-center p-2.5 group-hover:scale-110 transition-transform">
            <img src="/assets/icons/tech/svelte.svg" alt="Svelte 5" class="w-full h-full object-contain" />
          </div>
          <div class="flex flex-col items-center">
            <span class="text-xs font-bold tracking-wider text-black dark:text-white">SVELTE 5</span>
            <span class="text-[9px] text-black/45 dark:text-white/45 tracking-widest mt-0.5">REACTIVE ENGINE</span>
          </div>
        </div>

        <!-- React 19 -->
        <div class="p-6 bg-[#FAF9F8] dark:bg-[#050505] flex flex-col items-center justify-center text-center gap-3 group hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
          <div class="w-11 h-11 rounded-sm bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 flex items-center justify-center p-2.5 group-hover:scale-110 transition-transform">
            <img src="/assets/icons/tech/react.svg" alt="React 19" class="w-full h-full object-contain" />
          </div>
          <div class="flex flex-col items-center">
            <span class="text-xs font-bold tracking-wider text-black dark:text-white">REACT 19</span>
            <span class="text-[9px] text-black/45 dark:text-white/45 tracking-widest mt-0.5">UI COMPONENTRY</span>
          </div>
        </div>

        <!-- TypeScript -->
        <div class="p-6 bg-[#FAF9F8] dark:bg-[#050505] flex flex-col items-center justify-center text-center gap-3 group hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
          <div class="w-11 h-11 rounded-sm bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 flex items-center justify-center p-2.5 group-hover:scale-110 transition-transform">
            <img src="/assets/icons/tech/typescript.svg" alt="TypeScript" class="w-full h-full object-contain" />
          </div>
          <div class="flex flex-col items-center">
            <span class="text-xs font-bold tracking-wider text-black dark:text-white">TYPESCRIPT</span>
            <span class="text-[9px] text-black/45 dark:text-white/45 tracking-widest mt-0.5">STRICT CONTRACTS</span>
          </div>
        </div>

        <!-- Tailwind CSS -->
        <div class="p-6 bg-[#FAF9F8] dark:bg-[#050505] flex flex-col items-center justify-center text-center gap-3 group hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
          <div class="w-11 h-11 rounded-sm bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 flex items-center justify-center p-2.5 group-hover:scale-110 transition-transform">
            <img src="/assets/icons/tech/tailwind.svg" alt="Tailwind CSS" class="w-full h-full object-contain" />
          </div>
          <div class="flex flex-col items-center">
            <span class="text-xs font-bold tracking-wider text-black dark:text-white">TAILWIND</span>
            <span class="text-[9px] text-black/45 dark:text-white/45 tracking-widest mt-0.5">DESIGN SYSTEM</span>
          </div>
        </div>

        <!-- GSAP -->
        <div class="p-6 bg-[#FAF9F8] dark:bg-[#050505] flex flex-col items-center justify-center text-center gap-3 group hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
          <div class="w-11 h-11 rounded-sm bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 flex items-center justify-center p-2.5 group-hover:scale-110 transition-transform">
            <img src="/assets/icons/tech/gsap.svg" alt="GSAP Motion" class="w-full h-full object-contain" />
          </div>
          <div class="flex flex-col items-center">
            <span class="text-xs font-bold tracking-wider text-black dark:text-white">GSAP</span>
            <span class="text-[9px] text-black/45 dark:text-white/45 tracking-widest mt-0.5">MOTION RUNTIME</span>
          </div>
        </div>

        <!-- Playwright -->
        <div class="p-6 bg-[#FAF9F8] dark:bg-[#050505] flex flex-col items-center justify-center text-center gap-3 group hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
          <div class="w-11 h-11 rounded-sm bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 flex items-center justify-center p-2.5 group-hover:scale-110 transition-transform">
            <img src="/assets/icons/tech/playwright.svg" alt="Playwright E2E" class="w-full h-full object-contain" />
          </div>
          <div class="flex flex-col items-center">
            <span class="text-xs font-bold tracking-wider text-black dark:text-white">PLAYWRIGHT</span>
            <span class="text-[9px] text-black/45 dark:text-white/45 tracking-widest mt-0.5">E2E RELIABILITY</span>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- CONTACT & BOTTOM CTA -->
  <section id="contact" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col items-center justify-center py-24 md:py-32 px-6 text-center scroll-reveal border-b border-black/10 dark:border-white/10">
      <div class="text-[10px] uppercase font-mono tracking-widest text-black/50 dark:text-white/50 mb-6">
        OPEN FOR PRODUCT & ENGINEERING COLLABORATIONS
      </div>
      
      <h2 class="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 text-black dark:text-white">
        Start <span class="font-serif italic font-normal">a conversation</span>.
      </h2>
      <p class="text-black/60 dark:text-white/60 mb-10 max-w-md text-base leading-relaxed">
        Looking for a product-minded engineer who takes ownership from architectural design to pixel-perfect UI execution?
      </p>

      <div class="flex flex-wrap items-center justify-center gap-3">
        <a href="mailto:harun@example.com" class="px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-[11px] font-mono font-bold uppercase tracking-[0.12em] hover:opacity-80 transition-opacity">
          Email Harun
        </a>
        <a href="https://github.com/harunbahrudin" target="_blank" rel="noreferrer" class="px-6 py-3 border border-black/20 dark:border-white/20 text-black dark:text-white text-[11px] font-mono font-bold uppercase tracking-[0.12em] hover:border-transparent transition-colors">
          GitHub Profile
        </a>
        <a href="#hero" class="px-6 py-3 border border-black/20 dark:border-white/20 text-black dark:text-white text-[11px] font-mono font-bold uppercase tracking-[0.12em] hover:border-transparent transition-colors">
          Back to Top
        </a>
      </div>
    </div>
  </section>

</div>
