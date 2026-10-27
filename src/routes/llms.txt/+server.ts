import en from '#lib/i18n/en.ts';
import { site } from '#lib/site.ts';

// Plain-text profile for AI answer engines (llmstxt.org), built from the English copy so it never drifts
export const GET = ({ url }) => {
  const o = url.origin;
  const a = en.about;
  const job = a.experience.milestones[0];
  const edu = a.experience.milestones[1];
  const body = `# ${site.name}

> ${en.meta.description}

${a.intro.join('\n\n')}

## Work experience

- ${job.role} (${job.tag}), ${job.company}, ${job.period}
${job.deliverables.map((d) => `  - ${d}`).join('\n')}

## Highlights

${a.highlights.items.map((h) => `- ${h.stat} ${h.label}: ${h.text}`).join('\n')}

## Selected work (role: ${en.work.roleVal})

${en.work.items.map((w) => `- ${w.name} (${w.kind}): ${w.desc}`).join('\n')}

## Education

- ${edu.role}, ${edu.company}, ${edu.period}
${edu.deliverables.map((d) => `  - ${d}`).join('\n')}

## Availability

- ${a.openToWork}. On-site, hybrid or remote; willing to relocate.
- Based in Subang, West Java, Indonesia (UTC+7). Languages: English (fluent), Indonesian (native).

## Links

- [Portfolio](${o}/): selected work, expertise and stack
- [About](${o}/about): story, work history, education and highlights
${site.resume ? `- [CV (PDF)](${o}${site.resume})\n` : ''}- [GitHub](${site.github})
- [LinkedIn](${site.linkedin})
- Email: ${site.email}
`;
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};
