'use client'

import { motion } from 'framer-motion'
import type { SectionBreakSlide } from '../../_lib/types'
import { blurIn, fadeUp } from '../../_lib/motion-presets'

export function SectionBreakRecipe({ slide }: { slide: SectionBreakSlide }) {
  const { title, subtitle, showDecorator } = slide.content

  return (
    <div className="ia-deck__canvas ia-recipe ia-recipe--section">
      <motion.h1 className="ia-title-xl" {...blurIn}>
        {title}
      </motion.h1>
      {subtitle ? (
        <motion.p className="ia-subtitle" {...fadeUp}>
          {subtitle}
        </motion.p>
      ) : null}
      {showDecorator ? <div className="ia-decorator" aria-hidden /> : null}
    </div>
  )
}
