"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Software Development Engineer Intern",
    company: "Innova Solutions",
    logo: "IS",
    period: "Feb 2024 - Present",
    location: "Remote, India",
    achievements: [
      "Engineered a scalable microservices architecture using Java and Spring Boot, reducing API response time by 40%.",
      "Developed comprehensive automated testing suites ensuring 90%+ code coverage for critical modules.",
      "Collaborated with cross-functional teams to design and implement secure authentication workflows.",
      "Optimized database queries in PostgreSQL, improving data retrieval efficiency for reporting dashboards."
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Git", "REST APIs"]
  },
  {
    role: "Web Developer",
    company: "CEED",
    logo: "CD",
    period: "Aug 2023 - Jan 2024",
    location: "On-site, India",
    achievements: [
      "Led the development of the organization's primary web portal using React and Node.js.",
      "Implemented a dynamic content management system allowing non-technical staff to update site content.",
      "Improved website performance (Lighthouse score 95+) by implementing lazy loading and optimizing assets.",
      "Integrated secure payment gateways for event registrations, handling 500+ seamless transactions."
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Redux"]
  }
];

export default function Experience() {
  return (
    <div className="container py-12 md:py-24">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold font-heading mb-4"
        >
          Professional <span className="text-gradient">Experience</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted max-w-2xl mx-auto text-lg"
        >
          Where I've made an impact.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative border-l border-border md:ml-[120px]">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-16 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[21px] top-6 w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center z-10 hidden md:flex glass">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>

              <div className="flex flex-col md:flex-row gap-8 pl-6 md:pl-12">
                {/* Period - Left Side on Desktop */}
                <div className="md:absolute md:-left-[140px] md:top-7 md:w-[100px] md:text-right hidden md:block">
                  <span className="text-sm font-semibold text-muted font-mono">{exp.period.split(" - ")[0]}</span>
                </div>

                {/* Content Card */}
                <div className="flex-1 rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 md:p-8 hover:bg-card/60 transition-colors group relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center font-bold font-heading text-lg text-primary shadow-inner">
                        {exp.logo}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground">{exp.role}</h3>
                        <div className="text-lg font-medium text-muted">{exp.company}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted">
                    <div className="flex items-center gap-1.5 bg-background/50 px-3 py-1.5 rounded-md border border-border/50">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5 bg-background/50 px-3 py-1.5 rounded-md border border-border/50">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Key Achievements</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achieve, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                          <span>{achieve}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium backdrop-blur-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
