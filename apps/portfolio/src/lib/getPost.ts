import { z } from 'zod';

const postSchema = z.object({
	metadata: z.object({
		id: z.string().min(1),
		title: z.string().min(1),
		slug: z.string().min(1),
		layout: z.string().default('blog'),
		published: z.boolean().default(false),
		publishedAt: z.string(),
		categories: z.array(z.string()).default([]),
		author: z.string().default('Mohith Nagendra'),
		description: z.string().optional(),
		seoTitle: z.string().optional(),
		seoDescription: z.string().optional(),
		seoKeywords: z.array(z.string()).default([]),
		ogImage: z.string().optional(),
	}),
	default: z.any().optional(),
});

export async function getPost(slug: string) {
	try {
		const md = await import(`../posts/${slug}.md`);
		const post = postSchema.safeParse(md);

		if (!post.success) {
			return null;
		}

		if (!post.data.metadata.published) {
			return null;
		}

		return post.data;
	} catch (e) {
		console.error(e);
		return null;
	}
}

export async function getAllPosts() {
	const postModules = import.meta.glob('../posts/*.md');
	const posts = await Promise.all(
		Object.values(postModules).map(async (resolver) => {
			const { metadata } = await resolver();
			const parsed = postSchema.safeParse({ metadata }); // Only validate metadata here
			if (!parsed.success) {
				return null;
			}
			return parsed.data;
		})
	);

	return posts.filter((post) => post !== null);
}
