<script lang="ts">
	const experiences = [
		{
			company: 'Amazon',
			date: 'August 2025 - Present',
			title: 'Software Development Engineer',
			content:`
				Building 🚀
			`
		},
		{
			company: 'PMG',
			date: 'June - July 2025',
			title: 'AI Software Engineer',
			content: `
				<p>Graduate Leadership Program | Architecting AI Agentic Systems</p>
				<ul class="list-disc pl-5 mt-2 space-y-1">
					<li>Developed an AI-driven solution for rapid audience and media reception analysis, eliminating the high cost and delays of traditional focus groups</li>
					<li>Developed client insights agent surfacing client-specific analytics, reducing reporting time by 60% across 50+ analysts</li>
					<li>Identified key limitations in analyst workflows and engineered AI-driven solutions to directly address them</li>
			`
		},
		{
			company: 'Allergan Data Labs',
			date: 'September 2024 - May 2025',
			title: 'Software Engineer I',
			content: `
				<ul class="list-disc pl-5 mt-2 space-y-1">
					<li>Developed and maintained core backend components for a large-scale rewards platform, consistently applying modern design patterns and best practices</li>
					<li>Translated direct customer feedback into actionable engineering requirements, developing new features and refining core business logic with a strong focus on the end-user experience</li>
					<li>Contributed to the development of microservices in TypeScript and Go, implementing optimizations that reduced service latency and improved system reliability</li>
			`
		},
		{
			company: 'Oracle',
			date: 'June 2024 - September 2024',
			title: 'Machine Learning Engineer Intern',
			content: `
				<ul class="list-disc pl-5 mt-2 space-y-1">
					<li>Researched fraudulent transactions detection ML models that use Graph Neural Network, graph2vec, PyG, and NetworkX</li>
					<li>Designed and deployed OCI Environment & Autonomous Database for ML model training data management</li>
					<li>Performed exploratory data analysis (EDA) and feature engineering on ADS-B data, training an ML model to predict flight ETAs</li>
					<li>Implemented an LLM to streamline ticket resolution processes for both internal operations and client-facing applications</li>
			`
		},

		{
			company: 'Allergan Data Labs',
			date: 'May 2024 - August 2024',
			title: 'Software Engineer Intern',
			content: `
				<ul class="list-disc pl-5 mt-2 space-y-1">
					<li>Created Total Rewards Reminder email campaign reaching 6.5M+ users and increasing platform engagement by 22%</li>
					<li>Crafted responsive email templates achieving 99.8% delivery rate through cross-platform compatibility testing</li>
					<li>Constructed Datadog monitoring dashboards for tracking email metrics and enabling proactive issue resolution</li>
			`
		},
		{
			company: 'NitesOut',
			date: 'November 2023 - May 2025',
			title: 'Software Engineer',
			content: `
				<ul class="list-disc pl-5 mt-2 space-y-1">
					<li>Built React Native ticketing app that eliminated service fees, reducing prices by 27% and increasing adoption by 40%</li>
					<li>Designed intuitive UI/UX and implemented secure payment processing API handling $50K+ in monthly transactions</li>
					<li>Automated event alerts through Firebase Cloud Messaging, boosting attendance rates by 18%</li>
			`
		},
		{
			company: 'Airweb Digital',
			date: 'November 2023 - May 2024',
			title: 'Machine Learning Engineer Intern',
			content: `
				<ul class="list-disc pl-5 mt-2 space-y-1">
					<li>Engineered AI-based Traffic Analysis pipeline with OpenCV and PyTorch, processing 100+ hours of footage</li>
					<li>Formulated a visibility ranking model to optimize ad placement, enhancing workflow efficiency by 90%</li>
					<li>Presented technical findings to CEO and partners, translating complex ML concepts into actionable business insights</li>
			`
		},
		{
			company: 'Cornell Tech(Break Through Tech)',
			date: 'December 2023 - March 2024',
			title: 'Software Engineer',
			content: `
				<ul class="list-disc pl-5 mt-2 space-y-1">
					<li>Launched SussanahAI web app leveraging Cohere API for sentiment analysis, spam filtering, and text summarization</li>
					<li>Integrated Flask backend handling 500+ requests per minute while maintaining sub-200ms response times</li>
					<li>Designed interactive frontend using React and Tailwind CSS, resulting in 95% positive user feedback on UI/UX</li>
					<li>Collaborated with Microsoft engineer mentor to establish best practices in code architecture and documentation</li>
			`
		},
		{
			company: 'Miles IT',
			date: 'May 2023 - August 2023',
			title: 'Software Engineer Intern',
			content: `
				<ul class="list-disc pl-5 mt-2 space-y-1">
					<li>Deployed a client management system using Spring Boot and React, improving client interactions efficiency by 30%</li>
					<li>Authored documentation and training materials for new system, enabling 100% adoption rate across 25+ team members</li>
					<li>Earned certification after completing 30 hours of training in Desktop, Networks, Servers, and Cloud Service Technologies</li>
			`
		},
		{
			company: 'UMD FIRE',
			date: 'August 2022 - August 2023',
			title: 'Genome Computing Project Manager and Lead Researcher',
			content: `
				<ul class="list-disc pl-5 mt-2 space-y-1">
					<li>Led research team analyzing DNA configurations using Python and R, improving analysis performance/accuracy by 25%</li>
					<li>Optimized genomic data processing workflows leveraging C++ and parallel computing, reducing execution time by 65%</li>
			`
		},
		{
			company: 'FIRST',
			date: 'September 2023 - Present',
			title: 'Software Engineering and Robotics Mentor',
			content: `
				<p>| FIRST LEGO League (FLL)</p>
				<ul class="list-disc pl-5 mt-2 space-y-1">
					<li>Led a team to successfully advance through regional qualifiers to the state-level championship</li>
					<li>Provided comprehensive mentorship across all competition categories, including robot design, programming, project management, and presentation skills</li>
					<li>Fostered critical skills in leadership and collaborative problem-solving, championing the FIRST Core Values of innovation, inclusion, and Gracious Professionalism®</li>
			`
		}

	];

	const educations = [
		{
			university: 'University of Maryland, College Park',
			date: 'August 2022 - May 2025',
			degree: 'Bachelor of Science in Computer Science - Machine Learning',
			details: [
				'Minor: Entrepreneurial Leadership (Robert H. Smith School of Business)',
				'Key Coursework: Artificial Intelligence, Machine Learning, Computer Vision, Natural Language Processing, Compilers, Organization of Programming Languages, Parallel Computing, Data Science, Applied Probability and Statistics',
				'Core Fundamentals: Object-Oriented Programming, Data Structures, Algorithms, Computer Systems',
				'Key Minor Classes: Entrepreneurial Finance, Entrepreneurial Thinking, Growth Strategies',
				'Extracurriculars: BigTh!nk AI and Google Developer Student Club',
				'Awards: Dean’s List (2022-2025)'
			]
		},
		{
			university: 'Robbinsville High School',
			date: 'September 2018 - June 2022',
			degree: 'High School Diploma',
			details: [
				'GPA: 4.3/4.0',
				'Awards: AP Scholar with Distinction, Honor Roll all years'
			]
		}
	];
</script>

<div class="container mx-auto lg:max-w-4xl py-12">
	<h1 class="mb-8 text-4xl font-bold">Experience & Education</h1>

	<section>
		<h2 class="mb-6 border-b pb-2 text-3xl font-bold">Work Experience</h2>
		<div class="space-y-8">
			{#each experiences as exp}
				<div>
					<h3 class="text-xl font-semibold">{exp.title}</h3>
					<div class="flex flex-col md:flex-row md:items-baseline md:justify-between">
						<h4 class="font-medium font-semibold text-muted-foreground">{exp.company}</h4>
						<p class="font-medium text-muted-foreground md:ml-4">{exp.date}</p>
					</div>
					<p class="mt-2 text-base leading-relaxed">{@html exp.content}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="mt-12">
		<h2 class="mb-6 border-b pb-2 text-3xl font-bold">Education</h2>
		<div class="space-y-8">
			{#each educations as edu}
				<div>
					<div class="flex items-baseline justify-between">
						<h3 class="text-xl font-semibold">{edu.degree}</h3>
						<p class="text-sm text-muted-foreground">{edu.date}</p>
					</div>
					<h4 class="font-medium text-muted-foreground">{edu.university}</h4>
					<ul class="mt-2 list-disc pl-5 text-base">
						{#each edu.details as detail}
							<li>{detail}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</section>
</div>
