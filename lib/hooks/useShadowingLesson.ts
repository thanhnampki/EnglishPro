import { useState, useEffect } from 'react';
import type { ShadowingLesson } from '@/lib/types';

interface UseShadowingLessonReturn {
  lesson: ShadowingLesson | null;
  loading: boolean;
  error: Error | null;
}

export function useShadowingLesson(lessonId: string): UseShadowingLessonReturn {
  const [lesson, setLesson] = useState<ShadowingLesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/lessons/${lessonId}`, {
          headers: { Accept: 'application/json' },
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch lesson: ${res.status} ${res.statusText}`);
        }

        const data: ShadowingLesson = await res.json();
        setLesson(data);
        setError(null);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Unknown error occurred');
        setError(error);
        setLesson(null);
      } finally {
        setLoading(false);
      }
    };

    if (lessonId) {
      fetchLesson();
    }
  }, [lessonId]);

  return { lesson, loading, error };
}
