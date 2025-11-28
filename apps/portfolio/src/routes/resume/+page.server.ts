import { resumeAccessSchema } from '@/lib/schema/resumeAccessSchema';
import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions, PageServerLoad } from './$types';
import { sendResumeAccessEmail } from '$lib/server/email';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(resumeAccessSchema)),
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(resumeAccessSchema));

		if (!form.valid) {
			return fail(400, {
				form,
			});
		}

		// Honeypot check
		if (form.data.botCheck) {
			console.log('Bot detected via honeypot');
			return message(form, 'Success!');
		}

		try {
			await sendResumeAccessEmail(form.data);
			return message(form, 'Success!');
		} catch (error) {
			console.error('Error sending resume access email:', error);
			return fail(500, {
				form,
				message: 'Failed to send email, please try again later.',
			});
		}
	},
};
