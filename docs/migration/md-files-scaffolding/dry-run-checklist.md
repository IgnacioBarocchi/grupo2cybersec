# Dry-Run Assembly Checklist

- [ ] Load `data/presentation/manifest.json` and resolve all declared input paths.
- [ ] Validate `es-AR` locale and presence of voseo-compatible copy blocks.
- [ ] Validate `confidenceClass` exists on every content block.
- [ ] Validate template IDs referenced by composition payloads exist in `data/presentation/layout/templates.json`.
- [ ] Validate color and typography constraints against `.cursor/rules/brand-system.md`.
- [ ] Validate no runtime dependency references `docs/legacy/`.
- [ ] Validate all font files referenced by runtime exist in `assets/fonts/`.
