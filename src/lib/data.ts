export const projects = [
  {
    id: "billsutra",
    title: "BillSutra",
    tagline: "GST Billing SaaS Platform",
    shortDesc: "A complete multi-tenant SaaS application for local businesses to manage inventory, invoices, and analytics.",
    image: "/projects/billsutra/landing.png",
    screenshots: [
      "/projects/billsutra/landing.png",
      "/projects/billsutra/dashboard.png",
      "/projects/billsutra/billing.png",
      "/projects/billsutra/subscription.png"
    ],
    tags: ["React", "Node", "PostgreSQL", "Prisma"],
    overview: "BillSutra is a robust, cloud-based GST billing and inventory management SaaS built for local businesses. It automates tax calculation, invoice generation, and sales reporting while providing a secure, multi-tenant architecture.",
    problem: "Small and medium businesses often rely on outdated, offline, or overly complex ERP systems to manage their day-to-day operations. Generating compliant GST invoices and tracking inventory across multiple users is tedious and error-prone.",
    solution: "A modern, web-based SaaS platform that simplifies billing workflows. BillSutra allows business owners to seamlessly manage customers, track stock levels in real-time, generate professional PDF invoices, and analyze sales through intuitive dashboards.",
    features: [
      "Multi-tenant Architecture with Secure JWT Authentication",
      "Dynamic GST Calculation (Inclusive & Exclusive Taxes)",
      "Real-time Inventory & Stock Tracking",
      "Professional PDF Invoice Generation using PDFKit",
      "Interactive Sales & Analytics Dashboard",
      "Customer Ledger and Payment Reconciliation"
    ],
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "JWT", "PDFKit"],
    github: "https://github.com/gunjan-lathwal/BillSutra",
    demo: "https://bill-sutra-a-billing-software.vercel.app/",
    architecture: `React -> Express -> JWT -> Prisma -> PostgreSQL -> PDFKit`,
    challenges: "Handling concurrent stock deductions during invoice generation to prevent overselling, and managing complex multi-tax GST configurations for different product categories.",
    lessons: "Deepened my understanding of transaction management in SQL databases, multi-tenant data isolation, and designing highly reusable React components for complex forms."
  },
  {
    id: "jobcompass",
    title: "JobCompass",
    tagline: "AI-Powered Resume Matcher",
    shortDesc: "An AI-powered Job Application Tracking System with automated resume parsing and skill gap analysis.",
    image: "/projects/jobcompass/landing.png",
    screenshots: [
      "/projects/jobcompass/landing.png"
    ],
    tags: ["Java", "Spring Boot", "React", "AI Engine"],
    overview: "JobCompass is an intelligent platform designed to help job seekers and recruiters align skills with opportunities. It utilizes AI to parse resumes, match them against job descriptions, and provide actionable feedback.",
    problem: "Job seekers struggle to optimize their resumes for specific job descriptions, often getting rejected by automated ATS systems. Recruiters spend too much time manually screening candidates.",
    solution: "An intelligent platform that uses AI to parse resumes, analyze skill gaps, and provide a compatibility score for specific roles, improving the chances of getting hired while saving recruiters time.",
    features: [
      "AI Resume Parsing and ATS Scoring",
      "Automated Skill Gap Analysis",
      "Job Tracker Board (Kanban style)",
      "AI-driven Interview Preparation Suggestions",
      "Recruiter Portal with Candidate Analytics",
      "Secure OAuth Authentication"
    ],
    tech: ["React", "Tailwind CSS", "Java 21", "Spring Boot 3", "PostgreSQL", "OpenAI API", "Docker"],
    github: "https://github.com/gunjan-lathwal/JobCompass",
    demo: "https://job-compass-navy.vercel.app/",
    architecture: `React -> Spring Boot -> AI Engine -> Resume Parser -> PostgreSQL`,
    challenges: "Integrating AI reliably for document parsing while handling unstructured data formats (PDF, DOCX) and managing the latency of AI API calls.",
    lessons: "Learned how to effectively orchestrate AI services within a traditional Spring Boot microservices architecture and implemented asynchronous processing for heavy tasks."
  },
  {
    id: "medilens",
    title: "MediLens",
    tagline: "Healthcare AI & Analytics",
    shortDesc: "A healthcare discovery platform utilizing AI for cost comparison and hospital analytics.",
    image: "/projects/medilens/landing.png",
    screenshots: [
      "/projects/medilens/landing.png"
    ],
    tags: ["React", "Python", "FastAPI", "PostgreSQL"],
    overview: "MediLens bridges the gap between patients and healthcare providers by offering a transparent platform to discover hospitals, compare treatment costs, and access AI-driven healthcare insights.",
    problem: "Patients lack transparency regarding treatment costs and hospital quality. Finding the right healthcare provider quickly and comparing options is often difficult.",
    solution: "A centralized platform that aggregates hospital data, provides transparent cost comparisons, and utilizes AI to help users find the most suitable healthcare facility based on their symptoms and budget.",
    features: [
      "Intelligent Hospital Discovery System",
      "Treatment Cost Comparison Engine",
      "AI Symptom Checker",
      "Healthcare Analytics Dashboard",
      "Optimized Search with Elasticsearch",
      "Robust REST APIs for Integration"
    ],
    tech: ["React", "Python", "FastAPI", "PostgreSQL", "Elasticsearch", "Docker"],
    github: "https://github.com/gunjan-lathwal/MediLens",
    demo: "https://medilens-omega.vercel.app/",
    architecture: `React -> FastAPI -> AI Engine -> PostgreSQL -> Elasticsearch`,
    challenges: "Aggregating and normalizing vast amounts of heterogeneous healthcare data from different sources while ensuring data privacy and security.",
    lessons: "Gained significant experience in data engineering, Elasticsearch query optimization, and building high-performance Python APIs."
  },
  {
    id: "research",
    title: "Quantum Smile Detection",
    tagline: "Published Research Paper",
    shortDesc: "Dynamic Quantum-Classical Switching for Real vs Fake Smile Detection (98.66% Accuracy).",
    image: "/placeholder.svg",
    screenshots: [],
    tags: ["Python", "PyTorch", "PennyLane", "Quantum"],
    overview: "This research introduces a novel Dynamic Quantum-Classical Switching mechanism to classify real versus fake smiles with high accuracy, leveraging the strengths of both classical deep learning and quantum computing.",
    problem: "Traditional computer vision models struggle to capture the subtle micro-expressions that differentiate genuine (Duchenne) smiles from fake ones, often requiring massive computational resources.",
    solution: "A hybrid model that dynamically switches between classical convolutional neural networks (CNNs) and parameterized quantum circuits (PQCs) based on feature complexity, optimizing both accuracy and computational efficiency.",
    features: [
      "Dynamic Quantum-Classical Switching Algorithm",
      "98.66% Classification Accuracy",
      "Optimized Parameterized Quantum Circuits",
      "Facial Landmark Extraction",
      "Reduced Computational Overhead",
      "Published in Peer-Reviewed Journal"
    ],
    tech: ["Python", "PyTorch", "PennyLane", "OpenCV", "Quantum Computing", "Deep Learning"],
    github: "https://github.com/gunjan-lathwal/Quantum-Smile-Detection",
    demo: "#", // Add paper link here
    architecture: `Input Image -> Face/Landmark Detection -> Classical CNN (Feature Extractor) -> Dynamic Switch -> Quantum Circuit / Classical Dense -> Classification`,
    challenges: "Simulating quantum circuits efficiently during training and mitigating the 'barren plateau' problem in quantum machine learning models.",
    lessons: "Pushed the boundaries of my knowledge in advanced mathematics, quantum mechanics, and deep learning architectures, learning to rigorously validate experimental results."
  },
  {
    id: "bias-analysis",
    title: "Bias Propagation in AI Chatbots",
    tagline: "Published Research Paper (IJSRET)",
    shortDesc: "Prompt-based fairness evaluation of AI Chatbots using sentiment analysis and neutrality scoring.",
    image: "/placeholder.svg",
    screenshots: [],
    tags: ["Python", "Pandas", "TextBlob", "AI Ethics"],
    overview: "This research, published in IJSRET (April 2026), explores how AI chatbots propagate biases from their training data, specifically concerning gender, occupations, demographics, and wealth. We structured a prompt-based fairness evaluation to quantify biases across multiple AI models.",
    problem: "Despite their advanced capabilities in handling natural language, AI chatbots often reflect inherent biases from their training data when answering demographic-based questions, raising significant ethical concerns in sectors like healthcare and hiring.",
    solution: "We developed a structured prompt dataset to query multiple AI chatbots and recorded their responses. By applying sentiment analysis and a custom neutrality scoring methodology, we successfully measured and quantified the fairness of each system.",
    features: [
      "Prompt-Based Fairness Evaluation Framework",
      "Sentiment Analysis & Neutrality Scoring",
      "Demographic Bias Quantification",
      "Multi-Chatbot Response Analysis",
      "Co-authored and Published in IJSRET",
      "Data Visualization and Statistical Analysis"
    ],
    tech: ["Python", "Pandas", "TextBlob", "Matplotlib", "NLP", "AI Ethics"],
    github: "#",
    demo: "#",
    architecture: `Dataset Creation -> Structured Prompting -> Multi-Chatbot Querying -> Sentiment Extraction (TextBlob) -> Neutrality Scoring -> Data Visualization (Matplotlib)`,
    challenges: "Quantifying subjective biases objectively required designing prompts that would effectively expose subtle demographic biases without being overtly leading.",
    lessons: "Through statistical analysis, we proved that while chatbots attempt to remain objective, subtle biases strongly persist depending on the query topic, emphasizing the need for continuous fairness evaluation in AI."
  }
];
