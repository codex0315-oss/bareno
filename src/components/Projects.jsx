import { motion } from 'framer-motion';
import Reveal, { SectionHeading } from './Reveal.jsx';
import { projects } from '../data/portfolio.js';
import { ArrowIcon } from './Hero.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Selected work."
          subtitle="Real problems, real solutions. Each project is a short case study."
        />

        {projects.length === 0 ? <EmptyState /> : (
          <div className="projects">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index }) {
  return (
    <Reveal className={`card project ${index % 2 ? 'project--flip' : ''}`}>
      <div className="project__media">
        {p.image ? <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" /> : <div className="project__placeholder mono">{p.title}</div>}
      </div>
      <div className="project__body">
        <p className="eyebrow mono">
          <span className="accent">0{index + 1}</span> · {p.category}
        </p>
        <h3>{p.title}</h3>
        <p className="project__summary">{p.summary}</p>
        <dl className="project__case">
          {p.problem && (<><dt>Problem</dt><dd>{p.problem}</dd></>)}
          {p.solution && (<><dt>Solution</dt><dd>{p.solution}</dd></>)}
          {p.result && (<><dt>Result</dt><dd>{p.result}</dd></>)}
        </dl>
        <ul className="chips chips--sm">
          {p.tech?.map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
        </ul>
        <div className="project__links">
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">
              Live site <ArrowIcon />
            </a>
          )}
          {p.repoUrl && (
            <a href={p.repoUrl} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
              Source code
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

function EmptyState() {
  return (
    <div className="projects-empty">
      {[0, 1, 2].map((i) => (
        <Reveal key={i} delay={i * 0.08} className="card ghost-card">
          <div className="ghost-card__media">
            <motion.span
              className="ghost-card__shimmer"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
            />
            <span className="mono ghost-card__tag">
              {['web', 'api', 'mobile'][i]}.build()
            </span>
          </div>
          <div className="ghost-card__lines">
            <span style={{ width: '60%' }} />
            <span style={{ width: '90%' }} />
            <span style={{ width: '40%' }} />
          </div>
        </Reveal>
      ))}
      <Reveal className="projects-empty__note">
        <p className="mono">
          <span className="accent">$</span> git push origin case-studies <span className="caret" />
        </p>
        <p>New case studies are on the way. Want to see something in the meantime?</p>
        <a href="#contact" className="btn btn--ghost btn--sm">
          Ask me for a walkthrough
        </a>
      </Reveal>
    </div>
  );
}
