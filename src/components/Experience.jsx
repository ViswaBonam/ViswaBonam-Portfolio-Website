import React from "react";

const experience = [
  {
    logo: "/edu/utdsom.png",
    institution: "UTDSOM Investment Corporation",
    degree: "Financial Analyst and Machine Learning Specialist",
    dates: "Jul 2024 – Aug 2024",
    desc: "Developed finance‐focused ML models, analytics tools, and real‐time dashboards to support investment decision‐making.",
    bullets: [
      "Improved stock return forecasting accuracy by 20% using SEC filings using NLP and ML models.",
      "Ranked stocks using financial modeling, increasing portfolio returns by 10%.",
      "Engineered robust data pipelines using Python, Pandas, and NumPy."
    ]
  },
  {
    logo: "/edu/skyess.png",
    institution: "SkyEss Techno Solutions",
    degree: "Associate Database Developer",
    dates: "Nov 2022 – Jan 2023",
    desc: "Built and optimized SQL-based databases for business analytics.",
    bullets: [
      "Designed and optimized SQL-based databases, reducing query time by 30%.",
      "Integrated backend logic into the UI using Python and Pandas.",
      "Delivered ad-hoc SQL reports, increasing report accuracy by 40%."
    ]
  }
];

const EduCard = ({ logo, institution, degree, dates, desc, bullets }) => (
  <div className="edu-card">
    <div className="edu-content">
      <div className="edu-title">{institution}</div>
      <div className="edu-degree">{degree}</div>
      <div className="edu-dates">{dates}</div>
      <div className="edu-desc">{desc}</div>
      <ul className="edu-bullets">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  </div>
);

const EducationExperience = () => (
  <section id="education" className="education-section">
    <div className="edu-list">
      {experience.map((exp, i) => <EduCard key={i} {...exp} />)}
    </div>
  </section>
);

export default EducationExperience; 