import {
  Code2, Server, Database, Terminal, Wrench, TestTube, Brain,
  Github, Linkedin, Mail, MapPin, Phone
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
  gradient: string;
}

export interface Project {
  title: string;
  techStack: string[];
  description: string;
  features?: string[];
  role?: string;
  roleDetails?: string[];
  github: string;
  demo?: string;
  featured?: boolean;
}



export interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
}

export const personalInfo = {
  name: 'Aditya Anant',
  tagline: 'Software Engineer | Java Full Stack Developer | AI & ML Enthusiast',
  intro: 'Final-year Computer Science Engineering student specializing in AI & ML. Trained in Java Full Stack Development and Software Testing. Passionate about building scalable software and automated testing solutions.',
  about: 'I am a final-year B.Tech Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at Noida International University. I have completed comprehensive training in Java Full Stack Development and Software Testing at QSpiders. I enjoy building backend architectures, automation frameworks, and applying machine learning to real-world tasks.',
  resumeUrl: '/resume.pdf',
};

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/Adiitya9', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aditya-anant-9a0302270/', icon: Linkedin },
  { name: 'Email', url: 'mailto:adityaanant42@gmail.com', icon: Mail },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Terminal,
    gradient: 'from-orange-500 to-amber-400',
    skills: [{ name: 'Java' }, { name: 'Python' }, { name: 'SQL' }],
  },
  {
    title: 'Core Java',
    icon: Code2,
    gradient: 'from-blue-600 to-sky-400',
    skills: [{ name: 'OOPs' }, { name: 'Collections' }, { name: 'Exception Handling' }, { name: 'Multithreading' }, { name: 'Java 8 Features' }],
  },
  {
    title: 'Frontend',
    icon: Code2,
    gradient: 'from-blue-500 to-cyan-400',
    skills: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'JavaScript' }, { name: 'React.js' }],
  },
  {
    title: 'Backend',
    icon: Server,
    gradient: 'from-violet-500 to-purple-400',
    skills: [{ name: 'Spring Boot' }, { name: 'JDBC' }, { name: 'Hibernate/JPA' }, { name: 'REST APIs' }],
  },
  {
    title: 'Database',
    icon: Database,
    gradient: 'from-emerald-500 to-teal-400',
    skills: [{ name: 'MySQL' }],
  },
  {
    title: 'Testing & Automation',
    icon: TestTube,
    gradient: 'from-pink-500 to-rose-400',
    skills: [{ name: 'Manual Testing' }, { name: 'Selenium WebDriver' }, { name: 'TestNG' }, { name: 'Functional Testing' }, { name: 'Regression Testing' }, { name: 'Smoke Testing' }],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    gradient: 'from-indigo-500 to-violet-400',
    skills: [{ name: 'Python' }, { name: 'Machine Learning' }, { name: 'Scikit-Learn' }, { name: 'Pandas' }, { name: 'NumPy' }, { name: 'TensorFlow' }],
  },
  {
    title: 'Tools & Methodologies',
    icon: Wrench,
    gradient: 'from-sky-500 to-blue-400',
    skills: [{ name: 'Git' }, { name: 'GitHub' }, { name: 'Maven' }, { name: 'SDLC' }, { name: 'STLC' }, { name: 'Agile' }, { name: 'Defect Life Cycle' }],
  },
];



export const projects: Project[] = [
  {
    title: 'AI Interview Preparation Platform',
    techStack: ['React', 'Spring Boot', 'REST APIs', 'MySQL', 'OpenAI API', 'Tailwind CSS'],
    description: 'Developed an AI-powered interview preparation platform that helps users practice technical and behavioral interviews. The platform generates role-specific interview questions, provides AI-driven feedback, tracks performance, and offers personalized improvement suggestions.',
    features: [
      'AI-generated interview questions for Java, Full Stack, and AI/ML roles',
      'Real-time answer evaluation and feedback',
      'Mock interview sessions',
      'Performance analytics dashboard',
      'User authentication and progress tracking',
      'Responsive design for desktop and mobile',
      'Integration with LLM APIs for personalized coaching',
    ],
    github: 'https://github.com/Adiitya9/AI-Interview-Prep',
    demo: 'https://adiitya9.github.io/AI-Interview-Prep/login',
    featured: true,
  },
  {
    title: 'Student Management System',
    techStack: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'REST APIs'],
    description: 'Developed a web-based Student Management System for managing student records. Implemented CRUD operations using Spring Boot and Hibernate, integrated MySQL database for efficient storage and retrieval, and developed RESTful APIs for communication between application layers.',
    github: 'https://github.com/Adiitya9/StudentManagementSystem',
    demo: 'https://github.com/Adiitya9/StudentManagementSystem',
    featured: true,
  },
  {
    title: 'Forest Fire Detection & Prevention',
    techStack: ['Python', 'Machine Learning', 'Scikit-Learn', 'Pandas', 'NumPy'],
    description: 'Developed a machine learning model to predict forest fire risks using environmental and weather-related data. Performed data preprocessing, feature engineering, and model evaluation. Compared Random Forest, Decision Tree, SVM, and Neural Network models to improve prediction accuracy and enhance early fire detection capabilities.',
    github: 'https://github.com/Adiitya9',
    demo: 'https://github.com/Adiitya9',
    featured: false,
  },
  {
    title: 'E-Commerce Website Testing Project',
    techStack: ['Selenium', 'Java', 'TestNG', 'Maven'],
    description: 'Created comprehensive test cases for login, registration, cart, and checkout modules. Automated critical user flows using Selenium WebDriver, executed regression and smoke test suites, and tracked defects using JIRA.',
    github: 'https://github.com/Adiitya9',
    demo: 'https://github.com/Adiitya9',
    featured: false,
  },
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Technology (B.Tech) – Computer Science Engineering (AI & ML)',
    institution: 'Noida International University, Noida',
    year: '2022 – 2026',
    description: 'Specializing in Artificial Intelligence and Machine Learning',
  },
];

export const certifications: Certification[] = [
  {
    title: 'AWS Academy Completion Certificate – Introduction to Machine Learning: Art of the Possible',
    issuer: 'AWS Academy',
    date: '2026',
  },
  {
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    date: '2026',
  },
  {
    title: 'Java Full Stack Development Training',
    issuer: 'QSpiders',
  },
  {
    title: 'Software Testing Training',
    issuer: 'QSpiders',
  },
  {
    title: 'JEE Mains Qualified',
    issuer: 'Qualified Joint Entrance Examination Mains',
  },
];

export const contactInfo: ContactInfo[] = [
  { label: 'Email', value: 'adityaanant42@gmail.com', href: 'mailto:adityaanant42@gmail.com', icon: Mail },
  { label: 'Phone', value: '+91 6394068419', href: 'tel:+916394068419', icon: Phone },
  { label: 'LinkedIn', value: 'linkedin.com/in/aditya-anant-9a0302270', href: 'https://www.linkedin.com/in/aditya-anant-9a0302270/', icon: Linkedin },
  { label: 'GitHub', value: 'github.com/Adiitya9', href: 'https://github.com/Adiitya9', icon: Github },
  { label: 'Location', value: 'Noida, Uttar Pradesh, India', icon: MapPin },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications & Achievements', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];
