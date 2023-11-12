import { getPosts } from '$api/get';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const { pageInfo, posts } = await getPosts();
	return {
		posts,
		pageInfo
	};
};
