<script lang="ts">
	import { getPosts } from '$api/get';
	import { pagination, posts } from '../lib/store';

	const loadNextPosts = async () => {
		const data = await getPosts({ after: $pagination.endCursor! });
		posts.addMany(data.posts);
		$pagination = data.pageInfo;
	};
</script>

<div class="w-3/4 max-w-96 m-auto">
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
</div>
