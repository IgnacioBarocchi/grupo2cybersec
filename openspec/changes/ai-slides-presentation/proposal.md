## Why

Structured rules, tokens, and presentation data exist after migration, but the Inteligencia Artificial experience is not yet a complete, renderable slide project driven by the composition plan. This change delivers a production-ready slide surface so authors and tooling can rely on one vertical without coupling to other course areas.

## What Changes

- Implement a renderable slide system for the Inteligencia Artificial project, materialized from the composition plan (`briefing-composition-plan` and aligned structured inputs).
- Introduce layout recipes (or equivalent) that bind structured content into named slots (title, body, columns, steps, caption, etc.) with consistent optical rhythm and hierarchy.
- Apply brand constraints (typography, spacing, palette tokens) across all slide surfaces in this vertical.
- Add motion only where it improves clarity or pacing; avoid decorative animation.
- Preserve Spanish (`es-AR`) copy exactly as authored in migrated content sources—no rewriting, compression, or narrative drift.
- **Critical constraint:** All code, assets, data loading, and state for this feature SHALL live under the `inteligencia-artificial` route tree only (`app/inteligencia-artificial/**`). No modifications to `ciberseguridad`, no shared mutable state with it, and no imports from `app/ciberseguridad/**`.

## Capabilities

### New Capabilities

- `inteligencia-artificial-vertical-isolation`: Enforce that the IA slide system is self-contained under `app/inteligencia-artificial/**` with no cross-project coupling to `ciberseguridad` or implicit shared runtime dependencies.
- `ia-slide-layout-recipes`: Define and implement recipe-based layouts (data, concept, comparison, process, section-break, and any additional recipes needed) with stable slot contracts.
- `ia-slide-structured-content-binding`: Load slide payloads from structured content sources only; prohibit ad-hoc hardcoded slide copy outside those sources; maintain narrative order from the composition plan.
- `ia-slide-brand-compliance`: Map rendering to enforceable brand rules (tokens, type scale, spacing, safe margins, accent usage) for this vertical.
- `ia-slide-motion-pacing`: Specify and implement motion that supports comprehension and pacing; reject purely decorative motion patterns.

### Modified Capabilities

- None. (`openspec/specs/` has no baseline capability specs to delta.)

## Impact

- Primary: `app/inteligencia-artificial/**` (pages, components, styles, and route-local data or loaders co-located under this tree as required by the vertical-isolation constraint).
- Secondary: Possible additions under `data/presentation/` only if they remain exclusively consumed by the IA route (prefer co-location under `app/inteligencia-artificial/` when in doubt).
- Non-impact by design: `app/ciberseguridad/**`, shared global state bridges between the two projects, and cross-imports from the ciberseguridad vertical.
- Dependencies: May add animation or utility libraries only if used from the IA vertical and justified in `design.md` (no scope creep into other routes).
