'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import type { Lesson } from '@/lib/types';

interface LessonHeaderProps {
  lesson: Lesson;
}

export function LessonHeader({ lesson }: LessonHeaderProps) {
  return (
    <Card className="mb-8">
      <CardContent className="space-y-4 pt-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="mb-2 text-2xl font-bold text-slate-900">{lesson.title}</h1>
            <p className="mb-4 text-slate-600">{lesson.description}</p>
          </div>
          <div className="text-5xl">{lesson.thumbnail}</div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="primary" className="capitalize">
            {lesson.level}
          </Badge>
          <Badge variant="secondary" className="capitalize">
            {lesson.topic}
          </Badge>
          <Badge variant="secondary">{lesson.durationMinutes} min</Badge>
        </div>

        <Progress value={lesson.progress} label="Lesson Progress" />
      </CardContent>
    </Card>
  );
}
