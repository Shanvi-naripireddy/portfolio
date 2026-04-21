import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import photo from '../photo.jpg';

/* ── Reveal on scroll ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ── Data ── */
const stats = [
  { value: '8.72', label: 'CGPA out of 10' },
  { value: '150+', label: 'Problems solved' },
  { value: '10+', label: 'Contests entered' },
  { value: '₹1L+', label: 'Merit scholarships' },
];

const details = [
  { label: 'Full Name',      value: 'Shanvi Rishi Naripireddy' },
  { label: 'Phone',          value: '+91 91215 23572' },
  { label: 'Personal Email', value: 'shanvirishi4@gmail.com' },
  { label: 'University',     value: 'Mahindra University, Hyderabad' },
  { label: 'Degree',         value: 'B.Tech AI & ML (2023–2027)' },
  { label: 'Location',       value: 'Hyderabad, Telangana' },
];

const skills = [
  { cat: 'Programming',  tags: ['Python', 'Java', 'C'] },
  { cat: 'Web',          tags: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Node.js'] },
  { cat: 'Databases',    tags: ['PostgreSQL', 'REST APIs'] },
  { cat: 'Tools',        tags: ['Git', 'Figma', 'Canva', 'Google Colab'] },
  { cat: 'Core Areas',   tags: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'NLP'] },
];

const timeline = [
  {
    year: '2021',
    title: 'St. Joseph\'s Convent School',
    sub: '10th Grade · Kakinada',
    badge: '89%',
  },
  {
    year: '2021 – 2023',
    title: 'Sri Chaitanya College',
    sub: 'Intermediate · Hyderabad',
    badge: '98%',
  },
  {
    year: '2023 – 2027',
    title: 'Mahindra University',
    sub: 'B.Tech Artificial Intelligence & Machine Learning · Hyderabad',
    badge: 'CGPA 8.72',
  },
  {
    year: 'Jun – Aug 2025',
    title: 'Tech Mahindra — Intern',
    sub: 'CIO-SSG · Frontend UI & API Integration · Hyderabad',
    badge: 'Industry',
  },
];

const interests = [
  { icon: '🤖', title: 'AI / ML Research',   desc: 'Exploring intelligent systems, NLP, and generative models.' },
  { icon: '🎮', title: 'Game Development',   desc: 'Building real-time interactive experiences with Python.' },
  { icon: '💻', title: 'Competitive Coding', desc: '150+ problems solved across platforms and 10+ contests.' },
  { icon: '🏸', title: 'Badminton',          desc: 'Staying sharp and competitive on and off the court.' },
];

/* ── Component ── */
export default function Home() {
  useReveal();

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__inner container">
          <p className="hero__eyebrow">AI & ML Developer</p>
          <h1 className="hero__name">
            <strong>Shanvi Rishi</strong><br />Naripireddy
          </h1>
          <p className="hero__tagline">
            Building intelligent systems and thoughtful products — from NLP tools to full‑stack applications.
          </p>
          <div className="hero__actions">
            <Link to="/projects" className="btn-primary">View Projects</Link>
            <a href="https://linkedin.com/in/shanvi-rishi" target="_blank" rel="noreferrer" className="btn-secondary">LinkedIn</a>
          </div>

          <div className="hero__avatar-wrap">
            <div className="hero__avatar">
              <img 
    src={photo} 
    alt="Shanvi"
  />
            </div>
            <p style={{ marginTop: 14, fontSize: 13, color: 'var(--text-tertiary)', fontWeight: 400 }}>
              Mahindra University · Hyderabad · 2023 – 2027
            </p>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section section--white section--bordered">
        <div className="container">
          <div className="about__grid reveal">
            <div className="about__text">
              <p className="section__label">About Me</p>
              <h2 className="section__title">
                Curious by nature.<br /><strong>Builder by habit.</strong>
              </h2>
              <p className="section__body">
                I'm a third-year B.Tech student in Artificial Intelligence & Machine Learning at Mahindra University, maintaining a CGPA of 8.72. I'm drawn to problems that sit at the intersection of language, intelligence, and human experience.
              </p>
              <p className="section__body" style={{ marginTop: 16 }}>
                I've shipped real products — at Tech Mahindra as a frontend intern, and through personal projects ranging from AI research paper simplifiers to real-time multiplayer games. I believe in learning by doing, and I'm always working on something new.
              </p>
            </div>
            <div className="about__stats">
              {stats.map(s => (
                <div className="stat-box" key={s.label}>
                  <div className="stat-box__value">{s.value}</div>
                  <div className="stat-box__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PERSONAL DETAILS ── */}
      <section className="section section--gray section--bordered">
        <div className="container">
          <div className="reveal">
            <p className="section__label">Personal Details</p>
            <h2 className="section__title" style={{ marginBottom: 48 }}>
              Get in <strong>touch</strong>
            </h2>
          </div>
          <div className="details__grid reveal">
            {details.map(d => (
              <div className="detail-item" key={d.label}>
                <div className="detail-item__label">{d.label}</div>
                <div className="detail-item__value">{d.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section section--white section--bordered">
        <div className="container">
          <div className="reveal">
            <p className="section__label">Technical Skills</p>
            <h2 className="section__title" style={{ marginBottom: 48 }}>
              What I <strong>work with</strong>
            </h2>
          </div>
          <div className="skills__categories reveal">
            {skills.map(row => (
              <div className="skill-row" key={row.cat}>
                <div className="skill-row__cat">{row.cat}</div>
                <div className="skill-row__tags">
                  {row.tags.map(t => <span className="skill-tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION & EXPERIENCE ── */}
      <section className="section section--gray section--bordered">
        <div className="container">
          <div className="reveal">
            <p className="section__label">Education & Experience</p>
            <h2 className="section__title" style={{ marginBottom: 48 }}>
              My <strong>journey</strong>
            </h2>
          </div>
          <div className="timeline reveal">
            {timeline.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-item__year">{item.year}</div>
                <div className="timeline-item__body">
                  <div className="timeline-item__title">{item.title}</div>
                  <div className="timeline-item__sub">{item.sub}</div>
                  <span className="timeline-item__badge">{item.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH INTERESTS ── */}
      <section className="section section--white section--bordered">
        <div className="container">
          <div className="reveal">
            <p className="section__label">Research Interests & Hobbies</p>
            <h2 className="section__title" style={{ marginBottom: 48 }}>
              What <strong>drives me</strong>
            </h2>
          </div>
          <div className="interests__grid reveal">
            {interests.map(item => (
              <div className="interest-card" key={item.title}>
                <div className="interest-card__icon">{item.icon}</div>
                <div className="interest-card__title">{item.title}</div>
                <div className="interest-card__desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--gray section--bordered">
        <div className="container">
          <div className="cta reveal">
            <h2 className="cta__title">
              Open to internships<br /><strong>and collaborations.</strong>
            </h2>
            <p className="cta__sub">
              Let's build something meaningful together.
            </p>
            <a href="mailto:shanvirishi4@gmail.com" className="btn-primary">
              Say hello
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
