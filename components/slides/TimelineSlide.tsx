"use client";

import { motion } from "framer-motion";
import { Bug, Mail, Globe, Zap, Eye, Lock, Server, Brain, Shield } from "lucide-react";
import { SlideWrapper } from "./SlideWrapper";
import { timelineData } from "@/lib/slide-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  bug: Bug,
  mail: Mail,
  globe: Globe,
  zap: Zap,
  eye: Eye,
  lock: Lock,
  server: Server,
  brain: Brain,
  shield: Shield,
};

export function TimelineSlide() {
  return (
    <SlideWrapper className="py-12">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Historia de la Ciberseguridad
          </h2>
          <p className="text-xl text-muted-foreground">
            Hitos importantes hasta 2026
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/2 left-0 right-0 h-1 bg-border origin-left hidden md:block"
          />

          {/* Timeline items */}
          <div className="grid grid-cols-1 md:grid-cols-9 gap-4 md:gap-2">
            {timelineData.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Connector dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                    className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"
                  />

                  {/* Card */}
                  <div
                    className={`w-full p-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors ${
                      index % 2 === 0 ? "md:mb-16" : "md:mt-16"
                    }`}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        {IconComponent && (
                          <IconComponent className="w-5 h-5 text-primary" />
                        )}
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="text-lg font-bold text-primary">
                        {item.year}
                      </span>
                      <h3 className="text-sm font-semibold text-foreground mt-1 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-tight">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
