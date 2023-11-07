<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<main class="max-w-96">
	{#each data.posts as post}
		<article class="prose lg:prose-xl m-auto">
			<h1>{post?.node?.title}</h1>
			<p>{post?.node?.category?.name}</p>
		</article>
	{/each}
</main>
