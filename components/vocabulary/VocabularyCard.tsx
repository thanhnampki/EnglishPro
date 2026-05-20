'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import type { VocabularyItem } from '@/lib/types';

interface VocabularyCardProps {
  item: VocabularyItem;
}

export function VocabularyCard({ item }: VocabularyCardProps) {
  return (
    <Card className="hover:shadow-soft-md transition-all">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{item.word}</CardTitle>
            <p className="text-sm text-slate-500">{item.ipa}</p>
          </div>
          <Badge variant="primary" className="capitalize">
            {item.level}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-slate-700">Meaning</p>
          <p className="text-slate-600">{item.meaningVi}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-700">Example</p>
          <p className="mb-1 text-slate-600 italic">{item.example}</p>
          <p className="text-sm text-slate-500">{item.exampleMeaningVi}</p>
        </div>

        <div className="flex gap-2">
          <Badge variant="secondary" className="capitalize">
            {item.topic}
          </Badge>
          <Badge variant="secondary">Difficulty: {item.difficulty}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
