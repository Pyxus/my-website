<script lang="ts">
	import Lazy from 'svelte-lazy';
	import {
		type ModalSettings,
		type ModalComponent,
		type ModalStore,
		getModalStore
	} from '@skeletonlabs/skeleton';
	import PlaceholderImage from '$lib/components/PlaceholderImage.svelte';
	import { title } from '$lib/config';

	export let data;

	const { art } = data;
	const modalStore = getModalStore();

	const triggerArtModal = (title: string, desc: string, image: string) => {
		modalStore.trigger({
			type: 'alert',
			title,
			body: desc,
			image
		});
	};
</script>

<svelte:head>
	<title>{`Art | ${title}`}</title>
</svelte:head>

<section class="grid grid-cols-2 grid-flow-dense md:grid-cols-4 gap-4">
	{#each art as artwork}
		<Lazy
			height={400}
			class={`${artwork.meta.size === 'lg' ? 'col-span-2' : 'col-span-1'}`}
			placeholder={PlaceholderImage}
			keep="true"
			fadeOption={{ duration: 400 }}
		>
			<button
				class="h-full w-full cursor-zoom-in"
				on:click={() => {
					triggerArtModal(artwork.meta.title, artwork.meta.description, artwork.src);
				}}
			>
				<figure class="relative overflow-hidden group">
					<img
						class="object-cover transition-transform group-hover:scale-110 w-full md:h-[25rem] rounded-lg duration-300"
						src={artwork.src}
						alt={artwork.meta.alt}
					/>
					<div
						class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"
					></div>
					<figcaption
						class="absolute inset-x-0 bottom-0 p-4 text-white text-center opacity-0 group-hover:opacity-100"
					>
						{artwork.meta.title}
					</figcaption>
				</figure>
			</button>
		</Lazy>
	{/each}
</section>
