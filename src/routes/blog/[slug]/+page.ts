import { error } from '@sveltejs/kit';

export const prerender = 'auto';

export async function load({ params }) {
	try {
		const post = await import(`../../../content/posts/${params.slug}.svx`);

		return {
			content: post.default,
			title: post.metadata.title,
			description: post.metadata.description,
			date: post.metadata.date,
			thumbnail: post.metadata.thumbnail
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
