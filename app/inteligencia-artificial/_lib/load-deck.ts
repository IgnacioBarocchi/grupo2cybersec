import deckJson from '../_data/deck.json'
import { deckDocumentSchema } from './schema'
import type { DeckDocument, DeckSlide } from './types'

export function loadDeck(): DeckDocument {
  const parsed = deckDocumentSchema.safeParse(deckJson)
  if (!parsed.success) {
    throw new Error(`Deck inválido: ${parsed.error.message}`)
  }
  const slides = [...parsed.data.slides].sort((a, b) => a.order - b.order)
  return { ...parsed.data, slides }
}

export function getSlideByIndex(deck: DeckDocument, index: number): DeckSlide | null {
  if (index < 0 || index >= deck.slides.length) return null
  return deck.slides[index] ?? null
}
