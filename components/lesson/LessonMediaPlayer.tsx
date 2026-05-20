'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Play, Pause } from 'lucide-react';

interface LessonMediaPlayerProps {
  mediaUrl: string;
  mediaType: 'audio' | 'video';
  title: string;
}

export function LessonMediaPlayer({
  title,
}: LessonMediaPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold text-slate-900">{title}</h3>
        </div>

        <div className="mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 p-12">
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            className="rounded-full"
            size="lg"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6" />
            )}
          </Button>
        </div>

        <div className="flex h-12 items-center rounded-2xl bg-slate-100 px-4">
          <div className="flex-1">
            <div className="h-1 rounded-full bg-slate-300">
              <div
                className="h-1 rounded-full bg-blue-500 transition-all"
                style={{ width: '35%' }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
