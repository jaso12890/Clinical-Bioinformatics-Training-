"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

type QuizQuestion = {
  question: string;
  options: string[];
  answerIndex: number;
  explanation?: string;
};

type LessonQuizProps = {
  questions: QuizQuestion[];
};

export function LessonQuiz({ questions }: LessonQuizProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>(
    {}
  );
  const [showResults, setShowResults] = useState(false);

  const correctCount = questions.reduce((count, question, index) => {
    return selectedAnswers[index] === question.answerIndex ? count + 1 : count;
  }, 0);

  return (
    <Card>
      <h2 className="text-2xl font-semibold">Quick Quiz</h2>
      <p className="mt-2 text-slate-600">
        Check your understanding before moving on.
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
                          [questionIndex]: optionIndex
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
          onClick={() => setShowResults(true)}
          className="rounded-xl bg-slate-900 px-4 py-2 text-white"
        >
          Check Answers
        </button>

        {showResults ? (
          <p className="text-sm text-slate-700">
            Score: {correctCount} / {questions.length}
          </p>
        ) : null}
      </div>
    </Card>
  );
}