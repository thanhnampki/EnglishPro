// Domain Types
export interface TranscriptLine {
  id: string;
  order: number;
  startTime: number;
  endTime: number;
  text: string;
  translation: string;
  vocabularyIds: string[];
  isPracticed: boolean;
  isDifficult: boolean;
}

export interface VocabularyItem {
  id: string;
  word: string;
  ipa: string;
  meaningVi: string;
  example: string;
  exampleMeaningVi: string;
  topic: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  difficulty: number;
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'fill-blank';
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  topic: string;
  durationMinutes: number;
  thumbnail: string;
  mediaType: 'audio' | 'video';
  mediaUrl: string;
  progress: number;
  transcriptLines: TranscriptLine[];
  vocabulary: string[];
  quizQuestions: string[];
}

export interface LearningProgress {
  lessonId: string;
  completedSentences: number;
  totalSentences: number;
  reviewedVocabulary: string[];
  completedFlashcards: number;
  quizScore: number;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  example: string;
  difficulty: 'easy' | 'medium' | 'hard';
  isKnown: boolean;
}

export interface DeckProgress {
  totalCards: number;
  knownCards: number;
  reviewCards: number;
}
