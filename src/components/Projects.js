// src/components/Projects.jsx
import React from "react";
import { FaBriefcase, FaUtensils, FaMusic, FaWater } from "react-icons/fa";
import "../Styles/Projects.css";
import alaje from "../Assets/alaje.jpg"; // Assuming you have an image for AlajeMercy
const projects = [
  {
    title: 'Sheqlee',
    description: 'A freelancer and client-based platform connecting professionals with businesses.',
    tech: ['React', 'Node.js', 'MongoDB'],
    icon: <FaBriefcase />,
    image: 'https://cdn.prod.website-files.com/640959cbe7c9a7de76661a7c/6450aa4155d9d44197075022_12333_office-otto-work-force-people-meeting-1920x1057.jpg',
    link: null,
  },
  {
    title: 'ምዓም አንበሳ Restaurant',
    description: 'A food delivery website with online ordering system.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    icon: <FaUtensils />,
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/190205150343-kitfo.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_447',
    link: null,
  },
  {
    title: 'ZemaConnect',
    description: 'A platform for beginner musicians to collaborate and share their work.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    icon: <FaMusic />,
    image: 'https://wallpapercat.com/w/full/d/d/2/1169610-3840x2160-desktop-4k-musical-instruments-wallpaper-image.jpg',
    link: null,
  },
];


const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <div className="divider" />
          <p>
            Here are some of my recent projects that showcase my frontend
            development skills and problem-solving abilities.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
               {project.link ? (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="project-btn"
  >
    View Project →
  </a>
) : (
  <button
    className="project-btn disabled"
    onClick={() => alert('This project will be live soon!')}
  >
    Coming Soon →
  </button>
)}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
