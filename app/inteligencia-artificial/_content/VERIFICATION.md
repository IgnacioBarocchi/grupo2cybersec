# Verificación manual — deck IA

Fecha: 2026-04-27

## 9.1 Narrativa y copy

- [x] 42 slides en orden creciente (`order` 1..42) alineado al plan de composición.
- [x] Cadenas visibles provienen de `app/inteligencia-artificial/_data/deck.json` (recetas sin literales de mensajería en español embebidos en JSX).

## 9.2 Aislamiento vertical

- [x] Búsqueda `ciberseguridad` bajo `app/inteligencia-artificial/`: sin coincidencias.

## 9.3 Visual rápido (16:9)

- [x] `pnpm run build` OK (bundle y rutas `/inteligencia-artificial/deck/[index]`).
- [ ] Recomendado: revisar en navegador márgenes 8%, contraste títulos/cuerpos (Data vs Concept) y zoom 90%/80%.
