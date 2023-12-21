import type { Artwork } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/art');
	const art: Artwork[] = await response.json();
	return { art };
}
