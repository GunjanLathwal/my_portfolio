import React, { useState, useRef, useEffect } from 'react';

const Assistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Hi! I'm Gunjan's AI Assistant. Ask me anything about her work, skills, or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const portfolioData = {
    name: "Gunjan Lathwal",
    role: "Software Developer & Data Science Enthusiast",
    pronouns: "She/Her",
    location: "Punjab, India",
    summary: "A passionate software developer with hands-on experience in building applications and solving coding challenges. She loves learning new technologies and creating products that make an impact.",
    education: "B.Tech in Computer Science from Chitkara University (2022 – 2026), CGPA: Pending",
    email: "gunjan251492@gmail.com",
    linkedin: "linkedin.com/in/gunjan-lathwal",
    github: "github.com/gunjan-lathwal",
    experience: [
        { 
            title: "Software Developer Intern", 
            company: "Innova Solutions", 
            duration: "May 2025 – Present",
            desc: "Working on enterprise-level software solutions and modern development stacks."
        },
        { 
            title: "Web Developer", 
            company: "CEED, Chitkara University", 
            duration: "Sep 2023 – Feb 2025",
            desc: "Developed responsive web applications and focused on performance optimization."
        }
    ],
    skills: {
        cloud: ["AWS (S3, EC2, Lambda)", "Snowflake"],
        languages: ["C++", "Java", "JavaScript", "Python", "C#"],
        web: ["HTML5", "CSS3", "React.js", "Node.js", "Express.js", ".NET", "FastAPI"],
        ai_ml: ["GenAI", "LLMs", "RAG", "Prompt Engineering", "NumPy", "Pandas", "Scikit-learn", "Time Series Analysis"],
        observability: ["Langfuse", "LangSmith"],
        databases: ["MongoDB", "SQL", "Vector Databases"],
        core: ["DSA", "OOP", "System Integration", "Data Pipelines"]
    },
    projects: [
        { 
            name: "MediLens", 
            category: "Healthcare Transparency",
            desc: "A location-based hospital service comparison and appointment booking platform with transparent pricing and real-time availability.",
            tech: ["React", "Node.js", "MongoDB", "AWS"]
        },
        { 
            name: "Fake Smile Detection", 
            category: "Quantum ML Research",
            desc: "Implements Quantum K-Nearest Neighbors (QKNN) to classify genuine vs. fake smiles using facial feature extraction.",
            tech: ["Python", "Machine Learning", "OpenCV", "Quantum Computing"]
        }
    ],
    services: [
        "Software Development (Full-stack, APIs, Scalable Apps)",
        "Data Science Solutions (ML Models, LLM apps, Data Pipelines)"
    ]
  };

  const quickReplies = [
    "Tell me about her projects",
    "What are her skills?",
    "Show work experience",
    "How to contact her?"
  ];

  const getLocalResponse = (query) => {
    const q = query.toLowerCase();
    
    if (q.includes("skill") || q.includes("tech") || q.includes("languages") || q.includes("frameworks")) {
      return `${portfolioData.name} is proficient in languages like ${portfolioData.skills.languages.join(", ")}. She works extensively with ${portfolioData.skills.web.join(", ")} and is an expert in AI/ML fields like ${portfolioData.skills.ai_ml.slice(0, 4).join(", ")}.`;
    }
    if (q.includes("project") || q.includes("portfolio") || q.includes("build") || q.includes("medilens") || q.includes("smile")) {
      return `She has worked on standout projects like ${portfolioData.projects[0].name} (${portfolioData.projects[0].category}) and ${portfolioData.projects[1].name} (${portfolioData.projects[1].category}). Both focus on solving real-world challenges using advanced tech.`;
    }
    if (q.includes("experience") || q.includes("work") || q.includes("job") || q.includes("intern")) {
      return `Gunjan is currently a ${portfolioData.experience[0].title} at ${portfolioData.experience[0].company}. Previously, she was a ${portfolioData.experience[1].title} at ${portfolioData.experience[1].company}.`;
    }
    if (q.includes("education") || q.includes("study") || q.includes("college") || q.includes("university")) {
      return `She is pursuing her ${portfolioData.education}.`;
    }
    if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("hire") || q.includes("phone")) {
      return `You can reach her via email at ${portfolioData.email} or connect on LinkedIn: ${portfolioData.linkedin}. There's also a contact form at the bottom!`;
    }
    if (q.includes("about") || q.includes("who is") || q.includes("summary")) {
      return `${portfolioData.name} is a ${portfolioData.role}. ${portfolioData.summary}`;
    }
    if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("morning") || q.includes("evening")) {
      return `Hello! I'm here to help you learn about Gunjan Lathwal's professional journey. What would you like to know?`;
    }

    return null; // Trigger LLM
  };

  const handleSend = async (customInput = null) => {
    const messageText = customInput || input;
    if (!messageText.trim()) return;

    const userMessage = { role: 'user', content: messageText };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const localMatch = getLocalResponse(messageText);
    if (localMatch) {
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'ai', content: localMatch }]);
            setIsTyping(false);
        }, 600);
        return;
    }

    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${import.meta.env.VITE_HF_TOKEN}`
          },
          method: "POST",
          body: JSON.stringify({
            inputs: `<s>[INST] You are the official AI assistant for Gunjan Lathwal (She/Her). Answer questions professionally using this data: ${JSON.stringify(portfolioData)}. If asked something unrelated, redirect to the contact form. \n\n User Question: ${messageText} [/INST]`,
            parameters: { max_new_tokens: 200, temperature: 0.6, return_full_text: false }
          }),
        }
      );

      const data = await response.json();
      
      if (response.status === 503) {
        setMessages(prev => [...prev, { role: 'ai', content: "My brain is warming up (AI model loading). Please try again in 15 seconds!" }]);
      } else if (Array.isArray(data) && data[0]?.generated_text) {
        setMessages(prev => [...prev, { role: 'ai', content: data[0].generated_text.trim() }]);
      } else {
        setMessages(prev => [...prev, { role: 'ai', content: "I'm specifically trained on Gunjan's portfolio details. For other topics, please reach out to her via the contact section!" }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: "I'm having a connection hiccup. Please use the contact form at the bottom of the page!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <div className="assistant-toggle" onClick={() => setIsOpen(!isOpen)}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-wand-magic-sparkles'}`}></i>
      </div>

      <div className={`chat-container ${isOpen ? 'active' : ''}`}>
        <div className="chat-header">
          <div className="header-icon"><i className="fas fa-magic"></i></div>
          <h4>Gunjan's Assistant</h4>
          <button className="chat-close" onClick={() => setIsOpen(false)}><i className="fas fa-chevron-down"></i></button>
        </div>

        <div className="chat-messages" ref={scrollRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>{msg.content}</div>
          ))}
          {isTyping && <div className="typing-indicator">Analyzing portfolio...</div>}
        </div>

        {isOpen && !isTyping && messages.length < 3 && (
            <div className="chat-suggestions" style={{ padding: '0 20px 15px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {quickReplies.map((reply, i) => (
                    <button 
                        key={i} 
                        onClick={() => handleSend(reply)}
                        style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '15px',
                            padding: '6px 12px',
                            color: 'var(--accent)',
                            fontSize: '0.8rem',
                            cursor: 'pointer'
                        }}
                    >
                        {reply}
                    </button>
                ))}
            </div>
        )}

        <div className="chat-input-area">
          <input 
            type="text" 
            placeholder="Ask anything about Gunjan..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className="send-btn" onClick={() => handleSend()}><i className="fas fa-paper-plane"></i></button>
        </div>
      </div>
    </>
  );
};

export default Assistant;
