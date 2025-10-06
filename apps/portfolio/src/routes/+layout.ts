export const load = async () => {
	return {
		SEO: {
			title: 'Mohith Nagendra | Fullstack Typescript Developer',
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
			author: 'Mohith Nagendra',

			openGraph: {
				url: 'https://kyrre.dev',
				title: 'Mohith Nagendra | Fullstack Typescript Developer',
				description:
					'Explore the portfolio of Mohith Nagendra, a fullstack developer specializing in SvelteKit and NextJS.',
				image: 'https://kyrre.dev/images/og-kyrre-gjerstad.jpg',
			},

			twitter: {
				url: 'https://kyrre.dev',
				title: 'Mohith Nagendra | Fullstack Typescript Developer',
				description:
					'Discover the work of Mohith Nagendra, a fullstack developer passionate about creating functional and visually appealing web applications using SvelteKit and NextJS.',
				image: 'https://kyrre.dev/images/og-kyrre-gjerstad.jpg',
				card: 'summary_large_image',
				site: '@kyrregjerstad',
				creator: '@kyrregjerstad',
			},
		},
	};
};
