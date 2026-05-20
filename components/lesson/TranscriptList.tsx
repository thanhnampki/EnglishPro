'use client';

import { TranscriptLineComponent } from '@/components/lesson/TranscriptLine';
import type { TranscriptLine } from '@/lib/types';

interface TranscriptListProps {
  lines: TranscriptLine[];
  activeLineId?: string;
  onLineSelect: (lineId: string) => void;
}

export function TranscriptList({
  lines,
  activeLineId,
  onLineSelect,
}: TranscriptListProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-slate-900">Transcript</h3>
      {lines.map((line) => (
        <TranscriptLineComponent
          key={line.id}
          line={line}
          isActive={activeLineId === line.id}
          onClick={() => onLineSelect(line.id)}
        />
      ))}
    </div>
  );
}
