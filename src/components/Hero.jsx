import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src="/profile.jpeg" alt="Gunjan Lathwal Profile Picture" />
        </div>

        <div className="hero-text">
          <span className="hello">Hello, I'm</span>
          <h1>
            Gunjan <span className="gradient">Lathwal</span>
          </h1>
          <p className="tagline">
            Passionate Software Developer | Data Science & AI Enthusiast |
            Building impactful solutions.
          </p>
          <div className="cta-buttons">
            <a href="#portfolio" className="btn primary">View Portfolio</a>
            <a href="#contact" className="btn secondary">Get In Touch</a>
          </div>

          <div className="social-links">
            <a href="https://linkedin.com/in/gunjan-lathwal" target="_blank" rel="noreferrer" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/GunjanLathwal/" target="_blank" rel="noreferrer" className="social-icon">
                <i className="fab fa-github"></i>
            </a>
            <a href="mailto:gunjan251492@gmail.com" className="social-icon">
                <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="scroll-down">
         <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default Hero;
