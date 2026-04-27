## ADDED Requirements

### Requirement: Motion is purpose-driven only

Motion applied to IA slides SHALL be limited to patterns that improve comprehension or pacing (for example staged title reveal, restrained body line emergence, measured stat emphasis). Purely decorative motion (ambient loops, gratuitous parallax, ornamental particle effects) MUST NOT ship as part of the default deck behavior.

#### Scenario: No decorative ambient motion by default

- **WHEN** the deck loads with default configuration
- **THEN** no element SHALL animate continuously without a presenter-driven or navigation-driven state change

### Requirement: Performance and distraction budget

Animation durations and staggers SHALL remain short enough to preserve classroom readability and SHALL NOT reduce contrast or legibility. Motion configuration MUST be colocated with IA slide components or IA-local motion helpers.

#### Scenario: Motion helpers are vertically scoped

- **WHEN** motion utilities are introduced for IA slides
- **THEN** their modules SHALL live under `app/inteligencia-artificial/**` and SHALL NOT be required by `app/ciberseguridad/**`
