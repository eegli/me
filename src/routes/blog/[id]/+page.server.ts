import { getPost } from '$api/get';
import { md } from '$utils/markdown';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (request) => {
	const postId = request.params.id;
	const post = await getPost({ discussionId: postId });
	const body = md.render(post?.body || '');
	return {
		post: { ...post, body }
	};
};
