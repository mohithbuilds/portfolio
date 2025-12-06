<script lang="ts" context="module">
	import pre from '$lib/components/markdown/pre.svelte';

	export { pre };
</script>

<script lang="ts">
	import { onMount, tick } from 'svelte';
	import TableOfContents from '$lib/components/TableOfContents.svelte';
	import { extractHeadings, type Heading } from '$lib/extractHeadings';

	let headings: Heading[] = [];
	let articleEl: HTMLElement;

	onMount(async () => {
		if (articleEl) {
			// Give Svelte a moment to render the content
			await tick();
			const content = articleEl.innerHTML;
			headings = extractHeadings(content);
		}
	});
</script>

<div class="blog-layout">
	<article class="prose" bind:this={articleEl}>
		<slot />
	</article>

	{#if headings && headings.length > 0}
		<div class="sidebar-container">
			<TableOfContents {headings} />
		</div>
	{/if}
</div>

<style>
	.blog-layout {
		display: grid;
		grid-template-columns: minmax(0, 3fr) 1fr;
		gap: 3rem;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	.prose {
		color: var(--color-foreground);
		line-height: 1.7;
	}

	/* This is crucial for smooth scrolling to land correctly */
	.prose :global(h2),
	.prose :global(h3) {
		scroll-margin-top: 80px; /* Should match the 'top' value of the sidebar */
	}

	.sidebar-container {
		width: 100%;
	}

	/* On smaller screens, hide the ToC for a better mobile experience */
	@media (max-width: 1024px) {
		.blog-layout {
			grid-template-columns: 1fr;
		}
		.sidebar-container {
			display: none;
		}
	}
</style>
