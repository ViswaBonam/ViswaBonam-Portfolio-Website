import React, { useState } from "react";
import { createPortal } from "react-dom";

const projectBadges = [
  "🚀", // Real-Time Data Streaming
  "💳", // Amex Credit Default
  "🧠", // Equity Insight
  "📈"  // Bitcoin Return Prediction
];

const projects = [
  {
    title: "Real-Time Data Streaming & Analytics with Kafka & AWS",
    short: "Built a scalable pipeline for ingesting and analyzing real-time stock and transaction data using Kafka, Zookeeper, S3, and Athena on AWS.",
    skills: ["Kafka", "Zookeeper", "AWS", "S3", "Athena", "Stream Analytics"],
    details: `
    - Designed and deployed a scalable real-time data pipeline using Kafka and Zookeeper on AWS EC2, enabling seamless streaming of thousands of financial events per second. Reduced data latency from hours to near real-time, supporting time-sensitive analytics.
    
    - Integrated Amazon S3 for persistent storage and AWS Athena for on-demand querying, reducing analysis turnaround time by 40%. Enabled quick business insights through optimized querying of streaming data.
    
    - Built robust Kafka Producers & Consumers in Python, achieving 99.9% uptime and ensuring high availability for critical analytics workflows.
    `,
    github: "https://github.com/ViswaBonam/Real-Time-Data-Streaming-Querying-on-AWS",
    image: "/projects/aws.png"
  },
  {
    title: "American Express Credit Default Prediction",
    short: "Engineered a credit default classification model using XGBoost and neural networks to identify high-risk borrowers, enabling risk mitigation.",
    skills: ["XGBoost", "Neural Network", "Python", "Feature Engineering"],
    details: `
    - Developed a robust credit default prediction system using XGBoost and Neural Networks, achieving an AUC of 94.7%. Applied advanced feature engineering techniques on transaction-level and behavioral variables (e.g., delinquency, balance, and payment history).
    
    - Tuned model hyperparameters to reduce overfitting and increase stability across datasets. Integrated credit scoring techniques that helped simulate risk-based segmentation and reduce predicted default rates by up to 10%.
    
    - This model served as a proof of concept for automated credit risk analysis in fintech lending platforms.
    `,
    github: "https://github.com/ViswaBonam/American-Express-Credit-Default-Prediction",
    image: "/projects/amex.png"
  },
  {
    title: "Equity Insight: AI-Driven News Analysis Tool",
    short: "Developed a RAG-based GenAI application to extract and summarize financial news insights using LangChain and FAISS.",
    skills: ["LangChain", "OpenAI", "RAG", "Python", "FAISS", "Streamlit"],
    details: `
    - Built a Retrieval-Augmented Generation (RAG) tool that automates financial news analysis using LangChain, OpenAI, and FAISS. The tool allows users to query semantic insights from thousands of articles, reducing manual research time by 60%.

    - Leveraged FAISS vector databases for lightning-fast semantic search and integrated with Streamlit for an intuitive user interface. Enabled real-time financial news summarization tailored to user prompts.

    - This solution is ideal for analysts and portfolio managers needing fast, explainable, GenAI-assisted news insights.
    `,
    github: "https://github.com/ViswaBonam/Equity-Insight-AI-Driven-News-Analysis-Tool",
    image: "/projects/equityinsights.png"
  },
  {
    title: "Bitcoin Return Prediction with Multivariate Asset Integration",
    short: "Designed a multivariate return prediction system incorporating macro and crypto data using SHAP and XGBoost to provide explainable predictions.",
    skills: ["XGBoost", "SHAP", "Python", "Feature Selection", "Finance"],
    details: `
    - Created a predictive model to forecast Bitcoin returns using XGBoost, leveraging historical pricing data alongside macroeconomic and alternative asset indicators.

    - Applied SHAP analysis to select the top 20 features from a multivariate dataset, increasing model interpretability while reducing noise by 40%. Achieved a 15% improvement in classification accuracy by applying custom feature selection and imputation techniques.

    - This project demonstrates the integration of explainable AI (XAI) with financial prediction models for cryptocurrency markets.
    `,
    github: "https://github.com/ViswaBonam/Bitcoin-Return-Prediction-with-Multivariate-Asset",
    image: "/projects/bitcoin.png"
  }
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-list projects-grid">
        {projects.map((proj, idx) => (
          <div
            className="project-card project-tilt"
            key={idx}
            onClick={() => setSelected(idx)}
            style={{ cursor: "pointer" }}
          >
            <span className="project-badge" style={{ fontSize: "1.6rem", marginRight: "0.5rem" }}>{projectBadges[idx]}</span>
            <h3 style={{ display: "inline-block" }}>{proj.title}</h3>
            <p>{proj.short}</p>
            <div style={{ margin: "0.5rem 0" }}>
              {proj.skills.map(skill => (
                <span key={skill} style={{
                  display: "inline-block",
                  background: "#2563eb22",
                  color: "#60a5fa",
                  borderRadius: "6px",
                  padding: "0.2rem 0.7rem",
                  fontSize: "0.95rem",
                  marginRight: "0.4rem",
                  marginBottom: "0.2rem"
                }}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {selected !== null && createPortal(
        <div className="project-modal" onClick={() => setSelected(null)}>
          <div className="project-modal-content" onClick={e => e.stopPropagation()}>
            <h2>{projectBadges[selected]} {projects[selected].title}</h2>
            <img
              src={projects[selected].image || placeholderImg}
              alt={projects[selected].title}
              style={{ width: "100%", borderRadius: "10px", marginBottom: "1.2rem", objectFit: "cover", maxHeight: 340 }}
              onError={e => (e.target.src = placeholderImg)}
            />
            <p style={{ whiteSpace: "pre-line" }}>{projects[selected].details}</p>
            {projects[selected].github && (
              <a
                href={projects[selected].github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#60a5fa",
                  fontWeight: 600,
                  fontSize: "1.08rem",
                  marginTop: "1rem",
                  textDecoration: "none"
                }}
              >
                <svg height="22" width="22" viewBox="0 0 16 16" fill="currentColor" style={{ verticalAlign: "middle" }}>
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 0.21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                View on GitHub
              </a>
            )}
            <button onClick={() => setSelected(null)} style={{ marginTop: "1.5rem" }}>Close</button>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Projects; 