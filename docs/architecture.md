# Architecture

## Overview

This is a Next.js 14 application using the App Router, built with TypeScript and Tailwind CSS. The architecture prioritizes clean component design, maintainability, and iPad-first responsive layouts.

## Directory Structure Explained

### `/app` - Next.js Pages and Layouts
- Uses App Router for routing
- Each folder represents a route
- Server Components by default
- Client Components marked with 'use client'

### `/components` - Reusable React Components
- Organized by feature (dashboard, lesson, quiz, etc.)
- `/ui` contains base UI components (Button, Card, Progress, etc.)
- `/layout` contains layout components (header, navigation, containers)
- Each feature area has its own folder

### `/data` - Mock Data
- TypeScript files containing mock data
- Realistic English learning content
- Easy to replace with API calls in phase 2

### `/lib` - Utilities and Types
- `types.ts` - TypeScript interfaces for domains (Lesson, Vocabulary, etc.)
- `constants.ts` - App-wide constants (colors, breakpoints, defaults)
- `utils.ts` - Helper functions (formatTime, calculateProgress, etc.)

### `/docs` - Documentation
- Product requirements
- Design system
- Architecture (this file)
- Coding standards
- Future roadmap

## Data Flow

### Simple Data Flow
1. Mock data in `/data/lessons.ts`
2. Import into page components
3. Pass down as props to child components
4. Components render with local state management

### Local State Management
- Use React `useState` for UI state (current question, flashcard index, etc.)
- No global state manager needed for phase 1
- Ready for Zustand in phase 2 if cross-page state needed

### Future Data Flow (Phase 2)
```
API Server → Database ↔ Next.js API Routes ↔ React Components
```

## Component Architecture

### Server Components (Default)
- Use for pages and layout
- Fetch data here
- No `use client` directive needed

### Client Components
Only mark with `'use client'` when:
- Using `useState`, `useEffect`
- Using event handlers (onClick, onChange, etc.)
- Accessing browser APIs (localStorage, etc.)
- Displaying interactive elements

### Component Hierarchy Example
```
Page (Server Component)
├── AppHeader (Client Component - navigation)
├── PageContainer (Layout wrapper)
│   ├── Dashboard Component (Client)
│   │   ├── ContinueLearningCard (Client)
│   │   ├── DailyProgressCard (Client)
│   │   └── QuickActionGrid (Client)
└── BottomNavigation (Client Component)
```

## Responsive Design Strategy

### Mobile-First Approach
1. Write default styles for mobile
2. Use `md:` and `lg:` prefixes for larger screens
3. Bottom navigation on mobile (hidden on desktop)
4. Stack layouts on mobile, side-by-side on tablet

### iPad Optimization
```
Portrait (768px):
- Single column layout
- Full-width cards
- Bottom navigation

Landscape (1024px):
- Two-column layout where appropriate
- Sidebar panels
- Larger text and spacing
```

### Breakpoints Used
- `md:` (768px) - iPad portrait
- `lg:` (1024px) - iPad landscape / Desktop

## State Management Plan

### Current (Phase 1)
- Component-level state with `useState`
- Props passing for simple parent-child communication
- localStorage simulation with local state only

### Future (Phase 2+)
- Zustand store for shared user state (progress, bookmarks, etc.)
- API integration for server-side state
- Session management for authentication

## Performance Considerations

### Code Splitting
- Next.js automatically code-splits at route boundaries
- Each page is a separate bundle
- Components are tree-shaken

### Image Optimization
- Use emoji as placeholders in phase 1
- Next.js Image component ready for future use

### Rendering
- Minimal re-renders with proper component boundaries
- Client Components only where interactive
- Avoid inline function definitions

## Testing Strategy

### Phase 1
- Manual testing on iPad devices
- Browser DevTools device emulation
- Visual regression testing

### Phase 2
- Unit tests for utilities (formatTime, etc.)
- Component snapshot tests
- Integration tests for learning flows

## Future Integration Points

### Database (Phase 2)
```typescript
// Replace mock data with API calls
const lessons = await fetch('/api/lessons')
  .then(r => r.json())
```

### Authentication (Phase 2)
```typescript
// Add auth context/provider
// Protect pages with middleware
// Store user progress in database
```

### Analytics (Phase 3)
```typescript
// Track user interactions
// Monitor learning progress
// Generate reports
```

### AI Features (Phase 3+)
```typescript
// Call AI endpoints for:
// - Grammar checking
// - Vocabulary extraction
// - Quiz generation
// - Pronunciation feedback
```

## File Naming Conventions

- **Pages**: lowercase (e.g., `page.tsx`)
- **Components**: PascalCase (e.g., `LessonCard.tsx`)
- **Utilities**: camelCase (e.g., `formatDuration.ts`)
- **Types**: camelCase with .ts (e.g., `types.ts`)
- **Folders**: lowercase (e.g., `/components/lesson`)

## Type Safety

### TypeScript Strict Mode
- All types explicitly defined
- No `any` types
- Props interfaces for components
- Return types for functions

### Key Types
```typescript
interface Lesson { ... }
interface VocabularyItem { ... }
interface TranscriptLine { ... }
interface QuizQuestion { ... }
```

See `lib/types.ts` for complete definitions.

## Build & Deployment

### Development
```bash
npm run dev
# Runs on http://localhost:3000
```

### Production
```bash
npm run build
npm start
```

### Environment
- Single environment configuration for phase 1
- Ready for environment variables in phase 2

## Accessibility (A11y)

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast meets WCAG AA
- Touch targets minimum 44px

---

**Architecture Version 1.0 - Phase 1**

Clean, maintainable, scalable architecture ready for backend integration in phase 2.
