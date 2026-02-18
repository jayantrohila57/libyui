# LibyUI

LibyUI is a modern, accessible, and beautifully designed React component library built with TypeScript and Tailwind CSS. Our components are crafted to help you build stunning web applications with ease and confidence.

## Features

- **🎨 Beautiful Design**: Thoughtfully crafted components with a modern aesthetic
- **♿ Accessible**: Built with accessibility in mind, following WCAG guidelines
- **🔧 TypeScript First**: Full TypeScript support for better developer experience
- **🎭 Customizable**: Easy to customize with Tailwind CSS classes and design tokens
- **📱 Responsive**: Mobile-first design that works seamlessly across all devices


## Development

Run the documentation site:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the documentation and examples.

## Project Structure

In the project, you can see:

- `src/components/`: React component library source code
- `src/content/docs/`: Documentation files written in MDX
- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `lib/layout.shared.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.dev) - learn about Fumadocs
