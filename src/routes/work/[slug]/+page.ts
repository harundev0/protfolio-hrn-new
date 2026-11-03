import { error } from '@sveltejs/kit';
import { workIndex } from '#lib/work.ts';

export const load = ({ params }) => {
  const index = workIndex(params.slug);
  if (index < 0) error(404, 'Not found');
  return { index };
};
