"use client";

import { useState } from "react";
import type { GeneLookupResult } from "../../types/genomics";
import { Card } from "@/components/ui/card";
import { GeneResultCard } from "@/components/explore/GeneResultCard";
import { ExplorerLimitationsCard } from "@/components/explore/ExplorerLimitationsCard";

export function GeneSearchPanel() {
  const [symbol, setSymbol] = useState("");
  const [result, setResult] = useState<GeneLookupResult | null>(null);
  const [cachedResults, setCachedResults] = useState<
    Record<string, GeneLookupResult>
  >({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function runGeneSearch(geneSymbol: string) {
    const cleanedSymbol = geneSymbol.trim();

    if (!cleanedSymbol) {
      setError("Enter a gene symbol to search, for example BRCA1.");
      setResult(null);
      return;
    }

    const cacheKey = cleanedSymbol.toUpperCase();

    if (cachedResults[cacheKey]) {
      setResult(cachedResults[cacheKey]);
      setError("");
      return;
    }

    setIsLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/explore/gene", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          symbol: cleanedSymbol,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to look up this gene.");
      }

      const geneResult = data.result as GeneLookupResult;

      setResult(geneResult);
      setCachedResults((currentCache) => ({
        ...currentCache,
        [cacheKey]: geneResult,
      }));
    } catch (caughtError) {
      const message =
        caughtError instanceof Error
          ? caughtError.message
          : "Unable to look up this gene.";

      setError(
        `${message} Check that the symbol is a valid human gene symbol and try again.`
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await runGeneSearch(symbol);
  }

  function handleClear() {
    setSymbol("");
    setResult(null);
    setError("");
  }

  const hasSomethingToClear = Boolean(symbol || result || error);

  return (
    <div className="space-y-6">
      <Card className="border-slate-200 bg-white">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Gene lookup
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-slate-900">
          Search by gene symbol
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Enter a human gene symbol to retrieve a simplified Ensembl gene
          summary, including gene location, biotype, canonical transcript, and
          transcript preview.
        </p>

        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">
            Accepted format
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Use an approved human gene symbol, usually written as a short
            uppercase symbol.
          </p>

          <div className="mt-3 rounded-lg bg-white px-3 py-2 font-mono text-sm text-slate-800">
            BRCA1
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            This lookup is best for starting with a known gene and checking its
            genomic context before moving to transcript, region, variant, or
            clinical evidence review.
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="mt-6 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            value={symbol}
            onChange={(event) => setSymbol(event.target.value)}
            placeholder="Enter gene symbol, for example BRCA1"
            className="min-h-11 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-900 outline-none transition focus:border-slate-400"
          />

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-xl bg-slate-900 px-5 py-2 font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {isLoading ? "Searching Ensembl..." : "Search gene"}
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
              Gene lookup problem
            </p>

            <p className="mt-1 text-sm leading-6 text-red-700">{error}</p>
          </div>
        )}
      </Card>

      <ExplorerLimitationsCard
        title="What gene lookup can and cannot tell you"
        canHelpWith={[
          "Confirming gene identity and Ensembl gene ID",
          "Checking gene location and genome build context",
          "Reviewing gene biotype and transcript context",
          "Starting a source-aware evidence review",
        ]}
        cannotTellYou={[
          "Whether a patient has a diagnosis",
          "Whether a variant in the gene is clinically significant",
          "Whether the gene-disease relationship fits the phenotype",
          "Whether the finding is technically reliable in patient data",
        ]}
      />

      {result && <GeneResultCard result={result} />}
    </div>
  );
}