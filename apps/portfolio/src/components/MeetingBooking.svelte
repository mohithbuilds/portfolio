<script lang="ts">
	import { Calendar, Clock, Video, ArrowUpRight, Sparkles } from 'lucide-svelte';
	import posthog from 'posthog-js';
	import { MEETING_BOOKING_URL } from '$lib/config';

	type Props = {
		class?: string;
	};

	let { class: className = '' }: Props = $props();

	function handleBookingClick() {
		posthog.capture('meeting_booking_click', {
			url: MEETING_BOOKING_URL,
			location: 'booking_section',
		});
	}
</script>

<div class={`border-foreground/15 bg-card/60 rounded-xl border p-6 backdrop-blur-sm sm:p-8 ${className}`}>
	<div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
		<div class="space-y-3 lg:max-w-xl">
			<div
				class="border-accent-foreground/30 bg-accent-foreground/10 text-accent-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium"
			>
				<Sparkles size={13} />
				<span>Available for Meetings</span>
			</div>

			<h3 class="text-2xl font-bold tracking-tight sm:text-3xl">Book a 1-on-1 Session</h3>

			<p class="text-muted-foreground text-sm leading-relaxed sm:text-base">
				Pick a time on my Notion Calendar that works best for you. Whether you'd like to discuss system design,
				potential collaborations, backend engineering, or just connect!
			</p>

			<div class="text-muted-foreground flex flex-wrap items-center gap-4 pt-2 text-xs font-medium sm:text-sm">
				<div class="flex items-center gap-1.5">
					<Clock size={15} class="text-accent-foreground" />
					<span>30 Minutes</span>
				</div>
				<div class="flex items-center gap-1.5">
					<Video size={15} class="text-accent-foreground" />
					<span>Video Call</span>
				</div>
				<div class="flex items-center gap-1.5">
					<Calendar size={15} class="text-accent-foreground" />
					<span>Instant Confirmation</span>
				</div>
			</div>
		</div>

		<div class="flex shrink-0 flex-col items-stretch justify-center gap-3 sm:flex-row lg:flex-col">
			<a
				href={MEETING_BOOKING_URL}
				target="_blank"
				rel="noopener noreferrer"
				onclick={handleBookingClick}
				class="bg-foreground text-background inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold shadow-md transition-all hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
			>
				<Calendar size={18} />
				<span>Schedule a Meeting</span>
				<ArrowUpRight size={18} />
			</a>

			<span class="text-muted-foreground text-center text-xs"> Powered by Notion Calendar </span>
		</div>
	</div>
</div>
