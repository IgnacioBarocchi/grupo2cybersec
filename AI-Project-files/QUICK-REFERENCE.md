# AI Presentation — Quick Reference Guide

**For slide authors, designers, and developers.**

---

## Color Palette (copy-paste ready)

```
Primary Dark:     #1a3a52  (dark blue background)
White:            #ffffff  (light background)
Accent Blue:      #4a90e2  (emphasis, calls-to-action)
Gray Dark:        #2c3e50  (alternative dark bg, contrast text)
Gray Medium:      #7f8c8d  (metadata, secondary text)
Gray Light:       #ecf0f1  (subtle bg, dividers)
```

CSS variable names:
```
--color-azul-base
--color-blanco
--color-azul-claro
--color-gris-oscuro
--color-gris-medio
--color-gris-claro
```

---

## Font: IBM Plex Sans

| Use         | Weight | Size   | Line Height |
|-------------|--------|--------|-------------|
| Big stat    | 700    | 72–96px| 1.0         |
| Slide title | 700    | 48–64px| 1.05        |
| Subtitle    | 600    | 32–40px| 1.1         |
| Main text   | 400    | 20–24px| 1.6         |
| Small text  | 400    | 16–18px| 1.65        |
| Metadata    | 500    | 12–14px| 1.4         |
| Fine print  | 400    | 10–12px| 1.5         |

**Minimum on classroom TV: 18px body text**

---

## Five Slide Templates

### 1. Data (Dark Blue + White + Accent)
**Best for:** Statistics, research findings, key numbers
```
Background:  azul-base (dark)
Accent bar:  3px blue, left edge
Title:       headline-lg white
Big number:  headline-xl, blue accent
Explanation: body-lg white
Source:      caption gray, bottom
```

### 2. Concept (Light + Dark Text)
**Best for:** Definitions, explaining terms, processes
```
Background:  white
Eyebrow:     optional label blue
Title:       headline-md dark
Body:        body-lg dark
Highlight:   inline accent color on key terms
```

### 3. Comparison (Gray Base)
**Best for:** Side-by-side comparisons, before/after
```
Background:  gris-oscuro (dark gray)
Title:       headline-lg white
Left column: body-md white
Right column:body-md white
Divider:     vertical line, gray-claro
```

### 4. Process (Light Base with Numbers)
**Best for:** Steps, stages, workflow
```
Background:  white
Title:       headline-lg dark
Steps:       numbered list, each with description
Numbers:     headline-md accent blue
```

### 5. Section Break (Minimal, Dark)
**Best for:** New section, chapter break, transition
```
Background:  azul-base (dark)
Title:       headline-xl white
Subtitle:    body-lg blue (optional)
Decoration:  thin horizontal line (optional)
```

---

## Copy Rules (Argentine Spanish)

✅ **DO:**
- Use voseo: _vos podés_, _mirá_, _pensá_
- Write clearly and precisely
- Connect ideas: _por eso_, _sin embargo_, _además_
- Respect audience intelligence
- Use title case for headlines, sentence case for body

❌ **DON'T:**
- Use Peninsular Spanish (_tú_, _vosotros_)
- Write hype language (_¡increíble!_, _¡rápido!_)
- Use slang (_che_, _boludo_, _posta_)
- Use exclamation marks in data slides
- Write without connectors between sentences

**Example:**
```
✅ "El 80% de los datos se usan en entrenamiento. 
    Sin embargo, el 20% restante determina cómo el modelo 
    se comporta en el mundo real."

❌ "80% de datos en entrenamiento. 20% en validación. 
    ¡Importante!"
```

---

## Safe Zone & Spacing

**On TV, don't put critical content outside 8% margin from edge.**

```
Margin all sides:       8%
Title to body gap:      32px
Body-to-body gap:       24px
Section gap:            40px
Accent bar width:       3px
Max text per slide:     6–8 lines
```

---

## Component Props Cheat Sheet

### DataSlide
```jsx
<DataSlide data={{
  id: "slide-001",
  content: {
    title: "Title goes here",
    stat: "37%",
    body: "Explanation of the stat.",
    source: "Source, Year"
  }
}} />
```

### ConceptSlide
```jsx
<ConceptSlide data={{
  id: "slide-002",
  content: {
    eyebrow: "Optional",
    title: "Concept title",
    body: "Full explanation here.",
    highlightTerms: ["term1", "term2"]
  }
}} />
```

### ComparisonSlide
```jsx
<ComparisonSlide data={{
  id: "slide-003",
  content: {
    title: "Title",
    columnALabel: "Left",
    columnBLabel: "Right",
    columnA: ["Item 1", "Item 2"],
    columnB: ["Item A", "Item B"]
  }
}} />
```

### ProcessSlide
```jsx
<ProcessSlide data={{
  id: "slide-004",
  content: {
    title: "Process Title",
    steps: [
      { number: 1, title: "First", description: "Do this" },
      { number: 2, title: "Second", description: "Then this" }
    ]
  }
}} />
```

### SectionBreakSlide
```jsx
<SectionBreakSlide data={{
  id: "slide-005",
  content: {
    title: "New Section",
    subtitle: "Optional subtitle"
  }
}} />
```

---

## Keyboard Navigation

```
Arrow Left   ← Previous slide
Arrow Right  → Next slide
Space        → Next slide
P            → Toggle presenter mode
B            → Black screen
W            → White screen
Esc          → Exit presenter mode
```

---

## CSS Variables (Copy-Paste)

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
  --text-headline-xl: 72px;
  --text-headline-lg: 48px;
  --text-headline-md: 32px;
  --text-body-lg: 20px;
  --text-body-md: 16px;
  --text-label: 12px;
  --text-caption: 10px;

  /* Spacing */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 40px;
  --space-2xl: 48px;

  --safe-margin: 8%;
}
```

---

## Color Contrast (WCAG)

| Text Color | Background    | Ratio | Grade  |
|-----------|----------------|-------|--------|
| white     | azul-base      | 9.2:1 | AAA ✅ |
| azul-base | white          | 5.4:1 | AAA ✅ |
| azul-claro| white          | 4.6:1 | AA ✅  |
| white     | gris-oscuro    | 8.9:1 | AAA ✅ |

**Always test on the actual classroom TV with room lighting.**

---

## Dos and Don'ts

### Layout
✅ Left-align body text  
✅ Center single-line stats  
✅ Generous whitespace  
✅ 8% safe margin  
❌ Justified text  
❌ Centered paragraphs  
❌ Cropped text at edges  

### Typography
✅ IBM Plex Sans only  
✅ Min 18px for body on TV  
✅ Line height 1.5+ for body  
✅ Sentence case for body  
❌ Serif fonts  
❌ Tiny fonts  
❌ ALL CAPS in body text  

### Colors
✅ Dark + white contrast  
✅ Accent used once per slide  
✅ One of the 4 valid combos  
✅ Solid colors only  
❌ Neon or bright colors  
❌ Gradients  
❌ Color transparency tricks  
❌ More than one accent  

### Copy
✅ Argentine Spanish (es_AR)  
✅ Voseo (_vos podés_)  
✅ Clear and precise  
✅ Logical connectors  
❌ Peninsular Spanish  
❌ Slang or informal  
❌ Hype language  
❌ Emojis in text  

---

## File Paths

```
src/components/composition/slides/       ← Slide templates
src/styles/theme.css                     ← Design tokens
data/presentations/default.json          ← Slide content
public/fonts/                            ← IBM Plex Sans files
```

---

## Import Statement (React)

```typescript
import { DataSlide } from '@/components/composition/slides/DataSlide';
import { ConceptSlide } from '@/components/composition/slides/ConceptSlide';
import { ComparisonSlide } from '@/components/composition/slides/ComparisonSlide';
import { ProcessSlide } from '@/components/composition/slides/ProcessSlide';
import { SectionBreakSlide } from '@/components/composition/slides/SectionBreakSlide';
```

---

## Classroom TV Testing

- [ ] View from 3+ meters: readable?
- [ ] Room lights on: colors still clear?
- [ ] High contrast mode (TV brightness max): any halos?
- [ ] Safe zone: text inside 8% margin?
- [ ] Text cutoff: all visible at 16:9?
- [ ] Font load: any shift on first load?

---

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Text too small | Use 20px minimum for TV display |
| Gradient background | Use solid color from palette |
| Wrong Spanish (tú/vosotros) | Use vos/ustedes (es_AR) |
| Centered body text | Always left-align paragraphs |
| Multiple accents | Use blue accent only, once per slide |
| Text outside safe zone | Add 8% margin all sides |
| Wrong font | IBM Plex Sans only (not Helvetica, not Inter) |
| No source attribution | Always cite data (bottom-left, caption size) |

---

## Quick Links

**Main docs:**
- 📄 ai-presentation-brand-guide.md (full spec)
- 📄 implementation-spec.md (code details)
- 📄 this file (quick reference)

**GitHub:** https://github.com/IgnacioBarocchi/grupo2cybersec

---

**Version:** 1.0 · **Updated:** 2026-04-27
