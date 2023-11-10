import type { Discussion, Maybe, PageInfo } from '@octokit/graphql-schema';
import { writable } from 'svelte/store';

export const isPost = (post?: Maybe<Discussion>): post is Discussion => {
	return post !== null && post !== undefined;
};

export const posts = writable<Map<string, Discussion>>(new Map());
export const pagination = writable<PageInfo>({
	hasNextPage: false,
	hasPreviousPage: false
});
