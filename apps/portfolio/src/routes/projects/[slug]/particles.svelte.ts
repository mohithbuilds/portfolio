type Position = { x: number; y: number };
type Velocity = { x: number; y: number };

const GRAVITY = 0.1;
const FADE_RATE = 0.005;
const INITIAL_SCALE = 0.5;
const DEFAULT_SPEED = 1;

type ParticlesOptions = {
	count?: number;
	speed?: number;
	gravity?: number;
	fadeRate?: number;
	initialScale?: number;
};

class Particle {
	private static nextId = 0;
	readonly id = Particle.nextId++;
	position = $state<Position>({ x: 0, y: 0 });
	velocity = $state<Velocity>({ x: 0, y: 0 });
	opacity = $state(1);
	scale = $state(INITIAL_SCALE + Math.random() * INITIAL_SCALE);
	fadeRate: number;
	initialScale: number;
	gravity: number;

	constructor(position: Position, options: ParticlesOptions) {
		this.position = position;
		this.velocity = {
			x: (Math.random() - 0.5) * 4 * (options.speed ?? DEFAULT_SPEED),
			y: (-Math.random() * 4 - 2) * (options.speed ?? DEFAULT_SPEED),
		};
		this.fadeRate = options.fadeRate ?? FADE_RATE;
		this.gravity = options.gravity ?? GRAVITY;
		this.initialScale = options.initialScale ?? INITIAL_SCALE;
	}

	update(speed = DEFAULT_SPEED) {
		this.position.x += this.velocity.x * speed;
		this.position.y += this.velocity.y * speed;
		this.velocity.y += this.gravity * speed;
		this.opacity -= this.fadeRate * speed;
		return this.opacity > 0;
	}
}

export class Particles {
	private particles = $state<Particle[]>([]);
	private count = $state(8);
	private speed = $state(DEFAULT_SPEED);
	private animationFrame: number | null = null;

	constructor(options: ParticlesOptions = {}) {
		this.count = options.count ?? 8;
		this.speed = options.speed ?? DEFAULT_SPEED;
	}

	private updateParticles() {
		this.particles = this.particles.filter((p) => p.update(this.speed));

		if (this.particles.length > 0) {
			this.animationFrame = requestAnimationFrame(() => this.updateParticles());
		} else {
			this.animationFrame = null;
		}
	}

	private getPosition(target: HTMLElement | SVGSVGElement) {
		const rect = target.getBoundingClientRect();
		return {
			x: rect.left + rect.width / 2,
			y: rect.top + rect.height / 2,
		};
	}

	trigger(target: HTMLElement | SVGSVGElement, multiplier = 1) {
		const position = this.getPosition(target);

		const newParticles = Array.from(
			{ length: this.count * multiplier },
			() => new Particle(position, { speed: this.speed })
		);

		this.particles.push(...newParticles);

		if (!this.animationFrame) {
			this.updateParticles();
		}
	}

	async triggerWinner(target: HTMLElement | SVGSVGElement) {
		const position = this.getPosition(target);

		const totalParticles = this.count * 10;
		const batchSize = 4;
		const delayBetweenBatches = 100;

		for (let i = 0; i < totalParticles; i += batchSize) {
			const newParticles = Array.from(
				{ length: Math.min(batchSize, totalParticles - i) },
				() => new Particle(position, { speed: this.speed * 2, gravity: 0.1 })
			);

			this.particles.push(...newParticles);

			if (!this.animationFrame) {
				this.updateParticles();
			}

			await new Promise((resolve) => setTimeout(resolve, delayBetweenBatches));
		}
	}

	getParticles() {
		return this.particles;
	}

	cleanup() {
		if (this.animationFrame) {
			cancelAnimationFrame(this.animationFrame);
			this.animationFrame = null;
		}
		this.particles = [];
	}
}
