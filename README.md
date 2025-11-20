# Mohith's Portfolio

Hi!
This is a [TurboRepo](https://turbo.build/) containing my portfolio website. It contains the 'portfolio' app, which is a SvelteKit project. The website uses markdown files for content management instead of a traditional CMS.

## Getting started

This projects is using [pnpm](https://pnpm.io/) as the package manager and [turbo](https://turbo.build/cli) as the build system. If you don't have pnpm installed, you can install it by running:

```zsh
npm install -g pnpm
```

If you don't have turbo installed, you can install it by running:

```zsh
npm install -g turbo
```

It is needed for the monorepo setup to work properly.

To get started, clone the repository and install the dependencies:

```zsh
gh repo clone mohithbuilds/portfolio
```

```zsh
cd portfolio
```

```zsh
pnpm install
```

### Setting up environment variables

Copy the `.env.example` file to a new file called `.env`:

```zsh
cp .env.example .env
```

create a symbolic link to the `.env` file in the app package if needed.

Content is now stored in markdown files in:
- `/apps/portfolio/src/posts/` - Blog posts
- `/apps/portfolio/src/projects/` - Project pages

Fill in the environment variables in the `.env` file based on the `.env.example` file.

I use Turso as a quick and easy sqlite database for the app, you can sign up for free at [turso.dev](https://turso.dev) and get your API key. The `TURSO_AUTH_TOKEN` is the API key you get from Turso.

## Running the project

Simply run the following command to start the SvelteKit dev server:

```zsh
turbo dev
```

The SvelteKit dev server will be running on [localhost:3000](http://localhost:3000).


## Tech Stack

This project is built with a modern, full-stack tech stack that is designed to be fast, efficient, and easy to work with.

### Core Technologies

*   [**SvelteKit**](https://kit.svelte.dev/): A full-stack framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.
*   [**Turborepo**](https://turbo.build/): A high-performance build system for JavaScript and TypeScript codebases, used to manage this monorepo.
*   [**pnpm**](https://pnpm.io/): A fast, disk space-efficient package manager.

### Frontend

*   [**Svelte**](https://svelte.dev/): A radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.
*   [**Tailwind CSS**](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs.
*   [**Vite**](https://vitejs.dev/): A next-generation frontend tooling that provides a faster and leaner development experience for modern web projects.
*   [**PostHog**](https://posthog.com/): A developer-friendly, open-source product analytics platform.

### Backend

*   [**Turso**](https://turso.tech/): A distributed SQLite database platform that allows you to have a database that is close to your users.
*   [**Drizzle ORM**](https://orm.drizzle.team/): A TypeScript ORM for SQL databases that provides a type-safe and intuitive API for interacting with your database.
*   [**Mailjet**](https://www.mailjet.com/): A powerful email service provider that is used to send emails from the contact form.

### Testing

*   [**Playwright**](https://playwright.dev/): A framework for end-to-end testing of modern web apps.
*   [**Vitest**](https://vitest.dev/): A blazing fast unit-test framework powered by Vite.

### Deployment

*   [**Vercel**](https://vercel.com/): A platform for deploying and hosting modern web applications.

### Development Tools
*   Coffee & Nvim

## TODO
- Add hooks to go to contact section and make a new projects page.
- Add technologies as hidden so that it's shown on phone.

