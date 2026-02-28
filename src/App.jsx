import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    // Simple Scroll Reveal Animation logic
    const revealOnScroll = () => {
      const revealElements = document.querySelectorAll(".card, .section h2");
      const windowHeight = window.innerHeight;

      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }
      });
    };

    // Initial hidden state
    const revealElements = document.querySelectorAll(".card, .section h2");
    revealElements.forEach(element => {
      element.style.opacity = "0";
      element.style.transform = "translateY(40px)";
      element.style.transition = "all 0.6s ease";
    });

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);
    revealOnScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      window.removeEventListener("load", revealOnScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
