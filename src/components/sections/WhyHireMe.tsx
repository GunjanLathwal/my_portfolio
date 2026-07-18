"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Rocket, Code2, Database, Cloud, Zap, Brain, Shield, Layout, Settings } from "lucide-react";

const features = [
  { title: "Production SaaS Development", icon: <Rocket className="w-6 h-6 text-primary" />, desc: "Building complete, production-ready SaaS products from scratch with modern stacks." },
  { title: "Enterprise Experience", icon: <Shield className="w-6 h-6 text-secondary" />, desc: "Experience writing scalable, enterprise-grade code that handles real-world traffic." },
  { title: "AI Integration", icon: <Brain className="w-6 h-6 text-accent" />, desc: "Integrating LLMs, computer vision, and AI pipelines to create intelligent applications." },
  { title: "Backend Architecture", icon: <Settings className="w-6 h-6 text-primary" />, desc: "Designing robust, microservices and serverless architectures using Node, Java, and AWS." },
  { title: "Cloud Engineering", icon: <Cloud className="w-6 h-6 text-secondary" />, desc: "Deploying scalable infrastructure on AWS, Vercel, and Render with CI/CD pipelines." },
  { title: "Database Design", icon: <Database className="w-6 h-6 text-accent" />, desc: "Architecting relational (PostgreSQL) and NoSQL (MongoDB) schemas for high performance." },
  { title: "Performance Optimization", icon: <Zap className="w-6 h-6 text-primary" />, desc: "Optimizing queries, implementing caching, and ensuring lightning-fast load times." },
  { title: "Clean Code", icon: <Code2 className="w-6 h-6 text-secondary" />, desc: "Writing maintainable, heavily-typed TypeScript and Java code following clean architecture." },
  { title: "Modern UI", icon: <Layout className="w-6 h-6 text-accent" />, desc: "Crafting beautiful, accessible, and responsive user interfaces that users love." },
  { title: "Problem Solving", icon: <CheckCircle2 className="w-6 h-6 text-success" />, desc: "Tackling complex business problems and translating them into technical solutions." },
];

export default function WhyHireMe() {
  return (
    <section className="pt-0 pb-[120px] relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            Why Hire <span className="text-gradient">Me?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted max-w-2xl mx-auto text-lg"
          >
            I bring a unique combination of startup agility, enterprise standards, and a deep understanding of modern tech stacks.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl glass border border-border bg-card/40 hover:bg-card/80 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-heading">{feature.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
