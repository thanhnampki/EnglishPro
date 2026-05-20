'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  Volume2,
  ChevronLeft,
  ChevronRight,
  Flag,
} from 'lucide-react';
import type { TranscriptLine } from '@/lib/types';

interface ShadowingPanelProps {
  line: TranscriptLine;
  currentIndex: number;
  totalLines: number;
  onPrevious: () => void;
  onNext: () => void;
  onPlayAudio: () => void;
  onMarkPracticed: () => void;
  onMarkDifficult: () => void;
}

export function ShadowingPanel({
  line,
  currentIndex,
  totalLines,
  onPrevious,
  onNext,
  onPlayAudio,
  onMarkPracticed,
  onMarkDifficult,
}: ShadowingPanelProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    onPlayAudio();
  };

  return (
    <Card className="sticky top-20 md:top-20">
      <CardHeader>
        <CardTitle className="text-center">Sentence {currentIndex + 1} of {totalLines}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Sentence */}
        <div className="space-y-3">
          <p className="text-center text-2xl font-bold text-slate-900">
            {line.text}
          </p>
          <p className="text-center text-lg text-slate-600">
            {line.translation}
          </p>
        </div>

        {/* Play Button */}
        <div className="flex justify-center">
          <Button
            onClick={handlePlay}
            size="lg"
            className="rounded-full"
          >
            <Volume2 className="mr-2 h-6 w-6" />
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
        </div>

        {/* Status Badges */}
        <div className="flex justify-center gap-2">
          {line.isPracticed && (
            <Badge variant="success">✓ Practiced</Badge>
          )}
          {line.isDifficult && (
            <Badge variant="warning">Difficult</Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={onMarkPracticed}
            variant="secondary"
            className="flex-1"
            size="md"
          >
            Mark Practiced
          </Button>
          <Button
            onClick={onMarkDifficult}
            variant="outline"
            className="flex-1"
            size="md"
          >
            <Flag className="h-4 w-4" />
          </Button>
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <Button
            onClick={onPrevious}
            variant="outline"
            className="flex-1"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <Button
            onClick={onNext}
            className="flex-1"
            disabled={currentIndex === totalLines - 1}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Progress */}
        <div className="rounded-2xl bg-slate-100 p-4 text-center">
          <p className="text-sm text-slate-500">Progress</p>
          <p className="text-2xl font-bold text-slate-900">
            {currentIndex + 1} / {totalLines}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
