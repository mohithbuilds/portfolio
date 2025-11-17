<script lang="ts">
	import { cn } from '@/lib/utils';
	import {
		siCplusplus,
		siDocker,
		siGit,
		siGo,
		siIterm2,
		siOpenjdk,
		siKotlin,
		siNextdotjs,
		siNvidia,
		siPostgresql,
		siPython,
		siPytorch,
		siReact,
		siRust,
		siShadcnui,
		siSwift,
		siTerraform,
		siTypescript,
	} from 'simple-icons';

	type Technology = {
		name: string;
		url: string;
		icon: {
			path: string;
			title: string;
		};
		filler?: boolean;
	};

	const technologies: Technology[] = [
		{
			name: 'Python',
			url: 'https://www.python.org/',
			icon: siPython,
		},
		{
			name: 'C++',
			url: 'https://cplusplus.com/',
			icon: siCplusplus,
		},
		{
			name: 'Go',
			url: 'https://go.dev/',
			icon: siGo,
		},
		{
			name: 'Java',
			url: 'https://openjdk.org/',
			icon: siOpenjdk,
		},
		{
			name: 'Kotlin',
			url: 'https://kotlinlang.org/',
			icon: siKotlin,
		},
		{
			name: 'Rust',
			url: 'https://rust-lang.org/',
			icon: siRust,
		},
		{
			name: 'TypeScript',
			url: 'https://typescriptlang.org',
			icon: siTypescript,
		},
		{
			name: 'Swift',
			url: 'https://www.swift.org/',
			icon: siSwift,
		},
		{
			name: 'React',
			url: 'https://react.dev',
			icon: siReact,
		},
		{
			name: 'Next.js',
			url: 'https://nextjs.org',
			icon: siNextdotjs,
		},
		{
			name: 'PostgreSQL',
			url: 'https://postgresql.org',
			icon: siPostgresql,
		},
		{
			name: 'Docker',
			url: 'https://docker.com',
			icon: siDocker,
		},
		{
			name: "Terraform",
			url: 'https://developer.hashicorp.com/terraform',
			icon: siTerraform,
		},
		{
			name: 'PyTorch',
			url: 'https://pytorch.org/',
			icon: siPytorch,
		},
		{
			name: 'CUDA',
			url: 'https://developer.nvidia.com/cuda-toolkit',
			icon: siNvidia,
		},
		{
			name: 'Git',
			url: '',
			icon: siGit,
		},
		{
			name: 'Shell Scripting',
			url: '',
			icon: siIterm2,
			filler: true,
		},
	];
</script>

<div class="grid grid-cols-3 place-items-center gap-4 pt-4 sm:grid-cols-3 sm:gap-8 md:grid-cols-4 xl:grid-cols-8">
	{#each technologies as tech}
		<div
			class={cn(
				'bg-accent-foreground/10 flex aspect-square w-20 flex-col items-center justify-center gap-2 rounded-md backdrop-blur-xs transition-transform hover:scale-110 sm:w-32',
				tech.filler && 'sm:hidden'
			)}
		>
			<svg role="img" viewBox="0 0 24 24" class="size-8 fill-current transition-colors sm:size-12"
				><title>{tech.icon.title}</title><path d={tech.icon.path} /></svg
			>
			<span class="text-center text-sm font-medium">
				{tech.name}
			</span>
		</div>
	{/each}
</div>
