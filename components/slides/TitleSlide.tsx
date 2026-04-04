"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";
import { SlideWrapper } from "./SlideWrapper";
import { titleSlide } from "@/lib/slide-data";
import { SourcesMarquee } from "@/components/SourcesMarquee";

export function TitleSlide() {
  return (
    <SlideWrapper>
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
        {/* Institution icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20">
            <GraduationCap className="w-10 h-10 text-primary" />
          </div>
        </motion.div>

        {/* Institution name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-semibold text-foreground mb-2 text-balance"
        >
          {titleSlide.institution}
        </motion.h1>

        {/* Career */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-8"
        >
          {titleSlide.career}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-24 h-px bg-primary/50 mb-8"
        />

        {/* Topic */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance"
        >
          {titleSlide.topic}
        </motion.h2>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-primary mb-12"
        >
          {titleSlide.date}
        </motion.p>

        {/* Members section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-full max-w-2xl"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Integrantes
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {titleSlide.members.map((member, index) => (
              <motion.span
                key={member}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm text-foreground"
              >
                {member}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Sources marquee — only shown on the title slide */}
      <SourcesMarquee />
    </SlideWrapper>
  );
}
