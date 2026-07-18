"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { Github } from "@/components/icons/Github";

export default function Projects() {
  return (
    <div className="container py-12 md:py-24">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold font-heading mb-4"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted max-w-2xl mx-auto text-lg"
        >
          Building scalable solutions for real-world problems.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group flex flex-col rounded-3xl border border-border bg-card/20 hover:bg-card/40 transition-all overflow-hidden glass"
          >
            {/* Image Container */}
            {project.image !== "/placeholder.svg" && (
              <div className="relative h-64 md:h-80 w-full overflow-hidden bg-muted border-b border-border p-4">
                <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-lg border border-border/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            )}

            {/* Content */}
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold font-heading text-foreground mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-primary">{project.tagline}</p>
                </div>
                <div className="flex gap-2">
                  {project.github !== "#" && (
                    <Link href={project.github} target="_blank" className="p-2 rounded-full bg-background/50 border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="w-4 h-4" />
                    </Link>
                  )}
                  {project.demo !== "#" && (
                    <Link href={project.demo} target="_blank" className="p-2 rounded-full bg-background/50 border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>

              <p className="text-muted leading-relaxed mb-6 flex-1">
                {project.shortDesc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-background border border-border text-xs font-medium text-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link w-fit">
                View Case Study
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
