import { ExternalLink, Github } from 'lucide-react';
import medilensDemo from '../assets/medilens_demo.png';
import jobcompassDemo from '../assets/jobcompass.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'JobCompass',
      subtitle: 'Job Tracker & AI Resume Matcher',
      description: 'A comprehensive Job Application Tracking System integrated with an AI Resume Matcher. Features a secure backend with JWT authentication, a dynamic Kanban-style dashboard for managing job statuses, and automated resume analysis. It intelligently matches resumes against job descriptions, saves AI-generated insights, and seamlessly injects missing skills into LaTeX templates for ATS optimization.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      image: jobcompassDemo,
      gradient: 'from-accent/40 to-primary/40',
      liveDemo: 'https://job-compass-navy.vercel.app/',
      viewCode: 'https://github.com/GunjanLathwal/JobCompass',
    },
    {
      title: 'MediLens',
      subtitle: 'Healthcare Price Transparency Platform',
      description: 'A location-based hospital service comparison and appointment booking platform that enables users to find affordable diagnostic services with transparent pricing, real-time availability, and smart recommendations.',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Maps API'],
      image: medilensDemo,
      gradient: 'from-primary/40 to-secondary/40',
      liveDemo: 'https://medilens-gunjanlathwals-projects.vercel.app',
      viewCode: 'https://github.com/GunjanLathwal/medicompare-hub',
    },
    {
      title: 'Fake Smile Detection',
      subtitle: 'Quantum KNN Research Project',
      description: 'Research project implementing quantum K-Nearest Neighbors (QKNN) to classify genuine vs. fake smiles using facial feature extraction and quantum-inspired algorithms.',
      techStack: ['Python', 'Quantum Computing', 'Machine Learning', 'OpenCV', 'Scikit-learn'],
      image: '/placeholder.svg',
      gradient: 'from-secondary/40 to-primary/40',
    },
  ];

  return (
    <section id="portfolio" className="relative py-20 bg-muted/20">
      <div className="bg-orb bg-orb-secondary w-80 h-80 top-20 -right-40 opacity-15" />
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A selection of my recent work and research
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card group flex flex-col lg:flex-row ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`lg:w-1/2 aspect-video bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                {project.image !== '/placeholder.svg' ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-foreground/10">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-primary font-mono text-sm mb-2">{project.subtitle}</p>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  {project.viewCode ? (
                    <a href={project.viewCode} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm flex items-center gap-2" style={{textDecoration: 'none'}}>
                      <Github size={16} />
                      View Code
                    </a>
                  ) : (
                    <button className="btn-outline text-sm flex items-center gap-2">
                      <Github size={16} />
                      View Code
                    </button>
                  )}
                  {project.liveDemo ? (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm flex items-center gap-2" style={{textDecoration: 'none'}}>
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  ) : (
                    <button className="btn-primary text-sm flex items-center gap-2">
                      <ExternalLink size={16} />
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
