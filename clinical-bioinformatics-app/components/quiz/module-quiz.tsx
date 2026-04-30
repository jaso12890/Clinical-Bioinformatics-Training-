"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

type QuizQuestion = {
  question: string;
  options: string[];
  answerIndex: number;
  explanation?: string;
};

type ModuleQuizProps = {
  questions: QuizQuestion[];
};

export function ModuleQuiz({ questions }: ModuleQuizProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>(
    {}
  );
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const correctCount = questions.reduce((count, question, index) => {
    return selectedAnswers[index] === question.answerIndex ? count + 1 : count;
  }, 0);

  const allQuestionsAnswered =
    hasMounted &&
    questions.every((_, index) => selectedAnswers[index] !== undefined);

  function handleCheckAnswers() {
    if (!allQuestionsAnswered) return;
    setShowResults(true);
  }

  if (!hasMounted) {
    return (
      <Card>
        <h2 className="text-2xl font-semibold">Module Quiz</h2>
        <p className="mt-2 text-slate-600">
          Test your understanding before marking this quiz complete.
        </p>

        <div className="mt-6 space-y-8">
          {questions.map((question, questionIndex) => (
            <div key={questionIndex}>
              <p className="font-semibold text-slate-900">{question.question}</p>

              <div className="mt-3 space-y-2">
                {question.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-left"
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-xl bg-slate-400 px-4 py-2 text-white"
          >
            Check Answers
          </button>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <h2 className="text-2xl font-semibold">Module Quiz</h2>
      <p className="mt-2 text-slate-600">
        Test your understanding before marking this quiz complete.
      </p>

      <div className="mt-6 space-y-8">
        {questions.map((question, questionIndex) => {
          const selectedAnswer = selectedAnswers[questionIndex];
          const answeredCorrectly = selectedAnswer === question.answerIndex;

          return (
            <div key={questionIndex}>
              <p className="font-semibold text-slate-900">{question.question}</p>

              <div className="mt-3 space-y-2">
                {question.options.map((option, optionIndex) => {
                  const isSelected = selectedAnswer === optionIndex;
                  const isCorrect = question.answerIndex === optionIndex;

                  let className =
                    "w-full rounded-xl border px-4 py-3 text-left transition ";

                  if (showResults) {
                    if (isCorrect) {
                      className += "border-green-600 bg-green-50";
                    } else if (isSelected && !isCorrect) {
                      className += "border-red-600 bg-red-50";
                    } else {
                      className += "border-slate-200 bg-white";
                    }
                  } else {
                    className += isSelected
                      ? "border-slate-900 bg-slate-100"
                      : "border-slate-200 bg-white hover:bg-slate-50";
                  }

                  return (
                    <button
                      key={optionIndex}
                      type="button"
                      onClick={() =>
                        setSelectedAnswers((prev) => ({
                          ...prev,
                          [questionIndex]: optionIndex,
                        }))
                      }
                      className={className}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {showResults && question.explanation ? (
                <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  <p className="font-semibold">
                    {answeredCorrectly ? "Correct." : "Not quite."}
                  </p>
                  <p className="mt-1">{question.explanation}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          type="button"
          onClick={handleCheckAnswers}
          disabled={!allQuestionsAnswered}
          className={`rounded-xl px-4 py-2 text-white ${
            allQuestionsAnswered
              ? "bg-slate-900"
              : "cursor-not-allowed bg-slate-400"
          }`}
        >
          Check Answers
        </button>

        {showResults ? (
          <p className="text-sm text-slate-700">
            Score: {correctCount} / {questions.length}
          </p>
        ) : !allQuestionsAnswered ? (
          <p className="text-sm text-slate-500">
            Answer all questions to check your answers.
          </p>
        ) : null}
      </div>
    </Card>
  );
}