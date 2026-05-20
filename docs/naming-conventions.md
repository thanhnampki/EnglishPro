# Naming Conventions

This document defines consistent naming standards across the English Learning Web App.

## File Naming

### React Components
- **Format**: PascalCase
- **Extension**: .tsx
- **Examples**:
  - `Button.tsx`
  - `LessonCard.tsx`
  - `ShadowingPanel.tsx`
  - `QuizResultSummary.tsx`

### Utility Functions
- **Format**: camelCase
- **Extension**: .ts
- **Examples**:
  - `formatTime.ts`
  - `calculateProgress.ts`
  - `sortLessonsByLevel.ts`
  - `validateQuizAnswer.ts`

### Type/Interface Files
- **Format**: camelCase
- **Extension**: .ts
- **File**: `types.ts` for domain types
- **Examples**:
  - `lib/types.ts`
  - `lib/constants.ts`

### Data Files
- **Format**: camelCase
- **Extension**: .ts
- **Examples**:
  - `data/lessons.ts`
  - `data/vocabulary.ts`
  - `data/quizzes.ts`

### Index Files
- **Format**: lowercase
- **Extension**: .ts or .tsx
- **Purpose**: Export multiple components/utilities from a folder
- **Examples**:
  - `components/ui/index.ts` (re-export all UI components)
  - `lib/index.ts` (re-export utilities)

### Folders
- **Format**: lowercase, kebab-case if multiple words
- **Examples**:
  - `components/ui/`
  - `components/lesson/`
  - `data/`
  - `docs/`

## Component Naming

### Function Components
- **Format**: PascalCase
- **Description**: Clear, descriptive name
- **Examples**:
  - `Button` (not `Btn`)
  - `LessonCard` (not `Card`)
  - `ShadowingPanel` (not `Panel`)
  - `QuizResultSummary` (not `Result`)

### Props Interfaces
- **Format**: `ComponentName + Props`
- **Examples**:
  - `ButtonProps`
  - `LessonCardProps`
  - `ShadowingPanelProps`
  - `QuizResultSummaryProps`

### Avoid These Names
- ❌ `Item`, `Container`, `Wrapper`
- ❌ `Component`, `Element`, `Box`
- ❌ Generic names without context
- ❌ Abbreviated names (use full words)

## Variable Naming

### General Variables
- **Format**: camelCase
- **Start with**: noun, not verb (except state setters)
- **Examples**:
  - `currentLesson`
  - `selectedIndex`
  - `lessonProgress`
  - `vocabularyItems`

### State Variables
- **Format**: camelCase
- **Pair**: variable + setter
- **Examples**:
  ```tsx
  const [isActive, setIsActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLesson, setSelectedLesson] = useState(null);
  ```

### Constants
- **Format**: UPPER_SNAKE_CASE
- **Scope**: File or global
- **Examples**:
  ```typescript
  const DEFAULT_PLAYBACK_SPEED = 1;
  const IPAD_BREAKPOINT = 768;
  const MAX_QUIZ_QUESTIONS = 20;
  ```

### Data Collections
- **Format**: camelCase, plural when appropriate
- **Examples**:
  - `lessons` (array)
  - `vocabularyItems` (array)
  - `quizzes` (array)
  - `studentProgress` (single object)

### Computed Values
- **Format**: camelCase, descriptive
- **Examples**:
  ```tsx
  const practicePercentage = (practiced / total) * 100;
  const formattedDuration = formatMinutes(lesson.duration);
  const sortedVocabulary = vocabulary.sort((a, b) => a.difficulty - b.difficulty);
  ```

## Boolean Naming

### Predicates & Flags
- **Prefix**: `is`, `has`, `can`, `should`
- **Examples**:
  - `isPracticed` (not `practiced`)
  - `isDifficult` (not `difficult`)
  - `isActive` (not `active`)
  - `hasError` (not `error`)
  - `canProceed` (not `proceed`)
  - `shouldShowModal` (not `showModal`)

### Avoid
- ❌ `enabled` → use `isEnabled`
  - ❌ `visible` → use `isVisible`
  - ❌ `loading` → use `isLoading`

## Function & Handler Naming

### Event Handlers
- **Prefix**: `handle`
- **Format**: `handle + Action`
- **Examples**:
  - `handlePlayAudio()`
  - `handleNextSentence()`
  - `handleSelectAnswer()`
  - `handleBookmarkVocabulary()`
  - `handleSubmitQuiz()`

### Utility Functions
- **Format**: camelCase verb + noun
- **Purpose**: Clear what it does
- **Examples**:
  - `formatTime()`
  - `calculateProgress()`
  - `getUniqueLessons()`
  - `validateEmail()`
  - `sortByDifficulty()`

### Callbacks
- **Format**: camelCase
- **Prefix**: `on` (in props)
- **Examples**:
  ```tsx
  <Button onClick={handleClick} />
  <LessonCard onSelect={handleSelectLesson} />
  <ShadowingPanel onPlayAudio={handleAudio} />
  ```

## Type & Interface Naming

### Domain Types
- **Format**: PascalCase
- **Purpose**: Main domain entities
- **Examples**:
  - `Lesson`
  - `VocabularyItem`
  - `TranscriptLine`
  - `QuizQuestion`
  - `LearningProgress`

### Props Types
- **Format**: ComponentName + Props
- **Examples**:
  - `ButtonProps`
  - `LessonCardProps`
  - `ShadowingPanelProps`

### Utility Types
- **Format**: PascalCase, descriptive
- **Examples**:
  - `DateRange`
  - `SortOrder`
  - `FilterOptions`

### Enums & Unions
- **Format**: PascalCase
- **Values**: UPPER_SNAKE_CASE or camelCase
- **Examples**:
  ```typescript
  type LessonLevel = 'beginner' | 'intermediate' | 'advanced';
  enum VocabularyDifficulty {
    Easy = 1,
    Medium = 2,
    Hard = 3,
  }
  ```

## CSS Class Naming

### Using Tailwind
- **Format**: Standard Tailwind classes
- **Modifiers**: `md:`, `lg:`, `hover:`, etc.
- **Examples**:
  - `bg-blue-500`
  - `px-6 py-4`
  - `md:grid-cols-2`
  - `hover:shadow-soft-md`

### Using `cn()` Helper
```tsx
import { cn } from '@/lib/utils';

<button className={cn(
  'base-classes',
  someCondition && 'conditional-class',
  externalClassName
)}>
  Click me
</button>
```

## Database & Data Model Naming

### Table Names (Future Phase 2)
- **Format**: snake_case, plural
- **Examples**:
  - `users`
  - `lessons`
  - `user_progress`
  - `quiz_results`

### Column Names
- **Format**: snake_case
- **Boolean**: prefix with `is_`
- **Foreign keys**: `table_id`
- **Timestamps**: `created_at`, `updated_at`
- **Examples**:
  - `user_id`
  - `is_active`
  - `created_at`
  - `lesson_title`

## API Endpoint Naming

### Routes (Future Phase 2)
- **Format**: lowercase, kebab-case
- **Resource-oriented**: `/resource` and `/resource/:id`
- **Examples**:
  - `GET /api/lessons`
  - `GET /api/lessons/:id`
  - `GET /api/vocabulary`
  - `POST /api/quiz/submit`
  - `PUT /api/user/progress`

## CSS-in-JS / Tailwind Utilities

### Custom Utilities (in tailwind.config.js)
- **Format**: camelCase
- **Examples**:
  - `shadowSoft`
  - `roundedCard`
  - `touchTarget`

### CSS Variables (if used)
- **Format**: kebab-case with prefix
- **Examples**:
  - `--color-primary`
  - `--spacing-md`
  - `--radius-card`

## Examples in Context

### Complete Component Example
```tsx
// File: LessonCard.tsx
'use client';

interface LessonCardProps {
  lesson: Lesson;
  onSelect: (id: string) => void;
  isActive?: boolean;
}

export function LessonCard({ lesson, onSelect, isActive = false }: LessonCardProps) {
  const handleClick = () => {
    onSelect(lesson.id);
  };

  const progressPercentage = (lesson.progress / 100) * 100;
  const displayDuration = formatDuration(lesson.durationMinutes);

  return (
    <Card
      onClick={handleClick}
      className={cn(
        'cursor-pointer',
        isActive && 'border-2 border-blue-500'
      )}
    >
      <h3 className="font-bold text-slate-900">{lesson.title}</h3>
      <p className="text-sm text-slate-600">{displayDuration}</p>
    </Card>
  );
}
```

### Complete Utility Example
```typescript
// File: formatDuration.ts

export function formatDuration(minutes: number): string {
  const MINUTES_PER_HOUR = 60;
  
  if (minutes < MINUTES_PER_HOUR) {
    return `${minutes}m`;
  }
  
  const hours = Math.floor(minutes / MINUTES_PER_HOUR);
  const remainingMinutes = minutes % MINUTES_PER_HOUR;
  
  if (remainingMinutes === 0) {
    return `${hours}h`;
  }
  
  return `${hours}h ${remainingMinutes}m`;
}
```

## Checklist

Before submitting code, verify:
- [ ] Components are PascalCase .tsx files
- [ ] Utilities are camelCase .ts files
- [ ] Props interfaces named ComponentName + Props
- [ ] All variables are camelCase
- [ ] Booleans start with is/has/can/should
- [ ] Event handlers start with handle
- [ ] Constants are UPPER_SNAKE_CASE
- [ ] Domain types are PascalCase
- [ ] Folders are lowercase
- [ ] No abbreviated names used
- [ ] No generic names (Item, Container, etc.)

---

**Naming Conventions Version 1.0**

Consistency in naming makes code more readable, maintainable, and professional. Follow these conventions across the project.
