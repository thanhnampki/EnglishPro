import type { ShadowingLesson } from '@/lib/types';

// Mock data for development
const MOCK_LESSON: ShadowingLesson = {
  id: 'lesson-001',
  metadata: {
    title: 'Job Interview Tips',
    topic: 'interview',
    difficulty: 'intermediate',
    durationSeconds: 720,
    source: 'ted-talks',
    language: 'en-US',
    speaker: 'Career Coach',
    publishedAt: '2024-01-15T00:00:00Z',
  },
  audio: {
    url: '/audio/lesson-1.mp3',
    mimeType: 'audio/mpeg',
    bitrate: 128,
  },
  script: [
    {
      id: 'sent-001-001',
      order: 1,
      text: "I'm excited to learn about this opportunity.",
      translation: 'Tôi rất hào hứng để tìm hiểu về cơ hội này.',
      startTime: 0,
      endTime: 2,
      vocabularyIds: ['vocab-1', 'vocab-2'],
      difficulty: 2,
    },
    {
      id: 'sent-001-002',
      order: 2,
      text: 'Can you tell me more about the role?',
      translation: 'Bạn có thể cho tôi biết thêm về vị trí này không?',
      startTime: 3,
      endTime: 5,
      vocabularyIds: ['vocab-3', 'vocab-4'],
      difficulty: 2,
    },
    {
      id: 'sent-001-003',
      order: 3,
      text: 'I have five years of experience in this field.',
      translation: 'Tôi có năm năm kinh nghiệm trong lĩnh vực này.',
      startTime: 6,
      endTime: 8,
      vocabularyIds: ['vocab-5', 'vocab-6'],
      difficulty: 3,
    },
  ],
  vocabulary: [
    {
      id: 'vocab-1',
      word: 'excited',
      ipa: 'ɪkˈsaɪtɪd',
      meaningVi: 'hào hứng, phấn khích',
      example: 'I am excited about the new project.',
      exampleMeaningVi: 'Tôi rất hào hứng về dự án mới.',
      topic: 'interview',
      level: 'beginner',
      difficulty: 1,
    },
  ],
};

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // TODO: Replace with actual data source
  // Option A: Fetch from Supabase
  // const supabase = createClient();
  // const { data } = await supabase
  //   .from('lessons')
  //   .select('*, script:transcript_lines(*), vocabulary(*)')
  //   .eq('id', id)
  //   .single();

  // Option B: Fetch from TED API or cache
  // const lesson = await fetchFromTED(id);

  // Option C: Mock for now
  if (id !== 'lesson-001') {
    return Response.json({ error: 'Lesson not found' }, { status: 404 });
  }

  return Response.json(MOCK_LESSON, {
    headers: {
      'Cache-Control': 'public, max-age=86400',
      'Content-Type': 'application/json',
      'ETag': `W/"${id}-v1"`,
    },
  });
}
