<script lang="ts">
  import { page } from '$app/state';
  import { getI18n } from '#lib/i18n/index.ts';

  const i18n = getI18n();
  let t = $derived(i18n.t.error);
  let notFound = $derived(page.status === 404);
</script>

<section class="w-full border-b border-black/10 dark:border-white/10">
  <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 min-h-[70vh] flex flex-col items-start justify-center gap-6 px-6 md:px-10 py-24">
    <span class="px-2 py-0.5 bg-black text-white dark:bg-white dark:text-black font-mono text-[10px] font-bold tracking-widest uppercase">
      {page.status}
    </span>
    <h1 class="text-4xl md:text-6xl font-medium tracking-tight text-black dark:text-white">
      {notFound ? t.title : t.generic}
    </h1>
    {#if notFound}
      <p class="text-black/60 dark:text-white/60 text-lg max-w-md leading-relaxed">{t.body}</p>
    {/if}
    <a href="/" class="px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-[11px] font-mono font-bold uppercase tracking-[0.12em] hover:opacity-85 transition-opacity">
      {t.back}
    </a>
  </div>
</section>
