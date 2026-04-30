import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { GeneSearchPanel } from "@/components/explore/GeneSearchPanel";
import { TranscriptSearchPanel } from "@/components/explore/TranscriptSearchPanel";
import { RegionSearchPanel } from "@/components/explore/RegionSearchPanel";
import { VariantSearchPanel } from "@/components/explore/VariantSearchPanel";
import { ClinVarSearchPanel } from "@/components/explore/ClinVarSearchPanel";
import { NcbiResourcesSearchPanel } from "@/components/explore/NcbiResourcesSearchPanel";
import { ExplorerWorkflowCard } from "@/components/explore/ExplorerWorkflowCard";
import { ExplorerEvidenceChecklistCard } from "@/components/explore/ExplorerEvidenceChecklistCard";
import { ExplorerCollapsibleSection } from "@/components/explore/ExplorerCollapsibleSection";

const explorerSections = [
  { href: "#workflow", label: "Workflow" },
  { href: "#checklist", label: "Checklist" },
  { href: "#gene-lookup", label: "Gene" },
  { href: "#transcript-lookup", label: "Transcript" },
  { href: "#region-lookup", label: "Region" },
  { href: "#variant-lookup", label: "Variant" },
  { href: "#clinvar-evidence", label: "ClinVar" },
  { href: "#ncbi-resources", label: "NCBI" },
];

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PageContainer className="max-w-[1400px]">
        <SectionHeading
          title="Genomic Explorer"
          description="Explore real genomic information in a simplified, learner-friendly format. This section helps you practise how clinical bioinformaticians gather supporting evidence without treating database results as automatic answers."
        />

        <section className="sticky top-0 z-20 -mx-2 mt-8 border-y border-slate-200 bg-slate-50/95 px-2 py-3 backdrop-blur">
          <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                Explorer tools
              </p>

              <h2 className="mt-1 text-lg font-semibold text-slate-900">
                Jump between lookup tools
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {explorerSections.map((section) => (
                <a
                  key={section.href}
                  href={section.href}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="mt-8 scroll-mt-32">
          <ExplorerCollapsibleSection
            title="Suggested evidence workflow"
            description="Use this first to understand how the Explorer tools fit together."
            accent="workflow"
            defaultOpen
          >
            <ExplorerWorkflowCard />
          </ExplorerCollapsibleSection>
        </section>

        <section id="checklist" className="mt-6 scroll-mt-32">
          <ExplorerCollapsibleSection
            title="Evidence checklist"
            description="Use this checklist before relying on any lookup result in case reasoning."
            accent="checklist"
          >
            <ExplorerEvidenceChecklistCard />
          </ExplorerCollapsibleSection>
        </section>

        <section id="gene-lookup" className="mt-6 scroll-mt-32">
          <ExplorerCollapsibleSection
            title="Gene lookup"
            description="Search a gene symbol and review basic gene and transcript context."
            accent="gene"
          >
            <GeneSearchPanel />
          </ExplorerCollapsibleSection>
        </section>

        <section id="transcript-lookup" className="mt-6 scroll-mt-32">
          <ExplorerCollapsibleSection
            title="Transcript lookup"
            description="Search a transcript ID and review exon, translation, and transcript structure."
            accent="transcript"
          >
            <TranscriptSearchPanel />
          </ExplorerCollapsibleSection>
        </section>

        <section id="region-lookup" className="mt-6 scroll-mt-32">
          <ExplorerCollapsibleSection
            title="Region lookup"
            description="Search a genomic coordinate range and see overlapping gene features."
            accent="region"
          >
            <RegionSearchPanel />
          </ExplorerCollapsibleSection>
        </section>

        <section id="variant-lookup" className="mt-6 scroll-mt-32">
          <ExplorerCollapsibleSection
            title="Variant lookup"
            description="Search a VCF-style variant line and review predicted consequence output."
            accent="variant"
          >
            <VariantSearchPanel />
          </ExplorerCollapsibleSection>
        </section>

        <section id="clinvar-evidence" className="mt-6 scroll-mt-32">
          <ExplorerCollapsibleSection
            title="ClinVar evidence"
            description="Search ClinVar summaries and review submitted clinical evidence carefully."
            accent="clinvar"
          >
            <ClinVarSearchPanel />
          </ExplorerCollapsibleSection>
        </section>

        <section id="ncbi-resources" className="mt-6 scroll-mt-32">
          <ExplorerCollapsibleSection
            title="NCBI linked resources"
            description="Search linked NCBI resources across Gene, PubMed, ClinVar, and Nucleotide."
            accent="ncbi"
          >
            <NcbiResourcesSearchPanel />
          </ExplorerCollapsibleSection>
        </section>

        <section className="mt-10">
          <Card className="border-slate-200 bg-white">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Phase 3 focus
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              From static cases to real evidence exploration
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              The Genomic Explorer helps learners move between gene names,
              transcript IDs, genomic coordinates, variant consequences, ClinVar
              evidence summaries, and public evidence resources. The aim is not
              to make automatic clinical interpretations. The aim is to support
              careful, reviewable, source-aware reasoning.
            </p>
          </Card>
        </section>

        <section className="mt-10">
          <Card className="border-slate-200 bg-white">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Safe use reminder
            </p>

            <h2 className="mt-2 text-xl font-semibold text-slate-900">
              Evidence support, not diagnosis
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Results from public genomic resources should be used as supporting
              evidence. They still need context, transcript awareness,
              disease-mechanism reasoning, technical confidence, and appropriate
              clinical laboratory review.
            </p>
          </Card>
        </section>
      </PageContainer>
    </main>
  );
}