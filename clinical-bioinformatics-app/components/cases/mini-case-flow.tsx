"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

type MiniCaseStep = {
  title: string;
  content: string[];
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

type MiniCaseFlowProps = {
  steps: MiniCaseStep[];
  conclusion: string[];
};

export function MiniCaseFlow({
  steps,
  conclusion
}: MiniCaseFlowProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>(
    {}
  );
  const [revealedSteps, setRevealedSteps] = useState<Record<number, boolean>>({});
  const [showConclusion, setShowConclusion] = useState(false);

  const currentStep = steps[currentStepIndex];
  const selectedAnswer = selectedAnswers[currentStepIndex];
  const isAnswered = revealedSteps[currentStepIndex] === true;
  const isCorrect = selectedAnswer === currentStep.answerIndex;
  const isLastStep = currentStepIndex === steps.length - 1;

  function handleSelect(optionIndex: number) {
    if (isAnswered) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentStepIndex]: optionIndex
    }));
  }

  function checkAnswer() {
    if (selectedAnswer === undefined) return;

    setRevealedSteps((prev) => ({
      ...prev,
      [currentStepIndex]: true
    }));
  }

  function goNext() {
    if (isLastStep) {
      setShowConclusion(true);
      return;
    }

    setCurrentStepIndex((prev) => prev + 1);
  }

  return (
    <div className="space-y-6">
      <Card>
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Step {currentStepIndex + 1} of {steps.length}
        </p>

        <h2 className="mt-2 text-2xl font-semibold">{currentStep.title}</h2>

        <div className="mt-4 space-y-4">
          {currentStep.content.map((paragraph, index) => (
            <p key={index} className="leading-8 text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-semibold">{currentStep.question}</h3>

        <div className="mt-4 space-y-3">
          {currentStep.options.map((option, optionIndex) => {
            const isSelected = selectedAnswer === optionIndex;
            const optionIsCorrect = currentStep.answerIndex === optionIndex;

            let className =
              "w-full rounded-xl border px-4 py-3 text-left transition ";

            if (isAnswered) {
              if (optionIsCorrect) {
                className += "border-green-600 bg-green-50";
              } else if (isSelected && !optionIsCorrect) {
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
                onClick={() => handleSelect(optionIndex)}
                className={className}
              >
                {option}
              </button>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {!isAnswered ? (
            <button
              type="button"
              onClick={checkAnswer}
              disabled={selectedAnswer === undefined}
              className={`rounded-xl px-4 py-2 ${
                selectedAnswer === undefined
                  ? "cursor-not-allowed bg-slate-200 text-slate-500"
                  : "bg-slate-900 text-white"
              }`}
            >
              Check Answer
            </button>
          ) : (
            <button
              type="button"
              onClick={goNext}
              className="rounded-xl bg-slate-900 px-4 py-2 text-white"
            >
              {isLastStep ? "Finish Case" : "Next Step"}
            </button>
          )}
        </div>

        {isAnswered ? (
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <p className="font-semibold">{isCorrect ? "Correct." : "Not quite."}</p>
            <p className="mt-1">{currentStep.explanation}</p>
          </div>
        ) : null}
      </Card>

      {showConclusion ? (
        <Card>
          <h3 className="text-xl font-semibold">Case summary</h3>
          <div className="mt-4 space-y-4">
            {conclusion.map((paragraph, index) => (
              <p key={index} className="leading-8 text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>
        </Card>
      ) : null}
    </div>
  );
}