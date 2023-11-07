import type { Repository } from '@octokit/graphql-schema';
import { octokit } from './client';

export const getPosts = async () => {
	const { repository } = await octokit.graphql<{ repository: Repository }>(
		`
    query ($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
        discussions(first: 10) {
          nodes {
            title
            url
            id
            createdAt
            publishedAt
            updatedAt
            bodyHTML
            author {
              login
            }
            createdAt
          }
        }
      }
    }
  `,
		{
			owner: 'eegli',
			name: 'me'
		}
	);
	return repository.discussions.nodes || [];
};
