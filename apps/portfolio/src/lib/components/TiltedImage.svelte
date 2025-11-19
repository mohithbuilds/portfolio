<script lang="ts">
	import { onMount } from 'svelte';
	import { spring, type Spring } from 'svelte/motion';

	export let borderColor = 'var(--color-ring)';

	let card: HTMLDivElement;
	let mouseX: Spring<number>;
	let mouseY: Spring<number>;
	let rotateX: Spring<number>;
	let rotateY: Spring<number>;

	const springConfig = {
		stiffness: 0.01,
		damping: 0.1
	};

	mouseX = spring(0, springConfig);
	mouseY = spring(0, springConfig);
	rotateX = spring(0, springConfig);
	rotateY = spring(0, springConfig);

	function handleMouseMove(event: MouseEvent) {
		if (!card) return;
		const { left, top, width, height } = card.getBoundingClientRect();
		const mouseX_in_card = event.clientX - left;
		const mouseY_in_card = event.clientY - top;
		const newRotateX = (mouseY_in_card / height - 0.5) * -45;
		const newRotateY = (mouseX_in_card / width - 0.5) * 45;

		mouseX.set(mouseX_in_card);
		mouseY.set(mouseY_in_card);
		rotateX.set(newRotateX);
		rotateY.set(newRotateY);
	}

	function handleMouseLeave() {
		mouseX.set(0);
		mouseY.set(0);
		rotateX.set(0);
		rotateY.set(0);
	}

	onMount(() => {
		if (card) {
			card.addEventListener('mousemove', handleMouseMove);
			card.addEventListener('mouseleave', handleMouseLeave);
		}

		return () => {
			if (card) {
				card.removeEventListener('mousemove', handleMouseMove);
				card.removeEventListener('mouseleave', handleMouseLeave);
			}
		};
	});
</script>

<div
	class="card-wrapper"
	bind:this="{card}"
	style="--mouseX: {$mouseX}px; --mouseY: {$mouseY}px; --rotateX: {$rotateX}deg; --rotateY: {$rotateY}deg;"
>
	<div class="card" style="border-color: {borderColor};">
		<slot />
	</div>
</div>

<style>
	.card-wrapper {
		perspective: 1000px;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.card {
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		transition: transform 0.1s ease;
		transform: rotateX(var(--rotateX)) rotateY(var(--rotateY));
		position: relative;
		border-radius: 1rem;
		overflow: hidden;
		border: 3px solid;
	}
</style>
