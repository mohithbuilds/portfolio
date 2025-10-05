import type { LayoutServerLoad } from './$types';
import type { SEO as SEOType } from '$lib/types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const { firstVisit } = locals;

	const SEO = {
		title: 'Kyrre Gjerstad | Fullstack Typescript Developer',
		description:
			'Passionate about creating visually appealing and functional web applications using SvelteKit and NextJS. Explore my portfolio and discover my work in building clean, efficient, and user-friendly digital experiences.',
		keywords: [
			'fullstack developer',
			'Typescript',
			'SvelteKit',
			'NextJS',
			'web development',
			'user experience',
			'UX',
			'web applications',
			'portfolio',
		],
		author: 'Kyrre Gjerstad',

		openGraph: {
			url: 'https://kyrre.dev',
			title: 'Kyrre Gjerstad | Fullstack Typescript Developer',
			description:
				'Explore the portfolio of Kyrre Gjerstad, a fullstack developer specializing in SvelteKit and NextJS.',
			image: 'https://kyrre.dev/images/og-kyrre-gjerstad.jpg',
		},

		twitter: {
			url: 'https://kyrre.dev',
			title: 'Kyrre Gjerstad | Fullstack Typescript Developer',
			description:
				'Discover the work of Kyrre Gjerstad, a fullstack developer passionate about creating functional and visually appealing web applications using SvelteKit and NextJS.',
			image: 'https://kyrre.dev/images/og-kyrre-gjerstad.jpg',
			card: 'summary_large_image',
			site: '@kyrregjerstad',
			creator: '@kyrregjerstad',
		},
	} satisfies SEOType;

	return {
		firstVisit,
		SEO,
	};
};
