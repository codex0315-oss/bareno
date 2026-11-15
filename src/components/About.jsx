import Reveal, { SectionHeading } from './Reveal.jsx';
import { profile, skills } from '../data/portfolio.js';

const focus = [
  { icon: '◧', title: 'Frontend', text: 'Interfaces that feel fast, look sharp and work on every screen.' },
  { icon: '⧉', title: 'Backend', text: 'Clean, well-structured APIs and services that scale with the business.' },
  { icon: '▣', title: 'Mobile', text: 'Cross-platform and native iOS apps people enjoy using daily.' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading index="01" eyebrow="About" title="Code with a purpose." />

        <div className="bento">
          <Reveal className="card bento__bio">
            <p className="card__label mono">whoami</p>
            <p className="bento__bio-text">{profile.bio}</p>
            <p className="bento__bio-sign">
              — {profile.name}, <span className="accent">{profile.title}</span>
            </p>
          </Reveal>

          <Reveal className="card bento__status" delay={0.05}>
            <p className="card__label mono">status</p>
            <div className="bento__status-row">
              <span className="status-dot status-dot--lg" />
              <div>
                <strong>{profile.available ? 'Available' : 'Busy'}</strong>
                <span>{profile.availabilityText}</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="card bento__code" delay={0.1}>
            <pre className="mono" aria-label="Developer profile as code">
              <code>
                <span className="tk-k">const</span> <span className="tk-v">ericson</span> = {'{\n'}
                {'  '}role: <span className="tk-s">&apos;{profile.title}&apos;</span>,{'\n'}
                {'  '}stack: [<span className="tk-s">&apos;web&apos;</span>, <span className="tk-s">&apos;server&apos;</span>, <span className="tk-s">&apos;mobile&apos;</span>],{'\n'}
                {'  '}mission: <span className="tk-s">&apos;{profile.tagline}&apos;</span>,{'\n'}
                {'};'}
              </code>
            </pre>
          </Reveal>

          {focus.map((f, i) => (
            <Reveal key={f.title} className="card bento__focus" delay={0.1 + i * 0.05}>
              <span className="bento__icon" aria-hidden="true">
                {f.icon}
              </span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
              <p className="bento__count mono">
                {skills.find((s) => s.category === f.title)?.items.length ?? 0} tools
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
