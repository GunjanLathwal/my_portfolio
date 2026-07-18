import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { Github } from "@/components/icons/Github";

export function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }));
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container py-12">
      <Link href="/projects" className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-8 font-medium">
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>

      {/* Hero Section */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 text-foreground">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium">{project.tagline}</p>
          </div>
          <div className="flex gap-4">
            {project.github !== "#" && (
              <Link href={project.github} target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/50 hover:bg-card text-foreground font-medium transition-all backdrop-blur-sm">
                <Github className="w-5 h-5" />
                Source Code
              </Link>
            )}
            {project.demo !== "#" && (
              <Link href={project.demo} target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </Link>
            )}
          </div>
        </div>

        {project.image !== "/placeholder.svg" && (
          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden border border-border/50 glass shadow-2xl p-2 md:p-4 bg-card/30">
            <div className="w-full h-full relative rounded-2xl overflow-hidden bg-muted">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}
      </div>

      {/* Case Study Content */}
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
        
        {/* Left Column (Main Content) */}
        <div className="lg:col-span-2 space-y-16">
          <section>
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary rounded-full"></span>
              Overview
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              {project.overview}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-secondary rounded-full"></span>
              The Problem
            </h2>
            <div className="p-6 rounded-2xl bg-card border border-border glass relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
              <p className="text-lg text-muted leading-relaxed">
                {project.problem}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-success rounded-full"></span>
              The Solution
            </h2>
            <div className="p-6 rounded-2xl bg-card border border-border glass relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-success" />
              <p className="text-lg text-muted leading-relaxed">
                {project.solution}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent rounded-full"></span>
              System Architecture
            </h2>
            <div className="p-8 rounded-2xl bg-background border border-border flex items-center justify-center min-h-[150px] font-mono text-sm md:text-base text-primary text-center">
              {project.architecture.split(" -> ").map((node, i, arr) => (
                <div key={i} className="flex items-center">
                  <div className="px-4 py-2 rounded-lg border border-primary/30 bg-primary/10 backdrop-blur-sm">
                    {node}
                  </div>
                  {i < arr.length - 1 && (
                    <ArrowLeft className="w-4 h-4 mx-2 text-muted rotate-180" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {project.screenshots && project.screenshots.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-secondary rounded-full"></span>
                Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((shot, index) => (
                  <div key={index} className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-border/50 glass shadow-lg p-2 bg-card/30 group">
                    <div className="w-full h-full relative rounded-lg overflow-hidden bg-muted">
                      <Image
                        src={shot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary rounded-full"></span>
              Challenges & Lessons Learned
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Technical Challenges</h3>
                <p className="text-muted leading-relaxed">{project.challenges}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Key Takeaways</h3>
                <p className="text-muted leading-relaxed">{project.lessons}</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="lg:col-span-1 space-y-12">
          
          <div className="sticky top-28 space-y-12">
            <section>
              <h2 className="text-xl font-bold font-heading text-foreground mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-background border border-border text-sm font-medium text-muted-foreground shadow-sm">
                    {t}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold font-heading text-foreground mb-6">Key Features</h2>
              <ul className="space-y-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-muted font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          
        </div>
      </div>
    </div>
  );
}
