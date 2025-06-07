import React from "react";
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import AnimatedBackground from './AnimatedBackground';

const Home = ({ onScrollDown }) => {
  const typingText = useTypingAnimation();

  const handleViewProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home-section">
      <AnimatedBackground />
      <div className="home-card">
        <div className="home-card-content">
          <h1>
            Viswa Sai Ammiraju Bonam
            <span className="highlight-bar"></span>
          </h1>
          <div className="tagline">
            <span className="typing-text">{typingText}</span>
          </div>
          <div className="home-btn-group">
            <a href="\Viswa_Bonam_Resume.pdf" download className="resume-btn fun-bounce">Download Resume</a>
            <button className="view-projects-btn" onClick={handleViewProjects}>View Projects</button>
          </div>
          <button className="scroll-down-btn" onClick={onScrollDown} aria-label="Scroll to see more">
            <span style={{ fontSize: '2.5rem', color: '#60a5fa' }}>↓</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home; 