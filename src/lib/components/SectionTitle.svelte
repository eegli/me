<script lang="ts">
	export let title: string;
	export let subtitle: string | undefined = undefined;
</script>

<div class="prose-md prose max-w-fit prose-headings:mb-0">
	<h1 class="rounded-md text-secondary">{title}</h1>
	{#if subtitle}
		<p class="my-5">{subtitle}</p>
	{/if}
</div>
