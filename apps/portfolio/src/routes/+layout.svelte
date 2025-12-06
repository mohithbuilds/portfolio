<script lang="ts">
	import { browser } from '$app/environment';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import '@/app.css';
	import Analytics from '@/components/Analytics.svelte';
	import Navbar from '@/components/Navbar.svelte';
	import SEO from '@/components/SEO.svelte';
	import Socials from '@/components/Socials.svelte';
	import posthog from 'posthog-js';
	import type { Snippet } from 'svelte';
	import { Toaster } from 'svelte-sonner';
	import type { LayoutServerData } from './$types';
	import Border from './Border.svelte';
	import PageTransition from './PageTransition.svelte';

	if (browser) {
		beforeNavigate(() => posthog.capture('$pageleave'));
		afterNavigate(() => {
			posthog.capture('$pageview');
			const scroller = document.getElementById('page-content');
			if (scroller) {
				scroller.scrollTop = 0;
			} else {
				// Fallback: scroll window and document root to top
				window.scrollTo(0, 0);
				document.documentElement.scrollTop = 0;
			}
		});
	}

	type Props = {
		children: Snippet;
		data: LayoutServerData;
	};
	const { children, data }: Props = $props();
</script>

<Analytics />
<SEO {...data.SEO} />
<Socials />
<PageTransition />
<div class="relative overflow-hidden">
	<Border>
		<main class="no-scrollbar relative flex flex-col p-10 sm:p-16">
			<Navbar />
			{@render children()}
		</main>
	</Border>
	<Toaster />
</div>
