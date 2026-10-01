/**
 * work-history-card/timeline-entry.tsx
 *
 * A single timeline row: dot + line marker and a clickable company entry.
 */
import type { WorkHistoryEntry } from "@lib/work-history";
import { formatDateRange } from "@lib/work-history";
import clsx from "clsx";
import { PERIOD_TEXT } from "../classes";
import {
  COMPANY_NAME,
  TIMELINE_CONTENT,
  TIMELINE_DOT,
  TIMELINE_ITEM,
  TIMELINE_LINE,
} from "./classes";

interface CompanyLogoProps {
  imageUrl: string | undefined;
  companyName: string;
}

export interface TimelineEntryProps {
  entry: WorkHistoryEntry;
  onClick: (entry: WorkHistoryEntry) => void;
}

function CompanyLogo({ imageUrl, companyName }: CompanyLogoProps) {
  if (!imageUrl) {
    return null;
  }

  return (
    <img
      src={imageUrl}
      alt={`${companyName} logo`}
      className="h-14 w-14 rounded-md object-cover"
    />
  );
}

export default function TimelineEntry({
  entry,
  onClick,
}: TimelineEntryProps): React.ReactElement {
  return (
    <div className={TIMELINE_ITEM}>
      <div className="relative flex flex-col items-center">
        <div className={TIMELINE_DOT} />
        <div className={TIMELINE_LINE} />
      </div>
      <div
        className={clsx(TIMELINE_CONTENT, "flex flex-row")}
        onClick={() => onClick(entry)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onClick(entry);
          }
        }}
      >
        <div className="flex-1">
          <div className={clsx(COMPANY_NAME, "flex-1")}>
            {entry.company_name}
          </div>
          <div className={PERIOD_TEXT}>
            {formatDateRange(entry.date_from, entry.date_to)}
          </div>
        </div>
        <CompanyLogo
          imageUrl={entry.image_url}
          companyName={entry.company_name}
        />
      </div>
    </div>
  );
}
