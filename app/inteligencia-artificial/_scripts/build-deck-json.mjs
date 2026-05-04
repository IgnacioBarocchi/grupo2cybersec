/**
 * One-off generator for _data/deck.json (run from repo root):
 *   node app/inteligencia-artificial/_scripts/build-deck-json.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const out = path.join(__dirname, '..', '_data', 'deck.json')

let order = 1
const slides = []

const sb = (num, title, subtitle) => {
  slides.push({
    id: `slide-${num}`,
    order: order++,
    type: 'section-break',
    templateId: 'template-e',
    content: { title, subtitle, showDecorator: true },
  })
}

const concept = (num, title, body, eyebrow, highlightTerms) => {
  slides.push({
    id: `slide-${num}`,
    order: order++,
    type: 'concept',
    templateId: 'template-b',
    content: { title, body, eyebrow, highlightTerms },
  })
}

const data = (num, title, stat, body, source) => {
  slides.push({
    id: `slide-${num}`,
    order: order++,
    type: 'data',
    templateId: 'template-a',
    content: { title, stat, body, source },
  })
}

const comparison = (num, title, columnALabel, columnBLabel, columnA, columnB) => {
  slides.push({
    id: `slide-${num}`,
    order: order++,
    type: 'comparison',
    templateId: 'template-c',
    content: { title, columnALabel, columnBLabel, columnA, columnB },
  })
}

const proc = (num, title, steps) => {
  slides.push({
    id: `slide-${num}`,
    order: order++,
    type: 'process',
    templateId: 'template-d',
    content: { title, steps },
  })
}

/* —— Section 0 —— */
sb('001', 'Inteligencia Artificial', 'Fundamentos, evolución y realidad argentina')
concept(
  '002',
  '¿Qué es la inteligencia artificial?',
  'Un conjunto de sistemas capaces de realizar tareas que típicamente requieren inteligencia humana. Esto incluye aprendizaje de patrones, reconocimiento, toma de decisiones y procesamiento de información.',
  '¿De qué hablamos?',
  ['inteligencia humana', 'aprendizaje'],
)

/* —— Section 1: Antecedentes —— */
sb('003', 'Antecedentes', 'Del pensamiento mecánico al cálculo simbólico')
concept(
  '004',
  'De Leibniz a Lovelace',
  'Gottfried Wilhelm Leibniz imaginó una characteristica universalis: un lenguaje formal en el que razonar equivaldría a calcular. Charles Babbage diseñó la máquina analítica —memoria, cálculo y control por tarjetas perforadas— como arquitectura general de cómputo. Ada Lovelace señaló que una máquina podría manipular símbolos más allá de los números si se formalizan.',
  undefined,
  ['characteristica universalis', 'máquina analítica'],
)
data(
  '005',
  'George Boole (1815–1864)',
  '1847',
  'Su álgebra booleana convierte el razonamiento en operaciones formales (verdadero/falso), lo que después se traduce directamente en circuitos digitales y, en última instancia, en computación.',
  'Álgebra booleana',
)
concept(
  '006',
  'Turing, Wiener y el “negativo histórico”',
  'Origen (1940–1950): Alan Turing formaliza el pensamiento como cálculo simbólico; Norbert Wiener desarrolla la cibernética y la retroalimentación. En síntesis aún no existía “IA” moderna, pero sí la intuición de que el pensamiento podía mecanizarse con símbolos y reglas —el negativo histórico de lo que vino después.',
  undefined,
  ['Alan Turing', 'símbolos'],
)

/* —— Section 2 —— */
sb('007', 'Evolución técnica', 'De la teoría a la práctica')
proc('008', 'Línea temporal: 1950 a hoy', [
  {
    number: 1,
    title: 'Nacimiento formal (1956)',
    description:
      'En Dartmouth se establece el campo; McCarthy acuña el término “inteligencia artificial”. Predomina la confianza en reglas explícitas.',
  },
  {
    number: 2,
    title: 'Primeros sistemas (1960–1970)',
    description:
      'Programas simbólicos, juegos y teoremas; ELIZA y reglas rígidas que fallan fuera de contextos controlados.',
  },
  {
    number: 3,
    title: 'Invierno de la IA (1970–1990)',
    description:
      'Expectativas por encima de resultados; recortes de financiamiento. Sobreviven redes neuronales tempranas y sistemas expertos en nichos.',
  },
  {
    number: 4,
    title: 'Resurgimiento (1990–2010)',
    description:
      'Machine learning: se entrenan modelos con datos; más cómputo y métodos estadísticos robustos.',
  },
  {
    number: 5,
    title: 'Revolución moderna (2010–2020)',
    description:
      'Deep learning, grandes datasets y GPUs; la IA pasa a productos masivos en visión, voz y lenguaje.',
  },
  {
    number: 6,
    title: 'IA actual (2020–hoy)',
    description:
      'Modelos fundacionales generativos; transformers que escalan con datos y cómputo; foco en alineación, control y uso productivo.',
  },
])
data(
  '009',
  'Transformer (2017)',
  '2017',
  'Arquitectura fundacional para modelos de lenguaje a gran escala; marca un quiebre en cómo se modela la secuencia y la atención.',
  'Vaswani et al., 2017',
)
sb('010', 'IA actual (2020–hoy)', 'Modelos fundacionales y plataformas generales')
concept(
  '011',
  'Modelos fundacionales',
  'Sistemas generativos capaces de producir texto, imágenes, audio y código con alta coherencia. Herramientas como ChatGPT o Stable Diffusion muestran una transición: de sistemas especializados a plataformas generales.',
  undefined,
  ['fundacionales', 'transformers'],
)
comparison(
  '012',
  'Generaciones de IA',
  'IA simbólica (1950–2000)',
  'Machine Learning + Deep Learning (2000–hoy)',
  [
    'Reglas explícitas programadas',
    'Fallan fuera de contextos controlados',
    'Experta pero frágil',
  ],
  [
    'Aprende patrones de datos',
    'Generaliza a casos nuevos',
    'Flexible pero a veces opaca',
  ],
)

/* —— Section 3: Campos —— */
sb('013', 'Campos y dominios', 'Mapa sintético de subcampos y herramientas')
concept(
  '014',
  'Tres ejes transversales',
  'Podés pensar la inteligencia artificial no como un bloque homogéneo sino como un conjunto de dominios técnicos que se ramifican según el tipo de problema, la naturaleza de los datos y el objetivo epistemológico (predecir, generar, optimizar, demostrar, etc.). Hay tres ejes que atraviesan todo: predicción, generación y razonamiento.',
  undefined,
  ['predicción', 'generación', 'razonamiento'],
)
data(
  '015',
  'Dominios principales',
  '9+',
  'Un mapa sintético incluye medicina, generación visual, NLP, clasificadores predictivos, investigación matemática, robótica, economía, audio, IA científica y más.',
  'Mapa del deck',
)
concept(
  '016',
  'Medicina y generación visual',
  'Medicina: diagnóstico por imagen, pronóstico clínico, fármacos, NLP médico (AlphaFold, Tempus, PathAI). Visual: difusión, GANs, video, NeRFs (Midjourney, Stable Diffusion, Runway).',
  undefined,
  ['AlphaFold', 'difusión'],
)
concept(
  '017',
  'Lenguaje y predicción',
  'NLP: LLMs, clasificación de texto, traducción, resumen (ChatGPT, Claude, Cohere). Predicción: clasificación, regresión, anomalías, recomendación con árboles, random forests, XGBoost, redes neuronales (Scikit-learn, XGBoost).',
  undefined,
  ['LLMs', 'XGBoost'],
)
concept(
  '018',
  'Razonamiento formal, robótica y economía',
  'Investigación matemática (estado emergente): asistentes de prueba, formalización, optimización combinatoria (Lean, Mathematica, Wolfram Alpha). Robótica: percepción, refuerzo, SLAM (Boston Dynamics, ROS). Economía: trading, scoring (TensorFlow en industria). Audio: ASR, TTS (Whisper, ElevenLabs).',
  undefined,
  ['Lean', 'robótica'],
)

/* —— Section 4: Argentina —— */
sb('019', 'IA en Argentina', 'Adopción, percepción y uso')
data(
  '020',
  'Adopción y percepción (Argentina)',
  '55%',
  'El 55% de las empresas ya tiene proyectos de IA en marcha, pero solo el 13% de los trabajadores la usa regularmente. El 41% cree que su empresa está atrasada y el 47% que podría aprovecharla más: potencial no realizado más que saturación tecnológica.',
  'Randstad Argentina; Infobae, 2024',
)
concept(
  '021',
  'Sectores e impacto en el trabajo',
  'En Argentina la adopción se concentra en servicios y economía del conocimiento, finanzas (scoring, fraude, analítica), salud creciente y PyMEs (automatización administrativa). Solo el 34% percibe impacto fuerte en su empleo; estudios del MIT sugieren impacto aún difuso en empleo y productividad, con reconfiguración de tareas más que reemplazo masivo inmediato.',
  undefined,
  ['servicios', 'empleo'],
)
data(
  '022',
  'Impacto económico potencial',
  'GPT',
  'La IA puede aumentar productividad y crecimiento en Argentina; se la considera tecnología de propósito general, comparable a la electricidad o internet. Riesgos: concentración de mercado, dependencia tecnológica, brecha entre quienes adoptan y quienes no.',
  'IAE; arXiv:2405.00225',
)
comparison(
  '023',
  'Confiabilidad y lectura social',
  'Capacidad y adopción',
  'Límites y cautela',
  [
    'Alta capacidad en tareas asistidas',
    'Adopción estructural con proyectos en marcha',
    'Interés en productividad y automatización',
  ],
  [
    'Baja robustez epistemológica: errores, sesgos en datos, poca explicabilidad',
    'Brecha entre interés y uso cotidiano',
    'Confiabilidad: asistir, no delegar; control humano y marcos claros',
  ],
)

/* —— Section 5 —— */
sb('024', 'Diagnóstico sintético', 'Dónde estamos hoy')
comparison(
  '025',
  'Dimensiones del estado actual',
  'Madurez tecnológica',
  'Implementación real',
  ['Modelos fundacionales y oferta de plataformas', 'Avances en visión, voz y lenguaje'],
  ['Uso cotidiano todavía bajo en trabajadores', 'Adopción organizacional intermedia'],
)
data(
  '026',
  'Cuatro preguntas clave',
  'Para pensar',
  'Infraestructura y oferta tecnológica: muy avanzada. Adopción organizacional: intermedia. Uso cotidiano real: bajo. Confiabilidad: suficiente para asistir, no para delegar.',
  'Síntesis del deck',
)
concept(
  '027',
  'IA como herramienta',
  'La IA no es destino inevitable: la responsabilidad sigue siendo humana en alineación, control, marcos éticos y uso productivo.',
  undefined,
  ['herramienta', 'responsabilidad'],
)
sb('028', 'Preguntas', 'Apertura al debate')

/* —— Optional deep dives —— */
concept(
  '029',
  '¿Cómo funcionan los transformers?',
  'Opcional: profundidad técnica sobre atención, paralelización y escalado con datos y cómputo.',
  'Profundización',
  ['transformers', 'atención'],
)
data(
  '030',
  'Recursos de aprendizaje',
  'IBM',
  'Historia y fundamentos de la IA: material de referencia para ampliar lectura.',
  'https://www.ibm.com/es-es/think/topics/history-of-artificial-intelligence',
)

const doc = {
  id: 'ia-presentacion-2026',
  title: 'Inteligencia Artificial',
  locale: 'es-AR',
  metadata: {
    institution: 'Facultad de Ingeniería',
    course: 'Grupo 2 - Ciberseguridad',
  },
  slides,
}

fs.mkdirSync(path.dirname(out), { recursive: true })
fs.writeFileSync(out, JSON.stringify(doc, null, 2), 'utf8')
console.log('Wrote', out, 'slides:', slides.length)
