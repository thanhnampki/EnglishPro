# Component Rules

## Component Organization

### Folder Structure
Each feature area has its own component folder:
- `/components/ui` - Base UI components (Button, Card, Progress, Badge)
- `/components/layout` - Layout components (Header, Navigation, Containers)
- `/components/dashboard` - Dashboard components
- `/components/lesson` - Lesson-related components
- `/components/shadowing` - Shadowing practice components
- `/components/vocabulary` - Vocabulary components
- `/components/flashcard` - Flashcard components
- `/components/quiz` - Quiz components

### File Naming
- **Component files**: PascalCase.tsx
  - `Button.tsx`
  - `LessonCard.tsx`
  - `ShadowingPanel.tsx`
- **Index files**: `index.ts` (optional, only if exporting multiple)
- **Test files**: ComponentName.test.tsx (future)

## Component Guidelines

### Size Guidelines
- **Small components**: < 100 lines (atoms)
- **Medium components**: 100-200 lines (molecules)
- **Large components**: 200-300 lines (organisms)
- **Never**: Components > 300 lines (refactor into smaller pieces)

### Component Structure Template
```tsx
'use client';

import { ComponentType } from 'react';

interface ComponentNameProps {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export function ComponentName({
  title,
  onClick,
  disabled = false,
  children,
}: ComponentNameProps) {
  return (
    <div className="space-y-4">
      {/* Content */}
    </div>
  );
}
```

### TypeScript Patterns

**Props Interface Pattern**
```tsx
interface ComponentNameProps {
  // Required props first
  title: string;
  value: number;
  // Optional props with defaults
  disabled?: boolean;
  onClick?: () => void;
  // HTML attributes
  className?: string;
}
```

**State Pattern**
```tsx
const [currentIndex, setCurrentIndex] = useState(0);
const [isActive, setIsActive] = useState(false);
```

**Handler Pattern**
```tsx
const handleClick = () => {
  setIsActive(!isActive);
};

const handleNext = () => {
  if (currentIndex < total - 1) {
    setCurrentIndex(currentIndex + 1);
  }
};
```

## Component Categories

### UI Components (Reusable Atoms)
Located in `/components/ui/`

- **Button.tsx** - Buttons in all variants and sizes
- **Card.tsx** - Card containers and subcomponents
- **Badge.tsx** - Small label components
- **Progress.tsx** - Progress bars

Rules:
- No business logic
- No data fetching
- Only UI presentation
- Highly reusable
- Well-typed props
- Support all necessary variants

### Layout Components (Shells)
Located in `/components/layout/`

- **AppHeader.tsx** - Top navigation bar
- **BottomNavigation.tsx** - Mobile/iPad bottom nav
- **PageContainer.tsx** - Main content container

Rules:
- Provide page structure
- Minimal business logic
- Client components for interactive parts
- Consistent spacing and padding
- Responsive behavior

### Feature Components (Domain-Specific)
Located in `/components/[feature]/`

- **LessonCard.tsx** - Lesson list item
- **ShadowingPanel.tsx** - Shadowing control panel
- **VocabularyCard.tsx** - Single vocabulary item
- **Flashcard.tsx** - Flashcard display
- **QuizCard.tsx** - Quiz question

Rules:
- Domain-specific logic allowed
- Use data types from lib/types.ts
- Handle local state (useState)
- Props for callbacks
- Reusable within feature
- Clear ownership/responsibility

### Page Components (Routes)
Located in `/app/[route]/page.tsx`

- Import and compose feature components
- Handle page-level state
- Client components when interactive
- Server components by default

## Component Composition Patterns

### Container Pattern
```tsx
// Parent page uses composition
export default function LessonPage() {
  return (
    <>
      <AppHeader />
      <PageContainer>
        <LessonHeader lesson={lesson} />
        <LessonGrid lessons={lessons} />
      </PageContainer>
      <BottomNavigation />
    </>
  );
}
```

### Props Pattern
```tsx
interface LessonCardProps {
  lesson: Lesson;
  onSelect?: (id: string) => void;
}

// Accept data + callbacks
export function LessonCard({ lesson, onSelect }: LessonCardProps) {
  return <Card onClick={() => onSelect?.(lesson.id)} />;
}
```

### Render Pattern
```tsx
// Don't do this
<Component items={items.map(i => i.name)} />

// Do this instead
function ItemList({ items }: { items: Item[] }) {
  return (
    <div>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
```

## Styling Patterns

### Tailwind Classes Organization
```tsx
<div className={cn(
  // Base styles
  'rounded-2xl p-6',
  // Conditional styles
  isActive ? 'bg-blue-500 text-white' : 'bg-white text-slate-900',
  // Responsive
  'md:p-8 lg:grid-cols-2',
  // Custom/merged
  className
)}
/>
```

### Using `cn()` Utility
```tsx
import { cn } from '@/lib/utils';

<Button className={cn(
  'custom-class',
  someCondition && 'conditional-class',
  externalClassName
)} />
```

### Responsive Patterns
```tsx
// Mobile first, then breakpoints
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3" />

// Hide/show based on screen
<div className="hidden md:block">Desktop only</div>
<div className="md:hidden">Mobile only</div>
```

## Client vs Server Components

### Server Components (Default)
- Pages and layouts
- Data fetching
- API calls
- Private keys/tokens
- Large dependencies

```tsx
// Default - no 'use client' needed
export default function Page() {
  const data = fetchData(); // Allowed
  return <div>{data}</div>;
}
```

### Client Components
- Interactive features
- State management
- Event listeners
- Browser APIs
- React hooks (useState, useEffect, etc.)

```tsx
'use client';

import { useState } from 'react';

export function Button() {
  const [active, setActive] = useState(false);
  
  const handleClick = () => setActive(!active);
  
  return <button onClick={handleClick} />;
}
```

## Common Mistakes to Avoid

### ❌ Don't: Pass entire objects when only need ID
```tsx
<LessonCard lesson={lesson} />
```

### ✅ Do: Be specific with props
```tsx
<LessonCard 
  id={lesson.id} 
  title={lesson.title} 
  level={lesson.level} 
/>
```

### ❌ Don't: Handle complex logic in component
```tsx
function Page() {
  const complexResult = lessons
    .filter(l => l.level === 'intermediate')
    .map(l => ({...l, newProp: calculateSomething(l)}))
    .sort(...)
  // ... 100 more lines
}
```

### ✅ Do: Extract to utility or data layer
```tsx
import { getIntermediateLessons } from '@/lib/lessons';

function Page() {
  const lessons = getIntermediateLessons(LESSONS);
  return <LessonGrid lessons={lessons} />;
}
```

### ❌ Don't: Use inline functions
```tsx
<Button onClick={() => setIndex(index + 1)} />
```

### ✅ Do: Extract to named functions
```tsx
const handleNext = () => {
  if (index < total - 1) setIndex(index + 1);
};
return <Button onClick={handleNext} />;
```

## Testing Components

### What to Test (Phase 2+)
- Props are received correctly
- Renders without errors
- Event handlers fire
- Conditional rendering works
- Snapshots for layout

### Manual Testing Now
- Works on iPad viewport
- Touch interactions responsive
- No console errors
- TypeScript passes
- Accessibility checklist

## Documentation for Components

### When to Add Comments
```tsx
// Only comment non-obvious behavior
export function ComplexComponent({ data, onProcess }) {
  // Debounce rapid user interactions to avoid duplicate processing
  const debouncedProcess = useDebouncedCallback(
    onProcess,
    300
  );
  
  return <div onClick={debouncedProcess} />;
}
```

### Props Documentation
```tsx
interface CardProps {
  /** Main heading text */
  title: string;
  /** Content body */
  children: React.ReactNode;
  /** Variant style: primary or secondary */
  variant?: 'primary' | 'secondary';
}
```

---

**Component Rules Version 1.0**

Follow these rules to maintain clean, reusable component architecture.
