import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPython, SiFastapi,
  SiDocker, SiAmazon, SiGithub, SiTailwindcss, SiTensorflow,
  SiScikitlearn, SiPostgresql,
  SiJavascript, SiTypescript, SiNextdotjs, SiRedux, SiHtml5, SiCss3,
  SiGit, SiLinux, SiNginx, SiFirebase, SiVercel, SiFlask,
  SiKubernetes, SiJupyter, SiNumpy, SiPandas, SiOpencv
} from 'react-icons/si';
import { FaLink, FaDatabase, FaBrain, FaRobot } from 'react-icons/fa6';

export const personalInfo = {
  name: "Chamoda Dasanayake",
  title: "AI/ML Engineer | Full-Stack Developer | MERN Stack Developer",
  tagline: "Building AI-powered systems and scalable full-stack applications that transform complex ideas into intelligent real-world solutions.",
  email: "ridmichamoda@gmail.com",
  github: "https://github.com/Chamoda-dasanayake",
  linkedin: "https://www.linkedin.com/in/chamoda-dasanayake-7258aa291/",
  resumeUrl: "#",
  location: "Kegalle, Sri Lanka",
};

export const aboutData = {
  description: [
    "I'm a passionate AI/ML Engineer and Full-Stack Developer with deep expertise in building intelligent systems, scalable web applications, and production-grade machine learning pipelines.",
    "My journey spans from crafting responsive React interfaces to architecting RAG systems with LangChain and deploying ML models with MLOps best practices. I thrive at the intersection of software engineering and artificial intelligence.",
    "Currently pursuing my degree in Electronic and Computer Science, I'm focused on building real-world AI applications that solve meaningful problems from conversational AI agents to recommendation systems and NLP pipelines."
  ],
  education: "BSc (Hons) Electronic and Computer Science",
  goal: "To build AI-powered products that make a real impact, while contributing to open-source and advancing the frontiers of machine learning.",
  stats: [
    { label: "End-to-End Projects Built" },
    { label: "Full-Stack Applications Developed" },
    { label: "AI & Machine Learning Systems Implemented" },
    { label: "Real-World Problem-Solving Experience" },
  ],
};

export const skillCategories = [
  {
    title: "AI & Machine Learning",
    description: "Architecting intelligent agents, RAG systems, and end-to-end ML pipelines.",
    skills: ["LangChain", "TensorFlow", "Scikit-learn", "Hugging Face", "LLMs", "RAG", "CrewAI", "AI Agents", "NLP", "T5 Model", "Pandas", "NumPy"]
  },
  {
    title: "Backend & Microservices",
    description: "Building scalable APIs, distributed systems, and robust server architectures.",
    skills: ["Node.js", "Express.js", "Python", "FastAPI", "Flask", "Java", "Spring Boot", "Microservices"]
  },
  {
    title: "Frontend Engineering",
    description: "Crafting responsive, high-performance, and interactive user interfaces.",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    title: "Data & MLOps",
    description: "Managing vector stores, relational databases, and model deployment lifecycles.",
    skills: ["MongoDB", "PostgreSQL", "ChromaDB", "Docker", "AWS", "Git/GitHub", "MLflow", "DVC", "Nginx"]
  }
];

export const projectsData = [
  {
    title: "MERN Stack AI Chatbot",
    description: "Full-stack conversational AI chatbot built with the MERN stack featuring real-time streaming responses, user authentication, and a modern UI. Integrates with LLM APIs for intelligent, context-aware conversations.",
    image: null,
    tags: ["React", "Node.js", "Express", "MongoDB", "LLM APIs", "AWS", "Nginx", "PM2"],
    category: ["AI", "Full Stack"],
    github: "https://github.com/Chamoda-dasanayake/Mernstack-Chatbot",
    live: "#",
    featured: true,
  },
  {
    title: "AstraRAG - Agentic RAG Chatbot",
    description: "An advanced Agentic RAG chatbot that combines retrieval-augmented generation with autonomous agent capabilities. Features intelligent document retrieval, contextual Q&A, and multi-step reasoning over knowledge bases.",
    image: null,
    tags: ["Python", "FastAPI", "Streamlit", "ChromaDB", "CrewAI", "Hugging Face Transformers", "LLM APIs", "LlamaIndex"],
    category: "AI",
    github: "https://github.com/Chamoda-dasanayake/AstraRAG-Agentic-RAG-Chatbot",
    live: "#",
    featured: true,
  },
  {
    title: "Text Summarizer - E2E NLP + MLOps",
    description: "End-to-end NLP pipeline for text summarization using T5 Transformer. Features a 4-stage DVC pipeline, MLflow experiment tracking, CI/CD integration, and FastAPI deployment with Jupyter notebook-driven development.",
    image: null,
    tags: ["Python", "FastAPI", "MLflow", "DVC", "Hugging Face Transformers", "Jupyter"],
    category: "Machine Learning",
    github: "https://github.com/Chamoda-dasanayake/Text-Summarizer-End-to-End_NLP_with-MLOps_Pipeline",
    live: "#",
    featured: true,
  },
  {
    title: "E-Commerce Recommendation System",
    description: "Hybrid recommendation engine for e-commerce platforms combining collaborative filtering and content-based approaches. Uses machine learning algorithms to provide personalized product recommendations at scale.",
    image: null,
    tags: ["Python", "React.js", "Flask", "Scikit-learn", "Pandas", "NumPy", "ML"],
    category: "Machine Learning",
    github: "https://github.com/Chamoda-dasanayake/Ecommerce-product-recommendation-system",
    live: "#",
    featured: true,
  },

  {
    title: "Multi-Agent System - CrewAI",
    description: "Sophisticated multi-agent architecture using CrewAI for complex task orchestration. Features specialized AI agents for research, analysis, and content generation working collaboratively on multi-step workflows.",
    image: null,
    tags: ["Python", "CrewAI", "LangChain", "LLM", "Agents"],
    category: "AI",
    github: "https://github.com/Chamoda-dasanayake/MultiAgentSystemUsingCrewai",
    live: "#",
    featured: false,
  },
  {
    title: "QA RAG PDF Chatbot",
    description: "An intelligent PDF question-answering chatbot powered by RAG architecture. Upload any PDF document and ask natural language questions — the system retrieves relevant passages and generates accurate answers.",
    image: null,
    tags: ["Python", "RAG", "LLM", "PDF", "NLP"],
    category: "AI",
    github: "https://github.com/Chamoda-dasanayake/QA-RAG-PDF-Chatbot",
    live: "#",
    featured: false,
  },
  {
    title: "Diabetes Prediction Model",
    description: "Machine learning model for predicting diabetes risk using patient health metrics. Implements data preprocessing, feature engineering, model training with multiple algorithms, and evaluation pipelines.",
    image: null,
    tags: ["Python", "Scikit-learn", "Pandas", "ML", "Health"],
    category: "Machine Learning",
    github: "https://github.com/Chamoda-dasanayake/Diabetes-Prediction",
    live: "#",
    featured: false,
  },
  {
    title: "Sri Lankan Wedding Platform",
    description: "A comprehensive full-stack platform designed to streamline wedding planning in Sri Lanka. It serves as a centralized hub connecting vendors, planners, and clients with features like booking, vendor management, and event coordination.",
    image: null,
    tags: ["React", "Node.js", "Express", "MongoDB", "Full Stack"],
    category: "Full Stack",
    github: "https://github.com/Chamoda-dasanayake/SrI-Lankan-wedding-platform",
    live: "#",
    featured: true,
  },
  {
    title: "Employee Management System",
    description: "An enterprise-level Employee Management System built with C# and .NET. Features robust employee record management, role-based access control, secure authentication, and optimized database queries.",
    image: null,
    tags: ["C#", ".NET", "SQL Server", "Entity Framework", "Backend"],
    category: "Full Stack",
    github: "https://github.com/Chamoda-dasanayake/EmployeeManagementSystem",
    live: "#",
    featured: true,
  },
  {
    title: "Library Management System",
    description: "A comprehensive library management solution developed using C# and .NET architecture. Includes functionalities for book tracking, member registration, borrowing/returning workflows, and inventory management.",
    image: null,
    tags: ["C#", ".NET", "Software Development", "Database"],
    category: "Full Stack",
    github: "https://github.com/Chamoda-dasanayake/LibraryManagement",
    live: "#",
    featured: false,
  }
];

export const experienceData = [
  {
    year: "2024 - Present",
    title: "AI/ML Engineering Intern",
    company: "Tech Company",
    description: "Developing and deploying production ML models and NLP pipelines. Working on RAG systems, LLM fine-tuning, and MLOps infrastructure using Python, LangChain, and cloud services.",
    type: "work",
  },
  {
    year: "2023 - 2024",
    title: "Full Stack Developer Intern",
    company: "Startup Inc.",
    description: "Built and maintained scalable web applications using the MERN stack. Implemented real-time features, RESTful APIs, and responsive UI components serving thousands of users.",
    type: "work",
  },
  {
    year: "2022 - Present",
    title: "B.Tech Computer Science",
    company: "University Name",
    description: "Pursuing a degree in Computer Science with a focus on Artificial Intelligence and Machine Learning. Active in coding competitions, open-source contributions, and research projects.",
    type: "education",
  },
  {
    year: "2022",
    title: "Open Source Contributor",
    company: "Various Projects",
    description: "Contributed to open-source projects in the AI/ML and web development ecosystem. Fixed bugs, added features, and improved documentation across multiple repositories.",
    type: "achievement",
  },
];

export const githubStats = {
  contributions: 847,
  streak: 42,
  repos: 30,
  stars: 120,
  languages: [
    { name: "Python", percentage: 35, color: "#3572a5" },
    { name: "JavaScript", percentage: 28, color: "#f1e05a" },
    { name: "TypeScript", percentage: 15, color: "#3178c6" },
    { name: "Java", percentage: 10, color: "#b07219" },
    { name: "HTML/CSS", percentage: 8, color: "#e34c26" },
    { name: "Other", percentage: 4, color: "#6e7681" },
  ],
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
