<script lang="ts">
  import '../app.css';
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import { Sun, Moon, GithubLogo, LinkedinLogo, List, X } from 'phosphor-svelte';
  import ScrollRuler from '../lib/components/ScrollRuler.svelte';
  import Footer from '../lib/components/Footer.svelte';

  let { children }: { children: Snippet } = $props();

  let isDark = $state(true);
  let mounted = $state(false);
  let scrollSection = $state('HOME');
  let mobileMenuOpen = $state(false);

  let isAboutPage = $derived(page.url.pathname === '/about');

  // Active label derived from route or scroll
  let activeNav = $derived(
    isAboutPage ? 'ABOUT' : scrollSection
  );

  // Portfolio navigation items
  const navLinks = [
    { href: '/', id: 'hero', label: 'HOME' },
    { href: '/#work', id: 'work', label: 'WORK' },
    { href: '/about', id: 'about', label: 'ABOUT' },
    { href: '/#proof', id: 'proof', label: 'STACK' },
    { href: '/#contact', id: 'contact', label: 'CONTACT' }
  ];

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
  }

  function scrollToSection(id: string, label: string) {
    scrollSection = label;
    mobileMenuOpen = false;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onMount(() => {
    isDark = document.documentElement.classList.contains('dark') || 
             (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    updateTheme(isDark);
    mounted = true;

    // Scroll spy for navbar when on homepage
    const handleScroll = () => {
      if (window.location.pathname === '/about') {
        return;
      }

      const scrollPos = window.scrollY + 160;
      
      const sections = [
        { id: 'hero', label: 'HOME' },
        { id: 'work', label: 'WORK' },
        { id: 'proof', label: 'STACK' },
        { id: 'contact', label: 'CONTACT' }
      ];

      for (const sec of [...sections].reverse()) {
        const el = document.getElementById(sec.id);
        if (el && scrollPos >= el.offsetTop) {
          scrollSection = sec.label;
          return;
        }
      }
      scrollSection = 'HOME';
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<svelte:head>
  <title>Harun Bahrudin — Product & Frontend Engineer</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script>
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  </script>
</svelte:head>

<!-- ArtCraft aesthetic: razor-thin borders, deep backdrop, structural grid -->
<main class="min-h-[100dvh] w-full flex flex-col relative selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
  <div class="fixed inset-0 pointer-events-none bg-[#FAF9F8] dark:bg-[#050505] -z-20"></div>
  
  <!-- Subtle glowing core -->
  <div class="fixed inset-0 pointer-events-none opacity-0 dark:opacity-100 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.02] via-[#050505] to-[#050505] -z-10"></div>
  
  <!-- Subtle dot grid background -->
  <div class="fixed inset-0 pointer-events-none bg-dot-grid -z-10"></div>
  
  <!-- App Header - Portfolio Concept with Exact ArtCraft Visual Architecture -->
  <nav id="site-nav" class="w-full h-12 border-b border-black/10 dark:border-white/10 flex items-stretch justify-between fixed top-0 z-50 bg-[#FAF9F8]/95 dark:bg-[#050505]/95 backdrop-blur-sm select-none">
    
    <!-- Left Section: Mobile Menu Button + Logo + Desktop Portfolio Nav Items -->
    <div class="flex items-stretch min-w-0">
      
      <!-- Mobile Menu Toggle Button (Visible on screens < md) -->
      <button
        onclick={() => mobileMenuOpen = !mobileMenuOpen}
        class="flex md:hidden items-center justify-center px-3.5 border-r border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
        aria-label="Toggle Mobile Menu"
        aria-expanded={mobileMenuOpen}
      >
        {#if mobileMenuOpen}
          <X weight="bold" class="w-4 h-4" />
        {:else}
          <List weight="bold" class="w-4 h-4" />
        {/if}
      </button>

      <!-- Harun Bahrudin Monogram Mark -->
      <a 
        href="/" 
        onclick={() => { scrollSection = 'HOME'; mobileMenuOpen = false; }}
        class="flex items-center gap-2.5 border-r border-black/10 dark:border-white/10 px-3.5 sm:px-5 hover:opacity-85 transition-opacity"
        aria-label="Home"
      >
        <img 
          src="/assets/logo/logo-light.png" 
          alt="HRN" 
          class="h-7 w-auto dark:hidden object-contain" 
        />
        <img 
          src="/assets/logo/logo-dark.png" 
          alt="HRN" 
          class="h-7 w-auto hidden dark:block object-contain" 
        />
        <span class="font-mono font-bold tracking-widest text-xs text-black dark:text-white hidden sm:inline">HARUN</span>
      </a>

      <!-- Desktop Primary Portfolio Nav Links (md:flex) -->
      <ul class="hidden md:flex items-stretch list-none m-0 p-0">
        {#each navLinks as item}
          <li class="flex items-stretch">
            <a
              href={item.href}
              onclick={() => scrollToSection(item.id, item.label)}
              class="group flex h-full items-center px-2.5 font-mono text-[11px] font-bold tracking-[0.12em] uppercase whitespace-nowrap cursor-pointer transition-colors {
                activeNav === item.label
                  ? 'text-black dark:text-white'
                  : 'text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white'
              }"
            >
              {#if activeNav === item.label}
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

        <!-- Divider with extra portfolio section: RESUME -->
        <li class="flex items-stretch border-l border-black/10 dark:border-white/10 pl-1">
          <a
            href="#hero"
            onclick={() => scrollToSection('contact', 'CONTACT')}
            class="group flex h-full items-center px-3 font-mono text-[11px] font-bold tracking-[0.12em] uppercase text-black/55 dark:text-white/55 hover:text-black dark:hover:text-white transition-colors"
          >
            <span class="px-1.5 py-0.5 group-hover:bg-black/5 dark:group-hover:bg-white/10 transition-colors">
              RESUME
            </span>
          </a>
        </li>
      </ul>
    </div>

    <!-- Right Section: GitHub, LinkedIn, Theme Toggle, Contact CTA -->
    <div class="flex items-stretch">
      <div class="hidden lg:flex items-center gap-4 px-4 font-mono text-[11px] font-bold tracking-[0.12em] uppercase text-black/55 dark:text-white/55">
        <a 
          href="https://github.com/harunbahrudin" 
          target="_blank" 
          rel="noreferrer" 
          class="flex items-center gap-1.5 hover:text-black dark:hover:text-white transition-colors"
        >
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          <span>GITHUB</span>
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noreferrer" 
          class="flex items-center gap-1.5 hover:text-black dark:hover:text-white transition-colors"
        >
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <span>LINKEDIN</span>
        </a>
      </div>

      <!-- Theme Switcher -->
      {#if mounted}
        <button 
          onclick={toggleTheme} 
          class="flex items-center justify-center px-3 sm:px-3.5 border-l border-black/10 dark:border-white/10 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          aria-label="Toggle Theme"
        >
          {#if isDark}
            <Sun weight="bold" class="w-3.5 h-3.5" />
          {:else}
            <Moon weight="bold" class="w-3.5 h-3.5" />
          {/if}
        </button>
      {/if}

      <!-- GET IN TOUCH CTA (Responsive padding so it never crowds mobile header) -->
      <a 
        href="#contact" 
        onclick={() => scrollToSection('contact', 'CONTACT')}
        class="inline-flex items-center justify-center border-l border-black/10 dark:border-white/10 px-3.5 sm:px-5 font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase whitespace-nowrap bg-black text-white dark:bg-white dark:text-black hover:opacity-85 transition-opacity"
      >
        GET IN TOUCH
      </a>
    </div>
  </nav>

  <!-- MOBILE NAVIGATION DRAWER (ArtCraft Blueprint Drawer for <= md screens) -->
  {#if mobileMenuOpen}
    <div 
      class="fixed inset-0 top-12 z-40 md:hidden bg-black/40 backdrop-blur-sm"
      onclick={() => mobileMenuOpen = false}
      role="presentation"
    >
      <div 
        class="w-full bg-[#FAF9F8] dark:bg-[#050505] border-b border-black/10 dark:border-white/10 shadow-2xl flex flex-col divide-y divide-black/10 dark:divide-white/10 animate-in fade-in slide-in-from-top-4 duration-200"
        onclick={(e) => e.stopPropagation()}
        role="presentation"
      >
        <!-- Nav Links List -->
        <div class="flex flex-col py-2">
          {#each navLinks as item}
            <a
              href={item.href}
              onclick={() => scrollToSection(item.id, item.label)}
              class="flex items-center justify-between px-6 py-3 font-mono text-[12px] font-bold tracking-[0.15em] uppercase transition-colors {
                activeNav === item.label
                  ? 'bg-black/5 dark:bg-white/5 text-black dark:text-white'
                  : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
              }"
            >
              <span>{item.label}</span>
              {#if activeNav === item.label}
                <span class="px-2 py-0.5 bg-black text-white dark:bg-white dark:text-black text-[10px]">
                  ACTIVE
                </span>
              {/if}
            </a>
          {/each}
        </div>

        <!-- Mobile Social & Utilities Strip -->
        <div class="px-6 py-3.5 flex items-center justify-between font-mono text-[11px] tracking-wider text-black/60 dark:text-white/60 bg-black/[0.02] dark:bg-white/[0.02]">
          <div class="flex items-center gap-4">
            <a 
              href="https://github.com/harunbahrudin" 
              target="_blank" 
              rel="noreferrer" 
              class="flex items-center gap-1.5 hover:text-black dark:hover:text-white"
            >
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>GITHUB</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              class="flex items-center gap-1.5 hover:text-black dark:hover:text-white"
            >
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LINKEDIN</span>
            </a>
          </div>

          <span class="text-[9px] text-black/40 dark:text-white/40">HARUN BAHRUDIN</span>
        </div>
      </div>
    </div>
  {/if}

  <!-- MAIN WRAPPER -->
  <div class="w-full flex-1 pt-12 relative flex flex-col">
    <!-- Exact 1:1 ArtCraft Scroll Ruler HUD Component (hidden on mobile, cleanly positioned on desktop) -->
    <ScrollRuler />

    {@render children()}

    <!-- ArtCraft Standard Footer with Logo -->
    <Footer />
  </div>
</main>
