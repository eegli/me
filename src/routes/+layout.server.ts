import { getPinnedProjects, getPostPreviews } from '../lib/api/get';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const projects = await getPinnedProjects();
	const { postsPagination, postPreviews } = await getPostPreviews({ first: 1 });

	return {
		postPreviews,
		postsPagination,
		projects
	};
};
