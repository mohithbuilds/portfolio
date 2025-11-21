<script lang="ts">
	import ContactForm from '@/components/ContactForm.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let contactForm = $derived(data.contactForm);
</script>

<div class="mx-auto max-w-[1200px] px-6 pb-12 pt-8 sm:pt-12">
	<header class="mb-8">
		<h1 class="mb-4 text-4xl font-bold">Contact</h1>
	</header>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-16">
		<div>
			<ContactForm {contactForm} />
		</div>
		<div>
			<h2 class="text-3xl font-bold mb-4">Get in Touch</h2>
			<p class="text-muted-foreground mb-4">
				I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me using the form, or through my social media channels.
			</p>
			<p class="text-muted-foreground">
				Let's create something awesome together!
			</p>
		</div>
	</div>
</div>
