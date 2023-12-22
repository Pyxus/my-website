<script lang="ts">
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		LightSwitch,
		initializeStores,
		Drawer,
		getDrawerStore
	} from '@skeletonlabs/skeleton';
	import 'iconify-icon';
	import PageTransitionLayout from '$lib/layouts/PageTransitionLayout.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import SocialsButton from '$lib/components/SocialsButton.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import NavList from '$lib/components/NavList.svelte';

	export let data;

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	initializeStores();

	const routes = [
		{ title: 'About', path: '/about' },
		{ title: 'Blog', path: '/blog' },
		{ title: 'Projects', path: '/projects' },
		{ title: 'Art', path: '/art' },
		{ title: 'Contact', path: '/contact' }
	];

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<Drawer>
	<NavList useFlex={false} {routes} />
	<LightSwitch rounded="rounded-md" />
	<SocialsButton />
</Drawer>
<AppShell scrollbarGutter="stable" regionPage="relative scroll-smooth">
	<svelte:fragment slot="header">
		<nav>
			<AppBar
				slotDefault="place-self-center"
				slotTrail="place-content-end"
				padding="lg:pl-60 lg:pr-60 pr-4 pl-4 pt-3 pb-3"
			>
				<svelte:fragment slot="lead">
					<div class="flex items-center">
						<button class="btn mr-4 text-2xl w-auto md:hidden variant-filled" on:click={drawerOpen}>
							<iconify-icon icon="ci:hamburger-md" />
						</button>
						<a href="/"><strong class="text-xl uppercase">Pyxus.dev</strong></a>
					</div>
				</svelte:fragment>
				<NavList {routes} />
				<svelte:fragment slot="trail">
					<LightSwitch rounded="rounded-md md:flex hidden" />
					<SocialsButton container="md:flex hidden" />
				</svelte:fragment>
			</AppBar>
		</nav>
	</svelte:fragment>

	<PageTransitionLayout url={data.url}>
		<slot />
	</PageTransitionLayout>

	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
