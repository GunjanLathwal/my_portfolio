import React from 'react';

const Services = () => {
  return (
    <section id="services" className="section">
      <h2>What I <span className="gradient">Offer</span></h2>
      <span className="section-subtitle">Specialized services to help bring your ideas to life</span>

      <div className="services-grid">
        <div className="skill-card">
          <div className="skill-icon-box teal">
            <i className="fas fa-code"></i>
          </div>
          <h3>Software Development</h3>
          <p>
            Building robust, scalable applications using modern 
            frameworks and best practices. From concept to 
            deployment, I create solutions that solve real-world 
            problems.
          </p>
          <ul className="service-list">
             <li className="service-list-item">
                <i className="fas fa-arrow-right"></i> Full-stack web applications
             </li>
             <li className="service-list-item">
                <i className="fas fa-arrow-right"></i> API development & integration
             </li>
             <li className="service-list-item">
                <i className="fas fa-arrow-right"></i> Clean, maintainable code
             </li>
             <li className="service-list-item">
                <i className="fas fa-arrow-right"></i> Performance optimization
             </li>
          </ul>
        </div>

        <div className="skill-card">
          <div className="skill-icon-box purple">
            <i className="fas fa-chart-bar"></i>
          </div>
          <h3>Data Science Solutions</h3>
          <p>
            Transforming raw data into actionable insights through 
            advanced analytics, machine learning models, and 
            intelligent automation systems.
          </p>
          <ul className="service-list">
             <li className="service-list-item">
                <i className="fas fa-arrow-right"></i> Data analysis & visualization
             </li>
             <li className="service-list-item">
                <i className="fas fa-arrow-right"></i> Machine learning models
             </li>
             <li className="service-list-item">
                <i className="fas fa-arrow-right"></i> LLM & RAG applications
             </li>
             <li className="service-list-item">
                <i className="fas fa-arrow-right"></i> Data pipeline development
             </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
