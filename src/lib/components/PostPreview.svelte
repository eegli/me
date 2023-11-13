<script lang="ts">
	import { getPostPreviews } from '$api/get';
	import { postsPagination, postsPreviews } from '$store';

	const loadNextPosts = async () => {
		const data = await getPostPreviews({ after: $postsPagination.endCursor!, first: 1 });
		postsPreviews.addMany(data.postPreviews);
		$postsPagination = data.postsPagination;
	};
</script>

<div class="flex flex-col items-stretch gap-2">
	{#each $postsPreviews as [id, post] (id)}
		<article class="prose prose-md">
			<a href="/blog/{post.id}">
				<h1>{post.title}</h1>
			</a>
			<p>{post.category?.name}</p>
		</article>
	{/each}
</div>
{#if $postsPagination.hasNextPage}
	<button class="btn" on:click={loadNextPosts}>Load more posts</button>
{/if}
