## ADDED Requirements

### Requirement: Non-binding legacy segregation
The system SHALL isolate speculative implementation assumptions into `docs/legacy/` and mark them as external suggestion and non-binding.

#### Scenario: Speculative implementation text is quarantined
- **WHEN** migration encounters stack, architecture, or tooling assumptions from non-authoritative sources
- **THEN** the content MUST be stored under `docs/legacy/` with explicit non-binding labeling

### Requirement: Authoritative guidance separation
The system SHALL ensure authoritative migration outputs do not depend on legacy-assumption documents as source of truth.

#### Scenario: Legacy docs cannot override authoritative artifacts
- **WHEN** authoritative rules or structured content conflict with legacy notes
- **THEN** authoritative artifacts MUST take precedence and legacy content MUST remain informational only
