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
- `siteUrl` - Your site's URL
- `authorName` - Author name
- `socials` - Social media links in footer
- `navigation` - Header menu items

### 2. Adding Blog Posts

Create a new folder in `src/content/posts/` with an `index.md` or `index.mdx` file:

```markdown
---
title: "My Post Title"
description: "Post description for SEO"
pubDate: 2024-01-15
author: "Your Name"
category: "tech"  # or "design", "life", etc.
---

Your content here...
```

### 3. Categories

Available categories are defined in `src/config/categories.ts`. Add new categories there if needed.

### 4. Customizing Components

- Header: `src/components/SiteHeader.astro`
- Footer: `src/components/SiteFooter.astro`
- Post cards: `src/components/PostCard.astro`
- MDX components: `src/components/mdx/`

## Deployment

This site deploys automatically to GitHub Pages via GitHub Actions on every push to `main`.

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
