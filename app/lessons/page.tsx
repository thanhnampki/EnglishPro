'use client';

import { AppHeader } from '@/components/layout/AppHeader';
import { BottomNavigation } from '@/components/layout/BottomNavigation';
import { PageContainer } from '@/components/layout/PageContainer';
import { LessonCard } from '@/components/lesson/LessonCard';
import { LESSONS } from '@/data/lessons';

export default function LessonsPage() {
  return (
    <>
      <AppHeader />
      <PageContainer>
        <div className="space-y-8">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-slate-900">Lessons</h1>
            <p className="text-slate-600">Choose a lesson and start learning.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {LESSONS.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </div>
      </PageContainer>
      <BottomNavigation />
    </>
  );
}
