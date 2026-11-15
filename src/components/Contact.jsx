import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal, { SectionHeading } from './Reveal.jsx';
import { formEndpoint, profile } from '../data/portfolio.js';
import { ArrowIcon } from './Hero.jsx';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    if (!formEndpoint) {
      const subject = encodeURIComponent(`Project inquiry from ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('sent');
      e.target.reset();
    } catch {
      setStatus('error');
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading index="04" eyebrow="Contact" title="Let's build something real." />

        <div className="contact">
          <Reveal className="contact__info">
            <p className="contact__lead">
              Have a project in mind, a role to fill, or just want to say hi? My inbox is always open. I
              usually reply within a day.
            </p>

            <button className="contact__email" onClick={copyEmail}>
              <span className="mono contact__email-label">email</span>
              <span className="contact__email-value">{profile.email}</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={copied ? 'y' : 'n'}
                  className="contact__copy mono"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                >
                  {copied ? 'copied ✓' : 'click to copy'}
                </motion.span>
              </AnimatePresence>
            </button>

            <ul className="contact__socials">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noreferrer">
                    {s.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
              {profile.resumeUrl && (
                <li>
                  <a href={profile.resumeUrl} download>
                    Resume <span aria-hidden="true">↓</span>
                  </a>
                </li>
              )}
            </ul>
          </Reveal>

          <Reveal className="card contact__form-card" delay={0.1}>
            <form className="form" onSubmit={onSubmit}>
              <div className="form__row">
                <label className="field">
                  <span>Name</span>
                  <input name="name" required placeholder="Jane Doe" autoComplete="name" />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input name="email" type="email" required placeholder="jane@company.com" autoComplete="email" />
                </label>
              </div>
              <label className="field">
                <span>Message</span>
                <textarea name="message" required rows={5} placeholder="Tell me about your project…" />
              </label>
              <button className="btn btn--primary btn--block" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'} <ArrowIcon />
              </button>
              {status === 'sent' && <p className="form__note form__note--ok">Thanks! I&apos;ll get back to you soon.</p>}
              {status === 'error' && (
                <p className="form__note form__note--err">Something went wrong. Please email me directly.</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
