export type SlideType = 'data' | 'concept' | 'comparison' | 'process' | 'section-break'

export type BaseSlide = {
  id: string
  order: number
  type: SlideType
  templateId: string
  notes?: string
}

export type DataSlide = BaseSlide & {
  type: 'data'
  content: {
    title: string
    stat: string | number
    body: string
    source?: string
  }
}

export type ConceptSlide = BaseSlide & {
  type: 'concept'
  content: {
    eyebrow?: string
    title: string
    body: string
    highlightTerms?: string[]
  }
}

export type ComparisonSlide = BaseSlide & {
  type: 'comparison'
  content: {
    title: string
    columnALabel: string
    columnBLabel: string
    columnA: string[]
    columnB: string[]
  }
}

export type ProcessSlide = BaseSlide & {
  type: 'process'
  content: {
    title: string
    steps: Array<{
      number: number
      title: string
      description: string
    }>
  }
}

export type SectionBreakSlide = BaseSlide & {
  type: 'section-break'
  content: {
    title: string
    subtitle?: string
    showDecorator?: boolean
  }
}

export type DeckSlide =
  | DataSlide
  | ConceptSlide
  | ComparisonSlide
  | ProcessSlide
  | SectionBreakSlide

export type DeckDocument = {
  id: string
  title: string
  locale: 'es-AR'
  metadata?: Record<string, string>
  slides: DeckSlide[]
}
