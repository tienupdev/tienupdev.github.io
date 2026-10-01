/**
 * company-detail-content/company-link.tsx
 *
 * An optional external link to the company's website, rendered only when a URL
 * is provided.
 */
import clsx from "clsx";

export interface CompanyLinkProps {
  url: string;
}

export default function CompanyLink({
  url,
}: CompanyLinkProps): React.ReactElement {
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
      {url} ↗
    </a>
  );
}
