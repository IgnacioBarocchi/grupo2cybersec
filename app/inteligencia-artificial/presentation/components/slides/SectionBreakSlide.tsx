"use client";

import { motion } from "framer-motion";
import { SlideWrapper } from "./SlideWrapper";

interface SectionBreakSlideProps {
  title: string;
  subtitle: string;
  showDecorator?: boolean;
  backgroundImage?: string;
  /** 0–1; only used when `backgroundImage` is set. */
  backgroundOpacity?: number;
}

export function SectionBreakSlide({
  title,
  subtitle,
  showDecorator = true,
  backgroundImage,
  backgroundOpacity = 0.1,
}: SectionBreakSlideProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const hasBg = Boolean(backgroundImage);

  return (
    <SlideWrapper className={hasBg ? "relative overflow-hidden" : undefined}>
      {hasBg ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: backgroundOpacity,
          }}
        />
      ) : null}
      <div className={`flex h-full min-h-0 w-full items-center justify-center ${hasBg ? "relative z-10" : ""}`}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {showDecorator && (
            <motion.div
              variants={itemVariants}
              className="mb-8 flex justify-center"
            >
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full" />
            </motion.div>
          )}

          <motion.h1 variants={itemVariants} className="text-6xl font-bold mb-4 text-balance">
            {title}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-2xl text-muted-foreground font-light max-w-3xl mx-auto text-balance">
            {subtitle}
          </motion.p>

          {showDecorator && (
            <motion.div
              variants={itemVariants}
              className="mt-8 flex justify-center"
            >
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full" />
            </motion.div>
          )}
        </motion.div>
      </div>
    </SlideWrapper>
  );
}

