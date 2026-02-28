import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "MediLens",
      category: "Healthcare Price Transparency Platform",
      description: "A location-based hospital service comparison and appointment booking platform that enables users to find affordable diagnostic services with transparent pricing, real-time availability, and smart recommendations.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Maps API"],
      links: { code: "#", demo: "#" },
      letter: "M",
      reverse: false
    },
    {
      title: "Fake Smile Detection",
      category: "Quantum KNN Research Project",
      description: "Research project implementing quantum K-Nearest Neighbors (QKNN) to classify genuine vs. fake smiles using facial feature extraction and quantum-inspired algorithms.",
      tech: ["Python", "Quantum Computing", "Machine Learning", "OpenCV", "Scikit-learn"],
      links: null,
      letter: null,
      reverse: false
    }
  ];

  return (
    <section id="portfolio" className="section">
      <h2>Featured <span className="gradient">Projects</span></h2>
      <span className="section-subtitle">A selection of my recent work and research</span>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className={`featured-project ${project.reverse ? 'reverse' : ''} ${!project.letter ? 'no-visual' : ''}`} key={index}>
            {project.letter && (
              <div className="project-visual">
                <div className="placeholder-letter">{project.letter}</div>
              </div>
            )}
            
            <div className="project-info">
               <span className="project-category">{project.category}</span>
               <h3>{project.title}</h3>
               <p>{project.description}</p>
               
               <div className="skill-tags">
                 {project.tech.map((tag, tIndex) => (
                   <span className="skill-tag" key={tIndex}>{tag}</span>
                 ))}
               </div>

               {project.links && (
                 <div className="project-actions">
                   <a href={project.links.code} className="btn btn-outline">
                      <i className="fab fa-github"></i> View Code
                   </a>
                   <a href={project.links.demo} className="btn btn-solid-cyan">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                   </a>
                 </div>
               )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
