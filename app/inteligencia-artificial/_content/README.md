# Contenido editorial (no runtime)

- **`deck.json`** (`../_data/deck.json`) es la única fuente que consume la app para texto en pantalla.
- **`CONTENT-SYNC-MAP.md`** sirve para planificar y documentar qué bloque narrativo va en qué `slide-XXX`; no se importa en código.
- Tras editar este directorio, sincronizá los strings definitivos en `deck.json` y volvé a correr `pnpm run build` si querés validar el bundle.
