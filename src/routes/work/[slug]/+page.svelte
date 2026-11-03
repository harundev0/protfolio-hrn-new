<script lang="ts">
  import Icon from '#lib/components/Icon.svelte';
  import { getI18n } from '#lib/i18n/index.ts';
  import { work, heroBoxes } from '#lib/work.ts';
  import { pauseOffscreen } from '#lib/reveal.ts';
  import WorkShot from '#lib/components/WorkShot.svelte';

  let { data }: { data: { index: number } } = $props();

  const i18n = getI18n();
  let t = $derived(i18n.t);
  let i = $derived(data.index);
  let shot = $derived(work[i]);
  let item = $derived(t.work.items[i]);
  let c = $derived(t.cases.items[i]);
  let next = $derived((i + 1) % work.length);
  let pad = (n: number) => String(n).padStart(2, '0');
  const dev = import.meta.env.DEV;
  // numbering follows the rows actually shown, so a hidden challenge doesn't leave a gap
  let showChallenge = $derived(!!c.challenge || dev);
  let firstNo = $derived(showChallenge ? 2 : 1);

  let container: HTMLElement;
  // re-run per project: the same component instance is reused when "Next project" navigates
  $effect(() => {
    void data.index;
    return pauseOffscreen(container);
  });
</script>

<!-- Dev only: marks copy Harun still has to write; production simply leaves the section out -->
{#snippet todo(what: string)}
  <p class="border border-dashed border-[#F97316] px-4 py-3 font-mono text-[11px] leading-relaxed text-[#C2410C] dark:text-[#FDBA74]">
    TODO (dev only): {what}. Isi di src/lib/i18n/*.ts → cases.items[{i}]
  </p>
{/snippet}

{#snippet row(n: number, title: string)}
  <div class="md:col-span-4 flex items-baseline gap-3 font-mono text-[11px] tracking-widest uppercase text-black/55 dark:text-white/50">
    <span>{pad(n)}</span><span class="text-black dark:text-white">{title}</span>
  </div>
{/snippet}

<div bind:this={container} class="w-full flex flex-col">
  {#key i}
    <section class="w-full border-b border-black/10 dark:border-white/10">
      <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 flex flex-col">
        <!-- Back to the work grid, and where this project sits in it -->
        <div class="flex items-center justify-between border-b border-black/10 dark:border-white/10 px-6 md:px-10 font-mono text-[11px] tracking-widest uppercase text-black/55 dark:text-white/50">
          <a href="/#work" class="inline-flex items-center gap-2 min-h-[44px] hover:text-black dark:hover:text-white transition-colors">
            <Icon name="ArrowLeft" class="w-3 h-3" />{t.cases.back}
          </a>
          <span>{t.cases.eyebrow} · {pad(i + 1)} / {pad(work.length)}</span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 px-6 md:px-10 pt-14 md:pt-20 pb-12">
          <div class="lg:col-span-7">
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-medium tracking-[-0.035em] leading-[1.02] text-black dark:text-white text-balance">
              {item.name}
            </h1>
            <p class="mt-6 max-w-xl text-lg leading-relaxed text-black/70 dark:text-white/70">{item.desc}</p>
          </div>
          <dl class="lg:col-span-5 grid grid-cols-2 gap-px self-end border border-black/10 dark:border-white/10 bg-black/10 dark:bg-white/10 font-mono text-[11px] tracking-wider">
            {#each [[t.cases.role, t.work.roleVal], [t.cases.platform, item.kind], [t.cases.company, t.cases.companyVal]] as [k, v]}
              <div class="bg-paper dark:bg-ink p-4 flex flex-col gap-1.5">
                <dt class="uppercase tracking-widest text-black/55 dark:text-white/50">{k}</dt>
                <dd class="text-black dark:text-white">{v}</dd>
              </div>
            {/each}
            <div class="bg-paper dark:bg-ink p-4 flex flex-col gap-1.5">
              <dt class="uppercase tracking-widest text-black/55 dark:text-white/50">{t.cases.live}</dt>
              <dd>
                <a href={shot.url} target="_blank" rel="noreferrer" class="inline-flex items-center gap-1.5 text-[#1D63D8] dark:text-[#2D81FF] hover:underline underline-offset-4">
                  {shot.host}<Icon name="ArrowUpRight" class="w-3 h-3" />
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <WorkShot {shot} alt={item.alt} index={i} eager boxes={heroBoxes} class="aspect-[4/3] md:aspect-[16/9] p-6 sm:p-12 md:p-20 border-t border-black/10 dark:border-white/10" />
      </div>
    </section>

    <section class="w-full border-b border-black/10 dark:border-white/10">
      <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10 divide-y divide-black/10 dark:divide-white/10">
        {#if showChallenge}
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 px-6 md:px-10 py-10 md:py-14">
            {@render row(1, t.cases.challenge)}
            <div class="md:col-span-8">
              {#if c.challenge}<p class="max-w-2xl text-lg leading-relaxed text-black/75 dark:text-white/75">{c.challenge}</p>
              {:else}{@render todo('masalah yang diselesaikan project ini, untuk siapa, kenapa penting')}{/if}
            </div>
          </div>
        {/if}

        <div class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 px-6 md:px-10 py-10 md:py-14">
          {@render row(firstNo, t.cases.built)}
          <ul class="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px border border-black/10 dark:border-white/10 bg-black/10 dark:bg-white/10">
            {#each c.features as f}
              <li class="bg-paper dark:bg-ink p-5 sm:[&:last-child:nth-child(odd)]:col-span-2 text-base leading-relaxed text-black/80 dark:text-white/80">{f}</li>
            {/each}
          </ul>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 px-6 md:px-10 py-10 md:py-14">
          {@render row(firstNo + 1, t.cases.process)}
          <ol class="md:col-span-8 flex flex-col">
            {#each t.cases.processSteps as step, k}
              <li class="flex items-baseline gap-4 py-3 first:pt-0 border-b border-black/10 dark:border-white/10 last:border-b-0">
                <span class="font-mono text-[11px] tracking-widest text-[#1D63D8] dark:text-[#2D81FF]">{pad(k + 1)}</span>
                <span class="text-base text-black/80 dark:text-white/80">{step}</span>
              </li>
            {/each}
          </ol>
        </div>

        {#if c.outcome || dev}
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 px-6 md:px-10 py-10 md:py-14">
            {@render row(firstNo + 2, t.cases.outcome)}
            <div class="md:col-span-8">
              {#if c.outcome}<p class="max-w-2xl text-lg leading-relaxed text-black/75 dark:text-white/75">{c.outcome}</p>
              {:else}{@render todo('hasil yang bisa dibuktikan: angka, feedback klien, atau apa yang berubah setelah rilis')}{/if}
            </div>
          </div>
        {/if}
      </div>
    </section>

    <!-- Next project: the whole band is the link -->
    <section class="w-full border-b border-black/10 dark:border-white/10">
      <div class="max-w-[1280px] mx-auto border-x border-black/10 dark:border-white/10">
        <a href="/work/{work[next].slug}" class="group flex items-center justify-between gap-6 px-6 md:px-10 py-12 md:py-16 hover:bg-black/[0.02] dark:hover:bg-white/[0.03] transition-colors">
          <span class="flex flex-col gap-3">
            <span class="font-mono text-[11px] tracking-widest uppercase text-black/55 dark:text-white/50">{t.cases.next}</span>
            <span class="text-3xl md:text-5xl font-medium tracking-[-0.03em] text-black dark:text-white">
              {t.work.items[next].name} <span class="font-serif italic font-normal text-black/55 dark:text-white/50">{t.work.items[next].kind}</span>
            </span>
          </span>
          <Icon name="ArrowRight" class="w-6 h-6 shrink-0 text-black dark:text-white transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  {/key}
</div>
