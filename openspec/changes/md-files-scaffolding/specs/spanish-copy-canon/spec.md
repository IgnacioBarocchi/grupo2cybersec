## ADDED Requirements

### Requirement: Preserve source locale and register
The migration system SHALL preserve Spanish source copy in `es-AR` with voseo register and MUST NOT translate or neutralize tone during normalization.

#### Scenario: Spanish copy is migrated intact
- **WHEN** a content block in Spanish is extracted from source files
- **THEN** the migrated block MUST retain original locale conventions and voice characteristics

### Requirement: Copy modules are reusable and structured
The system SHALL store canonical copy and narrative blocks in modular, parseable structures suitable for later composition.

#### Scenario: Content blocks are generation-ready
- **WHEN** copy blocks are persisted for future use
- **THEN** each block MUST include deterministic structure and metadata needed for programmatic assembly
