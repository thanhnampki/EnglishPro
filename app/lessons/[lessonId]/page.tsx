'use client';

import { AppHeader } from '@/components/layout/AppHeader';
import { BottomNavigation } from '@/components/layout/BottomNavigation';
import { PageContainer } from '@/components/layout/PageContainer';
import { LessonHeader } from '@/components/lesson/LessonHeader';
import { LessonMediaPlayer } from '@/components/lesson/LessonMediaPlayer';
import { TranscriptList } from '@/components/lesson/TranscriptList';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { LESSONS, VOCABULARY } from '@/data/lessons';
import Link from 'next/link';
import { useState } from 'react';

interface PageProps {
  params: {
    lessonId: string;
  };
}

export default function LessonDetailPage({ params }: PageProps) {
  const lesson = LESSONS.find((l) => l.id === params.lessonId);
  const [activeLineId, setActiveLineId] = useState(
    lesson?.transcriptLines[0]?.id
  );

  if (!lesson) {
    return (
      <>
        <AppHeader />
        <PageContainer>
          <p className="text-slate-600">Lesson not found.</p>
        </PageContainer>
        <BottomNavigation />
      </>
    );
  }

  const lessonVocabulary = VOCABULARY.filter((v) =>
    lesson.vocabulary.includes(v.id)
  );

  return (
    <>
      <AppHeader />
      <PageContainer>
        <LessonHeader lesson={lesson} />

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <LessonMediaPlayer
              mediaUrl={lesson.mediaUrl}
              mediaType={lesson.mediaType}
              title="Lesson Audio"
            />

            <TranscriptList
              lines={lesson.transcriptLines}
              activeLineId={activeLineId}
              onLineSelect={setActiveLineId}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Vocabulary Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Vocabulary ({lessonVocabulary.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                  {lessonVocabulary.slice(0, 3).map((vocab) => (
                    <div key={vocab.id} className="border-b pb-3 last:border-0">
                      <p className="font-semibold text-slate-900">
                        {vocab.word}
                      </p>
                      <p className="text-sm text-slate-600">
                        {vocab.meaningVi}
                      </p>
                    </div>
                  ))}
                </div>
                <Link href="/vocabulary">
                  <Button variant="outline" className="w-full">
                    View All Vocabulary
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* CTA */}
            <Link href="/practice/shadowing">
              <Button className="w-full" size="lg">
                Start Shadowing Practice
              </Button>
            </Link>
          </div>
        </div>
      </PageContainer>
      <BottomNavigation />
    </>
  );
}
