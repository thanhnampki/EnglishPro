# Design System

## Color Palette

### Primary Colors
- **Primary Blue**: `#3b82f6` - Main actions, links, active states
- **Secondary Emerald**: `#10b981` - Success, confirmation, secondary actions
- **Text Primary**: `#0f172a` (slate-900) - Main text
- **Text Secondary**: `#334155` (slate-700) - Secondary text
- **Text Tertiary**: `#64748b` (slate-500) - Tertiary text
- **Background**: `#f8fafc` (slate-50) - Page background
- **Surface**: `#ffffff` - Cards, panels

### Semantic Colors
- **Success**: `#22c55e` (emerald-500) - Correct answers, completion
- **Warning**: `#f59e0b` (amber-500) - Difficult content, flags
- **Error**: `#ef4444` (rose-500) - Incorrect answers, errors
- **Info**: `#3b82f6` (blue-500) - Information, primary action

### Usage Guidelines
- Use Primary Blue for CTAs, active states, highlights
- Use Emerald for secondary actions and success states
- Use Amber for warnings and difficult flags
- Use Rose for errors and incorrect answers
- Maintain at least 4.5:1 contrast for text

## Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
```

### Type Scale
- **Display (H1)**: 48px, font-weight 700, line-height 1.2
- **Heading Large (H2)**: 32px, font-weight 700, line-height 1.3
- **Heading Medium (H3)**: 24px, font-weight 700, line-height 1.4
- **Heading Small (H4)**: 20px, font-weight 600, line-height 1.4
- **Body Large**: 18px, font-weight 400, line-height 1.6
- **Body Regular**: 16px, font-weight 400, line-height 1.6
- **Body Small**: 14px, font-weight 400, line-height 1.5
- **Label**: 12px, font-weight 600, line-height 1.5

### Line Height
- Headings: 1.2-1.4
- Body text: 1.6
- Form labels: 1.5

## Spacing Scale

All spacing follows a 6px base unit:

- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px

### Common Spacing
- Card padding: 24px (lg)
- Component padding: 12-16px (md)
- Button padding: 12px vertical, 16px horizontal
- Section gap: 32px (xl)
- Element gap: 16px (md)

## Components

### Cards
```css
border-radius: 1rem; /* rounded-2xl */
background-color: white;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* shadow-soft */
padding: 24px;
transition: box-shadow 200ms ease;
```

- Cards have soft shadows
- Hover effect increases shadow slightly
- Padding is consistent at 24px
- Border radius is 1rem (16px)

### Buttons

#### Base Style
- Minimum height: 44px (touch target)
- Border radius: 1rem
- Font weight: 600
- Transition: 200ms
- Focus ring: 2px blue-500 with offset

#### Variants

**Primary Button**
- Background: #3b82f6
- Text: white
- Hover: #2563eb (darker blue)
- Active: scale 95%

**Secondary Button**
- Background: #10b981
- Text: white
- Hover: #059669 (darker emerald)
- Active: scale 95%

**Outline Button**
- Border: 2px #e2e8f0
- Background: white
- Text: #0f172a
- Hover: #f1f5f9 (slate-100)

**Ghost Button**
- Background: transparent
- Text: #334155
- Hover: #f1f5f9 (slate-100)

#### Sizes
- **Small (sm)**: 10px height, 16px padding, 14px font
- **Medium (md)**: 12px height, 24px padding, 16px font
- **Large (lg)**: 16px height, 32px padding, 18px font

### Badges

- Padding: 4px 12px
- Border radius: full (9999px)
- Font size: 12px
- Font weight: 600

**Variants:**
- Primary: blue background, blue text
- Success: emerald background, emerald text
- Warning: amber background, amber text
- Error: rose background, rose text

### Progress Bars

- Height: 8px
- Border radius: full (9999px)
- Background: #e2e8f0 (slate-200)
- Fill: #3b82f6 (primary blue)
- Animation: smooth transition 300ms

## Shadows

```css
--shadow-soft: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
--shadow-soft-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-soft-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
```

Use soft shadows for depth without being intrusive.

## Animations

### Durations
- Fast: 150ms
- Normal: 300ms
- Slow: 500ms

### Common Animations
- Card entrance: fade-in + slide-up (300ms)
- Button click: scale 95% (150ms)
- Hover state: background transition (200ms)
- Progress bar: width transition (300ms)
- Flashcard flip: 300ms

## iPad-Specific Design

### Portrait Layout (768px)
- Single-column layout
- Full-width cards
- Bottom navigation for quick access
- Generous padding and spacing

### Landscape Layout (1024px)
- Two-column layout when appropriate
- Left: main content (lesson, transcript)
- Right: sidebar (practice panel, vocabulary, progress)
- Hide bottom navigation, show header nav
- Wider spacing for easier touch

### Touch Optimization
- Minimum touch target: 44x44px
- Button spacing: at least 12px gap
- Form inputs: 44px height
- Avoid hover-only interactions
- Provide clear visual feedback for all interactions

## Responsive Breakpoints

```css
--breakpoint-sm: 480px;
--breakpoint-md: 768px;    /* iPad portrait */
--breakpoint-lg: 1024px;   /* iPad landscape */
--breakpoint-xl: 1280px;   /* Desktop */
```

## Accessibility

### Color Contrast
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- Interactive elements: 3:1 minimum

### Focus States
- Blue ring: 2px blue-500
- Offset: 2px
- Visible and distinct from normal state

### Semantic HTML
- Use proper heading hierarchy
- Use semantic buttons and links
- Use aria-labels where necessary
- Ensure keyboard navigation works

## Dark Mode (Future)

Currently light mode only. Future versions can extend this design system to include:
- Dark backgrounds (#1a1a1a)
- Light text (#f0f0f0)
- Adjusted colors for contrast
- Reduced shadows

---

**Design System Version 1.0 - Phase 1**

This design system prioritizes clarity, accessibility, and iPad usability while maintaining a modern, calming aesthetic suitable for educational content.
