import { Octokit } from 'octokit';
import type { PageServerLoad } from './$types';
import type { Repository } from '@octokit/graphql-schema';

const octokit = new Octokit({ auth: import.meta.env.VITE_GH_AT });

const query = `
  query ($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      discussions(first: 10) {
        nodes {
          title
          url
          bodyHTML
          body,
          author {
            login
          }
          createdAt
        }
      }
    }
  }
`;

export const load: PageServerLoad = async (request) => {
	const { repository } = await octokit.graphql<{ repository: Repository }>(query, {
		owner: 'eegli',
		name: 'me'
	});

	return repository.discussions;
};
