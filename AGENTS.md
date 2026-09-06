# AGENTS.md

Welcome to the repository. This document provides technical context, architectural guidelines, and rules for AI agents and developers working on this project.

---

## 1. Project Overview

- **Project Type**: Next.js company website.
- **Key Features**:
  - Company branding, landing pages, about, and contact.
  - **Product Showcase**: Product browsing and detailed product pages (catalog view only; **no shopping cart or checkout**).
  - **Articles / News / Blog**: Content publication system for news updates, announcements, and articles.
- **Data Strategy (No Database)**:
  - There is **no external database** (no Postgres, MongoDB, Prisma, etc.).
  - All data (products, articles, metadata, company info) is **baked directly into the repository** using typed TypeScript objects, JSON, or Markdown/MDX files.
  - All content changes, updates, and additions must be committed directly to version control.

---

## 2. Package Manager & Tooling

- **Package Manager**: Strictly use `pnpm`.
  - **Do NOT** use `npm`, `yarn`, or `bun`.
- **Standard Commands**:
  - Install dependencies: `pnpm install`
  - Start development server: `pnpm dev`
  - Build for production: `pnpm build`
  - Start production server: `pnpm start`
  - Run linting: `pnpm lint`
  - Type checking: `pnpm typecheck` (or `pnpm tsc --noEmit`)

---

## 3. Recommended Directory Structure

```text
.
├── public/                     # Static public assets (logos, icons, product images)
│   ├── images/
│   │   ├── products/           # Product photos
│   │   └── blog/               # Article banners & content images
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout (header, footer, providers)
│   │   ├── page.tsx            # Home page
│   │   ├── products/
│   │   │   ├── page.tsx        # Product catalog / browser page
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Single product detail page
│   │   ├── news/ (or blog/)
│   │   │   ├── page.tsx        # News / articles listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Single article reading page
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact / inquiry page
│   │   ├── sitemap.ts          # Dynamic sitemap generator
│   │   └── robots.ts           # Dynamic robots.txt
│   ├── components/             # Reusable UI & section components
│   │   ├── common/             # Buttons, Cards, Inputs, Modals
│   │   ├── layout/             # Header, Navigation, Footer
│   │   ├── products/           # ProductCard, ProductGrid, ProductFilters
│   │   └── articles/           # ArticleCard, ArticleList, MarkdownRenderer
│   ├── content/ (or data/)     # Baked-in static data files
│   │   ├── products/           # Product definitions (TS, JSON, or MDX)
│   │   ├── articles/           # Articles / News posts (Markdown/MDX or TS)
│   │   └── site-config.ts      # Global site metadata, contact info, navigation links
│   ├── lib/                    # Utility functions, content loaders, data helpers
│   │   ├── products.ts         # Query helpers (getAllProducts, getProductBySlug, etc.)
│   │   ├── articles.ts         # Query helpers (getAllArticles, getArticleBySlug, etc.)
│   │   └── utils.ts            # General utility helpers (cn, formatting, etc.)
│   └── types/                  # TypeScript interfaces and type definitions
│       ├── product.ts          # Product data structures
│       └── article.ts          # Article/Post data structures
├── AGENTS.md                   # AI agent instructions (this file)
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

---

## 4. Architecture & Technical Rules

### 4.1. Next.js App Router & Server Components
- **Default to React Server Components (RSC)**: Keep pages and layout components as Server Components whenever possible.
- **Client Components (`'use client'`)**: Only use `'use client'` when state, event handlers, browser APIs, or interactive hooks (`useState`, `useEffect`, etc.) are required (e.g., search/filter bars, mobile menu toggle, lightboxes).
- **Static Generation (`generateStaticParams`)**:
  - Always implement `generateStaticParams` on dynamic routes (`/products/[slug]`, `/news/[slug]`) to pre-render pages at build time for optimal performance and SEO.
- **Metadata & SEO**:
  - Implement dynamic metadata via `generateMetadata` for dynamic routes.
  - Utilize OpenGraph and Twitter card metadata for sharing.
  - Always configure canonical URLs and semantic HTML tags (`<main>`, `<article>`, `<nav>`, `<aside>`).

### 4.2. Image & Media Handling
- Always use `next/image` with explicit `width`, `height`, or `fill` alongside appropriate `sizes` attributes.
- Local product and blog images should reside under `public/images/`.

### 4.3. Styling & Design Conventions
- Standard styling is **Tailwind CSS**.
- Maintain responsive, mobile-first design across all views.
- Ensure accessible color contrast ratios and appropriate ARIA attributes for interactive elements.

---

## 5. Content Management Workflows

Because there is **no database**, all content additions and modifications happen in the codebase.

### 5.1. Adding / Updating Products
1. **Schema**: Ensure all products conform to `Product` type definition (e.g., `id`, `slug`, `name`, `tagline`, `description`, `features`, `specifications`, `images`, `category`, `status`, `inquiryUrl`).
2. **File Location**: Add or edit the product in `src/content/products/` or `src/data/products.ts`.
3. **Images**: Place product image assets in `public/images/products/<product-slug>/`.
4. **Verification**: Run `pnpm build` to verify `generateStaticParams` succeeds with the new product slug.

### 5.2. Adding / Updating Articles / News
1. **Schema**: Ensure each article conforms to `Article` type (e.g., `slug`, `title`, `description`, `publishedAt`, `author`, `coverImage`, `category`, `tags`, `content`).
2. **File Location**: Add the new post in `src/content/articles/` (either MDX/Markdown or typed TS files).
3. **Assets**: Add cover photos to `public/images/blog/`.
4. **Verification**: Run `pnpm build` to ensure static page generation succeeds.

---

## 6. Agent Instructions & Constraints

When implementing features or refactoring:
- **Do NOT add databases**: Do NOT install or configure Prisma, Drizzle, Mongoose, Supabase, or external database drivers unless explicitly requested by the user.
- **Do NOT add ecommerce checkout / payment systems**: The user specifically requested a product browser without a cart. CTAs should lead to inquiry/contact forms, email links, or WhatsApp/external links.
- **Package Management**: Never run `npm install` or `yarn add`. Always use `pnpm add <pkg>`.
- **TypeScript Discipline**: Do not use `any`. Explicitly type data loaders, component props, and helper returns.
- **Clean Git Diffs**: Keep changes focused on the task at hand. Do not reformat unrelated files.
- **Pre-Completion Checks**: Before concluding any major changes or code generation, verify that the project builds clean (`pnpm build` or `pnpm typecheck`).


<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
