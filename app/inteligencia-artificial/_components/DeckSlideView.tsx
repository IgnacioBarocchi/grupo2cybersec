'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { DeckDocument, DeckSlide } from '../_lib/types'
import { SlideRenderer } from './SlideRenderer'
import './ia-deck.css'

type DeckSlideViewProps = {
  deck: DeckDocument
  index: number
  slide: DeckSlide
}

export function DeckSlideView({ deck, index, slide }: DeckSlideViewProps) {
  const router = useRouter()
  const total = deck.slides.length
  const prevIndex = index > 0 ? index - 1 : null
  const nextIndex = index < total - 1 ? index + 1 : null

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault()
      if (nextIndex !== null) router.push(`/inteligencia-artificial/deck/${nextIndex}`)
    }
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault()
      if (prevIndex !== null) router.push(`/inteligencia-artificial/deck/${prevIndex}`)
    }
    if (e.key === 'Home') {
      e.preventDefault()
      router.push('/inteligencia-artificial/deck/0')
    }
    if (e.key === 'End') {
      e.preventDefault()
      router.push(`/inteligencia-artificial/deck/${total - 1}`)
    }
  }

  return (
    <section data-ia-deck tabIndex={0} autoFocus onKeyDown={onKeyDown} className="min-h-screen bg-black">
      <SlideRenderer slide={slide} />
      <footer className="ia-deck__chrome" aria-label="Navegación de la presentación">
        <span>
          {deck.title} · {index + 1} / {total}
        </span>
        <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {prevIndex !== null ? (
            <Link href={`/inteligencia-artificial/deck/${prevIndex}`}>Anterior</Link>
          ) : (
            <span style={{ color: 'var(--ia-gris-medio)' }}>Anterior</span>
          )}
          {nextIndex !== null ? (
            <Link href={`/inteligencia-artificial/deck/${nextIndex}`}>Siguiente</Link>
          ) : (
            <span style={{ color: 'var(--ia-gris-medio)' }}>Siguiente</span>
          )}
        </nav>
      </footer>
    </section>
  )
}
