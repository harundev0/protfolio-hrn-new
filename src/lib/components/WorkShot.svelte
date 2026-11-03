<script lang="ts">
  import type { Shot } from '#lib/work.ts';

  let {
    shot,
    alt,
    index = 0,
    sizes,
    eager = false,
    class: extra = ''
  }: { shot: Shot; alt: string; index?: number; sizes: string; eager?: boolean; class?: string } = $props();

  // blob placement (left, top) and drift timing, shared by every shot
  const blobSpots = [['-40%', '-55%', '16s'], ['35%', '5%', '19s'], ['-25%', '35%', '22s']];
</script>

<!-- Transparent screenshot floating on soft drifting color blobs, like the about hero -->
<div class="shot relative overflow-hidden flex items-center justify-center {extra}" style:--c0={shot.blobs[0]} style:--c2={shot.blobs[2]}>
  {#each shot.blobs as c, b}
    {@const [x, y, dur] = blobSpots[b]}
    <span class="blob" style:--c={c} style:left={x} style:top={y} style:--dur={dur} style:--delay="{(index + b) * -2.3}s" aria-hidden="true"></span>
  {/each}
  <img
    src="/assets/images/work/{shot.slug}.webp"
    srcset="/assets/images/work/{shot.slug}-640.webp 640w, /assets/images/work/{shot.slug}.webp {shot.w}w"
    {sizes}
    {alt}
    width={shot.w}
    height={shot.h}
    loading={eager ? 'eager' : 'lazy'}
    fetchpriority={eager ? 'high' : undefined}
    decoding="async"
    class="relative max-w-full max-h-full w-auto h-auto object-contain drop-shadow-[0_24px_32px_rgba(30,20,60,0.25)] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-1.5 group-hover:scale-[1.02]"
  />
</div>

<style>
  /* Soft wash between two shot colors, wide feathered blobs drifting over it,
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
  @media (prefers-reduced-motion: reduce) {
    .blob { animation: none; }
  }
</style>
