## ADDED Requirements

### Requirement: Route-tree containment

The Inteligencia Artificial slide system SHALL reside entirely under `app/inteligencia-artificial/**` (including components, hooks, types, styles, data loaders, and presentation payloads consumed by that route).

#### Scenario: No cross-vertical imports

- **WHEN** a maintainer inspects module dependency graphs for files under `app/inteligencia-artificial/`
- **THEN** no file in that tree SHALL import from `app/ciberseguridad/**` or mutate shared runtime state owned by the ciberseguridad vertical

### Requirement: Isolation from Ciberseguridad side effects

The implementation MUST NOT modify files under `app/ciberseguridad/**` as part of delivering the IA slide system.

#### Scenario: Ciberseguridad tree unchanged

- **WHEN** the IA slide change is merged as scoped to this capability
- **THEN** the `app/ciberseguridad/**` tree SHALL contain no edits attributable to the IA slide feature work
