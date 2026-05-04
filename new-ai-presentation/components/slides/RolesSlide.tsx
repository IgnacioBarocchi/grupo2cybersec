"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign } from "lucide-react";
import { SlideWrapper } from "./SlideWrapper";
import { rolesData } from "@/lib/slide-data";

export function RolesSlide() {
  return (
    <SlideWrapper>
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {rolesData.title}
          </h2>
          <p className="text-xl text-primary mt-2">{rolesData.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rolesData.roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">
                {role.title}
              </h3>
              <p className="text-muted-foreground mb-4">{role.description}</p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50">
                  <DollarSign className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {role.salary}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-green-400">
                    {role.growth}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
