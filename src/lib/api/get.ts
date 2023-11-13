import {
	GetDiscussionDocument,
	GetDiscussionsDocument,
	GetPinnedProjectsDocument,
	type GetDiscussionQuery,
	type GetDiscussionQueryVariables,
	type GetDiscussionsQuery,
	type GetDiscussionsQueryVariables,
	type GetPinnedProjectsQuery
} from '../../generated/queries';
import { githubClient } from './client';

export type PostPreview = NonNullable<
	NonNullable<
		NonNullable<NonNullable<GetDiscussionsQuery['repository']>['discussions']['edges']>[number]
	>['node']
>;

export type PostsPagination = NonNullable<
	NonNullable<GetDiscussionsQuery['repository']>['discussions']['pageInfo']
>;

export type PinnedProject = NonNullable<
	NonNullable<NonNullable<GetPinnedProjectsQuery['user']>['pinnedItems']['nodes']>[number]
>;

export const getPostPreviews = async (params: GetDiscussionsQueryVariables) => {
	const { data } = await githubClient.query<GetDiscussionsQuery>({
		query: GetDiscussionsDocument,
		variables: params
	});
	const postPreviews: PostPreview[] = [];
	for (const edge of data.repository!.discussions.edges || []) {
		if (edge?.node) postPreviews.push(edge.node);
	}
	const postsPagination = data.repository!.discussions.pageInfo;
	return { postPreviews, postsPagination };
};

export const getPost = async (params: GetDiscussionQueryVariables) => {
	const { data } = await githubClient.query<GetDiscussionQuery>({
		query: GetDiscussionDocument,
		variables: params
	});
	return data?.node?.__typename === 'Discussion' ? data.node : null;
};

export const getPinnedProjects = async () => {
	const { data } = await githubClient.query<GetPinnedProjectsQuery>({
		query: GetPinnedProjectsDocument
	});
	const pinnedProjects: PinnedProject[] = [];
	for (const node of data.user!.pinnedItems.nodes || []) {
		if (!!node) pinnedProjects.push(node);
	}
	return pinnedProjects;
};
