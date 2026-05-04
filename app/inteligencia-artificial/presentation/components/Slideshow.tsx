"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TitleSlide } from "./slides/TitleSlide";
import { ConceptSlide } from "./slides/ConceptSlide";
import { SectionBreakSlide } from "./slides/SectionBreakSlide";
import { DataSlide } from "./slides/DataSlide";
import { AITimelineSlide } from "./slides/AITimelineSlide";
import { ComparisonSlide } from "./slides/ComparisonSlide";
import {
  slide002,
  slide003,
  slide004,
  slide005,
  slide006,
  slide007,
  slide008,
  slide009,
  slide010,
  slide011,
  slide012,
  slide013,
  slide014,
  slide015,
  slide016,
  slide017,
  slide018,
  slide019,
  slide020,
  slide021,
  slide022,
  slide023,
  slide024,
  slide025,
  slide026,
  slide027,
  slide028,
  slide029,
  slide030,
} from "@ia-pres/lib/slide-data";

const slideConfigs = [
  { id: "slide-001", component: TitleSlide, title: "Portada", props: {} },
  { id: "slide-002", component: ConceptSlide, title: "¿Qué es IA?", props: slide002 },
  { id: "slide-003", component: SectionBreakSlide, title: "Antecedentes", props: slide003 },
  { id: "slide-004", component: ConceptSlide, title: "De Leibniz a Lovelace", props: slide004 },
  { id: "slide-005", component: DataSlide, title: "George Boole", props: slide005 },
  { id: "slide-006", component: ConceptSlide, title: "Turing & Wiener", props: slide006 },
  { id: "slide-007", component: SectionBreakSlide, title: "Evolución técnica", props: slide007 },
  { id: "slide-008", component: AITimelineSlide, title: "Timeline 1950-hoy", props: { title: slide008.title, steps: slide008.steps } },
  { id: "slide-009", component: DataSlide, title: "Transformer", props: slide009 },
  { id: "slide-010", component: SectionBreakSlide, title: "IA actual 2020+", props: slide010 },
  { id: "slide-011", component: ConceptSlide, title: "Modelos fundacionales", props: slide011 },
  { id: "slide-012", component: ComparisonSlide, title: "Generaciones IA", props: slide012 },
  { id: "slide-013", component: SectionBreakSlide, title: "Campos y dominios", props: slide013 },
  { id: "slide-014", component: ConceptSlide, title: "Tres ejes", props: slide014 },
  { id: "slide-015", component: DataSlide, title: "Dominios principales", props: slide015 },
  { id: "slide-016", component: ConceptSlide, title: "Medicina y visual", props: slide016 },
  { id: "slide-017", component: ConceptSlide, title: "Lenguaje y predicción", props: slide017 },
  { id: "slide-018", component: ConceptSlide, title: "Razonamiento y robótica", props: slide018 },
  { id: "slide-019", component: SectionBreakSlide, title: "IA en Argentina", props: slide019 },
  { id: "slide-020", component: DataSlide, title: "Adopción Argentina", props: slide020 },
  { id: "slide-021", component: ConceptSlide, title: "Sectores e impacto", props: slide021 },
  { id: "slide-022", component: DataSlide, title: "Impacto económico", props: slide022 },
  { id: "slide-023", component: ComparisonSlide, title: "Confiabilidad", props: slide023 },
  { id: "slide-024", component: SectionBreakSlide, title: "Diagnóstico sintético", props: slide024 },
  { id: "slide-025", component: ComparisonSlide, title: "Dimensiones actuales", props: slide025 },
  { id: "slide-026", component: DataSlide, title: "Preguntas clave", props: slide026 },
  { id: "slide-027", component: ConceptSlide, title: "IA como herramienta", props: slide027 },
  { id: "slide-028", component: SectionBreakSlide, title: "Preguntas", props: slide028 },
  { id: "slide-029", component: ConceptSlide, title: "Transformers", props: slide029 },
  { id: "slide-030", component: DataSlide, title: "Recursos", props: slide030 },
];

export function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slideConfigs.length) {
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

  const currentConfig = slideConfigs[currentSlide];
  const CurrentSlideComponent = currentConfig.component as any;

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
          <CurrentSlideComponent {...currentConfig.props} />
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
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border max-w-sm overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {slideConfigs.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all flex-shrink-0 ${
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
          disabled={currentSlide === slideConfigs.length - 1}
          className="p-2 rounded-full bg-card border border-border hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Slide counter */}
      <div className="fixed top-6 right-6 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground z-50">
        {currentSlide + 1} / {slideConfigs.length}
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
