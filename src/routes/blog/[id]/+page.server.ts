import { getPost } from '$api/get';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (request) => {
	const postId = request.params.id;
	const post = await getPost({ discussionId: postId });
	return {
		post
	};
};
