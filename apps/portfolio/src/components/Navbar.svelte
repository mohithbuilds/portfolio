<script lang="ts">
	import {
		Sheet,
		SheetContent,
		SheetTrigger,
	} from '$lib/components/ui/sheet';
	import { page } from '$app/stores';
	import { Menu } from 'lucide-svelte';
	let open = false;

    $: navClasses = `flex justify-start md:justify-center ${$page.url.pathname === '/' ? 'pb-8' : 'pb-0'} md:pb-0`;
</script>

<nav class="{navClasses}">
	<div class="md:hidden">
		<Sheet bind:open={open}>
			<SheetTrigger class="flex items-center gap-1">
				<Menu />
				<span>Menu</span>
			</SheetTrigger>
			<SheetContent side="left" class="w-[210px]">
				<ul class="flex flex-col items-start space-y-4 p-4">
					<li><a href="/" class:active={$page.url.pathname === '/'} on:click={() => (open = false)}>Home</a></li>
					<li>
						<a href="/about/mohithnagendra" class:active={$page.url.pathname === '/about/mohithnagendra'} on:click={() => (open = false)}
							>About</a
						>
					</li>
					<li>
						<a href="/blog" class:active={$page.url.pathname.startsWith('/blog')} on:click={() => (open = false)}>Blog</a>
					</li>
					<li>
						<a href="/projects" class:active={$page.url.pathname.startsWith('/projects')} on:click={() => (open = false)}>Projects</a>
					</li>
					<li>
						<a href="/#contact" class:active={$page.url.hash === '#contact'} on:click={() => (open = false)}>Contact</a>
					</li>
				</ul>
			</SheetContent>
		</Sheet>
	</div>
	<ul class="hidden items-center space-x-4 md:flex">
		<li><a href="/" class:active={$page.url.pathname === '/'}>Home</a></li>
		<li>
			<a href="/about/mohithnagendra" class:active={$page.url.pathname === '/about/mohithnagendra'}
				>About</a
			>
		</li>
		<li>
			<a href="/blog" class:active={$page.url.pathname.startsWith('/blog')}>Blog</a>
		</li>
		<li>
			<a href="/projects" class:active={$page.url.pathname.startsWith('/projects')}>Projects</a>
		</li>
		<li>
			<a href="/#contact" class:active={$page.url.hash === '#contact'}>Contact</a>
		</li>
	</ul>
</nav>
<div class="h-px bg-muted-foreground mt-2 mx-auto w-80 hidden md:block"></div>

<style>
	.active {
		font-weight: bold;
	}
</style>
