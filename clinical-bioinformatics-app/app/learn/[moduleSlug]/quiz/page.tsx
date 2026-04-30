import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ModuleQuiz } from "@/components/quiz/module-quiz";
import { module1Quiz } from "@/content/quizzes/module-1";
import { module2Quiz } from "@/content/quizzes/module-2";
import { module3Quiz } from "@/content/quizzes/module-3";
import { module4Quiz } from "@/content/quizzes/module-4";
import { module5Quiz } from "@/content/quizzes/module-5";
import { module6Quiz } from "@/content/quizzes/module-6";
import { module7Quiz } from "@/content/quizzes/module-7";
import { module8Quiz } from "@/content/quizzes/module-8";
import { module9Quiz } from "@/content/quizzes/module-9";
import { module10Quiz } from "@/content/quizzes/module-10";
import { module11Quiz } from "@/content/quizzes/module-11";
import { module12Quiz } from "@/content/quizzes/module-12";
import { module13Quiz } from "@/content/quizzes/module-13";
import { module14Quiz } from "@/content/quizzes/module-14";
import { module15Quiz } from "@/content/quizzes/module-15";
import { module16Quiz } from "@/content/quizzes/module-16";
import { module17Quiz } from "@/content/quizzes/module-17";
import { module18Quiz } from "@/content/quizzes/module-18";
import { module19Quiz } from "@/content/quizzes/module-19";
import { module20Quiz } from "@/content/quizzes/module-20";
import { module21Quiz } from "@/content/quizzes/module-21";
import { module22Quiz } from "@/content/quizzes/module-22";
import { module23Quiz } from "@/content/quizzes/module-23";
import { module24Quiz } from "@/content/quizzes/module-24";
import { module25Quiz } from "@/content/quizzes/module-25";
import { ModuleItemCompleteButton } from "@/components/learn/module-item-complete-button";

type PageProps = {
  params: Promise<{
    moduleSlug: string;
  }>;
};

export default async function ModuleQuizPage({ params }: PageProps) {
  const { moduleSlug } = await params;

  let title = "";
  let description = "";
  let questions: {
    question: string;
    options: string[];
    answerIndex: number;
    explanation?: string;
  }[] = [];

  if (moduleSlug === "module-1") {
    title = "Module 1 Quiz";
    description = "Test your understanding of the key ideas across Module 1.";
    questions = module1Quiz;
  } else if (moduleSlug === "module-2") {
    title = "Module 2 Quiz";
    description = "Test your understanding of the key ideas across Module 2.";
    questions = module2Quiz;
  } else if (moduleSlug === "module-3") {
    title = "Module 3 Quiz";
    description = "Test your understanding of the key ideas across Module 3.";
    questions = module3Quiz;
  } else if (moduleSlug === "module-4") {
    title = "Module 4 Quiz";
    description = "Test your understanding of the key ideas across Module 4.";
    questions = module4Quiz;
  } else if (moduleSlug === "module-5") {
    title = "Module 5 Quiz";
    description = "Test your understanding of the key ideas across Module 5.";
    questions = module5Quiz;
  } else if (moduleSlug === "module-6") {
    title = "Module 6 Quiz";
    description = "Test your understanding of the key ideas across Module 6.";
    questions = module6Quiz;
  } else if (moduleSlug === "module-7") {
    title = "Module 7 Quiz";
    description = "Test your understanding of the key ideas across Module 7.";
    questions = module7Quiz;
  } else if (moduleSlug === "module-8") {
    title = "Module 8 Quiz";
    description = "Test your understanding of the key ideas across Module 8.";
    questions = module8Quiz;
  } else if (moduleSlug === "module-9") {
    title = "Module 9 Quiz";
    description = "Test your understanding of the key ideas across Module 9.";
    questions = module9Quiz;
  } else if (moduleSlug === "module-10") {
    title = "Module 10 Quiz";
    description = "Test your understanding of the key ideas across Module 10.";
    questions = module10Quiz;
  } else if (moduleSlug === "module-11") {
    title = "Module 11 Quiz";
    description = "Test your understanding of the key ideas across Module 11.";
    questions = module11Quiz;
  } else if (moduleSlug === "module-12") {
    title = "Module 12 Quiz";
    description = "Test your understanding of the key ideas across Module 12.";
    questions = module12Quiz;
  } else if (moduleSlug === "module-13") {
    title = "Module 13 Quiz";
    description = "Test your understanding of the key ideas across Module 13.";
    questions = module13Quiz;
  } else if (moduleSlug === "module-14") {
    title = "Module 14 Quiz";
    description = "Test your understanding of the key ideas across Module 14.";
    questions = module14Quiz;
  } else if (moduleSlug === "module-15") {
    title = "Module 15 Quiz";
    description = "Test your understanding of the key ideas across Module 15.";
    questions = module15Quiz;
  } else if (moduleSlug === "module-16") {
    title = "Module 16 Quiz";
    description = "Test your understanding of the key ideas across Module 16.";
    questions = module16Quiz;
  } else if (moduleSlug === "module-17") {
    title = "Module 17 Quiz";
    description = "Test your understanding of the key ideas across Module 17.";
    questions = module17Quiz;
  } else if (moduleSlug === "module-18") {
    title = "Module 18 Quiz";
    description = "Test your understanding of the key ideas across Module 18.";
    questions = module18Quiz;
  } else if (moduleSlug === "module-19") {
    title = "Module 19 Quiz";
    description = "Test your understanding of the key ideas across Module 19.";
    questions = module19Quiz;
  } else if (moduleSlug === "module-20") {
    title = "Module 20 Quiz";
    description = "Test your understanding of the key ideas across Module 20.";
    questions = module20Quiz;
  } else if (moduleSlug === "module-21") {
    title = "Module 21 Quiz";
    description = "Test your understanding of the key ideas across Module 21.";
    questions = module21Quiz;
  } else if (moduleSlug === "module-22") {
    title = "Module 22 Quiz";
    description = "Test your understanding of the key ideas across Module 22.";
    questions = module22Quiz;
  } else if (moduleSlug === "module-23") {
    title = "Module 23 Quiz";
    description = "Test your understanding of the key ideas across Module 23.";
    questions = module23Quiz;
  } else if (moduleSlug === "module-24") {
    title = "Module 24 Quiz";
    description = "Test your understanding of the key ideas across Module 24.";
    questions = module24Quiz;
  } else if (moduleSlug === "module-25") {
    title = "Module 25 Quiz";
    description = "Test your understanding of the key ideas across Module 25.";
    questions = module25Quiz;
  } else {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PageContainer className="max-w-4xl">
        <Link href={`/learn/${moduleSlug}`} className="text-sm text-slate-500">
          ← Back to Module
        </Link>

        <div className="mt-6">
          <SectionHeading
            eyebrow="Module Quiz"
            title={title}
            description={description}
          />
        </div>

        <div className="mt-8">
          <ModuleQuiz questions={questions} />
        </div>

        <div className="mt-8">
          <ModuleItemCompleteButton
            moduleSlug={moduleSlug}
            itemType="moduleQuiz"
            incompleteLabel="Mark Module Quiz Complete"
            completeLabel="Module Quiz Complete"
          />
        </div>
      </PageContainer>
    </main>
  );
}