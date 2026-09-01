# Website Customization Guide

This guide explains what you can customize on your Monograph blog and how to do it.

---

## Site Identity

**File:** `src/config/site.ts`

```typescript
export const siteConfig = {
  name: "Monograph",                    // Site title in header/footer
  tagline: "A quiet place for long-form writing",
  title: "Monograph - A minimal Astro blog theme",  // Browser tab title
  description: "Your site description for SEO",
  siteUrl: "https://rasulovk.github.io/blog",  // Your site URL
  authorName: "Your Name",              // Default author name
  email: "hello@example.com",           // Contact email
  language: "en",                       // Site language code
  about: "Monograph is a reading-first Astro theme...",
};
```

---

## Navigation Links

**File:** `src/config/site.ts`

```typescript
export const navigation = [
  { label: "Archive", href: "/blog/posts/" },
  { label: "Categories", href: "/blog/categories/" },
  { label: "About", href: "/blog/about/" },
];
```

Change labels and hrefs. Remember to include `/blog/` prefix for GitHub Pages.

---

## Social Media Links

**File:** `src/config/site.ts`

```typescript
export const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://www.tiktok.com" },
  { label: "YouTube", href: "https://www.youtube.com" },
  { label: "RSS", href: "/blog/rss.xml" },
];
```

Add or remove social links. RSS link should point to your RSS feed.

---

## Footer Links

**File:** `src/config/site.ts`

```typescript
export const footerNavigation = [
  { label: "Contact", href: "/blog/contact/" },
  { label: "Privacy", href: "/blog/privacy/" },
  { label: "RSS", href: "/blog/rss.xml" },
];
```

---

## About Page

**File:** `src/pages/about.astro`

The about page content is directly in the Astro file. Edit the HTML content inside the `<div class="prose">` section to update the about page text.

---

## Categories

**File:** `src/config/categories.ts`

```typescript
export const categories = [
  "Engineering",
  "Reliability",
  "Cloud",
  "Security",
  "AI",
  "Design Systems",
] as const;
```

To add/change categories:
1. Edit the array above
2. Update category descriptions in `categoryDescriptions` object
3. Update post frontmatter `category` field to match

---

## Blog Posts

**Location:** `src/content/posts/`

Create `.md` or `.mdx` files with frontmatter:

```yaml
---
title: "Post Title"
description: "SEO description"
excerpt: "Summary for listings"
pubDate: 31.08.2026
category: Engineering
author:
  name: Your Name
  role: Writer
featured: false
draft: false
date: 2026-09-01
---
```

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Post title |
| `description` | No | SEO description |
| `excerpt` | No | Summary for post cards |
| `pubDate` | No | Publication date (DD.MM.YYYY) |
| `category` | No | Must match categories list |
| `author` | No | Object with `name` and `role` |
| `featured` | No | Show on homepage featured section |
| `draft` | No | Set `true` to hide from published |
| `date` | No | Fallback date (YYYY-MM-DD) |

---

## URL Structure

**IMPORTANT:** Your site uses `/blog/` prefix because it's hosted at `rasulovk.github.io/blog`.

| Page | URL |
|------|-----|
| Homepage | `/blog/` |
| Archive | `/blog/posts/` |
| Categories | `/blog/categories/` |
| Category | `/blog/category/engineering/` |
| Post | `/blog/post/my-post-title/` |
| About | `/blog/about/` |
| Contact | `/blog/contact/` |
| Privacy | `/blog/privacy/` |
| RSS | `/blog/rss.xml` |

To change URL prefix:
1. Edit `base` in `astro.config.mjs`
2. Edit all hardcoded paths in `site.ts`
3. Edit `postHref` and `categoryHref` in `lib/posts.ts`

---

## Components

### Header
**File:** `src/components/SiteHeader.astro`
- Logo/name display
- Navigation menu
- Search trigger

### Footer
**File:** `src/components/SiteFooter.astro`
- Footer navigation
- Social links
- Copyright

### Post Card
**File:** `src/components/PostCard.astro`
- Displayed in post lists
- Three variants: `lead`, `feed`, `compact`

### MDX Components
**Location:** `src/components/mdx/`
- `Callout.astro` - Highlighted callout boxes
- `CodeGroup.astro` / `CodeGroupItem.astro` - Tabbed code blocks

---

## Deployment

**File:** `.github/workflows/deploy.yml`

The site auto-deploys on push to `main` via GitHub Actions.

To change Node version:
```yaml
- name: Setup Node
  uses: actions/setup-node@v4
  with:
    node-version: '22'
```

---

## Astro Configuration

**File:** `astro.config.mjs`

```javascript
export default defineConfig({
  site: siteConfig.siteUrl,    // Must match siteUrl in site.ts
  base: '/blog',               // URL prefix (change if hosting at root)
  integrations: [sitemap(), mdx()],
});
```

---

## Local Development

```bash
npm install      # Install dependencies
npm run dev      # Start dev server
npm run build    # Build for production
```

**Requirements:**
- Node.js >= 22.12.0
