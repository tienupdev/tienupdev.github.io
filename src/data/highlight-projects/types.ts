/**
 * highlight-projects/types.ts
 *
 * Shared `Project` interface used across the portfolio.
 * Moved from `desktop-project-grid.astro` with the addition of `tech_stack`.
 */

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: number;
  cover: string;
  /** Technologies used in the project. */
  tech_stack: string[];
  /** Optional URL to the live project or repository. */
  url?: string;
  /** Optional short description of the project. */
  description?: string;
}
