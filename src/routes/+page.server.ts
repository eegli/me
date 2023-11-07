import { Octokit } from 'octokit';
import type { PageServerLoad } from './$types';
import type { Repository } from '@octokit/graphql-schema';
import { getPosts } from '../lib/api/get';

const query = `
  query ($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      discussions(first: 10) {
        nodes {
          title
          url
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
	const posts = await getPosts();

	return {
		posts
	};
};
