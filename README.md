# Kyrre Gjerstad's Portfolio

Hei!
This is a [TurboRepo](https://turbo.build/) containing my portfolio website. It contains two apps, the 'portfolio' and 'sanity'. The 'portfolio' app is a SvelteKit project that serves as the frontend of the website. The 'sanity' app is a Sanity Studio project that serves as the backend of the website and acts as a CMS.

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
gh repo clone kyrregjerstad/portfolio
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

create a symbolic link to the `.env` file in the `sanity` and `app` package, you need to use the full path to the `.env` file, hence the `$(pwd)` command. Execute this command in the root directory of the project:

```zsh
ln -s $(pwd)/.env $(pwd)/apps/sanity/.env
ln -s $(pwd)/.env $(pwd)/apps/portfolio/.env
```

Fill in the environment variables in the `.env` file. The `SANITY_API_TOKEN` is the token you get from the Sanity dashboard. The `SANITY_PROJECT_ID` is the project ID you get from the Sanity dashboard. The `SANITY_DATASET` is the dataset you want to use in the Sanity project.

I use Turso as a quick and easy sqlite database for the app, you can sign up for free at [turso.dev](https://turso.dev) and get your API key. The `TURSO_AUTH_TOKEN` is the API key you get from Turso.

## Running the project

Simply run the following command to start both the SvelteKit dev server and the Sanity Studio dev server:

```zsh
turbo dev
```

The SvelteKit dev server will be running on [localhost:3000](http://localhost:3000) and the Sanity Studio dev server will be running on [localhost:3333](http://localhost:3333).
