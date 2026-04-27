## ADDED Requirements

### Requirement: Canonical font asset location
The system SHALL place migrated font binaries under `assets/fonts/` and MUST NOT keep active font assets in `AI-Project-files/fonts/`.

#### Scenario: Font files are relocated to canonical path
- **WHEN** migration processes font binaries from source
- **THEN** each font file MUST be copied or moved into `assets/fonts/` using a stable repository path

### Requirement: Pipeline-compatible font references
The system SHALL define font references in a format compatible with the current rendering/export pipeline.

#### Scenario: Font references resolve consistently
- **WHEN** a renderer or export step loads project fonts
- **THEN** it MUST be able to resolve each configured font from canonical repository references without relying on source staging folders
