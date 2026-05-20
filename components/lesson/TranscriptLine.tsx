'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import type { TranscriptLine } from '@/lib/types';

interface TranscriptLineComponentProps {
  line: TranscriptLine;
  isActive: boolean;
  onClick: () => void;
}

export function TranscriptLineComponent({
  line,
  isActive,
  onClick,
}: TranscriptLineComponentProps) {
  return (
    <Card
      onClick={onClick}
      className={`cursor-pointer transition-all ${
        isActive
          ? 'border-2 border-blue-500 bg-blue-50'
          : 'hover:bg-slate-50'
      }`}
    >
      <CardContent className="pt-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-blue-600">
            Line {line.order}
          </span>
          {line.isPracticed && <Badge variant="success">Practiced</Badge>}
          {line.isDifficult && <Badge variant="warning">Difficult</Badge>}
        </div>
        <p className="mb-3 text-lg font-semibold text-slate-900">
          {line.text}
        </p>
        <p className="text-base text-slate-600">{line.translation}</p>
      </CardContent>
    </Card>
  );
}
