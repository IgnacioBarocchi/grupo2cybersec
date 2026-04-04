"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, Cloud, Code, FileText, Swords } from "lucide-react";
import { SlideWrapper } from "./SlideWrapper";
import { teamsData } from "@/lib/slide-data";

const teamIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Blue Team": Shield,
  "Red Team": Swords,
  "Purple Team": Sparkles,
  "Seguridad Cloud": Cloud,
  AppSec: Code,
  GRC: FileText,
};

const teamColors: Record<string, string> = {
  blue: "from-blue-500/20 to-blue-600/10 border-blue-500/30 hover:border-blue-400/50",
  red: "from-red-500/20 to-red-600/10 border-red-500/30 hover:border-red-400/50",
  purple: "from-purple-500/20 to-purple-600/10 border-purple-500/30 hover:border-purple-400/50",
  cyan: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 hover:border-cyan-400/50",
  green: "from-green-500/20 to-green-600/10 border-green-500/30 hover:border-green-400/50",
  orange: "from-orange-500/20 to-orange-600/10 border-orange-500/30 hover:border-orange-400/50",
};

const iconColors: Record<string, string> = {
  blue: "text-blue-400",
  red: "text-red-400",
  purple: "text-purple-400",
  cyan: "text-cyan-400",
  green: "text-green-400",
  orange: "text-orange-400",
};

export function TeamsSlide() {
  return (
    <SlideWrapper className="py-12">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {teamsData.title}
          </h2>
          <p className="text-xl text-primary mt-2">{teamsData.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamsData.teams.map((team, index) => {
            const IconComponent = teamIcons[team.name];
            return (
              <motion.div
                key={team.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className={`relative p-5 rounded-2xl bg-gradient-to-br ${teamColors[team.color]} border transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {IconComponent && (
                    <IconComponent
                      className={`w-8 h-8 ${iconColors[team.color]}`}
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {team.name}
                    </h3>
                    <p className={`text-sm ${iconColors[team.color]}`}>
                      {team.role}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-3">
                  {team.description}
                </p>

                <ul className="space-y-1">
                  {team.responsibilities.slice(0, 3).map((resp) => (
                    <li
                      key={resp}
                      className="text-xs text-muted-foreground flex items-center gap-2"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${iconColors[team.color].replace('text-', 'bg-')}`} />
                      {resp}
                    </li>
                  ))}
                </ul>

                <div className="mt-3 pt-3 border-t border-border/50">
                  <div className="flex flex-wrap gap-1">
                    {team.examples.map((example) => (
                      <span
                        key={example}
                        className="px-2 py-0.5 text-xs rounded-full bg-background/50 text-muted-foreground"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideWrapper>
  );
}
