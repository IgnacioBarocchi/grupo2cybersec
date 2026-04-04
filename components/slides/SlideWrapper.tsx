"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
}

export function SlideWrapper({ children, className = "" }: SlideWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`min-h-screen w-full flex flex-col items-center justify-center p-8 md:p-16 ${className}`}
    >
      {children}
    </motion.div>
  );
}
