// src/components/About.jsx
import React from 'react';
import '../Styles/About.css';
import { FaCode, FaMobileAlt, FaPaintBrush, FaTachometerAlt } from 'react-icons/fa';  // Import Font Awesome icons

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>About Me</h2>
          <div className="divider" />
        </div>

        <div className="about-content">
          <div className="code-box">
            <pre>
              <span className="keyword">const</span> <span className="name">developer</span> = {'{'}
              <br />&nbsp;&nbsp;<span className="prop">name</span>: <span className="string">'Mulat Tesfay'</span>,
              <br />&nbsp;&nbsp;<span className="prop">title</span>: <span className="string">'Frontend Developer  | AI Enthusiast |Virtual Assistance | Musician | Data Analyst '</span>,
              <br />&nbsp;&nbsp;<span className="prop">location</span>: <span className="string">'Mekelle, Tigray, Ethiopia'</span>,
              <br />&nbsp;&nbsp;<span className="prop">skills</span>: [<span className="string">'JavaScript'</span>, <span className="string">'React'</span>, <span className="string">'Tailwind'</span>, <span className="string">'Next.js'</span>, <span className="string">'......'</span>],
              <br />&nbsp;&nbsp;<span className="prop">experience</span>: <span className="number">5</span>,
              <br />&nbsp;&nbsp;<span className="prop">passion</span>: <span className="string">'Building beautiful UIs'</span>,
              <br />&nbsp;&nbsp;<span className="prop">sayHello</span>: <span className="keyword">()</span> =&gt; console.<span className="function">log</span>(<span className="string">'Let\'s create something amazing!'</span>)
              <br />{'}'};
            </pre>
          </div>

          <div className="about-text">
            <h3>Frontend Developer & UI Designer</h3>
            <p>
              I'm Mulat Tesfay, a passionate frontend developer with 5+ years of experience crafting modern web experiences. I specialize in building responsive, accessible, and performant websites.
            </p>
            <p>
              My approach combines clean code with creative design. I keep up with the latest frontend technologies to create experiences that are both user-focused and business-aligned.
            </p>

            <div className="features-grid">
              <div className="feature">
                <div className="icon">
                  <FaCode /> {/* Clean Code Icon */}
                </div>
                <div>
                  <h4>Clean Code</h4>
                  <p>Maintainable & Scalable</p>
                </div>
              </div>
              <div className="feature">
                <div className="icon">
                  <FaMobileAlt /> {/* Responsive Icon */}
                </div>
                <div>
                  <h4>Responsive</h4>
                  <p>Mobile-First Approach</p>
                </div>
              </div>
              <div className="feature">
                <div className="icon">
                  <FaPaintBrush /> {/* UI/UX Design Icon */}
                </div>
                <div>
                  <h4>UI/UX Design</h4>
                  <p>Creative & Intuitive</p>
                </div>
              </div>
              <div className="feature">
                <div className="icon">
                  <FaTachometerAlt /> {/* Performance Icon */}
                </div>
                <div>
                  <h4>Performance</h4>
                  <p>Fast & Optimized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
