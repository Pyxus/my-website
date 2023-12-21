<script lang="ts">
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

	const popupFeatured: PopupSettings = {
		event: 'click',
		target: 'popupFeatured',
		placement: 'bottom'
	};

	export let container: string = '';
</script>

<div class={container}>
	<button class="btn h-6 w-8 variant-filled" use:popup={popupFeatured}
		><iconify-icon icon="ion:share-social" /></button
	>
	<div
		class="card p-2 shadow-xl border-t-8 border-t-primary-500 columns-1"
		data-popup="popupFeatured"
	>
		<div class=""><b>Follow Me</b></div>
		<div class="grid">
			<a class="btn" href="https://github.com/Pyxus/" target="_blank" rel="noreferrer">
				<iconify-icon style="font-size: 1.5rem;" icon="brandico:github" />
			</a>
			<a class="btn" href="https://www.instagram.com/pyxus_/" target="_blank" rel="noreferrer">
				<iconify-icon style="font-size: 1.5rem;" icon="ri:instagram-fill" />
			</a>

			<a class="btn" href="https://pyxus.itch.io" target="_blank" rel="noreferrer">
				<iconify-icon style="font-size: 1.5rem;" icon="fa-brands:itch-io" />
			</a>
		</div>
		<div class="arrow bg-surface-100-800-token variant-outline-primary" />
	</div>
</div>
