"use client";

import { motion } from "framer-motion";
import {
  Bug,
  Mail,
  Globe,
  Zap,
  Eye,
  Lock,
  Server,
  Brain,
  Shield,
  Sparkles,
} from "lucide-react";
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
  sparkles: Sparkles,
};

export function TimelineSlide() {
  return (
    <SlideWrapper className="py-12">
      <div className="w-full max-w-screen-2xl mx-auto px-1 sm:px-0">
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
            className="absolute top-1/2 left-0 right-0 h-1 bg-border origin-left hidden md:block z-0"
          />

          {/* Timeline items */}
          <div className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-1.5 lg:gap-2">
            {timelineData.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              const featured = "featured" in item && item.featured;
              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="relative flex min-w-0 w-full flex-col items-center"
                >
                  {/* Connector dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-background z-[1] ${
                      featured ? "bg-emerald-500" : "bg-primary"
                    }`}
                  />

                  {/* Card */}
                  <div
                    className={`relative z-10 min-w-0 w-full p-2.5 sm:p-3 rounded-xl bg-card transition-colors ${
                      featured
                        ? "border-2 border-primary/70 ring-2 ring-primary/25 shadow-lg shadow-primary/15 hover:border-primary"
                        : "border border-border hover:border-primary/50"
                    } ${index % 2 === 0 ? "md:mb-16" : "md:mt-16"}`}
                  >
                    {featured && (
                      <span
                        className="absolute -top-1.5 -right-1.5 flex h-3 w-3"
                        aria-hidden
                      >
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                      </span>
                    )}
                    <div className="flex items-center justify-center mb-2">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          featured ? "bg-primary/20" : "bg-primary/10"
                        }`}
                      >
                        {IconComponent && (
                          <IconComponent className="w-5 h-5 text-primary" />
                        )}
                      </div>
                    </div>
                    <div className="text-center min-w-0">
                      {"dateLabel" in item && item.dateLabel ? (
                        <span className="text-sm md:text-base font-bold text-foreground block leading-tight">
                          {item.dateLabel}
                        </span>
                      ) : null}
                      <span
                        className={`font-bold text-primary block ${
                          "dateLabel" in item && item.dateLabel
                            ? "text-xl md:text-2xl mt-0.5"
                            : "text-lg"
                        }`}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-sm font-semibold text-foreground mt-1 leading-snug break-words text-balance">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-snug break-words text-balance">
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
