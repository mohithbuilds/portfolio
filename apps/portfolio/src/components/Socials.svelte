<script lang="ts">
	import { page } from '$app/state';

	// Don't render default OG tags for blog posts since they have their own
	// Use URL path instead of route ID for more reliable detection
	let isBlogPost = $derived(page.url.pathname.startsWith('/blog/') && page.url.pathname !== '/blog');
</script>

{#if !isBlogPost}
	<meta property="og:site_name" content="Mohith Nagendra" />
	<meta property="og:url" content="https://mohithn.vercel.app" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Mohith Nagendra - Full-stack developer" />
	<meta property="og:image" content="https://mohithn.vercel.app/images/og-mohith-nagendra.jpg" />
	<meta
		property="og:description"
		content="Portfolio of Mohith Nagendra, a software engineer specializing in large-scale systems and Artificial Intelligence."
	/>
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@mohithn04" />
	<meta name="twitter:creator" content="@mohithn04" />
	<meta name="twitter:title" content="Mohith Nagendra - Full-stack developer" />
	<meta
		name="twitter:description"
		content="Portfolio of Mohith Nagendra, a software engineer specializing in large-scale systems and Artificial Intelligence."
	/>
	<meta name="twitter:image" content="https://mohithn.vercel.app/images/og-mohith-nagendra.jpg" />
{/if}
