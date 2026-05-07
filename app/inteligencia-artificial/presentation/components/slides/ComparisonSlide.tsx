"use client";

import { motion } from "framer-motion";
import { SlideWrapper } from "./SlideWrapper";

interface ComparisonSlideProps {
  title: string;
  columnALabel: string;
  columnBLabel: string;
  columnA: string[];
  columnB: string[];
  sustainabilityPanel?: {
    title: string;
    points: string[];
  };
}

export function ComparisonSlide({
  title,
  columnALabel,
  columnBLabel,
  columnA,
  columnB,
  sustainabilityPanel,
}: ComparisonSlideProps) {
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

  const columnVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <SlideWrapper>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center h-full max-w-6xl mx-auto px-8"
      >
        <motion.h1 variants={itemVariants} className="text-5xl font-bold mb-12 text-balance leading-tight">
          {title}
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 gap-8"
        >
          {/* Column A */}
          <motion.div
            variants={columnVariants}
            className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-6">{columnALabel}</h3>
            <ul className="space-y-4">
              {columnA.map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="text-foreground/90 flex items-start gap-3"
                >
                  <span className="text-blue-400 font-bold mt-1">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column B */}
          <motion.div
            variants={columnVariants}
            className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-6">{columnBLabel}</h3>
            <ul className="space-y-4">
              {columnB.map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="text-foreground/90 flex items-start gap-3"
                >
                  <span className="text-cyan-400 font-bold mt-1">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {sustainabilityPanel && (
          <motion.div
            variants={itemVariants}
            className="mt-8 rounded-xl border border-emerald-400/35 bg-emerald-500/10 p-6"
          >
            <h3 className="text-xl font-semibold text-emerald-300">{sustainabilityPanel.title}</h3>
            <ul className="mt-4 space-y-3">
              {sustainabilityPanel.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-foreground/90">
                  <span className="text-emerald-300 font-bold mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </SlideWrapper>
  );
}
