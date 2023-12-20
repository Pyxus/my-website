<script lang="ts">
	export let data;
	const { title, date, content } = data;
</script>

<article>
	<h1>{title}</h1>
	<svelte:component this={content} />
</article>
