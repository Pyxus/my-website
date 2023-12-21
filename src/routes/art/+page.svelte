<script lang="ts">
	export let data;

	const { art } = data;
</script>

<div class="container justify-center pt-5 items-center mx-auto max-w-7xl">
	<section class="grid grid-cols-2 md:grid-cols-4 gap-4">
		{#each art as artwork}
			<a target="_blank" href={artwork.imgSrc}>
				<figure class="transition hover:scale-105">
					<img class="h-auto max-w-full rounded-lg" src={artwork.imgSrc} alt={artwork.imgAlt} />
				</figure>
			</a>
		{/each}
	</section>
</div>
