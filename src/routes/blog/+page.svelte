<script lang="ts">
	import BlogPost from '$lib/components/BlogPost.svelte';

	export let data;

	function formatDate(date: string): string {
		const currentDate = new Date();
		const formattedDate = currentDate.toLocaleDateString('en-US', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit'
		});

		return formattedDate.replace(/\//g, '.');
	}
</script>

<div class="container justify-center items-center mx-auto max-w-2xl">
	{#each data.posts as post}
		<BlogPost
			title={post.title}
			summary={post.description}
			date={formatDate(post.date)}
			href={`${data.url}/${[post.slug]}`}
			imgSrc={post.thumbnail}
		/>
	{/each}
</div>
