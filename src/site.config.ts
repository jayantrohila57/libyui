/**
 * Site Configuration — Single source of truth for LibyUI
 *
 * All app-wide metadata, navigation links, GitHub details, and
 * documentation section definitions live here. Import from this
 * file instead of repeating these values across the codebase.
 */

export const siteConfig = {
  // ─── Identity ────────────────────────────────────────────────────────────
  name: "LibyUI",
  tagline: "Build Beautiful UI Components. Ship Faster.",
  description:
    "LibyUI is your comprehensive React component library for building modern, accessible, and stunning user interfaces with ease.",
  url: process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000",

  // ─── Author / Owner ───────────────────────────────────────────────────────
  author: {
    name: "Jayant Rohila",
    email: "jrohila55@gmail.com",
    url: "https://github.com/jayantrohila57",
  },

  // ─── GitHub ───────────────────────────────────────────────────────────────
  github: {
    user: "jayantrohila57",
    owner: "jayantrohila57",
    repo: "libyui",
    branch: "v1",
    get repoUrl() {
      return `https://github.com/${this.user}/${this.repo}`;
    },
    get issuesUrl() {
      return `https://github.com/${this.user}/${this.repo}/issues`;
    },
  },

  // ─── Navigation ───────────────────────────────────────────────────────────
  nav: {
    links: [
      { text: "Docs", href: "/docs" },
      { text: "Components", href: "/docs/components" },
      { text: "Blocks", href: "/docs/blocks" },
    ],
  },

  // ─── Documentation Sections ──────────────────────────────────────────────
  docs: {
    baseUrl: "/docs",
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        href: "/docs/Introduction",
        description:
          "Learn what LibyUI is, why it exists, and how to get started in minutes.",
        icon: "Book",
      },
      {
        id: "components",
        title: "Components",
        href: "/docs/components",
        description:
          "Primitives and composite components — the core building blocks of every UI.",
        icon: "Boxes",
      },
      {
        id: "blocks",
        title: "Blocks",
        href: "/docs/blocks",
        description:
          "Pre-built layout sections you can copy, paste, and customize instantly.",
        icon: "Layout",
      },
      {
        id: "modules",
        title: "Modules",
        href: "/docs/modules",
        description:
          "Higher-level feature modules like data tables and form systems.",
        icon: "Puzzle",
      },
      {
        id: "patterns",
        title: "Patterns",
        href: "/docs/patterns",
        description:
          "Proven design and composition patterns for common UI challenges.",
        icon: "Fingerprint",
      },
      {
        id: "recipes",
        title: "Recipes",
        href: "/docs/recipes",
        description:
          "Step-by-step recipes for building real-world features with LibyUI.",
        icon: "ChefHat",
      },
      {
        id: "tooling",
        title: "Tooling",
        href: "/docs/tooling",
        description:
          "CLI, TypeScript config, linting, and the developer toolchain around LibyUI.",
        icon: "Wrench",
      },
    ],
  },

  // ─── SEO / Open Graph ────────────────────────────────────────────────────
  get ogImage() {
    return `${this.url}/opengraph-image`;
  },
  get fullTitle() {
    return `${this.name} - ${this.tagline}`;
  },
} as const;

export type SiteConfig = typeof siteConfig;
