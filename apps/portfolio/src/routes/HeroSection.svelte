<script lang="ts">
	import AnimatedCounter from './AnimatedCounter.svelte';

	import BskyAnimated from '@/components/icons/BskyAnimated.svelte';
	import GitHubIconAnimated from '@/components/icons/GitHubIconAnimated.svelte';
	import LinkedInAnimated from '@/components/icons/LinkedInIconAnimated.svelte';
	import { MapPin } from '@lucide/svelte';
	import posthog from 'posthog-js';

	let { initialLikes }: { initialLikes: number } = $props();
</script>

<div class="sticky top-12 mx-auto h-full w-full max-w-7xl sm:top-16">
	<div
		class="relative flex min-h-[calc(100dvh-5rem)] w-full flex-col sm:min-h-[calc(100dvh-8rem)] sm:justify-center sm:py-8"
	>
		<div class="hero-text flex flex-col gap-8 sm:text-justify">
			<div>
				<h1
					class="flex items-end gap-2 text-pretty break-words text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl"
				>
					Hi, I'm Mohith!
				</h1>
				<span class="flex items-center gap-1 text-pretty text-sm font-normal mt-2">
					<MapPin size={12} />
					Seattle
				</span>
			</div>



			<h2 class="text-pretty prose sm:text-lg lg:text-xl">
				I build <strong>scalable, reliable, and data-intensive</strong> systems, including backend services, APIs, and data pipelines, optimized for <strong>high throughput, low latency</strong>, and real-world impact.
			</h2>
			<!-- TODO: idea - make the text crumble or some other effect when the gradient comes over the text -->
			<p class="prose sm:text-lg">
				I code with purpose, crafting efficient, clean, and maintainable solutions that respect strong design principles and deliver measurable value.
				My work focuses on building systems that are fault-tolerant, high-performing, and resilient, helping organizations solve complex technical and business challenges through thoughtful design and precise implementation.
			</p>


			<div class="flex flex-col gap-3">
				<AnimatedCounter {initialLikes} slug="/" />

				<div class="flex items-center gap-3">
					<a
						href="https://github.com/mohithbuilds"
						target="_blank"
						class="transition-transform hover:scale-110"
						onclick={() => posthog.capture('social_link_click', { target: 'github', location: 'hero' })}
					>
						<span class="sr-only">GitHub</span>
						<GitHubIconAnimated size={2.5} />
					</a>
					<a
						href="https://www.linkedin.com/in/mohith-n/"
						target="_blank"
						class="transition-transform hover:scale-110"
						onclick={() => posthog.capture('social_link_click', { target: 'linkedin', location: 'hero' })}
					>
						<span class="sr-only">LinkedIn</span>
						<LinkedInAnimated size={2.5} />
					</a>
					<a
						href="mailto:mohith.n2022@gmail.com"
						target="_blank"
						class="transition-transform hover:scale-110"
						onclick={() => posthog.capture('social_link_click', { target: 'bsky', location: 'hero' })}
					>
						<span class="sr-only">BSky</span>
						<BskyAnimated size={2.3} />
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.hero-text {
		opacity: 1;
		transition: opacity 1s 1s ease-in-out;
	}

	@starting-style {
		:global([data-firstVisit='true'] .hero-text) {
			opacity: 0;
		}
	}
</style>
