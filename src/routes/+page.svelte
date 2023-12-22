<script lang="ts">
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	let tabSet: number = 0;
</script>

<div class="container flex pt-4 justify-center items-center h-full mx-auto max-w-5xl gap-8">
	<div
		class="glow-element justify-center w-11/12 overflow-hidden bg-gradient-to-br variant-gradient-primary-secondary rounded-lg"
	>
		<img
			src="/images/uploads/pfp-transparent.png"
			alt="Your Head"
			class="relative scale-[1.8] translate-y-16"
		/>
	</div>
	<div class="w-full h-full">
		<h1 class="h1 pb-4">About Me</h1>
		<p class="pb-4">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum et enim eget ultrices.
			Vestibulum suscipit in libero a pharetra. Vivamus ac lectus bibendum, bibendum eros ac, congue
			lectus. Pellentesque volutpat leo accumsan tortor gravida tincidunt. Duis porta viverra arcu
			quis pellentesque. Nulla in accumsan libero. Mauris rutrum nunc non quam ullamcorper
			pellentesque. Maecenas diam nisl, tempus id posuere vitae, accumsan quis elit. Morbi eu
			iaculis massa, sit amet condimentum risus. Donec at pulvinar erat, sed tempus nunc. Mauris et
			leo quam.
		</p>
		<TabGroup>
			<Tab bind:group={tabSet} name="tab1" value={0}>Skills</Tab>
			<Tab bind:group={tabSet} name="tab2" value={1}>Tools</Tab>
			<Tab bind:group={tabSet} name="tab3" value={2}>Education</Tab>
			<!-- Tab Panels --->
			<svelte:fragment slot="panel">
				{#if tabSet === 0}
					<ul>
						<li class="pb-3">
							<h2 class="text-secondary-400-500-token h5">Programming</h2>
							<p>C#, Java, Kotlin, TypeScript, Javascript, Python, GDScript</p>
						</li>
						<li class="pb-3">
							<h2 class="text-secondary-400-500-token h5">Game Development</h2>
							<p>Godot, GameMaker Studio 2</p>
						</li>
						<li class="pb-3">
							<h2 class="text-secondary-400-500-token h5">Digital Art</h2>
							<p>Clipstudio Paint, Affinity Suite, Character Design</p>
						</li>
						<li class="pb-3">
							<h2 class="text-secondary-400-500-token h5">Other</h2>
							<p>Desktop Computer Assembly</p>
						</li>
					</ul>
				{:else if tabSet === 1}
					<ul>
						<li class="pb-3">
							<h2 class="text-secondary-400-500-token h5">Desktop</h2>
							<p><b>CPU:</b> Ryzen 7 2700</p>
							<p><b>MOBO:</b> Gigabyte X570 AORUS ULTRA</p>
							<p><b>RAM:</b> G.Skill Ripjaws V 32 GB</p>
							<p><b>GPU:</b> GTX 1080 Ti</p>
							<p><b>OS:</b> Windows / Ubuntu</p>
						</li>
						<li class="pb-3">
							<h2 class="text-secondary-400-500-token h5">Drawing Tablet</h2>
							<p>XP-Pen Artist 22R</p>
						</li>
						<li class="pb-3">
							<h2 class="text-secondary-400-500-token h5">Microphone</h2>
							<p>Blue Spark</p>
						</li>
						<li class="pb-3">
							<h2 class="text-secondary-400-500-token h5">Webcam</h2>
							<p>Logitech C920 HD Pro</p>
						</li>
					</ul>
				{:else if tabSet === 2}
					<ul>
						<li class="pb-3">
							<h2 class="text-secondary-400-500-token h5">University</h2>
							<p>Bachelor's in Computer Science</p>
						</li>
						<li class="pb-3">
							<h2 class="text-secondary-400-500-token h5">Art</h2>
							<p>Self taught</p>
						</li>
					</ul>
				{/if}
			</svelte:fragment>
		</TabGroup>
	</div>
</div>

<style>
	.glow-element {
		box-shadow: 0 0 20px rgba(0, 0, 255, 0.7); /* Adjust the color and opacity as needed */
		animation: glow 2s infinite alternate; /* Adjust the animation duration as needed */
	}

	@keyframes glow {
		0% {
			box-shadow: 0 0 20px rgba(70, 133, 175, 0.7);
		}
		100% {
			box-shadow: 0 0 40px rgba(70, 133, 175, 0.9);
		}
	}
</style>
