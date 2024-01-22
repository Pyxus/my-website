import { error } from '@sveltejs/kit';

export const prerender = 'auto';

export async function load({ params }) {
	try {
		const post = await import(`../../../content/posts/${params.slug}.svx`);

		if (post.metadata.isDraft) {
			return;
		}

		return {
			content: post.default,
			title: post.metadata.title,
			summary: post.metadata.summary,
			datePosted: post.metadata.datePosted,
			dateModified: post.metadata.dateModified,
			thumbnail: post.metadata.thumbnail
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
