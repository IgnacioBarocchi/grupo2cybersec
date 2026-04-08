"use client";

import { motion } from "framer-motion";
import { ExternalLink, MessageSquareHeart } from "lucide-react";
import { SlideWrapper } from "./SlideWrapper";
import { FEEDBACK_FORM_URL, feedbackSlideData } from "@/lib/slide-data";

export function FeedbackSlide() {
  return (
    <SlideWrapper>
      <div className="w-full max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20">
            <MessageSquareHeart className="w-10 h-10 text-primary" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
        >
          {feedbackSlideData.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 text-balance"
        >
          {feedbackSlideData.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-12"
        >
          <a
            href={FEEDBACK_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg border border-primary/20 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/10"
          >
            {feedbackSlideData.linkLabel}
            <ExternalLink className="w-5 h-5 opacity-90" aria-hidden />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm md:text-base text-muted-foreground text-balance border-t border-border pt-8"
        >
          {feedbackSlideData.credit}
        </motion.p>
      </div>
    </SlideWrapper>
  );
}
