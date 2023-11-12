<script lang="ts">
	import 'highlight.js/styles/github-dark-dimmed.min.css';
	import '../app.css';
	import { pagination, posts } from '../lib/store';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
	posts.addMany(data.posts);
	$pagination = data.pageInfo;
</script>

<main>
	<slot />
</main>
