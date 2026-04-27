'use client'

import { motion } from 'framer-motion'
import type { DataSlide } from '../../_lib/types'
import { barSlide, blurIn, fadeUp, statPop } from '../../_lib/motion-presets'

export function DataRecipe({ slide }: { slide: DataSlide }) {
  const { title, stat, body, source } = slide.content

  return (
    <div className="ia-deck__canvas ia-recipe ia-recipe--data">
      <motion.div className="ia-accent-bar" {...barSlide} />
      <motion.h1 className="ia-title-lg" {...blurIn}>
        {title}
      </motion.h1>
      <motion.div className="ia-stat" {...statPop}>
        {stat}
      </motion.div>
      <motion.p className="ia-body-lg" {...fadeUp}>
        {body}
      </motion.p>
      {source ? (
        <motion.p className="ia-caption" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.25 }}>
          {source}
        </motion.p>
      ) : null}
    </div>
  )
}
