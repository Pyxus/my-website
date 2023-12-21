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
	class="w-full max-w-sm border rounded-lg shadow dark:variant-filled-surface dark:border-gray-700"
>
	<img class="rounded-t-lg object-cover" src={headerImageSrc} alt={headerImageAlt} />

	<div class="p-3">
		<h1 class="h3">{title}</h1>
		<p class="text-secondary-500 text-sm pb-3">{releaseYear}</p>
		<p class="font-normal text-gray-700 dark:text-gray-400 pb-3">
			{description}
		</p>
		<div class="flex items-center gap-2 pt-3">
			{#if articleLink !== ''}
				<a href={articleLink} class="btn variant-filled">Article</a>
			{/if}

			{#if demoLink !== ''}
				<a href={demoLink} class="btn variant-filled">Demo</a>
			{/if}

			{#if sourceLink !== ''}
				<a href={sourceLink} class="btn variant-filled">Demo</a>
			{/if}
		</div>
	</div>
</div>
