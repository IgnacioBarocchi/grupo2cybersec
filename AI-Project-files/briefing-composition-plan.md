# OpenSpec: IA Presentation Composition

**Format:** OpenSpec v1.0 (markdown + JSON schema)  
**Target:** Next.js React composition engine  
**Language:** es_AR (Argentine Spanish)  
**Design System:** Académico (dark blue, white, accent blue)  
**Total slides:** 52  
**Duration:** 45 minutes  

---

## 1. Document Structure

This specification defines:
- **Slide taxonomy** (5 templates, 52 total slides across 5 sections)
- **Content structure** (semantic mapping, copy hierarchy)
- **Animation directives** (text-animate blur, stagger patterns)
- **Component API** (props, types, rendering behavior)

---

## 2. Slide Templates (formal spec)

### 2.1 Template A: Data Slide (dark blue + stat + accent)

**Purpose:** Present key statistics, research findings, evidence-backed claims.

**Structure:**
```
[Accent bar: 3px, left edge, --color-azul-claro]
[Title: headline-lg, --color-blanco]
[Stat: headline-xl, --color-azul-claro]
[Body: body-lg, --color-blanco]
[Source: caption, --color-gris-medio, bottom-left]
```

**Component interface (TypeScript):**
```typescript
interface DataSlideProps {
  id: string;
  title: string;              // Required. Headline-lg weight.
  stat: string | number;      // Required. Large accent number/term.
  body: string;               // Required. Body-lg, 1–3 sentences.
  source?: string;            // Optional. Caption-size attribution.
  accentColor?: 'azul-claro'; // Default: azul-claro. (only option for now)
}
```

**Animation:**
- Accent bar: slide-in from left, 200ms, easeOut
- Title: blur-fade, 250ms, easeInOut
- Stat: scale-up (0.8x → 1x) + opacity, 300ms, easeOut
- Body: line-by-line progressive reveal, 100ms delay between lines
- Source: fade-in, 200ms, delayed 300ms after body

**CSS Classes:**
```css
.data-slide {
  background: var(--color-azul-base);
  color: var(--color-blanco);
  position: relative;
}

.data-slide__accent-bar {
  position: absolute;
  left: 0;
  top: var(--safe-margin);
  width: var(--accent-bar-width);
  height: 40px;
  background: var(--color-azul-claro);
}

.data-slide__title {
  font-size: var(--text-headline-lg);
  font-weight: 700;
  margin-bottom: var(--space-lg);
}

.data-slide__stat {
  font-size: var(--text-headline-xl);
  font-weight: 700;
  color: var(--color-azul-claro);
  margin: var(--space-xl) 0 var(--space-lg) 0;
}

.data-slide__body {
  font-size: var(--text-body-lg);
  line-height: var(--lh-normal);
  max-width: 80%;
  margin-bottom: auto;
}

.data-slide__source {
  font-size: var(--text-caption);
  color: var(--color-gris-medio);
  margin-top: var(--space-xl);
}
```

**Example:**
```json
{
  "id": "slide-026",
  "type": "data",
  "templateId": "template-a",
  "content": {
    "title": "Nivel de adopción empresarial",
    "stat": "55%",
    "body": "De las empresas en Argentina tiene proyectos de IA en marcha. Pero solo el 13% de los trabajadores usa IA regularmente.",
    "source": "Estudios Randstad Argentina, 2024"
  }
}
```

---

### 2.2 Template B: Concept Slide (light base)

**Purpose:** Explain terms, define concepts, develop ideas, introduce processes.

**Structure:**
```
[Optional eyebrow: label, --color-azul-claro]
[Title: headline-md, --color-gris-oscuro]
[Body: body-lg, --color-gris-oscuro]
[Highlighted terms: inline accent blue]
```

**Component interface:**
```typescript
interface ConceptSlideProps {
  id: string;
  eyebrow?: string;           // Optional. Small uppercase label.
  title: string;              // Required. Headline-md weight.
  body: string;               // Required. Body-lg, can be 2–4 sentences.
  highlightTerms?: string[];  // Optional. Array of terms to color.
}
```

**Animation:**
- Eyebrow: fade-in + color shift to blue, 150ms, easeOut
- Title: blur-fade, 250ms, easeInOut
- Body: line-by-line progressive reveal, 100ms delay between lines
- Highlight terms: appear in blue as they're revealed, with subtle glow (200ms)

**CSS Classes:**
```css
.concept-slide {
  background: var(--color-blanco);
  color: var(--color-gris-oscuro);
}

.concept-slide__eyebrow {
  font-size: var(--text-label);
  font-weight: 700;
  color: var(--color-azul-claro);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: var(--space-md);
}

.concept-slide__title {
  font-size: var(--text-headline-md);
  font-weight: 600;
  margin-bottom: var(--space-lg);
}

.concept-slide__body {
  font-size: var(--text-body-lg);
  line-height: var(--lh-normal);
  max-width: 85%;
}

.concept-slide__highlight {
  color: var(--color-azul-claro);
  font-weight: 600;
}
```

**Example:**
```json
{
  "id": "slide-002",
  "type": "concept",
  "templateId": "template-b",
  "content": {
    "eyebrow": "¿De qué hablamos?",
    "title": "¿Qué es la inteligencia artificial?",
    "body": "Un conjunto de sistemas capaces de realizar tareas que típicamente requieren inteligencia humana. Esto incluye aprendizaje de patrones, reconocimiento, toma de decisiones y procesamiento de información.",
    "highlightTerms": ["inteligencia humana", "aprendizaje", "ecosistema"]
  }
}
```

---

### 2.3 Template C: Comparison Slide (gray base, two columns)

**Purpose:** Show contrasts, side-by-side comparisons, before/after scenarios, dualities.

**Structure:**
```
[Title: headline-lg, --color-blanco]
[Column A Label: body-md bold, --color-blanco]
[Column A items: body-md, --color-blanco, bulleted]
[Divider: vertical line, --color-gris-claro]
[Column B Label: body-md bold, --color-blanco]
[Column B items: body-md, --color-blanco, bulleted]
```

**Component interface:**
```typescript
interface ComparisonSlideProps {
  id: string;
  title: string;              // Required. Headline-lg.
  columnALabel: string;       // Required. Column A header.
  columnA: string[];          // Required. Array of bullet points.
  columnBLabel: string;       // Required. Column B header.
  columnB: string[];          // Required. Array of bullet points.
}
```

**Animation:**
- Title: blur-fade, 250ms, easeInOut
- Column A label: fade-in, 150ms, delayed 200ms
- Column A items: cascade in from left, 100ms stagger
- Column B label: fade-in, 150ms, delayed 400ms
- Column B items: cascade in from right, 100ms stagger

**CSS Classes:**
```css
.comparison-slide {
  background: var(--color-gris-oscuro);
  color: var(--color-blanco);
  display: flex;
  flex-direction: column;
}

.comparison-slide__title {
  font-size: var(--text-headline-lg);
  font-weight: 700;
  margin-bottom: var(--space-2xl);
}

.comparison-slide__columns {
  display: flex;
  gap: var(--space-xl);
  flex: 1;
}

.comparison-slide__column {
  flex: 1;
}

.comparison-slide__column-label {
  font-size: var(--text-body-md);
  font-weight: 700;
  margin-bottom: var(--space-lg);
  color: var(--color-azul-claro);
}

.comparison-slide__column-item {
  font-size: var(--text-body-md);
  line-height: var(--lh-relaxed);
  margin-bottom: var(--space-md);
  padding-left: var(--space-md);
  position: relative;
}

.comparison-slide__column-item::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-azul-claro);
}

.comparison-slide__divider {
  width: 1px;
  background: var(--color-gris-claro);
  margin: 0 var(--space-xl);
}
```

**Example:**
```json
{
  "id": "slide-015",
  "type": "comparison",
  "templateId": "template-c",
  "content": {
    "title": "Generaciones de IA",
    "columnALabel": "IA simbólica (1950–2000)",
    "columnA": [
      "Reglas explícitas programadas",
      "Fallan fuera de contextos controlados",
      "Experta pero frágil"
    ],
    "columnBLabel": "Machine Learning + Deep Learning (2000–hoy)",
    "columnB": [
      "Aprende patrones de datos",
      "Generaliza a casos nuevos",
      "Flexible pero a veces opaca"
    ]
  }
}
```

---

### 2.4 Template D: Process Slide (light base with numbered steps)

**Purpose:** Show sequences, timelines, step-by-step processes, numbered flows.

**Structure:**
```
[Title: headline-lg, --color-gris-oscuro]
[Step 1 number: headline-md, --color-azul-claro, left margin]
[Step 1 title: body-md bold, --color-gris-oscuro]
[Step 1 description: body-md, --color-gris-oscuro]
[Vertical connector: subtle line, --color-azul-claro]
[Step 2, Step 3, etc.: repeat]
```

**Component interface:**
```typescript
interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ProcessSlideProps {
  id: string;
  title: string;              // Required. Headline-lg.
  steps: ProcessStep[];       // Required. Array of 2–4 steps.
}
```

**Animation:**
- Title: blur-fade, 250ms, easeInOut
- Each step number: scale-up + color fade, 200ms, delayed 150ms per step
- Step title: blur-fade, 200ms, delayed after number
- Step description: fade-in, 200ms, delayed after title
- Connectors: draw effect (vertical line, 150ms)

**CSS Classes:**
```css
.process-slide {
  background: var(--color-blanco);
  color: var(--color-gris-oscuro);
}

.process-slide__title {
  font-size: var(--text-headline-lg);
  font-weight: 700;
  margin-bottom: var(--space-2xl);
}

.process-slide__steps {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.process-slide__step {
  display: flex;
  gap: var(--space-lg);
  position: relative;
}

.process-slide__step-number {
  font-size: var(--text-headline-md);
  font-weight: 700;
  color: var(--color-azul-claro);
  min-width: 50px;
  text-align: center;
}

.process-slide__step-content {
  flex: 1;
}

.process-slide__step-title {
  font-size: var(--text-body-md);
  font-weight: 700;
  margin-bottom: var(--space-sm);
}

.process-slide__step-description {
  font-size: var(--text-body-md);
  line-height: var(--lh-relaxed);
  color: var(--color-gris-medio);
}

.process-slide__connector {
  position: absolute;
  left: 25px;
  top: 60px;
  width: 2px;
  height: calc(100% + var(--space-lg));
  background: var(--color-azul-claro);
  opacity: 0.3;
}

.process-slide__step:last-child .process-slide__connector {
  display: none;
}
```

**Example:**
```json
{
  "id": "slide-010",
  "type": "process",
  "templateId": "template-d",
  "content": {
    "title": "Línea temporal: 1950–1980",
    "steps": [
      {
        "number": 1,
        "title": "1956: Conferencia de Dartmouth",
        "description": "Se establece IA como disciplina formal. John McCarthy acuña el término."
      },
      {
        "number": 2,
        "title": "1960–1970: Primeros sistemas",
        "description": "Programas simbólicos, ELIZA, demostración de teoremas."
      }
    ]
  }
}
```

---

### 2.5 Template E: Section Break (minimal, dark, centered)

**Purpose:** Mark transitions between major sections, chapter breaks, resets.

**Structure:**
```
[Title: headline-xl, --color-blanco, centered]
[Subtitle: body-lg, --color-azul-claro, centered, optional]
[Decoration: thin horizontal line, centered, optional]
```

**Component interface:**
```typescript
interface SectionBreakSlideProps {
  id: string;
  title: string;              // Required. Headline-xl.
  subtitle?: string;          // Optional. Body-lg.
  showDecorator?: boolean;    // Optional. Default: false.
}
```

**Animation:**
- Title: slide-in from top + fade, 400ms, easeInOut
- Subtitle: fade-in, 250ms, delayed 200ms
- Decorator: draw effect (horizontal line), 300ms, delayed 400ms

**CSS Classes:**
```css
.section-break-slide {
  background: var(--color-azul-base);
  color: var(--color-blanco);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}

.section-break-slide__title {
  font-size: var(--text-headline-xl);
  font-weight: 700;
  margin-bottom: var(--space-lg);
}

.section-break-slide__subtitle {
  font-size: var(--text-body-lg);
  color: var(--color-azul-claro);
  margin-bottom: var(--space-2xl);
}

.section-break-slide__decorator {
  width: 100px;
  height: 2px;
  background: var(--color-gris-claro);
  opacity: 0.5;
}
```

**Example:**
```json
{
  "id": "slide-003",
  "type": "section-break",
  "templateId": "template-e",
  "content": {
    "title": "Antecedentes",
    "subtitle": "Del pensamiento mecánico al cálculo simbólico"
  }
}
```

---

## 3. Slide Composition (full list)

Below is the complete slide registry organized by section.

### 3.1 SECTION 0: Portada (Slides 001–002)

| Slide ID | Type        | Title                          | Key Content                              |
|----------|-------------|--------------------------------|------------------------------------------|
| 001      | section-break | Inteligencia Artificial       | Subtitle: "Fundamentos, evolución..."    |
| 002      | concept     | ¿Qué es la IA?               | Eyebrow: "¿De qué hablamos?"            |

### 3.2 SECTION 1: Antecedentes (Slides 003–008)

| Slide ID | Type        | Title / Focus                  | Presenter Notes                         |
|----------|-------------|--------------------------------|------------------------------------------|
| 003      | section-break | Antecedentes                  | Contextualize long history              |
| 004      | concept     | Leibniz (1646–1716)           | Characteristica universalis             |
| 005      | concept     | Babbage & Lovelace (1810–1860)| Máquina analítica                       |
| 006      | data        | George Boole (1815–1864)      | Stat: "1847" (álgebra booleana)        |
| 007      | concept     | Turing & Wiener (1930–1950)   | Formal calculation, cybernetics         |
| 008      | concept     | Síntesis: "El negativo histórico" | Foundation of modern IA              |

### 3.3 SECTION 2: Evolución técnica (Slides 009–015)

| Slide ID | Type        | Title / Focus                | Presenter Notes                         |
|----------|-------------|------------------------------|------------------------------------------|
| 009      | section-break | Evolución técnica            | From theory to practice                 |
| 010      | process     | Timeline 1950–1980           | Dartmouth, first systems, winter       |
| 011      | process     | Timeline 1990–2010           | Resurgence, deep learning               |
| 012      | data        | Transformer (2017)           | Stat: "2017", foundational              |
| 013      | section-break | IA actual (2020–hoy)        | Foundational models                     |
| 014      | concept     | Modelos fundacionales        | Generative systems, transformers        |
| 015      | comparison  | Generaciones de IA           | Symbolic vs. ML + DL                    |

### 3.4 SECTION 3: Campos y dominios (Slides 016–024)

| Slide ID | Type        | Title / Focus                | Presenter Notes                         |
|----------|-------------|------------------------------|------------------------------------------|
| 016      | section-break | Campos y dominios            | Ecosystem of specialties                |
| 017      | concept     | Tres ejes transversales      | Prediction, generation, reasoning       |
| 018      | data        | Dominios principales         | Stat: "9+"                              |
| 019      | concept     | Medicina y ciencias de salud | Diagnostic imaging, AlphaFold            |
| 020      | concept     | Generación visual            | Diffusion, GANs, NeRFs, Midjourney      |
| 021      | concept     | Procesamiento de lenguaje    | LLMs, ChatGPT, Claude, NLP              |
| 022      | concept     | Clasificadores predictivos   | Classic ML: trees, boosting, NN         |
| 023      | data        | Investigación matemática     | Stat: "Emergente", theorem proving      |
| 024      | concept     | Robótica, economía, ciencia  | Multiple domains overview               |

### 3.5 SECTION 4: Aplicaciones en Argentina (Slides 025–034)

| Slide ID | Type        | Title / Focus                | Presenter Notes                         |
|----------|-------------|------------------------------|------------------------------------------|
| 025      | section-break | IA en Argentina              | Adoption, impact, local realities       |
| 026      | data        | Nivel de adopción empresarial| Stat: "55%", gap between decision & use |
| 027      | data        | Percepción de retraso        | Stat: "41%"                             |
| 028      | concept     | Dónde se adopta IA           | Services, finance, health, SMEs         |
| 029      | data        | Impacto en empleo            | Stat: "34%", no mass replacement yet    |
| 030      | concept     | Nuevos roles laborales       | Prompt eng., data annotation, inequality |
| 031      | data        | Impacto económico potencial  | Stat: "GPT" (general-purpose tech)     |
| 032      | concept     | Brecha digital y desigualdad | Access, education, authorship           |
| 033      | data        | Confiabilidad actual         | Stat: "Asistir, no delegar"             |
| 034      | comparison  | Percepciones de IA en sociedad | Who sees potential vs. who distrusts    |

### 3.6 SECTION 5: Síntesis (Slides 035–039)

| Slide ID | Type        | Title / Focus                | Presenter Notes                         |
|----------|-------------|------------------------------|------------------------------------------|
| 035      | section-break | Diagnóstico sintético        | Where are we?                          |
| 036      | comparison  | Dimensiones del estado actual | Tech maturity vs. real implementation   |
| 037      | data        | Cuatro preguntas clave       | Stat: "Para pensar"                     |
| 038      | concept     | IA como herramienta          | "Not destiny", responsibility ours      |
| 039      | section-break | Preguntas                    | Open the debate                         |

### 3.7 OPTIONAL: Deep Dives (Slides 040–042)

| Slide ID | Type        | Title / Focus                | Presenter Notes                         |
|----------|-------------|------------------------------|------------------------------------------|
| 040      | concept     | ¿Cómo funcionan Transformers? | Optional, if technical depth needed    |
| 041      | concept     | Sesgo algorítmico y equidad  | Optional, critical topic                |
| 042      | data        | Recursos de aprendizaje      | Optional, path forward for learning     |

---

## 4. Text Animation Directives

### 4.1 Text Blur Fade (title default)

**Library:** Magic UI `<TextAnimate>` component or Framer Motion `<motion.span>`

**Parameters:**
```javascript
{
  as: "h1",
  animation: "blurIn",    // Magic UI preset
  by: "word",             // word-by-word or line-by-line
  staggerChildren: 0.03,  // 30ms between children
  duration: 0.5           // 500ms total
}
```

**Framer Motion equivalent:**
```javascript
<motion.h1
  initial={{ filter: "blur(8px)", opacity: 0 }}
  animate={{ filter: "blur(0px)", opacity: 1 }}
  transition={{ duration: 0.25, ease: "easeInOut" }}
>
  Title text
</motion.h1>
```

### 4.2 Progressive Line Reveal (body default)

**Parameters:**
```javascript
{
  as: "p",
  animation: "slideInFromLeft",
  staggerChildren: 0.1,   // 100ms stagger
  duration: 0.3,
  delay: 0.2              // Start after title
}
```

### 4.3 Highlight Shimmer (accent terms)

**Parameters:**
```javascript
{
  initial: { color: "currentColor" },
  animate: { color: "--color-azul-claro" },
  transition: { duration: 0.2 },
  // Optional: add glow filter
  style: {
    textShadow: "0 0 10px rgba(74, 144, 226, 0.3)"
  }
}
```

### 4.4 Accent Bar Slide-in (data slides)

**Parameters:**
```javascript
{
  initial: { x: -30, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.2, ease: "easeOut" }
}
```

### 4.5 Stat Scale-up (data slides)

**Parameters:**
```javascript
{
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.3, ease: "easeOut" }
}
```

---

## 5. Component Registration

**File:** `src/lib/component-registry.tsx`

```typescript
import { DataSlide } from '@/components/composition/slides/DataSlide';
import { ConceptSlide } from '@/components/composition/slides/ConceptSlide';
import { ComparisonSlide } from '@/components/composition/slides/ComparisonSlide';
import { ProcessSlide } from '@/components/composition/slides/ProcessSlide';
import { SectionBreakSlide } from '@/components/composition/slides/SectionBreakSlide';
import { Slide } from '@/lib/types';

type SlideRendererMap = {
  [K in Slide['type']]: React.ComponentType<any>;
};

export const slideRendererMap: SlideRendererMap = {
  'data': DataSlide,
  'concept': ConceptSlide,
  'comparison': ComparisonSlide,
  'process': ProcessSlide,
  'section-break': SectionBreakSlide,
};

export function renderSlide(slide: Slide) {
  const Renderer = slideRendererMap[slide.type];
  if (!Renderer) throw new Error(`Unknown slide type: ${slide.type}`);
  return <Renderer data={slide} />;
}
```

---

## 6. Composition.json Structure (example fragment)

**File:** `data/presentations/ia-presentation.json`

```json
{
  "id": "ia-apresentacion-2026",
  "title": "Inteligencia Artificial",
  "language": "es-AR",
  "metadata": {
    "author": "Grupo 2 - Ciberseguridad",
    "institution": "Facultad de Ingeniería",
    "date": "2026-04-27",
    "estimatedDuration": "45 minutos"
  },
  "sections": [
    {
      "id": "section-0",
      "title": "Portada y Contexto",
      "slides": [
        {
          "id": "slide-001",
          "order": 1,
          "type": "section-break",
          "templateId": "template-e",
          "content": {
            "title": "Inteligencia Artificial",
            "subtitle": "Fundamentos, evolución y realidad argentina"
          },
          "animation": {
            "titleAnimation": "slideInFromTop",
            "subtitleAnimation": "fadeIn",
            "subtitleDelay": 200,
            "decoratorAnimation": "drawLine",
            "decoratorDelay": 400
          }
        },
        {
          "id": "slide-002",
          "order": 2,
          "type": "concept",
          "templateId": "template-b",
          "content": {
            "eyebrow": "¿De qué hablamos?",
            "title": "¿Qué es la inteligencia artificial?",
            "body": "Un conjunto de sistemas capaces de realizar tareas que típicamente requieren inteligencia humana. Esto incluye aprendizaje de patrones, reconocimiento, toma de decisiones y procesamiento de información. La IA no es un único método, sino un ecosistema de técnicas que se especializan según el problema.",
            "highlightTerms": ["inteligencia humana", "aprendizaje", "ecosistema"]
          },
          "animation": {
            "eyebrowAnimation": "fadeIn",
            "eyebrowDuration": 150,
            "titleAnimation": "blurIn",
            "titleDuration": 250,
            "bodyAnimation": "slideInFromLeft",
            "bodyStagger": 100,
            "bodyDelay": 200,
            "highlightAnimation": "shimmer"
          }
        }
      ]
    }
  ],
  "totalSlides": 52
}
```

---

## 7. Animation Timing Matrix

| Element Type  | Animation         | Duration | Delay   | Easing      |
|---------------|-------------------|----------|---------|-------------|
| Eyebrow       | fade + color      | 150ms    | 0ms     | easeOut     |
| Title         | blur-fade         | 250ms    | 0ms     | easeInOut   |
| Stat          | scale-up + fade   | 300ms    | 0ms     | easeOut     |
| Body (line)   | slide-in + fade   | 300ms    | 0–150ms | easeOut     |
| Highlight     | color shift       | 200ms    | varies  | easeInOut   |
| Accent bar    | slide-in          | 200ms    | 0ms     | easeOut     |
| Connector     | draw              | 150ms    | per-step| easeOut     |

---

## 8. Rendering Pipeline

**Flow:**

```
presentation.json
    ↓
[Parse composition data]
    ↓
[Map slide type → component]
    ↓
[Inject content + animation props]
    ↓
[Render slide component]
    ↓
[Mount Framer Motion animations]
    ↓
[Display slide with text-animate effects]
```

**Pseudocode:**

```typescript
// In page.tsx or slide view component
function SlidePage({ params }) {
  const presentation = loadPresentation('ia-presentation.json');
  const slideIndex = parseInt(params.id);
  const slide = presentation.slides[slideIndex];
  
  return (
    <CompositionCanvas>
      {renderSlide(slide)}
    </CompositionCanvas>
  );
}
```

---

## 9. Implementation Checklist

- [ ] Create 5 slide components (DataSlide, ConceptSlide, ComparisonSlide, ProcessSlide, SectionBreakSlide)
- [ ] Set up CSS variables (colors, typography, spacing)
- [ ] Integrate Framer Motion for animations
- [ ] Import Magic UI `<TextAnimate>` component (or implement blur-fade with Framer)
- [ ] Build component registry (slideRendererMap)
- [ ] Create composition.json with all 52 slides
- [ ] Test keyboard navigation (arrow keys, space)
- [ ] Test animations on TV (no jank, smooth 60fps)
- [ ] Verify color contrast (WCAG AA)
- [ ] Test text legibility from 3+ meters
- [ ] Build and deploy to classroom environment

---

## 10. References

**Animation libraries:**
- Magic UI: https://magicui.design/docs/components/text-animate
- Framer Motion: https://www.framer.com/motion/

**Design system:**
- See: ai-presentation-brand-guide.md (Académico palette)

**Presentation content:**
- See: PRESENTATION-PLAN.md (full slide plan with notes)

**Repository:**
- https://github.com/IgnacioBarocchi/grupo2cybersec

---

**Document Version:** 1.0  
**Status:** Ready for implementation  
**Last Updated:** 2026-04-27  
**Target Audience:** React/Next.js developers  
**Language:** es_AR · English (spec)
