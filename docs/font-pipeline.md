# Font Pipeline Contract

## Canonical Location

- Font binaries live in `assets/fonts/`.
- Active rendering references MUST resolve from this location.
- `AI-Project-files/fonts/` is deprecated as an ingestion source only.

## Canonical Family

- Family name: `IBM Plex Sans`
- Weights required: `400`, `500`, `600`, `700`

## Runtime Integration

- `app/layout.tsx` should load local fonts from `assets/fonts` using `next/font/local`.
- The root HTML language for this project remains English UI (`en`), while content locale is controlled by content artifacts.

## Export Compatibility

- No external font host is required for baseline export.
- Font files are committed repository assets to support offline rendering.
