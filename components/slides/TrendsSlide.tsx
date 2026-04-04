"use client";

import { motion } from "framer-motion";
import { Brain, Atom, Fingerprint, ShieldCheck } from "lucide-react";
import { SlideWrapper } from "./SlideWrapper";
import { trendsData } from "@/lib/slide-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: Brain,
  atom: Atom,
  fingerprint: Fingerprint,
  "shield-check": ShieldCheck,
};

export function TrendsSlide() {
  return (
    <SlideWrapper>
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            {trendsData.title}
          </h2>
          <p className="text-xl text-primary">{trendsData.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trendsData.trends.map((trend, index) => {
            const IconComponent = iconMap[trend.icon];
            return (
              <motion.div
                key={trend.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.15 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    {IconComponent && (
                      <IconComponent className="w-7 h-7 text-primary" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {trend.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {trend.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideWrapper>
  );
}
