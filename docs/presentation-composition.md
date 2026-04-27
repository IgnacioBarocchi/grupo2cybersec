# Presentation Composition

## Canonical Artifact Split

- Rules: `.cursor/rules/*.md`
- Content blocks: `data/presentation/content-blocks/*.json`
- Layout contracts: `data/presentation/layout/*.json`
- Human-facing references: `docs/*.md`
- Legacy suggestions: `docs/legacy/*.md`

## Assembly Model

1. Load content blocks by locale and block type.
2. Load layout template contract.
3. Apply brand and copy rules.
4. Resolve font references from `assets/fonts`.
5. Emit presentation payload for rendering/export pipeline.

## Deterministic Requirements

- All composition records must have stable IDs.
- All records must carry source metadata.
- `confidenceClass` must be present and non-empty.
- No composition input may depend on `docs/legacy/`.
