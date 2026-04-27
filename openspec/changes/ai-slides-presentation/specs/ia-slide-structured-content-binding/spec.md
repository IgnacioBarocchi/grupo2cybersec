## ADDED Requirements

### Requirement: Single source of truth for on-screen copy

All user-visible slide strings (titles, bodies, labels, lists, captions, attributions) SHALL be loaded from structured content artifacts colocated under `app/inteligencia-artificial/**` (for example `_data/` JSON). React components MUST NOT embed ad-hoc Spanish copy literals except trivial structural punctuation that carries no semantic content.

#### Scenario: Copy is not authored inside recipe JSX

- **WHEN** a reviewer searches recipe components for Spanish prose literals used as primary slide messaging
- **THEN** those literals SHALL not exist; messaging SHALL resolve from structured fields on the slide record

### Requirement: Spanish locale fidelity

Structured content SHALL declare `es-AR` (or equivalent `es_AR`) locale metadata, and the deck SHALL preserve author-supplied Spanish strings verbatim (no translation, summarization, tone neutralization, or voseo stripping during render).

#### Scenario: Payload text reaches DOM unchanged

- **WHEN** a slide JSON field contains a Spanish paragraph authored for the deck
- **THEN** the rendered text content for that slot SHALL equal the source string for that field with no paraphrase, translation, or register change introduced by rendering code

### Requirement: Optional editorial sync map

The system SHALL support an optional human-maintained Markdown map file colocated under `app/inteligencia-artificial/**` that indexes narrative sections to slide IDs and/or JSON fragment anchors for editorial synchronization. The map MUST NOT be a runtime dependency for rendering; it exists only for documentation and change coordination.

#### Scenario: Deck renders without opening the map

- **WHEN** the Markdown map file is absent or stale
- **THEN** the deck SHALL still render correctly from structured JSON alone
