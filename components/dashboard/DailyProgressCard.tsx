'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';

export function DailyProgressCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Progress</CardTitle>
        <CardDescription>Keep building your learning streak!</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Progress value={3} max={5} label="Lessons Completed" />
        </div>
        <div>
          <Progress value={12} max={20} label="Vocabulary Reviewed" />
        </div>
        <div>
          <Progress value={8} max={10} label="Flashcards Practiced" />
        </div>
      </CardContent>
    </Card>
  );
}
