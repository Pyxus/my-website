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

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import SocialsButton from './SocialsButton.svelte';
	import NavList from './NavList.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	initializeStores();

	const routes = [
		{ title: 'About', path: '/about' },
		{ title: 'Blog', path: '/blog' },
		{ title: 'Projects', path: '/project' },
		{ title: 'Art', path: '/art' },
		{ title: 'Contact', path: '/contact' }
	];

	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<!-- App Shell -->
<Drawer>
	<NavList useFlex={false} {routes} />
	<LightSwitch rounded="rounded-md" />
	<SocialsButton />
</Drawer>
<AppShell >
	<svelte:fragment slot="pageHeader">
		<!-- App Bar -->
		<nav>
			<div>
				<AppBar
					slotDefault="place-self-center"
					slotTrail="place-content-end"
					padding="lg:pl-60 lg:pr-60 pr-4 pl-4 pt-3 pb-3"
				>
					<svelte:fragment slot="lead">
						<div class="flex items-center">
							<button
								class="btn mr-4 text-2xl w-auto md:hidden variant-filled"
								on:click={drawerOpen}
							>
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
			</div>
		</nav>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft"></svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

<style>
</style>
