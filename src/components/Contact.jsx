import React from "react";

const Contact = () => (
  <section id="contact" className="contact-hero">
    <div className="contact-card">
      <div className="contact-left">
        <div className="contact-email">
          <span>viswabonam@gmail.com</span>
        </div>
        <hr className="contact-hr" />
        <div className="contact-intro">
        I enjoy blending data science with creative problem-solving. Whether it's building ML pipelines, exploring new tools like LangChain or automating insights — I love working at the intersection of finance and innovation. 
        Let's connect and collaborate!
        </div>
        <div className="contact-location">
          Viswa Sai Ammiraju Bonam<br />
          Richardson, Texas, USA
        </div>
        <div className="contact-socials">
          <a href="https://github.com/ViswaBonam" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
          </a>
          <a href="https://linkedin.com/in/viswabonam" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>
      <div className="contact-right">
        <img className="contact-photo" src="\profile\VBProfile.jpg" alt="Your portrait" />
      </div>
    </div>
  </section>
);

export default Contact; 