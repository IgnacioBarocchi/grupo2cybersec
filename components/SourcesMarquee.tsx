"use client";

import { motion } from "framer-motion";
import { sourcesData } from "@/lib/slide-data";
import { ExternalLink } from "lucide-react";

export function SourcesMarquee() {
  // Duplicate the sources array for seamless infinite scroll
  const sources = [...sourcesData, ...sourcesData];

  return (
    <div className="fixed bottom-24 left-0 right-0 overflow-hidden z-40">
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 py-2"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {sources.map((source, index) => (
            <a
              key={`${source.name}-${index}`}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-card transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                {source.name}
              </span>
              <ExternalLink className="w-3 h-3 text-muted-foreground/50 group-hover:text-primary transition-colors" />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
