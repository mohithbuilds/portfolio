<script lang="ts">
	import Chip from '@/components/Chip.svelte';
	import Gallery from '@/components/Gallery.svelte';
	import LinkButton from '@/components/LinkButton.svelte';
	import PageNavigation from '@/components/PageNavigation.svelte';
	import { ExternalLinkIcon, GithubIcon, X } from '@lucide/svelte';

	import Divider from '@/components/Divider.svelte';
	import ProjectTypeChip from '@/components/ProjectTypeChip.svelte';
	import { scrollToTop } from '@/lib/utils';
	import AnimatedCounter from '@/routes/AnimatedCounter.svelte';

	let { data } = $props();
	let { project, nextProject, prevProject } = $derived(data);
	let Content = $derived(project.content);
</script>

<a
	href="/"
	class="absolute right-10 top-10 z-10 flex items-center gap-2 opacity-50 transition-opacity hover:scale-110 hover:opacity-100 sm:right-16 sm:top-16 md:hidden"
>
	<X class="size-6" />
	<span class="sr-only">home</span>
</a>
<div class="pt-2 flex w-full flex-col-reverse justify-between pb-8 sm:flex-row sm:pt-4">
	<h1 class="w-full text-pretty text-center break-words text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
		{project.title}
	</h1>
	<div class="flex flex-row-reverse justify-between gap-2 sm:flex-col">
		<!-- PageNavigation {nextProject} {prevProject} /-->
	</div>
</div>

<section class="flex flex-col gap-8">
	<div>
		<h2 class="text-md pb-2">Meta:</h2>
		<div class="flex flex-wrap gap-2">
			{#if project.type}
				<ProjectTypeChip type={project.type} />
			{/if}
			{#if project.gitHubLink}
				<LinkButton href={project.gitHubLink}>
					<GithubIcon class="size-4 sm:size-6" />
					GitHub
				</LinkButton>
			{/if}
			{#if project.href}
				<LinkButton href={project.href}>
					<ExternalLinkIcon class="size-4 sm:size-6" />
					<span>{project.title}</span>
				</LinkButton>
			{/if}
		</div>
	</div>
	<div>
		<h2 class="text-md pb-2">Technologies:</h2>
		<div class="flex max-w-[800px] flex-wrap gap-2">
			{#each project.technologies as technology}
				<Chip>{technology.title}</Chip>
			{/each}
		</div>
	</div>
</section>

<Divider />

<section class="prose text-foreground prose-bold:text-foreground! w-full max-w-full text-left leading-loose">
	{#key project.title}
		{#if project.content}
			<Content />
		{:else if project.description}
			<p>
				{project.description}
			</p>
		{/if}
	{/key}
</section>

{#if project.images && project.images.length > 0}
	<Gallery
		images={project.images.map((image, i) => ({
			src: image.asset?.url ?? '',
			alt: `Mohith Nagendra - ${project.title} screenshot ${i + 1}`,
			blurHash: image.asset?.metadata?.blurHash ?? '',
		}))}
	/>
{/if}

<div class="flex w-full items-center justify-center py-8">
	<AnimatedCounter initialLikes={data.likes} slug={data.slug} />
</div>

<div class="flex-1"></div>
<div class="flex w-full justify-center self-end justify-self-end">
	<div class="flex flex-col items-center justify-center gap-2">
		<PageNavigation {nextProject} {prevProject} class="grid grid-cols-[1fr_10px_1fr]" />
		<a href="/" class="flex items-center gap-2 opacity-50 transition-opacity hover:opacity-100" onclick={scrollToTop}
			>Home
		</a>
	</div>
</div>
