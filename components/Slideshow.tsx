"use client";

// Ensure all slide modules are properly loaded
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TitleSlide } from "./slides/TitleSlide";
import { WhatIsSlide } from "./slides/WhatIsSlide";
import { WhyImportantSlide } from "./slides/WhyImportantSlide";
import { TimelineSlide } from "./slides/TimelineSlide";
import { TransitionSlide } from "./slides/TransitionSlide";
import { OrganizationSlide } from "./slides/OrganizationSlide";
import { TeamsSlide } from "./slides/TeamsSlide";
import { TrendsSlide } from "./slides/TrendsSlide";
import { DepthTrendsSlide } from "./slides/DepthTrendsSlide";
import { RoadmapSlide } from "./slides/RoadmapSlide";
import { SkillsSlide } from "./slides/SkillsSlide";
import { CertificationsSlide } from "./slides/CertificationsSlide";
import { StatsSlide } from "./slides/StatsSlide";
import { RolesSlide } from "./slides/RolesSlide";
import { ConclusionSlide } from "./slides/ConclusionSlide";

const slides = [
  { id: "title", component: TitleSlide, title: "Portada" },
  { id: "whatis", component: WhatIsSlide, title: "¿Qué es?" },
  { id: "whyimportant", component: WhyImportantSlide, title: "¿Por qué?" },
  { id: "timeline", component: TimelineSlide, title: "Historia" },
  { id: "transition", component: TransitionSlide, title: "Evolución" },
  { id: "organization", component: OrganizationSlide, title: "Organización" },
  { id: "teams", component: TeamsSlide, title: "Áreas de trabajo" },
  { id: "trends", component: TrendsSlide, title: "Tendencias" },
  { id: "depthtrends", component: DepthTrendsSlide, title: "Tendencias 2" },
  { id: "roadmap", component: RoadmapSlide, title: "Cómo empezar" },
  { id: "skills", component: SkillsSlide, title: "Habilidades" },
  { id: "certifications", component: CertificationsSlide, title: "Certificaciones" },
  { id: "stats", component: StatsSlide, title: "Mercado" },
  { id: "roles", component: RolesSlide, title: "Puestos" },
  { id: "conclusion", component: ConclusionSlide, title: "Conclusión" },
];

export function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Background gradient effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Slide content */}
      <AnimatePresence mode="wait">
        <motion.div key={currentSlide}>
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2 rounded-full bg-card border border-border hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>

        {/* Slide indicators */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-2 rounded-full bg-card border border-border hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Slide counter */}
      <div className="fixed top-6 right-6 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground z-50">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Keyboard hint */}
      <div className="fixed bottom-8 right-6 flex items-center gap-2 text-xs text-muted-foreground z-50">
        <span className="px-2 py-1 rounded bg-secondary border border-border">←</span>
        <span className="px-2 py-1 rounded bg-secondary border border-border">→</span>
        <span>para navegar</span>
      </div>
    </div>
  );
}
