"use client";

import { motion } from "framer-motion";
import { SlideWrapper } from "./SlideWrapper";
import { organizationSlide } from "@/lib/slide-data";

export function OrganizationSlide() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
          {organizationSlide.title}
        </motion.h1>

        <motion.div
          className="space-y-4 max-w-4xl mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {organizationSlide.points.map((point, index) => (
            <motion.div key={index} variants={itemVariants} className="ml-4">
              <p className="text-xl font-semibold text-accent mb-4">{point.text}</p>
              <ul className="space-y-2 ml-4">
                {point.subpoints.map((subpoint, subIndex) => (
                  <li key={subIndex} className="text-lg text-foreground/90 flex gap-3">
                    <span className="text-primary font-bold">◆</span>
                    <span>{subpoint}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Callout */}
        {/* <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-lg p-6 mt-8"
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          <p className="text-2xl font-bold text-primary text-balance">{organizationSlide.callout}</p>
        </motion.div> */}
      </div>
    </SlideWrapper>
  );
}
