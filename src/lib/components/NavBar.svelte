<script lang="ts">
	import { page } from '$app/stores';
	$: onHomePage = $page.url.pathname === '/';
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl"
			>{onHomePage ? 'me' : ''}
			{#if !onHomePage}
				<i class="fa-solid fa-arrow-left" />
			{/if}
		</a>
	</div>
	<div class="flex-none flex mx-4">
		<a href="https://github.com/eegli" target="_blank" aria-label="GitHub link">
			<i class="fa-brands fa-xl fa-github" />
		</a>
		<div class="divider divider-horizontal" />
		<a href="https://www.linkedin.com/in/ericegli/" target="_blank" aria-label="LinkedIn link">
			<i class="fa-brands fa-xl fa-linkedin" />
		</a>
	</div>
</div>
