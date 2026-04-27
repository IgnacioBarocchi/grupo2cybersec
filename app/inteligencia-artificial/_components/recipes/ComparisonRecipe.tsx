'use client'

import { motion } from 'framer-motion'
import type { ComparisonSlide } from '../../_lib/types'
import { blurIn, fadeUp } from '../../_lib/motion-presets'

export function ComparisonRecipe({ slide }: { slide: ComparisonSlide }) {
  const { title, columnALabel, columnBLabel, columnA, columnB } = slide.content

  return (
    <div className="ia-deck__canvas ia-recipe ia-recipe--comparison">
      <motion.h1 className="ia-title-lg" {...blurIn}>
        {title}
      </motion.h1>
      <div className="ia-columns">
        <motion.div {...fadeUp}>
          <div className="ia-col-title">{columnALabel}</div>
          <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
            {columnA.map((line, i) => (
              <li key={`a-${i}`} className="ia-body-md">
                {line}
              </li>
            ))}
          </ul>
        </motion.div>
        <div className="ia-divider" aria-hidden />
        <motion.div {...fadeUp}>
          <div className="ia-col-title">{columnBLabel}</div>
          <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
            {columnB.map((line, i) => (
              <li key={`b-${i}`} className="ia-body-md">
                {line}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
