# Backlog: IA deck visual refresh (analysis + work items)

**Status:** Draft for continuation.  
**Scope:** `app/inteligencia-artificial/**` only.  
**Constraint:** No imports from `app/ciberseguridad/**` and no edits under `app/ciberseguridad/**` (vertical isolation; see `openspec/changes/ai-slides-presentation/`).

---

## 1. Problem statement

The Inteligencia Artificial **deck** (JSON-driven slides rendered via **recipes**) reads as **static and typographic** compared to the ciberseguridad **`Slideshow`** (bespoke slide components + app theme + ambient chrome + `AnimatePresence`). Stakeholder ask: **higher visual quality**—not necessarily **parity** with cyber; **distinct IA branding** is acceptable and often preferable.

---

## 2. Analysis

### 2.1 Architectural difference (why the gap exists)

| Dimension | Ciberseguridad (`Slideshow`) | IA deck |
|-----------|------------------------------|---------|
| Navigation | In-memory index; same page | **Route per slide** (`/deck/[index]`) |
| Shell | Theme tokens, blur orbs, pill nav, counter, hints | Black canvas + **minimal footer** links |
| Motion | Slide-level + **`AnimatePresence`** on index change | Mostly **recipe mount** animations (`motion-presets`) |
| Layout | Many **one-off** slide components | Few **recipe** templates driven by **`deck.json`** |
| Styling | `globals` / shadcn-style tokens | Scoped **`ia-deck.css`** + IBM Plex + flat color blocks |

The IA stack is **correct by design** for content-driven decks; the “dull” feeling is largely **under-investment in shell, atmosphere, and transition**, not a wrong architecture.

### 2.2 Lever files (where changes have most impact)

- **Shell / chrome:** `app/inteligencia-artificial/_components/DeckSlideView.tsx`, `ia-deck.css`
- **Per-slide look:** `app/inteligencia-artificial/_components/recipes/*.tsx`
- **Motion:** `app/inteligencia-artificial/_lib/motion-presets.ts` (and how motion is applied in recipes)
- **Data shape (if new layouts need it):** `app/inteligencia-artificial/_lib/schema.ts`, `types.ts`, `_data/deck.json`
- **Registry:** `app/inteligencia-artificial/_lib/slide-registry.tsx` (new **slide types** / recipes)

### 2.3 Risks / trade-offs

- **Route-based navigation:** Full page changes make **global slide transitions** less automatic than `Slideshow`; may need **template-level** or **client wrapper** animation if “flip” feel is required.
- **Accessibility:** Stronger visuals must keep **contrast**, **focus**, and **reduced-motion** paths (align with any existing motion specs under OpenSpec).
- **Brand docs:** Cross-check `docs/branding-system.md` before locking palettes; IA can diverge from cyber but should stay internally coherent.

---

## 3. Backlog (ordered suggested sequence)

### Epic A — Deck shell and atmosphere

| ID | Item | Notes |
|----|------|--------|
| A1 | **Visual shell pass** on `DeckSlideView` | Ambient layer (gradient, grain, subtle grid), optional progress bar or slide index treatment beyond plain text links. |
| A2 | **Footer / nav polish** | Keyboard hints, focus rings, hover states; consider pill/dot strip **without** importing cyber code (pattern reuse OK). |
| A3 | **`prefers-reduced-motion`** | Gate or shorten ambient animation; respect OS setting. |

### Epic B — Motion and “dynamic” feel

| ID | Item | Notes |
|----|------|--------|
| B1 | **Route transition** experiment | e.g. shared layout fade/slide between `/deck/[index]` navigations; spike cost before full rollout. |
| B2 | **Richer recipe motion** | Stagger lists, chart bars, section reveals; extend `motion-presets.ts` with named variants. |
| B3 | **Section breaks** | `SectionBreakRecipe` as hero moments (scale, split layout, background treatment). |

### Epic C — Art direction and recipes

| ID | Item | Notes |
|----|------|--------|
| C1 | **Token refresh in `ia-deck.css`** | Second accent, depth (shadows/glass), typography scale; optional display font for titles only. |
| C2 | **Layout variety per recipe** | Split columns, cards, icon rows; may need **schema** extensions for optional fields. |
| C3 | **New slide type(s)** | e.g. `quote`, `timeline`, `media`—only if content plan needs them; each needs schema + registry + recipe. |

### Epic D — Verification and docs

| ID | Item | Notes |
|----|------|--------|
| D1 | **Isolation re-check** | Grep: no `ciberseguridad` imports under `app/inteligencia-artificial/` (see `_content/VERIFICATION.md` pattern). |
| D2 | **Manual pass** | Full deck keyboard + link nav; contrast spot-check on each recipe background. |
| D3 | **Update this doc** | Mark done items; link any follow-up OpenSpec change if workflow requires it. |

---

## 4. Open decisions (resolve when resuming)

1. **Motion philosophy:** Subtle editorial vs. bold keynote-style (impacts B1–B3 effort).
2. **Navigation model:** Keep URL-per-slide vs. optional client-only deck mode (larger change; better `AnimatePresence` parity).
3. **Brand:** Confirm IA palette/typography vs. `docs/branding-system.md` (complement vs. exception).

---

## 5. References

- IA runtime: `app/inteligencia-artificial/deck/[index]/page.tsx`, `DeckSlideView`, `SlideRenderer`, `slide-registry.tsx`, `recipes/`, `ia-deck.css`, `motion-presets.ts`
- Cyber reference (read-only for ideas): `components/Slideshow.tsx`, `components/slides/*`
- Brand / composition: `docs/branding-system.md`, `docs/presentation-composition.md`
