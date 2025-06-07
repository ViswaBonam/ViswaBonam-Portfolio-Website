import React from "react";

const Contact = () => (
  <section id="contact" className="contact-hero">
    <div className="contact-card">
      <div className="contact-left">
        <div className="contact-email">
          <span>viswa.bonam@utdallas.edu</span>
        </div>
        <hr className="contact-hr" />
        <div className="contact-intro">
        I enjoy blending data science with creative problem-solving. Whether it’s building ML pipelines, exploring new tools like LangChain or automating insights — I love working at the intersection of finance and innovation. 
        Let’s connect and collaborate!
        </div>
        <div className="contact-location">
          Viswa Sai Ammiraju Bonam<br />
          Richardson, Texas, USA
        </div>
        <div className="contact-socials">
          <a href="https://github.com/ViswaBonam" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 0 0 2.16-2.72c-.95.56-2 .97-3.13 1.19A4.92 4.92 0 0 0 16.62 3c-2.72 0-4.93 2.21-4.93 4.93 0 .39.04.77.12 1.13C7.69 8.9 4.07 7.13 1.64 4.15c-.43.74-.68 1.6-.68 2.52 0 1.74.89 3.28 2.25 4.18-.83-.03-1.61-.25-2.29-.63v.06c0 2.43 1.73 4.46 4.03 4.92-.42.12-.87.18-1.33.18-.32 0-.63-.03-.93-.09.63 1.97 2.45 3.4 4.6 3.44A9.87 9.87 0 0 1 0 21.54a13.94 13.94 0 0 0 7.56 2.22c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A9.93 9.93 0 0 0 24 4.56z"/></svg>
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