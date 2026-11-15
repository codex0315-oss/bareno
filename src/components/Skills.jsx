import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionHeading } from './Reveal.jsx';
import Reveal from './Reveal.jsx';
import { skills } from '../data/portfolio.js';

const allSkills = [...new Set(skills.flatMap((s) => s.items))];

export default function Skills() {
  const [activeKey, setActiveKey] = useState(skills[0].key);
  const active = skills.find((s) => s.key === activeKey);

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="One developer. Every layer."
          subtitle="The tools I use to take a product from the first screen to the server to the app store."
        />

        <Reveal className="skills">
          <div className="skills__tabs" role="tablist" aria-label="Skill categories">
            {skills.map((s, i) => (
              <button
                key={s.key}
                role="tab"
                aria-selected={s.key === activeKey}
                className={`skills__tab ${s.key === activeKey ? 'is-active' : ''}`}
                onClick={() => setActiveKey(s.key)}
              >
                {s.key === activeKey && <motion.span layoutId="skill-tab" className="skills__tab-bg" />}
                <span className="mono skills__tab-num">0{i + 1}</span>
                <span className="skills__tab-name">{s.category}</span>
                <span className="skills__tab-count">{s.items.length}</span>
              </button>
            ))}
          </div>

          <div className="card skills__panel" role="tabpanel">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="skills__panel-title">{active.category}</h3>
                <p className="skills__panel-blurb">{active.blurb}</p>
                <ul className="chips">
                  {active.items.map((name, i) => (
                    <motion.li
                      key={name}
                      className="chip"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <span className="chip__dot" />
                      {name}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...allSkills, ...allSkills].map((s, i) => (
            <span key={i} className="marquee__item">
              {s} <span className="accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
