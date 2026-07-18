"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Database, Cloud, Brain, Laptop } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import TechMarquee from "@/components/sections/TechMarquee";
import WhyHireMe from "@/components/sections/WhyHireMe";

const roles = [
  "Full Stack Software Engineer",
  "Backend Engineer",
  "AI Engineer",
  "SaaS Builder",
  "Cloud Developer",
  "Prompt Engineer"
];

const techStack = [
  { name: "React", color: "#61DAFB", icon: <Laptop className="w-5 h-5" />, delay: 0 },
  { name: "Node", color: "#339933", icon: <Terminal className="w-5 h-5" />, delay: 0.2 },
  { name: "Java", color: "#007396", icon: <Terminal className="w-5 h-5" />, delay: 0.4 },
  { name: "Python", color: "#3776AB", icon: <Terminal className="w-5 h-5" />, delay: 0.6 },
  { name: "AWS", color: "#FF9900", icon: <Cloud className="w-5 h-5" />, delay: 0.8 },
  { name: "Snowflake", color: "#29B5E8", icon: <Database className="w-5 h-5" />, delay: 1.0 },
  { name: "PostgreSQL", color: "#4169E1", icon: <Database className="w-5 h-5" />, delay: 1.2 },
  { name: "Prisma", color: "#2D3748", icon: <Database className="w-5 h-5" />, delay: 1.4 },
  { name: "OpenAI", color: "#412991", icon: <Brain className="w-5 h-5" />, delay: 1.6 },
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-screen pt-[120px] pb-[120px] flex items-center overflow-hidden">
        {/* Background Grid & Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-secondary/20 opacity-20 blur-[120px]"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Hello, I&apos;m
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-foreground mb-4">
                  Gunjan<br/>Lathwal
                </h1>
                
                <div className="h-10 md:h-12 overflow-hidden relative mb-6">
                  <motion.div
                    key={roleIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                    className="text-2xl md:text-3xl font-semibold text-gradient-accent absolute"
                  >
                    {roles[roleIndex]}
                  </motion.div>
                </div>

                <p className="text-xl font-medium text-foreground mb-4 max-w-xl">
                  Building software that solves real business problems.
                </p>

                <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl mb-8">
                  I design and develop modern full-stack applications, scalable backend systems, AI-powered products, enterprise cloud workflows, and SaaS platforms.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/projects" className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link href="/resume" className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/50 hover:bg-card text-foreground font-medium transition-all backdrop-blur-sm">
                  <Download className="w-4 h-4" />
                  Resume
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  { label: "Open To Work", color: "bg-success/10 text-success border-success/20" },
                  { label: "2026 Graduate", color: "bg-primary/10 text-primary border-primary/20" },
                ].map((badge, i) => (
                  <div key={i} className={`px-3 py-1.5 rounded-md border text-xs font-medium backdrop-blur-sm ${badge.color}`}>
                    {badge.label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Image & Tech Stack */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[480px] aspect-square mx-auto hidden lg:flex items-center justify-center"
            >
              {/* Animated Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[120%] h-[120%] border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="w-[100%] h-[100%] border border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse] absolute" />
                <div className="w-[80%] h-[80%] border border-accent/20 rounded-full animate-[spin_20s_linear_infinite] absolute" />
              </div>

              {/* Main Image */}
              <div className="relative z-20 w-[70%] h-[70%] rounded-full overflow-hidden border-2 border-border bg-card p-2 shadow-2xl glass">
                <div className="w-full h-full rounded-full overflow-hidden bg-muted relative">
                  {/* Fallback to placeholder if real image is not found */}
                  <Image
                    src="/image.png"
                    alt="Gunjan Lathwal"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
              </div>

              {/* Floating Tech Badges */}
              {techStack.map((tech, i) => {
                const angle = (i * 360) / techStack.length;
                // Orbit radius is 220, perfectly positioning items around the 70% width image
                const radius = 220; 
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{ opacity: 1, x, y }}
                    transition={{ delay: tech.delay + 0.5, duration: 0.8, type: "spring" }}
                    className="absolute z-30 flex items-center gap-2 px-3 py-2 rounded-xl bg-card border border-border shadow-lg glass whitespace-nowrap"
                    style={{ top: "50%", left: "50%", margin: "-20px 0 0 -50px" }}
                  >
                    <div style={{ color: tech.color }}>{tech.icon}</div>
                    <span className="text-xs font-semibold">{tech.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
      
      <TechMarquee />
      <WhyHireMe />
    </>
  );
}
