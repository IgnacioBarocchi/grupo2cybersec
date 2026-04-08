"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Rocket } from "lucide-react";
import { SlideWrapper } from "./SlideWrapper";
import { conclusionData } from "@/lib/slide-data";

export function ConclusionSlide() {
  return (
    <SlideWrapper>
      <div className="w-full max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20">
            <Rocket className="w-10 h-10 text-primary" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-12"
        >
          {conclusionData.title}
        </motion.h2>

        <div className="space-y-4 mb-12">
          {conclusionData.points.map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.15 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border text-left"
            >
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground">{point}</p>
            </motion.div>
          ))}
        </div>
{/* 
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-2xl md:text-3xl font-semibold text-primary text-balance"
        >
          {conclusionData.cta}
        </motion.p> */}
      </div>
    </SlideWrapper>
  );
}
