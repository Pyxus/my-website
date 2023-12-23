<script lang="ts">
	export let maxWidth = '64rem';
</script>

<div style="max-width: ${maxWidth}" class="container justify-center items-center mx-auto p-4">
	<slot />
</div>
