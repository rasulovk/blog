# Monograph Blog

A text-first Astro blog theme.

## Site Structure

```
src/
├── config/
│   ├── site.ts        # Main site settings (name, URL, social links, navigation)
│   └── code.ts        # Code highlighting themes
├── content/
│   └── posts/         # Blog posts (Markdown/MDX files)
├── layouts/
│   └── BaseLayout.astro   # Main page layout
├── components/
│   ├── LocalIcon.astro
│   ├── NewsletterSignup.astro
│   ├── PostCard.astro
│   ├── SiteFooter.astro
│   ├── SiteHeader.astro
│   └── mdx/           # MDX components (Callout, CodeGroup)
├── lib/
│   └── posts.ts       # Post utilities
├── pages/              # Astro pages (routing)
│   ├── index.astro     # Homepage
│   ├── about.astro
│   ├── contact.astro
│   ├── categories.astro
│   ├── search.astro
│   ├── rss.xml.ts
│   ├── post/[slug].astro      # Individual posts
│   ├── category/[category].astro
│   ├── author/[author].astro
│   └── posts/[...page].astro   # Post archive
└── styles/
    └── global.css
```

## How to Make Changes

### 1. Site Configuration

Edit `src/config/site.ts`:
- `name` - Site title in header/footer
- `siteUrl` - Your site's URL (e.g., `https://rasulovk.github.io/blog`)
- `authorName` - Author name
- `socials` - Social media links in footer
- `navigation` - Header menu items

### 2. Adding Blog Posts

Create a `.md` or `.mdx` file in `src/content/posts/`:

```markdown
---
title: "My Post Title"
description: "Post description for SEO"
excerpt: "A brief summary for post listings"
pubDate: 31.08.2026
category: Engineering
author:
  name: Your Name
  role: Writer
featured: false
draft: false
date: 2026-09-01
---

Your content here...
```

**Frontmatter fields:**
- `title` - Post title (required)
- `description` - SEO description
- `excerpt` - Brief summary for listings
- `pubDate` - Publication date (DD.MM.YYYY format)
- `category` - Must match one in `src/config/categories.ts`
- `author` - Object with `name` and `role`
- `featured` - Show in featured section
- `draft` - Hide from published posts
- `date` - Fallback date (YYYY-MM-DD)

### 3. Categories

Available categories in `src/config/categories.ts`:
- Engineering
- Reliability
- Cloud
- Security
- AI
- Design Systems

### 4. Customizing Components

- Header: `src/components/SiteHeader.astro`
- Footer: `src/components/SiteFooter.astro`
- Post cards: `src/components/PostCard.astro`
- MDX components: `src/components/mdx/`

## Obsidian Blog Bridge

This theme supports Obsidian Blog Bridge plugin. Configure Blog Bridge with:
- Posts directory: `src/content/posts`
- Image directory: `public/images/obsidian`
- Image name template: `{{slug}}/{{filename}}`

The frontmatter format matches Blog Bridge's YAML output.

## Deployment

This site deploys automatically to GitHub Pages via GitHub Actions on every push to `main`.

### URL Structure

All URLs include `/blog/` prefix since the site is hosted at `rasulovk.github.io/blog`:
- Homepage: `/blog/`
- Posts: `/blog/posts/`
- Categories: `/blog/categories/`
- Category pages: `/blog/category/engineering/`
- Post pages: `/blog/post/my-post-title/`
- RSS: `/blog/rss.xml`

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Environment

- Node.js >= 22.12.0
- Astro (configured with MDX, Sitemap, TailwindCSS)
