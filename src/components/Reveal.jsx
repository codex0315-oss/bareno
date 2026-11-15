import { motion } from 'framer-motion';

export default function Reveal({ children, delay = 0, y = 24, className, as = 'div' }) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}

export function SectionHeading({ index, eyebrow, title, subtitle }) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow mono">
        <span className="accent">{index}</span> / {eyebrow}
      </p>
      <h2>{title}</h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </Reveal>
  );
}
