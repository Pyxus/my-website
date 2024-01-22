<script lang="ts">
	export let title: string;
	export let summary: string;
	export let imgSrc: string;
	export let imgAlt: string = 'Blog header';
	export let imgCaption: string = '';
	export let date: string;
	export let href: string;
</script>

<article class="pb-16 pt-8 hover:brightness-110 transition ease-in-out duration-300">
	<a {href}>
		<div>
			{#if imgSrc !== ''}
				<figure>
					<img class="max-w-full object-cover rounded-lg w-full h-96" src={imgSrc} alt={imgAlt} />
					<figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
						{imgCaption}
					</figcaption>
				</figure>
			{/if}

			<h2 class="pt-4 h2">{title}</h2>
			<p class="pt-4 h-16 line-clamp-2 font-light">{summary}</p>
			<p class="pt-4 font-extralight dark:text-surface-300 text-surface-400 w-full">{date}</p>
			<aside class="float-right variant-filled p-1 rounded-md flex items-center gap-1">
				<span class="pl-1 font-mono">Read more</span>
				<iconify-icon class="text-md pr-1" icon="mingcute:arrow-up-fill" rotate="90deg" />
			</aside>
		</div>
	</a>
</article>
