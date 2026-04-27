# Mapa editorial — Inteligencia Artificial (sincronización)

Este archivo es **solo referencia humana**. El runtime lee **`_data/deck.json`**. Cuando cambies copy acá, copiá el texto final al campo correspondiente en JSON (mismo `id` de slide).

Convención: cada bloque indica `slide-XXX` → campos JSON (`content.title`, `content.body`, etc.).

## Sección 0 — Portada

- `slide-001` → `section-break`: portada principal.
- `slide-002` → `concept`: definición operativa de IA (`eyebrow`, `title`, `body`, `highlightTerms`).

## Sección 1 — Antecedentes

- `slide-003` → `section-break`: título de sección.
- `slide-004` → `concept`: Leibniz, `characteristica universalis`.
- `slide-005` → `concept`: Babbage y Lovelace, máquina analítica y notas.
- `slide-006` → `data`: Boole, `stat` + cuerpo sobre álgebra booleana.
- `slide-007` → `concept`: Turing y Wiener, origen 1940–1950.
- `slide-008` → `concept`: síntesis “negativo histórico”.

## Sección 2 — Evolución técnica

- `slide-009` → `section-break`.
- `slide-010` → `process`: 1956, 1960–1970, invierno (pasos en `content.steps`).
- `slide-011` → `process`: 1990–2010, 2010–2020, 2020–hoy.
- `slide-012` → `data`: Transformer 2017.
- `slide-013` → `section-break`: IA actual.
- `slide-014` → `concept`: modelos fundacionales.
- `slide-015` → `comparison`: simbólica vs ML+DL.

## Sección 3 — Campos y dominios

- `slide-016`–`024` → mezcla `concept` / `data` según `deck.json` (mapa de subcampos, ejes, dominios, ejemplos).

## Sección 4 — Argentina

- `slide-025`–`034` → `section-break`, `data`, `concept`, `comparison` según `deck.json` (adopción, sectores, trabajo, economía, confiabilidad, percepciones).

## Sección 5 — Síntesis

- `slide-035`–`039` → cierre y preguntas.

## Opcional — Deep dives

- `slide-040`–`042` → conceptos y recurso externo IBM (fuente en `content.source` del slide `042`).

## Fuentes y enlaces (recordatorio)

- Consolidá URLs y referencias en `content.source` o listas en `comparison` / `process` según corresponda; mantené el texto visible en español (`es-AR`) en JSON.
