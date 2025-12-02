import { contactSchema } from '@/lib/schema/contactSchema';
import { getFeaturedProjects } from '@/lib/getProject';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';
import { getTotalLikes } from '@/lib/db/methods';
import { getAllPosts } from '@/lib/getPost';

export const load: PageServerLoad = async ({ cookies, locals }) => {
	const projects = await getFeaturedProjects();
	const posts = await getAllPosts();
	const recentPost = posts
		.filter((p) => p?.metadata.published)
		.sort(
			(a, b) => new Date(b?.metadata.publishedAt ?? 0).getTime() - new Date(a?.metadata.publishedAt ?? 0).getTime()
		)[0];

	return {
		page: {
			projects,
			recentPost,
		},
		contactForm: await superValidate(zod(contactSchema)),
		darkMode: cookies.get('theme') === 'dark',
		totalLikes: await getTotalLikes(),
		firstVisit: locals.firstVisit,
	};
};
