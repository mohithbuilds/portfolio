import { PRIVATE_MAILJET_API_KEY, PRIVATE_MAILJET_SECRET_KEY } from '$env/static/private';
import Mailjet from 'node-mailjet';
import type { z } from 'zod';
import { contactSchema } from '$lib/schema/contactSchema';
import { resumeAccessSchema } from '$lib/schema/resumeAccessSchema';

const mailjet = new Mailjet({
    apiKey: PRIVATE_MAILJET_API_KEY,
    apiSecret: PRIVATE_MAILJET_SECRET_KEY
});

type ContactData = z.infer<typeof contactSchema>;
type ResumeAccessData = z.infer<typeof resumeAccessSchema>;


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

export async function sendResumeAccessEmail(data: Omit<ResumeAccessData, 'botCheck'>) {
    const { name, company, email, message } = data;

    const mailjetRequest = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
            {
                From: {
                    Email: 'hi.mohithn@gmail.com',
                    Name: 'Resume Gate',
                },
                To: [
                    {
                        Email: 'mohith.n2022@gmail.com',
                        Name: 'Mohith Nagendra',
                    },
                ],
                Subject: 'Someone accessed your resume',
                HTMLPart: `<p>Someone just accessed your resume:</p>
                           <ul>
                               <li><strong>Name:</strong> ${name}</li>
                               <li><strong>Company:</strong> ${company}</li>
                               <li><strong>Email:</strong> ${email || 'Not provided'}</li>
                               <li><strong>Message:</strong> ${message || 'Not provided'}</li>
                           </ul>
                           <p>Message details:</p>
                           <p>${message || 'No message provided.'}</p>
                           `,
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
