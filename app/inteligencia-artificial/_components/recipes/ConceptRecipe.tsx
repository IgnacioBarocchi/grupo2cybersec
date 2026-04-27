'use client'

import { motion } from 'framer-motion'
import type { ConceptSlide } from '../../_lib/types'
import { blurIn, fadeUp } from '../../_lib/motion-presets'
import { renderHighlightedBody } from '../../_lib/highlight'

export function ConceptRecipe({ slide }: { slide: ConceptSlide }) {
  const { eyebrow, title, body, highlightTerms } = slide.content

  return (
    <div className="ia-deck__canvas ia-recipe ia-recipe--concept">
      {eyebrow ? (
        <motion.p className="ia-eyebrow" {...fadeUp}>
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h1 className="ia-title-md" {...blurIn}>
        {title}
      </motion.h1>
      <motion.div {...fadeUp}>
        <p className="ia-body-lg" style={{ margin: 0 }}>
          {renderHighlightedBody(body, highlightTerms)}
        </p>
      </motion.div>
    </div>
  )
}
