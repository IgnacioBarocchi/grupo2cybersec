import { z } from 'zod'

const slideBase = z.object({
  id: z.string(),
  order: z.number().int().positive(),
  templateId: z.string(),
  notes: z.string().optional(),
})

const dataSlide = slideBase.extend({
  type: z.literal('data'),
  content: z.object({
    title: z.string(),
    stat: z.union([z.string(), z.number()]),
    body: z.string(),
    source: z.string().optional(),
  }),
})

const conceptSlide = slideBase.extend({
  type: z.literal('concept'),
  content: z.object({
    eyebrow: z.string().optional(),
    title: z.string(),
    body: z.string(),
    highlightTerms: z.array(z.string()).optional(),
  }),
})

const comparisonSlide = slideBase.extend({
  type: z.literal('comparison'),
  content: z.object({
    title: z.string(),
    columnALabel: z.string(),
    columnBLabel: z.string(),
    columnA: z.array(z.string()),
    columnB: z.array(z.string()),
  }),
})

const processSlide = slideBase.extend({
  type: z.literal('process'),
  content: z.object({
    title: z.string(),
    steps: z.array(
      z.object({
        number: z.number().int(),
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
})

const sectionBreakSlide = slideBase.extend({
  type: z.literal('section-break'),
  content: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    showDecorator: z.boolean().optional(),
  }),
})

const deckSlide = z.discriminatedUnion('type', [
  dataSlide,
  conceptSlide,
  comparisonSlide,
  processSlide,
  sectionBreakSlide,
])

export const deckDocumentSchema = z.object({
  id: z.string(),
  title: z.string(),
  locale: z.literal('es-AR'),
  metadata: z.record(z.string(), z.string()).optional(),
  slides: z.array(deckSlide),
})

export type DeckDocumentInput = z.infer<typeof deckDocumentSchema>
