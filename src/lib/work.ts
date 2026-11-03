// Selected work, shared by the home cards and /work/[slug]. Order matches t.work.items and t.cases.items.
// Blob colors come from the about-hero flux palette.
export type Shot = { slug: string; w: number; h: number; blobs: string[]; url: string; host: string };

export const work: Shot[] = [
  { slug: 'panorra-web', w: 1104, h: 899, blobs: ['#F37CE0', '#B48CFF', '#FFC24B'], url: 'https://panorra.com/', host: 'panorra.com' },
  { slug: 'panorra-mobile', w: 976, h: 840, blobs: ['#FF7A7A', '#FFC24B', '#F37CE0'], url: 'https://apps.apple.com/id/app/panorra-360/id1578823487', host: 'App Store' },
  { slug: 'gothru-dashboard', w: 1168, h: 712, blobs: ['#3EC6F5', '#B48CFF', '#F37CE0'], url: 'https://gothru.co/', host: 'gothru.co' },
  { slug: 'gothru-360', w: 1166, h: 760, blobs: ['#3EC6F5', '#FFC24B', '#B48CFF'], url: 'https://gothru.co/gothru-photo-studio.html', host: 'gothru.co' }
];

export const workIndex = (slug: string | undefined) => work.findIndex((s) => s.slug === slug);

/** Widths each screenshot is exported at (see static/assets/images/work), capped at its own width. */
export const shotWidths = (s: Shot) => [480, 640, 960].filter((w) => w < s.w).concat(s.w);

/**
 * The box a shot is shown in at one breakpoint: width = vw·100vw + px, box = width/height, pad = padding per side.
 * The screenshot is contained, so it fills the width when it's wider than the box, otherwise the height.
 */
export type Box = { min?: number; vw: number; px: number; box: number; pad: number };

export const cardBoxes: Box[] = [
  { min: 1280, vw: 0, px: 639, box: 4 / 3, pad: 40 },
  { min: 768, vw: 0.5, px: -1, box: 4 / 3, pad: 40 },
  { vw: 1, px: -2, box: 4 / 3, pad: 24 }
];

export const heroBoxes: Box[] = [
  { min: 1280, vw: 0, px: 1278, box: 16 / 9, pad: 80 },
  { min: 768, vw: 1, px: -2, box: 16 / 9, pad: 80 },
  { min: 640, vw: 1, px: -2, box: 4 / 3, pad: 48 },
  { vw: 1, px: -2, box: 4 / 3, pad: 24 }
];

/** `sizes` that matches the rendered width, so the browser never downloads a bigger file than it shows. */
export function shotSizes(s: Shot, boxes: Box[]) {
  const a = s.w / s.h;
  return boxes
    .map(({ min, vw, px, box, pad }) => {
      const wide = a >= box;
      const k = wide ? vw : (vw / box) * a;
      const c = wide ? px - 2 * pad : (px / box - 2 * pad) * a;
      const len = k === 0 ? `${Math.round(c)}px` : `calc(${+(k * 100).toFixed(2)}vw ${c < 0 ? '-' : '+'} ${Math.abs(Math.round(c))}px)`;
      return min ? `(min-width: ${min}px) ${len}` : len;
    })
    .join(', ');
}
