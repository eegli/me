<script lang="ts">
	import 'highlight.js/styles/github-dark-dimmed.min.css';
	import '../app.css';
	import NavBar from '../lib/components/NavBar.svelte';
	import { postsPagination, postsPreviews } from '../lib/store';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
	postsPreviews.addMany(data.postPreviews);
	$postsPagination = data.postsPagination;
	console.log(data.projects);
</script>

<main class="min-w-2xl max-w-5xl mx-auto">
	<NavBar />
	<div class="px-5">
		<slot />
	</div>
</main>
