<script lang="ts">
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		LightSwitch,
		initializeStores,
		storePopup,
		Drawer,
		getDrawerStore,
		Modal
	} from '@skeletonlabs/skeleton';

	import 'iconify-icon';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import PageTransitionLayout from '$lib/layouts/PageTransitionLayout.svelte';
	import Centeredlayout from '$lib/layouts/CenteredLayout.svelte';
	import { title } from '$lib/config';
	import SocialsButton from '$lib/components/SocialsButton.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import NavList from '$lib/components/NavList.svelte';

	export let data;

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	initializeStores();

	const routes = [
		{ title: 'Blog', path: '/blog' },
		{ title: 'Projects', path: '/projects' },
		{ title: 'Art', path: '/art' }
	];

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open();
	}

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<Drawer position="right">
	<div class="flex flex-col p-5 gap-5">
		<div class="w-full">
			<button on:click={drawerClose} class="float-right">
				<iconify-icon class="text-4xl" icon="zondicons:close-solid" />
			</button>
		</div>
		<NavList useFlex={false} {routes} />
		<LightSwitch rounded="rounded-md" />
		<SocialsButton />
	</div>
</Drawer>
<Modal width="w-full md:w-7/12" height="h-full md:h-auto" />
<AppShell scrollbarGutter="stable" regionPage="relative scroll-smooth">
	<svelte:fragment slot="header">
		<nav>
			<AppBar
				slotDefault="place-self-center"
				slotTrail="place-content-end"
				padding="lg:pl-60 lg:pr-60 pr-4 pl-4 pt-3 pb-3"
			>
				<svelte:fragment slot="lead">
					<a href="/"><strong class="text-xl uppercase">{title}</strong></a>
				</svelte:fragment>
				<NavList {routes} />
				<svelte:fragment slot="trail">
					<button class="btn mr-4 text-2xl w-auto md:hidden variant-filled" on:click={drawerOpen}>
						<iconify-icon icon="ci:hamburger-md" />
					</button>
					<LightSwitch rounded="rounded-md md:flex hidden" />
					<SocialsButton container="md:flex hidden" />
				</svelte:fragment>
			</AppBar>
		</nav>
	</svelte:fragment>

	<PageTransitionLayout url={data.url}>
		<Centeredlayout>
			<slot />
		</Centeredlayout>
	</PageTransitionLayout>

	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
