<script lang="ts">
	import { onMount } from 'svelte';
	import type { Heading } from '$lib/extractHeadings';

	export let headings: Heading[];

	let activeId: string | null = null;

	onMount(() => {
		const scroller = document.getElementById('page-content');
		if (!scroller) return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeId = entry.target.id;
					}
				});
			},
			{
				root: scroller,
				rootMargin: '0px 0px -75% 0px',
			}
		);

		headings.forEach((heading) => {
			const element = document.getElementById(heading.id);
			if (element) {
				observer.observe(element);
			}
		});

		return () => observer.disconnect();
	});

	function handleTocClick(event: MouseEvent, id: string) {
		event.preventDefault();
		const element = document.getElementById(id);
		const scroller = document.getElementById('page-content');
		if (element && scroller) {
			scroller.scrollTo({
				top: element.offsetTop - 80,
				behavior: 'smooth',
			});
			// Update URL hash without causing a page jump
			history.pushState(null, '', `#${id}`);
			activeId = id;
		}
	}
</script>

<aside class="toc-sidebar">
	<nav>
		<h3 class="toc-title">On this page</h3>
		<ul>
			{#each headings as heading}
				<li class="level-{heading.level}">
					<a
						href="#{heading.id}"
						class:active={activeId === heading.id}
						on:click={(e) => handleTocClick(e, heading.id)}
					>
						{heading.text}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</aside>

<style>
	.toc-sidebar {
		position: sticky;
		top: 80px; /* Adjust based on your header's height */
		height: fit-content;
		max-height: calc(100vh - 100px);
		overflow-y: auto;
		border-radius: 0.5rem;
		border: 1px solid var(--color-border);
		background-color: rgba(26, 26, 26, 0.7);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		padding: 1.5rem;
		width: 100%;
	}

	.toc-title {
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: var(--color-foreground);
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		margin-bottom: 0.5rem;
	}

	a {
		color: var(--color-muted-foreground);
		text-decoration: none;
		transition: color 0.2s ease;
		display: block;
	}

	a:hover {
		color: var(--color-foreground);
	}

	a.active {
		color: var(--color-accent-foreground);
		font-weight: 500;
	}

	.level-3 {
		padding-left: 1rem;
	}
</style>
