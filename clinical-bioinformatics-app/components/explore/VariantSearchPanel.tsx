"use client";

import { useState } from "react";
import type { VariantLookupResult } from "../../types/genomics";
import { Card } from "@/components/ui/card";
import { VariantResultCard } from "@/components/explore/VariantResultCard";
import { ExplorerLimitationsCard } from "@/components/explore/ExplorerLimitationsCard";

export function VariantSearchPanel() {
  const [variant, setVariant] = useState("");
  const [result, setResult] = useState<VariantLookupResult | null>(null);
  const [cachedResults, setCachedResults] = useState<
    Record<string, VariantLookupResult>
  >({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function runVariantSearch(variantInput: string) {
    const cleanedVariant = variantInput.trim();

    if (!cleanedVariant) {
      setError(
        "Enter a VCF-style variant line, for example 21 26960070 rs116645811 G A . . ."
      );
      setResult(null);
      return;
    }

    const cacheKey = cleanedVariant.toUpperCase();

    if (cachedResults[cacheKey]) {
      setResult(cachedResults[cacheKey]);
      setError("");
      return;
    }

    setIsLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/explore/variant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          variant: cleanedVariant,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to look up this variant.");
      }

      const variantResult = data.result as VariantLookupResult;

      setResult(variantResult);
      setCachedResults((currentCache) => ({
        ...currentCache,
        [cacheKey]: variantResult,
      }));
    } catch (caughtError) {
      const message =
        caughtError instanceof Error
          ? caughtError.message
          : "Unable to look up this variant.";

      setError(
        `${message} Check that the input includes chromosome, position, ID, reference allele, alternate allele, and placeholder fields.`
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await runVariantSearch(variant);
  }

  function handleClear() {
    setVariant("");
    setResult(null);
    setError("");
  }

  const hasSomethingToClear = Boolean(variant || result || error);

  return (
    <div className="space-y-6">
      <Card className="border-slate-200 bg-white">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Variant lookup
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-slate-900">
          Search by VCF-style variant line
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Enter a simple VCF-style variant line to review predicted gene and
          transcript consequences.
        </p>

        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">
            Accepted format
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Use a VCF-style line with chromosome, position, ID, reference
            allele, alternate allele, and placeholder fields.
          </p>

          <div className="mt-3 rounded-lg bg-white px-3 py-2 font-mono text-sm text-slate-800">
            21 26960070 rs116645811 G A . . .
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            This lookup is useful for checking predicted consequence across
            genes and transcripts. It does not classify the variant or decide
            whether it is clinically significant.
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="mt-6 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            value={variant}
            onChange={(event) => setVariant(event.target.value)}
            placeholder="Example: 21 26960070 rs116645811 G A . . ."
            className="min-h-11 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-900 outline-none transition focus:border-slate-400"
          />

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-xl bg-slate-900 px-5 py-2 font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {isLoading ? "Running VEP..." : "Search variant"}
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
              Variant lookup problem
            </p>

            <p className="mt-1 text-sm leading-6 text-red-700">{error}</p>
          </div>
        )}
      </Card>

      <ExplorerLimitationsCard
        title="What variant lookup can and cannot tell you"
        canHelpWith={[
          "Predicting transcript-level consequence terms",
          "Identifying affected genes and transcripts",
          "Checking whether a coding or protein effect is returned",
          "Supporting structured consequence review",
        ]}
        cannotTellYou={[
          "Whether the variant is pathogenic or benign",
          "Whether the variant explains the patient phenotype",
          "Whether the call is technically reliable in the original data",
          "Whether the finding should be reported clinically",
        ]}
      />

      {result && <VariantResultCard result={result} />}
    </div>
  );
}