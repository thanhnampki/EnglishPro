'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Progress } from '@/components/ui/Progress';
import { LESSONS } from '@/data/lessons';

export function ContinueLearningCard() {
  const currentLesson = LESSONS[0];

  return (
    <Card className="border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-white">
      <CardHeader>
        <CardTitle>Continue Learning</CardTitle>
        <CardDescription>{currentLesson.title}</CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={currentLesson.progress} label="Lesson Progress" className="mb-6" />
        <Link href={`/lessons/${currentLesson.id}`}>
          <Button className="w-full">Resume Lesson</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
