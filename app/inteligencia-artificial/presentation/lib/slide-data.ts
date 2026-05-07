export const titleSlide = {
  institution: "Instituto de Formación Técnica Superior n° 11",
  career: "Carrera: Técnico en Desarrollo de Software",
  date: "Abril de 2026",
  topic: "Inteligencia Artificial: Fundamentos, evolución y realidad argentina",
  members: [
    "Araujo Facundo",
    "Ocampo Cristian",
    "Barocchi Ignacio",
    "Celeste Maia",
    "Cantero Esteban",
    "Gabriel Bergamini",
  ],
};

// Slide 02: Concept
export const slide002 = {
  eyebrow: "¿De qué hablamos?",
  title: "¿Qué es la inteligencia artificial?",
  body: "Un conjunto de sistemas capaces de realizar tareas que típicamente requieren inteligencia humana. Esto incluye aprendizaje de patrones, reconocimiento, toma de decisiones y procesamiento de información.",
  highlightTerms: ["inteligencia humana", "aprendizaje"],
};

// Slide 03: Section break
export const slide003 = {
  type: "section-break",
  title: "Antecedentes",
  subtitle: "Del pensamiento mecánico al cálculo simbólico",
  showDecorator: true,
};

// Slide 04: Concept
export const slide004 = {
  title: "De Leibniz a Lovelace",
  body: "Gottfried Wilhelm Leibniz imaginó una characteristica universalis: un lenguaje formal en el que razonar equivaldría a calcular. Charles Babbage diseñó la máquina analítica —memoria, cálculo y control por tarjetas perforadas— como arquitectura general de cómputo. Ada Lovelace señaló que una máquina podría manipular símbolos más allá de los números si se formalizan.",
  highlightTerms: ["characteristica universalis", "máquina analítica"],
  rightVisual: {
    type: "portrait-cards",
    cards: [
      {
        src: "/assets/figures/ada-lovelace.jpg",
        alt: "Retrato de Ada Lovelace",
      },
      {
        src: "/assets/figures/leibniz.jpg",
        alt: "Retrato de Gottfried Wilhelm Leibniz",
      },
    ],
  },
};

// Slide 05: Data
export const slide005 = {
  type: "data",
  title: "George Boole (1815–1864)",
  stat: "1847",
  body: "Su álgebra booleana convierte el razonamiento en operaciones formales (verdadero/falso), lo que después se traduce directamente en circuitos digitales y, en última instancia, en computación.",
  source: "Álgebra booleana",
  rightVisual: {
    type: "portrait-card",
    card: {
      src: "/assets/figures/george-boole.jpg",
      alt: "Retrato de George Boole",
    },
  },
};

// Slide 06: Concept
export const slide006 = {
  title: "Turing, Wiener y el negativo histórico",
  body: "Origen (1940–1950): Alan Turing formaliza el pensamiento como cálculo simbólico; Norbert Wiener desarrolla la cibernética y la retroalimentación. En síntesis aún no existía IA moderna, pero sí la intuición de que el pensamiento podía mecanizarse con símbolos y reglas —el negativo histórico de lo que vino después.",
  highlightTerms: ["Alan Turing", "símbolos"],
  rightVisual: {
    type: "portrait-cards",
    cards: [
      {
        src: "/assets/figures/alan-turing.jpg",
        alt: "Retrato de Alan Turing",
      },
      {
        src: "/assets/figures/norbert-wiener.png",
        alt: "Retrato de Norbert Wiener",
      },
    ],
  },
};

// Slide 07: Section break
export const slide007 = {
  type: "section-break",
  title: "Evolución técnica",
  subtitle: "De la teoría a la práctica",
  showDecorator: true,
};

// Slide 08: Process/Timeline
export const slide008 = {
  type: "timeline",
  title: "Línea temporal: 1950 a hoy",
  steps: [
    {
      number: 1,
      year: "1956",
      title: "Nacimiento formal",
      description: "En Dartmouth se establece el campo; McCarthy acuña el término \"inteligencia artificial\". Predomina la confianza en reglas explícitas.",
    },
    {
      number: 2,
      year: "1960–1970",
      title: "Primeros sistemas",
      description: "Programas simbólicos, juegos y teoremas; ELIZA y reglas rígidas que fallan fuera de contextos controlados.",
    },
    {
      number: 3,
      year: "1970–1990",
      title: "Invierno de la IA",
      description: "Expectativas por encima de resultados; recortes de financiamiento. Sobreviven redes neuronales tempranas.",
    },
    {
      number: 4,
      year: "1990–2010",
      title: "Resurgimiento",
      description: "Machine learning: se entrenan modelos con datos; más cómputo y métodos estadísticos robustos.",
    },
    {
      number: 5,
      year: "2010–2020",
      title: "Revolución moderna",
      description: "Deep learning, grandes datasets y GPUs; la IA pasa a productos masivos en visión, voz y lenguaje.",
    },
    {
      number: 6,
      year: "2020–hoy",
      title: "IA actual",
      description: "Modelos fundacionales generativos; transformers que escalan con datos y cómputo.",
    },
  ],
};

// Slide 09: Data
export const slide009 = {
  type: "data",
  title: "Transformer (2017)",
  stat: "2017",
  body: "Arquitectura fundacional para modelos de lenguaje a gran escala; marca un quiebre en cómo se modela la secuencia y la atención.",
  source: "Vaswani et al., 2017",
};

// Slide 10: Section break
export const slide010 = {
  type: "section-break",
  title: "IA actual (2020–hoy)",
  subtitle: "Modelos fundacionales y plataformas generales",
  showDecorator: true,
};

// Slide 11: Concept
export const slide011 = {
  title: "Modelos fundacionales",
  body: "Sistemas generativos capaces de producir texto, imágenes, audio y código con alta coherencia. Herramientas como ChatGPT o Stable Diffusion muestran una transición: de sistemas especializados a plataformas generales.",
  highlightTerms: ["fundacionales", "transformers"],
};

// Slide 12: Comparison
export const slide012 = {
  type: "comparison",
  title: "Generaciones de IA",
  columnALabel: "IA simbólica (1950–2000)",
  columnBLabel: "Machine Learning + Deep Learning (2000–hoy)",
  columnA: [
    "Reglas explícitas programadas",
    "Fallan fuera de contextos controlados",
    "Experta pero frágil",
  ],
  columnB: [
    "Aprende patrones de datos",
    "Generaliza a casos nuevos",
    "Flexible pero a veces opaca",
  ],
};

// Slide 13: Section break
export const slide013 = {
  type: "section-break",
  title: "Campos y dominios",
  subtitle: "Mapa sintético de subcampos y herramientas",
  showDecorator: true,
};

// Slide 14: Concept
export const slide014 = {
  title: "Tres ejes transversales",
  body: "Podés pensar la inteligencia artificial no como un bloque homogéneo sino como un conjunto de dominios técnicos que se ramifican según el tipo de problema, la naturaleza de los datos y el objetivo epistemológico (predecir, generar, optimizar, demostrar, etc.). Hay tres ejes que atraviesan todo: predicción, generación y razonamiento.",
  highlightTerms: ["predicción", "generación", "razonamiento"],
};

// Slide 15: Data
export const slide015 = {
  type: "data",
  title: "Dominios principales",
  stat: "9+",
  body: "Un mapa sintético incluye medicina, generación visual, NLP, clasificadores predictivos, investigación matemática, robótica, economía, audio, IA científica y más.",
  source: "Mapa del deck",
};

// Slide 16: Concept
export const slide016 = {
  title: "Ecosistema multimodal y generación sintética",
  body: "La IA actual no se limita al texto: procesa y genera imagen, audio y video de forma nativa. Cada modalidad combina capacidades productivas con nuevos desafíos sobre confianza, trazabilidad y veracidad de la información.",
  highlightTerms: ["multimodal", "generación sintética", "veracidad"],
  domainCards: [
    {
      title: "Generación de imagen",
      summary:
        "Dominada por Midjourney (estética artística), DALL·E 3 (precisión semántica) y Stable Diffusion (control técnico y código abierto).",
      tools: ["Midjourney", "DALL·E 3", "Stable Diffusion"],
    },
    {
      title: "Música y audio",
      summary:
        "Suno y Udio crean composiciones completas con voz y letra. ElevenLabs revolucionó doblaje y síntesis vocal, pero aceleró riesgos de deepfakes.",
      tools: ["Suno", "Udio", "ElevenLabs"],
      note: "Desafío crítico: validar autenticidad y contexto del audio generado.",
      tone: "risk",
    },
    {
      title: "Video",
      summary:
        "Modelos como Sora transforman la producción audiovisual al permitir escenas cinemáticas a partir de descripciones textuales.",
      tools: ["Sora"],
    },
  ],
  rightVisual: {
    type: "media-cards",
    layout: "skew-overlap",
    cards: [
      {
        src: "/assets/slides/medicine-aidetectscov.jpg",
        alt: "Ejemplos de radiografías y mapas Grad-CAM para detección de COVID",
      },
      {
        src: "/assets/slides/nano-banana-pro.jpg",
        alt: "Pantalla promocional con texto Nano Banana Pro",
      },
      {
        src: "/assets/slides/claude-creative-workflow.gif",
        alt: "Interfaz de Claude conectada a herramientas creativas",
      },
      {
        src: "/assets/slides/suno-ai.jpg",
        alt: "Logo de Suno sobre fondo negro",
      },
    ],
  },
};

// Slide 17: Concept
export const slide017 = {
  title: "Lenguaje y predicción",
  body: "NLP: LLMs, clasificación de texto, traducción, resumen (ChatGPT, Claude, Cohere). Predicción: clasificación, regresión, anomalías, recomendación con árboles, random forests, XGBoost, redes neuronales.",
  highlightTerms: ["LLMs", "XGBoost"],
  rightVisual: {
    type: "media-cards",
    layout: "skew-overlap-landscape",
    cards: [
      {
        src: "/assets/slides/ai-coding.gif",
        alt: "Asistente de IA ayudando a programar",
        fit: "contain",
      },
      {
        src: "/assets/slides/1749685760769.jpg",
        alt: "Logo de Claude en fondo claro",
        fit: "contain",
      },
      {
        src: "/assets/slides/meta-ollama-llama3.png",
        alt: "Logo de Meta junto a referencia de Llama 3 y Ollama",
        fit: "contain",
      },
      {
        src: "/assets/slides/Chat-GPT-logo.webp",
        alt: "Logo de ChatGPT",
        fit: "contain",
      },
    ],
  },
};

// Slide 18: Concept
export const slide018 = {
  title: "Razonamiento formal, robótica y economía",
  body: "Investigación matemática (estado emergente): asistentes de prueba, formalización, optimización combinatoria (Lean, Mathematica, Wolfram Alpha). Robótica: percepción, refuerzo, SLAM (Boston Dynamics, ROS). Economía: trading, scoring (TensorFlow en industria). Audio: ASR, TTS (Whisper, ElevenLabs).",
  highlightTerms: ["Lean", "robótica"],
  rightVisual: {
    type: "media-cards",
    cards: [
      {
        src: "/assets/slides/robots.jpg",
        alt: "Robots de Boston Dynamics",
      },
      {
        src: "/assets/slides/cv-agriculture.gif",
        alt: "Detección de racimos de uva con visión por computadora",
      },
    ],
  },
};

/** Opacity (0–1) for the flag background on the “IA en Argentina” section slide. */
export const IA_ARGENTINA_SECTION_BG_OPACITY = 0.025

// Slide 19: Section break
export const slide019 = {
  type: "section-break",
  title: "IA en Argentina",
  subtitle: "Adopción, percepción y uso",
  showDecorator: true,
  backgroundImage: "/ia-argentina-bg.png",
  backgroundOpacity: IA_ARGENTINA_SECTION_BG_OPACITY,
};

// Slide 20: Data
export const slide020 = {
  type: "data",
  title: "Adopción y percepción (Argentina)",
  stat: "55%",
  body: "El 55% de las empresas ya tiene proyectos de IA en marcha, pero solo el 13% de los trabajadores la usa regularmente. El 41% cree que su empresa está atrasada y el 47% que podría aprovecharla más.",
  source: "Randstad Argentina; Infobae, 2024",
};

// Slide 21: Concept
export const slide021 = {
  title: "Sectores e impacto en el trabajo",
  body: "En Argentina la adopción se concentra en servicios y economía del conocimiento, finanzas (scoring, fraude, analítica), salud creciente y PyMEs (automatización administrativa). Solo el 34% percibe impacto fuerte en su empleo; estudios del MIT sugieren impacto aún difuso en empleo y productividad, con reconfiguración de tareas más que reemplazo masivo inmediato.",
  highlightTerms: ["servicios", "empleo"],
  sideColumn: {
    title: "La nueva realidad laboral: agentes y autonomía",
    items: [
      {
        heading: "Claude Code y Anthropic",
        body: "Anthropic, empresa fundada por ex-directivos de OpenAI con foco en seguridad, desarrolla Claude Code: un agente que vive en terminal, puede leer bases de código completas, ejecutar comandos y reparar fallos de software de forma autónoma.",
      },
      {
        heading: "Transformación de roles",
        body: "En 2026 la productividad escala con IA agéntica: los profesionales pasan de ejecutar tareas aisladas a orquestar múltiples sistemas inteligentes que gestionan flujos de trabajo completos.",
      },
    ],
  },
};

// Slide 22: Data
export const slide022 = {
  type: "data",
  title: "Impacto económico potencial",
  stat: "GPT",
  body: "La IA puede aumentar productividad y crecimiento en Argentina; se la considera tecnología de propósito general, comparable a la electricidad o internet. Riesgos: concentración de mercado, dependencia tecnológica, brecha entre quienes adoptan y quienes no.",
  source: "IAE; arXiv:2405.00225",
};

// Slide 23: Comparison
export const slide023 = {
  type: "comparison",
  title: "Confiabilidad y lectura social",
  columnALabel: "Capacidad y adopción",
  columnBLabel: "Límites y cautela",
  columnA: [
    "Alta capacidad en tareas asistidas",
    "Adopción estructural con proyectos en marcha",
    "Interés en productividad y automatización",
  ],
  columnB: [
    "Baja robustez epistemológica: errores, sesgos",
    "Brecha entre interés y uso cotidiano",
    "Confiabilidad: asistir, no delegar",
  ],
};

// Slide 24: Section break
export const slide024 = {
  type: "section-break",
  title: "Diagnóstico sintético",
  subtitle: "Dónde estamos hoy",
  showDecorator: true,
};

// Slide 25: Comparison
export const slide025 = {
  type: "comparison",
  title: "Dimensiones del estado actual",
  columnALabel: "Madurez tecnológica",
  columnBLabel: "Implementación real",
  columnA: [
    "Modelos fundacionales y oferta de plataformas",
    "Avances en visión, voz y lenguaje",
  ],
  columnB: [
    "Uso cotidiano todavía bajo en trabajadores",
    "Adopción organizacional intermedia",
  ],
  sustainabilityPanel: {
    title: "El desafío de la sostenibilidad: energía y agua",
    points: [
      "Consumo energético: una consulta a un modelo de IA puede consumir cerca de 10 veces más electricidad que una búsqueda tradicional en Google.",
      "Huella hídrica: los centros de datos requieren enfriamiento constante; se estima que cada 10 a 50 consultas consumen alrededor de 500 ml de agua dulce.",
      "En 2026, gestionar energía y agua se consolida como uno de los mayores retos éticos de la industria.",
    ],
  },
};

// Slide 26: Data
export const slide026 = {
  title: "Conclusiones clave",
  body: "Síntesis final del recorrido: de la evolución histórica a los desafíos de adopción responsable.",
  domainCards: [
    {
      title: "Un punto de inflexión histórico",
      summary:
        "En menos de 75 años, la IA pasó de teoría académica a infraestructura global. La velocidad de cambio se acelera, no se detiene.",
    },
    {
      title: "Multimodalidad y riesgo",
      summary:
        "La generación sintética democratiza la creatividad, pero exige nuevos marcos de verificación, regulación y alfabetización digital.",
      tone: "risk",
    },
    {
      title: "El profesional como orquestador",
      summary:
        "La IA agéntica redefine los roles laborales. Adaptarse implica aprender a dirigir sistemas inteligentes, no solo usarlos.",
    },
    {
      title: "Sostenibilidad como prioridad",
      summary:
        "El impacto energético e hídrico de la IA debe integrarse en cualquier estrategia responsable de adopción tecnológica.",
    },
  ],
};

// Slide 27: Concept
export const slide027 = {
  title: "IA como herramienta",
  body: "La IA no es destino inevitable: la responsabilidad sigue siendo humana en alineación, control, marcos éticos, uso productivo y gestión activa de riesgos emergentes.",
  highlightTerms: ["herramienta", "responsabilidad"],
  rightVisual: {
    type: "media-cards",
    layout: "landscape",
    cards: [
      {
        src: "/assets/slides/papa-abrigo-balenciaga-deepfake-ia.jpg",
        alt: "Imagen viral del Papa con abrigo blanco creada con IA",
        fit: "cover",
        caption:
          "«Deepfake»: contenido visual o sonoro manipulado con IA que aparenta ser real.",
      },
      {
        src: "/assets/slides/Deepfake-Barack-Obama-01-01-1.webp",
        alt: "Ejemplo de deepfake con Barack Obama",
        fit: "cover",
        caption: "Caso de referencia usado para mostrar riesgos de desinformación.",
      },
    ],
  },
  domainCards: [
    {
      title: "El riesgo de los deepfakes",
      summary:
        "La clonación de voz y la generación de vídeo sintético plantean desafíos críticos para la veracidad de la información. Cuando cualquier persona puede crear audio o vídeo hiperrealista de figuras públicas, los marcos regulatorios y la alfabetización mediática se vuelven urgentes.",
      tone: "risk",
      note: "La Unión Europea ya exige etiquetado obligatorio de contenidos generados por IA bajo el AI Act (2024).",
    },
    {
      title: "Consumo energético e huella hídrica",
      summary:
        "Una consulta a un modelo de IA consume ~10 veces más electricidad que una búsqueda en Google. Por cada 10–50 consultas, los servidores consumen ~500 ml de agua dulce para refrigeración.",
      media: {
        src: "/assets/slides/agua.jpeg",
        alt: "Sistemas de refrigeración en infraestructura de servidores",
        fit: "cover",
      },
    },
  ],
};

// Slide 28: Section break
export const slide028 = {
  type: "section-break",
  title: "Preguntas",
  subtitle: "Apertura al debate",
  showDecorator: true,
};

// Slide 29: Concept
export const slide029 = {
  eyebrow: "Profundización",
  title: "¿Cómo funcionan los transformers?",
  body: "Opcional: profundidad técnica sobre atención, paralelización y escalado con datos y cómputo.",
  highlightTerms: ["transformers", "atención"],
};

// Slide 30: Data
export const slide030 = {
  type: "data",
  title: "Recursos de aprendizaje",
  stat: "IBM",
  body: "Historia y fundamentos de la IA: material de referencia para ampliar lectura.",
  source: "https://www.ibm.com/es-es/think/topics/history-of-artificial-intelligence",
};

export const sourcesData = [
  { name: "IBM AI History", url: "https://www.ibm.com/es-es/think/topics/history-of-artificial-intelligence" },
  { name: "ArXiv 2405.00225", url: "https://arxiv.org/abs/2405.00225" },
  { name: "OpenAI", url: "https://openai.com" },
  { name: "Stable Diffusion", url: "https://stablediffusionweb.com" },
  { name: "AlphaFold", url: "https://alphafold.deepmind.com" },
  { name: "Hugging Face", url: "https://huggingface.co" },
];
