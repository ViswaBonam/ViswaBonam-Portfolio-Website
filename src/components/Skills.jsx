import React from "react";

const skills = [
  { name: "Python", icon: "/skills/python.png" },
  { name: "React", icon: "/skills/react.png" },
  { name: "Javascript", icon: "/skills/javascript.png" },
  { name: "SQL", icon: "/skills/sql.png" },
  { name: "Pandas", icon: "/skills/pandas.png" },
  { name: "NumPy", icon: "/skills/numpy.png" },
  { name: "Scikit-learn", icon: "/skills/scikit-learn.png" },
  { name: "Tensorflow", icon: "/skills/tensorflow.png" },
  { name: "LangChain", icon: "/skills/langchain.png" },
  { name: "PowerBI", icon: "/skills/powerbi.png" },
  { name: "Tableau", icon: "/skills/tableau.png" },
  { name: "Matplotlib", icon: "/skills/matplotlib.png" },
  { name: "Seaborn", icon: "/skills/seaborn.png" },
  { name: "AWS", icon: "/skills/aws.png" },
  { name: "Azure", icon: "/skills/azure.png" },
  { name: "Kafka", icon: "/skills/kafka.png" },
  { name: "Spark", icon: "/skills/spark.png" },
  { name: "Docker", icon: "/skills/docker.png" },
  { name: "Git", icon: "/skills/git.png" },
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <div className="skills-grid">
      {skills.map(skill => (
        <div className="skill-item" key={skill.name}>
          <img src={skill.icon} alt={skill.name} className="skill-icon" />
          <div className="skill-label">{skill.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills; 