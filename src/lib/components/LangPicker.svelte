<script lang="ts">
  import { scale } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { Translate, Check } from 'phosphor-svelte';
  import { getI18n, locales, localeNames, type Locale } from '#lib/i18n/index.ts';

  let { placement = 'down', class: extra = '' }: { placement?: 'down' | 'up'; class?: string } = $props();

  const i18n = getI18n();
  let open = $state(false);
  let root: HTMLElement;
  let trigger: HTMLButtonElement;

  function pick(l: Locale) {
    i18n.setLang(l);
    open = false;
    trigger.focus();
  }

  function onWindowClick(e: MouseEvent) {
    if (open && !root.contains(e.target as Node)) open = false;
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && open) {
      open = false;
      trigger.focus();
      return;
    }
    if (!open || (e.key !== 'ArrowDown' && e.key !== 'ArrowUp')) return;
    e.preventDefault();
    const items = [...root.querySelectorAll<HTMLButtonElement>('[role="option"]')];
    const i = items.indexOf(document.activeElement as HTMLButtonElement);
    const next = e.key === 'ArrowDown' ? (i + 1) % items.length : (i - 1 + items.length) % items.length;
    items[next].focus();
  }

  // Focus the current language when the list opens
  function focusCurrent(node: HTMLElement) {
    node.querySelector<HTMLButtonElement>('[aria-selected="true"]')?.focus();
  }
</script>

<svelte:window onclick={onWindowClick} />

<div bind:this={root} class="relative flex items-stretch {extra}" onkeydown={onKeydown} role="presentation">
  <button
    bind:this={trigger}
    type="button"
    onclick={() => (open = !open)}
    aria-haspopup="listbox"
    aria-expanded={open}
    aria-label="{i18n.t.nav.language}: {localeNames[i18n.lang]}, {i18n.lang}"
    class="flex items-center gap-1.5 px-3 sm:px-3.5 font-mono text-[11px] font-bold tracking-[0.12em] uppercase cursor-pointer transition-colors {open
      ? 'text-black dark:text-white bg-black/5 dark:bg-white/10'
      : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'}"
  >
    <Translate weight="bold" aria-hidden="true" class="w-3.5 h-3.5" />
    <span>{i18n.lang}</span>
  </button>

  {#if open}
    <div
      use:focusCurrent
      role="listbox"
      aria-label={i18n.t.nav.language}
      transition:scale={{ start: 0.96, duration: 140, easing: cubicOut }}
      class="absolute right-0 z-50 w-56 border border-black/10 dark:border-white/10 bg-[#FAF9F8] dark:bg-[#0b0b0b] shadow-[0_12px_32px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.8)] {placement === 'down'
        ? 'top-full mt-px origin-top-right'
        : 'bottom-full mb-2 origin-bottom-right'}"
    >
      <div class="px-3.5 py-2 border-b border-black/10 dark:border-white/10 font-mono text-[9px] tracking-[0.2em] uppercase text-black/55 dark:text-white/50">
        {i18n.t.nav.language}
      </div>
      <div class="py-1">
        {#each locales as l}
          {@const active = l === i18n.lang}
          <button
            type="button"
            role="option"
            aria-selected={active}
            lang={l}
            onclick={() => pick(l)}
            class="group w-full flex items-center gap-3 px-3.5 py-2.5 text-left cursor-pointer outline-none transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.06] focus-visible:bg-black/[0.04] dark:focus-visible:bg-white/[0.06]"
          >
            <span class="w-11 shrink-0 font-mono text-[10px] font-bold tracking-[0.12em] uppercase {active ? 'text-[#1D63D8] dark:text-[#2D81FF]' : 'text-black/55 dark:text-white/50'}">
              {l}
            </span>
            <span class="flex-1 text-[13px] {active ? 'text-black dark:text-white font-medium' : 'text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white'}">
              {localeNames[l]}
            </span>
            {#if active}
              <Check weight="bold" aria-hidden="true" class="w-3.5 h-3.5 text-[#1D63D8] dark:text-[#2D81FF]" />
            {/if}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>
