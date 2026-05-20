# English Learning Web App

A beautiful, fast, and iPad-first web application for learning English through interactive lessons, shadowing practice, vocabulary drills, flashcards, and mini quizzes.

## 🎯 Project Vision

Build a polished, modern English learning platform that prioritizes:
- **Beautiful UI** - Clean, calm, and friendly design
- **Fast Response** - Optimized performance and smooth interactions
- **iPad-First Design** - Perfect experience on tablets, with responsive layouts for mobile and desktop
- **Learning Focus** - Interactive practice flows for speaking, vocabulary, and comprehension
- **Local-First** - Mock data for phase 1, ready to integrate with backend in phase 2

## ✨ Phase 1 Features

### Pages & Features

1. **Dashboard** - Welcome screen with quick access and daily progress tracking
2. **Lessons** - Browse and select lessons by level, topic, or difficulty
3. **Lesson Detail** - View lesson content, transcript, and vocabulary
4. **Shadowing Practice** - Sentence-by-sentence audio practice with:
   - Playback speed control (0.75x, 1x, 1.25x)
   - Sentence marking (practiced, difficult)
   - Navigation between sentences
   - Progress tracking

5. **Vocabulary** - Review vocabulary with:
   - Word definitions and IPA pronunciation
   - Vietnamese translations
   - Example sentences
   - Filtering by level and topic
   - Bookmark functionality (local state)

6. **Flashcards** - Spaced repetition learning with:
   - Flip animation
   - Known/Review toggle
   - Deck progress tracking
   - Difficulty levels

7. **Quiz** - Mini quizzes with:
   - Multiple choice questions
   - Immediate feedback
   - Explanations
   - Result summary

### Current Content

- 3 sample lessons (Interview, Airport, Restaurant)
- 14 vocabulary items with examples
- 6 quiz questions with explanations
- Realistic English learning scenarios

## 🛠 Tech Stack

### Core
- **Next.js 14** (App Router) - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Accessible UI components
- **Lucide React** - Icons
- **Motion** - Smooth animations

### Data & State
- **Local mock data** - TypeScript files (no database)
- **React state** - UI state management
- **No external dependencies** for state (ready for Zustand if needed later)

### Quality Tools
- **TypeScript strict mode** - Type checking
- **ESLint ready** - Code quality
- **Prettier ready** - Code formatting

## 📱 Responsive Design

### Breakpoints
- **Mobile** - < 480px
- **iPad Portrait** - ~768px (primary target)
- **iPad Landscape** - ~1024px (preferred for detail views)
- **Desktop** - > 1024px

### Design Principles
- Touch-friendly buttons (minimum 44px)
- Large readable text (16-18px)
- Clear visual hierarchy
- Bottom navigation on mobile
- Two-column layouts on iPad landscape
- Smooth, subtle animations

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd english-learning-web

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
english-learning-web/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Dashboard home
│   ├── globals.css        # Global styles
│   ├── lessons/           # Lesson pages
│   ├── practice/          # Practice pages
│   ├── vocabulary/        # Vocabulary page
│   ├── flashcards/        # Flashcard page
│   └── quiz/              # Quiz page
│
├── components/             # Reusable React components
│   ├── ui/                # Base UI components
│   ├── layout/            # Layout components
│   ├── dashboard/         # Dashboard components
│   ├── lesson/            # Lesson components
│   ├── shadowing/         # Shadowing components
│   ├── vocabulary/        # Vocabulary components
│   ├── flashcard/         # Flashcard components
│   └── quiz/              # Quiz components
│
├── data/                   # Mock data files
│   └── lessons.ts         # Lessons, vocabulary, quizzes
│
├── lib/                    # Utilities and types
│   ├── types.ts           # TypeScript interfaces
│   ├── constants.ts       # App constants
│   └── utils.ts           # Helper functions
│
├── docs/                   # Documentation
│   ├── product-requirements.md
│   ├── design-system.md
│   ├── architecture.md
│   ├── component-rules.md
│   ├── naming-conventions.md
│   ├── prompt-templates.md
│   └── future-roadmap.md
│
├── AGENTS.md              # AI assistant guidelines
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── next.config.js         # Next.js configuration
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3b82f6) - Main actions
- **Secondary**: Emerald (#10b981) - Success actions
- **Accent**: Amber (#f59e0b) - Warnings
- **Error**: Rose (#ef4444) - Errors
- **Text**: Slate-900, Slate-700, Slate-500
- **Background**: Slate-50, White

### Typography
- **Font**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Body**: 16-18px
- **Headings**: 24-48px
- **Line height**: 1.5-1.6

### Components
- **Cards**: Rounded-2xl, soft shadow, white background
- **Buttons**: 44px minimum touch target, rounded-2xl
- **Spacing**: 6px, 12px, 24px increments
- **Animations**: 150-300ms duration, subtle easing

## 📚 Documentation Files

- **docs/product-requirements.md** - Product vision and feature list
- **docs/design-system.md** - Visual design guidelines
- **docs/architecture.md** - Technical architecture
- **docs/component-rules.md** - Component guidelines
- **docs/naming-conventions.md** - Naming standards
- **docs/prompt-templates.md** - Reusable prompts for development
- **docs/future-roadmap.md** - Phase 2+ features

## 🔮 Future Roadmap

### Phase 2 - Backend Integration
- Database (Prisma + PostgreSQL)
- User authentication
- Save progress
- User profiles

### Phase 3 - AI Features
- AI grammar checking
- AI vocabulary extraction
- AI-generated quizzes
- Pronunciation feedback

### Phase 4 - Advanced Features
- Voice recording
- Pronunciation scoring
- Payment/subscription
- Analytics dashboard

## 🤝 Contributing

This project follows specific coding standards and AI agent guidelines. See:
- **AGENTS.md** - AI assistant behavior and rules
- **docs/coding-standards.md** - Code style guidelines
- **docs/component-rules.md** - Component architecture rules

## 📝 License

Private project.

## 🙋 Support

For questions or issues, refer to the documentation in `/docs` or contact the development team.

---

**Built with ❤️ for English learners. Phase 1 Focus: Beautiful UI, Fast Response, iPad-First Design.**
