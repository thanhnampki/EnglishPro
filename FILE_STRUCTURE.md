# File Structure Overview

## Project Root
```
english-learning-web/
├── app/                          # Next.js App Router (pages & routing)
├── components/                   # React components
├── data/                         # Mock data
├── lib/                          # Utilities, types, constants
├── docs/                         # Documentation
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.js            # Tailwind CSS config
├── postcss.config.js             # PostCSS config
├── next.config.js                # Next.js config
├── .gitignore                    # Git ignore rules
├── README.md                     # Project overview
├── AGENTS.md                     # AI assistant guidelines (13,657 chars)
├── DELIVERY.md                   # Project delivery summary
└── QUALITY_CHECKLIST.md         # Phase 1 completion checklist
```

## `/app` - Next.js Pages (Server Components by default)

```
app/
├── layout.tsx                    # Root layout wrapper
├── page.tsx                      # HOME - Dashboard
├── globals.css                   # Global CSS (Tailwind directives)
├── learn/
│   └── page.tsx                  # Placeholder for learn route
├── lessons/
│   ├── page.tsx                  # LESSONS - Lesson list
│   └── [lessonId]/
│       └── page.tsx              # LESSON DETAIL - Single lesson view
├── practice/
│   ├── page.tsx                  # Placeholder for practice route
│   └── shadowing/
│       └── page.tsx              # SHADOWING - Practice sentences
├── vocabulary/
│   └── page.tsx                  # VOCABULARY - Word review with filters
├── flashcards/
│   └── page.tsx                  # FLASHCARDS - Flip card practice
└── quiz/
    └── page.tsx                  # QUIZ - Multiple choice & fill blank
```

**Page Component Pattern:**
```tsx
export default function Page() {
  return (
    <>
      <AppHeader />
      <PageContainer>
        {/* Page content */}
      </PageContainer>
      <BottomNavigation />
    </>
  );
}
```

## `/components` - Reusable Components

### `/components/ui` - Base UI Components (8 components)
```
components/ui/
├── Button.tsx                    # Buttons (4 variants, 3 sizes)
├── Card.tsx                      # Card family components
│   - Card
│   - CardHeader
│   - CardTitle
│   - CardDescription
│   - CardContent
│   - CardFooter
├── Progress.tsx                  # Progress bars
└── Badge.tsx                     # Small label badges (5 variants)
```

### `/components/layout` - Layout Components (3 components)
```
components/layout/
├── AppHeader.tsx                 # Top navigation bar
├── BottomNavigation.tsx          # Mobile/tablet bottom nav
└── PageContainer.tsx             # Main content wrapper
```

### `/components/dashboard` - Dashboard Components (3 components)
```
components/dashboard/
├── ContinueLearningCard.tsx      # Shows current lesson
├── DailyProgressCard.tsx         # Daily statistics
└── QuickActionGrid.tsx           # Grid of action buttons
```

### `/components/lesson` - Lesson Components (5 components)
```
components/lesson/
├── LessonCard.tsx                # Lesson list item
├── LessonHeader.tsx              # Lesson title & metadata
├── LessonMediaPlayer.tsx         # Audio/video player UI
├── TranscriptList.tsx            # List of transcript lines
└── TranscriptLine.tsx            # Single transcript line
```

### `/components/shadowing` - Shadowing Components (2 components)
```
components/shadowing/
├── ShadowingPanel.tsx            # Main control panel
└── SpeedControl.tsx              # Playback speed selector
```

### `/components/vocabulary` - Vocabulary Components (1 component)
```
components/vocabulary/
└── VocabularyCard.tsx            # Single word card
```

### `/components/flashcard` - Flashcard Components (1 component)
```
components/flashcard/
└── Flashcard.tsx                 # Flip card with progress
```

### `/components/quiz` - Quiz Components (1 component)
```
components/quiz/
└── QuizCard.tsx                  # Single quiz question
```

**Component Pattern:**
```tsx
interface ComponentNameProps {
  title: string;
  onClick?: () => void;
}

export function ComponentName({ title, onClick }: ComponentNameProps) {
  return <div>{title}</div>;
}
```

## `/data` - Mock Data

```
data/
└── lessons.ts                    # All mock data exported
    ├── LESSONS[]                 # 3 complete lessons
    │   ├── Lesson 1: Interview
    │   ├── Lesson 2: Airport
    │   └── Lesson 3: Restaurant
    ├── VOCABULARY[]              # 14 vocabulary items
    │   └── Each with IPA, meaning, examples
    └── QUIZZES[]                 # 6 quiz questions
        └── Multiple choice & fill-blank
```

**Data Structure:**
```typescript
// Lesson
{
  id: string;
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  topic: string;
  durationMinutes: number;
  transcriptLines: TranscriptLine[];
  vocabulary: string[];
  quizQuestions: string[];
}

// TranscriptLine
{
  id: string;
  order: number;
  text: string;
  translation: string;
  startTime: number;
  endTime: number;
  vocabularyIds: string[];
  isPracticed: boolean;
  isDifficult: boolean;
}

// VocabularyItem
{
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

// QuizQuestion
{
  id: string;
  type: 'multiple-choice' | 'fill-blank';
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
}
```

## `/lib` - Utilities & Types

```
lib/
├── types.ts                      # TypeScript interfaces
│   ├── Lesson
│   ├── TranscriptLine
│   ├── VocabularyItem
│   ├── QuizQuestion
│   ├── Flashcard
│   ├── DeckProgress
│   └── LearningProgress
├── constants.ts                  # App-wide constants
│   ├── PLAYBACK_SPEEDS
│   ├── IPAD_BREAKPOINTS
│   ├── COLORS
│   ├── DIFFICULTY_LEVELS
│   └── TOPIC_TAGS
└── utils.ts                      # Helper functions
    ├── cn()              # Tailwind class merger
    ├── formatTime()      # Seconds to MM:SS
    ├── formatDuration()  # Minutes to h/m format
    ├── calculateProgress() # Calculate percentage
    └── getInitials()     # Name to initials
```

## `/docs` - Documentation (8 files)

```
docs/
├── product-requirements.md       # Product vision, MVP scope
├── design-system.md              # Colors, typography, components
├── architecture.md               # Technical architecture
├── component-rules.md            # Component patterns & guidelines
├── naming-conventions.md         # Naming standards
├── future-roadmap.md             # Phases 2-4 planning
├── prompt-templates.md           # (for future use)
└── (others)
```

## Root Config Files

```
tsconfig.json                     # TypeScript strict mode config
tailwind.config.js                # Tailwind theme & extensions
postcss.config.js                 # PostCSS configuration
next.config.js                    # Next.js configuration
package.json                      # Dependencies & scripts
.gitignore                        # Git ignore patterns
```

## Documentation Files (Root Level)

```
README.md                         # Project overview & getting started
AGENTS.md                         # AI assistant guidelines (comprehensive)
DELIVERY.md                       # Phase 1 delivery summary
QUALITY_CHECKLIST.md             # Phase 1 completion checklist
FILE_STRUCTURE.md                # This file
```

---

## Component Import Paths

### Using path alias @/*
```typescript
import { Button } from '@/components/ui/Button';
import { LessonCard } from '@/components/lesson/LessonCard';
import { cn } from '@/lib/utils';
import { LESSONS } from '@/data/lessons';
import type { Lesson } from '@/lib/types';
```

## Page Routes

| Page | Route | Component |
|------|-------|-----------|
| Dashboard | `/` | `app/page.tsx` |
| Lessons | `/lessons` | `app/lessons/page.tsx` |
| Lesson Detail | `/lessons/:id` | `app/lessons/[lessonId]/page.tsx` |
| Shadowing | `/practice/shadowing` | `app/practice/shadowing/page.tsx` |
| Vocabulary | `/vocabulary` | `app/vocabulary/page.tsx` |
| Flashcards | `/flashcards` | `app/flashcards/page.tsx` |
| Quiz | `/quiz` | `app/quiz/page.tsx` |

## Component Count Summary

| Category | Count |
|----------|-------|
| UI Components | 8 |
| Layout Components | 3 |
| Dashboard Components | 3 |
| Lesson Components | 5 |
| Shadowing Components | 2 |
| Vocabulary Components | 1 |
| Flashcard Components | 1 |
| Quiz Components | 1 |
| **Total Components** | **25+** |
| **Pages** | **7** |
| **Utilities** | **5** |
| **Types** | **6+** |
| **Total Files** | **50+** |

## TypeScript Files

- 35+ TypeScript files
- 0 `any` types
- Strict mode enabled
- All components typed
- All functions typed
- All props interfaces

---

**This structure is organized for clarity, scalability, and easy navigation.**

All files are in place and ready to use!
