<script lang="ts">
	import { md } from '$utils/markdown';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	$: post = data.post;
</script>

<article class="prose lg:prose-xl m-auto">
	<h1>{post.title}</h1>
	<div>{@html md.render(post.body || '')}</div>
</article>
