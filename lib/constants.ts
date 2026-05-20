export const CONSTANTS = {
  // Playback speeds for shadowing
  PLAYBACK_SPEEDS: [0.75, 1, 1.25] as const,
  DEFAULT_PLAYBACK_SPEED: 1,

  // Tablet breakpoints
  IPAD_PORTRAIT_WIDTH: 768,
  IPAD_LANDSCAPE_WIDTH: 1024,
  MOBILE_WIDTH: 480,

  // Touch target minimum size
  MIN_TOUCH_TARGET: 44,

  // Animation durations (ms)
  ANIMATION_DURATION_FAST: 150,
  ANIMATION_DURATION_NORMAL: 300,
  ANIMATION_DURATION_SLOW: 500,

  // Colors
  COLORS: {
    primary: '#3b82f6',
    accent: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    success: '#22c55e',
  },

  // Difficulty levels
  DIFFICULTY_LEVELS: ['beginner', 'intermediate', 'advanced'] as const,
  TOPIC_TAGS: ['business', 'travel', 'daily-life', 'movies', 'news', 'interview'] as const,

  // Pagination
  LESSONS_PER_PAGE: 10,
  VOCABULARY_PER_PAGE: 20,

  // Learning milestones
  SENTENCES_TO_PRACTICE: 5,
  VOCABULARY_TO_REVIEW: 10,
  FLASHCARD_PER_DECK: 10,
};
