<script lang="ts">
	import { onMount, tick } from 'svelte';
	import type { Heading } from '$lib/extractHeadings';

	export let headings: Heading[];

	let lastActiveId: string | null = null;
	let visibleIds: string[] = [];
	let isClickScrolling = false;
	let clickScrollTimeout: ReturnType<typeof setTimeout>;

	let trackPathData = '';
	let trackPathLength = 1; // Initialize to a non-zero value
	let segmentData: { start: number; end: number }[] = [];

	onMount(async () => {
		const scroller = document.getElementById('page-content');
		if (!scroller) return;

		await tick();
		const liElements = headings.map((h) => document.getElementById(`toc-${h.id}`)).filter(Boolean) as HTMLElement[];
		if (liElements.length === 0) return;

		const { path, totalLength, segments } = getPathData(liElements);
		trackPathData = path;
		trackPathLength = totalLength;
		segmentData = segments;

		const observer = new IntersectionObserver(
			(entries) => {
				if (isClickScrolling) return;
				entries.forEach((entry) => {
					const id = entry.target.id;
					if (entry.isIntersecting) {
						lastActiveId = id;
						if (!visibleIds.includes(id)) {
							visibleIds = [...visibleIds, id];
						}
					} else {
						visibleIds = visibleIds.filter((vId) => vId !== id);
					}
				});
			},
			{
				root: scroller,
				rootMargin: '0px',
			}
		);

		headings.forEach((heading) => {
			const element = document.getElementById(heading.id);
			if (element) {
				observer.observe(element);
			}
		});

		return () => {
			observer.disconnect();
			clearTimeout(clickScrollTimeout);
		};
	});

	function getPathData(liElements: HTMLElement[]) {
		const segments: { start: number; end: number }[] = [];
		const tempPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		let path = '';

		for (let i = 0; i < liElements.length; i++) {
			const li = liElements[i];
			const level = parseInt(li.dataset.level || '2', 10);
			const x = level === 3 ? 16 : 0;
			const top = li.offsetTop;
			const bottom = li.offsetTop + li.offsetHeight;

			const pathBefore = path;
			tempPath.setAttribute('d', pathBefore);
			const lengthBefore = tempPath.getTotalLength();

			if (i === 0) {
				path += `M ${x} ${top} L ${x} ${bottom}`;
			} else {
				path += ` L ${x} ${top} L ${x} ${bottom}`;
			}

			tempPath.setAttribute('d', path);
			const lengthAfter = tempPath.getTotalLength();
			segments[i] = { start: lengthBefore, end: lengthAfter };
		}
		const totalLength = tempPath.getTotalLength();
		return { path, totalLength, segments };
	}

	function handleTocClick(event: MouseEvent, id: string) {
		event.preventDefault();
		const element = document.getElementById(id);
		const scroller = document.getElementById('page-content');
		if (element && scroller) {
			isClickScrolling = true;
			clearTimeout(clickScrollTimeout);

			const elementRect = element.getBoundingClientRect();
			const scrollerRect = scroller.getBoundingClientRect();

			const targetScrollTop = elementRect.top - scrollerRect.top + scroller.scrollTop - 80;

			scroller.scrollTo({
				top: targetScrollTop,
				behavior: 'smooth',
			});
			history.pushState(null, '', `#${id}`);
			visibleIds = [id];
			lastActiveId = id;

			clickScrollTimeout = setTimeout(() => {
				isClickScrolling = false;
			}, 1000);
		}
	}

	let lightStartOffset = 0;
	let lightLength = 0;

	$: {
		const finalVisibleIds = Array.from(new Set([...visibleIds, lastActiveId].filter(Boolean)));
		if (finalVisibleIds.length > 0 && segmentData.length > 0) {
			const visibleTocIndices = headings
				.map((h, i) => ({ ...h, index: i }))
				.filter((item) => finalVisibleIds.includes(item.id))
				.map((item) => item.index);

			if (visibleTocIndices.length > 0) {
				const firstVisibleIndex = Math.min(...visibleTocIndices);
				const lastVisibleIndex = Math.max(...visibleTocIndices);

				lightStartOffset = segmentData[firstVisibleIndex].start;
				const endOffset = segmentData[lastVisibleIndex].end;
				lightLength = endOffset - lightStartOffset;
			} else {
				lightLength = 0;
			}
		} else {
			lightLength = 0;
		}
	}
</script>

<aside class="toc-sidebar">
	<nav aria-label="Table of Contents">
		<h3 class="toc-title">On this page</h3>
		<ul class="relative">
			<svg class="progress-svg">
				<path d={trackPathData} class="toc-progress-track"></path>
				<path
					d={trackPathData}
					class="toc-progress-light"
					style:stroke-dasharray="{lightLength}
					{trackPathLength}"
					style:stroke-dashoffset="-{lightStartOffset}"
				></path>
			</svg>
			{#each headings as heading}
				<li class="level-{heading.level}" id="toc-{heading.id}" data-level={heading.level}>
					<a
						href="#{heading.id}"
						class:active={visibleIds.includes(heading.id) || lastActiveId === heading.id}
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
		top: 80px;
		height: fit-content;
		max-height: calc(100vh - 100px);
		overflow-y: auto;
		width: 100%;
		z-index: 30;
	}

	.toc-title {
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: var(--color-foreground);
		padding-left: 2rem;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		position: relative;
	}

	li {
		margin-bottom: 0.5rem;
		padding-left: 2rem;
	}

	a {
		color: var(--color-muted-foreground);
		text-decoration: none;
		transition: color 0.3s ease-in-out;
		display: block;
		font-size: 0.84rem;
	}

	a:hover {
		color: var(--color-foreground);
	}

	a.active {
		color: var(--color-accent-foreground);
		font-weight: 500;
	}

	.level-3 {
		padding-left: 3rem;
	}

	.progress-svg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: visible;
		pointer-events: none;
	}

	.toc-progress-track {
		stroke: var(--color-muted-foreground);
		stroke-width: 2px;
		fill: none;
	}

	.toc-progress-light {
		stroke: var(--color-accent-foreground);
		stroke-width: 4px;
		fill: none;
		transition:
			stroke-dashoffset 0.3s ease-in-out,
			stroke-dasharray 0.3s ease-in-out;
	}
</style>
