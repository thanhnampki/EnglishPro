# Quick Start Guide

## 🚀 Installation & Running

### 1. Install Dependencies
```bash
cd /Users/thanhnam/Desktop/project
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
```
http://localhost:3000
```

## 📱 Testing Responsive Design

### Chrome DevTools
1. Open DevTools (F12)
2. Click device toggle (⌘+Shift+M on Mac)
3. Select "iPad" or custom dimensions:
   - **iPad Portrait**: 768px × 1024px
   - **iPad Landscape**: 1024px × 768px

### URLs to Test
- `http://localhost:3000` - Dashboard
- `http://localhost:3000/lessons` - Lesson list
- `http://localhost:3000/lessons/lesson-1` - Lesson detail
- `http://localhost:3000/practice/shadowing` - Shadowing practice
- `http://localhost:3000/vocabulary` - Vocabulary review
- `http://localhost:3000/flashcards` - Flashcard practice
- `http://localhost:3000/quiz` - Quiz page

## 🎯 Key Files to Understand

### Start Here
1. **README.md** - Project overview
2. **AGENTS.md** - Development guidelines (CRITICAL)
3. **docs/product-requirements.md** - Feature list

### Code Files
- **app/page.tsx** - Home/dashboard
- **components/ui/Button.tsx** - Base button component
- **lib/types.ts** - TypeScript interfaces
- **data/lessons.ts** - Mock data

### Styling
- **tailwind.config.js** - Tailwind theme
- **app/globals.css** - Global styles

## 🔧 Making Changes

### Adding a New Component
1. Create file in `/components/[category]/ComponentName.tsx`
2. Use `'use client'` if interactive
3. Define props interface: `ComponentNameProps`
4. Export function component
5. Use Tailwind CSS for styling

### Adding Mock Data
1. Edit `/data/lessons.ts`
2. Add to existing arrays (LESSONS, VOCABULARY, QUIZZES)
3. Follow existing data structure

### Updating Styles
1. Use Tailwind classes in JSX
2. Add custom theme to `tailwind.config.js`
3. Avoid inline styles

## 📚 Documentation Structure

```
docs/
├── product-requirements.md  ← Start here for features
├── design-system.md         ← Design guidelines
├── architecture.md          ← Code structure
├── component-rules.md       ← Component patterns
├── naming-conventions.md    ← Code naming rules
└── future-roadmap.md        ← Phases 2-4 plan
```

## 🧪 Quality Checklist

Before committing code:
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] Responsive on iPad (768px, 1024px)
- [ ] Touch targets 44px minimum
- [ ] Component is typed
- [ ] No `any` types used
- [ ] Component < 300 lines
- [ ] Naming follows conventions
- [ ] Tailwind only (no inline styles)

## 🎨 Common Tasks

### Change Colors
Edit `lib/constants.ts` or `tailwind.config.js`

### Add New Page
1. Create folder in `app/` (e.g., `app/new-page/`)
2. Create `page.tsx` inside
3. Import layout components (AppHeader, PageContainer, BottomNavigation)
4. Build with feature components

### Add New Component
1. Create file in `components/[feature]/ComponentName.tsx`
2. Define `ComponentNameProps` interface
3. Export function component
4. Import and use in pages

### Update Mock Data
Edit `data/lessons.ts` and export new data

## 💡 Development Tips

### Use TypeScript
- Define types for props
- Use `type` instead of `interface` for unions
- Avoid `any` at all costs
- Run TypeScript: `npx tsc --noEmit`

### Component Pattern
```tsx
'use client';  // Only if interactive

interface ComponentNameProps {
  title: string;
  onClick?: () => void;
}

export function ComponentName({ title, onClick }: ComponentNameProps) {
  return (
    <div className="space-y-4">
      {/* Content */}
    </div>
  );
}
```

### Styling Pattern
```tsx
import { cn } from '@/lib/utils';

<button className={cn(
  'base-classes',
  isActive && 'active-classes',
  externalClassName
)} />
```

## 🚀 Building for Production

```bash
npm run build
npm start
```

## 📖 More Info

- **Complete docs**: See `docs/` folder
- **AI guidelines**: See `AGENTS.md`
- **Delivery summary**: See `DELIVERY.md`
- **Project structure**: See `FILE_STRUCTURE.md`

---

**Happy coding! 🎉**
