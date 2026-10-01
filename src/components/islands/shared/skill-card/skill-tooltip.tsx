/**
 * skill-card/skill-tooltip.tsx
 *
 * A desktop hover tooltip that shows extra notes for a skill.
 */
import clsx from "clsx";

export interface SkillTooltipProps {
  extraNotes: string;
}

export default function SkillTooltip({
  extraNotes,
}: SkillTooltipProps): React.ReactElement {
  return (
    <div
      className={clsx(
        "pointer-events-none absolute right-0 bottom-full",
        "z-20 mb-2 hidden max-w-xs rounded-md border",
        "border-white/10 bg-[#0d0d18]/95 p-2",
        "font-mono text-[11px] leading-relaxed",
        "text-[var(--color-fg)] shadow-lg backdrop-blur-sm",
        "group-hover:block",
      )}
    >
      {extraNotes}
    </div>
  );
}
