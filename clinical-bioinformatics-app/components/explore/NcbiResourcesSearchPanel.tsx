"use client";

import { useState } from "react";
import type { NcbiLinkedResourcesResult } from "../../types/genomics";
import { Card } from "@/components/ui/card";
import { NcbiResourcesResultCard } from "@/components/explore/NcbiResourcesResultCard";
import { ExplorerLimitationsCard } from "@/components/explore/ExplorerLimitationsCard";

export function NcbiResourcesSearchPanel() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<NcbiLinkedResourcesResult | null>(null);
  const [cachedResults, setCachedResults] = useState<
    Record<string, NcbiLinkedResourcesResult>
  >({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function runNcbiResourceSearch(searchTerm: string) {
    const cleanedQuery = searchTerm.trim();

    if (!cleanedQuery) {
      setError("Enter an NCBI search term, for example BRCA1, CFTR, or rs80357906.");
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
      const response = await fetch("/api/explore/ncbi-resources", {
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
        throw new Error(
          data.error ?? "Unable to search NCBI linked resources."
        );
      }

      const resourceResult = data.result as NcbiLinkedResourcesResult;

      setResult(resourceResult);
      setCachedResults((currentCache) => ({
        ...currentCache,
        [cacheKey]: resourceResult,
      }));
    } catch (caughtError) {
      const message =
        caughtError instanceof Error
          ? caughtError.message
          : "Unable to search NCBI linked resources.";

      setError(
        `${message} Try a gene symbol, variant identifier, condition term, or short evidence search term.`
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await runNcbiResourceSearch(query);
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
          NCBI linked resources
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-slate-900">
          Search NCBI resources
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Search selected NCBI databases for related publications, gene records,
          ClinVar records, and nucleotide records. This helps evidence gathering
          without replacing careful review.
        </p>

        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">
            Accepted format
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Use a gene symbol, variant identifier, condition term, or other
            short evidence search term.
          </p>

          <div className="mt-3 space-y-2">
            <div className="rounded-lg bg-white px-3 py-2 font-mono text-sm text-slate-800">
              BRCA1
            </div>

            <div className="rounded-lg bg-white px-3 py-2 font-mono text-sm text-slate-800">
              CFTR
            </div>

            <div className="rounded-lg bg-white px-3 py-2 font-mono text-sm text-slate-800">
              rs80357906
            </div>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            The Gene card can open a direct human gene record when one is found.
            PubMed, ClinVar, and Nucleotide open search result pages so the
            learner can review sources rather than being sent to a random top
            record.
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
            placeholder="Example: BRCA1, CFTR, rs80357906"
            className="min-h-11 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-900 outline-none transition focus:border-slate-400"
          />

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-xl bg-slate-900 px-5 py-2 font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {isLoading ? "Searching NCBI..." : "Search resources"}
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
              NCBI resource search problem
            </p>

            <p className="mt-1 text-sm leading-6 text-red-700">{error}</p>
          </div>
        )}
      </Card>

      <ExplorerLimitationsCard
        title="What NCBI linked resources can and cannot tell you"
        canHelpWith={[
          "Finding supporting records across selected NCBI databases",
          "Opening a human gene record when a clear match is found",
          "Finding PubMed, ClinVar, and nucleotide search result pages",
          "Starting a broader evidence-gathering workflow",
        ]}
        cannotTellYou={[
          "Which publication is the strongest or most relevant",
          "Whether a database record is sufficient for clinical interpretation",
          "Whether the evidence applies to the patient phenotype",
          "Whether a finding should be reported without expert review",
        ]}
      />

      {result && <NcbiResourcesResultCard result={result} />}
    </div>
  );
}