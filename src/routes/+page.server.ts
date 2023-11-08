import { getPosts } from '$api/get';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (request) => {
	const { pageInfo, posts } = await getPosts();
	return {
		posts,
		pageInfo
	};
};
