import { getAllProjects } from '@/lib/getProject';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const allProjects = await getAllProjects();

	// Select only the serializable data needed for the index page
	const projectsForIndex = allProjects.map((project) => ({
		slug: project.slug,
		title: project.title,
		description: project.description,
		type: project.type,
	}));

	return {
		projects: projectsForIndex,
	};
};
