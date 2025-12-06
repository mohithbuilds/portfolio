import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { contactSchema } from '$lib/schema/contactSchema';
import { sendEmail } from '$lib/server/email';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		const parseResult = contactSchema.safeParse(body);

		if (!parseResult.success) {
			return error(400, 'Invalid request body');
		}

		const result = await sendEmail(parseResult.data);

		if (result.success) {
			return json({ success: true });
		} else {
			return error(500, result.error || 'An error occurred');
		}
	} catch (e) {
		console.log(e);
		if (e instanceof Error) {
			return error(500, e.message);
		}
		return error(500, 'An error occurred');
	}
};
