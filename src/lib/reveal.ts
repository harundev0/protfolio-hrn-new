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
