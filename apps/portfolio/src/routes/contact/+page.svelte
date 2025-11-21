<script lang="ts">
	import ContactForm from '@/components/ContactForm.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let contactForm = $derived(data.contactForm);
</script>

<div class="mx-auto max-w-7xl w-full">
    <section>
        <h2 class="pb-4 text-3xl font-bold pt-8">Contact</h2>
        <ContactForm {contactForm} />
    </section>
</div>
