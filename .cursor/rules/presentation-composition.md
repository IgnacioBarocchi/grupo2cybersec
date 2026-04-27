# Presentation Composition Rules (Enforceable)

## Template Taxonomy

- Canonical template ids:
  - `template-a-data`
  - `template-b-concept`
  - `template-c-comparison`
  - `template-d-process`
  - `template-e-section-break`

## Template Selection

- Each slide content block MUST reference exactly one canonical template id.
- Composition assets MUST keep content, branding, and layout concerns separate.

## Data Contracts

- Content blocks MUST include metadata fields: `id`, `locale`, `source`, `confidenceClass`, and `blockType`.
- Legacy references MUST NOT be imported into production composition contracts.
