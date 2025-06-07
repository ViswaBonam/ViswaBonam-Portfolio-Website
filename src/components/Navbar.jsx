import React, { useEffect, useState } from "react";
import { Within } from "@theme-toggles/react";
import "@theme-toggles/react/css/Within.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ theme, onThemeToggle }) => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 130 && rect.bottom > 130) {
            current = section.id;
            break;
          }
        }
      }
      // If at the bottom of the page, force 'contact'
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 2)) {
        current = "contact";
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-links">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={active === section.id ? "active" : ""}
          >
            {section.label}
          </a>
        ))}
      </div>
      <div className="theme-switch" style={{ background: "none", boxShadow: "none" }}>
        <Within
          toggled={theme === 'dark'}
          toggle={onThemeToggle}
          duration={500}
          aria-label="Toggle theme"
          style={{ fontSize: '2rem', color: 'var(--accent-dark)' }}
        />
      </div>
    </nav>
  );
};

export default Navbar; 