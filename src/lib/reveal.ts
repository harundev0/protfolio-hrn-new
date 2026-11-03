// Scroll reveal and off-screen animation pausing without ScrollTrigger:
// IntersectionObserver never forces a layout, so nothing here blocks the main thread.

/** Adds `.revealed` once each matching element scrolls into view; CSS in app.css does the fade. */
export function revealOnScroll(root: HTMLElement, selector: string) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    },
    // same trigger line as the old ScrollTrigger `start: 'top 85%'`
    { rootMargin: '0px 0px -15% 0px' }
  );
  root.querySelectorAll(selector).forEach((el) => io.observe(el));
  return () => io.disconnect();
}

/** Marks each <section> with `data-inview` while visible; app.css pauses CSS animations elsewhere. */
export function pauseOffscreen(root: HTMLElement) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) e.target.toggleAttribute('data-inview', e.isIntersecting);
  });
  root.querySelectorAll('section').forEach((el) => io.observe(el));
  return () => io.disconnect();
}

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Page-load entrance: each element rises 20px and fades in, staggered (Web Animations API, no library). */
export function rise(els: Iterable<Element>, delay = 0, stagger = 100) {
  const from = reduceMotion() ? { opacity: 0 } : { opacity: 0, transform: 'translateY(20px)' };
  let i = 0;
  for (const el of els) {
    el.animate([from, { opacity: 1, transform: 'none' }], {
      duration: reduceMotion() ? 400 : 800,
      delay: delay + i++ * stagger,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // power2.out
      fill: 'backwards'
    });
  }
}

/**
 * Scroll spy without layout reads: calls `onActive(id)` whenever one of the sections crosses a horizontal
 * line in the viewport. `line` is that line's distance from the top, as a fraction of the viewport height.
 */
export function spyLine(ids: readonly string[], line: number, onActive: (id: string) => void) {
  const pct = Math.round(line * 100);
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) if (e.isIntersecting) onActive(e.target.id);
    },
    { rootMargin: `-${pct}% 0px -${99 - pct}% 0px` }
  );
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  }
  return () => io.disconnect();
}
