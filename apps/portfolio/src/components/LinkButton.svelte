<script lang="ts">
	import { cn } from '@/lib/utils/cn';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		href: string;
		class?: string;
	};

	const { children, href, class: className }: Props = $props();
</script>

<a
	{href}
	class={cn(
		'bg-foreground/20 hover:bg-foreground/30 border-foreground/20 hover:border-opacity-50 flex h-fit w-fit items-center justify-center gap-2 rounded-sm border px-2 py-1 text-xs transition-colors sm:px-4 sm:py-2 sm:text-sm',
		className
	)}
>
	{@render children()}
</a>
