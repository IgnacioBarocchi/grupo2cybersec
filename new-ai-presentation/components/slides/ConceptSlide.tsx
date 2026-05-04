"use client";

import { motion } from "framer-motion";
import { SlideWrapper } from "./SlideWrapper";

interface ConceptSlideProps {
  eyebrow?: string;
  title: string;
  body: string;
  highlightTerms?: string[];
}

export function ConceptSlide({ eyebrow, title, body, highlightTerms = [] }: ConceptSlideProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const highlightBody = (text: string) => {
    if (highlightTerms.length === 0) return text;

    let result = text;
    highlightTerms.forEach((term) => {
      const regex = new RegExp(`(${term})`, "g");
      result = result.replace(regex, `<span class="text-cyan-400 font-semibold">$1</span>`);
    });
    return result;
  };

  return (
    <SlideWrapper>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center h-full max-w-5xl mx-auto px-8"
      >
        {eyebrow && (
          <motion.p
            variants={itemVariants}
            className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1 variants={itemVariants} className="text-5xl font-bold mb-6 text-balance leading-tight">
          {title}
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-lg text-foreground/90 leading-relaxed max-w-3xl"
          dangerouslySetInnerHTML={{ __html: highlightBody(body) }}
        />
      </motion.div>
    </SlideWrapper>
  );
}
