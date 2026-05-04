"use client";

import { motion } from "framer-motion";
import { SlideWrapper } from "./SlideWrapper";
import { whyImportantSlide } from "@/lib/slide-data";

export function WhyImportantSlide() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <SlideWrapper>
      <div className="h-full flex flex-col justify-center px-16 py-12">
        <motion.h1
          className="text-5xl font-bold mb-12 text-primary text-balance"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {whyImportantSlide.title}
        </motion.h1>

        <motion.div
          className="space-y-6 max-w-4xl mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {whyImportantSlide.points.map((point, index) => {
            if (typeof point === "string") {
              return (
                <motion.div key={index} variants={itemVariants} className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full flex-shrink-0 mt-1" />
                  <p className="text-xl text-foreground leading-relaxed">{point}</p>
                </motion.div>
              );
            } else {
              return (
                <motion.div key={index} variants={itemVariants} className="ml-4">
                  <p className="text-xl font-semibold text-accent mb-3">{point.text}</p>
                  <ul className="space-y-2 ml-4">
                    {point.subpoints.map((subpoint, subIndex) => (
                      <li key={subIndex} className="text-lg text-foreground/90 flex gap-3">
                        <span className="text-primary">›</span>
                        <span>{subpoint}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            }
          })}
        </motion.div>

        {/* Callout */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-lg p-6 mt-8"
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <p className="text-2xl font-bold text-primary text-balance">{whyImportantSlide.callout}</p>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
