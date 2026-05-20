'use client';

import { useState } from 'react';
import { AppHeader } from '@/components/layout/AppHeader';
import { BottomNavigation } from '@/components/layout/BottomNavigation';
import { PageContainer } from '@/components/layout/PageContainer';
import { Flashcard } from '@/components/flashcard/Flashcard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import type { Flashcard as FlashcardType } from '@/lib/types';

// Mock flashcards from vocabulary
const MOCK_FLASHCARDS: FlashcardType[] = [
  {
    id: 'fc-1',
    front: 'excited',
    back: 'Hào hứng, phấn khích',
    example: "I'm excited to start this new project.",
    difficulty: 'easy',
    isKnown: false,
  },
  {
    id: 'fc-2',
    front: 'opportunity',
    back: 'Cơ hội',
    example: 'This is a great opportunity to learn.',
    difficulty: 'medium',
    isKnown: false,
  },
  {
    id: 'fc-3',
    front: 'experience',
    back: 'Kinh nghiệm',
    example: 'I have 10 years of experience.',
    difficulty: 'easy',
    isKnown: false,
  },
  {
    id: 'fc-4',
    front: 'responsible',
    back: 'Chịu trách nhiệm',
    example: 'I am responsible for this project.',
    difficulty: 'medium',
    isKnown: false,
  },
  {
    id: 'fc-5',
    front: 'confident',
    back: 'Tự tin',
    example: "I'm confident that I can do this.",
    difficulty: 'easy',
    isKnown: false,
  },
];

export default function FlashcardsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardStates, setCardStates] = useState<Record<string, boolean>>({});

  const cards = MOCK_FLASHCARDS;
  const currentCard = cards[currentIndex];

  const knownCount = Object.values(cardStates).filter((known) => known).length;
  const reviewCount = cards.length - knownCount;

  const handleKnown = () => {
    setCardStates((prev) => ({
      ...prev,
      [currentCard.id]: true,
    }));
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleReview = () => {
    setCardStates((prev) => ({
      ...prev,
      [currentCard.id]: false,
    }));
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <AppHeader />
      <PageContainer>
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="mb-2 text-3xl font-bold text-slate-900">
              Flashcards
            </h1>
            <p className="text-slate-600">
              Test your vocabulary knowledge with flashcards.
            </p>
          </div>

          {/* Layout */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Flashcard */}
            <div className="lg:col-span-2">
              <Flashcard
                card={currentCard}
                onKnown={handleKnown}
                onReview={handleReview}
                isFirst={currentIndex === 0}
                isLast={currentIndex === cards.length - 1}
                onNext={handleNext}
                onPrevious={handlePrevious}
                currentIndex={currentIndex}
                totalCards={cards.length}
              />
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Deck Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="mb-2 flex justify-between">
                      <p className="text-sm text-slate-600">Known</p>
                      <Badge variant="success">{knownCount}</Badge>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200">
                      <div
                        className="h-2 rounded-full bg-emerald-500 transition-all"
                        style={{
                          width: `${(knownCount / cards.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between">
                      <p className="text-sm text-slate-600">To Review</p>
                      <Badge variant="warning">{reviewCount}</Badge>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200">
                      <div
                        className="h-2 rounded-full bg-amber-500 transition-all"
                        style={{
                          width: `${(reviewCount / cards.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-sm font-semibold text-slate-700">
                      Total Cards
                    </p>
                    <p className="text-3xl font-bold text-slate-900">
                      {cards.length}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Difficulty Filter Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Deck Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Easy</span>
                    <Badge variant="success">
                      {cards.filter((c) => c.difficulty === 'easy').length}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Medium</span>
                    <Badge variant="warning">
                      {cards.filter((c) => c.difficulty === 'medium').length}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Hard</span>
                    <Badge variant="error">
                      {cards.filter((c) => c.difficulty === 'hard').length}
                    </Badge>
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
