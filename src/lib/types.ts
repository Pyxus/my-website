export interface Post {
	visible: boolean;
	slug: string;
	title: string;
	description: string;
	date: string;
	thumbnail: string;
	categories: string[];
	tags: string[];
}

export interface Project {
	title: string;
	description: string;
	releaseYear: string;
	articleLink: string;
	demoLink: string;
	sourceLink: string;
}

export interface Artwork {
	title: string;
	description: string;
	year: string;
	tags: string[];
	imgSrc: string;
	imgAlt: string;
}
