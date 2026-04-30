"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { cases } from "@/content/cases";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { CaseProgressCard } from "@/components/cases/CaseProgressCard";
import { ResetCaseProgressButton } from "@/components/cases/ResetCaseProgressButton";
import { getCompletedCaseSlugs } from "@/lib/caseProgress";

type CaseFilter = "all" | "not-started" | "completed";

export default function CasesPage() {
  const [completedCaseSlugs, setCompletedCaseSlugs] = useState<string[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<CaseFilter>("all");

  useEffect(() => {
    setCompletedCaseSlugs(getCompletedCaseSlugs());
  }, []);

  const completedCases = useMemo(() => {
    return cases.filter((caseItem) =>
      completedCaseSlugs.includes(caseItem.slug)
    ).length;
  }, [completedCaseSlugs]);

  const nextIncompleteCase = useMemo(() => {
    return cases.find(
      (caseItem) => !completedCaseSlugs.includes(caseItem.slug)
    );
  }, [completedCaseSlugs]);

  const filteredCases = useMemo(() => {
    if (selectedFilter === "completed") {
      return cases.filter((caseItem) =>
        completedCaseSlugs.includes(caseItem.slug)
      );
    }

    if (selectedFilter === "not-started") {
      return cases.filter(
        (caseItem) => !completedCaseSlugs.includes(caseItem.slug)
      );
    }

    return cases;
  }, [completedCaseSlugs, selectedFilter]);

  const totalCases = cases.length;

  const percentage =
    totalCases === 0 ? 0 : Math.round((completedCases / totalCases) * 100);

  const filterOptions: {
    label: string;
    value: CaseFilter;
  }[] = [
    { label: "All", value: "all" },
    { label: "Not started", value: "not-started" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PageContainer className="max-w-[1400px]">
        <SectionHeading
          title="Clinical Case Simulator"
          description="Practise realistic clinical bioinformatics reasoning across patient context, genomic evidence, technical confidence, and safe escalation."
        />

        <div className="mt-6 flex justify-end">
          <ResetCaseProgressButton />
        </div>

        <section className="mt-8">
          <CaseProgressCard
            completedCases={completedCases}
            totalCases={totalCases}
            percentage={percentage}
          />
        </section>

        <section className="mt-6">
          <Card className="border-slate-200 bg-white">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Continue your training
            </p>

            {nextIncompleteCase ? (
              <>
                <h2 className="mt-2 text-xl font-semibold text-slate-900">
                  Next case: {nextIncompleteCase.title}
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Continue working through the case bank in order, building
                  safe reasoning across increasingly realistic clinical
                  bioinformatics scenarios.
                </p>

                <div className="mt-5">
                  <Link
                    href={`/cases/${nextIncompleteCase.slug}`}
                    className="inline-block rounded-xl bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800"
                  >
                    Continue case
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h2 className="mt-2 text-xl font-semibold text-slate-900">
                  All cases completed
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  You have completed the full static case simulator bank.
                </p>
              </>
            )}
          </Card>
        </section>

        <section className="mt-8">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-slate-200 bg-white">
              <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                Step 1
              </p>
              <h2 className="mt-2 text-xl font-semibold">Review the case</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Start with the referral reason, phenotype, family history, and
                test type.
              </p>
            </Card>

            <Card className="border-slate-200 bg-white">
              <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                Step 2
              </p>
              <h2 className="mt-2 text-xl font-semibold">Assess the evidence</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Work through candidate findings, technical clues, and possible
                limitations.
              </p>
            </Card>

            <Card className="border-slate-200 bg-white">
              <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                Step 3
              </p>
              <h2 className="mt-2 text-xl font-semibold">Make safe decisions</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Decide what to prioritise, what to escalate, and what should not
                be over-interpreted.
              </p>
            </Card>
          </div>
        </section>

        <section className="mt-10">
          <div>
            <h2 className="text-2xl font-semibold">Available cases</h2>
            <p className="mt-2 text-slate-600">
              Choose a case to practise multi-step clinical bioinformatics
              decision-making.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {filterOptions.map((filter) => {
              const isActive = selectedFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setSelectedFilter(filter.value)}
                  className={`rounded-xl border px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Showing {filteredCases.length} of {totalCases} cases
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCases.map((caseItem) => {
              const isCompleted = completedCaseSlugs.includes(caseItem.slug);

              return (
                <Card
                  key={caseItem.id}
                  className="flex h-full flex-col border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      {caseItem.level}
                    </span>

                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                      Patient: {caseItem.patient.age} years,{" "}
                      {caseItem.patient.sex}
                    </span>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                        isCompleted
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border-slate-200 bg-white text-slate-600"
                      }`}
                    >
                      {isCompleted ? "Completed" : "Not started"}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold">
                    {caseItem.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {caseItem.summary}
                  </p>

                  <div className="mt-auto pt-5">
                    <Link
                      href={`/cases/${caseItem.slug}`}
                      className="inline-block rounded-xl bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800"
                    >
                      Open Case
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
      </PageContainer>
    </main>
  );
}