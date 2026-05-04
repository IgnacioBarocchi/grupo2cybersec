# v0 Spec — Deck «Inteligencia Artificial» (copy cerrado)

Este documento sirve para **regenerar en v0** una app tipo presentación **equivalente al contenido actual** de la ruta `inteligencia-artificial` del repo: tema **IA** (fundamentos, evolución, Argentina), **es-AR**, **30 slides**.  
**No hay lugar para inventar texto:** todo el copy visible debe ser **literal** al de esta especificación.

**Origen canónico en repo:** `app/inteligencia-artificial/_data/deck.json` (mismos strings).

---

## Metadatos del deck (bloqueados)

| Campo | Valor |
|--------|--------|
| `id` | `ia-presentacion-2026` |
| `title` | Inteligencia Artificial |
| `locale` | es-AR |
| `metadata.institution` | Facultad de Ingeniería |
| `metadata.course` | Grupo 2 - Ciberseguridad |

---

## Prompt para v0 (copiar y pegar)

```txt
Build a NEW slide presentation web app from scratch (NOT cybersecurity; topic is ARTIFICIAL INTELLIGENCE for an academic deck).

Stack:
- Next.js (App Router), React, TypeScript, strict mode
- TailwindCSS
- shadcn/ui
- GSAP + @gsap/react for motion (subtle, premium; respect prefers-reduced-motion)

Product:
- Spanish (es-AR) UI copy EXACTLY as provided in the user's spec document "SLIDE COPY (LOCKED)".
- Do NOT paraphrase, shorten, expand, or add marketing copy.
- Discrete slide system (NOT a long vertical scroll marketing page).
- Central deck state, keyboard: ArrowLeft/ArrowRight, Home/End; visible prev/next; slide counter (e.g. 05 / 30).
- Content in typed constants or JSON imported as TS (single source of truth). One file or module for all slide data.

Slide layout types you MUST support (map UI to these types):
1) section-break: large title + optional subtitle; optional decorator flag
2) concept: optional eyebrow, title, body paragraph, optional highlightTerms (for emphasis only, same words as in body)
3) data: title, large stat display, body, optional source line
4) process: title + ordered steps (number, title, description each)
5) comparison: title, two column labels, bullet lists per column

Visual: dark-first, clean typography, generous spacing, minimal noise, Vercel-adjacent polish.

Motion: GSAP enter (autoAlpha + small y), stagger lists/steps; no flashy loops.

Implement ALL 30 slides with EXACT strings from the spec the user pastes after this prompt (slide list + appendix JSON if included).
```

Después de pegar el bloque anterior, **pega también** la sección **«Anexo JSON canónico»** de más abajo (o el archivo completo) para que v0 tenga una sola fuente de verdad.

---

## Tipos de slide y campos (referencia)

Cada slide tiene: `id`, `order`, `type`, `templateId` (referencia visual legacy; podés mapear a layouts propios), `content` según `type`.

---

## SLIDE COPY (LOCKED) — 30 diapositivas

### Slide 01 — `section-break` — `slide-001`

- **title:** Inteligencia Artificial  
- **subtitle:** Fundamentos, evolución y realidad argentina  
- **showDecorator:** true  

### Slide 02 — `concept` — `slide-002`

- **eyebrow:** ¿De qué hablamos?  
- **title:** ¿Qué es la inteligencia artificial?  
- **body:** Un conjunto de sistemas capaces de realizar tareas que típicamente requieren inteligencia humana. Esto incluye aprendizaje de patrones, reconocimiento, toma de decisiones y procesamiento de información.  
- **highlightTerms:** `inteligencia humana`, `aprendizaje`  

### Slide 03 — `section-break` — `slide-003`

- **title:** Antecedentes  
- **subtitle:** Del pensamiento mecánico al cálculo simbólico  
- **showDecorator:** true  

### Slide 04 — `concept` — `slide-004`

- **title:** De Leibniz a Lovelace  
- **body:** Gottfried Wilhelm Leibniz imaginó una characteristica universalis: un lenguaje formal en el que razonar equivaldría a calcular. Charles Babbage diseñó la máquina analítica —memoria, cálculo y control por tarjetas perforadas— como arquitectura general de cómputo. Ada Lovelace señaló que una máquina podría manipular símbolos más allá de los números si se formalizan.  
- **highlightTerms:** `characteristica universalis`, `máquina analítica`  

### Slide 05 — `data` — `slide-005`

- **title:** George Boole (1815–1864)  
- **stat:** 1847  
- **body:** Su álgebra booleana convierte el razonamiento en operaciones formales (verdadero/falso), lo que después se traduce directamente en circuitos digitales y, en última instancia, en computación.  
- **source:** Álgebra booleana  

### Slide 06 — `concept` — `slide-006`

- **title:** Turing, Wiener y el “negativo histórico”  
- **body:** Origen (1940–1950): Alan Turing formaliza el pensamiento como cálculo simbólico; Norbert Wiener desarrolla la cibernética y la retroalimentación. En síntesis aún no existía “IA” moderna, pero sí la intuición de que el pensamiento podía mecanizarse con símbolos y reglas —el negativo histórico de lo que vino después.  
- **highlightTerms:** `Alan Turing`, `símbolos`  

### Slide 07 — `section-break` — `slide-007`

- **title:** Evolución técnica  
- **subtitle:** De la teoría a la práctica  
- **showDecorator:** true  

### Slide 08 — `process` — `slide-008`

- **title:** Línea temporal: 1950 a hoy  

**Step 1**  
- **number:** 1  
- **title:** Nacimiento formal (1956)  
- **description:** En Dartmouth se establece el campo; McCarthy acuña el término “inteligencia artificial”. Predomina la confianza en reglas explícitas.  

**Step 2**  
- **number:** 2  
- **title:** Primeros sistemas (1960–1970)  
- **description:** Programas simbólicos, juegos y teoremas; ELIZA y reglas rígidas que fallan fuera de contextos controlados.  

**Step 3**  
- **number:** 3  
- **title:** Invierno de la IA (1970–1990)  
- **description:** Expectativas por encima de resultados; recortes de financiamiento. Sobreviven redes neuronales tempranas y sistemas expertos en nichos.  

**Step 4**  
- **number:** 4  
- **title:** Resurgimiento (1990–2010)  
- **description:** Machine learning: se entrenan modelos con datos; más cómputo y métodos estadísticos robustos.  

**Step 5**  
- **number:** 5  
- **title:** Revolución moderna (2010–2020)  
- **description:** Deep learning, grandes datasets y GPUs; la IA pasa a productos masivos en visión, voz y lenguaje.  

**Step 6**  
- **number:** 6  
- **title:** IA actual (2020–hoy)  
- **description:** Modelos fundacionales generativos; transformers que escalan con datos y cómputo; foco en alineación, control y uso productivo.  

### Slide 09 — `data` — `slide-009`

- **title:** Transformer (2017)  
- **stat:** 2017  
- **body:** Arquitectura fundacional para modelos de lenguaje a gran escala; marca un quiebre en cómo se modela la secuencia y la atención.  
- **source:** Vaswani et al., 2017  

### Slide 10 — `section-break` — `slide-010`

- **title:** IA actual (2020–hoy)  
- **subtitle:** Modelos fundacionales y plataformas generales  
- **showDecorator:** true  

### Slide 11 — `concept` — `slide-011`

- **title:** Modelos fundacionales  
- **body:** Sistemas generativos capaces de producir texto, imágenes, audio y código con alta coherencia. Herramientas como ChatGPT o Stable Diffusion muestran una transición: de sistemas especializados a plataformas generales.  
- **highlightTerms:** `fundacionales`, `transformers`  

### Slide 12 — `comparison` — `slide-012`

- **title:** Generaciones de IA  
- **columnALabel:** IA simbólica (1950–2000)  
- **columnBLabel:** Machine Learning + Deep Learning (2000–hoy)  
- **columnA:**  
  - Reglas explícitas programadas  
  - Fallan fuera de contextos controlados  
  - Experta pero frágil  
- **columnB:**  
  - Aprende patrones de datos  
  - Generaliza a casos nuevos  
  - Flexible pero a veces opaca  

### Slide 13 — `section-break` — `slide-013`

- **title:** Campos y dominios  
- **subtitle:** Mapa sintético de subcampos y herramientas  
- **showDecorator:** true  

### Slide 14 — `concept` — `slide-014`

- **title:** Tres ejes transversales  
- **body:** Podés pensar la inteligencia artificial no como un bloque homogéneo sino como un conjunto de dominios técnicos que se ramifican según el tipo de problema, la naturaleza de los datos y el objetivo epistemológico (predecir, generar, optimizar, demostrar, etc.). Hay tres ejes que atraviesan todo: predicción, generación y razonamiento.  
- **highlightTerms:** `predicción`, `generación`, `razonamiento`  

### Slide 15 — `data` — `slide-015`

- **title:** Dominios principales  
- **stat:** 9+  
- **body:** Un mapa sintético incluye medicina, generación visual, NLP, clasificadores predictivos, investigación matemática, robótica, economía, audio, IA científica y más.  
- **source:** Mapa del deck  

### Slide 16 — `concept` — `slide-016`

- **title:** Medicina y generación visual  
- **body:** Medicina: diagnóstico por imagen, pronóstico clínico, fármacos, NLP médico (AlphaFold, Tempus, PathAI). Visual: difusión, GANs, video, NeRFs (Midjourney, Stable Diffusion, Runway).  
- **highlightTerms:** `AlphaFold`, `difusión`  

### Slide 17 — `concept` — `slide-017`

- **title:** Lenguaje y predicción  
- **body:** NLP: LLMs, clasificación de texto, traducción, resumen (ChatGPT, Claude, Cohere). Predicción: clasificación, regresión, anomalías, recomendación con árboles, random forests, XGBoost, redes neuronales (Scikit-learn, XGBoost).  
- **highlightTerms:** `LLMs`, `XGBoost`  

### Slide 18 — `concept` — `slide-018`

- **title:** Razonamiento formal, robótica y economía  
- **body:** Investigación matemática (estado emergente): asistentes de prueba, formalización, optimización combinatoria (Lean, Mathematica, Wolfram Alpha). Robótica: percepción, refuerzo, SLAM (Boston Dynamics, ROS). Economía: trading, scoring (TensorFlow en industria). Audio: ASR, TTS (Whisper, ElevenLabs).  
- **highlightTerms:** `Lean`, `robótica`  

### Slide 19 — `section-break` — `slide-019`

- **title:** IA en Argentina  
- **subtitle:** Adopción, percepción y uso  
- **showDecorator:** true  

### Slide 20 — `data` — `slide-020`

- **title:** Adopción y percepción (Argentina)  
- **stat:** 55%  
- **body:** El 55% de las empresas ya tiene proyectos de IA en marcha, pero solo el 13% de los trabajadores la usa regularmente. El 41% cree que su empresa está atrasada y el 47% que podría aprovecharla más: potencial no realizado más que saturación tecnológica.  
- **source:** Randstad Argentina; Infobae, 2024  

### Slide 21 — `concept` — `slide-021`

- **title:** Sectores e impacto en el trabajo  
- **body:** En Argentina la adopción se concentra en servicios y economía del conocimiento, finanzas (scoring, fraude, analítica), salud creciente y PyMEs (automatización administrativa). Solo el 34% percibe impacto fuerte en su empleo; estudios del MIT sugieren impacto aún difuso en empleo y productividad, con reconfiguración de tareas más que reemplazo masivo inmediato.  
- **highlightTerms:** `servicios`, `empleo`  

### Slide 22 — `data` — `slide-022`

- **title:** Impacto económico potencial  
- **stat:** GPT  
- **body:** La IA puede aumentar productividad y crecimiento en Argentina; se la considera tecnología de propósito general, comparable a la electricidad o internet. Riesgos: concentración de mercado, dependencia tecnológica, brecha entre quienes adoptan y quienes no.  
- **source:** IAE; arXiv:2405.00225  

### Slide 23 — `comparison` — `slide-023`

- **title:** Confiabilidad y lectura social  
- **columnALabel:** Capacidad y adopción  
- **columnBLabel:** Límites y cautela  
- **columnA:**  
  - Alta capacidad en tareas asistidas  
  - Adopción estructural con proyectos en marcha  
  - Interés en productividad y automatización  
- **columnB:**  
  - Baja robustez epistemológica: errores, sesgos en datos, poca explicabilidad  
  - Brecha entre interés y uso cotidiano  
  - Confiabilidad: asistir, no delegar; control humano y marcos claros  

### Slide 24 — `section-break` — `slide-024`

- **title:** Diagnóstico sintético  
- **subtitle:** Dónde estamos hoy  
- **showDecorator:** true  

### Slide 25 — `comparison` — `slide-025`

- **title:** Dimensiones del estado actual  
- **columnALabel:** Madurez tecnológica  
- **columnBLabel:** Implementación real  
- **columnA:**  
  - Modelos fundacionales y oferta de plataformas  
  - Avances en visión, voz y lenguaje  
- **columnB:**  
  - Uso cotidiano todavía bajo en trabajadores  
  - Adopción organizacional intermedia  

### Slide 26 — `data` — `slide-026`

- **title:** Cuatro preguntas clave  
- **stat:** Para pensar  
- **body:** Infraestructura y oferta tecnológica: muy avanzada. Adopción organizacional: intermedia. Uso cotidiano real: bajo. Confiabilidad: suficiente para asistir, no para delegar.  
- **source:** Síntesis del deck  

### Slide 27 — `concept` — `slide-027`

- **title:** IA como herramienta  
- **body:** La IA no es destino inevitable: la responsabilidad sigue siendo humana en alineación, control, marcos éticos y uso productivo.  
- **highlightTerms:** `herramienta`, `responsabilidad`  

### Slide 28 — `section-break` — `slide-028`

- **title:** Preguntas  
- **subtitle:** Apertura al debate  
- **showDecorator:** true  

### Slide 29 — `concept` — `slide-029`

- **eyebrow:** Profundización  
- **title:** ¿Cómo funcionan los transformers?  
- **body:** Opcional: profundidad técnica sobre atención, paralelización y escalado con datos y cómputo.  
- **highlightTerms:** `transformers`, `atención`  

### Slide 30 — `data` — `slide-030`

- **title:** Recursos de aprendizaje  
- **stat:** IBM  
- **body:** Historia y fundamentos de la IA: material de referencia para ampliar lectura.  
- **source:** https://www.ibm.com/es-es/think/topics/history-of-artificial-intelligence  

---

## Anexo JSON canónico (idéntico a `deck.json`)

```json
{
  "id": "ia-presentacion-2026",
  "title": "Inteligencia Artificial",
  "locale": "es-AR",
  "metadata": {
    "institution": "Facultad de Ingeniería",
    "course": "Grupo 2 - Ciberseguridad"
  },
  "slides": [
    {
      "id": "slide-001",
      "order": 1,
      "type": "section-break",
      "templateId": "template-e",
      "content": {
        "title": "Inteligencia Artificial",
        "subtitle": "Fundamentos, evolución y realidad argentina",
        "showDecorator": true
      }
    },
    {
      "id": "slide-002",
      "order": 2,
      "type": "concept",
      "templateId": "template-b",
      "content": {
        "title": "¿Qué es la inteligencia artificial?",
        "body": "Un conjunto de sistemas capaces de realizar tareas que típicamente requieren inteligencia humana. Esto incluye aprendizaje de patrones, reconocimiento, toma de decisiones y procesamiento de información.",
        "eyebrow": "¿De qué hablamos?",
        "highlightTerms": ["inteligencia humana", "aprendizaje"]
      }
    },
    {
      "id": "slide-003",
      "order": 3,
      "type": "section-break",
      "templateId": "template-e",
      "content": {
        "title": "Antecedentes",
        "subtitle": "Del pensamiento mecánico al cálculo simbólico",
        "showDecorator": true
      }
    },
    {
      "id": "slide-004",
      "order": 4,
      "type": "concept",
      "templateId": "template-b",
      "content": {
        "title": "De Leibniz a Lovelace",
        "body": "Gottfried Wilhelm Leibniz imaginó una characteristica universalis: un lenguaje formal en el que razonar equivaldría a calcular. Charles Babbage diseñó la máquina analítica —memoria, cálculo y control por tarjetas perforadas— como arquitectura general de cómputo. Ada Lovelace señaló que una máquina podría manipular símbolos más allá de los números si se formalizan.",
        "highlightTerms": ["characteristica universalis", "máquina analítica"]
      }
    },
    {
      "id": "slide-005",
      "order": 5,
      "type": "data",
      "templateId": "template-a",
      "content": {
        "title": "George Boole (1815–1864)",
        "stat": "1847",
        "body": "Su álgebra booleana convierte el razonamiento en operaciones formales (verdadero/falso), lo que después se traduce directamente en circuitos digitales y, en última instancia, en computación.",
        "source": "Álgebra booleana"
      }
    },
    {
      "id": "slide-006",
      "order": 6,
      "type": "concept",
      "templateId": "template-b",
      "content": {
        "title": "Turing, Wiener y el “negativo histórico”",
        "body": "Origen (1940–1950): Alan Turing formaliza el pensamiento como cálculo simbólico; Norbert Wiener desarrolla la cibernética y la retroalimentación. En síntesis aún no existía “IA” moderna, pero sí la intuición de que el pensamiento podía mecanizarse con símbolos y reglas —el negativo histórico de lo que vino después.",
        "highlightTerms": ["Alan Turing", "símbolos"]
      }
    },
    {
      "id": "slide-007",
      "order": 7,
      "type": "section-break",
      "templateId": "template-e",
      "content": {
        "title": "Evolución técnica",
        "subtitle": "De la teoría a la práctica",
        "showDecorator": true
      }
    },
    {
      "id": "slide-008",
      "order": 8,
      "type": "process",
      "templateId": "template-d",
      "content": {
        "title": "Línea temporal: 1950 a hoy",
        "steps": [
          {
            "number": 1,
            "title": "Nacimiento formal (1956)",
            "description": "En Dartmouth se establece el campo; McCarthy acuña el término “inteligencia artificial”. Predomina la confianza en reglas explícitas."
          },
          {
            "number": 2,
            "title": "Primeros sistemas (1960–1970)",
            "description": "Programas simbólicos, juegos y teoremas; ELIZA y reglas rígidas que fallan fuera de contextos controlados."
          },
          {
            "number": 3,
            "title": "Invierno de la IA (1970–1990)",
            "description": "Expectativas por encima de resultados; recortes de financiamiento. Sobreviven redes neuronales tempranas y sistemas expertos en nichos."
          },
          {
            "number": 4,
            "title": "Resurgimiento (1990–2010)",
            "description": "Machine learning: se entrenan modelos con datos; más cómputo y métodos estadísticos robustos."
          },
          {
            "number": 5,
            "title": "Revolución moderna (2010–2020)",
            "description": "Deep learning, grandes datasets y GPUs; la IA pasa a productos masivos en visión, voz y lenguaje."
          },
          {
            "number": 6,
            "title": "IA actual (2020–hoy)",
            "description": "Modelos fundacionales generativos; transformers que escalan con datos y cómputo; foco en alineación, control y uso productivo."
          }
        ]
      }
    },
    {
      "id": "slide-009",
      "order": 9,
      "type": "data",
      "templateId": "template-a",
      "content": {
        "title": "Transformer (2017)",
        "stat": "2017",
        "body": "Arquitectura fundacional para modelos de lenguaje a gran escala; marca un quiebre en cómo se modela la secuencia y la atención.",
        "source": "Vaswani et al., 2017"
      }
    },
    {
      "id": "slide-010",
      "order": 10,
      "type": "section-break",
      "templateId": "template-e",
      "content": {
        "title": "IA actual (2020–hoy)",
        "subtitle": "Modelos fundacionales y plataformas generales",
        "showDecorator": true
      }
    },
    {
      "id": "slide-011",
      "order": 11,
      "type": "concept",
      "templateId": "template-b",
      "content": {
        "title": "Modelos fundacionales",
        "body": "Sistemas generativos capaces de producir texto, imágenes, audio y código con alta coherencia. Herramientas como ChatGPT o Stable Diffusion muestran una transición: de sistemas especializados a plataformas generales.",
        "highlightTerms": ["fundacionales", "transformers"]
      }
    },
    {
      "id": "slide-012",
      "order": 12,
      "type": "comparison",
      "templateId": "template-c",
      "content": {
        "title": "Generaciones de IA",
        "columnALabel": "IA simbólica (1950–2000)",
        "columnBLabel": "Machine Learning + Deep Learning (2000–hoy)",
        "columnA": [
          "Reglas explícitas programadas",
          "Fallan fuera de contextos controlados",
          "Experta pero frágil"
        ],
        "columnB": [
          "Aprende patrones de datos",
          "Generaliza a casos nuevos",
          "Flexible pero a veces opaca"
        ]
      }
    },
    {
      "id": "slide-013",
      "order": 13,
      "type": "section-break",
      "templateId": "template-e",
      "content": {
        "title": "Campos y dominios",
        "subtitle": "Mapa sintético de subcampos y herramientas",
        "showDecorator": true
      }
    },
    {
      "id": "slide-014",
      "order": 14,
      "type": "concept",
      "templateId": "template-b",
      "content": {
        "title": "Tres ejes transversales",
        "body": "Podés pensar la inteligencia artificial no como un bloque homogéneo sino como un conjunto de dominios técnicos que se ramifican según el tipo de problema, la naturaleza de los datos y el objetivo epistemológico (predecir, generar, optimizar, demostrar, etc.). Hay tres ejes que atraviesan todo: predicción, generación y razonamiento.",
        "highlightTerms": ["predicción", "generación", "razonamiento"]
      }
    },
    {
      "id": "slide-015",
      "order": 15,
      "type": "data",
      "templateId": "template-a",
      "content": {
        "title": "Dominios principales",
        "stat": "9+",
        "body": "Un mapa sintético incluye medicina, generación visual, NLP, clasificadores predictivos, investigación matemática, robótica, economía, audio, IA científica y más.",
        "source": "Mapa del deck"
      }
    },
    {
      "id": "slide-016",
      "order": 16,
      "type": "concept",
      "templateId": "template-b",
      "content": {
        "title": "Medicina y generación visual",
        "body": "Medicina: diagnóstico por imagen, pronóstico clínico, fármacos, NLP médico (AlphaFold, Tempus, PathAI). Visual: difusión, GANs, video, NeRFs (Midjourney, Stable Diffusion, Runway).",
        "highlightTerms": ["AlphaFold", "difusión"]
      }
    },
    {
      "id": "slide-017",
      "order": 17,
      "type": "concept",
      "templateId": "template-b",
      "content": {
        "title": "Lenguaje y predicción",
        "body": "NLP: LLMs, clasificación de texto, traducción, resumen (ChatGPT, Claude, Cohere). Predicción: clasificación, regresión, anomalías, recomendación con árboles, random forests, XGBoost, redes neuronales (Scikit-learn, XGBoost).",
        "highlightTerms": ["LLMs", "XGBoost"]
      }
    },
    {
      "id": "slide-018",
      "order": 18,
      "type": "concept",
      "templateId": "template-b",
      "content": {
        "title": "Razonamiento formal, robótica y economía",
        "body": "Investigación matemática (estado emergente): asistentes de prueba, formalización, optimización combinatoria (Lean, Mathematica, Wolfram Alpha). Robótica: percepción, refuerzo, SLAM (Boston Dynamics, ROS). Economía: trading, scoring (TensorFlow en industria). Audio: ASR, TTS (Whisper, ElevenLabs).",
        "highlightTerms": ["Lean", "robótica"]
      }
    },
    {
      "id": "slide-019",
      "order": 19,
      "type": "section-break",
      "templateId": "template-e",
      "content": {
        "title": "IA en Argentina",
        "subtitle": "Adopción, percepción y uso",
        "showDecorator": true
      }
    },
    {
      "id": "slide-020",
      "order": 20,
      "type": "data",
      "templateId": "template-a",
      "content": {
        "title": "Adopción y percepción (Argentina)",
        "stat": "55%",
        "body": "El 55% de las empresas ya tiene proyectos de IA en marcha, pero solo el 13% de los trabajadores la usa regularmente. El 41% cree que su empresa está atrasada y el 47% que podría aprovecharla más: potencial no realizado más que saturación tecnológica.",
        "source": "Randstad Argentina; Infobae, 2024"
      }
    },
    {
      "id": "slide-021",
      "order": 21,
      "type": "concept",
      "templateId": "template-b",
      "content": {
        "title": "Sectores e impacto en el trabajo",
        "body": "En Argentina la adopción se concentra en servicios y economía del conocimiento, finanzas (scoring, fraude, analítica), salud creciente y PyMEs (automatización administrativa). Solo el 34% percibe impacto fuerte en su empleo; estudios del MIT sugieren impacto aún difuso en empleo y productividad, con reconfiguración de tareas más que reemplazo masivo inmediato.",
        "highlightTerms": ["servicios", "empleo"]
      }
    },
    {
      "id": "slide-022",
      "order": 22,
      "type": "data",
      "templateId": "template-a",
      "content": {
        "title": "Impacto económico potencial",
        "stat": "GPT",
        "body": "La IA puede aumentar productividad y crecimiento en Argentina; se la considera tecnología de propósito general, comparable a la electricidad o internet. Riesgos: concentración de mercado, dependencia tecnológica, brecha entre quienes adoptan y quienes no.",
        "source": "IAE; arXiv:2405.00225"
      }
    },
    {
      "id": "slide-023",
      "order": 23,
      "type": "comparison",
      "templateId": "template-c",
      "content": {
        "title": "Confiabilidad y lectura social",
        "columnALabel": "Capacidad y adopción",
        "columnBLabel": "Límites y cautela",
        "columnA": [
          "Alta capacidad en tareas asistidas",
          "Adopción estructural con proyectos en marcha",
          "Interés en productividad y automatización"
        ],
        "columnB": [
          "Baja robustez epistemológica: errores, sesgos en datos, poca explicabilidad",
          "Brecha entre interés y uso cotidiano",
          "Confiabilidad: asistir, no delegar; control humano y marcos claros"
        ]
      }
    },
    {
      "id": "slide-024",
      "order": 24,
      "type": "section-break",
      "templateId": "template-e",
      "content": {
        "title": "Diagnóstico sintético",
        "subtitle": "Dónde estamos hoy",
        "showDecorator": true
      }
    },
    {
      "id": "slide-025",
      "order": 25,
      "type": "comparison",
      "templateId": "template-c",
      "content": {
        "title": "Dimensiones del estado actual",
        "columnALabel": "Madurez tecnológica",
        "columnBLabel": "Implementación real",
        "columnA": [
          "Modelos fundacionales y oferta de plataformas",
          "Avances en visión, voz y lenguaje"
        ],
        "columnB": [
          "Uso cotidiano todavía bajo en trabajadores",
          "Adopción organizacional intermedia"
        ]
      }
    },
    {
      "id": "slide-026",
      "order": 26,
      "type": "data",
      "templateId": "template-a",
      "content": {
        "title": "Cuatro preguntas clave",
        "stat": "Para pensar",
        "body": "Infraestructura y oferta tecnológica: muy avanzada. Adopción organizacional: intermedia. Uso cotidiano real: bajo. Confiabilidad: suficiente para asistir, no para delegar.",
        "source": "Síntesis del deck"
      }
    },
    {
      "id": "slide-027",
      "order": 27,
      "type": "concept",
      "templateId": "template-b",
      "content": {
        "title": "IA como herramienta",
        "body": "La IA no es destino inevitable: la responsabilidad sigue siendo humana en alineación, control, marcos éticos y uso productivo.",
        "highlightTerms": ["herramienta", "responsabilidad"]
      }
    },
    {
      "id": "slide-028",
      "order": 28,
      "type": "section-break",
      "templateId": "template-e",
      "content": {
        "title": "Preguntas",
        "subtitle": "Apertura al debate",
        "showDecorator": true
      }
    },
    {
      "id": "slide-029",
      "order": 29,
      "type": "concept",
      "templateId": "template-b",
      "content": {
        "title": "¿Cómo funcionan los transformers?",
        "body": "Opcional: profundidad técnica sobre atención, paralelización y escalado con datos y cómputo.",
        "eyebrow": "Profundización",
        "highlightTerms": ["transformers", "atención"]
      }
    },
    {
      "id": "slide-030",
      "order": 30,
      "type": "data",
      "templateId": "template-a",
      "content": {
        "title": "Recursos de aprendizaje",
        "stat": "IBM",
        "body": "Historia y fundamentos de la IA: material de referencia para ampliar lectura.",
        "source": "https://www.ibm.com/es-es/think/topics/history-of-artificial-intelligence"
      }
    }
  ]
}
```

---

## Checklist rápido

- [ ] 30 slides, orden fijo 1–30, mismos `id` y mismos strings que el JSON.
- [ ] Tipos de layout: `section-break`, `concept`, `data`, `process`, `comparison`.
- [ ] Navegación teclado + UI; contador `n / 30`.
- [ ] Copy en español (es-AR) sin reformular.
- [ ] GSAP con `prefers-reduced-motion`.
