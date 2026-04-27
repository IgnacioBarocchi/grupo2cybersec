## ADDED Requirements

### Requirement: Confidence-classified migration units
The migration system SHALL classify every extracted source unit from `AI-Project-files/` into exactly one confidence class: `authoritative`, `adaptable`, or `legacy-non-binding`.

#### Scenario: Class assignment is mandatory
- **WHEN** a source unit is prepared for migration
- **THEN** the unit MUST include one and only one confidence class before it can be written to a destination artifact

### Requirement: Destination mapping by class and intent
The migration system SHALL map classified units to deterministic destinations based on content intent and confidence class.

#### Scenario: Classified units route to stable targets
- **WHEN** a unit is marked for migration
- **THEN** the system MUST route it to a predefined target family (`.cursor/rules/`, `docs/`, `docs/legacy/`, or generation input modules) without ad hoc destination selection
