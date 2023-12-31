import type { Post } from '$lib/types';
import { json } from '@sveltejs/kit';

async function getPosts() {
	const postFilePaths = import.meta.glob('/src/content/posts/*.md', { eager: true });
	let posts: Post[] = [];

	for (const path in postFilePaths) {
		const file = postFilePaths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug };
			post.visible && posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
