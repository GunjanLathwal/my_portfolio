import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState({ message: '', type: '' });

  
  const contactInfo = {
    email: "gunjan251492@gmail.com",
    phone: "+91 7206028904",
    linkedin: "linkedin.com/in/gunjan-lathwal",
    location: "Punjab, India"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('_replyto');
    const message = formData.get('message');

    const subject = `Portfolio Inquiry from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Redirect to mailto link
    window.location.href = mailtoUrl;

    setStatus({ message: "Redirecting to your email client... 🚀", type: "success" });
    e.target.reset();
  };

  return (
    <section id="contact" className="section">
      <h2>Get In <span className="gradient">Touch</span></h2>
      <span className="section-subtitle">Have a project in mind? Let's connect and discuss how we can work together</span>

      <div className="contact-row">
        {/* Left Column: Info */}
        <div className="contact-info-panel">
          <div className="contact-card">
            <h3>Contact Information</h3>
            
            <div className="contact-item">
              <div className="contact-icon teal">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <span>Email</span>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon teal">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="contact-details">
                <span>Phone</span>
                <p>{contactInfo.phone}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon teal">
                <i className="fab fa-linkedin-in"></i>
              </div>
              <div className="contact-details">
                <span>LinkedIn</span>
                <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noreferrer">
                  {contactInfo.linkedin}
                </a>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-item">
              <div className="contact-icon purple">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <span>Location</span>
                <p>{contactInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="contact-form-panel">
          <h3>Send a Message</h3>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="_replyto" placeholder="your@email.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Your message..." required></textarea>
            </div>

            <button type="submit" className="btn primary">
              Send Message
            </button>
            
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
