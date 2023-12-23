<script>
	import ProjectPost from '$lib/components/ProjectPost.svelte';
	import { title } from '$lib/config';
	export let data;

	const { projects } = data;
</script>

<svelte:head>
	<title>{`Projects | ${title}`}</title>
</svelte:head>

<div class="mx-auto max-w-5xl">
	<section class="grid h-full grid-cols-2 md:grid-cols-3 gap-4 pt-8">
		{#each projects as project}
			<ProjectPost
				title={project.title}
				releaseYear={project.releaseYear}
				description={project.description}
				headerImageSrc={project.thumbnail}
				articleLink={project.articleLink}
				demoLink={project.demoLink}
				sourceLink={project.sourceLink}
			/>
		{/each}
	</section>
</div>
