<script lang="ts">
	import Lazy from 'svelte-lazy';
	import PlaceholderImage from '$lib/components/PlaceholderImage.svelte';

	export let data;

	const { art } = data;
</script>

<div class="container justify-center pt-5 items-center mx-auto max-w-7xl p-4">
	<section class="grid grid-cols-2 md:grid-cols-4 gap-4">
		{#each art as artwork}
			<Lazy height={400} placeholder={PlaceholderImage} keep="true" fadeOption={{ duration: 400 }}>
				<a target="_blank" href={artwork.imgSrc}>
					<figure class="transition hover:scale-105">
						<img class="h-auto max-w-full rounded-lg" src={artwork.imgSrc} alt={artwork.imgAlt} />
					</figure>
				</a>
			</Lazy>
		{/each}
	</section>
</div>
