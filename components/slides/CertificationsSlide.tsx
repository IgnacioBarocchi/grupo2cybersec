"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SlideWrapper } from "./SlideWrapper";
import { certificationsData } from "@/lib/slide-data";

const levelColors: Record<string, string> = {
  Entrada: "bg-green-500/20 text-green-400 border-green-500/30",
  Intermedio: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Avanzado: "bg-red-500/20 text-red-400 border-red-500/30",
};

export function CertificationsSlide() {
  return (
    <SlideWrapper>
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {certificationsData.title}
          </h2>
          <p className="text-xl text-primary mt-2">
            {certificationsData.subtitle}
          </p>
        </motion.div>

        <div className="space-y-4">
          {certificationsData.certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex items-center gap-6"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="w-7 h-7 text-primary" />
              </div>

              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-semibold text-foreground">
                    {cert.name}
                  </h3>
                  <span
                    className={`px-2 py-0.5 text-xs font-medium rounded-full border ${levelColors[cert.level]}`}
                  >
                    {cert.level}
                  </span>
                </div>
                <p className="text-muted-foreground">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
