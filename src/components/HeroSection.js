// src/components/HeroSection.jsx
import React from 'react';
import '../Styles/Hero.css';
import myPhoto from '../Assets/src/3B1A1384.JPG.jpg'; // Import your image

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
                  <div className="badge">
              <li>Frontend Developer</li>
              <li>AI Enthusiast</li>
              <li>Data Analyst</li>
              <li>Musician</li>
              <li>Virtual Assistance</li>
          </div>
          <h1>
            Hi, I'm <span className="gradient-text">Mulat Tesfay</span>
          </h1>
          <p>
            I build exceptional and accessible digital experiences for the web.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View My Work</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="photo-ring">
            <div className="photo">
              {/* Use your image here */}
              <img src={myPhoto} alt="Mulat Tesfay" className="avatar"/>
            </div>
          </div>
          <div className="experience-badge">5+</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
