'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { RotateCw } from 'lucide-react';
import type { Flashcard } from '@/lib/types';

interface FlashcardProps {
  card: Flashcard;
  onKnown: () => void;
  onReview: () => void;
  isFirst: boolean;
  isLast: boolean;
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  totalCards: number;
}

export function Flashcard({
  card,
  onKnown,
  onReview,
  onNext,
  onPrevious,
  currentIndex,
  totalCards,
}: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="space-y-6">
      {/* Card Counter */}
      <div className="text-center text-sm font-semibold text-slate-600">
        Card {currentIndex + 1} of {totalCards}
      </div>

      {/* Flashcard */}
      <div
        onClick={handleFlip}
        className="relative h-64 cursor-pointer perspective md:h-80"
      >
        <Card className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-soft-md transition-all hover:shadow-soft-md hover:-translate-y-1">
          <CardContent className="text-center">
            {!isFlipped ? (
              <div>
                <p className="mb-4 text-sm opacity-75">Front</p>
                <p className="text-4xl font-bold">{card.front}</p>
                <p className="mt-4 text-xs opacity-50">Click to flip</p>
              </div>
            ) : (
              <div>
                <p className="mb-4 text-sm opacity-75">Back</p>
                <p className="mb-4 text-2xl font-semibold">{card.back}</p>
                <p className="italic text-slate-200">{card.example}</p>
                <p className="mt-4 text-xs opacity-50">Click to flip</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      {isFlipped && (
        <div className="flex gap-3">
          <Button onClick={onReview} variant="outline" className="flex-1">
            Review Again
          </Button>
          <Button onClick={onKnown} className="flex-1">
            I Know This
          </Button>
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-3">
        <Button
          onClick={onPrevious}
          variant="outline"
          className="flex-1"
          disabled={currentIndex === 0}
        >
          Previous
        </Button>
        <Button
          onClick={onNext}
          className="flex-1"
          disabled={currentIndex === totalCards - 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
