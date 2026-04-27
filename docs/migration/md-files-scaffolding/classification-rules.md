# Content Confidence Classes

## Classes

- `authoritative`: Stable constraints that can be enforced directly without reinterpretation.
- `adaptable`: Valuable content that requires normalization before enforcement.
- `legacy-non-binding`: Useful historical or external suggestions that must never override authoritative artifacts.

## Decision Criteria

### `authoritative`
- Deterministic statement that is stack-agnostic or currently valid.
- Expresses copy, branding, composition, or governance constraints.
- Can be represented as rule/doc/data without external dependencies.

### `adaptable`
- Valuable narrative or examples requiring normalization or splitting.
- Contains mixed signal (high-value content + speculative details).
- Requires metadata tagging or structural conversion before consumption.

### `legacy-non-binding`
- Assumes architecture/tooling choices not validated in this repository.
- Contains dependency/version claims or generated code stubs.
- Must be preserved only as contextual reference under `docs/legacy/`.

## Invariants

- Every migrated unit MUST have exactly one confidence class.
- `legacy-non-binding` units MUST include an explicit non-binding notice.
- Authoritative outputs MUST NOT depend on `docs/legacy/`.
