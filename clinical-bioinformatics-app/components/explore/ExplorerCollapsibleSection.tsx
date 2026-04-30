"use client";

import { useId, useState, type ReactNode } from "react";

type ExplorerSectionAccent =
  | "neutral"
  | "workflow"
  | "checklist"
  | "gene"
  | "transcript"
  | "region"
  | "variant"
  | "clinvar"
  | "ncbi";

type ExplorerCollapsibleSectionProps = {
  title: string;
  description: string;
  defaultOpen?: boolean;
  accent?: ExplorerSectionAccent;
  children: ReactNode;
};

const accentStyles: Record<
  ExplorerSectionAccent,
  {
    border: string;
    badge: string;
    hover: string;
  }
> = {
  neutral: {
    border: "border-l-slate-300",
    badge: "border-slate-200 bg-slate-50 text-slate-700",
    hover: "hover:bg-slate-50",
  },
  workflow: {
    border: "border-l-indigo-500",
    badge: "border-indigo-200 bg-indigo-50 text-indigo-700",
    hover: "hover:bg-indigo-50/50",
  },
  checklist: {
    border: "border-l-teal-500",
    badge: "border-teal-200 bg-teal-50 text-teal-700",
    hover: "hover:bg-teal-50/50",
  },
  gene: {
    border: "border-l-sky-500",
    badge: "border-sky-200 bg-sky-50 text-sky-700",
    hover: "hover:bg-sky-50/50",
  },
  transcript: {
    border: "border-l-violet-500",
    badge: "border-violet-200 bg-violet-50 text-violet-700",
    hover: "hover:bg-violet-50/50",
  },
  region: {
    border: "border-l-cyan-500",
    badge: "border-cyan-200 bg-cyan-50 text-cyan-700",
    hover: "hover:bg-cyan-50/50",
  },
  variant: {
    border: "border-l-amber-500",
    badge: "border-amber-200 bg-amber-50 text-amber-700",
    hover: "hover:bg-amber-50/50",
  },
  clinvar: {
    border: "border-l-rose-500",
    badge: "border-rose-200 bg-rose-50 text-rose-700",
    hover: "hover:bg-rose-50/50",
  },
  ncbi: {
    border: "border-l-emerald-500",
    badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
    hover: "hover:bg-emerald-50/50",
  },
};

export function ExplorerCollapsibleSection({
  title,
  description,
  defaultOpen = false,
  accent = "neutral",
  children,
}: ExplorerCollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();
  const styles = accentStyles[accent];

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-l-4 border-slate-200 bg-white shadow-sm ${styles.border}`}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((current) => !current)}
        className={`flex w-full flex-col gap-3 p-5 text-left transition md:flex-row md:items-center md:justify-between ${styles.hover}`}
      >
        <div>
          <h2 className="text-xl font-semibold text-slate-900">{title}</h2>

          <p className="mt-2 leading-7 text-slate-600">{description}</p>
        </div>

        <span
          className={`w-fit shrink-0 rounded-xl border px-4 py-2 text-sm font-semibold ${styles.badge}`}
        >
          {isOpen ? "Collapse" : "Open"}
        </span>
      </button>

      {isOpen && (
        <div id={contentId} className="border-t border-slate-200 p-5">
          {children}
        </div>
      )}
    </div>
  );
}