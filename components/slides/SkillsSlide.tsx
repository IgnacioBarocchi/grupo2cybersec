"use client";

import { motion } from "framer-motion";
import { SlideWrapper } from "./SlideWrapper";
import { skillsData } from "@/lib/slide-data";

export function SkillsSlide() {
  return (
    <SlideWrapper>
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {skillsData.title}
          </h2>
          <p className="text-xl text-primary mt-2">{skillsData.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Habilidades Técnicas
            </h3>
            <div className="space-y-4">
              {skillsData.technical.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-sm text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                      className="h-full rounded-full bg-primary"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Habilidades Blandas
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skillsData.soft.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors text-center"
                >
                  <span className="text-foreground font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  );
}
