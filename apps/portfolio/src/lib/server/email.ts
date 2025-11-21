import { PRIVATE_MAILJET_API_KEY, PRIVATE_MAILJET_SECRET_KEY } from '$env/static/private';
import Mailjet from 'node-mailjet';
import type { z } from 'zod';
import type { contactSchema } from '$lib/schema/contactSchema';

const mailjet = new Mailjet({
    apiKey: PRIVATE_MAILJET_API_KEY,
    apiSecret: PRIVATE_MAILJET_SECRET_KEY
});

type ContactData = z.infer<typeof contactSchema>;


export async function sendEmail(data: Omit<ContactData, 'botCheck'>) {
    const { name, email, subject, message } = data;

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
                HTMLPart: `<p>New message from ${name}, email: ${email}</p> <p>${message}</p>`,
            },
        ],
    });

    try {
        await mailjetRequest;
        return { success: true };
    } catch (error) {
        console.error('Failed to send email:', error);
        return { success: false, error: 'Failed to send email' };
    }
}
