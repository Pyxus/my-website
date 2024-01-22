<script lang="ts">
	import BlogPost from '$lib/components/BlogPost.svelte';
	import Lazy from 'svelte-lazy';
	import { title } from '$lib/config';

	export let data;

	function formatDate(date: string): string {
		const currentDate = new Date(date);
		const formattedDate = currentDate.toLocaleDateString('en-US', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		});

		return formattedDate.replace(/\//g, '.');
	}
</script>

<svelte:head>
	<title>{`Blog | ${title}`}</title>
</svelte:head>

<div class="mx-auto max-w-2xl">
	{#each data.posts as post}
		<Lazy height={500}>
			<BlogPost
				title={post.title}
				summary={post.summary}
				date={formatDate(post.datePosted)}
				href={`${data.url}/${[post.slug]}`}
				imgSrc={post.thumbnail}
			/>
		</Lazy>
	{/each}
</div>
