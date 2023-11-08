<script lang="ts">
	import { getPosts } from '$api/get';
	import { writable } from 'svelte/store';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const posts = writable(data.posts);
	const pagination = writable(data.pageInfo);

	const loadNextPosts = async () => {
		const { posts: newPosts, pageInfo } = await getPosts({ after: $pagination.endCursor! });
		$posts = [...$posts, ...newPosts];
		$pagination = pageInfo;
	};
</script>

<main class="w-3/4 max-w-96 m-auto">
	<div class="flex flex-col items-stretch gap-2">
		{#each $posts as edge}
			{#if edge?.node}
				{@const post = edge.node}
				<article class="prose prose-md bg-slate-800">
					<a href="/blog/{post.id}">
						<h1>{post.title}</h1>
					</a>
					<p>{post.category?.name}</p>
				</article>
			{/if}
		{/each}
	</div>
	{#if $pagination.hasNextPage}
		<button class="btn" on:click={loadNextPosts}>Load more posts</button>
	{/if}
</main>
