"use client";

import { motion } from "framer-motion";
import { SlideWrapper } from "./SlideWrapper";

interface TimelineStep {
  number: number;
  year: string;
  title: string;
  description: string;
}

interface AITimelineSlideProps {
  title: string;
  steps: TimelineStep[];
}

export function AITimelineSlide({ title, steps }: AITimelineSlideProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <SlideWrapper>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center h-full max-w-6xl mx-auto px-8"
      >
        <motion.h1 variants={itemVariants} className="text-4xl font-bold mb-10 text-balance">
          {title}
        </motion.h1>

        {/* Vertical timeline */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="flex gap-6 items-start"
            >
              {/* Timeline dot and line */}
              <div className="flex flex-col items-center flex-shrink-0 pt-2">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
                  className="w-4 h-4 bg-cyan-400 rounded-full border-2 border-background"
                />
                {index < steps.length - 1 && (
                  <div className="w-1 h-12 bg-gradient-to-b from-cyan-400/50 to-cyan-400/0 my-1" />
                )}
              </div>

              {/* Content */}
              <motion.div
                className="pb-4 flex-1 bg-secondary/40 border border-secondary/60 rounded-lg p-4 hover:border-cyan-400/50 transition-colors"
                whileHover={{ borderColor: "rgba(34, 211, 238, 0.5)" }}
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-cyan-400 font-bold text-sm">{step.year}</span>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>
                <p className="text-foreground/80 text-sm">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SlideWrapper>
  );
}
