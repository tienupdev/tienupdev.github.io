/**
 * skills.ts
 * Types and data loader for the skills feature.
 * Data is stored in `src/data/skills.json`.
 */

import skillsData from "../data/skills.json";
import moment from "moment";

// ---- Types -----------------------------------------------------------------

export interface Skill {
  name: string;
  /** Proficiency, clamped to the range [0, 1]. */
  efficiency: number;
  /** ISO 8601 date (YYYY-MM-DD) marking when experience began. */
  experienced_since: string;
  /** Hex color used to render the efficiency bar. */
  color: string;
  /** Free-form notes shown on hover (desktop) / tap (mobile). */
  extra_notes: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

// ---- Data -------------------------------------------------------------------

export const skillCategories: SkillCategory[] = skillsData as SkillCategory[];

// ---- Helpers ----------------------------------------------------------------

/**
 * Compute the number of full years or months since the given ISO 8601 date to now.
 * Returns months when < 1 year, years otherwise.
 * e.g. "2026-09-01" from 2026-10-02 → { count: 1, unit: "month" }
 *      "2017-01-01" from 2026-10-02 → { count: 9, unit: "year" }
 */
export function formatExperiencedSince(
  dateString: string,
): { count: number; unit: "year" | "month" } {
  const start = moment.utc(dateString, "YYYY-MM-DD");
  const now = moment.utc();
  const totalMonths = now.diff(start, "months");

  if (totalMonths < 12) {
    return { count: Math.max(0, totalMonths), unit: "month" };
  }

  return { count: Math.max(0, Math.floor(totalMonths / 12)), unit: "year" };
}
