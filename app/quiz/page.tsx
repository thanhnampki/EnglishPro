'use client';

import { useState } from 'react';
import { AppHeader } from '@/components/layout/AppHeader';
import { BottomNavigation } from '@/components/layout/BottomNavigation';
import { PageContainer } from '@/components/layout/PageContainer';
import { QuizCard } from '@/components/quiz/QuizCard';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { QUIZZES } from '@/data/lessons';

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>(
    {}
  );
  const [showResults, setShowResults] = useState(false);

  const questions = QUIZZES;
  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestion.id];
  const isAnswered = !!selectedAnswer;

  const handleSelectAnswer = (answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const correctCount = Object.entries(selectedAnswers).filter(
    ([qId, answer]) => {
      const q = questions.find((qu) => qu.id === qId);
      return q && answer === q.answer;
    }
  ).length;

  const score = Math.round((correctCount / questions.length) * 100);

  if (showResults) {
    return (
      <>
        <AppHeader />
        <PageContainer>
          <div className="flex items-center justify-center min-h-[60vh]">
            <Card className="w-full max-w-md">
              <CardHeader className="text-center">
                <CardTitle>Quiz Complete!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-center">
                <div>
                  <p className="mb-2 text-6xl font-bold text-blue-600">
                    {score}%
                  </p>
                  <p className="text-slate-600">
                    You got {correctCount} out of {questions.length} correct
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={handleResetQuiz}
                    variant="secondary"
                    className="flex-1"
                  >
                    Try Again
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </PageContainer>
        <BottomNavigation />
      </>
    );
  }

  return (
    <>
      <AppHeader />
      <PageContainer>
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="mb-2 text-3xl font-bold text-slate-900">Quiz</h1>
            <p className="text-slate-600">
              Test your knowledge with this quick quiz.
            </p>
          </div>

          {/* Main Layout */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Quiz Card */}
            <div className="lg:col-span-2">
              <QuizCard
                question={currentQuestion}
                selectedAnswer={selectedAnswer}
                onSelectAnswer={handleSelectAnswer}
                isSubmitted={isAnswered}
                questionIndex={currentQuestionIndex}
                totalQuestions={questions.length}
              />

              {/* Navigation */}
              <div className="mt-6 flex gap-3">
                <Button
                  onClick={handlePrevious}
                  variant="outline"
                  className="flex-1"
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </Button>

                {currentQuestionIndex === questions.length - 1 ? (
                  <Button
                    onClick={handleSubmitQuiz}
                    className="flex-1"
                    disabled={!isAnswered}
                  >
                    Submit Quiz
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    className="flex-1"
                    disabled={!isAnswered}
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="mb-2 flex justify-between">
                      <span className="text-sm text-slate-600">
                        Question {currentQuestionIndex + 1}
                      </span>
                      <span className="text-sm font-semibold text-slate-900">
                        {currentQuestionIndex + 1} / {questions.length}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200">
                      <div
                        className="h-2 rounded-full bg-blue-500 transition-all"
                        style={{
                          width: `${
                            ((currentQuestionIndex + 1) / questions.length) * 100
                          }%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Answered</span>
                      <Badge variant="primary">
                        {Object.keys(selectedAnswers).length}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Questions Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-2">
                    {questions.map((_, index) => {
                      const isAnsweredQ = !!selectedAnswers[questions[index].id];
                      const isCurrent = index === currentQuestionIndex;

                      return (
                        <button
                          key={index}
                          onClick={() => setCurrentQuestionIndex(index)}
                          className={`rounded px-2 py-2 text-xs font-semibold transition-colors ${
                            isCurrent
                              ? 'bg-blue-500 text-white'
                              : isAnsweredQ
                                ? 'bg-emerald-100 text-emerald-700'
                                : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {index + 1}
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </PageContainer>
      <BottomNavigation />
    </>
  );
}
