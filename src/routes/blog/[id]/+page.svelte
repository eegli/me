<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	$: post = data.post;
</script>

{#if post}
	<article class="prose lg:prose-xl m-auto">
		<h1>{post.title}</h1>
		<div>{@html post.body}</div>
	</article>
{:else}
	<p>Post not found</p>
{/if}
