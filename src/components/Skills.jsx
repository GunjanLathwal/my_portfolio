import React from 'react';

const Skills = () => {
  const skillsData = [
    { 
      title: "Cloud & Data", 
      icon: "fas fa-cloud",
      color: "teal",
      skills: ["AWS (S3, EC2, Lambda)", "Snowflake"] 
    },
    { 
      title: "Languages", 
      icon: "fas fa-code",
      color: "purple",
      skills: ["C++", "Java", "JavaScript", "Python", "C#"] 
    },
    { 
      title: "Web & Frameworks", 
      icon: "fas fa-globe",
      color: "teal",
      skills: ["HTML5", "CSS3", "React.js", "Node.js", "Express.js", ".NET", "FastAPI"] 
    },
    { 
      title: "Data Science & ML", 
      icon: "fas fa-brain",
      color: "purple",
      skills: ["NumPy", "Pandas", "Scikit-learn", "Time Series Analysis"] 
    },
    { 
      title: "GenAI / LLMs", 
      icon: "fas fa-sparkles",
      color: "teal",
      skills: ["LLMs", "RAG", "RAGAS", "Prompt Engineering"] 
    },
    { 
      title: "AI Observability", 
      icon: "fas fa-eye",
      color: "purple",
      skills: ["Langfuse", "LangSmith"] 
    },
    { 
      title: "Databases", 
      icon: "fas fa-database",
      color: "teal",
      skills: ["MongoDB", "SQL", "Vector Databases"] 
    },
    { 
      title: "Core Concepts", 
      icon: "fas fa-layer-group",
      color: "purple",
      skills: ["DSA", "OOP", "System Integration", "Data Pipelines"] 
    }
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((item, index) => (
          <div className="skill-card" key={index}>
            <div className={`skill-icon-box ${item.color}`}>
              <i className={item.icon}></i>
            </div>
            <h3>{item.title}</h3>
            <div className="skill-tags">
              {item.skills.map((skill, sIndex) => (
                <span className="skill-tag" key={sIndex}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
