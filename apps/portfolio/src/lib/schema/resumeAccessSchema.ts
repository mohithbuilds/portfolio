import { z } from 'zod';

export const resumeAccessSchema = z.object({
	name: z.string().min(3, 'Name must be over 3 characters').max(100, 'Name must be under 100 characters'),
	company: z.string().min(3, 'Company must be over 3 characters').max(100, 'Company must be under 100 characters'),
	email: z.string().email('Invalid email address').optional(),
	message: z
		.string()
		.min(3, 'Message must be over 3 characters')
		.max(500, 'Message must be under 500 characters')
		.optional(),
	botCheck: z.boolean().optional(),
});

export type ResumeAccessForm = typeof resumeAccessSchema;
