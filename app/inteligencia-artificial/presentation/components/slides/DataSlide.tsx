"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SlideWrapper } from "./SlideWrapper";

gsap.registerPlugin(useGSAP);

interface PortraitCardVisual {
  type: "portrait-card";
  card: {
    src: string;
    alt: string;
  };
}

interface DataSlideProps {
  title: string;
  stat: string;
  body: string;
  source: string;
  rightVisual?: PortraitCardVisual;
}

export function DataSlide({ title, stat, body, source, rightVisual }: DataSlideProps) {
  const visualScopeRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const hasPortraitCard = rightVisual?.type === "portrait-card";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  useGSAP(
    () => {
      if (!hasPortraitCard || !cardRef.current) {
        return;
      }

      gsap.set(cardRef.current, { y: 0, rotate: 0 });
      gsap.to(cardRef.current, {
        y: -7,
        duration: 5.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: visualScopeRef, dependencies: [hasPortraitCard], revertOnUpdate: true }
  );

  return (
    <SlideWrapper>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`h-full mx-auto px-8 ${
          hasPortraitCard
            ? "max-w-[1540px] grid items-center gap-12 xl:grid-cols-[minmax(0,1fr)_500px]"
            : "max-w-5xl flex flex-col justify-center"
        }`}
      >
        <div className={hasPortraitCard ? "max-w-[860px] xl:pr-6" : ""}>
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-lg">
              <p className="text-cyan-400 font-semibold text-sm uppercase">{stat}</p>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl font-bold mb-6 text-balance leading-tight">
            {title}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-foreground/90 leading-relaxed max-w-3xl mb-8">
            {body}
          </motion.p>

          <motion.p variants={itemVariants} className="text-sm text-muted-foreground">
            Fuente: <span className="text-cyan-400">{source}</span>
          </motion.p>
        </div>

        {hasPortraitCard && (
          <motion.div variants={itemVariants} className="hidden xl:flex justify-end">
            <div ref={visualScopeRef} className="relative h-[620px] w-[500px]">
              <div
                ref={cardRef}
                className="absolute left-[60px] top-[32px] h-[540px] w-[360px] overflow-hidden rounded-[24px] border border-border/60 bg-card shadow-2xl"
              >
                <Image
                  src={rightVisual.card.src}
                  alt={rightVisual.card.alt}
                  fill
                  className="object-cover object-center"
                  sizes="360px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </SlideWrapper>
  );
}
