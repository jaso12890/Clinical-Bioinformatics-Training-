"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { LessonQuiz } from "@/components/quiz/lesson-quiz";

type Screen = {
  title: string;
  body: string;
};

type QuizQuestion = {
  question: string;
  options: string[];
  answerIndex: number;
  explanation?: string;
};

type LessonScreensProps = {
  moduleSlug: string;
  lessonSlug: string;
  screens: Screen[];
  quizQuestions?: QuizQuestion[];
  initialScreen?: number;
};

function renderInline(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    const isBold = part.startsWith("**") && part.endsWith("**");

    if (isBold) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

function isBulletBlock(paragraph: string) {
  const lines = paragraph
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    lines.length > 0 &&
    lines.every(
      (line) =>
        line.startsWith("• ") ||
        line.startsWith("- ") ||
        line.startsWith("* ")
    )
  );
}

function renderBody(body: string) {
  const paragraphs = body
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return paragraphs.map((paragraph, index) => {
    if (isBulletBlock(paragraph)) {
      const items = paragraph
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => line.replace(/^[•*-]\s+/, ""));

      return (
        <ul key={index} className="list-disc space-y-2 pl-6 text-slate-700">
          {items.map((item, itemIndex) => (
            <li key={itemIndex} className="leading-8">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={index} className="whitespace-pre-line leading-8 text-slate-700">
        {renderInline(paragraph)}
      </p>
    );
  });
}

export default function LessonScreens({
  moduleSlug,
  lessonSlug,
  screens,
  quizQuestions,
  initialScreen = 1,
}: LessonScreensProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const safeInitialIndex = Math.min(
    Math.max(initialScreen - 1, 0),
    screens.length - 1
  );

  const [currentIndex, setCurrentIndex] = useState(safeInitialIndex);

  useEffect(() => {
    const screenParam = searchParams.get("screen");
    const parsed = Number(screenParam);

    if (!Number.isNaN(parsed) && parsed >= 1 && parsed <= screens.length) {
      setCurrentIndex(parsed - 1);
    }
  }, [searchParams, screens.length]);

  function updateScreen(nextIndex: number) {
    setCurrentIndex(nextIndex);

    const params = new URLSearchParams(searchParams.toString());
    params.set("screen", String(nextIndex + 1));
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const currentScreen = screens[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === screens.length - 1;

  return (
    <div className="mt-8">
      <Card>
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Screen {currentIndex + 1} of {screens.length}
        </p>

        <h2 className="mt-2 text-2xl font-semibold">{currentScreen.title}</h2>

        <div className="mt-4 space-y-4">{renderBody(currentScreen.body)}</div>

        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => updateScreen(currentIndex - 1)}
            disabled={isFirst}
            className={`rounded-xl px-4 py-2 ${
              isFirst
                ? "cursor-not-allowed bg-slate-200 text-slate-500"
                : "border border-slate-300"
            }`}
          >
            Previous
          </button>

          <button
            type="button"
            onClick={() => updateScreen(currentIndex + 1)}
            disabled={isLast}
            className={`rounded-xl px-4 py-2 ${
              isLast
                ? "cursor-not-allowed bg-slate-200 text-slate-500"
                : "bg-slate-900 text-white"
            }`}
          >
            Next
          </button>
        </div>
      </Card>

      {isLast && quizQuestions && quizQuestions.length > 0 ? (
        <div className="mt-8">
          <LessonQuiz
            moduleSlug={moduleSlug}
            lessonSlug={lessonSlug}
            questions={quizQuestions}
          />
        </div>
      ) : null}
    </div>
  );
}