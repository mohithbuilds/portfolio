---
title: Setting Up End-to-End Testing with Playwright
id: 407957d5-c857-468a-884b-1e8d32db415a
published: true
publishedAt: '2025-04-10'
categories: ['playwright', 'testing', 'automation', 'web development', 'quality assurance']
slug: end-to-end-testing-setup
layout: blog
description: 'A guide to setting up Playwright for end-to-end testing, covering both monorepo and standard repository structures.'
seoTitle: 'Setting Up End-to-End Testing with Playwright: Monorepo vs Standard Repository'
seoDescription: 'Learn how to set up Playwright for end-to-end testing, covering both monorepo and standard repository structures.'
seoKeywords: ['playwright', 'testing', 'automation', 'web development', 'quality assurance']
---

End-to-end (E2E) testing is crucial for verifying that your web application works correctly from a user's perspective. In this guide, I'll walk through setting up Playwright, covering both monorepo and standard repository structures.

## Project Structure

Whether you're working with a monorepo or a standard repository, you'll want to keep your E2E tests organized. Here are two common approaches:

### Standalone Project Structure

```bash
your-project/
├── src/
├── tests/
│   └── e2e/
│       ├── tests/
│       ├── poms/
│       └── playwright.config.ts
└── package.json
```

### Monorepo Structure

```bash
your-monorepo/
├── apps/
│   ├── web/
│   └── marketing/
├── packages/
├── tests/
│   └── e2e/
│       ├── tests/
│       ├── poms/
│       └── playwright.config.ts
└── pnpm-workspace.yaml
```

## Initial Setup

Start by installing Playwright using pnpm:

```bash
# For a standard repository
pnpm add -D @playwright/test

# For a monorepo (from the root)
pnpm --filter tests add -D @playwright/test
```

Add these scripts to your package.json:

```json
{
	"scripts": {
		"test:e2e": "playwright test",
		"test:e2e:ui": "playwright test --ui"
	}
}
```

## Basic Configuration

Create a `playwright.config.ts` file:

```typescript
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: './tests',
	use: {
		baseURL: process.env.BASE_URL || 'http://localhost:5173',
		trace: 'retain-on-failure',
		screenshot: 'only-on-failure',
	},
	webServer: undefined,
};

export default config;
```

## Setting Up Authentication

Create a global setup file for handling authentication:

```typescript
// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
	const browser = await chromium.launch();
	const page = await browser.newPage();

	// Perform login
	await page.goto(process.env.BASE_URL);
	await page.fill('[name="email"]', process.env.TEST_USER_EMAIL);
	await page.fill('[name="password"]', process.env.TEST_USER_PASSWORD);
	await page.click('button[type="submit"]');
	await page.waitForURL('**/dashboard');

	// Save signed-in state
	await page.context().storageState({
		path: './tests/auth.json',
	});

	await browser.close();
}

export default globalSetup;
```

Update your `playwright.config.ts` to use the global setup:

```typescript
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: './tests',
	globalSetup: require.resolve('./global-setup'),
	use: {
		storageState: './tests/auth.json',
		baseURL: process.env.BASE_URL,
	},
};

export default config;
```

## Running Tests

You can run your tests using these commands:

```bash
# Run all tests
pnpm test:e2e

# Run tests with UI mode
pnpm test:e2e:ui

# Run specific test file
pnpm test:e2e tests/flow.spec.ts

# Run tests with different configurations
pnpm test:e2e --workers=4
pnpm test:e2e --project=chromium
```

---

_This guide focuses on setting up Playwright for E2E testing. For best practices and CI/CD setup, see our companion guides "[The Pragmatic Guide to Playwright Testing](/blog/the-pragmatic-guide-to-playwright-testing) and "[Continuous Integration for Playwright Tests](/blog/playwright-ci-cd)"._
