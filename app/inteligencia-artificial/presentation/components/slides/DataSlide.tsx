"use client";

import { motion } from "framer-motion";
import { SlideWrapper } from "./SlideWrapper";

interface DataSlideProps {
  title: string;
  stat: string;
  body: string;
  source: string;
}

export function DataSlide({ title, stat, body, source }: DataSlideProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <SlideWrapper>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center h-full max-w-5xl mx-auto px-8"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-lg">
            <p className="text-cyan-400 font-semibold text-sm uppercase">{stat}</p>
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl font-bold mb-6 text-balance leading-tight">
          {title}
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg text-foreground/90 leading-relaxed max-w-3xl mb-8">
          {body}
        </motion.p>

        <motion.p variants={itemVariants} className="text-sm text-muted-foreground">
          Fuente: <span className="text-cyan-400">{source}</span>
        </motion.p>
      </motion.div>
    </SlideWrapper>
  );
}
