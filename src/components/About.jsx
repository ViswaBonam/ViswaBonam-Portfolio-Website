import React from "react";

const About = () => (
  <section id="about" className="about-section">
    <p>
      Hi, I’m Viswa Sai Ammiraju Bonam — a data science and financial technology professional passionate about solving real-world problems using machine learning, AI, and analytics. I’m currently pursuing my Master’s in Financial Technology and Analytics at The University of Texas at Dallas, where I’ve built scalable ML models, engineered GenAI-powered research tools, and worked on predictive systems that improve financial decision-making.
    </p>
    <p>
      With a background in Python, SQL, cloud computing (AWS & Azure), and frameworks like Scikit-learn, TensorFlow, and LangChain, I specialize in developing intelligent solutions across domains such as investment analytics, credit scoring, and algorithmic trading.
    </p>
    <div className="about-degree-horizontal-card">
      <div className="about-degree-logo">
        <img src="/edu/utd.png" alt="UT Dallas logo" />
      </div>
      <div className="about-degree-content">
        <div className="about-degree-title">The University of Texas at Dallas</div>
        <div className="about-degree-role">Master of Science in Financial Technology and Analytics</div>
        <div className="about-degree-dates">Aug 2023 – May 2025</div>
        <div className="about-degree-desc">Specialized in financial analytics, machine learning, and data engineering.</div>
        <ul className="about-degree-bullets">
          <li>CGPA: 3.830/4.0</li>
          <li>Focus: Machine Learning, Financial Analytics, Big Data Engineering</li>
        </ul>
      </div>
    </div>
    <div className="focus">
      <h3>🔎 What I’m Focused On:</h3> 
      <ul>
        <li>Designing machine learning pipelines that are robust, explainable, and production-ready</li>
        <li>Applying Generative AI (LangChain, OpenAI) to automate research and augment decision-making</li>
        <li>Creating real-time data systems for financial insights using Kafka, Spark, and AWS</li>
        <li>Bridging the gap between business strategy and technical implementation</li>
      </ul>
    </div>
  </section>
);

export default About; 