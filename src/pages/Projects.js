import React, { useEffect } from 'react';
import './Projects.css';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const projects = [
  {
    icon: '🧠',
    title: 'AI Research Paper Simplifier',
    year: '2026',
    featured: true,
    desc: 'An AI-powered system that transforms dense academic research papers into clear, readable summaries for non-expert audiences. Built using natural language processing to extract key insights and rewrite technical content in plain language.',
    points: [
      'NLP pipeline to extract and rank key concepts',
      'Converts technical jargon into accessible language',
      'Improves readability for students and general readers',
    ],
    tags: ['Python', 'NLP', 'AI', 'Text Processing'],
    github: 'https://github.com',
  },
  {
    icon: '🍽️',
    title: 'Restaurant Reservation System',
    year: 'Feb – Apr 2026',
    desc: 'A full-stack web application for restaurant discovery and table booking — with real-time availability, menu browsing, and validated reservation logic to prevent overbooking.',
    points: [
      'React frontend with Node.js backend',
      'PostgreSQL database schema design',
      'Overbooking prevention & conflict resolution',
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    github: 'https://github.com',
  },
  {
    icon: '🎮',
    title: '2D Multiplayer Game',
    year: 'Feb 2025',
    desc: 'A real-time two-player game built with Python and Pygame, using socket programming to synchronize game state across clients over a local network.',
    points: [
      'Socket-based real-time networking',
      'Sprite rendering and animation',
      'Event-driven game mechanics',
    ],
    tags: ['Python', 'Pygame', 'Sockets', 'Networking'],
    github: 'https://github.com',
  },
  {
    icon: '⚡',
    title: 'GenAI Web Components',
    year: 'Jun – Aug 2025',
    desc: 'Built during my internship at Tech Mahindra — a suite of responsive UI components for an agent-based Generative AI platform, with full backend API integration.',
    points: [
      'Responsive components for a GenAI platform',
      'Backend API linking and integration',
      'Real-world software development workflow',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'API Integration'],
    github: 'https://github.com',
  },
  {
    icon: '💬',
    title: 'Chat-Bot',
    year: 'Sep 2024',
    desc: 'A Python chatbot implementing rule-based NLP, intent-response mapping, and an interactive CLI interface — a foundational project in conversational AI design.',
    points: [
      'Pattern-matching intent recognition',
      'Rule-based NLP architecture',
      'Clean CLI interaction design',
    ],
    tags: ['Python', 'NLP', 'CLI', 'Rule-based AI'],
    github: 'https://github.com',
  },
];

function ProjectCard({ project, delay }) {
  return (
    <div
      className={`project-card reveal ${project.featured ? 'project-card--featured' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="project-card__header">
        <div className="project-card__icon">{project.icon}</div>
        <span className="project-card__year">{project.year}</span>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.desc}</p>

      <ul className="project-card__points">
        {project.points.map(pt => (
          <li className="project-card__point" key={pt}>{pt}</li>
        ))}
      </ul>

      <div className="project-card__tags">
        {project.tags.map(t => <span className="project-tag" key={t}>{t}</span>)}
      </div>

      <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link">
        View on GitHub
      </a>
    </div>
  );
}

export default function Projects() {
  useReveal();

  return (
    <>
      {/* Hero */}
      <section className="projects-hero">
        <div className="projects-hero__inner">
          <p className="projects-hero__label">Portfolio</p>
          <h1 className="projects-hero__title">
            Things I've<br /><strong>built.</strong>
          </h1>
          <p className="projects-hero__sub">
            From AI tools to full-stack apps and games — every project taught me something new.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="projects-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
