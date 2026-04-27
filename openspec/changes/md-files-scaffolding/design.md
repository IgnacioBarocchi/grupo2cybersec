## Context

The repository currently includes `AI-Project-files/` as a mixed-quality content dump. It contains high-value Spanish copy and brand direction, but also stack/tooling assumptions that are not authoritative for this codebase. The migration must preserve reusable content while preventing speculative implementation details from becoming implicit truth.

This change is cross-cutting because it affects rule enforcement (`.cursor/rules/`), human guidance (`docs/`), binary assets (`assets/fonts/`), and future generation inputs for slide automation. The design must keep the migration deterministic so phase 2 can consume normalized artifacts programmatically.

Constraints:
- OpenSpec artifacts and workflow text remain `en-US`.
- Source copy language and register are preserved as `es-AR` (voseo) in migrated content artifacts.
- Non-binding implementation assumptions are retained only as explicitly labeled legacy references.

## Goals / Non-Goals

**Goals:**
- Define a repeatable classification model that separates authoritative content from speculative content during migration.
- Produce modular destination artifacts for copy rules, brand rules, composition/layout guidance, and content blocks.
- Establish a consistent font asset location and reference approach compatible with render/export tooling.
- Preserve source narrative voice and locale without translation or tone neutralization.
- Prepare deterministic inputs that can be composed in a future "generate presentation project" step.

**Non-Goals:**
- Building the final slide deck generation runtime in this change.
- Treating `implementation-spec.md` as an architecture source of truth.
- Expanding copywriting/branding scope beyond what is present in current source files.
- Defining UI-level presentation templates in code at this stage.

## Decisions

### 1) Confidence-based content migration model
Decision: Every source section is tagged into one of three confidence classes: `authoritative`, `adaptable`, or `legacy-non-binding`.

Rationale:
- Prevents accidental promotion of speculative technical assumptions.
- Makes review criteria explicit and machine-checkable later.

Alternatives considered:
- Binary keep/discard model: rejected because valuable conceptual content from speculative docs would be lost.
- Manual ad hoc migration without labels: rejected due to low repeatability and high drift risk.

### 2) Destination structure by intent, not by source file
Decision: Break monolithic files into purpose-specific modules under rules/docs/assets rather than preserving source-file grouping.

Rationale:
- Supports direct enforcement (`.cursor/rules/`) and reuse (`docs/` and structured content modules).
- Reduces coupling between narrative copy, branding constraints, and technical notes.

Alternatives considered:
- Keep original markdown files and add a summary index: rejected because it preserves ambiguity and weakens future automation.

### 3) Dual representation for human + machine use
Decision: Maintain human-readable documentation in `docs/` and enforceable/parseable rule artifacts in `.cursor/rules/` (plus structured content blocks for generation inputs).

Rationale:
- Human maintainers need clear guides; generation and policy checks need deterministic structures.
- Avoids forcing a single format to satisfy incompatible needs.

Alternatives considered:
- Docs-only migration: rejected because it is not reliable for future compilation.
- Rules-only migration: rejected because it harms editorial usability and review.

### 4) Font pipeline normalization under repository assets
Decision: Move source font files to `assets/fonts/` and define a canonical reference contract (path conventions and naming policy) for downstream renderer/export integration.

Rationale:
- Centralizes binary assets in a predictable location.
- Avoids hidden dependencies on source folder layout.

Alternatives considered:
- Keep fonts under `AI-Project-files/`: rejected because it treats an import staging folder as production source.
- External CDN-only font strategy: rejected because offline/export workflows may require local binaries.

### 5) Legacy assumption quarantine
Decision: Move speculative stack/tooling content from `implementation-spec.md` into `docs/legacy/` with explicit "external suggestion, non-binding" markers.

Rationale:
- Retains useful context without polluting project truth.
- Makes future audits of assumptions straightforward.

Alternatives considered:
- Delete speculative material completely: rejected due to potential conceptual value.
- Leave in place with warning note: rejected because co-location still creates ambiguity.

## Risks / Trade-offs

- [Over-classification ambiguity] Different reviewers may classify the same section differently -> Mitigation: define concise classification criteria and examples in migration docs.
- [Rule/doc drift] Enforceable rules and human guides may diverge over time -> Mitigation: establish mirrored section IDs and review checks when one changes.
- [Font naming inconsistencies] Existing filenames may not match canonical conventions -> Mitigation: define a mapping table during migration and preserve original filenames as metadata aliases.
- [Spanish register dilution] Editorial cleanup may unintentionally neutralize voseo tone -> Mitigation: add explicit locale and voice invariants in copy rules and review checklist.
- [Legacy content misuse] Teams may still treat `docs/legacy/` as authoritative -> Mitigation: include prominent non-binding headers and cross-link to authoritative artifacts.

## Migration Plan

1. Inventory all source files and segment them into extractable content units.
2. Classify each unit using the confidence model (`authoritative`, `adaptable`, `legacy-non-binding`).
3. Create destination modules and move extracted units into their target locations:
   - `.cursor/rules/` for enforceable constraints
   - `docs/` for readable system guides
   - `docs/legacy/` for quarantined non-binding assumptions
   - `assets/fonts/` for font binaries
4. Add canonical references and metadata where needed (locale, source, confidence class).
5. Validate deterministic structure and composability for phase 2 generation workflows.
6. Remove or deprecate leftover staging artifacts in `AI-Project-files/` once parity is verified.

Rollback strategy:
- Keep migration commits granular by category (rules/docs/fonts/legacy) so any category can be reverted without discarding others.
- Preserve source snapshots until migrated artifacts pass review checks.

## Open Questions

- What exact structured format should content blocks use first (`.md` with frontmatter vs `.json`/`.ts`) for phase 2 compatibility?
- Should font references be declared in a single manifest file or distributed near consumers?
- Do we need a strict schema validator in this phase, or is deterministic convention enough until generation implementation starts?
- What minimum acceptance checks define "generation-ready" at the end of this migration?
