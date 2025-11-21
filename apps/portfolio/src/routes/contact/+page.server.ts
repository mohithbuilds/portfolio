import { contactSchema } from '@/lib/schema/contactSchema';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		contactForm: await superValidate(zod(contactSchema)),
	};
};