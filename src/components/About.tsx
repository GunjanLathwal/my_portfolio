import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      role: 'Software Developer Intern',
      company: 'Innova Solutions',
      period: 'May 2025 – Present',
      description: 'Working on cutting-edge software solutions and gaining hands-on experience in enterprise development.',
    },
    {
      role: 'Full Stack Developer',
      company: 'CEED, Chitkara University',
      period: 'Sep 2023 – Feb 2025',
      description: 'Developed and maintained web applications, collaborated with cross-functional teams to deliver impactful solutions.',
    },
  ];

  return (
    <section id="about" className="relative py-20">
      <div className="bg-orb bg-orb-primary w-64 h-64 top-0 right-0 opacity-20" />
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Get to know more about my journey in tech
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio & Education */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-primary/20 text-primary">
                  <GraduationCap size={20} />
                </span>
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A passionate software engineer with hands-on experience in building applications 
                and solving coding challenges. I love learning new technologies and creating 
                solutions that make an impact. My journey in tech has been driven by curiosity 
                and a desire to build meaningful products.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-secondary/20 text-secondary">
                  <GraduationCap size={20} />
                </span>
                Education
              </h3>
              <div className="space-y-2">
                <p className="font-medium text-foreground">B.Tech in Computer Science</p>
                <p className="text-primary">Chitkara University</p>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Calendar size={14} />
                  2022 – 2026
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-3">
              <span className="p-2 rounded-lg bg-primary/20 text-primary">
                <Briefcase size={20} />
              </span>
              Work Experience
            </h3>

            <div className="relative space-y-6">
              {/* Timeline line */}
              <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary to-secondary" />

              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                  
                  <div className="glass-card p-6 glow-border">
                    <h4 className="font-semibold text-foreground">{exp.role}</h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                      <Calendar size={14} />
                      {exp.period}
                    </p>
                    <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
