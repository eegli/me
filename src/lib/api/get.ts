import type { Repository } from '@octokit/graphql-schema';
import { octokit } from './client';

type GetPostsParams = {
	first?: number;
	after?: string;
};

export const getPosts = async ({ first, after }: GetPostsParams = {}) => {
	const { repository } = await octokit.graphql<{ repository: Repository }>(
		`
    query getDiscussions($first: Int = 1, $after: String) {
      repository(owner: "eegli", name: "me") {
        discussions(first: $first, after: $after, orderBy: {field: CREATED_AT, direction: DESC}) {
          edges {
            cursor
            node {
              id
              category {
                name,
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
	console.log(repository.discussion);
	return repository.discussions.edges || [];
};
