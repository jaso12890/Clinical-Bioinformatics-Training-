"use client";

import { useState } from "react";
import type { ClinVarLookupResult } from "../../types/genomics";
import { Card } from "@/components/ui/card";
import { ClinVarResultCard } from "@/components/explore/ClinVarResultCard";
import { ExplorerLimitationsCard } from "@/components/explore/ExplorerLimitationsCard";

export function ClinVarSearchPanel() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<ClinVarLookupResult | null>(null);
  const [cachedResults, setCachedResults] = useState<
    Record<string, ClinVarLookupResult>
  >({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function runClinVarSearch(searchTerm: string) {
    const cleanedQuery = searchTerm.trim();

    if (!cleanedQuery) {
      setError("Enter a ClinVar search term, for example BRCA1 or rs80357906.");
      setResult(null);
      return;
    }

    const cacheKey = cleanedQuery.toUpperCase();

    if (cachedResults[cacheKey]) {
      setResult(cachedResults[cacheKey]);
      setError("");
      return;
    }

    setIsLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/explore/clinvar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: cleanedQuery,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to search ClinVar.");
      }

      const clinVarResult = data.result as ClinVarLookupResult;

      setResult(clinVarResult);
      setCachedResults((currentCache) => ({
        ...currentCache,
        [cacheKey]: clinVarResult,
      }));
    } catch (caughtError) {
      const message =
        caughtError instanceof Error
          ? caughtError.message
          : "Unable to search ClinVar.";

      setError(
        `${message} Try a gene symbol, rsID, HGVS-style expression, or condition-related search term.`
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await runClinVarSearch(query);
  }

  function handleClear() {
    setQuery("");
    setResult(null);
    setError("");
  }

  const hasSomethingToClear = Boolean(query || result || error);

  return (
    <div className="space-y-6">
      <Card className="border-slate-200 bg-white">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          ClinVar evidence
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-slate-900">
          Search ClinVar
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Search ClinVar for a gene, variant identifier, rsID, HGVS expression,
          or disease-related term. Use this as supporting evidence, not as an
          automatic clinical conclusion.
        </p>

        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">
            Accepted format
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            ClinVar search is flexible. You can search by gene symbol, rsID,
            HGVS-style description, condition, or variant-related text.
          </p>

          <div className="mt-3 space-y-2">
            <div className="rounded-lg bg-white px-3 py-2 font-mono text-sm text-slate-800">
              BRCA1
            </div>

            <div className="rounded-lg bg-white px-3 py-2 font-mono text-sm text-slate-800">
              rs80357906
            </div>

            <div className="rounded-lg bg-white px-3 py-2 font-mono text-sm text-slate-800">
              CFTR p.Phe508del
            </div>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            ClinVar results should be checked carefully for clinical
            significance, review status, condition match, and whether the record
            actually matches the variant or gene being reviewed.
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="mt-6 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Example: BRCA1, rs80357906, CFTR p.Phe508del"
            className="min-h-11 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-900 outline-none transition focus:border-slate-400"
          />

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-xl bg-slate-900 px-5 py-2 font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {isLoading ? "Searching ClinVar..." : "Search ClinVar"}
            </button>

            {hasSomethingToClear && (
              <button
                type="button"
                onClick={handleClear}
                disabled={isLoading}
                className="rounded-xl border border-slate-200 bg-white px-5 py-2 font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Clear
              </button>
            )}
          </div>
        </form>

        {error && (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="text-sm font-semibold text-red-800">
              ClinVar search problem
            </p>

            <p className="mt-1 text-sm leading-6 text-red-700">{error}</p>
          </div>
        )}
      </Card>

      <ExplorerLimitationsCard
        title="What ClinVar lookup can and cannot tell you"
        canHelpWith={[
          "Finding previous ClinVar submissions",
          "Reviewing submitted clinical significance terms",
          "Checking review status and condition names",
          "Identifying whether evidence may be limited or conflicting",
        ]}
        cannotTellYou={[
          "Whether the ClinVar record definitely matches your patient finding",
          "Whether the submission fits the patient phenotype",
          "Whether local clinical laboratory review will agree",
          "Whether the variant should be reported without further assessment",
        ]}
      />

      {result && <ClinVarResultCard result={result} />}
    </div>
  );
}