<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Card, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { formatDate } from '@/lib/utils';
	import { Calendar } from '@lucide/svelte';

	let { data } = $props();

	const pageTitle = 'Blog | Mohith Nagendra';
	const description =
		'My articles and thoughts on software engineering, systems, and AI. All opinions are my own, not my employer\'s.';

	const canonicalUrl = 'https://mohithn.vercel.app/blog';

	// Get unique categories
	const categories = [...new Set(data.posts.flatMap((post) => post.categories))];

	// Sort posts by date
	const sortedPosts = [...data.posts].sort(
		(a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
	);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content="web development, testing, software engineering, SvelteKit, TypeScript, JavaScript" />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://mohithn.vercel.app/images/og-mohithn.png" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={canonicalUrl} />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://mohithn.vercel.app/images/og-mohithn.png" />
</svelte:head>

<div class="mx-auto max-w-[1200px] px-6 pb-12 pt-8 sm:pt-12">
	<header class="mb-8">
		<h1 class="mb-4 text-4xl font-bold">Blog</h1>
		<p class="text-muted-foreground max-w-[600px] text-lg">{description}</p>
	</header>

	<!-- Featured Posts -->
	<section class="mb-3">
		<section>
			<div class="grid gap-4">
				{#each sortedPosts as post}
					<Card class="bg-card/50 hover:bg-card border-foreground/20 group relative overflow-hidden transition-colors">
						<CardHeader class="space-y-4 p-6">
							<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
								<CardTitle class="text-xl">
									<a
										href={`/blog/${post.slug}`}
										class="hover:text-primary after:absolute after:inset-0 after:content-['']"
									>
										{post.title}
									</a>
								</CardTitle>
								<div class="text-muted-foreground flex shrink-0 items-center gap-2 text-sm">
									<Calendar class="h-4 w-4" />
									<time datetime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
								</div>
							</div>
							<CardDescription class="line-clamp-2">{post.description}</CardDescription>
							<div class="flex flex-wrap gap-2">
								{#each post.categories as category}
									<Badge variant="outline" class="text-foreground/80">{category}</Badge>
								{/each}
							</div>
						</CardHeader>
					</Card>
				{/each}
			</div>
		</section>
	</section>
</div>
