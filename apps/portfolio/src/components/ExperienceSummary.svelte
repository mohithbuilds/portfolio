<script lang="ts">
	import LinkButton from './LinkButton.svelte';

	const experience = {
		company: 'Amazon',
		title: 'Software Development Engineer',
		dates: 'August 2025 - Present',
	};

	const education = {
		institution: 'University of Maryland, College Park',
		degree: 'B.S. in Computer Science - Machine Learning & AI',
		dates: 'August 2022 - May 2025',
	};
</script>

<div class="space-y-4">
	<div class="rounded-lg border p-4">
		<h3 class="font-bold">{experience.title}</h3>
		<p class="text-muted-foreground">{experience.company}</p>
		<p class="text-muted-foreground text-sm">{experience.dates}</p>
	</div>
	<div class="rounded-lg border p-4">
		<h3 class="font-bold">{education.degree}</h3>
		<p class="text-muted-foreground">{education.institution}</p>
		<p class="text-muted-foreground text-sm">{education.dates}</p>
	</div>
	<div class="mt-4">
		<LinkButton href="/experience">View All Experience & Education</LinkButton>
	</div>
</div>
