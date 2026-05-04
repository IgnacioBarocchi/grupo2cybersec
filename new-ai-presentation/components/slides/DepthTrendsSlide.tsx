"use client";

import { motion } from "framer-motion";
import { SlideWrapper } from "./SlideWrapper";
import { depthTrendsSlide } from "@/lib/slide-data";

export function DepthTrendsSlide() {
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
          {depthTrendsSlide.title}
        </motion.h1>

        <motion.div
          className="space-y-6 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {depthTrendsSlide.points.map((point, index) => (
            <motion.div key={index} variants={itemVariants} className="flex gap-4">
              <div className="w-1 bg-primary rounded-full flex-shrink-0 mt-1" />
              <p className="text-xl text-foreground leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
