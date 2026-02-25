# LibyUI

**Build Beautiful UI Components. Ship Faster.**

LibyUI is a modern, accessible, and beautifully designed React component library built with TypeScript and Tailwind CSS. It provides components, blocks, modules, and patterns to help you build stunning web applications with confidence.

- **Beautiful by default** — Thoughtfully crafted components with a modern aesthetic
- **TypeScript-first** — Full type safety with autocomplete for all props, variants, and sizes
- **Customizable** — Override anything with Tailwind CSS classes via `className`
- **Mobile-first** — Responsive design that works seamlessly across all devices

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Next.js 16](https://nextjs.org) | App framework |
| [fumadocs-ui](https://fumadocs.dev) | Documentation UI and MDX pipeline |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Biome](https://biomejs.dev) | Linting and formatting |

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the documentation site.

## Project Structure

```
src/
├── site.config.ts          # Single source of truth — name, GitHub, nav, doc sections
├── app/
│   ├── (home)/             # Landing page
│   └── (docs)/docs/        # Documentation layout and pages
├── components/
│   ├── ui/                 # LibyUI primitive components (Button, Card, Separator…)
│   └── mdx/                # MDX component registry
├── content/docs/           # MDX documentation files
│   ├── index.mdx           # Welcome page
│   ├── Introduction/       # Getting started guide
│   ├── components/         # Component docs (Primitives + Composite)
│   ├── blocks/             # Pre-built layout block docs
│   ├── modules/            # Feature module docs (Data Table, Data Forms)
│   ├── patterns/           # Design pattern guides
│   ├── recipes/            # Step-by-step implementation recipes
│   └── tooling/            # CLI, TypeScript, Biome, Tailwind setup
├── module/
│   ├── docs/               # fumadocs source loader and page utilities
│   ├── common/             # Shared layout and component preview helpers
│   └── github/             # GitHub API integration and git config
└── lib/                    # Env validation, utilities, RSS
```

## Documentation Sections

| Section | Description |
|---------|------------|
| [Introduction](/docs/Introduction) | What LibyUI is and how to install it |
| [Components](/docs/components) | Primitive and composite UI components |
| [Blocks](/docs/blocks) | Copy-paste layout sections |
| [Modules](/docs/modules) | Feature-complete modules (Data Table, Data Forms) |
| [Patterns](/docs/patterns) | Design and composition patterns |
| [Recipes](/docs/recipes) | Step-by-step real-world feature guides |
| [Tooling](/docs/tooling) | CLI, TypeScript, Biome, and Tailwind setup |

## Scripts

```bash
pnpm dev          # Start the development server
pnpm build        # Build for production
pnpm lint         # Run Biome linter
pnpm format       # Auto-fix formatting with Biome
pnpm shadcn       # Add or update components via the shadcn CLI
pnpm types:check  # Type-check the entire project
```

## Configuration

All app-wide settings (name, description, GitHub repo, nav links, doc sections) are defined in [`src/site.config.ts`](./src/site.config.ts). Edit that file as the single source of truth rather than updating individual layout or metadata files.

## License

MIT — see [LICENSE](./LICENSE) for details.
