<script lang="ts">
	import { md } from '../lib/utils/markdown';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: post = data.nodes![0];
	$: body = post?.body ?? '';
</script>

<main class="max-w-96">
	<article class="prose lg:prose-xl m-auto">
		<h1>{post?.title}</h1>
		<pre>{JSON.stringify(data, null, 2)}</pre>
		<div>{@html md.render(body)}</div>
	</article>
</main>
