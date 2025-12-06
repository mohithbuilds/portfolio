<script lang="ts">
	import TiltedImage from '$lib/components/TiltedImage.svelte';
</script>

<svelte:head>
	<title>About Mohith Nagendra - Systems & Backend Engineer</title>
	<meta
		name="description"
		content="Mohith Nagendra is a Systems and Backend Engineer focused on building scalable, reliable, and data-intensive systems. He combines efficient coding with strong design principles and a continuous improvement mindset."
	/>
</svelte:head>

<section class="container mx-auto max-w-3xl px-4 py-16">
	<header class="mb-12">
		<div class="mb-8 flex flex-col items-center">
			<div class="h-57 w-57">
				<TiltedImage borderColor="var(--color-muted-foreground)">
					<div class="h-full w-full">
						<img
							src="/images/mohith.jpeg"
							alt="Mohith Nagendra"
							class="h-full w-full object-cover"
							width="192"
							height="192"
						/>
					</div>
				</TiltedImage>
			</div>
		</div>
		<h1 class="mb-4 text-center text-4xl font-bold">About Me</h1>
		<p class="text-muted-foreground text-center text-lg font-bold">Mohith Nagendra</p>
		<p class="text-muted-foreground text-center text-lg">Systems & Backend Engineer</p>
	</header>

	<div class="prose prose-lg dark:prose-invert">
		<section>
			<h2>Background</h2>
			<p>
				Hi, I'm Mohith, a Software Development Engineer passionate about building scalable, reliable, and data-intensive
				systems. I earned my B.S. in Computer Science from the University of Maryland, College Park, where I specialized
				in Machine Learning and minored in Entrepreneurial Leadership. My foundation in systems programming and data
				analysis helps me bridge backend engineering with the computational and architectural depth required to design
				performant and highly available systems.
			</p>
			<p>
				I code with purpose, writing efficient and maintainable code guided by strong design principles and a focus on
				real business impact. Guided by a <strong>Day 1 mindset</strong> and the philosophy of <strong>Kaizen</strong>,
				I continuously refine my systems and skills to deliver measurable and long-term impact.
			</p>
		</section>

		<section>
			<h2>Technical Expertise</h2>
			<p>
				My work spans backend development, systems optimization, and large-scale data processing. I focus on building
				architectures capable of handling high throughput and low latency while maintaining reliability and fault
				tolerance. These systems often include robust APIs and scalable data pipelines that transform raw data into
				actionable insights.
			</p>
			<ul>
				<li><strong>Languages:</strong> Java, Kotlin, C/C++, Python, &#123;Java/Type&#125;Script, Rust, Go</li>
				<li>
					<strong>Systems & Frameworks:</strong> MPI, CUDA, AWS, PyTorch, TensorFlow, Pandas, Apache Spark, Kafka, Kubernetes,
					Terraform, Docker, Linux
				</li>
				<li>
					<strong>Computation & Data Engineering:</strong> Real-time analytics, simulation pipelines, model-serving infrastructure
				</li>
				<li><strong>Databases & Storage:</strong> PostgreSQL, DynamoDB, Redis</li>
				<li>
					<strong>Performance & Optimization:</strong> Parallelism, caching strategies, concurrency control, memory efficiency
				</li>
				<li>
					<strong>APIs & Data Pipelines:</strong> Designing RESTful and GraphQL services, streaming pipelines, ETL and data
					processing workflows
				</li>
			</ul>
		</section>

		<section>
			<h2>Engineering Philosophy</h2>
			<p>
				I believe that performance, correctness, and clarity form the foundation of great systems. I enjoy writing code
				that is both efficient and maintainable, while considering design principles, scalability, and reliability.
				Whether optimizing backend services, designing APIs, or building data pipelines, my goal is to create systems
				that are understandable, resilient, and performant.
			</p>
			<ul>
				<li>Designing scalable, high-throughput systems and computation pipelines</li>
				<li>Writing efficient, testable, and maintainable code with real-world impact</li>
				<li>Profiling, benchmarking, and optimizing for performance under load</li>
				<li>Applying design principles to build fault-tolerant and observable architectures</li>
			</ul>
		</section>

		<section>
			<h2>Continuous Growth</h2>
			<p>
				I see software engineering as both a science and a craft that combines algorithmic thinking with thoughtful
				design. I am continuously exploring advancements in systems architecture, performance engineering, and AI
				infrastructure. As technology evolves, I stay focused on what does not change: curiosity, adaptability, and the
				pursuit of technical excellence.
			</p>
		</section>

		<section>
			<h2>Let's Connect</h2>
			<p>
				I am always open to connecting with others who are passionate about engineering, technology, and thoughtful
				system design. Whether it involves backend systems, performance optimization, APIs, data pipelines, or exploring
				new ideas in computing, I enjoy collaborating on projects that combine technical depth with creativity and
				purpose.
			</p>
		</section>
	</div>
</section>
