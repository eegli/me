<script lang="ts">
	import NavBar from '$comp/NavBar.svelte';
	import { pinnedProjects, postsPagination, postsPreviews } from '$store';
	import 'highlight.js/styles/github-dark-dimmed.min.css';
	import '../app.css';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
	postsPreviews.addMany(data.postPreviews);
	$postsPagination = data.postsPagination;
	$pinnedProjects = data.pinnedProjects;
</script>

<main class="min-w-2xl max-w-5xl mx-auto">
	<NavBar />
	<div class="px-5">
		<slot />
	</div>
</main>
