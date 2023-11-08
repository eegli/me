import type { Comment, Discussion, PageInfo, Repository } from '@octokit/graphql-schema';
import { octokit } from './client';

type GetPostsParams = {
	first?: number;
	after?: string;
};

export const getPosts = async ({ first = 1, after }: GetPostsParams = {}) => {
	const { repository } = await octokit.graphql<{ repository: Repository; pageInfo: PageInfo }>(
		`
    query getDiscussions($first: Int, $after: String) {
      repository(owner: "eegli", name: "me") {
        discussions(
          first: $first
          after: $after
          orderBy: {field: CREATED_AT, direction: DESC}
        ) {
          edges {
            cursor
            node {
              id
              category {
                name
                id
              }
              title
              author {
                login
              }
              createdAt
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  `,
		{
			first,
			after
		}
	);
	return {
		posts: repository.discussions.edges || [],
		pageInfo: repository.discussions.pageInfo
	};
};

export const getPostById = async (id: string) => {
	const { node } = await octokit.graphql<{
		node: Partial<Discussion> & { comments: Partial<Comment>[] };
	}>(
		`
    query getDiscussion($discussionId: ID!) {
      node(id: $discussionId) {
        ... on Discussion {
          id
          title
          body
          author {
            login
          }
          createdAt
          comments(first: 10) {
            nodes {
              id
              body
              author {
                login
              }
              createdAt
            }
          }
        }
      }
    }    
  `,
		{
			discussionId: id
		}
	);
	return node;
};
