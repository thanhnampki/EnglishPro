'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

interface SpeedControlProps {
  speed: number;
  speeds: readonly number[];
  onChange: (speed: number) => void;
}

export function SpeedControl({ speed, speeds, onChange }: SpeedControlProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="mb-3 text-sm font-semibold text-slate-900">
          Playback Speed: {speed}x
        </div>
        <div className="flex gap-2">
          {speeds.map((s) => (
            <Button
              key={s}
              variant={speed === s ? 'primary' : 'outline'}
              size="sm"
              onClick={() => onChange(s)}
              className="flex-1"
            >
              {s}x
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
