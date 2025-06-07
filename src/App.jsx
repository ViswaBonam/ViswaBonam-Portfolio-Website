import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import EducationExperience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import SectionTitle from "./components/SectionTitle";
import './App.css'

function App() {
  const [showRest, setShowRest] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowRest(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDown = () => {
    setShowRest(true);
    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }, 50);
  };

  return (
    <div>
      <Navbar theme={theme} onThemeToggle={handleThemeToggle} />
      <Home onScrollDown={handleScrollDown} />
      <main>
        {showRest && <>
          <SectionTitle title="About" />
          <About />
          <SectionTitle title="Experience" />
          <EducationExperience />
          <SectionTitle title="Skills" />
          <Skills />
          <SectionTitle title="Projects" />
          <Projects />
          <SectionTitle title="Say Hi" />
          <Contact />
        </>}
      </main>
      <Chatbot />
    </div>
  )
}

export default App
