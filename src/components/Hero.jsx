import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile, skills } from '../data/portfolio.js';

const techCount = new Set(skills.flatMap((s) => s.items)).size;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % profile.roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <motion.div className="hero__copy" variants={container} initial="hidden" animate="show">
          {profile.available && (
            <motion.p variants={item} className="status-pill">
              <span className="status-dot" />
              {profile.availabilityText}
            </motion.p>
          )}

          <motion.p variants={item} className="hero__hello mono">
            Hi, I&apos;m
          </motion.p>
          <motion.h1 variants={item} className="hero__name">
            {profile.name.split(' ')[0]}{' '}
            <span className="text-gradient">{profile.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          <motion.div variants={item} className="hero__role">
            <span className="hero__title">{profile.title}</span>
            <span className="hero__divider" />
            <span className="hero__rotator">
              I build{' '}
              <span className="hero__rotator-window">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    className="accent"
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {profile.roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </motion.div>

          <motion.p variants={item} className="hero__tagline">
            <span className="mono accent">//</span> {profile.tagline}. From pixel-perfect frontends to
            production APIs and mobile apps.
          </motion.p>

          <motion.div variants={item} className="hero__ctas">
            <a href="#projects" className="btn btn--primary">
              View my work
              <ArrowIcon />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Let&apos;s talk
            </a>
          </motion.div>

          <motion.ul variants={item} className="hero__stats">
            <li>
              <strong>{techCount}+</strong>
              <span>Technologies</span>
            </li>
            <li>
              <strong>3</strong>
              <span>Platforms · Web, Server, Mobile</span>
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__orb" />
          <div className="hero__ring" />
          <div className="hero__ring hero__ring--inner" />
          <picture>
            <source srcSet="/ericson.webp" type="image/webp" />
            <img src="/ericson.png" alt={`Portrait of ${profile.name}`} className="hero__photo" fetchpriority="high" />
          </picture>

          <FloatBadge className="fb--1" delay={0}>
            <span className="fb__dot" style={{ background: '#61dafb' }} /> React
          </FloatBadge>
          <FloatBadge className="fb--2" delay={0.8}>
            <span className="fb__dot" style={{ background: '#e0234e' }} /> NestJS
          </FloatBadge>
          <FloatBadge className="fb--3" delay={1.6}>
            <span className="fb__dot" style={{ background: '#54c5f8' }} /> Flutter
          </FloatBadge>
          <FloatBadge className="fb--code" delay={0.4}>
            <span className="mono">
              <span className="accent">&lt;</span>dev<span className="accent"> /&gt;</span>
            </span>
          </FloatBadge>
        </motion.div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About">
        <span />
      </a>
    </section>
  );
}

function FloatBadge({ children, className, delay }) {
  return (
    <motion.div
      className={`float-badge ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { delay: 0.8 + delay * 0.3, duration: 0.5 },
        scale: { delay: 0.8 + delay * 0.3, duration: 0.5 },
        y: { delay, duration: 4, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      {children}
    </motion.div>
  );
}

export const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
