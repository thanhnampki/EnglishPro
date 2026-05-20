'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import type { QuizQuestion } from '@/lib/types';

interface QuizCardProps {
  question: QuizQuestion;
  selectedAnswer?: string;
  onSelectAnswer: (answer: string) => void;
  isSubmitted: boolean;
  questionIndex: number;
  totalQuestions: number;
}

export function QuizCard({
  question,
  selectedAnswer,
  onSelectAnswer,
  isSubmitted,
  questionIndex,
  totalQuestions,
}: QuizCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Question {questionIndex + 1} of {totalQuestions}</CardTitle>
          <Badge variant="primary">{question.type === 'multiple-choice' ? 'Multiple Choice' : 'Fill Blank'}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-lg font-semibold text-slate-900">{question.question}</p>

        <div className="space-y-3">
          {question.options?.map((option) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === question.answer;
            const showCorrect = isSubmitted && isCorrect;
            const showIncorrect = isSubmitted && isSelected && !isCorrect;

            return (
              <button
                key={option}
                onClick={() => !isSubmitted && onSelectAnswer(option)}
                disabled={isSubmitted}
                className={`w-full rounded-2xl border-2 px-6 py-4 text-left font-medium transition-all ${
                  showCorrect
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                    : showIncorrect
                      ? 'border-rose-500 bg-rose-50 text-rose-900'
                      : isSelected
                        ? 'border-blue-500 bg-blue-50 text-slate-900'
                        : 'border-slate-200 bg-white text-slate-900 hover:bg-slate-50'
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {isSubmitted && (
          <div className={`rounded-2xl p-4 ${
            selectedAnswer === question.answer
              ? 'bg-emerald-50 text-emerald-900'
              : 'bg-rose-50 text-rose-900'
          }`}>
            <p className="mb-2 font-semibold">
              {selectedAnswer === question.answer ? '✓ Correct!' : '✗ Incorrect'}
            </p>
            <p className="text-sm">{question.explanation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
