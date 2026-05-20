'use client';

import { useState } from 'react';
import { AppHeader } from '@/components/layout/AppHeader';
import { BottomNavigation } from '@/components/layout/BottomNavigation';
import { PageContainer } from '@/components/layout/PageContainer';
import { ShadowingPanel } from '@/components/shadowing/ShadowingPanel';
import { SpeedControl } from '@/components/shadowing/SpeedControl';
import { TranscriptList } from '@/components/lesson/TranscriptList';
import { LESSONS } from '@/data/lessons';
import { CONSTANTS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export default function ShadowingPage() {
  const lesson = LESSONS[0];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(
    CONSTANTS.DEFAULT_PLAYBACK_SPEED
  );
  const [practiceState, setPracticeState] = useState<
    Record<string, { practiced: boolean; difficult: boolean }>
  >({});

  const currentLine = lesson.transcriptLines[currentIndex];

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < lesson.transcriptLines.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePlayAudio = () => {
    // Audio playback would be implemented here
    console.log(`Playing: ${currentLine.text} at ${playbackSpeed}x speed`);
  };

  const handleMarkPracticed = () => {
    setPracticeState((prev) => ({
      ...prev,
      [currentLine.id]: {
        ...prev[currentLine.id],
        practiced: !prev[currentLine.id]?.practiced,
      },
    }));
  };

  const handleMarkDifficult = () => {
    setPracticeState((prev) => ({
      ...prev,
      [currentLine.id]: {
        ...prev[currentLine.id],
        difficult: !prev[currentLine.id]?.difficult,
      },
    }));
  };

  const practicedCount = Object.values(practiceState).filter(
    (s) => s.practiced
  ).length;

  return (
    <>
      <AppHeader />
      <PageContainer>
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="mb-2 text-3xl font-bold text-slate-900">
              Shadowing Practice
            </h1>
            <p className="text-slate-600">
              Listen and repeat each sentence to improve pronunciation.
            </p>
          </div>

          {/* Layout for iPad - 2 columns on landscape */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Control Panel - 2 cols on desktop */}
            <div className="lg:col-span-2 space-y-6">
              <ShadowingPanel
                line={currentLine}
                currentIndex={currentIndex}
                totalLines={lesson.transcriptLines.length}
                onPrevious={handlePrevious}
                onNext={handleNext}
                onPlayAudio={handlePlayAudio}
                onMarkPracticed={handleMarkPracticed}
                onMarkDifficult={handleMarkDifficult}
              />

              <SpeedControl
                speed={playbackSpeed}
                speeds={CONSTANTS.PLAYBACK_SPEEDS}
                onChange={setPlaybackSpeed}
              />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-slate-600">Practiced</p>
                    <p className="text-3xl font-bold text-emerald-600">
                      {practicedCount}
                    </p>
                  </div>
                  <div className="h-px bg-slate-200" />
                  <div>
                    <p className="text-sm text-slate-600">Total Sentences</p>
                    <p className="text-lg font-semibold text-slate-900">
                      {lesson.transcriptLines.length}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Transcript List */}
              <TranscriptList
                lines={lesson.transcriptLines}
                activeLineId={currentLine.id}
                onLineSelect={(id) => {
                  const index = lesson.transcriptLines.findIndex(
                    (l) => l.id === id
                  );
                  if (index !== -1) setCurrentIndex(index);
                }}
              />
            </div>
          </div>
        </div>
      </PageContainer>
      <BottomNavigation />
    </>
  );
}
