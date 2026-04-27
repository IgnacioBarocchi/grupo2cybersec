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
  'Leibniz (1646–1716)',
  'Gottfried Wilhelm Leibniz imaginó una characteristica universalis: un lenguaje formal en el que razonar equivaldría a calcular. Esa intuición —pensar como cálculo simbólico— es la que retoma Alan Turing dos siglos después.',
  undefined,
  ['characteristica universalis', 'calcular'],
)
concept(
  '005',
  'Babbage y Lovelace (1810–1860)',
  'El caso más directo es Charles Babbage. Diseñó la máquina analítica, un dispositivo mecánico programable que ya incluía elementos que hoy reconocerías sin esfuerzo: memoria, unidad de cálculo y control mediante tarjetas perforadas. No era simplemente una calculadora: era una arquitectura general de cómputo, aunque nunca llegó a construirse completamente. La figura más sugerente en relación con la IA es Ada Lovelace. En sus notas sobre la máquina de Babbage introduce una idea decisiva: una máquina podría manipular símbolos más allá de los números, siempre que esos símbolos se formalicen.',
  undefined,
  ['máquina analítica', 'Ada Lovelace'],
)
data(
  '006',
  'George Boole (1815–1864)',
  '1847',
  'Su álgebra booleana convierte el razonamiento en operaciones formales (verdadero/falso), lo que después se traduce directamente en circuitos digitales y, en última instancia, en computación.',
  'Álgebra booleana',
)
concept(
  '007',
  'Turing y Wiener (1930–1950)',
  'Origen (1940–1950): surge la idea de máquinas que puedan “pensar” en el cruce entre lógica matemática y computación. Alan Turing propone que el pensamiento puede formalizarse como cálculo simbólico, mientras Norbert Wiener desarrolla la cibernética: sistemas que se autorregulan mediante retroalimentación.',
  undefined,
  ['Alan Turing', 'cibernética'],
)
concept(
  '008',
  'Síntesis: el negativo histórico',
  'En síntesis: no había “inteligencia artificial” en sentido moderno, pero sí una intuición muy precisa —casi arquitectónica— de que el pensamiento podía mecanizarse si se lo reducía a símbolos y reglas. Esa idea es el negativo histórico de todo lo que vino después.',
  undefined,
  ['símbolos', 'reglas'],
)

/* —— Section 2 —— */
sb('009', 'Evolución técnica', 'De la teoría a la práctica')
proc('010', 'Línea temporal: 1950–1980', [
  {
    number: 1,
    title: 'Nacimiento formal (1956)',
    description:
      'En la conferencia de Dartmouth se establece el campo como disciplina. John McCarthy acuña el término “inteligencia artificial”. Predomina una confianza fuerte: la inteligencia humana parece traducible a reglas explícitas.',
  },
  {
    number: 2,
    title: 'Primeros sistemas (1960–1970)',
    description:
      'Se desarrollan programas simbólicos: resolución de problemas, juegos, demostración de teoremas. Sistemas como ELIZA simulan diálogo. Sin embargo, dependen de reglas rígidas y fallan fuera de entornos controlados.',
  },
  {
    number: 3,
    title: 'Invierno de la IA (1970–1990)',
    description:
      'Las expectativas superan a los resultados. Limitaciones computacionales, escasez de datos y fragilidad de los modelos provocan recortes de financiamiento. Aun así, sobreviven líneas como redes neuronales tempranas y sistemas expertos en nichos industriales.',
  },
])
proc('011', 'Línea temporal: 1990–2010', [
  {
    number: 1,
    title: 'Resurgimiento (1990–2010)',
    description:
      'La IA se reconfigura como machine learning: en lugar de programar reglas, se entrenan modelos con datos. Aumenta el poder computacional y aparecen métodos estadísticos robustos.',
  },
  {
    number: 2,
    title: 'Revolución moderna (2010–2020)',
    description:
      'El aprendizaje profundo redefine el campo. Redes neuronales profundas, grandes datasets y GPUs permiten avances en visión, voz y lenguaje. La IA deja de ser experimental y pasa a integrarse en productos masivos.',
  },
  {
    number: 3,
    title: 'IA actual (2020–hoy)',
    description:
      'Predominan modelos fundacionales: sistemas generativos capaces de producir texto, imágenes, audio y código con alta coherencia. Arquitecturas como transformers escalan con datos y cómputo. El foco se desplaza hacia alineación, control, impacto social y uso productivo en múltiples disciplinas.',
  },
])
data(
  '012',
  'Transformer (2017)',
  '2017',
  'Arquitectura fundacional para modelos de lenguaje a gran escala; marca un quiebre en cómo se modela la secuencia y la atención.',
  'Vaswani et al., 2017',
)
sb('013', 'IA actual (2020–hoy)', 'Modelos fundacionales y plataformas generales')
concept(
  '014',
  'Modelos fundacionales',
  'Sistemas generativos capaces de producir texto, imágenes, audio y código con alta coherencia. Herramientas como ChatGPT o Stable Diffusion muestran una transición: de sistemas especializados a plataformas generales.',
  undefined,
  ['fundacionales', 'transformers'],
)
comparison(
  '015',
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
sb('016', 'Campos y dominios', 'Mapa sintético de subcampos y herramientas')
concept(
  '017',
  'Tres ejes transversales',
  'Podés pensar la inteligencia artificial no como un bloque homogéneo sino como un conjunto de dominios técnicos que se ramifican según el tipo de problema, la naturaleza de los datos y el objetivo epistemológico (predecir, generar, optimizar, demostrar, etc.). Hay tres ejes que atraviesan todo: predicción, generación y razonamiento.',
  undefined,
  ['predicción', 'generación', 'razonamiento'],
)
data(
  '018',
  'Dominios principales',
  '9+',
  'Un mapa sintético incluye medicina, generación visual, NLP, clasificadores predictivos, investigación matemática, robótica, economía, audio, IA científica y más.',
  'Mapa del deck',
)
concept(
  '019',
  'Medicina y ciencias de la salud',
  'Subcampos: diagnóstico asistido por imagen, pronóstico clínico, descubrimiento de fármacos, medicina personalizada, NLP médico. Ejemplos: DeepMind (AlphaFold), Tempus, PathAI.',
  undefined,
  ['diagnóstico', 'AlphaFold'],
)
concept(
  '020',
  'Generación visual',
  'Modelos generativos de imágenes (difusión, GANs), generación de video, edición y restauración, síntesis 3D / NeRFs. Ejemplos: Midjourney, Stable Diffusion, Runway.',
  undefined,
  ['difusión', 'NeRFs'],
)
concept(
  '021',
  'Procesamiento de lenguaje (NLP)',
  'Modelos de lenguaje (LLMs), clasificación de texto, extracción de información, traducción automática, resumen automático. Ejemplos: ChatGPT, Claude, Cohere.',
  undefined,
  ['LLMs', 'ChatGPT'],
)
concept(
  '022',
  'Clasificadores y sistemas predictivos',
  'Clasificación supervisada, regresión, detección de anomalías, ranking y recomendación. Modelos típicos: árboles de decisión, random forests, gradient boosting (XGBoost), redes neuronales. Ejemplos: Scikit-learn, XGBoost.',
  undefined,
  ['machine learning', 'XGBoost'],
)
data(
  '023',
  'Investigación matemática',
  'Emergente',
  'Asistentes de prueba, formalización de teoremas, optimización combinatoria y razonamiento automatizado. Ejemplos: Lean, Mathematica, Wolfram Alpha.',
  'Razonamiento formal',
)
concept(
  '024',
  'Robótica, economía y ciencia',
  'Robótica: percepción, planificación, aprendizaje por refuerzo, SLAM (Boston Dynamics, ROS). Economía: trading algorítmico, scoring crediticio (TensorFlow en industria). Audio: ASR, TTS (Whisper, ElevenLabs).',
  undefined,
  ['robótica', 'economía'],
)

/* —— Section 4: Argentina —— */
sb('025', 'IA en Argentina', 'Adopción, percepción y tensiones sociales')
data(
  '026',
  'Nivel de adopción en Argentina',
  '55%',
  'El 55% de las empresas en Argentina ya tiene proyectos de IA en marcha. Pero solo el 13% de los trabajadores la usa regularmente. Esto define el estado actual: adopción estructural alta, uso cotidiano todavía bajo.',
  'Randstad Argentina; Infobae, 2024',
)
data(
  '027',
  'Percepción de retraso',
  '41%',
  'El 41% de los trabajadores cree que su empresa está atrasada en IA. El 47% cree que podría aprovecharla más. Hay una percepción de potencial no realizado, más que saturación tecnológica.',
  'Randstad Argentina',
)
concept(
  '028',
  'Dónde se adopta IA',
  'En Argentina la adopción se concentra en servicios y economía del conocimiento (software, IT, marketing digital), finanzas y negocios (scoring, fraude, analítica), salud (incipiente pero creciente) y PyMEs (automatización administrativa y productividad).',
  undefined,
  ['servicios', 'finanzas'],
)
data(
  '029',
  'Impacto en el trabajo',
  '34%',
  'Solo el 34% percibe impacto fuerte en su empleo. Un informe del MIT señala que no hay impacto significativo en empleo ni productividad todavía. No hay reemplazo masivo inmediato; sí hay reconfiguración de tareas.',
  'MIT; inteligenciaargentina.ar',
)
concept(
  '030',
  'Nuevos roles y precariedad de datos',
  'Crecen roles como prompt engineering, data annotation e integración de IA en productos. El trabajo de datos en LATAM es muchas veces precario, mal pago y externalizado: la IA redistribuye valor de forma desigual.',
  undefined,
  ['prompt engineering', 'datos'],
)
data(
  '031',
  'Impacto económico potencial',
  'GPT',
  'La IA puede aumentar productividad y crecimiento en Argentina; se la considera tecnología de propósito general, comparable a la electricidad o internet. Riesgos: concentración de mercado, dependencia tecnológica, brecha entre quienes adoptan y quienes no.',
  'IAE; arXiv:2405.00225',
)
concept(
  '032',
  'Brecha digital y desigualdad',
  'Tensiones: acceso desigual a herramientas y formación; brecha entre trabajadores calificados y no calificados; transformación cultural de la autoría (texto, imagen, arte).',
  undefined,
  ['desigualdad', 'autoría'],
)
data(
  '033',
  'Confiabilidad de la IA',
  'Asistir, no delegar',
  'Estado actual: alta capacidad, baja robustez epistemológica. Problemas: errores sistemáticos, sesgos en datos, falta de explicabilidad. La confiabilidad depende de transparencia, control humano y marcos éticos.',
  'Enfoque académico',
)
comparison(
  '034',
  'Percepciones de IA en la sociedad',
  'Potencial',
  'Desconfianza',
  [
    'Adopción estructural con proyectos en marcha',
    'Interés en productividad y automatización',
    'Políticas públicas que promueven adopción',
  ],
  [
    'Brecha entre interés y uso cotidiano',
    'Impacto laboral todavía difuso',
    'Riesgos de concentración y dependencia tecnológica',
  ],
)

/* —— Section 5 —— */
sb('035', 'Diagnóstico sintético', 'Dónde estamos hoy')
comparison(
  '036',
  'Dimensiones del estado actual',
  'Madurez tecnológica',
  'Implementación real',
  ['Modelos fundacionales y oferta de plataformas', 'Avances en visión, voz y lenguaje'],
  ['Uso cotidiano todavía bajo en trabajadores', 'Adopción organizacional intermedia'],
)
data(
  '037',
  'Cuatro preguntas clave',
  'Para pensar',
  'Infraestructura y oferta tecnológica: muy avanzada. Adopción organizacional: intermedia. Uso cotidiano real: bajo. Confiabilidad: suficiente para asistir, no para delegar.',
  'Síntesis del deck',
)
concept(
  '038',
  'IA como herramienta',
  'La IA no es destino inevitable: la responsabilidad sigue siendo humana en alineación, control, marcos éticos y uso productivo.',
  undefined,
  ['herramienta', 'responsabilidad'],
)
sb('039', 'Preguntas', 'Apertura al debate')

/* —— Optional deep dives —— */
concept(
  '040',
  '¿Cómo funcionan los transformers?',
  'Opcional: profundidad técnica sobre atención, paralelización y escalado con datos y cómputo.',
  'Profundización',
  ['transformers', 'atención'],
)
concept(
  '041',
  'Sesgo algorítmico y equidad',
  'Opcional: sesgos en datos, evaluación de riesgos, auditoría y gobernanza antes del despliegue.',
  'Equidad',
  ['sesgo', 'auditoría'],
)
data(
  '042',
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
