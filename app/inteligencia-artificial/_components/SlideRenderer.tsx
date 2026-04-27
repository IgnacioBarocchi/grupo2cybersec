'use client'

import type { DeckSlide } from '../_lib/types'
import { isKnownSlideType, slideRecipeMap } from '../_lib/slide-registry'

export function SlideRenderer({ slide }: { slide: DeckSlide }) {
  if (!isKnownSlideType(slide.type)) {
    return (
      <div className="ia-deck__canvas" style={{ background: '#2c3e50', color: '#fff', padding: '8%' }}>
        <h1 className="ia-title-md">Tipo de slide desconocido</h1>
        <p className="ia-body-lg" style={{ marginTop: '1rem' }}>
          <strong>id:</strong> {slide.id} · <strong>type:</strong> {(slide as { type: string }).type}
        </p>
      </div>
    )
  }

  const Recipe = slideRecipeMap[slide.type]
  return <Recipe slide={slide} />
}
