"use client";

import { useState } from "react";

type GlossaryTermProps = {
  term: string;
  definition: string;
};

export function GlossaryTerm({ term, definition }: GlossaryTermProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span className="inline-block">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="font-medium underline decoration-dotted underline-offset-4"
      >
        {term}
      </button>

      {isOpen ? (
        <span className="mt-2 block rounded-xl border border-slate-200 bg-white p-3 text-sm leading-6 text-slate-700 shadow-sm">
          {definition}
        </span>
      ) : null}
    </span>
  );
}