<script lang="ts">
	export let title: string;
	export let releaseYear: string;
	export let description: string;
	export let headerImageSrc: string = '';
	export let headerImageAlt: string = '';
	export let articleLink: string = '';
	export let demoLink: string = '';
	export let sourceLink: string = '';
</script>

<div
	class="flex flex-col h-full w-full max-w-sm border rounded-lg shadow dark:variant-filled-surface dark:border-gray-700"
>
	{#if headerImageSrc}
		<img
			class="max-w-full object-cover rounded-t-lg w-full h-32"
			src={headerImageSrc}
			alt={headerImageAlt}
		/>
	{:else}
		<div class="w-full bg-surface-100-800-token flex items-center rounded-t-md h-32 justify-center">
			<iconify-icon class="text-8xl" icon="ic:outline-photo" />
		</div>
	{/if}

	<div class="flex-1 p-3 flex flex-col">
		<div class="flex-1">
			<p class="text-lg font-semibold line-clamp-2">{title}</p>
			<p class="text-secondary-500 text-sm pb-3">{releaseYear}</p>
			<p class="font-normal text-gray-700 dark:text-gray-400 pb-3 line-clamp-2 h-12">
				{description}
			</p>
		</div>
		<div class="flex items-center gap-2 pt-3">
			{#if articleLink !== ''}
				<a href={articleLink} target="_blank" class="btn variant-filled">Article</a>
			{/if}

			{#if demoLink !== ''}
				<a href={demoLink} target="_blank" class="btn variant-filled">Demo</a>
			{/if}

			{#if sourceLink !== ''}
				<a href={sourceLink} target="_blank" class="btn variant-filled">Source</a>
			{:else}
				<div class="btn variant-filled invisible">SPACER</div>
			{/if}
		</div>
	</div>
</div>

<style>
</style>
