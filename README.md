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
