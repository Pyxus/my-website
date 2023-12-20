<script lang="ts">
	export let data;
	const { title, date, content } = data;
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
</svelte:head>
<div class="container flex justify-center items-center h-full mx-auto max-w-2xl">
	<article>
		<h1>{title}</h1>
		<svelte:component this={content} />
	</article>
</div>
