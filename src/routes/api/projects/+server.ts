import type { Project } from '$lib/types';
import { json } from '@sveltejs/kit';

export async function GET() {
	const projectJson = await import(`../../../content/projects.json`);
	let projects: Project[] = projectJson.default;

	projects = projects.filter((project) => project.title !== '');

	projects = projects.sort(
		(first, second) =>
			new Date(second.releaseYear).getTime() - new Date(first.releaseYear).getTime()
	);

	return json(projects);
}
