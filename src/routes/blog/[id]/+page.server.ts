import { getPostById } from '$api/get';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (request) => {
	const postId = request.params.id;
	const post = await getPostById(postId);
	return {
		post
	};
};
