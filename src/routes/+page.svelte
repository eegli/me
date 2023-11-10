<script lang="ts">
	import { getPosts } from '$api/get';
	import { pagination, posts } from '../lib/store';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: for (const post of data.posts) {
		$posts.set(post.id, post);
		$posts = $posts;
	}
	$pagination = data.pageInfo;

	const loadNextPosts = async () => {
		const { posts: newPosts, pageInfo } = await getPosts({ after: $pagination.endCursor! });
		for (const newPost of newPosts) {
			console.log(newPost);
			$posts.set(newPost.id, newPost);
		}
		$pagination = pageInfo;
		$posts = $posts;
	};
</script>

<main class="w-3/4 max-w-96 m-auto">
	<div class="flex flex-col items-stretch gap-2">
		{#each $posts as [id, post] (id)}
			<article class="prose prose-md bg-slate-800">
				<a href="/blog/{post.id}">
					<h1>{post.title}</h1>
				</a>
				<p>{post.category?.name}</p>
			</article>
		{/each}
	</div>
	{#if $pagination.hasNextPage}
		<button class="btn" on:click={loadNextPosts}>Load more posts</button>
	{/if}
</main>
