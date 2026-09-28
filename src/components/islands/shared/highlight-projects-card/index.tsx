/**
 * highlight-projects-card/index.tsx
 *
 * Displays featured / highlight projects with title, description,
 * tech-stack badges, and a link to the live project or repository.
 *
 * Hydrated client-side (client:load or client:visible).
 */
import { CARD, ACCENT_HEADING, BODY } from "@lib/classes";
import { useTranslation } from "@lib/i18n";
import { highlightProjects } from "@data/highlight-projects";
import clsx from "clsx";

export default function HighlightProjectsCard({
  className = "",
}: {
  className?: string;
}): React.ReactElement {
  const { t } = useTranslation();

  return (
    <div className={clsx(CARD, className)}>
      <h2 className={clsx(ACCENT_HEADING, "mb-4")}>
        {t("highlight_projects.title")}
      </h2>

      <div className="flex flex-col gap-4">
        {highlightProjects.map((project) => (
          <ProjectBlock key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

// ---- Project sub-block -------------------------------------------------------

function ProjectBlock({
  project,
}: {
  project: (typeof highlightProjects)[number];
}): React.ReactElement {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
      {/* Header: title + link */}
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className={clsx("font-mono text-sm font-medium text-cyan-400")}>
          {project.title}
        </h3>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "font-mono text-xs text-cyan-400",
              "transition-colors hover:text-cyan-300",
            )}
          >
            ↗
          </a>
        ) : null}
      </div>

      {/* Description */}
      {/* {project.description ? (
        <p className={clsx(BODY, "mb-3 text-xs!")}>{project.description}</p>
      ) : null} */}

      {/* Tech stack badges */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech_stack.map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
      </div>
    </div>
  );
}

// ---- Tech badge --------------------------------------------------------------

const TECH_BADGE = clsx(
  "inline-block rounded-md border border-white/10",
  "bg-white/5 px-2 py-0.5 font-mono text-xs",
  "text-[var(--color-fg-muted)]",
);

function TechBadge({ tech }: { tech: string }): React.ReactElement {
  return <span className={TECH_BADGE}>{tech}</span>;
}
