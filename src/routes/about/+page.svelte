<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { 
    Terminal, 
    Cpu, 
    Headphones, 
    Books, 
    Sparkle, 
    ArrowUpRight,
    Play,
    CheckCircle,
    BookmarkSimple
  } from 'phosphor-svelte';

  let container: HTMLElement;
  let ctx: any;

  const milestones = [
    {
      year: '2024 — PRESENT',
      role: 'Staff Product & Frontend Engineer',
      company: 'Independent & Studio Engagements',
      tag: 'SYSTEMS ARCHITECTURE',
      deliverables: [
        'Architected high-throughput client state systems with zero external runtime dependencies.',
        'Engineered responsive design systems with sub-millisecond token resolution and WCAG AA parity.',
        'Mentored engineering teams on frame-budgeting, canvas optimizations, and GSAP sequencing.'
      ]
    },
    {
      year: '2022 — 2024',
      role: 'Senior Frontend Engineer',
      company: 'Digital Product Studio',
      tag: 'WEB INTERACTION',
      deliverables: [
        'Spearheaded frontend migration to modern reactive engines, cutting bundle sizes by 48%.',
        'Built real-time telemetry dashboards rendering 60fps streaming time-series data without frame drops.',
        'Standardized Playwright E2E testing pipelines across critical user checkout flows.'
      ]
    },
    {
      year: '2020 — 2022',
      role: 'Fullstack Systems Developer',
      company: 'Tech Solutions Lab',
      tag: 'APPLICATION PLATFORMS',
      deliverables: [
        'Designed decoupled RESTful microservices and reactive frontend state hydration layers.',
        'Built multi-tenant admin portals handling complex permissions and asynchronous batch exports.'
      ]
    },
    {
      year: '2018 — 2020',
      role: 'UI Developer & Motion Specialist',
      company: 'Creative Web Studio',
      tag: 'INTERACTION & CRAFT',
      deliverables: [
        'Bridged design mockups from Figma into responsive code with meticulous attention to motion curves.',
        'Created custom physics-based scroll animations and SVG micro-interactions.'
      ]
    }
  ];

  const storyChapters = [
    {
      node: '01',
      title: 'Roots in Curiosity & the Terminal',
      tag: 'THE GENESIS',
      period: '2017 — 2018',
      narrative: 'Like many self-taught builders, my journey started with an insatiable urge to understand what happens beneath the screen. I remember opening browser developer tools for the first time—discovering that the world was built out of plain text, HTML tags, and cascading rules. Coding immediately felt like the closest medium humans have to turning raw thought into interactive physical reality.',
      specs: [
        { label: 'DEVICE', val: 'Old ThinkPad X230' },
        { label: 'FIRST LANG', val: 'Vanilla JavaScript & CSS' },
        { label: 'KEY LESSON', val: 'Inspect element is a superpower' }
      ],
      specimenTitle: 'FIG 01 // FIRST_EXPERIMENTS.RAW',
      specimenSubtitle: 'MONOCHROME TERMINAL & SYNTAX EXPLORATION',
      specimenIcon: 'Terminal',
      accentColor: '#2D81FF'
    },
    {
      node: '02',
      title: 'Finding True Depth in Web Interfaces',
      tag: 'THE AWAKENING',
      period: '2019 — 2021',
      narrative: 'Frontend engineering is often misunderstood as merely painting mockups into divs. But as applications grew into complex distributed systems, I realized that the browser is one of the most demanding runtime environments on earth. I threw myself into layout engine internals, paint cycles, DOM diffing costs, and the art of keeping render trees lightweight and accessible.',
      specs: [
        { label: 'MILESTONE', val: 'First Production App' },
        { label: 'TOOLCHAIN', val: 'TypeScript + Component Libraries' },
        { label: 'CORE VALUE', val: 'Performance is a feature' }
      ],
      specimenTitle: 'FIG 02 // LAYOUT_ARCHITECTURE.SCHEMATIC',
      specimenSubtitle: '60FPS PERFORMANCE BENCHMARKING',
      specimenIcon: 'Cpu',
      accentColor: '#2D81FF'
    },
    {
      node: '03',
      title: 'The Philosophy of Complete Ownership',
      tag: 'THE MATURATION',
      period: '2022 — 2024',
      narrative: 'I stopped seeing myself as just a coder executing specifications. The best products are built by engineers who deeply care about product design, business constraints, and real human usability. Taking ownership means questioning unnecessary features, eliminating dependency bloat, crafting intuitive keyboard navigation, and building software meant to last a decade.',
      specs: [
        { label: 'FRAMEWORK', val: 'Decoupled Clean Architecture' },
        { label: 'FOCUS', val: 'Product Engineering & Craft' },
        { label: 'STANDARD', val: 'Zero Bloat, Zero Slop' }
      ],
      specimenTitle: 'FIG 03 // SYSTEMS_AND_TOKENS.SVG',
      specimenSubtitle: 'DESIGN SYSTEM TOKEN MAPPING',
      specimenIcon: 'Sparkle',
      accentColor: '#2D81FF'
    },
    {
      node: '04',
      title: 'Present Day: Building for Longevity',
      tag: 'CONTINUOUS PURSUIT',
      period: '2025 — PRESENT',
      narrative: 'Today, I work at the intersection of robust product logic and refined frontend craftsmanship. When I am not fine-tuning reactive state machines in Svelte or React, I am exploring generative tools, mechanical hardware, and typographic history. I build with pride, precision, and an uncompromising standard of taste.',
      specs: [
        { label: 'STATUS', val: 'Available for Select Contracts' },
        { label: 'TIMEZONE', val: 'Indonesia / UTC+7 (Remote)' },
        { label: 'MISSION', val: 'Software that feels like fine mechanics' }
      ],
      specimenTitle: 'FIG 04 // HARUN_PRODUCTION_ENV.CANVAS',
      specimenSubtitle: 'ACTIVE WORKSPACE MATRIX',
      specimenIcon: 'Books',
      accentColor: '#2D81FF'
    }
  ];

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
  <title>About — Harun Bahrudin</title>
</svelte:head>

<div bind:this={container} class="w-full flex flex-col">
  
  <!-- ABOUT HERO SECTION -->
  <section id="bio" class="w-full relative min-h-[65vh] flex flex-col justify-center pt-10 pb-16 overflow-hidden border-b border-black/10 dark:border-white/10">
    
    <!-- Background Technical Crosshairs (Hidden on mobile so it never slices through heading text) -->
    <div class="absolute inset-0 pointer-events-none hidden sm:flex justify-between px-8 md:px-16 opacity-15">
      <div class="h-full border-r border-dashed border-black dark:border-white"></div>
      <div class="h-full border-r border-dashed border-black dark:border-white"></div>
    </div>

    <div class="max-w-[1280px] mx-auto w-full px-5 sm:px-8 md:px-10 z-10 flex flex-col items-start">
      
      <!-- Eyebrow Meta Strip -->
      <div class="anim-about-hero flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
        <span class="px-2 py-0.5 bg-black text-white dark:bg-white dark:text-black font-mono text-[10px] font-bold tracking-widest uppercase">
          00 / BIOGRAPHY
        </span>
        <span class="font-mono text-[9px] sm:text-[10px] text-black/50 dark:text-white/50 tracking-wider">
          COORDINATES: HARUN_BAHRUDIN.MD // ORIGIN_STORY
        </span>
      </div>

      <!-- Main Display Headline -->
      <h1 class="anim-about-hero text-3xl sm:text-5xl md:text-6xl lg:text-[5.2rem] font-bold tracking-[-0.035em] text-black dark:text-white leading-[1.06] max-w-5xl mb-6 sm:mb-8">
        Architecting logic by day, <br/>
        <i class="font-serif italic font-normal text-black/50 dark:text-white/50">obsessing over interfaces</i> by night.
      </h1>

      <!-- Intro Subgrid -->
      <div class="anim-about-hero grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 w-full pt-6 sm:pt-8 border-t border-black/10 dark:border-white/10">
        <div class="md:col-span-8">
          <p class="text-base sm:text-lg text-black/75 dark:text-white/75 leading-relaxed max-w-3xl">
            I am Harun Bahrudin, a Product Engineer and Frontend Architect. I build software where technical rigor meets aesthetic restraint. I thrive in teams that reject generic AI templates and treat interface design as a discipline of precision engineering.
          </p>
        </div>

        <div class="md:col-span-4 flex flex-col justify-end items-start md:items-end gap-2.5 font-mono text-[11px] tracking-wider text-black/60 dark:text-white/60">
          <div class="flex items-center gap-2 px-3 py-1.5 border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>OPEN TO WORK & CONTRACTS</span>
          </div>
          <span class="text-[10px] text-black/40 dark:text-white/40">TIMEZONE: INDONESIA (UTC+7)</span>
        </div>
      </div>

    </div>
  </section>

  <!-- METRIC STATUS BAR -->
  <div class="w-full border-b border-black/10 dark:border-white/10">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between text-[9px] md:text-[11px] uppercase font-mono tracking-widest text-black/50 dark:text-white/50 py-3 px-6 md:px-10 gap-3">
      <div class="flex items-center gap-3">
        <span>STORYLINE: CHRONICLES OF AN ENGINEER</span>
        <span>•</span>
        <span>SPECIALIZATION: PRODUCT // FRONTEND</span>
      </div>
      <div class="flex items-center gap-4">
        <span>VERIFIED PROTOCOL // 100% HANDCRAFTED</span>
      </div>
    </div>
  </div>

  <!-- SECTION 01: STORY CHRONICLES (Braydon's Journey in ArtCraft Architecture) -->
  <section id="chronicles" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col">
      
      <!-- Section Header (Sticky 1:1 ArtCraft) -->
      <div class="sticky top-12 z-30 border-y border-black/10 dark:border-white/10 bg-[#FAF9F8]/80 dark:bg-[#050505]/80 backdrop-blur-md transition-colors">
        <div class="flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-black/60 dark:text-white/60 py-3 px-6 md:px-10">
          <span class="flex items-center gap-2"><span class="text-black/35 dark:text-white/35">01</span><span>/</span><span>CHRONICLES</span></span>
          <span class="hidden sm:inline text-black/40 dark:text-white/40">A STORY OF DISCOVERY & CRAFT</span>
        </div>
      </div>

      <!-- WORKSPACE BANNER SPECIMEN (Added right here as requested!) -->
      <div class="about-reveal w-full border-b border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] overflow-hidden relative group">
        <!-- Technical Spec Header Strip -->
        <div class="flex items-center justify-between font-mono text-[9px] sm:text-[10px] tracking-widest text-black/45 dark:text-white/45 px-6 md:px-10 py-2.5 border-b border-black/10 dark:border-white/10 bg-[#FAF9F8] dark:bg-[#050505]">
          <div class="flex items-center gap-3">
            <span class="w-1.5 h-1.5 bg-[#2D81FF] shadow-[0_0_6px_#2D81FF]"></span>
            <span>WORKSPACE SPECIMEN // BUILD • DESIGN • SHIP</span>
          </div>
          <div class="hidden sm:flex items-center gap-4">
            <span>RES: 4K ULTRA-WIDE</span>
            <span>•</span>
            <span>STATUS: ACTIVE ENVIRONMENT</span>
          </div>
        </div>

        <!-- Dynamic Theme Banner Image (Light / Dark Adaptive) -->
        <div class="relative w-full overflow-hidden bg-black/5 dark:bg-white/5">
          <!-- Crosshair corner indicators -->
          <div class="absolute top-2 left-3 z-10 text-[9px] font-mono text-black/40 dark:text-white/40 pointer-events-none select-none">+ 00.00</div>
          <div class="absolute top-2 right-3 z-10 text-[9px] font-mono text-black/40 dark:text-white/40 pointer-events-none select-none">+ 99.99</div>
          <div class="absolute bottom-2 left-3 z-10 text-[9px] font-mono text-black/40 dark:text-white/40 pointer-events-none select-none">HB_SYS_2026</div>
          <div class="absolute bottom-2 right-3 z-10 text-[9px] font-mono text-[#2D81FF] font-bold pointer-events-none select-none">ACTIVE ●</div>

          <!-- Light Mode Banner -->
          <img 
            src="/assets/images/banners/harun-banner-light.png" 
            alt="Harun Bahrudin — Build, Design, Ship (Daylight Workspace)" 
            class="w-full h-auto max-h-[480px] object-cover object-center dark:hidden transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            loading="eager"
          />

          <!-- Dark Mode Banner -->
          <img 
            src="/assets/images/banners/harun-banner-dark.png" 
            alt="Harun Bahrudin — Nighttime Developer Workspace" 
            class="w-full h-auto max-h-[480px] object-cover object-center hidden dark:block transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            loading="eager"
          />
        </div>

        <!-- Bottom Banner Caption Strip -->
        <div class="flex flex-wrap items-center justify-between font-mono text-[9px] sm:text-[10px] tracking-wider text-black/50 dark:text-white/50 px-6 md:px-10 py-2.5 border-t border-black/10 dark:border-white/10 bg-[#FAF9F8] dark:bg-[#050505] gap-2">
          <span>FIG 00 // HARUN BAHRUDIN WORKSPACE ENGINE</span>
          <span class="text-[#2D81FF] font-semibold">PRODUCT ENGINEER • UI/UX ENGINEER • FRONTEND ARCHITECT</span>
        </div>
      </div>

      <div class="py-14 md:py-20 px-6 md:px-10 border-b border-black/10 dark:border-white/10 about-reveal">
        <h2 class="text-3xl md:text-5xl font-medium tracking-tight text-black dark:text-white">
          The path to <span class="font-serif italic font-normal">engineering craft</span>.
        </h2>
        <p class="mt-4 text-black/60 dark:text-white/60 text-base md:text-lg max-w-xl leading-relaxed">
          How curiosity turned into an obsession with scalable code architectures, tactile design systems, and fluid digital experiences.
        </p>
      </div>

      <!-- Alternating Story Chapters (Zig-zag Storytelling) -->
      <div class="divide-y divide-black/10 dark:divide-white/10 border-b border-black/10 dark:border-white/10">
        {#each storyChapters as chapter, idx}
          <article class="about-reveal grid grid-cols-1 lg:grid-cols-12 gap-0 relative group">
            
            <!-- Chapter Info Column (Swaps order on desktop for alternating zig-zag rhythm!) -->
            <div class="lg:col-span-6 p-6 sm:p-10 border-b lg:border-b-0 {idx % 2 === 1 ? 'lg:order-2 lg:border-l border-black/10 dark:border-white/10' : 'lg:order-1 lg:border-r border-black/10 dark:border-white/10'} flex flex-col justify-between bg-[#FAF9F8] dark:bg-[#050505]">
              <div>
                <div class="flex items-center justify-between font-mono text-[11px] tracking-widest text-black/50 dark:text-white/50 mb-6">
                  <span class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-[#2D81FF] shadow-[0_0_8px_#2D81FF]"></span>
                    NODE {chapter.node}
                  </span>
                  <span>{chapter.period}</span>
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

              <!-- Technical Spec Table for Chapter -->
              <div class="mt-8 pt-6 border-t border-black/10 dark:border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[10px]">
                {#each chapter.specs as spec}
                  <div class="flex flex-col gap-1">
                    <span class="text-black/40 dark:text-white/40 tracking-wider">{spec.label}</span>
                    <span class="font-bold text-black/80 dark:text-white/80">{spec.val}</span>
                  </div>
                {/each}
              </div>
            </div>

            <!-- Chapter Artifact Specimen Box (Photo / Blueprint representation) -->
            <div class="lg:col-span-6 p-6 sm:p-10 {idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} bg-black/[0.015] dark:bg-white/[0.015] flex flex-col justify-center">
              
              <!-- Blueprint Card with technical frame -->
              <div class="w-full border border-black/10 dark:border-white/10 bg-[#FAF9F8] dark:bg-[#050505] p-5 relative shadow-sm transition-transform duration-300 group-hover:scale-[1.01]">
                
                <!-- Corner Crosshair Marks (+) -->
                <div class="absolute top-1 left-1 text-[8px] font-mono text-black/20 dark:text-white/20 select-none">+</div>
                <div class="absolute top-1 right-1 text-[8px] font-mono text-black/20 dark:text-white/20 select-none">+</div>
                <div class="absolute bottom-1 left-1 text-[8px] font-mono text-black/20 dark:text-white/20 select-none">+</div>
                <div class="absolute bottom-1 right-1 text-[8px] font-mono text-black/20 dark:text-white/20 select-none">+</div>

                <div class="flex items-center justify-between font-mono text-[9px] tracking-widest text-black/45 dark:text-white/45 pb-3 border-b border-black/5 dark:border-white/5 mb-4">
                  <span>{chapter.specimenTitle}</span>
                  <span>NODE_{chapter.node} // 2026.REL</span>
                </div>

                <!-- Graphic specimen window -->
                <div class="w-full aspect-[16/10] bg-black/[0.02] dark:bg-white/[0.02] border border-dashed border-black/15 dark:border-white/15 flex flex-col items-center justify-center relative overflow-hidden p-6 text-center">
                  <div class="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none"></div>

                  <div class="relative z-10 flex flex-col items-center gap-3">
                    <div class="w-12 h-12 rounded-sm border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center">
                      <Terminal class="w-6 h-6 text-[#2D81FF]" />
                    </div>
                    <span class="font-mono text-[11px] font-bold tracking-wider text-black dark:text-white uppercase">
                      {chapter.specimenSubtitle}
                    </span>
                    <span class="font-mono text-[9px] text-black/40 dark:text-white/40 tracking-widest">
                      LATENCY: 0.12MS • INTEGRITY: 100%
                    </span>
                  </div>
                </div>

                <div class="mt-4 flex items-center justify-between font-mono text-[9px] text-black/40 dark:text-white/40 pt-2 border-t border-black/5 dark:border-white/5">
                  <span>CANVAS REF: HARUN_STORY_CH{chapter.node}</span>
                  <span class="text-[#2D81FF]">STATUS: DOCUMENTED</span>
                </div>

              </div>

            </div>

          </article>
        {/each}
      </div>

    </div>
  </section>

  <!-- SECTION 02: CAREER TIMELINE / WORK HISTORY (Braydon's Experience in Clean ArtCraft Table) -->
  <section id="experience" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col">
      
      <!-- Section Header (Sticky 1:1 ArtCraft) -->
      <div class="sticky top-12 z-30 border-y border-black/10 dark:border-white/10 bg-[#FAF9F8]/80 dark:bg-[#050505]/80 backdrop-blur-md transition-colors">
        <div class="flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-black/60 dark:text-white/60 py-3 px-6 md:px-10">
          <span class="flex items-center gap-2"><span class="text-black/35 dark:text-white/35">02</span><span>/</span><span>CAREER TRAJECTORY</span></span>
          <span class="hidden sm:inline text-black/40 dark:text-white/40">VERIFIED WORK HISTORY & ROLES</span>
        </div>
      </div>

      <div class="py-14 md:py-20 px-6 md:px-10 border-b border-black/10 dark:border-white/10 about-reveal">
        <h2 class="text-3xl md:text-5xl font-medium tracking-tight text-black dark:text-white">
          Where I have delivered <span class="font-serif italic font-normal">measurable impact</span>.
        </h2>
        <p class="mt-4 text-black/60 dark:text-white/60 text-base md:text-lg max-w-xl leading-relaxed">
          A progression of architectural leadership, system scalability, and shipping mission-critical user interfaces.
        </p>
      </div>

      <!-- Experience Timeline Rows -->
      <div class="divide-y divide-black/10 dark:divide-white/10 border-b border-black/10 dark:border-white/10">
        {#each milestones as job}
          <div class="about-reveal grid grid-cols-1 md:grid-cols-12 gap-0 p-6 md:p-10 hover:bg-black/[0.015] dark:hover:bg-white/[0.015] transition-colors relative">
            
            <!-- Column 1: Timeframe & Tag -->
            <div class="md:col-span-3 mb-6 md:mb-0 flex flex-col justify-start">
              <span class="font-mono text-[12px] font-bold tracking-wider text-black dark:text-white">
                {job.year}
              </span>
              <span class="mt-2 font-mono text-[10px] tracking-widest text-[#2D81FF] font-semibold uppercase">
                {job.tag}
              </span>
            </div>

            <!-- Column 2: Role & Organization -->
            <div class="md:col-span-4 mb-6 md:mb-0 pr-6">
              <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white">
                {job.role}
              </h3>
              <p class="font-mono text-[12px] text-black/60 dark:text-white/60 mt-1">
                {job.company}
              </p>
            </div>

            <!-- Column 3: Impact Bullet Points -->
            <div class="md:col-span-5 flex flex-col gap-2.5">
              {#each job.deliverables as bullet}
                <div class="flex items-start gap-2.5 text-sm text-black/75 dark:text-white/75 leading-relaxed">
                  <span class="text-[#2D81FF] font-mono mt-0.5 select-none font-bold">›</span>
                  <span>{bullet}</span>
                </div>
              {/each}
            </div>

          </div>
        {/each}
      </div>

    </div>
  </section>

  <!-- SECTION 03: LIFE BEYOND CODE (Bento Grid of Interests & Quirks) -->
  <section id="curation" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col">
      
      <!-- Section Header (Sticky 1:1 ArtCraft) -->
      <div class="sticky top-12 z-30 border-y border-black/10 dark:border-white/10 bg-[#FAF9F8]/80 dark:bg-[#050505]/80 backdrop-blur-md transition-colors">
        <div class="flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-black/60 dark:text-white/60 py-3 px-6 md:px-10">
          <span class="flex items-center gap-2"><span class="text-black/35 dark:text-white/35">03</span><span>/</span><span>BEYOND THE SCREEN</span></span>
          <span class="hidden sm:inline text-black/40 dark:text-white/40">INTERESTS, HARDWARE & PHILOSOPHY</span>
        </div>
      </div>

      <div class="py-14 md:py-20 px-6 md:px-10 border-b border-black/10 dark:border-white/10 about-reveal">
        <h2 class="text-3xl md:text-5xl font-medium tracking-tight text-black dark:text-white">
          What shapes the <span class="font-serif italic font-normal">perspective</span>.
        </h2>
        <p class="mt-4 text-black/60 dark:text-white/60 text-base md:text-lg max-w-xl leading-relaxed">
          The inputs, physical tools, and curated rituals that inform my standards of engineering quality.
        </p>
      </div>

      <!-- Bento Grid 4 Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-px border-b border-black/10 dark:border-white/10 bg-black/10 dark:bg-white/10">
        
        <!-- Bento 1: Hardware Setup -->
        <article class="p-8 bg-[#FAF9F8] dark:bg-[#050505] flex flex-col justify-between about-reveal">
          <div>
            <div class="flex items-center justify-between text-[10px] font-mono tracking-widest text-black/50 dark:text-white/50 mb-6">
              <span>HARDWARE RIG</span>
              <span>01</span>
            </div>
            <div class="flex items-center gap-3 mb-4">
              <Cpu class="w-6 h-6 text-[#2D81FF]" />
              <h3 class="text-xl font-bold tracking-tight text-black dark:text-white">Minimalist Workstation</h3>
            </div>
            <p class="text-sm text-black/70 dark:text-white/70 leading-relaxed mb-6">
              Apple Silicon M-series machine running a dual 4K calibrated color canvas. Custom mechanical keyboard with lubricated linear switches, wired directly to a Ghostty terminal with Neovim.
            </p>
          </div>
          <div class="pt-4 border-t border-black/10 dark:border-white/10 font-mono text-[10px] tracking-wider text-black/50 dark:text-white/50">
            DESK PHILOSOPHY: ZERO CABLE CLUTTER // TACTILE FEEDBACK
          </div>
        </article>

        <!-- Bento 2: Ambient Soundscapes -->
        <article class="p-8 bg-[#FAF9F8] dark:bg-[#050505] flex flex-col justify-between about-reveal">
          <div>
            <div class="flex items-center justify-between text-[10px] font-mono tracking-widest text-black/50 dark:text-white/50 mb-6">
              <span>NOW LISTENING</span>
              <span>02</span>
            </div>
            <div class="flex items-center gap-3 mb-4">
              <Headphones class="w-6 h-6 text-[#2D81FF]" />
              <h3 class="text-xl font-bold tracking-tight text-black dark:text-white">Focus Frequencies</h3>
            </div>
            <p class="text-sm text-black/70 dark:text-white/70 leading-relaxed mb-6">
              Deep work soundtrack heavy on ambient drone, post-rock acoustics, modular synthesizers, and game scores (Hollow Knight, Celeste, Outer Wilds). Sound keeps cognitive load focused.
            </p>
          </div>
          <div class="pt-4 border-t border-black/10 dark:border-white/10 font-mono text-[10px] tracking-wider text-black/50 dark:text-white/50 flex items-center justify-between">
            <span>ROTATING VINYL & FLAC</span>
            <span class="text-[#2D81FF]">BPM: 70–90</span>
          </div>
        </article>

        <!-- Bento 3: Reading Archive -->
        <article class="p-8 bg-[#FAF9F8] dark:bg-[#050505] flex flex-col justify-between about-reveal">
          <div>
            <div class="flex items-center justify-between text-[10px] font-mono tracking-widest text-black/50 dark:text-white/50 mb-6">
              <span>LITERATURE ARCHIVE</span>
              <span>03</span>
            </div>
            <div class="flex items-center gap-3 mb-4">
              <Books class="w-6 h-6 text-[#2D81FF]" />
              <h3 class="text-xl font-bold tracking-tight text-black dark:text-white">Reading & Studies</h3>
            </div>
            <p class="text-sm text-black/70 dark:text-white/70 leading-relaxed mb-6">
              Regularly studying system architecture manuals, classic typography treatises (Bringhurst), human-computer interaction papers, and product histories like "Creativity, Inc.".
            </p>
          </div>
          <div class="pt-4 border-t border-black/10 dark:border-white/10 font-mono text-[10px] tracking-wider text-black/50 dark:text-white/50">
            CURRENT BOOK: ARCHITECTURE OF DIGITAL MEDIUMS
          </div>
        </article>

        <!-- Bento 4: Core Engineering Tenets -->
        <article class="p-8 bg-[#FAF9F8] dark:bg-[#050505] flex flex-col justify-between about-reveal">
          <div>
            <div class="flex items-center justify-between text-[10px] font-mono tracking-widest text-black/50 dark:text-white/50 mb-6">
              <span>TENETS</span>
              <span>04</span>
            </div>
            <div class="flex items-center gap-3 mb-4">
              <Sparkle class="w-6 h-6 text-[#2D81FF]" />
              <h3 class="text-xl font-bold tracking-tight text-black dark:text-white">Operating Manifesto</h3>
            </div>
            <ul class="text-sm text-black/70 dark:text-white/70 leading-relaxed mb-6 space-y-1.5 font-mono text-[11px]">
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-[#2D81FF]"></span>
                <span>Sub-100ms latency feels instantaneous.</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-[#2D81FF]"></span>
                <span>Simple code is cheaper to maintain.</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-[#2D81FF]"></span>
                <span>Accessibility is architecture, not cosmetics.</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-[#2D81FF]"></span>
                <span>Beauty and utility are mutually reinforcing.</span>
              </li>
            </ul>
          </div>
          <div class="pt-4 border-t border-black/10 dark:border-white/10 font-mono text-[10px] tracking-wider text-black/50 dark:text-white/50">
            STATUS: STRICTLY ENFORCED IN PRODUCTION
          </div>
        </article>

      </div>

    </div>
  </section>

  <!-- SECTION 04: COLLABORATION / CALL TO ACTION -->
  <section id="collab" class="w-full relative">
    <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col items-center justify-center py-24 md:py-32 px-6 text-center about-reveal border-b border-black/10 dark:border-white/10">
      <div class="text-[10px] uppercase font-mono tracking-widest text-black/50 dark:text-white/50 mb-6">
        INITIATE CONTACT // OPEN FOR COLLABORATION
      </div>
      
      <h2 class="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-black dark:text-white">
        Let's build <span class="font-serif italic font-normal">something lasting</span>.
      </h2>
      <p class="text-black/60 dark:text-white/60 mb-10 max-w-md text-base leading-relaxed">
        Looking for a product engineer to turn complex logic into world-class user experiences? I'd love to hear what you are creating.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-3">
        <a href="mailto:harun@example.com" class="px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-[11px] font-mono font-bold uppercase tracking-[0.12em] hover:opacity-85 transition-opacity">
          Email Harun
        </a>
        <a href="/" class="px-6 py-3 border border-black/20 dark:border-white/20 text-black dark:text-white text-[11px] font-mono font-bold uppercase tracking-[0.12em] hover:border-transparent transition-colors">
          Return to Portfolio
        </a>
      </div>
    </div>
  </section>

</div>
