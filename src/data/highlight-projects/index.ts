/**
 * highlight-projects/index.ts
 *
 * Highlight projects featured on the dev landing page.
 * Each entry references a real project with its tech stack.
 */
import type { Project } from "./types";

export const highlightProjects: Project[] = [
  {
    slug: "tinyucs-web",
    title: "tinyucs-web",
    category: "Game",
    year: 2025,
    cover: "",
    description:
      "A vertical scrolling rhythm game (UCS / Pump It Up) built with Vue 3 and PixiJS.",
    url: "https://github.com/tienupdev/tinyucs-web",
    tech_stack: [
      "Vue 3",
      "PixiJS",
      "Pinia",
      "Vue Router",
      "TypeScript",
      "Vite",
    ],
  },
  {
    slug: "tienupdev.github.io",
    title: "tienupdev.github.io",
    category: "Portfolio",
    year: 2026,
    cover: "",
    description:
      "Personal portfolio website built with Astro, React, and Tailwind CSS.",
    url: "https://github.com/tienupdev/tienupdev.github.io",
    tech_stack: ["Astro 3.6", "Jotai"],
  },
  {
    slug: "wujia-tea-fnb",
    title: "Wujia Tea FnB Order",
    category: "Mini App",
    year: 2025,
    cover: "",
    description:
      "A Zalo Mini App for food and beverage ordering powered by PosApp, with real-time order management and multi-language support.",
    url: "https://miniapp.zaloplatforms.com/apps/847209388430836052/",
    tech_stack: [
      "React 19",
      "Zalo Miniapp",
      "TanStack Query",
      "TiDB",
      "pusher-js",
      "Umami Tracker",
      "Redis",
      "Node.js",
      "Elysia",
      "Laravel",
    ],
  },
];
