<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageServerData } from './$types';
	import hljs from 'highlight.js';

	export let data: PageServerData;
	let html: string = data.nodes![0]!.bodyHTML;

	$: post = data.nodes![0];
</script>

<main class="max-w-96">
	<article class="prose lg:prose-xl m-auto">
		<h1>{post?.title}</h1>
		<div>{@html html}</div>
	</article>
</main>
