'use client'

import { motion } from 'framer-motion'
import type { ProcessSlide } from '../../_lib/types'
import { blurIn, fadeUp } from '../../_lib/motion-presets'

export function ProcessRecipe({ slide }: { slide: ProcessSlide }) {
  const { title, steps } = slide.content

  return (
    <div className="ia-deck__canvas ia-recipe ia-recipe--process">
      <motion.h1 className="ia-title-lg" {...blurIn}>
        {title}
      </motion.h1>
      <div>
        {steps.map((step, idx) => (
          <motion.div
            key={step.number}
            className="ia-step-row"
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: idx * 0.06 }}
          >
            <div className="ia-step-num">{step.number}</div>
            <div>
              <div className="ia-body-md" style={{ fontWeight: 700, marginBottom: '0.35rem' }}>
                {step.title}
              </div>
              <p className="ia-body-md" style={{ margin: 0, color: 'var(--ia-gris-medio)' }}>
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
