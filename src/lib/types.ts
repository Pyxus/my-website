export interface Post {
	isDraft: boolean;
	title: string;
	datePosted: string;
	dateModified: string;
	summary: string;
	thumbnail: string;
	categories: string[];
	tags: string[];
	slug: string;
}

export interface Project {
	title: string;
	description: string;
	releaseYear: string;
	articleLink: string;
	technologies: string[];
	demoLink: string;
	sourceLink: string;
}

export interface Artwork {
	src: string;
	year: string;
	meta: ArtMeta;
}

export interface ArtMeta {
	title: string;
	description: string;
	tags: string[];
	size: 'md' | 'lg';
	alt: string;
}
