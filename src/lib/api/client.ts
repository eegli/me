import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	type NormalizedCacheObject
} from '@apollo/client/core';

export const githubClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	link: new HttpLink({
		uri: 'https://api.github.com/graphql',
		headers: {
			authorization: `token ${import.meta.env.VITE_GH_AT}`
		}
	}),
	cache: new InMemoryCache()
});
