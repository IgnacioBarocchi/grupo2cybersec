# Implementation Specification — AI Presentation System

**Target:** Next.js + React component architecture for classroom TV slide presentation

**Status:** Ready for development sprint planning

---

## 1. Project setup requirements

### Dependencies

```json
{
  "react": "^18.0.0",
  "next": "^14.0.0",
  "typescript": "^5.0",
  "tailwindcss": "^3.0" // OR vanilla CSS with design tokens
}
```

### Optional (for enhanced UX)

```json
{
  "framer-motion": "^10.0" // Slide transitions
}
```

### Fonts

IBM Plex Sans must be self-hosted or imported from Google Fonts.

**Option A: Google Fonts (simplest)**

```typescript
// app/layout.tsx
import { IBM_Plex_Sans } from 'next/font/google';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap', // Prevent layout shift
});

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR" className={ibmPlexSans.className}>
      <body>{children}</body>
    </html>
  );
}
```

**Option B: Self-hosted (better control)**

Download IBM Plex Sans woff2 files from fontsource.org or IBM's repository. Store in `public/fonts/`.

```css
/* styles/fonts.css */
@font-face {
  font-family: 'IBM Plex Sans';
  src: url('/fonts/IBMPlexSans-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'IBM Plex Sans';
  src: url('/fonts/IBMPlexSans-Medium.woff2') format('woff2');
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: 'IBM Plex Sans';
  src: url('/fonts/IBMPlexSans-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-display: swap;
}

@font-face {
  font-family: 'IBM Plex Sans';
  src: url('/fonts/IBMPlexSans-Bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
```

---

## 2. Design token system

### CSS Custom Properties (global)

Create `styles/theme.css` and import in `app/layout.tsx`:

```css
:root {
  /* Colors */
  --color-azul-base: #1a3a52;
  --color-blanco: #ffffff;
  --color-azul-claro: #4a90e2;
  --color-gris-oscuro: #2c3e50;
  --color-gris-medio: #7f8c8d;
  --color-gris-claro: #ecf0f1;

  /* Typography */
  --font-family: 'IBM Plex Sans', system-ui, -apple-system, sans-serif;

  /* Type scale */
  --text-headline-xl: 72px;
  --text-headline-lg: 48px;
  --text-headline-md: 32px;
  --text-body-lg: 20px;
  --text-body-md: 16px;
  --text-label: 12px;
  --text-caption: 10px;

  /* Line heights */
  --lh-tight: 1;
  --lh-compact: 1.1;
  --lh-normal: 1.6;
  --lh-relaxed: 1.65;

  /* Spacing */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 40px;
  --space-2xl: 48px;

  /* Responsive safe zone (for 16:9 slides) */
  --safe-margin: 8%;

  /* Accent bar */
  --accent-bar-width: 3px;
}

/* Prefer dark mode by default for classroom */
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
  }
}
```

### Tailwind configuration (if using Tailwind)

```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        'azul-base': '#1a3a52',
        'blanco': '#ffffff',
        'azul-claro': '#4a90e2',
        'gris-oscuro': '#2c3e50',
        'gris-medio': '#7f8c8d',
        'gris-claro': '#ecf0f1',
      },
      fontSize: {
        'headline-xl': ['72px', { lineHeight: '1' }],
        'headline-lg': ['48px', { lineHeight: '1.05' }],
        'headline-md': ['32px', { lineHeight: '1.1' }],
        'body-lg': ['20px', { lineHeight: '1.6' }],
        'body-md': ['16px', { lineHeight: '1.65' }],
        'label': ['12px', { lineHeight: '1.4' }],
        'caption': ['10px', { lineHeight: '1.5' }],
      },
      spacing: {
        'safe': '8%',
      },
      fontFamily: {
        'sans': ['IBM Plex Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
};
```

---

## 3. Component architecture

### Directory structure

```
src/
├── app/
│   ├── layout.tsx          (Root layout with fonts, theme)
│   ├── page.tsx            (Home / slide navigator)
│   └── slides/
│       └── [...id]/
│           └── page.tsx    (Individual slide view)
│
├── components/
│   ├── composition/
│   │   ├── Slide.tsx                 (Base slide wrapper)
│   │   ├── SlideContainer.tsx        (Canvas container)
│   │   ├── slides/
│   │   │   ├── DataSlide.tsx         (Template A)
│   │   │   ├── ConceptSlide.tsx      (Template B)
│   │   │   ├── ComparisonSlide.tsx   (Template C)
│   │   │   ├── ProcessSlide.tsx      (Template D)
│   │   │   └── SectionBreakSlide.tsx (Template E)
│   │   ├── typography/
│   │   │   ├── TypeScale.tsx         (Type scale utilities)
│   │   │   ├── Heading.tsx           (Semantic heading wrapper)
│   │   │   └── Body.tsx              (Semantic body wrapper)
│   │   ├── elements/
│   │   │   ├── AccentBar.tsx         (3px colored bar)
│   │   │   ├── Eyebrow.tsx           (Label component)
│   │   │   └── HighlightedText.tsx   (Inline accent styling)
│   │   └── canvas/
│   │       └── CompositionCanvas.tsx (Main presentation renderer)
│   │
│   ├── ui/
│   │   ├── Navigation.tsx     (Slide navigation UI)
│   │   ├── PresenterMode.tsx  (Notes panel, slide counter)
│   │   └── KeyboardShortcuts.tsx
│   │
│   └── styles/
│       ├── theme.css         (CSS variables)
│       ├── typography.css    (Font definitions)
│       └── slides.css        (Slide-specific layouts)
│
├── lib/
│   ├── types.ts              (TypeScript interfaces)
│   ├── slides-registry.ts    (Slide template registry)
│   └── constants.ts          (Magic numbers, breakpoints)
│
├── data/
│   ├── presentations/
│   │   └── default.json      (Slide content structure)
│   └── examples/
│       └── sample-slides.json
│
└── public/
    └── fonts/
        ├── IBMPlexSans-Regular.woff2
        ├── IBMPlexSans-Medium.woff2
        ├── IBMPlexSans-SemiBold.woff2
        └── IBMPlexSans-Bold.woff2
```

---

## 4. Type definitions

### Main types (`lib/types.ts`)

```typescript
// Base slide interface
export interface BaseSlide {
  id: string;
  templateId: string;
  type: 'data' | 'concept' | 'comparison' | 'process' | 'section-break';
  order: number;
  notes?: string; // Presenter notes (not shown on screen)
}

// Template A: Data slide
export interface DataSlide extends BaseSlide {
  type: 'data';
  content: {
    title: string;
    stat: string | number;
    body: string;
    source?: string;
  };
}

// Template B: Concept slide
export interface ConceptSlide extends BaseSlide {
  type: 'concept';
  content: {
    eyebrow?: string;
    title: string;
    body: string;
    highlightTerms?: string[];
  };
}

// Template C: Comparison slide
export interface ComparisonSlide extends BaseSlide {
  type: 'comparison';
  content: {
    title: string;
    columnALabel: string;
    columnBLabel: string;
    columnA: string[];
    columnB: string[];
  };
}

// Template D: Process slide
export interface ProcessSlide extends BaseSlide {
  type: 'process';
  content: {
    title: string;
    steps: Array<{
      number: number;
      title: string;
      description: string;
    }>;
  };
}

// Template E: Section break
export interface SectionBreakSlide extends BaseSlide {
  type: 'section-break';
  content: {
    title: string;
    subtitle?: string;
  };
}

// Union type
export type Slide =
  | DataSlide
  | ConceptSlide
  | ComparisonSlide
  | ProcessSlide
  | SectionBreakSlide;

// Presentation document
export interface Presentation {
  id: string;
  title: string;
  language: 'es-AR';
  slides: Slide[];
  metadata?: {
    author?: string;
    date?: string;
    institution?: string;
  };
}

// Presenter state
export interface PresentationState {
  currentSlideIndex: number;
  isPresenterMode: boolean;
  isPaused: boolean;
  totalSlides: number;
}
```

---

## 5. Core components

### Base Slide wrapper (`components/composition/Slide.tsx`)

```typescript
import React from 'react';
import { Slide as SlideType } from '@/lib/types';
import styles from './Slide.module.css';

interface SlideProps {
  slide: SlideType;
  isActive?: boolean;
}

export function Slide({ slide, isActive = false }: SlideProps) {
  return (
    <section
      className={styles.slide}
      data-slide-id={slide.id}
      data-slide-type={slide.type}
      aria-live="polite"
      role="region"
    >
      {/* Rendered by specific template component */}
    </section>
  );
}
```

### DataSlide component (`components/composition/slides/DataSlide.tsx`)

```typescript
import React from 'react';
import { DataSlide as DataSlideType } from '@/lib/types';
import { Heading } from '../typography/Heading';
import { Body } from '../typography/Body';
import { AccentBar } from '../elements/AccentBar';
import styles from './DataSlide.module.css';

interface DataSlideProps {
  data: DataSlideType;
}

export function DataSlide({ data }: DataSlideProps) {
  const { content } = data;

  return (
    <div className={`${styles.container} bg-azul-base text-blanco`}>
      <AccentBar position="left" color="azul-claro" />

      <Heading level="h1" size="lg" className={styles.title}>
        {content.title}
      </Heading>

      <div className={styles.statSection}>
        <Heading level="div" size="xl" className={`text-azul-claro ${styles.stat}`}>
          {content.stat}
        </Heading>
      </div>

      <Body size="lg" className={styles.body}>
        {content.body}
      </Body>

      {content.source && (
        <p className={`text-gris-medio ${styles.source}`}>
          {content.source}
        </p>
      )}
    </div>
  );
}
```

### Module styles (`components/composition/slides/DataSlide.module.css`)

```css
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: var(--safe-margin);
  min-height: 100vh;
  width: 100%;
  position: relative;
  font-family: var(--font-family);
}

.title {
  font-size: var(--text-headline-lg);
  font-weight: 700;
  line-height: var(--lh-tight);
  margin-bottom: var(--space-lg);
}

.statSection {
  margin: var(--space-xl) 0 var(--space-lg) 0;
}

.stat {
  font-size: var(--text-headline-xl);
  font-weight: 700;
  line-height: var(--lh-tight);
  color: var(--color-azul-claro);
}

.body {
  font-size: var(--text-body-lg);
  line-height: var(--lh-normal);
  max-width: 80%;
  margin-bottom: auto;
}

.source {
  font-size: var(--text-caption);
  color: var(--color-gris-medio);
  margin-top: var(--space-xl);
  align-self: flex-start;
}
```

### Typography wrappers

```typescript
// components/composition/typography/Heading.tsx
import React from 'react';

interface HeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'div';
  size: 'xl' | 'lg' | 'md';
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export function Heading({
  level: Level = 'h1',
  size,
  children,
  className = '',
  color = '',
}: HeadingProps) {
  const sizeClass = {
    xl: 'text-headline-xl',
    lg: 'text-headline-lg',
    md: 'text-headline-md',
  }[size];

  const Component = Level !== 'div' ? Level : 'div';

  return (
    <Component
      className={`${sizeClass} font-bold ${color} ${className}`}
      style={{
        fontFamily: 'var(--font-family)',
        fontWeight: size === 'xl' || size === 'lg' ? 700 : 600,
      }}
    >
      {children}
    </Component>
  );
}

// components/composition/typography/Body.tsx
import React from 'react';

interface BodyProps {
  size: 'lg' | 'md';
  children: React.ReactNode;
  className?: string;
}

export function Body({ size, children, className = '' }: BodyProps) {
  const sizeClass = {
    lg: 'text-body-lg',
    md: 'text-body-md',
  }[size];

  return (
    <p
      className={`${sizeClass} ${className}`}
      style={{
        fontFamily: 'var(--font-family)',
        fontWeight: 400,
        lineHeight: size === 'lg' ? '1.6' : '1.65',
      }}
    >
      {children}
    </p>
  );
}
```

### Accent bar element (`components/composition/elements/AccentBar.tsx`)

```typescript
import React from 'react';
import styles from './AccentBar.module.css';

interface AccentBarProps {
  position: 'left' | 'top' | 'right' | 'bottom';
  color?: string;
  size?: 'sm' | 'md';
}

export function AccentBar({
  position = 'left',
  color = 'azul-claro',
  size = 'md',
}: AccentBarProps) {
  const sizeClass = {
    sm: styles.small,
    md: styles.medium,
  }[size];

  const positionClass = {
    left: styles.positionLeft,
    top: styles.positionTop,
    right: styles.positionRight,
    bottom: styles.positionBottom,
  }[position];

  return (
    <div
      className={`${styles.bar} ${positionClass} ${sizeClass}`}
      style={{ backgroundColor: `var(--color-${color})` }}
      aria-hidden="true"
    />
  );
}
```

---

## 6. Content data structure

### Presentation JSON (`data/presentations/default.json`)

```json
{
  "id": "ai-intro-2026",
  "title": "Introducción a la Inteligencia Artificial",
  "language": "es-AR",
  "metadata": {
    "author": "Grupo 2 - Ciberseguridad",
    "institution": "Facultad de Ingeniería, Universidad Nacional",
    "date": "2026-04-27"
  },
  "slides": [
    {
      "id": "slide-001",
      "type": "section-break",
      "templateId": "template-e",
      "order": 1,
      "content": {
        "title": "Inteligencia Artificial",
        "subtitle": "Fundamentos, aplicaciones, y desafíos éticos"
      },
      "notes": "Slide de portada. Permitir 5 segundos."
    },
    {
      "id": "slide-002",
      "type": "data",
      "templateId": "template-a",
      "order": 2,
      "content": {
        "title": "Crecimiento del sector IA global",
        "stat": "$196 mil millones",
        "body": "Mercado global de IA en 2024. Se proyecta crecimiento anual del 38% hacia 2030. Sin embargo, menos del 15% de las empresas latinoamericanas ha implementado IA operativa.",
        "source": "Statista, 2024; IDC Latinoamérica"
      },
      "notes": "Enfatizar el contraste entre crecimiento global y adopción regional."
    },
    {
      "id": "slide-003",
      "type": "concept",
      "templateId": "template-b",
      "order": 3,
      "content": {
        "eyebrow": "Definición fundamental",
        "title": "¿Qué es la inteligencia artificial?",
        "body": "La inteligencia artificial es la capacidad de una máquina para realizar tareas que normalmente requerirían inteligencia humana. Esto incluye aprendizaje de patrones, reconocimiento, toma de decisiones, y procesamiento de lenguaje natural. Es decir, sistemas que mejoran su desempeño a través de la experiencia.",
        "highlightTerms": ["capacidad", "aprendizaje"]
      },
      "notes": "Mantener simple. No entrar en subcategorías (narrow vs general)."
    }
  ]
}
```

---

## 7. Navigation and presenter mode

### Slide navigation (`components/ui/Navigation.tsx`)

```typescript
import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
}

export function Navigation({ currentSlide, totalSlides }: NavigationProps) {
  const router = useRouter();

  const handlePrevious = useCallback(() => {
    if (currentSlide > 0) {
      router.push(`/slides/${currentSlide - 1}`);
    }
  }, [currentSlide, router]);

  const handleNext = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      router.push(`/slides/${currentSlide + 1}`);
    }
  }, [currentSlide, totalSlides, router]);

  // Keyboard shortcuts
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === ' ') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handlePrevious, handleNext]);

  return (
    <nav className="slide-nav">
      <button onClick={handlePrevious} disabled={currentSlide === 0}>
        ← Anterior
      </button>

      <span>
        {currentSlide + 1} / {totalSlides}
      </span>

      <button onClick={handleNext} disabled={currentSlide === totalSlides - 1}>
        Siguiente →
      </button>
    </nav>
  );
}
```

### Keyboard shortcuts

```
Arrow Left  → Previous slide
Arrow Right → Next slide
Space       → Next slide
P           → Toggle presenter mode
N           → Next (alternative)
B           → Blank screen (black)
W           → Blank screen (white)
Esc         → Exit presenter mode
```

---

## 8. Testing checklist

### Unit tests

- [ ] `DataSlide` renders stat and body correctly
- [ ] `HighlightedText` applies color to specified terms
- [ ] `Navigation` disables previous/next buttons at boundaries
- [ ] All type definitions export correctly

### Integration tests

- [ ] Presentation loads from JSON and renders slide sequence
- [ ] Keyboard navigation advances slides
- [ ] All CSS variables resolve correctly
- [ ] Fonts load without layout shift

### Visual regression

- [ ] All five templates match the spec document
- [ ] Color contrast meets WCAG AA (test on actual TV)
- [ ] No text truncates at 16:9 aspect ratio
- [ ] Zoom to 150% on TV view — all text still readable

### TV display testing

- [ ] View from 3+ meters: all text readable
- [ ] Ambient room lighting: colors distinguish correctly
- [ ] TV brightness/contrast settings: test default and extreme ranges
- [ ] No text bleeds off safe zone at 16:9
- [ ] Transitions smooth (no jank on 60Hz refresh)

---

## 9. Deployment considerations

### Environment variables

```bash
# .env.local
NEXT_PUBLIC_PRESENTATION_ID=ai-intro-2026
NEXT_PUBLIC_LANGUAGE=es-AR
NEXT_PUBLIC_TV_SAFE_MARGIN=8%
```

### Build optimization

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // For static export if needed
  },
  experimental: {
    optimizePackageImports: ['@/components'],
  },
};

module.exports = nextConfig;
```

### Performance targets

- First paint: < 1 second
- Slide transition: < 200ms
- Font load: no visible layout shift (use `font-display: swap`)
- Total bundle size: < 500KB

---

## 10. Future enhancements

**Phase 2:**
- [ ] Speaker notes side panel
- [ ] Live timer (configurable presentation duration)
- [ ] Slide preview grid (all slides at once)
- [ ] Print stylesheet for handouts
- [ ] PDF export capability

**Phase 3:**
- [ ] Real-time annotation tools (for interactive presentations)
- [ ] Slide animation presets
- [ ] Multiple presentation formats (horizontal/vertical)
- [ ] Slide templates editor UI

---

## Quick start

```bash
# Clone and install
git clone https://github.com/IgnacioBarocchi/grupo2cybersec.git
cd grupo2cybersec
npm install

# Create theme file
touch src/styles/theme.css
# (copy CSS variables from section 2)

# Create first component
touch src/components/composition/slides/DataSlide.tsx
# (copy from section 5)

# Add slide data
touch data/presentations/default.json
# (copy from section 6)

# Dev server
npm run dev
# Visit http://localhost:3000

# Deploy to classroom TV
npm run build
npm start
```

---

**Document version:** 1.0  
**Last updated:** 2026-04-27  
**Maintained by:** Grupo 2 - Ciberseguridad
