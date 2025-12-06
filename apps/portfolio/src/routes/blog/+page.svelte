<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Card, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Input } from '@/lib/components/ui/input';
	import { formatDate } from '@/lib/utils';
	import { Calendar, Search } from 'lucide-svelte';
	import type { Category } from '$lib/types';

	let { data } = $props();

	const pageTitle = 'Blog | Mohith Nagendra';
	const description =
		"My articles and thoughts on software engineering, systems, and AI. All opinions are my own, not my employer's.";

	const canonicalUrl = 'https://mohithn.vercel.app/blog';

	let searchTerm = $state('');
	let selectedCategory = $state<Category | null>(null);

	// Get unique categories
	const categories = [...new Set(data.posts.flatMap((post) => post.categories))];

	// Sort posts by date
	const sortedPosts = [...data.posts].sort(
		(a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
	);

	function filterByCategory(category: Category) {
		selectedCategory = selectedCategory === category ? null : category;
	}

	const filteredPosts = $derived(
		sortedPosts.filter((post) => {
			const searchTermMatch =
				post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				post.description.toLowerCase().includes(searchTerm.toLowerCase());
			const categoryMatch = selectedCategory ? post.categories.includes(selectedCategory) : true;
			return searchTermMatch && categoryMatch;
		})
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

<div class="mx-auto max-w-[1200px] px-6 pt-8 pb-12 sm:pt-12">
	<header class="mb-8">
		<h1 class="mb-4 text-4xl font-bold">Blog</h1>
		<p class="text-muted-foreground max-w-[600px] text-lg">{description}</p>
	</header>

	<div class="flex flex-col-reverse gap-8 md:flex-row">
		<div class="md:w-3/4">
			<!-- Posts -->
			<section class="mb-3">
				<section>
					<div class="grid gap-4">
						{#each filteredPosts as post}
							<Card
								class="bg-card/50 hover:bg-card border-foreground/20 group relative overflow-hidden transition-colors"
							>
								<CardHeader class="space-y-4 p-6">
									<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
		<div class="md:w-1/4">
			<!-- Search and Filter -->
			<div class="mb-8">
				<div class="relative flex items-center">
					<Input placeholder="Search articles" bind:value={searchTerm} />
				</div>
			</div>
			<div class="flex flex-wrap items-center gap-2">
				{#each categories as category}
					<button onclick={() => filterByCategory(category)}>
						<Badge variant={selectedCategory === category ? 'secondary' : 'outline'} class="cursor-pointer">
							{category}
						</Badge>
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>
