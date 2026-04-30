"use client";

import { useState } from "react";
import type { RegionLookupResult } from "../../types/genomics";
import { Card } from "@/components/ui/card";
import { RegionResultCard } from "@/components/explore/RegionResultCard";
import { ExplorerLimitationsCard } from "@/components/explore/ExplorerLimitationsCard";

export function RegionSearchPanel() {
  const [region, setRegion] = useState("");
  const [result, setResult] = useState<RegionLookupResult | null>(null);
  const [cachedResults, setCachedResults] = useState<
    Record<string, RegionLookupResult>
  >({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function runRegionSearch(regionInput: string) {
    const cleanedRegion = regionInput.trim();

    if (!cleanedRegion) {
      setError("Enter a genomic region to search, for example 17:43044295-43125483.");
      setResult(null);
      return;
    }

    const cacheKey = cleanedRegion.toUpperCase();

    if (cachedResults[cacheKey]) {
      setResult(cachedResults[cacheKey]);
      setError("");
      return;
    }

    setIsLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/explore/region", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          region: cleanedRegion,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to look up this region.");
      }

      const regionResult = data.result as RegionLookupResult;

      setResult(regionResult);
      setCachedResults((currentCache) => ({
        ...currentCache,
        [cacheKey]: regionResult,
      }));
    } catch (caughtError) {
      const message =
        caughtError instanceof Error
          ? caughtError.message
          : "Unable to look up this region.";

      setError(
        `${message} Check that the region uses chromosome:start-end format and try again.`
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await runRegionSearch(region);
  }

  function handleClear() {
    setRegion("");
    setResult(null);
    setError("");
  }

  const hasSomethingToClear = Boolean(region || result || error);

  return (
    <div className="space-y-6">
      <Card className="border-slate-200 bg-white">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Region lookup
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-slate-900">
          Search by genomic region
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Enter a genomic coordinate range to see which gene features overlap
          that region.
        </p>

        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">
            Accepted format
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Use chromosome, start coordinate, and end coordinate separated by a
            colon and hyphen.
          </p>

          <div className="mt-3 rounded-lg bg-white px-3 py-2 font-mono text-sm text-slate-800">
            17:43044295-43125483
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Region lookup is useful when you have genomic coordinates and need
            to identify which gene features overlap that interval.
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="mt-6 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            value={region}
            onChange={(event) => setRegion(event.target.value)}
            placeholder="Example: 17:43044295-43125483"
            className="min-h-11 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-900 outline-none transition focus:border-slate-400"
          />

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-xl bg-slate-900 px-5 py-2 font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {isLoading ? "Searching Ensembl..." : "Search region"}
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
              Region lookup problem
            </p>

            <p className="mt-1 text-sm leading-6 text-red-700">{error}</p>
          </div>
        )}
      </Card>

      <ExplorerLimitationsCard
        title="What region lookup can and cannot tell you"
        canHelpWith={[
          "Connecting genomic coordinates to overlapping gene features",
          "Checking whether a region overlaps one or more genes",
          "Turning coordinate ranges into biological context",
          "Preparing for visualisation of genes and variants",
        ]}
        cannotTellYou={[
          "Whether a variant in the region is clinically important",
          "Whether an overlapping gene explains the phenotype",
          "Whether the coordinate is from the correct genome build",
          "Whether the patient-level call is technically reliable",
        ]}
      />

      {result && <RegionResultCard result={result} />}
    </div>
  );
}