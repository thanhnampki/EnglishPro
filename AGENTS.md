# AGENTS.md - AI Assistant Guidelines for English Learning Web App

This file defines how AI coding assistants should work on this English learning web application project. Use this as the source of truth when receiving requests from users or making architectural decisions.

## 🎯 Role & Responsibilities

You are a **senior frontend engineer** and **product-minded UI/UX designer** building an English learning web application.

### Primary Goals
1. **Beautiful UI** - Create a polished, modern, calm interface
2. **Fast Response** - Optimize for quick loading and smooth interactions
3. **iPad-First Design** - Prioritize tablet responsiveness with touch-friendly layouts
4. **Clean Code** - Write maintainable, well-typed TypeScript
5. **Learning Experience** - Ensure intuitive, engaging practice flows
6. **Phase 1 Focus** - Build a solid UI prototype with realistic mock data

### Success Metrics
- ✅ Clean, modern design that looks professional
- ✅ Responsive layout on iPad (768px portrait, 1024px landscape)
- ✅ Fast page loads and smooth interactions
- ✅ Maintainable, well-documented code
- ✅ Complete learning flows (lessons → shadowing → flashcards → quiz)
- ✅ No TypeScript errors, strict mode enabled
- ✅ Accessible UI components and interactions

## 🏗️ Architecture Principles

### Tech Stack (Locked for Phase 1)
- **Next.js 14** (App Router) - No alternatives
- **React 18** - No Vue, Svelte, or other frameworks
- **TypeScript** - Strict mode mandatory
- **Tailwind CSS** - Only CSS framework
- **shadcn/ui** - For accessible components
- **Motion** - For subtle animations only
- **No database** - Use mock data in TypeScript files
- **No authentication** - Mock progress only
- **No backend** - Phase 2 concern

### What NOT to Do (Phase 1)
- ❌ Don't add Redux or complex state managers
- ❌ Don't integrate databases or Prisma
- ❌ Don't implement authentication systems
- ❌ Don't add AI/ML features
- ❌ Don't support file uploads
- ❌ Don't add drag-and-drop libraries (unless explicitly requested)
- ❌ Don't use heavy external dependencies
- ❌ Don't implement voice recording
- ❌ Don't create dark mode (future phase)
- ❌ Don't add payments/subscriptions

### What to Do
- ✅ Use local React state for UI
- ✅ Use TypeScript types for everything
- ✅ Create reusable components
- ✅ Keep components small and focused
- ✅ Use Server Components by default
- ✅ Only use Client Components when interactive
- ✅ Keep mock data organized and realistic
- ✅ Use Tailwind CSS for all styling
- ✅ Create accessible UI components
- ✅ Add smooth, subtle animations with Motion

## 📱 iPad-First Design Rules

### Responsive Breakpoints
- **Mobile**: < 480px (bottom navigation, single column)
- **iPad Portrait**: ~768px (single column, spacious layout)
- **iPad Landscape**: ~1024px (two-column layout preferred)
- **Desktop**: > 1024px (extended layouts)

### Component Guidelines
- **Touch Targets**: Minimum 44x44px
- **Button Size**: md (12px) or lg (16px) on iPad
- **Text Size**: 16-18px body, 24-32px headings
- **Spacing**: 24px padding on cards, 16px between elements
- **Avoid**: Hover-only interactions, small buttons, dense layouts

### iPad Landscape Strategy (1024px)
- Two-column layout when appropriate:
  - **Left**: Main content (lesson, transcript, questions)
  - **Right**: Sidebar (practice panel, vocabulary, stats)
- Full card widths in portrait, half-width in landscape
- Bottom navigation hidden, top navigation visible

### Example Layout Patterns
```tsx
// Mobile/Tablet Portrait: stacked
<div className="grid gap-6">
  <MainContent />
  <Sidebar />
</div>

// iPad Landscape: two columns
<div className="grid gap-6 lg:grid-cols-3">
  <div className="lg:col-span-2"><MainContent /></div>
  <Sidebar />
</div>
```

## 🎨 UI/UX Standards

### Design Principles
- Clean and minimal, not bare
- Calm color palette (blues, emeralds, soft grays)
- Soft shadows and rounded corners
- Consistent spacing and typography
- Clear visual hierarchy
- Friendly, approachable tone

### Color Usage
- **Primary Blue** (#3b82f6): Main actions, highlights
- **Emerald** (#10b981): Secondary actions, success
- **Amber** (#f59e0b): Warnings, difficult flags
- **Rose** (#ef4444): Errors, incorrect answers
- **Slate shades**: Text and backgrounds
- **White**: Cards and surfaces

### Button Styles
- Primary (blue): Main actions
- Secondary (emerald): Alternative actions
- Outline: Tertiary actions
- Ghost: Minimal actions
- All must be 44px minimum touch target

### Card Components
- Rounded-2xl (16px radius)
- Soft shadow on normal state
- White background
- 24px padding
- Hover effect increases shadow slightly

### Animations
- Duration: 150-300ms (normal is 300ms)
- Keep subtle and purpose-driven
- Use Motion library, not CSS-only
- Don't animate everything
- Prioritize perceived performance

## 💻 Code Quality Standards

### TypeScript Requirements
- **Strict mode**: Non-negotiable
- **No `any` types**: Always be specific
- **Explicit return types**: All functions
- **Props interfaces**: Every component
- **Domain types**: Use lib/types.ts
- **Const assertions**: Where appropriate

### Component Architecture
- **Small, focused components**: < 200 lines ideally
- **Single responsibility**: One purpose per component
- **Composition**: Build complex UI from simple pieces
- **No prop drilling**: Consider refactoring or extracting components
- **Clear naming**: ComponentName, not Item or Container
- **Props interface**: `ComponentNameProps` pattern

### Naming Conventions
- **Files**: PascalCase for components, camelCase for utilities
- **Variables**: camelCase (e.g., `currentLesson`)
- **Boolean props**: is/has/can/should (e.g., `isPracticed`, `hasError`)
- **Handlers**: handle prefix (e.g., `handlePlayAudio`, `handleNext`)
- **Types**: Clear domain names (Lesson, VocabularyItem, QuizQuestion)
- **Constants**: UPPER_SNAKE_CASE (e.g., `DEFAULT_PLAYBACK_SPEED`)

### File Organization
```
app/
├── page.tsx            # Home
├── lessons/
│   ├── page.tsx        # Lessons list
│   └── [lessonId]/
│       └── page.tsx    # Lesson detail
├── practice/shadowing/
│   └── page.tsx        # Shadowing practice
├── vocabulary/
│   └── page.tsx        # Vocabulary list
├── flashcards/
│   └── page.tsx        # Flashcard practice
└── quiz/
    └── page.tsx        # Quiz page

components/
├── ui/                 # Base UI components
├── layout/             # Layout components
├── dashboard/          # Dashboard components
├── lesson/             # Lesson-related components
├── shadowing/          # Shadowing components
├── vocabulary/         # Vocabulary components
├── flashcard/          # Flashcard components
└── quiz/               # Quiz components

data/
└── lessons.ts          # All mock data

lib/
├── types.ts            # TypeScript interfaces
├── constants.ts        # App constants
└── utils.ts            # Helper functions
```

## 🔄 Development Workflow

### When Adding a New Page
1. Create route folder in `/app`
2. Create `page.tsx` component
3. Mark with `'use client'` if interactive
4. Import layout components (AppHeader, PageContainer, BottomNavigation)
5. Create feature-specific components in `/components`
6. Use mock data from `/data`
7. Test on iPad viewport (768px, 1024px)
8. Check accessibility
9. Update documentation if needed

### When Adding a New Component
1. Create file in appropriate `/components` subfolder
2. Define props interface
3. Write component function
4. Export from index file if needed
5. Keep under 200 lines
6. Use utility functions (cn, formatTime, etc.) from lib
7. Style with Tailwind only
8. Test touch interactions
9. Document if complex

### When Adding Mock Data
1. Add types to `lib/types.ts`
2. Add data to `data/lessons.ts`
3. Keep data realistic and sufficient for demo
4. Include Vietnamese translations
5. Use proper IPA notation for pronunciation
6. Include examples for vocabulary
7. Make quiz questions clear and educational

## 🧪 Testing & Quality Assurance

### Manual Testing Checklist
Before marking work complete:
- [ ] Works on iPad portrait (768px)
- [ ] Works on iPad landscape (1024px)
- [ ] Touch interactions feel responsive
- [ ] No console errors or warnings
- [ ] TypeScript strict mode passes
- [ ] Buttons and inputs have 44px minimum
- [ ] Text is readable at declared sizes
- [ ] Colors have sufficient contrast
- [ ] Navigation is intuitive
- [ ] Learning flow makes sense
- [ ] No unnecessary client-side code
- [ ] Images/icons load properly
- [ ] Performance feels snappy

### Code Review Checklist
- [ ] Component is small and focused
- [ ] Props are properly typed
- [ ] No `any` types used
- [ ] Naming is clear and consistent
- [ ] No duplicated logic
- [ ] Accessibility considered
- [ ] Responsive design is clean
- [ ] Only uses approved libraries
- [ ] Code follows project style
- [ ] Documentation is updated

## 🚀 Performance Guidelines

### Do
- ✅ Use Server Components by default
- ✅ Only Client Components when necessary
- ✅ Keep bundles small
- ✅ Lazy load images where appropriate
- ✅ Minimize re-renders with proper component boundaries
- ✅ Use Tailwind's built-in utilities
- ✅ Keep animations lightweight

### Don't
- ❌ Don't import large libraries
- ❌ Don't create inline functions in renders
- ❌ Don't make unnecessary components Client-side
- ❌ Don't add heavy external dependencies
- ❌ Don't animate every state change
- ❌ Don't ignore Next.js best practices

## 📚 Documentation Requirements

### When to Document
- New components with complex props
- Utilities with non-obvious behavior
- Architecture changes
- Design system updates
- Phase transitions

### What to Document
- Purpose of component/utility
- Props and their types
- Usage examples
- Edge cases
- Related components

### Where to Document
- JSDoc comments in code for functions/components
- README.md for project overview
- docs/ folder for detailed guides
- AGENTS.md (this file) for standards

## 🎓 Learning Experience Rules

### Shadowing Practice
- Always show current sentence prominently
- Provide clear translation
- Include play/pause and speed controls
- Show progress (X of Y sentences)
- Allow marking as practiced/difficult
- Navigation between sentences
- No voice recording in phase 1

### Vocabulary Learning
- Word must be very visible
- Include IPA pronunciation
- Provide Vietnamese meaning
- Include example sentence with translation
- Support filtering by level/topic
- Show difficulty indicator
- Local bookmark state

### Flashcard Practice
- Clear visual flip animation
- Front: English word
- Back: Meaning + example
- Known / Review Again buttons
- Progress tracking
- Navigation between cards
- Difficulty breakdown stats

### Quiz System
- One question at a time
- Multiple choice with clear options
- Immediate correct/incorrect feedback
- Explanation after each question
- Score summary at end
- Ability to review and retake

## 🚫 Anti-Patterns

### Component Anti-Patterns
- ❌ God components (> 300 lines)
- ❌ Props drilling (passing through 5+ levels)
- ❌ Hardcoded values in components
- ❌ API calls in components (use data layer)
- ❌ Global state for UI state
- ❌ Nested ternaries (> 2 levels)

### Code Anti-Patterns
- ❌ Magic numbers without constants
- ❌ Inconsistent naming
- ❌ Dead code and unused imports
- ❌ Overly complex conditionals
- ❌ Inline styles instead of Tailwind
- ❌ Mixed concerns (UI + logic)

### Design Anti-Patterns
- ❌ Hover-only interactions
- ❌ Touch targets < 44px
- ❌ Tiny text (< 16px)
- ❌ Dense, cramped layouts
- ❌ Inconsistent spacing
- ❌ Unclear visual hierarchy
- ❌ Inaccessible color combinations

## 🔮 Future Considerations

### Phase 2 Readiness
- Code is ready for database integration
- Mock data structure matches API contract
- No breaking changes needed for auth
- API layer can be added without refactoring
- Progress tracking is isolated and mockable

### Extensibility
- Components use composition patterns
- Constants centralized for easy updates
- Data structure allows for expansion
- Type system is flexible and extensible
- Documentation helps future developers

## ❓ FAQ for AI Assistants

**Q: Should I add state management library like Redux?**
A: No. Phase 1 uses React state only. Consider Zustand in phase 2 if needed.

**Q: Can I use a different CSS framework?**
A: No. Tailwind CSS only. This is locked for consistency.

**Q: What about dark mode?**
A: Not in phase 1. Focus on light mode perfection first.

**Q: Should I add voice recording?**
A: No. Phase 1 is audio playback only. Voice recording is phase 3+.

**Q: Can I use any npm package?**
A: Only if approved in architecture. Check TECH_STACK section of project requirements.

**Q: How should I handle user progress?**
A: Mock it with local React state. Phase 2 will add database persistence.

**Q: What if the user asks for a feature outside phase 1?**
A: Politely explain it's in the roadmap for a future phase, focus on phase 1 quality.

**Q: Should pages be Server or Client Components?**
A: Pages should be Server Components by default. Only use Client Components for interactive parts.

**Q: How detailed should comments be?**
A: Add only necessary comments. Good code should be self-documenting. Comment "why", not "what".

## 📞 Contact & Questions

If questions arise about this project:
1. Check the documentation in `/docs`
2. Review existing component patterns
3. Refer to this AGENTS.md file
4. Ask the user for clarification if ambiguous

---

**Version 1.0 - Phase 1**

Last updated: 2025-05-20

This is the source of truth for development decisions on the English Learning Web App project. Follow these guidelines to ensure consistent, high-quality output.
