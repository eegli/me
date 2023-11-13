<script lang="ts">
	import { getPostPreviews } from '$api/get';
	import { pinnedProjects, postsPagination, postsPreviews } from '$store';

	const loadNextPosts = async () => {
		const data = await getPostPreviews({ after: $postsPagination.endCursor!, first: 1 });
		postsPreviews.addMany(data.postPreviews);
		$postsPagination = data.postsPagination;
	};
</script>

<div class="flex flex-col gap-5">
	<div>
		<div class="prose prose-md max-w-fit">
			<h1 class="text-secondary p-2 rounded-md">Open Source</h1>
		</div>
		<div class="overflow-x-auto rounded-md">
			<table class="table">
				<thead class="text-accent">
					<tr>
						<th>Project</th>
						<th>What is it?</th>
						<th>Written in</th>
						<th>Stargazers</th>
					</tr>
				</thead>
				<tbody>
					{#each $pinnedProjects as project}
						{#if project.__typename === 'Repository'}
							{@const url = project.url}
							<tr
								role="link"
								class="hover cursor-pointer"
								on:click={() => window.open(url, '_blank')}
							>
								<td>{project.name}</td>
								<td>{project.description}</td>
								<td>{project.primaryLanguage?.name}</td>
								<td>{project.stargazerCount}</td>
							</tr>
						{/if}
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<div>
		<div class="prose prose-md max-w-fit">
			<h1 class="text-secondary p-2 rounded-md">Blog</h1>
		</div>
		<div class="flex flex-col items-stretch rounded-md">
			{#each $postsPreviews as [id, post] (id)}
				<div>
					<a href="/blog/{post.id}">
						<h2 class="text-primary">{post.title}</h2>
					</a>
					<p>{post.category?.name}</p>
				</div>
			{/each}
		</div>
		{#if $postsPagination.hasNextPage}
			<button class="btn" on:click={loadNextPosts}>Load more posts</button>
		{/if}
	</div>
</div>
