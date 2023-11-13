import type { PinnedProject, PostPreview, PostsPagination } from '$api/get';
import { writable } from 'svelte/store';

export const postsPreviews = (() => {
	const { subscribe, update } = writable<Map<string, PostPreview>>(new Map());
	return {
		subscribe,
		addMany: (posts: PostPreview[]) => {
			update((map) => {
				posts.forEach((post) => {
					map.set(post.id, post);
				});
				return map;
			});
		}
	};
})();

export const postsPagination = writable<PostsPagination>({
	hasNextPage: false
});

export const pinnedProjects = writable<PinnedProject[]>([]);
