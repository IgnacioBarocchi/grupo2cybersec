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
  fit?: "cover" | "contain";
  caption?: string;
}

interface PortraitCardsVisual {
  type: "portrait-cards";
  cards: PortraitCard[];
}

interface MediaCardsVisual {
  type: "media-cards";
  layout?: "portrait" | "landscape" | "skew-overlap" | "skew-overlap-landscape";
  cards: PortraitCard[];
}

interface DomainCard {
  title: string;
  summary: string;
  tools?: string[];
  note?: string;
  tone?: "default" | "risk";
  media?: {
    src: string;
    alt: string;
    fit?: "cover" | "contain";
  };
}

interface SideColumnContent {
  title: string;
  items: {
    heading: string;
    body: string;
  }[];
}

interface ConceptSlideProps {
  eyebrow?: string;
  title: string;
  body: string;
  highlightTerms?: string[];
  domainCards?: DomainCard[];
  sideColumn?: SideColumnContent;
  rightVisual?: PortraitCardsVisual | MediaCardsVisual;
}

export function ConceptSlide({
  eyebrow,
  title,
  body,
  highlightTerms = [],
  domainCards = [],
  sideColumn,
  rightVisual,
}: ConceptSlideProps) {
  const visualScopeRef = useRef<HTMLDivElement | null>(null);
  const visualCards = rightVisual?.cards ?? [];
  const hasVisualCards = visualCards.length > 0;
  const isPortraitStack = rightVisual?.type === "portrait-cards" && visualCards.length >= 2;
  const isSingleLandscapeCard =
    rightVisual?.type === "media-cards" &&
    rightVisual.layout === "landscape" &&
    visualCards.length === 1;
  const isSkewOverlapLayout =
    rightVisual?.type === "media-cards" &&
    rightVisual.layout === "skew-overlap" &&
    visualCards.length >= 4;
  const isSkewOverlapLandscapeLayout =
    rightVisual?.type === "media-cards" &&
    rightVisual.layout === "skew-overlap-landscape" &&
    visualCards.length >= 4;
  const hasSideColumn = Boolean(sideColumn);

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
      } else if ((isSkewOverlapLayout || isSkewOverlapLandscapeLayout) && cardElements.length >= 4) {
        gsap.set(cardElements[0], { y: 0, rotate: -6.5, x: 0 });
        gsap.set(cardElements[1], { y: 0, rotate: 5.2, x: 0 });
        gsap.set(cardElements[2], { y: 0, rotate: -3.8, x: 0 });
        gsap.set(cardElements[3], { y: 0, rotate: 4.6, x: 0 });
      } else {
        gsap.set(cardElements, { y: 0, rotate: 0, x: 0 });
      }

      cardElements.forEach((element, index) => {
        const isFirstPortrait = isPortraitStack && index === 0;
        const isSecondPortrait = isPortraitStack && index === 1;

        const skewDriftMap = [
          { y: -8, x: 5, rotate: -5.9 },
          { y: -6, x: -7, rotate: 4.5 },
          { y: -7, x: 4, rotate: -3.2 },
          { y: -5, x: -6, rotate: 3.9 },
        ];
        const skewDrift = skewDriftMap[index] ?? { y: -5, x: 0, rotate: 0 };

        gsap.to(element, {
          y: isSkewOverlapLayout || isSkewOverlapLandscapeLayout
            ? skewDrift.y
            : isFirstPortrait
              ? -8
              : index % 2 === 0
                ? -5
                : -7,
          rotate: isSkewOverlapLayout || isSkewOverlapLandscapeLayout
            ? skewDrift.rotate
            : isFirstPortrait
              ? -4.8
              : isSecondPortrait
                ? 3.8
                : 0,
          x: isSkewOverlapLayout || isSkewOverlapLandscapeLayout ? skewDrift.x : isSecondPortrait ? 18 : 0,
          duration: 5.8 + index * 0.45,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    },
    {
      scope: visualScopeRef,
      dependencies: [
        hasVisualCards,
        isPortraitStack,
        isSingleLandscapeCard,
        isSkewOverlapLayout,
        isSkewOverlapLandscapeLayout,
      ],
      revertOnUpdate: true,
    }
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
            : hasSideColumn
              ? "max-w-[1580px] grid items-start gap-10 xl:grid-cols-[minmax(0,1fr)_460px]"
              : "max-w-5xl flex flex-col justify-center"
        }`}
      >
        <div className={hasVisualCards ? "max-w-[840px] xl:pr-6" : hasSideColumn ? "max-w-[920px]" : ""}>
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

          {domainCards.length > 0 && (
            <motion.div variants={itemVariants} className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {domainCards.map((card) => (
                <article
                  key={card.title}
                  className={`rounded-2xl border p-4 ${
                    card.tone === "risk"
                      ? "border-amber-500/50 bg-amber-500/5"
                      : "border-border bg-card/80"
                  }`}
                >
                  {card.media && (
                    <div className="relative mb-3 h-32 w-full overflow-hidden rounded-xl border border-border/60 bg-black/20">
                      <Image
                        src={card.media.src}
                        alt={card.media.alt}
                        fill
                        className={card.media.fit === "contain" ? "object-contain p-2" : "object-cover object-center"}
                        sizes="380px"
                      />
                    </div>
                  )}
                  <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.summary}</p>

                  {card.tools && card.tools.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {card.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-border/70 bg-secondary/30 px-2.5 py-1 text-xs text-foreground/90"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}

                  {card.note && (
                    <p className="mt-3 text-xs font-medium leading-relaxed text-amber-200">{card.note}</p>
                  )}
                </article>
              ))}
            </motion.div>
          )}
        </div>

        {hasSideColumn && sideColumn && (
          <motion.aside variants={itemVariants} className="rounded-2xl border border-border bg-card/80 p-5 xl:mt-14">
            <h3 className="text-xl font-semibold text-foreground">{sideColumn.title}</h3>
            <div className="mt-4 space-y-4">
              {sideColumn.items.map((item) => (
                <div key={item.heading} className="space-y-1">
                  <p className="text-sm font-semibold text-primary">{item.heading}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        )}

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
                  : isSkewOverlapLayout || isSkewOverlapLandscapeLayout
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
              ) : isSkewOverlapLayout ? (
                <>
                  <div
                    data-visual-card
                    className="absolute left-[16px] top-[24px] h-[300px] w-[210px] overflow-hidden rounded-[20px] border border-border/70 bg-card shadow-2xl"
                  >
                    {renderCardMedia(visualCards[0])}
                  </div>
                  <div
                    data-visual-card
                    className="absolute right-[12px] top-[38px] h-[300px] w-[210px] overflow-hidden rounded-[20px] border border-border/70 bg-card shadow-2xl"
                  >
                    {renderCardMedia(visualCards[1])}
                  </div>
                  <div
                    data-visual-card
                    className="absolute left-[44px] bottom-[34px] h-[232px] w-[336px] overflow-hidden rounded-[20px] border border-border/70 bg-card shadow-2xl"
                  >
                    {renderCardMedia(visualCards[2])}
                  </div>
                  <div
                    data-visual-card
                    className="absolute right-[24px] bottom-[12px] h-[188px] w-[250px] overflow-hidden rounded-[20px] border border-border/70 bg-card shadow-2xl"
                  >
                    {renderCardMedia(visualCards[3])}
                  </div>
                </>
              ) : isSkewOverlapLandscapeLayout ? (
                <>
                  <div
                    data-visual-card
                    className="absolute left-[10px] top-[20px] h-[210px] w-[312px] overflow-hidden rounded-[20px] border border-border/70 bg-card shadow-2xl"
                  >
                    {renderCardMedia(visualCards[0])}
                  </div>
                  <div
                    data-visual-card
                    className="absolute right-[8px] top-[44px] h-[210px] w-[312px] overflow-hidden rounded-[20px] border border-border/70 bg-card shadow-2xl"
                  >
                    {renderCardMedia(visualCards[1])}
                  </div>
                  <div
                    data-visual-card
                    className="absolute left-[38px] bottom-[122px] h-[196px] w-[300px] overflow-hidden rounded-[20px] border border-border/70 bg-card shadow-2xl"
                  >
                    {renderCardMedia(visualCards[2])}
                  </div>
                  <div
                    data-visual-card
                    className="absolute right-[18px] bottom-[10px] h-[218px] w-[318px] overflow-hidden rounded-[20px] border border-border/70 bg-card shadow-2xl"
                  >
                    {renderCardMedia(visualCards[3])}
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
  const fitClass = card.fit === "contain" ? "object-contain p-4 bg-black/20" : "object-cover object-center";

  if (isGif) {
    return (
      <div className="relative h-full w-full">
        <img
          src={card.src}
          alt={card.alt}
          className={`h-full w-full ${fitClass}`}
          loading="eager"
        />
        {card.caption && (
          <p className="absolute inset-x-0 bottom-0 bg-black/70 px-3 py-2 text-[11px] leading-snug text-white/90">
            {card.caption}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <Image
        src={card.src}
        alt={card.alt}
        fill
        className={fitClass}
        sizes="560px"
        priority
      />
      {card.caption && (
        <p className="absolute inset-x-0 bottom-0 bg-black/70 px-3 py-2 text-[11px] leading-snug text-white/90">
          {card.caption}
        </p>
      )}
    </div>
  );
}
