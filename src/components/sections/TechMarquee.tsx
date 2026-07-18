"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const technologies = [
  "React", "Next.js", "TypeScript", "Java", "Python", "Node", "Express",
  "Prisma", "PostgreSQL", "MongoDB", "AWS", "Snowflake", "OpenAI",
  "LangChain", "Langfuse", "Git", "GitHub", "Tailwind", "REST APIs", "JWT"
];

export default function TechMarquee() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div className="h-20 bg-background" />;

  return (
    <div className="py-12 mb-[120px] border-y border-border/50 bg-card/30 overflow-hidden relative flex items-center">
      {/* Gradients to fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />
      
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        className="flex whitespace-nowrap gap-12 px-6"
      >
        {[...technologies, ...technologies].map((tech, i) => (
          <span 
            key={i} 
            className="text-xl md:text-2xl font-bold font-heading text-muted hover:text-foreground transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
