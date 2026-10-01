/**
 * company-detail-content/index.tsx
 * Shared content for a single work history entry.
 * Used in both the desktop modal and the mobile detail page.
 */
import type { WorkHistoryEntry } from "@lib/work-history";
import { formatDateRange } from "@lib/work-history";
import { useTranslation } from "@lib/i18n";
import { ACCENT_HEADING } from "@lib/classes";
import { PERIOD_TEXT } from "@components/islands/shared/classes";
import clsx from "clsx";
import ProjectItemList from "./project-item-list";
import CompanyLink from "./company-link";
import CoverImage from "./cover-image";

export interface CompanyDetailContentProps {
  entry: WorkHistoryEntry;
}

export default function CompanyDetailContent({
  entry,
}: CompanyDetailContentProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      {/* Header: company name + period */}
      <div
        className={clsx(
          "flex flex-wrap items-baseline justify-between",
          "gap-2",
        )}
      >
        <h2 className={clsx(ACCENT_HEADING, "text-lg font-semibold")}>
          {entry.company_name}
        </h2>
        <span className={PERIOD_TEXT}>
          {entry.date_to
            ? formatDateRange(entry.date_from, entry.date_to)
            : entry.date_from}
        </span>
      </div>

      {/* Company link */}
      {entry.url ? <CompanyLink url={entry.url} /> : null}

      {/* Cover image */}
      {entry.image_url ? (
        <CoverImage
          imageUrl={entry.image_url}
          companyName={entry.company_name}
        />
      ) : null}

      {/* Projects */}
      <div className="flex flex-col gap-4">
        <h3 className={ACCENT_HEADING}>{t("company_history.projects")}</h3>
        <ProjectItemList projects={entry.projects} />
      </div>
    </div>
  );
}
