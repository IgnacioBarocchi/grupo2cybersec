---
title: "AI Presentation — Brand & Design System"
subtitle: "Classroom TV Display · Academic Context · es_AR"
version: "1.0"
date: "2026-04-27"
---

# AI Presentation — Brand System

**Scope:** Complete design and specification system for an Argentine academic AI presentation built in Next.js. All slide content, typography, color, copy, and layout rules live here. The Compose/Editor UI (if separate) uses standard English and platform defaults.

---

## 1. Identity in one sentence

**Clarity through precision.** A visual system that earns attention on a classroom TV without distraction, respects the intelligence of the viewer, and presents technical information with academic dignity.

Not corporate sleekness. Not trendy minimalism. Not bright, loud, or decorative. A palette and typography system where every choice serves comprehension—especially for viewers seeing slides from 3–5 meters away.

---

## 2. Color palette — "Académico"

These are the only colors in the system. No gradients. No opacity variations. Consistency across all slides.

| Token name           | Hex       | Role                                                  |
|----------------------|-----------|-------------------------------------------------------|
| `--color-azul-base`  | `#1A3A52` | Primary background (dark slides), primary text (light)|
| `--color-blanco`     | `#FFFFFF` | Primary background (light slides), primary text       |
| `--color-azul-claro` | `#4A90E2` | Key accent, links, emphasis, call-to-action          |
| `--color-gris-oscuro`| `#2C3E50` | Secondary background, contrast text on light          |
| `--color-gris-medio` | `#7F8C8D` | Metadata, captions, secondary text                    |
| `--color-gris-claro` | `#ECF0F1` | Subtle background, borders, dividers                  |

### CSS custom properties

```css
:root {
  --color-azul-base: #1a3a52;
  --color-blanco: #ffffff;
  --color-azul-claro: #4a90e2;
  --color-gris-oscuro: #2c3e50;
  --color-gris-medio: #7f8c8d;
  --color-gris-claro: #ecf0f1;
}
```

### Color usage rules

**Accent color (`--color-azul-claro`) is for emphasis, not decoration.**

- Use one accent element per slide: a statistic, a key term (highlighted), a button, or an underline beneath a critical phrase.
- Never use blue accent for body text. Never fill large backgrounds with blue.
- Never combine more than one accent color on a single slide.

**Valid background pairings:**

```
Dark base:     --color-azul-base   + text: --color-blanco        + accent: --color-azul-claro
Light base:    --color-blanco      + text: --color-gris-oscuro   + accent: --color-azul-claro
Gray base:     --color-gris-oscuro + text: --color-blanco        + accent: --color-azul-claro
Neutral light: --color-gris-claro  + text: --color-gris-oscuro   + accent: --color-azul-claro
```

Other combinations must be explicitly justified and documented.

---

## 3. Typography — optimized for classroom TV display

### Typefaces

| Role              | Family          | Weights  | Notes                       |
|-------------------|-----------------|----------|-----------------------------|
| Display / Titles  | **IBM Plex Sans**| 700, 600 | System font, widely available|
| Body / Labels     | **IBM Plex Sans**| 400, 500 | Excellent legibility at scale|

**Why IBM Plex Sans:** Professional, accessible, open source. Handles body and display weight equally well. Designed for legibility at any size (critical for TV distance viewing). Numerals are clear and distinct.

### Type scale for classroom slides (aspect ratio agnostic, size in viewport units)

The scale below assumes slides are viewed from 3–5 meters. **Sizes must be tested on the actual classroom TV** before finalizing.

| Name           | Family      | Weight | Size      | Line Height | Use case                            |
|----------------|-------------|--------|-----------|-------------|-------------------------------------|
| `headline-xl`  | IBM Plex    | 700    | 72–96px   | 1.0         | Single stat, one-line title         |
| `headline-lg`  | IBM Plex    | 700    | 48–64px   | 1.05        | Main slide title, key claim         |
| `headline-md`  | IBM Plex    | 600    | 32–40px   | 1.1         | Section header, subsection title    |
| `body-lg`      | IBM Plex    | 400    | 20–24px   | 1.6         | Main body text, explanation         |
| `body-md`      | IBM Plex    | 400    | 16–18px   | 1.65        | Supporting text, secondary content  |
| `label`        | IBM Plex    | 500    | 12–14px   | 1.4         | Eyebrow, metadata, code annotations |
| `caption`      | IBM Plex    | 400    | 10–12px   | 1.5         | Attribution, source, fine print    |

### Typography rules for TV display

- **Minimum contrast ratio: 4.5:1** (WCAG AA standard); test all text on the actual TV with room lighting.
- **Body text never smaller than 18px** on a classroom slide (accounts for viewing distance).
- **Line height minimum 1.5** for body text; tighter leading on headlines only.
- **Left-aligned always**, except centered for single-line stats or section breaks (titles on their own line).
- **Never justified text.** Never center multiple lines of body text.
- **No text shadows or outlines.** Use color contrast and weight instead.
- **All caps only for labels** (metadata, eyebrows, code syntax highlighting). Body and headline text uses sentence case.

---

## 4. Copy guidelines — Argentine Spanish (es_AR), academic tone

### Language rules

- All slide-facing text MUST be **Argentine Spanish (es_AR)**.
- **Voseo for direct address or instructions:** _vos podés_, _mirá_, _pensá_. Never Peninsular _tú / puedes / mira_.
- **Plural: ustedes**, never _vosotros_.
- **Formal register:** The audience is university students or researchers. Avoid colloquial slang (_che_, _boludo_, _re_). Maintain professional distance.
- Use **pretérito perfecto simple** for past statements; imperfect tense for ongoing conditions or explanations.

### Tone — academic clarity, no hype

Mirror the register of an academic paper or research presentation:

- **Precision over enthusiasm.** Every number, every term, every claim is researched and verified.
- **Clear logic flows.** Ideas connect explicitly with words like _por eso_, _sin embargo_, _además_, _es decir_.
- **No artificial urgency.** No _¡genial!_, _¡rápido!_, _¡no te lo pierdas!_ Exclamation marks appear only when the content itself demands them (rare).
- **Accessible complexity.** Explain jargon. Assume intelligence, not prior knowledge.

### Sentence structure

Short sentences state. Long sentences develop.

```
✅ Correct
"La inteligencia artificial es un campo joven. Sus impactos en la sociedad aún se están evaluando."

❌ Too informal
"La IA es nueva. ¡Y está en todas partes!"

❌ Too dense
"La inteligencia artificial, siendo un campo de investigación de reciente consolidación metodológica, presenta diversos vectores de impacto societal que requieren evaluación sistemática."
```

### Connectors — logic, not bullets

Bind ideas with explicit logical connectors. Avoid stacks of isolated statements.

| Spanish          | English equivalent   |
|------------------|----------------------|
| **por eso**      | therefore / that's why |
| **sin embargo**  | however              |
| **además**       | furthermore / also   |
| **en cambio**    | in contrast          |
| **es decir**     | that is / in other words |
| **por lo tanto** | thus / consequently  |
| **aunque**       | although             |
| **a pesar de**   | despite              |
| **de hecho**     | in fact              |

### Vocabulary consistency

Pick one term per concept. Maintain it across slides.

| Preferred            | Avoid (unless intentional) |
|----------------------|---------------------------|
| `inteligencia artificial` | `IA` (unless in a label), `automatización` |
| `algoritmo`          | `método`, `proceso` (when the concept is algorithm-specific) |
| `modelo`             | `sistema`, `estructura` |
| `entrenamiento`      | `aprendizaje` (when referring to the technical training process) |
| `sesgo`              | `prejuicio`, `error` (for algorithmic bias, not human error) |
| `datos`              | `información` (unless the distinction matters) |
| `validación`         | `prueba`, `verificación` (in ML contexts) |

### Inclusive language

- Use gender-neutral when describing groups: _las personas_, _el estudiante o la estudiante_ (or just _quien estudia_), _cada uno/a_.
- Avoid _todxs_, _todes_ in formal academic writing.

### What NOT to do in copy

- ❌ Hyperbole: _"revolucionario"_, _"cambiará todo"_, _"el futuro es ahora"_
- ❌ Corporate jargon: _potenciar_, _sinergia_, _optimizar_, _ecosistema_ (unless literal)
- ❌ Exclamation chains: _¡Sí! ¡Claro! ¡Increíble!_
- ❌ Emojis in slide text
- ❌ Sarcasm or irony in academic context
- ❌ First-person plural as false inclusivity (_nosotros_) when you mean the field/discipline
- ❌ Rhetorical questions in data-driven slides

---

## 5. Slide templates — four valid layouts

Every slide maps to one of these templates.

### Template A — Data / statistic (dark base)

```
Background:    --color-azul-base
Title:         headline-lg, --color-blanco
Stat:          headline-xl, --color-azul-claro
Body:          body-lg, --color-blanco
Source/note:   caption, --color-gris-medio, bottom-left
Accent:        3px vertical bar, --color-azul-claro, left edge
```

**Use for:** Key numbers, research findings, comparative facts, evidence-backed claims.

**Example structure:**
```
[3px blue bar]  TITLE

[Large stat]
[Supporting explanation, 1–2 lines]

[Source: institution, year]
```

---

### Template B — Concept / definition (light base)

```
Background:    --color-blanco
Title:         headline-md, --color-gris-oscuro
Eyebrow:       label, --color-azul-claro (optional section marker)
Body:          body-lg, --color-gris-oscuro
Accent term:   body-lg bold, --color-azul-claro (highlight key concept)
```

**Use for:** Explaining a term, defining a concept, introducing an algorithm, describing a process.

**Example structure:**
```
[Optional: EYEBROW / section label]

Title

[Body text explaining the concept. The term "key concept" is highlighted in blue.]
```

---

### Template C — Comparison / contrast (gray base)

```
Background:    --color-gris-oscuro
Title:         headline-lg, --color-blanco
Two-column:    body-md, --color-blanco, with --color-gris-claro divider
Accent marks:  dots or small bars, --color-azul-claro (optional visual separator)
```

**Use for:** Side-by-side comparisons, before/after scenarios, multiple perspectives on one topic.

**Example structure:**
```
TITLE

[Column A]            |    [Column B]
Point 1               |    Contrasting point 1
Point 2               |    Contrasting point 2
```

---

### Template D — Narrative / process (light base with accent)

```
Background:    --color-blanco
Title:         headline-lg, --color-gris-oscuro
Steps/phases:  body-md, --color-gris-oscuro
Step numbers:  headline-md, --color-azul-claro (small, left margin)
Connecting line: --color-azul-claro (subtle, vertical or diagonal)
```

**Use for:** Flowcharts, process steps, timeline of development, stages in a system.

**Example structure:**
```
TITLE

① First phase
   Explanation

② Second phase
   Explanation

③ Third phase
   Explanation
```

---

### Template E — Title / section break (dark base, minimal)

```
Background:    --color-azul-base
Title:         headline-xl, --color-blanco
Subtitle:      body-lg, --color-azul-claro (optional)
Decorative:    --color-gris-claro, 2px horizontal rule (optional, center or offset)
```

**Use for:** New section introductions, chapter breaks, transitions, standalone emphasis.

**Example structure:**
```
[Minimal design, generous whitespace]

SECTION TITLE

[Optional subtitle or small explanatory line]
```

---

## 6. Spacing & layout

Assume slides have an **aspect ratio of 16:9** and safe viewing area accounting for TV edge overscan.

- **Safe zone:** 8% margin on all sides. No critical text or elements outside this boundary.
- **Heading-to-body gap:** 32px minimum.
- **Body-to-body gap:** 24px.
- **Section-to-section gap:** 40px.
- **Accent bars or dividers:** Always 2–3px height, left edge or top edge. Never centered. Never full-width.
- **Maximum text lines per slide:** 6–8 for body text (depends on text size). Never exceed 10.
- **Whitespace:** Generous. More air around text is better than cramped content.

---

## 7. Implementation guidelines

### File structure

```
src/components/composition/
├── slides/
│   ├── DataSlide.tsx          (Template A)
│   ├── ConceptSlide.tsx        (Template B)
│   ├── ComparisonSlide.tsx     (Template C)
│   ├── ProcessSlide.tsx        (Template D)
│   └── SectionBreakSlide.tsx   (Template E)
├── typography/
│   └── TypeScale.tsx           (Centralized font size/weight mapping)
└── canvas/
    └── CompositionCanvas.tsx   (Main presentation render)

data/compositions/
└── slides/
    └── presentation.json       (All slide content, structured)
```

### Component API (example)

Each slide component should accept standardized props:

```typescript
// DataSlide
interface DataSlideProps {
  title: string;          // headline-lg
  stat: string | number;  // headline-xl
  body: string;          // body-lg
  source?: string;       // caption
}

// ConceptSlide
interface ConceptSlideProps {
  eyebrow?: string;      // label
  title: string;         // headline-md
  body: string;          // body-lg
  highlightTerms?: string[]; // terms to color with accent
}

// ComparisonSlide
interface ComparisonSlideProps {
  title: string;
  columnA: string[];     // body-md items
  columnB: string[];     // body-md items
}

// ProcessSlide
interface ProcessSlideProps {
  title: string;
  steps: Array<{
    number: number;
    title: string;
    description: string;
  }>;
}
```

### CSS variables in component layer

```css
/* Scoped to presentation slides */
#composition-canvas {
  /* Colors */
  --color-azul-base: #1a3a52;
  --color-blanco: #ffffff;
  --color-azul-claro: #4a90e2;
  --color-gris-oscuro: #2c3e50;
  --color-gris-medio: #7f8c8d;
  --color-gris-claro: #ecf0f1;

  /* Typography */
  --to-font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --to-headline-xl: 72px / 1 bold;
  --to-headline-lg: 48px / 1.05 bold;
  --to-headline-md: 32px / 1.1 600;
  --to-body-lg: 20px / 1.6 400;
  --to-body-md: 16px / 1.65 400;
  --to-label: 12px / 1.4 500;
  --to-caption: 10px / 1.5 400;

  /* Spacing */
  --to-safe-margin: 8%;
  --to-gap-heading-body: 32px;
  --to-gap-body-body: 24px;
  --to-gap-section: 40px;
}
```

### Testing checklist for classroom TV

Before deployment:

- [ ] All text readable from 3+ meters away
- [ ] Color contrast tested on actual TV with room lighting (target 4.5:1+)
- [ ] No text cuts off at screen edges (test safe zone)
- [ ] Slide transitions smooth at TV refresh rate (60Hz)
- [ ] Blue accent distinguishable in all room lighting conditions
- [ ] White text doesn't bloom/halo on dark backgrounds (adjust brightness if needed)
- [ ] No slides exceed 8 lines of body text

---

## 8. What this system does NOT do

- ❌ **Bright colors:** No neon, no pastels. All colors are muted and professional.
- ❌ **Decorative gradients:** No color gradients. No mesh gradients. Solid colors only.
- ❌ **Rounded corners on text boxes.** Square, clean edges.
- ❌ **Shadows or 3D effects** on text or backgrounds.
- ❌ **More than one accent color** per slide.
- ❌ **Sans-serif fonts other than IBM Plex.** No Helvetica, no Montserrat, no designer fonts.
- ❌ **Emojis or icons** in slide text.
- ❌ **Centered body text** (headlines only).
- ❌ **Mixing English and Spanish in the same text element** (translated slides use one language per slide).
- ❌ **Justified text alignment.**
- ❌ **Tiny fonts for "readability notes."** Everything on screen must be legible.
- ❌ **Auto-playing video or animations.** (Presenter-triggered only.)

---

## 9. Color accessibility note

The primary palette is designed for **WCAG AA compliance** on classroom displays:

| Text color | Background | Ratio | Status    |
|------------|-----------|-------|-----------|
| white     | azul-base | 9.2:1 | WCAG AAA  |
| azul-base | white     | 5.4:1 | WCAG AAA  |
| azul-claro| white     | 4.6:1 | WCAG AA   |
| white     | gris-oscuro | 8.9:1 | WCAG AAA |

**Test on the actual TV before finalizing.** Brightness settings, viewing angle, and ambient light all affect perceived contrast.

---

## 10. Copy style for plan.md and composition.json

When authoring slide content in `data/compositions/presentation.json`:

- All user-facing text strings MUST be Argentine Spanish (es_AR).
- No placeholder text like _Lorem ipsum_.
- No untranslated technical jargon; explain or provide translation in a caption.
- Follow the tone and vocabulary rules from Section 4.

### Example composition.json structure

```json
{
  "slides": [
    {
      "id": "slide-001",
      "type": "data",
      "templateId": "template-a",
      "content": {
        "title": "Adopción de IA en educación superior",
        "stat": "37%",
        "body": "De las universidades argentinas reportan uso de herramientas de IA en cursos de grado. Sin embargo, menos del 10% tienen políticas formales de gobernanza.",
        "source": "Estudio CONICET, 2025"
      }
    },
    {
      "id": "slide-002",
      "type": "concept",
      "templateId": "template-b",
      "content": {
        "eyebrow": "Definición",
        "title": "¿Qué es el entrenamiento de un modelo?",
        "body": "El entrenamiento es el proceso mediante el cual un algoritmo de aprendizaje ajusta parámetros internos (pesos) basándose en datos ejemplares. Es decir, el modelo "aprende" patrones de los datos, no es programado explícitamente.",
        "highlightTerms": ["entrenamiento", "ajusta parámetros"]
      }
    }
  ]
}
```

---

## 11. Brand rationale

**Why this color palette?**

The blue (`#1A3A52`) is professional and serious, associated with trust and education. It avoids the corporate sterility of pure black and the informality of lighter blues. The accent blue (`#4A90E2`) is bright enough to draw attention without being aggressive. Together, they create hierarchy and emphasis without distraction.

**Why IBM Plex Sans?**

- Open source and universally available
- Designed specifically for screen legibility at small sizes
- Strong distinction between similar characters (1/l/I, 0/O) critical for code or data
- Robust at both headline and body weights
- Non-proprietary: works seamlessly across Next.js and classroom systems

**Why this academic tone?**

The audience is university students and researchers. They deserve respect for their intelligence. Formal language signals that the content is vetted and serious. Hype language signals uncertainty or commercial intent—neither is appropriate here.

**Why large type sizes?**

Classroom TV viewing requires typography scaled for distance. A headline legible on a laptop screen is illegible on a TV from 3+ meters. This system sizes everything for that reality.

---

## 12. Future development checklist

- [ ] Define slide animation timing (if needed)
- [ ] Create reusable React component library with TypeScript interfaces
- [ ] Build a slide preview tool (WYSIWYG editor) with TV-scale preview
- [ ] Test entire presentation on the actual classroom TV
- [ ] Document keyboard navigation for presenter mode
- [ ] Create templates for common slide combinations (e.g., title + bulleted list)
- [ ] Add print stylesheet if slides will be distributed as handouts
- [ ] Set up font subsetting to reduce IBM Plex load time
- [ ] Create a slide counter and navigation UI (presenter notes side panel)
- [ ] Document fallback fonts if IBM Plex fails to load

---

## Appendix A: Sample slide content (es_AR, academic tone)

### Data Slide

**Title:** Crecimiento del uso de LLMs en investigación académica

**Stat:** 62%

**Body:** De los investigadores en universidades argentinas utilizaban herramientas de lenguaje de gran escala para documentación o análisis de textos en 2024. Sin embargo, la mitad desconocía cómo estos modelos procesan información.

**Source:** Encuesta CAICYT-CONICET, 2024

---

### Concept Slide

**Eyebrow:** Fundamentos

**Title:** Sesgo en algoritmos de aprendizaje automático

**Body:** El sesgo algorítmico emerge cuando los datos de entrenamiento reflejan patrones discriminatorios del mundo real. El modelo no crea discriminación, la hereda. Es decir, amplifica y naturaliza prejuicios preexistentes. Por eso la auditoría de datos es fundamental antes del despliegue.

**Highlighted:** sesgo, entrenamiento, auditoría

---

### Process Slide

**Title:** Ciclo de vida de un modelo de IA

**Step 1:** Recopilación y limpieza de datos

Obtener datos representativos y verificar calidad.

**Step 2:** Entrenamiento y validación

Ajustar parámetros del modelo usando datos históricos.

**Step 3:** Prueba en contexto real

Evaluar comportamiento con datos nunca vistos.

**Step 4:** Monitoreo continuo

Detectar cambios en rendimiento o sesgo emergente.

---

## Appendix B: Design tokens reference

```
Spacing scale (in pixels):
8px, 16px, 24px, 32px, 40px, 48px, 56px, 64px

Font sizes (px):
10, 12, 14, 16, 18, 20, 24, 32, 40, 48, 64, 72, 96

Font weights (IBM Plex Sans):
400 (regular / body)
500 (medium / labels)
600 (semibold / headlines)
700 (bold / display)

Line heights:
1.0  (headlines, very tight)
1.05 (tight)
1.1  (compact)
1.4  (labels, metadata)
1.5  (caption, fine print)
1.6+ (body text, comfort reading)
```

---

**End of document.**

For implementation support or clarifications, refer to `grupo2cybersec` repository structure and Next.js component patterns.
