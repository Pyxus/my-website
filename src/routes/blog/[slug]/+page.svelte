<script lang="ts">
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
	import './page.postcss';

	export let data;

	const { title, content, thumbnail } = data;
	const datePosted = new Date(data.datePosted).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	const dateModified = new Date(data.dateModified).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
</svelte:head>

<div class="container flex justify-center items-center mx-auto max-w-5xl">
	<section class="flex gap-10 pt-8 w-5/6 pb-10">
		<TableOfContents class="w-3/12 sticky h-0 top-10" regionLead="text-xs" regionList="text-sm" />
		<article class="w-full" use:tocCrawler={{ mode: 'generate' }}>
			<h1>{title}</h1>
			<time datetime={datePosted}>{datePosted}</time>
			{#if datePosted !== dateModified}
				<time datetime={datePosted}>Last mofidied on {dateModified}</time>
			{/if}
			<hr class="mt-5 mb-5" />
			{#if thumbnail}
				<img src={thumbnail} alt="" class="w-full object-cover h-96 rounded-sm pt-5 pb-5" />
			{/if}
			<svelte:component this={content} />
		</article>
	</section>
</div>
