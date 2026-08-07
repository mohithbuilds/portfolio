<script lang="ts">
	import { Calendar, Clock, Video, ArrowUpRight, Sparkles } from 'lucide-svelte';
	import posthog from 'posthog-js';

	type Props = {
		class?: string;
	};

	let { class: className = '' }: Props = $props();

	const BOOKING_URL = 'https://calendar.notion.so/meet/mohithnagendra/sr5hw4yfd';

	function handleBookingClick() {
		posthog.capture('meeting_booking_click', {
			url: BOOKING_URL,
			location: 'booking_section'
		});
	}
</script>

<div class={`rounded-xl border border-foreground/15 bg-card/60 p-6 backdrop-blur-sm sm:p-8 ${className}`}>
	<div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
		<div class="space-y-3 lg:max-w-xl">
			<div class="inline-flex items-center gap-2 rounded-full border border-accent-foreground/30 bg-accent-foreground/10 px-3 py-1 text-xs font-medium text-accent-foreground">
				<Sparkles size={13} />
				<span>Available for Meetings</span>
			</div>
			
			<h3 class="text-2xl font-bold tracking-tight sm:text-3xl">Book a 1-on-1 Session</h3>
			
			<p class="text-muted-foreground text-sm leading-relaxed sm:text-base">
				Pick a time on my Notion Calendar that works best for you. Whether you'd like to discuss system design, potential collaborations, backend engineering, or just connect!
			</p>

			<div class="flex flex-wrap items-center gap-4 pt-2 text-xs font-medium text-muted-foreground sm:text-sm">
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

		<div class="flex flex-col sm:flex-row lg:flex-col items-stretch justify-center gap-3 shrink-0">
			<a
				href={BOOKING_URL}
				target="_blank"
				rel="noopener noreferrer"
				onclick={handleBookingClick}
				class="inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-md"
			>
				<Calendar size={18} />
				<span>Schedule a Meeting</span>
				<ArrowUpRight size={18} />
			</a>
			
			<span class="text-center text-xs text-muted-foreground">
				Powered by Notion Calendar
			</span>
		</div>
	</div>
</div>
