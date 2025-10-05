import { contactSchema } from '@/lib/schema/contactSchema';
import { getFeaturedProjects } from '@/lib/getProject';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';
import { getTotalLikes } from '@/lib/db/methods';

export const load: PageServerLoad = async ({ cookies, locals }) => {
	const projects = await getFeaturedProjects();

	return {
		page: {
			projects,
		},
		contactForm: await superValidate(zod(contactSchema)),
		darkMode: cookies.get('theme') === 'dark',
		totalLikes: await getTotalLikes(),
		firstVisit: locals.firstVisit,
	};
};
