"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SlideWrapper } from "./SlideWrapper";

gsap.registerPlugin(useGSAP);

interface PortraitCard {
  src: string;
  alt: string;
}

interface PortraitCardsVisual {
  type: "portrait-cards";
  cards: PortraitCard[];
}

interface MediaCardsVisual {
  type: "media-cards";
  layout?: "portrait" | "landscape";
  cards: PortraitCard[];
}

interface ConceptSlideProps {
  eyebrow?: string;
  title: string;
  body: string;
  highlightTerms?: string[];
  rightVisual?: PortraitCardsVisual | MediaCardsVisual;
}

export function ConceptSlide({ eyebrow, title, body, highlightTerms = [], rightVisual }: ConceptSlideProps) {
  const visualScopeRef = useRef<HTMLDivElement | null>(null);
  const visualCards = rightVisual?.cards ?? [];
  const hasVisualCards = visualCards.length > 0;
  const isPortraitStack = rightVisual?.type === "portrait-cards" && visualCards.length >= 2;
  const isSingleLandscapeCard =
    rightVisual?.type === "media-cards" &&
    rightVisual.layout === "landscape" &&
    visualCards.length === 1;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const highlightBody = (text: string) => {
    if (highlightTerms.length === 0) return text;

    let result = text;
    highlightTerms.forEach((term) => {
      const regex = new RegExp(`(${term})`, "g");
      result = result.replace(regex, `<span class="text-cyan-400 font-semibold">$1</span>`);
    });
    return result;
  };

  useGSAP(
    () => {
      if (!hasVisualCards || !visualScopeRef.current) {
        return;
      }

      const cardElements = gsap.utils.toArray<HTMLElement>("[data-visual-card]", visualScopeRef.current);
      if (cardElements.length === 0) {
        return;
      }

      if (isPortraitStack && cardElements.length >= 2) {
        gsap.set(cardElements[0], { y: 0, rotate: -5.5, x: 0 });
        gsap.set(cardElements[1], { y: 10, rotate: 4.5, x: 22 });
      } else {
        gsap.set(cardElements, { y: 0, rotate: 0, x: 0 });
      }

      cardElements.forEach((element, index) => {
        const isFirstPortrait = isPortraitStack && index === 0;
        const isSecondPortrait = isPortraitStack && index === 1;

        gsap.to(element, {
          y: isFirstPortrait ? -8 : index % 2 === 0 ? -5 : -7,
          rotate: isFirstPortrait ? -4.8 : isSecondPortrait ? 3.8 : 0,
          x: isSecondPortrait ? 18 : 0,
          duration: 5.8 + index * 0.45,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    },
    { scope: visualScopeRef, dependencies: [hasVisualCards, isPortraitStack, isSingleLandscapeCard], revertOnUpdate: true }
  );

  return (
    <SlideWrapper>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`h-full mx-auto px-8 ${
          hasVisualCards
            ? "max-w-[1580px] grid items-center gap-12 xl:grid-cols-[minmax(0,1fr)_560px]"
            : "max-w-5xl flex flex-col justify-center"
        }`}
      >
        <div className={hasVisualCards ? "max-w-[840px] xl:pr-6" : ""}>
          {eyebrow && (
            <motion.p
              variants={itemVariants}
              className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3"
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h1 variants={itemVariants} className="text-5xl font-bold mb-6 text-balance leading-tight">
            {title}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-lg text-foreground/90 leading-relaxed max-w-3xl"
            dangerouslySetInnerHTML={{ __html: highlightBody(body) }}
          />
        </div>

        {hasVisualCards && (
          <motion.div
            variants={itemVariants}
            className="hidden xl:flex justify-end"
          >
            <div
              ref={visualScopeRef}
              className={
                isPortraitStack
                  ? "relative h-[640px] w-[560px]"
                  : visualCards.length === 1
                    ? isSingleLandscapeCard
                      ? "relative h-[380px] w-[560px]"
                      : "relative h-[620px] w-[500px]"
                    : "flex w-[560px] flex-col gap-6"
              }
            >
              {isPortraitStack ? (
                <>
                  <div
                    data-visual-card
                    className="absolute left-[56px] top-[36px] h-[470px] w-[320px] overflow-hidden rounded-[24px] border border-border/60 bg-card shadow-2xl"
                  >
                    {renderCardMedia(visualCards[0])}
                  </div>
                  <div
                    data-visual-card
                    className="absolute right-4 top-[102px] h-[470px] w-[320px] overflow-hidden rounded-[24px] border border-border/60 bg-card shadow-2xl"
                  >
                    {renderCardMedia(visualCards[1])}
                  </div>
                </>
              ) : visualCards.length === 1 ? (
                <div
                  data-visual-card
                  className={
                    isSingleLandscapeCard
                      ? "absolute left-0 top-[28px] h-[300px] w-[560px] overflow-hidden rounded-[24px] border border-border/60 bg-card shadow-2xl"
                      : "absolute left-[60px] top-[34px] h-[540px] w-[380px] overflow-hidden rounded-[24px] border border-border/60 bg-card shadow-2xl"
                  }
                >
                  {renderCardMedia(visualCards[0])}
                </div>
              ) : (
                visualCards.slice(0, 2).map((card) => (
                  <div
                    key={card.src}
                    data-visual-card
                    className="relative h-[300px] w-[560px] overflow-hidden rounded-[24px] border border-border/60 bg-card shadow-2xl"
                  >
                    {renderCardMedia(card)}
                  </div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </SlideWrapper>
  );
}

function renderCardMedia(card: PortraitCard) {
  const isGif = card.src.toLowerCase().endsWith(".gif");

  if (isGif) {
    return (
      <img
        src={card.src}
        alt={card.alt}
        className="h-full w-full object-cover object-center"
        loading="eager"
      />
    );
  }

  return (
    <Image
      src={card.src}
      alt={card.alt}
      fill
      className="object-cover object-center"
      sizes="560px"
      priority
    />
  );
}
