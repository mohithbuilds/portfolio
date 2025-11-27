<script lang="ts">
	import { Card, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';


	let { data } = $props();

	const pageTitle = 'Projects | Mohith Nagendra';
	const description = 'A collection of projects by Mohith Nagendra, showcasing skills in web development, software engineering, and more.';
	const canonicalUrl = 'https://mohithn.vercel.app/projects';
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<div class="mx-auto max-w-[1200px] px-6 pb-12 pt-8 sm:pt-4">
	<header class="mb-8">
		<h1 class="mb-4 text-4xl font-bold">Projects</h1>
		<p class="text-muted-foreground max-w-[600px] text-lg">{description}</p>
	</header>

	<section>
		<div class="grid gap-4">
			{#each data.projects as project}
				<Card class="bg-card/50 hover:bg-card border-foreground/20 group relative overflow-hidden transition-colors">
					<CardHeader class="space-y-4 p-6">
						<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
							<CardTitle class="text-xl">
								<a
									href={`/projects/${project.slug}`}
									class="hover:text-primary after:absolute after:inset-0 after:content-['']"
								>
									{project.title}
								</a>
							</CardTitle>

						</div>
						{#if project.description}
							<CardDescription class="line-clamp-2">{project.description}</CardDescription>
						{/if}
					</CardHeader>
				</Card>
			{/each}
		</div>
	</section>
</div>
