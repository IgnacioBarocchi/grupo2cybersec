# Destination Mapping Matrix

| Content intent | Confidence class | Destination | Artifact type |
| --- | --- | --- | --- |
| Brand constraints (palette, typography, composition limits) | authoritative | `.cursor/rules/` | enforceable rule markdown |
| Brand rationale and usage examples | adaptable | `docs/` | human-readable guides |
| Copy language rules (`es-AR`, voseo, tone) | authoritative | `.cursor/rules/` | enforceable rule markdown |
| Canonical copy blocks and narrative snippets | adaptable | `data/presentation/content-blocks/` | structured JSON |
| Layout template semantics and spacing system | adaptable | `data/presentation/layout/` + `docs/` | JSON + guide |
| Font binaries | authoritative | `assets/fonts/` | binary assets |
| Font loading contract and references | authoritative | `docs/` + `app/` integration | guide + runtime config |
| Stack/dependency assumptions | legacy-non-binding | `docs/legacy/` | quarantined markdown |
| Migration decisions and traceability | authoritative | `docs/migration/md-files-scaffolding/` | JSON + markdown |
