import type { Artwork } from '$lib/types';
import { json } from '@sveltejs/kit';

export async function GET() {
	const artJson = await import(`../../../content/art.json`);
	let art: Artwork[] = artJson.default;

	art = art.filter((artwork) => artwork.title !== '');

	art = art.sort(
		(first, second) => new Date(second.year).getTime() - new Date(first.year).getTime()
	);

	return json(art);
}
