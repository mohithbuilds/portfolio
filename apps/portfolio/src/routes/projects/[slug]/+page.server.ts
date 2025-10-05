import { getTotalLikesByPage } from '@/lib/db/methods';
import { getAllProjects, getProject } from '@/lib/getProject';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const [project, allProjects] = await Promise.all([
		getProject(slug),
		getAllProjects(),
	]);

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
		likes: await getTotalLikesByPage(slug),
	};
};

export const entries: EntryGenerator = async () => {
	const allProjects = await getAllProjects();
	const slugs = allProjects.map((p) => p.slug);

	return slugs.map((slug) => ({ slug }));
};

export const prerender = true;
export const ssr = true;
