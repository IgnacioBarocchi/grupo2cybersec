"use client";

import { motion } from "framer-motion";
import { SlideWrapper } from "./SlideWrapper";
import { roadmapSlide } from "@/lib/slide-data";

export function RoadmapSlide() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
          {roadmapSlide.title}
        </motion.h1>

        <motion.div
          className="space-y-5 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {roadmapSlide.steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="bg-gradient-to-r from-secondary/40 to-secondary/20 border border-primary/20 rounded-lg p-5 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-accent mb-3">{step.title}</h3>
                  <ul className="space-y-1">
                    {step.items.map((item, index) => (
                      <li key={index} className="text-lg text-foreground/90 flex gap-3">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
