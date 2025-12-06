<script lang="ts">
	import { cn } from '@/lib/utils/cn';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		onclick?: () => void;
		class?: string;
	};

	const { children, class: className, onclick }: Props = $props();
</script>

<button
	class={cn(
		'bg-foreground/20 hover:bg-foreground/30 border-opacity-10 hover:border-opacity-50 flex h-fit w-fit items-center justify-center gap-2 rounded-sm border px-4 py-2 text-sm transition-colors hover:underline',
		className
	)}
	{onclick}
>
	{@render children()}
</button>
