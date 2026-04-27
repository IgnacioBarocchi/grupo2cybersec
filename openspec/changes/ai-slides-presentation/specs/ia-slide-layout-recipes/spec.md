## ADDED Requirements

### Requirement: Recipe registry and slot contracts

The system SHALL map each supported slide `type` to exactly one layout recipe component with a typed slot contract (fields such as `title`, `body`, `stat`, `source`, `steps`, `columnA`, `columnB`, and other slots defined by the composition plan for that template).

#### Scenario: Unknown type is rejected

- **WHEN** a slide record references a `type` value that is not registered in the IA vertical recipe registry
- **THEN** the renderer SHALL fail in a deterministic, observable way (build-time type error or explicit runtime error surface) without rendering partial slide chrome

### Requirement: Visual rhythm and hierarchy

All recipes SHALL honor optical margins, vertical rhythm, and typographic hierarchy consistent with the brand system for classroom-scale legibility (including minimum safe margins and bounded line counts per template family).

#### Scenario: Safe margin applies to every recipe

- **WHEN** any recipe renders slide content in the IA deck surface
- **THEN** critical text and accent elements SHALL remain inside the defined safe margin contract for that recipe
