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

/** A case study stays a draft (noindex, out of the sitemap) until its challenge and outcome are written. */
export const isDraft = (c: { challenge: string; outcome: string }) => !c.challenge || !c.outcome;
