import { notFound } from 'next/navigation'
import { DeckSlideView } from '../../_components/DeckSlideView'
import { getSlideByIndex, loadDeck } from '../../_lib/load-deck'

type PageProps = {
  params: Promise<{ index: string }>
}

export default async function InteligenciaArtificialDeckPage({ params }: PageProps) {
  const { index } = await params
  const idx = Number.parseInt(index, 10)
  if (Number.isNaN(idx) || idx < 0) notFound()

  let deck
  try {
    deck = loadDeck()
  } catch {
    notFound()
  }

  const slide = getSlideByIndex(deck, idx)
  if (!slide) notFound()

  return <DeckSlideView deck={deck} index={idx} slide={slide} />
}
