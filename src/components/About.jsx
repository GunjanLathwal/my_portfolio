import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About <span className="gradient">Me</span></h2>
      <span className="section-subtitle">Get to know more about my journey in tech</span>

      <div className="about-row">
        {/* Left Column: Cards */}
        <div className="about-col">
          <div className="about-card">
            <h3>
              <div className="about-icon teal">
                <i className="fas fa-user-graduate"></i>
              </div>
              Who I Am
            </h3>
            <p>
              A passionate software developer with hands-on experience in building 
              applications and solving coding challenges. I love learning new technologies 
              and creating solutions that make an impact. My journey in tech has been driven 
              by curiosity and a desire to build meaningful products.
            </p>
          </div>

          <div className="about-card">
            <h3>
              <div className="about-icon purple">
                <i className="fas fa-graduation-cap"></i>
              </div>
              Education
            </h3>
            <p>
              <strong>B.Tech in Computer Science</strong><br />
              Chitkara University<br />
              <span className="date">2022 – 2026</span>
            </p>
          </div>
        </div>

        {/* Right Column: Timeline */}
        <div className="about-col">
          <div className="about-col-title">
             <div className="about-icon teal">
                <i className="fas fa-briefcase"></i>
             </div>
             Work Experience
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Software Developer Intern</h4>
                <span className="company">Innova Solutions</span>
                <span className="date">
                   <i className="far fa-calendar-alt"></i> May 2025 – Present
                </span>
                <p>
                   Working on cutting-edge software solutions and gaining 
                   hands-on experience in enterprise development.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Web Developer</h4>
                <span className="company">CEED, Chitkara University</span>
                <span className="date">
                   <i className="far fa-calendar-alt"></i> Sep 2023 – Feb 2025
                </span>
                <p>
                   Developed and maintained web applications, focusing on 
                   responsive design and performance optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
