"use client";

import { motion } from "framer-motion";
import { SlideWrapper } from "./SlideWrapper";

interface ConceptSlideProps {
  eyebrow?: string;
  title: string;
  body: string;
  highlightTerms?: string[];
  domainCards?: {
    title: string;
    summary: string;
    tools?: string[];
    note?: string;
    tone?: "default" | "risk";
  }[];
  sideColumn?: {
    title: string;
    items: {
      heading: string;
      body: string;
    }[];
  };
}

export function ConceptSlide({ eyebrow, title, body, highlightTerms = [], domainCards = [], sideColumn }: ConceptSlideProps) {
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

  return (
    <SlideWrapper>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`h-full mx-auto px-8 ${
          sideColumn
            ? "max-w-[1580px] grid items-start gap-10 xl:grid-cols-[minmax(0,1fr)_460px]"
            : "flex flex-col justify-center max-w-5xl"
        }`}
      >
        <div className={sideColumn ? "max-w-[920px]" : ""}>
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

        {sideColumn && (
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
      </motion.div>
    </SlideWrapper>
  );
}
