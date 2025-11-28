<script lang="ts">
	import type { Infer, SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms';
	import { toast } from 'svelte-sonner';
	import { fade } from 'svelte/transition';
	import type { ResumeAccessForm } from '$lib/schema/resumeAccessSchema';
	import CustomToast from '@/components/CustomToast.svelte';
	import Input from '@/components/Input.svelte';
    import Button from '@/components/Button.svelte';
    import TextArea from '@/components/TextArea.svelte';

	let { data }: { data: { form: SuperValidated<Infer<ResumeAccessForm>> } } = $props();

    let formSubmitted = $state(false);

	const { form: formData, enhance, errors, submitting, form } = superForm(data.form, {
		onResult: ({ result }) => {
			if (result.status === 200) {
				toast.custom(CustomToast, {
					componentProps: {
						title: 'Success!',
						message: 'You can now view the resume.',
					},
				});
                formSubmitted = true;
			} else if (result.status === 500) {
				toast.custom(CustomToast, {
					componentProps: {
						title: 'Error',
						message: 'Failed to send email, please try again later.',
						error: true,
					},
				});
			}
		},
	});
</script>

{#if formSubmitted}
    <div class="w-full h-full" transition:fade>
        <iframe src="/Mohith_Engineering_Resume.pdf" class="w-full h-screen" title="Mohith's Resume"></iframe>
    </div>
{:else}
    <div class="flex flex-col items-center justify-center min-h-[60vh] gap-4" transition:fade>
        <div class="text-center">
            <h1 class="text-2xl font-bold">Access Resume</h1>
            <p class="text-muted-foreground">Please provide your details to view the resume.</p>
        </div>
        <form id="resume-access" method="POST" use:enhance class="flex max-w-lg flex-col gap-4 w-full p-4">
            <Input
                label="Name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                bind:value={$formData.name}
                bind:error={$errors.name}
            />
            <Input
                label="Company"
                name="company"
                type="text"
                placeholder="Your company"
                required
                bind:value={$formData.company}
                bind:error={$errors.company}
            />

            <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Your email (optional)"
                bind:value={$formData.email}
                bind:error={$errors.email}
            />

            <TextArea
                label="Message"
                name="message"
                placeholder="Your message (optional)"
                rows={3}
                bind:value={$formData.message}
                bind:error={$errors.message}
            />

            <!-- 🍯 honeypot 🤖 -->
            <div class="absolute opacity-0">
                <input type="checkbox" id="botCheck" name="botCheck" tabindex="-1" />
                <label for="botCheck"> I'm not a robot </label>
            </div>

            <button
                type="submit"
                class="bg-background border-muted-foreground focus:border-accent-foreground focus:outline-accent-foreground border p-4 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
                disabled={$submitting}
            >
                {$submitting ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    </div>
{/if}
