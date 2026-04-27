## 1. Migration Baseline and Classification

- [x] 1.1 Inventory all content units from `AI-Project-files/ai-presentation-brand-guide.md`, `briefing-composition-plan.md`, `implementation-spec.md`, and `QUICK-REFERENCE.md`.
- [x] 1.2 Define and document confidence classes (`authoritative`, `adaptable`, `legacy-non-binding`) with concise classification criteria and examples.
- [x] 1.3 Create a deterministic destination mapping matrix from (content intent + confidence class) to target locations (`.cursor/rules/`, `docs/`, `docs/legacy/`, structured content modules).
- [x] 1.4 Apply the classification and mapping matrix to all inventoried units and record source-to-target traceability metadata.

## 2. Brand Rules and Documentation

- [x] 2.1 Extract typography, color logic, and composition constraints from source materials into enforceable artifacts under `.cursor/rules/`.
- [x] 2.2 Create or update companion human-readable branding guides in `docs/` that mirror each enforced constraint.
- [x] 2.3 Add a consistency check process (manual or scripted) to ensure rule artifacts and docs remain aligned after edits.

## 3. Spanish Copy Canon and Structured Content Blocks

- [x] 3.1 Extract reusable Spanish copy and narrative blocks while preserving `es-AR` voseo register exactly.
- [x] 3.2 Define a deterministic structure for content blocks (including required metadata such as locale, source, confidence class, and block role).
- [x] 3.3 Persist canonical content blocks in modular artifacts suitable for future programmatic composition.
- [x] 3.4 Add validation checks to prevent translation, tone neutralization, or missing metadata in migrated Spanish content.

## 4. Font Asset Pipeline Alignment

- [x] 4.1 Move all font binaries from `AI-Project-files/fonts/` to `assets/fonts/` with stable repository paths.
- [x] 4.2 Define and document canonical font reference conventions compatible with the current rendering/export pipeline.
- [x] 4.3 Update font consumers/configuration to resolve fonts from canonical references only.
- [x] 4.4 Verify there are no active font dependencies on the original `AI-Project-files/fonts/` location.

## 5. Legacy Assumption Isolation

- [x] 5.1 Extract speculative stack/tooling/architecture assumptions from `implementation-spec.md` into `docs/legacy/`.
- [x] 5.2 Add explicit non-binding labels ("external suggestion", "non-binding") to all legacy artifacts.
- [x] 5.3 Ensure authoritative artifacts (rules, structured content, core docs) do not depend on `docs/legacy/` for normative behavior.

## 6. Modularization and Generation Readiness Verification

- [x] 6.1 Decompose any remaining monolithic migrated documents into purpose-specific artifacts (copy rules, branding system, layout/composition logic, content blocks).
- [x] 6.2 Add cross-links/index documentation describing where each concern lives and how artifacts are composed.
- [x] 6.3 Validate deterministic composability by running a dry-run assembly checklist for copy + branding + layout inputs.
- [x] 6.4 Remove or deprecate superseded staging artifacts in `AI-Project-files/` after migration parity is confirmed.
