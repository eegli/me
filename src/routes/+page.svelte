<script lang="ts">
	import { getPostPreviews } from '$api/get';
	import SectionTitle from '$comp/SectionTitle.svelte';
	import { pinnedProjects, postsPagination, postsPreviews } from '$store';

	const loadNextPosts = async () => {
		const data = await getPostPreviews({ after: $postsPagination.endCursor!, first: 1 });
		postsPreviews.addMany(data.postPreviews);
		$postsPagination = data.postsPagination;
	};
</script>

<div class="flex flex-col gap-4 lg:flex-row">
	<div class="space-y-8">
		<div>
			<SectionTitle
				title="Me"
				subtitle="Over the past years, I've had the chance to contribute to many different open-source projects. Below are some of my own creations. For a full list, check out my GitHub profile."
			/>
		</div>

		<div>
			<SectionTitle title="Personal Thoughts" subtitle="I occasionally write about things." />
			<div class="prose-md prose flex flex-col items-stretch rounded-md">
				{#each $postsPreviews as [id, post] (id)}
					<div>
						<a href="/blog/{post.id}">
							<h2>{post.title}</h2>
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

	<div class="space-y-8">
		<div>
			<SectionTitle
				title="Open Source"
				subtitle="Over the past years, I've had the chance to contribute to many different open-source projects. Below are some of my own creations. For a full list, check out my GitHub profile."
			/>
			<div class="overflow-x-auto rounded-md">
				<table class="table !table-auto">
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
									<td>
										<p class="inline font-bold">
											{project.name}
										</p>
									</td>
									<td>{project.description}</td>
									<td>
										<p
											class="inline rounded-md p-1 text-xs text-black"
											style="background-color: {project.primaryLanguage?.color};"
										>
											{project.primaryLanguage?.name.toLowerCase()}
										</p>
									</td>
									<td>{project.stargazerCount}</td>
								</tr>
							{/if}
						{/each}
					</tbody>
				</table>
			</div>
		</div>

		<div>
			<SectionTitle title="Personal Thoughts" subtitle="I occasionally write about things." />
			<div class="prose-md prose flex flex-col items-stretch rounded-md">
				{#each $postsPreviews as [id, post] (id)}
					<div>
						<a href="/blog/{post.id}">
							<h2>{post.title}</h2>
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
</div>
