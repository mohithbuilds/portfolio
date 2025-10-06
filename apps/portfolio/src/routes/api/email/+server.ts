import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PRIVATE_MAILJET_API_KEY, PRIVATE_MAILJET_SECRET_KEY } from '$env/static/private';
import Mailjet from 'node-mailjet';
import { contactSchema } from '$lib/schema/contactSchema';

const mailjet = new Mailjet({
    apiKey: PRIVATE_MAILJET_API_KEY,
    apiSecret: PRIVATE_MAILJET_SECRET_KEY
});

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		const { name, email, subject, message } = contactSchema.parse(body);

		const mailjetRequest = mailjet.post('send', { version: 'v3.1' }).request({
			Messages: [
				{
					From: {
						Email: 'hi.mohithn@gmail.com',
						Name: 'Mohith Nagendra',
					},
					To: [
						{
							Email: 'mohith.n2022@gmail.com',
							Name: 'Mohith Nagendra',
						},
					],
					Subject: subject,
					TextPart: message,
					HTMLPart: `<p>new message from ${name}, email: ${email}</p> <p>${message}</p>`,
				},
			],
		});

		await mailjetRequest;
		return json({ success: true });
	} catch (e) {
		console.log(e);
		if (e instanceof Error) {
			return error(500, e.message);
		}
		return error(500, 'An error occurred');
	}
};
