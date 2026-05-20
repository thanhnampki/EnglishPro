'use client';

import { AppHeader } from '@/components/layout/AppHeader';
import { BottomNavigation } from '@/components/layout/BottomNavigation';
import { PageContainer } from '@/components/layout/PageContainer';
import { VocabularyCard } from '@/components/vocabulary/VocabularyCard';
import { VOCABULARY } from '@/data/lessons';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function VocabularyPage() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const levels = ['beginner', 'intermediate', 'advanced'];
  const topics = ['interview', 'travel', 'daily-life'];

  const filtered = VOCABULARY.filter((item) => {
    const levelMatch = !selectedLevel || item.level === selectedLevel;
    const topicMatch = !selectedTopic || item.topic === selectedTopic;
    return levelMatch && topicMatch;
  });

  return (
    <>
      <AppHeader />
      <PageContainer>
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="mb-2 text-3xl font-bold text-slate-900">
              Vocabulary
            </h1>
            <p className="text-slate-600">
              Study and master new words for your English learning.
            </p>
          </div>

          {/* Filters */}
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-semibold text-slate-700">Level</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => setSelectedLevel(null)}
                  variant={selectedLevel === null ? 'primary' : 'outline'}
                  size="sm"
                >
                  All
                </Button>
                {levels.map((level) => (
                  <Button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    variant={selectedLevel === level ? 'primary' : 'outline'}
                    size="sm"
                    className="capitalize"
                  >
                    {level}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold text-slate-700">Topic</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => setSelectedTopic(null)}
                  variant={selectedTopic === null ? 'primary' : 'outline'}
                  size="sm"
                >
                  All
                </Button>
                {topics.map((topic) => (
                  <Button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    variant={selectedTopic === topic ? 'primary' : 'outline'}
                    size="sm"
                    className="capitalize"
                  >
                    {topic}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Vocabulary Grid */}
          <div>
            <p className="mb-4 text-sm text-slate-600">
              Showing {filtered.length} vocabulary items
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item) => (
                <VocabularyCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
      <BottomNavigation />
    </>
  );
}
