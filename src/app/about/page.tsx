"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Globe, GraduationCap, Microscope, Briefcase, Rocket, Sparkles, CheckCircle2 } from "lucide-react";
import React from "react";

const stats = [
  { label: "Major Projects", value: "4+" },
  { label: "Technologies", value: "15+" },
  { label: "Professional Experiences", value: "2" },
  { label: "Research Accuracy", value: "98.66%" },
  { label: "Passion", value: "100%" },
];

const timeline = [
  { title: "Programming", icon: <Code2 className="w-5 h-5 text-primary" />, desc: "Started my journey with Java and Python." },
  { title: "Web Development", icon: <Globe className="w-5 h-5 text-secondary" />, desc: "Fell in love with React and Node.js." },
  { title: "CEED", icon: <GraduationCap className="w-5 h-5 text-accent" />, desc: "Built my first full-stack application as a Web Developer." },
  { title: "Research Paper", icon: <Microscope className="w-5 h-5 text-success" />, desc: "Published a paper on Quantum Computing and Deep Learning." },
  { title: "Innova Solutions", icon: <Briefcase className="w-5 h-5 text-primary" />, desc: "Joined as an SDE Intern, building enterprise systems." },
  { title: "BillSutra", icon: <Rocket className="w-5 h-5 text-secondary" />, desc: "Founded a comprehensive GST Billing SaaS." },
  { title: "JobCompass", icon: <Sparkles className="w-5 h-5 text-accent" />, desc: "Built an AI-powered resume matcher and job tracker." },
  { title: "Open to Work", icon: <CheckCircle2 className="w-5 h-5 text-success" />, desc: "Looking for full-time Software Engineer roles." },
];

export default function About() {
  return (
    <div className="container py-12 md:py-24">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold font-heading mb-4"
        >
          About <span className="text-gradient">Me</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted max-w-2xl mx-auto text-lg"
        >
          The story behind the code.
        </motion.p>
      </div>

      {/* Split Layout */}
      <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
        {/* Left Side: Photo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 relative"
        >
          <div className="sticky top-28">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden glass border-2 border-border shadow-2xl p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-muted">
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
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className={`p-4 rounded-xl glass border border-border flex flex-col items-center justify-center text-center ${idx === stats.length - 1 ? 'col-span-2 md:col-span-1 lg:col-span-2' : ''}`}
                >
                  <span className="text-2xl font-bold font-heading text-foreground mb-1">{stat.value}</span>
                  <span className="text-xs text-muted font-medium uppercase tracking-wider">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Story & Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">My Journey</h2>
            <p className="text-muted leading-relaxed mb-6">
              I didn't start with a silver spoon in technology. My journey began with an insatiable curiosity about how things work under the hood. What started as simple scripts to automate my daily tasks quickly snowballed into a deep passion for software architecture and building products that matter.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Throughout my academic and professional career, I've always gravitated towards the complex problems. Whether it was researching Quantum Computing for fake smile detection and achieving a 98.66% accuracy, or architecting a multi-tenant SaaS application (BillSutra) from the ground up, I thrive in environments where I can build end-to-end solutions.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              I believe that great engineering is not just about writing code; it's about understanding the business, designing scalable systems, and obsessing over the user experience. I don't just build features—I build products.
            </p>
          </div>

          <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Timeline</h2>
          <div className="relative border-l-2 border-border ml-6 space-y-12">
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="relative pl-8"
              >
                <div className="absolute -left-[21px] top-1 p-2 rounded-full bg-background border-2 border-border z-10 glass">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
