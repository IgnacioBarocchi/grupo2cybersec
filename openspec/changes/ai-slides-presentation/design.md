## Context

The repository already has migrated brand and composition artifacts (rules under `.cursor/rules/`, guides under `docs/`, and structured inputs such as `data/presentation/`). The Inteligencia Artificial route (`app/inteligencia-artificial/**`) must become a self-contained slide runtime: render decks from structured payloads aligned with the briefing composition plan, without touching `app/ciberseguridad/**` or introducing cross-vertical imports or shared mutable presentation state.

Stakeholders: slide authors (Spanish copy fidelity), maintainers (enforcement via rules), and future generators (deterministic JSON contracts).

## Goals / Non-Goals

**Goals:**

- Colocate all IA slide runtime code, types, layout recipes, motion wrappers, and presentation payloads under `app/inteligencia-artificial/**` so vertical isolation is mechanically obvious in the tree.
- Implement a recipe-first renderer: each slide `type` maps to one layout component with explicit slot props (no free-form JSX string assembly from markdown at runtime).
- Bind copy exclusively from structured sources (single manifest or ordered slide list co-located with the route); preserve `es-AR` strings verbatim.
- Apply brand tokens (palette, type scale, spacing, safe margins, single accent focal point) consistently across recipes.
- Use motion only for pacing and hierarchy (enter/reveal of title, stat emphasis, staggered body lines where the composition plan implies it); avoid ambient or decorative loops.

**Non-Goals:**

- Editing or extending the Ciberseguridad vertical, shared slide shells, or cross-importing its components or data.
- Rewriting, summarizing, or “improving” Spanish copy in code or in new JSON; editorial changes belong in content sources, not components.
- Building a global CMS, auth, or multi-tenant presentation platform.
- Treating `docs/legacy/**` or speculative implementation docs as runtime truth.

## Decisions

### 1) Vertical boundary: filesystem as the isolation contract

**Decision:** All imports for the IA slide system resolve under `app/inteligencia-artificial/` (including `_components`, `_lib`, `_data` folders as needed). No `import` from `app/ciberseguridad/**`.

**Rationale:** Code review and bundling both enforce the constraint; route colocation matches the product requirement.

**Alternatives considered:** Shared `components/slides` package — rejected because it breaks strict vertical isolation and invites accidental coupling.

### 2) Payload location: co-located JSON under the IA route

**Decision:** Store the canonical slide list (and any manifest fragments) under `app/inteligencia-artificial/_data/` (or equivalent colocated folder), not under a shared `data/` root, unless a file is copied in full and only ever imported from this route.

**Rationale:** Proposal prefers co-location when isolation is in doubt; avoids other routes importing the same deck later without an explicit future change.

**Alternatives considered:** Reuse `data/presentation/` directly — acceptable only if every consumer remains IA-only; default is colocation to reduce risk.

### 3) Layout system: typed recipes + registry

**Decision:** Maintain a small registry (`type` → React component) inside the IA vertical. Each recipe accepts a typed `content` object matching slot names from the composition plan (e.g. `title`, `stat`, `body`, `source`, `steps`, `columnA`, `columnB`).

**Rationale:** Matches briefing template taxonomy; keeps rendering deterministic and testable.

**Alternatives considered:** Markdown-driven slides — rejected due to weaker slot guarantees and copy drift risk.

### 4) Styling: Tailwind v4 + CSS variables aligned to brand rules

**Decision:** Use existing `app/globals.css` token patterns where possible; add IA-scoped layout classes or a scoped wrapper (e.g. `[data-ia-deck]`) so slide typography can follow IBM Plex / brand constraints without changing global site tokens unless unavoidable.

**Rationale:** Minimizes global blast radius while keeping slide surfaces visually consistent.

**Alternatives considered:** Separate CSS entry only for IA — optional follow-up if specificity conflicts arise.

### 5) Motion: `framer-motion` limited to IA slide components

**Decision:** Use the existing `framer-motion` dependency only inside `app/inteligencia-artificial/**`. Prefer simple variants (opacity, y, blur where supported) with short durations; no auto-looping background motion.

**Rationale:** Dependency already present; supports pacing-oriented transitions without new packages.

**Alternatives considered:** CSS-only motion — viable for v1; Framer chosen when staggered children or layout transitions materially reduce complexity.

### 6) Navigation and state: URL-first, minimal client state

**Decision:** Prefer `/inteligencia-artificial/[index]` (or query `?s=`) for slide index; derive active slide from URL/search params where practical. Avoid global stores.

**Rationale:** Aligns with “no shared state” and keeps deep links possible.

**Alternatives considered:** Client-only index in React state — acceptable for a single-page deck mode if URL sync is added in the same vertical.

## Risks / Trade-offs

- [Global CSS coupling] IA slide styles might fight app-wide Tailwind theme → Mitigation: scope selectors under a deck root attribute; avoid changing unrelated routes’ class contracts.
- [Copy drift] Developers might inline strings in components → Mitigation: lint/review rule: all visible strings originate from `_data` JSON; components only map fields.
- [Bundle size] Framer in the route chunk → Mitigation: dynamic import recipe modules only if needed; keep motion trees small.
- [Data duplication] Copying deck JSON from `data/presentation/` into `_data/` could fork sources → Mitigation: single writer workflow documented in tasks; or generate `_data` from a script also colocated under IA (still IA-only entrypoint).

## Migration Plan

1. Add colocated `_data` slide JSON (or split files) derived from the composition plan ordering; validate IDs and `type` values against the registry.
2. Implement registry + recipe components under `app/inteligencia-artificial/`.
3. Wire a deck page (and optional `[slide]` segment) that reads payload and renders the active slide.
4. Add keyboard navigation within the IA layout only (arrow keys / space) without registering global window listeners outside the deck mount if avoidable.
5. Smoke-test: full deck pass, contrast/safe margin visual check, no imports from `ciberseguridad`.

**Rollback:** Remove `app/inteligencia-artificial` additions beyond the previous placeholder page; delete `_data` if needed. No other routes touched.

## Open Questions

- Exact URL shape: flat `/inteligencia-artificial` with internal state vs `/inteligencia-artificial/slides/[n]` for shareable indices.
- Whether the first iteration ships all 52 slides in JSON or a phased subset while keeping narrative gaps explicit in data.
- Whether presenter notes (if any) live in JSON and are stripped from DOM or omitted entirely in v1.
- Whether motion presets are data-driven (`animation` field from briefing) or hardcoded per recipe for v1 simplicity.
