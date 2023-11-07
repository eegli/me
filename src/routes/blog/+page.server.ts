import { getPosts } from '../../lib/api/get';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (request) => {
	const posts = await getPosts();

	return {
		posts
	};
};