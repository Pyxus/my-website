import type { Artwork, Artwork_, ArtMeta } from '$lib/types';
import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export async function GET() {
	let art: Artwork[] = fethArtwork();

	art = art.filter((artwork) => artwork.meta.title !== '');

	art = art.sort(
		(first, second) => new Date(second.year).getTime() - new Date(first.year).getTime()
	);

	return json(art);
}

function fethArtwork(): Artwork[] {
	const artworks: Artwork[] = [];
	const artFolderPath = 'static/images/art';
	const yearFolders = fs.readdirSync(artFolderPath);

	for (const yearFolder of yearFolders) {
		const filePath = path.join(artFolderPath, yearFolder);
		if (fs.statSync(filePath).isDirectory()) {
			const images = fs.readdirSync(filePath);

			for (const image of images) {
				const artwork = createArtWorkFromFile(filePath, image, yearFolder);

				if (artwork) artworks.push(artwork);
			}
		}
	}

	return artworks;
}

function createArtWorkFromFile(
	filePath: string,
	image: string,
	yearFolder: string
): Artwork | null {
	if (isValidImageExtension(image)) {
		const imagePath = path.join(removeFirstDirectoryFromPath(filePath), image);
		const jsonPath = path.join(filePath, `${path.parse(image).name}.json`);
		const year: string = Number.isInteger(Number(yearFolder)) ? yearFolder : '0';
		const meta: ArtMeta = fs.existsSync(jsonPath)
			? readMeta(jsonPath)
			: {
					title: imagePath,
					description: '',
					tags: [],
					alt: 'Drawing'
				};

		return {
			src: imagePath,
			year,
			meta
		};
	}
	return null;
}

function removeFirstDirectoryFromPath(filePath: string) {
	const firstDirectory = path.basename(filePath);
	const remainingPath = path.dirname(filePath).split(path.sep).slice(1).join(path.sep);
	return path.join(remainingPath, firstDirectory);
}

function readMeta(jsonPath: string): ArtMeta {
	const metaContent = fs.readFileSync(jsonPath, 'utf-8');
	return JSON.parse(metaContent);
}

function isValidImageExtension(fileName: string): boolean {
	const validExtensions = ['.webp', '.jpeg', '.png'];

	for (const ext of validExtensions) {
		if (fileName.endsWith(ext)) {
			return true;
		}
	}

	return false;
}
