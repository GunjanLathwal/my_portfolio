"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Server, Database, Cloud, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: ["TypeScript", "JavaScript", "Java 21", "Python", "SQL", "HTML5", "CSS3"]
  },
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-secondary" />,
    skills: ["React", "Next.js 15", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Redux", "Zustand"]
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6 text-accent" />,
    skills: ["Node.js", "Express", "Spring Boot", "FastAPI", "REST APIs", "Microservices"]
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6 text-success" />,
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "Redis", "Elasticsearch"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6 text-primary" />,
    skills: ["AWS", "Docker", "Kubernetes", "Vercel", "Render", "CI/CD", "Linux"]
  },
  {
    title: "AI & Data",
    icon: <Brain className="w-6 h-6 text-secondary" />,
    skills: ["OpenAI API", "LangChain", "PyTorch", "Pandas", "Snowflake", "Prompt Engineering"]
  },
  {
    title: "Dev Tools",
    icon: <Wrench className="w-6 h-6 text-accent" />,
    skills: ["Git", "GitHub", "Postman", "Figma", "VS Code", "IntelliJ IDEA"]
  }
];

export default function Skills() {
  return (
    <div className="container py-12 md:py-24">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold font-heading mb-4"
        >
          Technical <span className="text-gradient">Arsenal</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted max-w-2xl mx-auto text-lg"
        >
          Technologies I use to build scalable, production-grade applications.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-3xl border border-border bg-card/30 backdrop-blur-sm hover:bg-card/60 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h2 className="text-xl font-bold font-heading text-foreground">{category.title}</h2>
            </div>

            <div className="flex flex-wrap gap-2 relative z-10">
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 rounded-lg border border-border/50 bg-background/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Coding Profiles */}
      <div className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold font-heading text-center mb-8">Coding Profiles</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['GitHub', 'LeetCode', 'HackerRank', 'GeeksforGeeks'].map((profile, i) => (
            <motion.a
              href="#"
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-6 py-3 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-medium transition-colors flex items-center gap-2"
            >
              {profile}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
