// src/components/Skills.jsx
import React from 'react';
import '../Styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Technical Skills</h2>
          <div className="divider" />
          <p>
            My toolkit includes modern frontend technologies and best practices for building exceptional web experiences.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skills-card">
            <h3>Frontend Development</h3>
            <div className="skill">
              <span>JavaScript / TypeScript</span>
              <div className="bar"><div className="fill" style={{ width: '95%' }}></div></div>
            </div>
            <div className="skill">
              <span>React & Ecosystem</span>
              <div className="bar"><div className="fill" style={{ width: '90%' }}></div></div>
            </div>
            <div className="skill">
              <span>HTML5 & CSS3</span>
              <div className="bar"><div className="fill" style={{ width: '95%' }}></div></div>
            </div>
            <div className="skill">
              <span>Next.js</span>
              <div className="bar"><div className="fill" style={{ width: '85%' }}></div></div>
            </div>
            <div className="skill">
              <span>Tailwind / Bootstrap</span>
              <div className="bar"><div className="fill" style={{ width: '90%' }}></div></div>
            </div>
          </div>

          <div className="skills-card">
            <h3>Tools & Technologies</h3>
            <div className="badges">
              {[
                'React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS',
                'Next.js', 'Redux', 'Node.js', 'MongoDB', 'Git', 'Webpack',
                'Jest', 'Figma', 'Firebase', 'GraphQL'
              ].map((tool, i) => (
                <span key={i} className="badge-s">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
