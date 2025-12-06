import { contactSchema } from '@/lib/schema/contactSchema';
import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions, PageServerLoad } from './$types';
import { sendEmail } from '$lib/server/email';

export const load: PageServerLoad = async () => {
	return {
		contactForm: await superValidate(zod(contactSchema)),
	};
};

export const actions: Actions = {
	submitContactForm: async ({ request }) => {
		const form = await superValidate(request, zod(contactSchema));

		if (!form.valid) {
			return fail(400, {
				form,
			});
		}

		// Honeypot check
		if (form.data.botCheck) {
			console.log('Bot detected via honeypot');
			return message(form, 'Thanks for your message!'); // Return success to not alert bots
		}

		try {
			await sendEmail(form.data);
			return message(form, 'Thanks for your message!');
		} catch (error) {
			console.error('Error sending contact form email:', error);
			return fail(500, {
				form,
				message: 'Failed to send message, please try again later.',
			});
		}
	},
};
