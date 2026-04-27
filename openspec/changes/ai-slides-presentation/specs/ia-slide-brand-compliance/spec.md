## ADDED Requirements

### Requirement: Token-bound presentation chrome

The IA slide surface SHALL use only the approved palette tokens, typography constraints, and spacing rules defined by project brand rules (for example `.cursor/rules/brand-system.md` and companion docs) when rendering slide recipes.

#### Scenario: Accent discipline per slide

- **WHEN** a slide recipe renders accent-colored emphasis
- **THEN** the slide SHALL contain at most one primary accent focal element according to the brand contract for that template family

### Requirement: IBM Plex as the slide typeface

Slide typography within the IA deck SHALL use IBM Plex Sans (self-hosted assets under `assets/fonts/` or route-local equivalents) for all recipe text roles unless a documented exception exists for code blocks or similar non-brand elements.

#### Scenario: Body text uses the deck typeface

- **WHEN** body text renders inside any IA slide recipe
- **THEN** computed font-family for that text SHALL resolve to IBM Plex Sans stack as defined by the implementation contract
