# Product Requirements Document

## Product Vision

Create a beautiful, modern English learning web application that makes it easy and enjoyable to practice English through interactive lessons, speaking practice, vocabulary building, and quizzes.

## Target Users

- **Primary**: English learners (beginner to advanced)
- **Device Priority**: iPad users (both portrait and landscape)
- **Secondary**: Mobile and desktop users

## MVP Scope (Phase 1)

### In Scope
- Beautiful, clean UI
- Fast, responsive interface
- iPad-first responsive design
- Interactive lesson content
- Shadowing practice (no voice recording yet)
- Vocabulary learning tools
- Flashcard practice
- Mini quizzes
- Local mock data
- Learning progress tracking

### Out of Scope (Phase 1)
- Authentication and user accounts
- Database storage
- Voice recording and AI pronunciation scoring
- Payment and subscriptions
- File uploads
- AI tutor or grammar checker
- Advanced analytics

## Core Learning Flow

1. **Discover** - Browse lessons by level, topic, duration
2. **Learn** - Read lesson title, duration, topic; listen to audio/video
3. **Study** - Review vocabulary and transcript
4. **Practice** - Do shadowing practice sentence by sentence
5. **Review** - Study vocabulary through flashcards
6. **Test** - Complete mini quiz to check understanding
7. **Track** - See daily progress and learning streaks

## Key Features

### 1. Dashboard
- Welcome message
- Continue learning card (shows current lesson)
- Daily progress summary
  - Lessons completed today
  - Vocabulary reviewed today
  - Flashcards practiced today
- Quick action grid linking to all features

### 2. Lessons
- List view with lesson cards
- Each card shows:
  - Title
  - Description
  - Level (beginner/intermediate/advanced)
  - Topic (interview/travel/daily-life)
  - Duration
  - Progress bar
  - Thumbnail/emoji

### 3. Lesson Detail
- Full lesson information
- Lesson media player (audio/video)
- Transcript with timestamps
- Vocabulary preview
- CTA to start shadowing practice
- Two-column layout on iPad landscape

### 4. Shadowing Practice
- Show current sentence clearly
- Show Vietnamese translation
- Play button for audio
- Playback speed control (0.75x, 1x, 1.25x)
- Previous/Next navigation
- Mark as practiced / Mark as difficult
- Progress counter (X of Y sentences)

### 5. Vocabulary
- List all vocabulary items
- Each item shows:
  - English word
  - IPA pronunciation
  - Vietnamese meaning
  - Example sentence
  - Example translation
  - Topic tag
  - Difficulty level
- Filter by level
- Filter by topic
- Support for bookmarking (local state)

### 6. Flashcards
- Show flashcard with flip animation
- Front: English word
- Back: Vietnamese meaning + example
- Known / Review Again buttons
- Navigation between cards
- Progress tracking
  - Total cards
  - Known cards
  - Cards to review
  - Difficulty breakdown

### 7. Quiz
- Multiple choice questions
- Fill-in-the-blank questions
- Show one question at a time
- Immediate feedback (correct/incorrect)
- Explanation for each answer
- Result summary with score
- Ability to retake quiz

### 8. Progress Tracking
- Simple mock progress system
- Daily statistics
- Lesson completion percentage
- Vocabulary reviewed count
- Flashcard practice count
- Quiz scores

## Design Requirements

### Visual Design
- Clean, modern, calm aesthetic
- Light background
- Soft shadows
- Rounded corners (2xl = 1rem)
- Clear typography hierarchy
- Gentle color palette

### iPad Optimization
- **Portrait (768px)**: Single-column clean layout
- **Landscape (1024px)**: Two-column layout
  - Left: Content (lesson, transcript, questions)
  - Right: Practice panel or sidebar
- Large touch targets (44px minimum)
- Large, readable text (16-18px body)

### Accessibility
- Clear button labels
- Good color contrast
- Semantic HTML
- Keyboard accessible
- Touch-friendly spacing

### Performance
- Fast page loads
- Smooth animations
- Optimized images
- Lazy loading where appropriate
- No unnecessary JavaScript

## Mock Data Structure

### Lesson
- id, title, description
- level, topic, durationMinutes
- thumbnail (emoji/icon)
- mediaType (audio/video), mediaUrl
- progress (0-100%)
- transcriptLines array
- vocabulary array (IDs)
- quizQuestions array (IDs)

### TranscriptLine
- id, order
- startTime, endTime
- text (English)
- translation (Vietnamese)
- vocabularyIds
- isPracticed, isDifficult

### VocabularyItem
- id, word, ipa
- meaningVi
- example, exampleMeaningVi
- topic, level
- difficulty (1-3)

### QuizQuestion
- id, type (multiple-choice/fill-blank)
- question
- options, answer
- explanation

## Success Metrics for Phase 1

- ✅ Responsive layout works on iPad portrait and landscape
- ✅ All pages load quickly
- ✅ Touch interactions feel smooth
- ✅ UI looks polished and professional
- ✅ Users can follow complete learning flow
- ✅ Code is clean, maintainable, well-typed
- ✅ Mock data is realistic and sufficient for demo
- ✅ No console errors or warnings

## Next Phase Considerations

Phase 2 should focus on:
- Real database with user progress
- User authentication
- Persistent storage
- Admin lesson management
- Analytics

Phase 3 and beyond:
- Voice recording
- AI pronunciation feedback
- AI grammar checking
- Subscription model
- More advanced analytics
