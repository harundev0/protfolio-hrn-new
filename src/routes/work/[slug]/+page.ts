import { error } from '@sveltejs/kit';
import { workIndex, isDraft } from '#lib/work.ts';

export const load = async ({ params, parent }) => {
  const index = workIndex(params.slug);
  if (index < 0) error(404, 'Not found');
  const { dict } = await parent();
  return { index, draft: isDraft(dict.cases.items[index]) };
};
