import { getProject, getAllProjects } from '@/lib/getProject';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const load: PageLoad = async ({ params, data }) => {
	const { slug } = params;

	const [project, allProjects] = await Promise.all([getProject(slug), getAllProjects()]);

	if (!project) {
		throw error(404, 'Project not found');
	}

	const projectIndex = allProjects.findIndex((p) => p.slug === slug);
	const nextProject = allProjects[projectIndex + 1] ?? null;
	const prevProject = allProjects[projectIndex - 1] ?? null;

	return {
		project,
		nextProject: nextProject ? { title: nextProject.title, slug: nextProject.slug } : null,
		prevProject: prevProject ? { title: prevProject.title, slug: prevProject.slug } : null,
		slug,
		likes: data.likes,
	};
};

export const entries: EntryGenerator = async () => {
	const allProjects = await getAllProjects();
	const slugs = allProjects.map((p) => p.slug);

	return slugs.map((slug) => ({ slug }));
};

export const prerender = true;
export const ssr = true;
