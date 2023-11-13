import { getPinnedProjects, getPostPreviews } from '$api/get';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const pinnedProjects = await getPinnedProjects();
	const { postsPagination, postPreviews } = await getPostPreviews({ first: 1 });

	return {
		postPreviews,
		postsPagination,
		pinnedProjects
	};
};
