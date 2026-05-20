'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import type { Lesson } from '@/lib/types';

interface LessonCardProps {
  lesson: Lesson;
}

export function LessonCard({ lesson }: LessonCardProps) {
  return (
    <Link href={`/lessons/${lesson.id}`}>
      <Card className="h-full transition-all hover:shadow-soft-md">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg">{lesson.title}</CardTitle>
              <CardDescription>{lesson.description}</CardDescription>
            </div>
            <div className="text-3xl">{lesson.thumbnail}</div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Badge variant="primary" className="capitalize">
              {lesson.level}
            </Badge>
            <Badge variant="secondary" className="capitalize">
              {lesson.topic}
            </Badge>
          </div>
          <p className="text-sm text-slate-500">{lesson.durationMinutes} minutes</p>
          <Progress value={lesson.progress} label="Progress" />
        </CardContent>
      </Card>
    </Link>
  );
}
