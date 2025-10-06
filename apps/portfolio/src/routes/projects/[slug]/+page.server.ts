import { getTotalLikesByPage } from '@/lib/db/methods';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	return {
		likes: await getTotalLikesByPage(slug),
	};
};
