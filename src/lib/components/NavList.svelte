<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	interface NavRoute {
		title: string;
		path: string;
	}

	const drawerStore = getDrawerStore();

	export let routes: NavRoute[];
	export let useFlex: boolean = true;

	$: path = $page.url.pathname;

	function drwaerClose(): void {
		drawerStore.close();
	}
</script>

<ul class={useFlex ? 'hidden  md:flex' : ''}>
	{#each routes as route}
		<li>
			<a
				class={`btn mr-6 p-2 rounded-md ${
					path === route.path ? 'variant-filled' : 'hover:variant-filled'
				}`}
				class:active={path === route.path}
				href={route.path}
				on:click={drwaerClose}
			>
				{route.title}
			</a>
		</li>
	{/each}
</ul>
