## Why

The current `AI-Project-files` folder mixes high-value content (Spanish copy, narrative framing, branding) with speculative implementation assumptions that do not match the real project stack. We need a deterministic migration baseline now so phase 2 can generate slide projects programmatically from trusted, structured sources.

## What Changes

- Migrate reusable content from `AI-Project-files/` into repository-native locations with clear ownership (`.cursor/rules/`, `docs/`, `assets/fonts/`).
- Extract and normalize brand constraints (typography, color logic, composition principles) into enforceable rule artifacts plus human-readable docs.
- Extract and modularize Spanish content and narrative blocks into parseable, reusable structures suitable for future generation pipelines.
- Relocate font binaries from `AI-Project-files/fonts/` to `assets/fonts/` and define consistent references compatible with rendering/export workflows.
- Isolate non-authoritative implementation assumptions from `implementation-spec.md` into `docs/legacy/` with explicit non-binding labeling.
- Replace monolithic markdown references with purpose-specific artifacts (copy rules, branding system, layout/composition logic, content blocks).

## Capabilities

### New Capabilities

- `content-migration-normalization`: Define migration rules that classify source content by confidence and target destination.
- `brand-system-ruleset`: Represent typography, color, and composition constraints as enforceable project rules plus companion docs.
- `spanish-copy-canon`: Preserve and package `es-AR`/voseo copy and messaging into reusable content modules without tone neutralization.
- `font-asset-pipeline-alignment`: Standardize font placement and referencing under `assets/fonts` for downstream render/export compatibility.
- `legacy-assumption-isolation`: Move speculative stack/tooling details into clearly marked non-binding legacy documentation.
- `presentation-generation-readiness`: Ensure migrated artifacts are deterministic and composable for a later slide-project generation step.

### Modified Capabilities

- None.

## Impact

- Affected inputs: `AI-Project-files/ai-presentation-brand-guide.md`, `AI-Project-files/briefing-composition-plan.md`, `AI-Project-files/implementation-spec.md`, `AI-Project-files/QUICK-REFERENCE.md`, `AI-Project-files/fonts/`.
- Affected targets: `.cursor/rules/`, `docs/`, `docs/legacy/`, `assets/fonts/`, and future generation-facing structured content directories.
- Process impact: introduces a content confidence model (authoritative vs non-binding) and enforces locale policy (`en-US` for specs, preserved Spanish source copy in migrated content artifacts).
