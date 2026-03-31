import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/page-container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { module1Glossary } from "@/content/glossary/module-1";
import { module2Glossary } from "@/content/glossary/module-2";

type PageProps = {
  params: Promise<{
    moduleSlug: string;
  }>;
  searchParams: Promise<{
    returnTo?: string;
  }>;
};

export default async function ModuleGlossaryPage({
  params,
  searchParams
}: PageProps) {
  const { moduleSlug } = await params;
  const { returnTo } = await searchParams;

  let title = "";
  let description = "";
  let items: { term: string; definition: string }[] = [];

  if (moduleSlug === "module-1") {
    title = "Module 1 Glossary";
    description = "Key terms from Module 1 explained in simple language.";
    items = module1Glossary;
  } else if (moduleSlug === "module-2") {
    title = "Module 2 Glossary";
    description = "Key terms from Module 2 explained in simple language.";
    items = module2Glossary;
  } else {
    notFound();
  }

  const backHref = returnTo || `/learn/${moduleSlug}`;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PageContainer className="max-w-4xl">
        <Link href={backHref} className="text-sm text-slate-500">
          ← Back
        </Link>

        <div className="mt-6">
          <SectionHeading
            eyebrow="Glossary"
            title={title}
            description={description}
          />
        </div>

        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <Card key={item.term}>
              <h2 className="text-xl font-semibold">{item.term}</h2>
              <p className="mt-3 leading-7 text-slate-700">{item.definition}</p>
            </Card>
          ))}
        </div>
      </PageContainer>
    </main>
  );
}