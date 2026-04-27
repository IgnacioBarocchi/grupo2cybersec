## 1. Vertical scaffold and isolation

- [x] 1.1 Create `app/inteligencia-artificial/_components`, `_lib`, `_data`, and optional `_content` directories for deck code, types, payloads, and editorial maps
- [x] 1.2 Add a deck root wrapper marker (for example `data-ia-deck`) on the IA slide canvas for scoped styling and tests
- [x] 1.3 Verify via repository search that no module under `app/inteligencia-artificial/` imports `app/ciberseguridad/**`

## 2. Types and structured deck contract

- [x] 2.1 Define TypeScript types for slide `type` and per-type `content` slot objects aligned with `AI-Project-files/briefing-composition-plan.md` template contracts
- [x] 2.2 Add colocated runtime validation (for example Zod schemas under `_lib`) that parses `_data` payloads and rejects invalid shapes at load time
- [x] 2.3 Author canonical deck JSON under `app/inteligencia-artificial/_data/` with `locale` metadata for `es-AR` and slide order matching the composition plan registry

## 3. Optional editorial sync map

- [x] 3.1 Add optional `app/inteligencia-artificial/_content/CONTENT-SYNC-MAP.md` that indexes narrative sections to slide IDs or JSON anchors for human editing workflows
- [x] 3.2 Add `_content/README.md` explaining that Markdown is documentation-only and that JSON remains the runtime source of truth

## 4. Recipe registry and render pipeline

- [x] 4.1 Implement a `slideRegistry` map from `type` string to recipe component colocated under `app/inteligencia-artificial/_lib` or `_components`
- [x] 4.2 Implement a single deck renderer entry component that selects the recipe, passes typed `content`, and renders inside the deck wrapper
- [x] 4.3 Implement deterministic failure UI or error boundary behavior for unknown `type` values per `ia-slide-layout-recipes` spec

## 5. Layout recipes (template fidelity)

- [x] 5.1 Implement `data` recipe (Template A: accent bar, title, stat, body, source) using slot props only
- [x] 5.2 Implement `concept` recipe (Template B: optional eyebrow, title, body, highlight terms)
- [x] 5.3 Implement `comparison` recipe (Template C: title, column labels, column bullet arrays, divider)
- [x] 5.4 Implement `process` recipe (Template D: title, ordered steps with title and description)
- [x] 5.5 Implement `section-break` recipe (Template E: title, optional subtitle, optional decorator)

## 6. Brand compliance

- [x] 6.1 Apply approved palette tokens, typography scale intent, and spacing rhythm to all recipes using IA-scoped styles without breaking unrelated site pages
- [x] 6.2 Enforce safe margins and the single-accent focal rule across every recipe surface

## 7. Motion pacing

- [x] 7.1 Add minimal `framer-motion` variants for title, stat, and body pacing colocated under `app/inteligencia-artificial/**` only
- [x] 7.2 Verify default deck configuration contains no continuous ambient or decorative looping animations

## 8. Routing, navigation, and UX

- [x] 8.1 Implement deck routing entirely under `app/inteligencia-artificial/**` (resolve open question: segment-based index versus query param) without cross-route coupling
- [x] 8.2 Implement next and previous navigation plus keyboard handling scoped to the deck subtree
- [x] 8.3 Optional: sync active slide index to the URL for shareable deep links while keeping state derivable from the URL where practical

## 9. Verification and hardening

- [x] 9.1 Run a full manual deck pass: narrative order, slot coverage, and confirmation that visible Spanish strings originate only from `_data` JSON fields
- [x] 9.2 Re-run isolation checks to confirm `app/ciberseguridad/**` has no new imports from IA work and IA has no imports from ciberseguridad
- [x] 9.3 Visual smoke on 16:9 target: safe margin, hierarchy, and contrast spot-check for dark and light template families
