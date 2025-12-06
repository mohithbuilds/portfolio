<script>
	import Divider from '@/components/Divider.svelte';
	import GitHubIconAnimated from '@/components/icons/GitHubIconAnimated.svelte';
	import LinkedInAnimated from '@/components/icons/LinkedInIconAnimated.svelte';
	import BskyAnimated from '@/components/icons/BskyAnimated.svelte';
	import { HeartIcon } from '@lucide/svelte';
	import posthog from 'posthog-js';
	import { scrollToTop } from '@/lib/utils';
</script>

<Divider class="my-0 sm:my-0" />
<footer class="flex w-full flex-col items-center justify-center gap-4 py-12 text-sm">
	<div class="flex items-center justify-center gap-2">
		<a
			href="https://www.linkedin.com/in/mohith-n/"
			target="_blank"
			onclick={() => posthog.capture('social_link_click', { target: 'linkedin', location: 'footer' })}
		>
			<span class="sr-only"> LinkedIn </span>
			<LinkedInAnimated />
		</a>
		<a
			href="https://github.com/mohithbuilds"
			target="_blank"
			onclick={() => posthog.capture('social_link_click', { target: 'github', location: 'footer' })}
		>
			<span class="sr-only"> GitHub </span>
			<GitHubIconAnimated size={4.5} />
		</a>
		<a
			href="mailto:mohith.n2022@gmail.com"
			target="_blank"
			class="transition-transform hover:scale-110"
			onclick={() => posthog.capture('social_link_click', { target: 'bsky', location: 'footer' })}
		>
			<span class="sr-only">BSky</span>
			<BskyAnimated size={2.3} />
		</a>
	</div>
	<div class="mb-8 flex items-center justify-center gap-2">
		<a class="w-16 text-right hover:underline" href="/about/mohithnagendra" onclick={scrollToTop}>About</a>
		<a class="text-center text-base hover:underline" href="/" onclick={scrollToTop}>Home</a>
		<a class="w-16 text-left hover:underline" href="/blog" onclick={scrollToTop}>Blog</a>
	</div>

	<p class="text-center">
		Made with <HeartIcon class="fill-foreground inline size-4 -translate-y-px" /> by Mohith Nagendra
	</p>
</footer>
