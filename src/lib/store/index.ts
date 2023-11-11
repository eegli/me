import type { Discussion, Maybe, PageInfo } from '@octokit/graphql-schema';
import { writable } from 'svelte/store';

export const isPost = (post?: Maybe<Discussion>): post is Discussion => {
	return post !== null && post !== undefined;
};

export const posts = (() => {
	const { subscribe, update } = writable<Map<string, Discussion>>(new Map());
	return {
		subscribe,
		addMany: (posts: Discussion[]) => {
			update((map) => {
				posts.forEach((post) => {
					map.set(post.id, post);
				});
				return map;
			});
		}
	};
})();
export const pagination = writable<PageInfo>({
	hasNextPage: false,
	hasPreviousPage: false
});
