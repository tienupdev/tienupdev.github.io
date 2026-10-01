/**
 * company-detail-content/project-item.tsx
 *
 * A single project block inside a company detail view: name, optional link,
 * problem-solved summary, and tech-stack badges.
 */
import type { WorkHistoryEntry } from "@lib/work-history";
import { useTranslation } from "@lib/i18n";
import { BODY } from "@lib/classes";
import { PROJECT_CARD } from "./classes";
import clsx from "clsx";
import TechBadgeList from "./tech-badge-list";
import ProjectLink from "./project-link";

type Project = WorkHistoryEntry["projects"][number];

export interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({
  project,
}: ProjectItemProps): React.ReactElement {
  const { t } = useTranslation();

  return (
    <div className={PROJECT_CARD}>
      <div
        className={clsx(
          "mb-2 flex flex-wrap items-baseline justify-between",
          "gap-2",
        )}
      >
        <h4
          className={clsx(
            "font-mono text-base font-medium",
            "text-[var(--color-fg)]",
          )}
        >
          {project.name}
        </h4>
        {project.url ? <ProjectLink url={project.url} /> : null}
      </div>
      <p className={clsx(BODY, "mb-3")}>{project.problem_solved}</p>
      <div className="flex flex-wrap gap-1.5">
        <TechBadgeList techStack={project.tech_stack} />
      </div>
    </div>
  );
}
