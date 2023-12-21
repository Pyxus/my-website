<script>
	import ProjectPost from '$lib/components/ProjectPost.svelte';

	export let data;

	const { projects } = data;
</script>

<div class="container flex justify-center items-center mx-auto max-w-5xl">
	<section class="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
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
