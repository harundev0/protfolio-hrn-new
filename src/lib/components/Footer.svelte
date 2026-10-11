<script lang="ts">
  import { GithubLogo, LinkedinLogo, ArrowUpRight, EnvelopeSimple, Sparkle } from 'phosphor-svelte';
</script>

<footer class="w-full border-t border-black/10 dark:border-white/10 mt-auto select-none bg-[#FAF9F8] dark:bg-[#050505]">
  <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col">
    
    <!-- Top Pre-footer HUD Strip -->
    <div class="flex flex-wrap items-center justify-between text-[9px] md:text-[10px] uppercase font-mono tracking-widest text-black/50 dark:text-white/50 py-3 px-6 md:px-10 border-b border-black/10 dark:border-white/10 gap-3">
      <div class="flex items-center gap-3">
        <span class="w-1.5 h-1.5 bg-[#2D81FF] shadow-[0_0_6px_#2D81FF]"></span>
        <span>ENGINEERING ENDPOINT // HARUN BAHRUDIN</span>
      </div>
      <div class="flex items-center gap-4">
        <span>STATUS: PRODUCTION DEPLOYMENT</span>
        <span>•</span>
        <span>SYSTEM: ONLINE (UTC+7)</span>
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
              src="/assets/logo/logo-light.png" 
              alt="HRN Logo" 
              class="h-10 w-auto dark:hidden object-contain group-hover:scale-105 transition-transform" 
            />
            <img 
              src="/assets/logo/logo-dark.png" 
              alt="HRN Logo" 
              class="h-10 w-auto hidden dark:block object-contain group-hover:scale-105 transition-transform" 
            />
            <div class="flex flex-col">
              <span class="font-mono font-bold tracking-widest text-sm text-black dark:text-white leading-none">
                HARUN
              </span>
              <span class="font-mono text-[9px] tracking-[0.2em] text-black/50 dark:text-white/50 mt-1 uppercase">
                BAHRUDIN
              </span>
            </div>
          </a>

          <p class="mt-5 text-sm text-black/70 dark:text-white/70 leading-relaxed max-w-sm">
            Product Engineer & Frontend Architect. Crafting resilient web systems where high-throughput architecture meets tactile, 60fps interaction depth.
          </p>
        </div>

        <div class="mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex flex-col gap-2 font-mono text-[10px]">
          <a 
            href="mailto:harun@example.com" 
            class="text-[#2D81FF] hover:underline flex items-center gap-1.5 font-bold tracking-wider"
          >
            <EnvelopeSimple weight="bold" class="w-3.5 h-3.5" />
            <span>harun@example.com</span>
          </a>
          <span class="text-black/40 dark:text-white/40 tracking-wider">
            BASED IN INDONESIA // OPEN TO REMOTE CONTRACTS
          </span>
        </div>
      </div>

      <!-- Nav Column 1: Index / Navigation -->
      <nav aria-label="Navigation" class="bg-[#FAF9F8] dark:bg-[#050505] p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <p class="font-mono text-[10px] tracking-widest text-black/45 dark:text-white/45 uppercase font-bold mb-4 pb-2 border-b border-black/5 dark:border-white/5">
            01 // NAVIGATION
          </p>
          <ul class="flex flex-col gap-2.5 font-mono text-[11px] tracking-wider">
            <li><a class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors" href="/">Home</a></li>
            <li><a class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors" href="/#work">Selected Work</a></li>
            <li><a class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors" href="/about">About Story</a></li>
            <li><a class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors" href="/#proof">Tech Stack</a></li>
            <li><a class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors" href="/#contact">Get in Touch</a></li>
          </ul>
        </div>
        <div class="mt-6 pt-4 border-t border-black/5 dark:border-white/5 font-mono text-[9px] text-black/35 dark:text-white/35">
          INDEX ROUTER
        </div>
      </nav>

      <!-- Nav Column 2: Toolchain -->
      <nav aria-label="Toolchain" class="bg-[#FAF9F8] dark:bg-[#050505] p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <p class="font-mono text-[10px] tracking-widest text-black/45 dark:text-white/45 uppercase font-bold mb-4 pb-2 border-b border-black/5 dark:border-white/5">
            02 // TOOLCHAIN
          </p>
          <ul class="flex flex-col gap-2.5 font-mono text-[11px] tracking-wider text-black/70 dark:text-white/70">
            <li><span>Svelte 5 & Kit</span></li>
            <li><span>React 19 & Next.js</span></li>
            <li><span>TypeScript strict</span></li>
            <li><span>Tailwind CSS</span></li>
            <li><span>GSAP Motion</span></li>
            <li><span>Playwright E2E</span></li>
          </ul>
        </div>
        <div class="mt-6 pt-4 border-t border-black/5 dark:border-white/5 font-mono text-[9px] text-black/35 dark:text-white/35">
          VERIFIED RUNTIMES
        </div>
      </nav>

      <!-- Nav Column 3: Story & Manifesto -->
      <nav aria-label="Story & Manifesto" class="bg-[#FAF9F8] dark:bg-[#050505] p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <p class="font-mono text-[10px] tracking-widest text-black/45 dark:text-white/45 uppercase font-bold mb-4 pb-2 border-b border-black/5 dark:border-white/5">
            03 // CHRONICLES
          </p>
          <ul class="flex flex-col gap-2.5 font-mono text-[11px] tracking-wider">
            <li><a class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors" href="/about#chronicles">Origins (2017)</a></li>
            <li><a class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors" href="/about#chronicles">Web Awakening</a></li>
            <li><a class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors" href="/about#experience">Career Trajectory</a></li>
            <li><a class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors" href="/about#curation">Workstation Spec</a></li>
            <li><a class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors" href="/about#curation">Manifesto</a></li>
          </ul>
        </div>
        <div class="mt-6 pt-4 border-t border-black/5 dark:border-white/5 font-mono text-[9px] text-black/35 dark:text-white/35">
          STORY ARCHIVE
        </div>
      </nav>

      <!-- Nav Column 4: Social / Signals -->
      <nav aria-label="Connect" class="bg-[#FAF9F8] dark:bg-[#050505] p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <p class="font-mono text-[10px] tracking-widest text-black/45 dark:text-white/45 uppercase font-bold mb-4 pb-2 border-b border-black/5 dark:border-white/5">
            04 // CONNECT
          </p>
          <ul class="flex flex-col gap-2.5 font-mono text-[11px] tracking-wider">
            <li>
              <a 
                href="https://github.com/harunbahrudin" 
                target="_blank" 
                rel="noreferrer" 
                class="flex items-center justify-between text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors group"
              >
                <span>GitHub</span>
                <ArrowUpRight class="w-3 h-3 text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white" />
              </a>
            </li>
            <li>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                class="flex items-center justify-between text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors group"
              >
                <span>LinkedIn</span>
                <ArrowUpRight class="w-3 h-3 text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white" />
              </a>
            </li>
            <li>
              <a 
                href="#hero" 
                class="flex items-center justify-between text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors group"
              >
                <span>Resume PDF</span>
                <ArrowUpRight class="w-3 h-3 text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white" />
              </a>
            </li>
            <li>
              <a 
                href="mailto:harun@example.com" 
                class="flex items-center justify-between text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors group"
              >
                <span>Email Direct</span>
                <ArrowUpRight class="w-3 h-3 text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white" />
              </a>
            </li>
          </ul>
        </div>
        <div class="mt-6 pt-4 border-t border-black/5 dark:border-white/5 font-mono text-[9px] text-black/35 dark:text-white/35">
          TRANSMISSION CHANNELS
        </div>
      </nav>

    </div>

    <!-- Bottom Copyright & Colophon Bar -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-black/10 dark:border-white/10 px-6 sm:px-10 py-4 font-mono text-[10px] tracking-wider text-black/50 dark:text-white/50">
      <div class="flex items-center gap-2">
        <span>© 2026 HARUN BAHRUDIN</span>
        <span>•</span>
        <span>ALL RIGHTS RESERVED</span>
      </div>
      <div class="flex items-center gap-2">
        <span>BUILT WITH SVELTE 5</span>
        <span>•</span>
        <span class="text-[#2D81FF] font-semibold">ARTCRAFT DESIGN SPEC</span>
      </div>
    </div>

  </div>
</footer>
