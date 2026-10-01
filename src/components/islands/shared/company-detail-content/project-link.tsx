/**
 * company-detail-content/project-link.tsx
 *
 * An optional external link to a project's website, rendered only when a URL
 * is provided.
 */
import { useTranslation } from "@lib/i18n";
import clsx from "clsx";

export interface ProjectLinkProps {
  url: string;
}

export default function ProjectLink({
  url,
}: ProjectLinkProps): React.ReactElement {
  const { t } = useTranslation();

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "font-mono text-xs text-cyan-400",
        "transition-colors hover:text-cyan-300",
      )}
    >
      {t("company_history.link")} ↗
    </a>
  );
}
