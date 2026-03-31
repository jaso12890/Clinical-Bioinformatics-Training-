import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { DashboardProgress } from "@/components/learn/dashboard-progress";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PageContainer>
        <SectionHeading
          title="Dashboard"
          description="Track your progress and continue your learning journey."
        />

        <DashboardProgress />
      </PageContainer>
    </main>
  );
}