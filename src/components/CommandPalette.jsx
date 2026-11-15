import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_LINKS, SearchIcon } from './Navbar.jsx';
import { profile } from '../data/portfolio.js';

export default function CommandPalette({ open, onClose, toggleTheme, theme }) {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = useMemo(() => {
    const go = (id) => () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    return [
      { group: 'Navigate', label: 'Home', hint: '↑', run: go('home') },
      ...NAV_LINKS.map((l) => ({ group: 'Navigate', label: l.label, hint: '#', run: go(l.id) })),
      {
        group: 'Actions',
        label: `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`,
        hint: '◐',
        run: toggleTheme,
      },
      {
        group: 'Actions',
        label: 'Copy email address',
        hint: '@',
        run: () => navigator.clipboard?.writeText(profile.email).catch(() => {}),
      },
      ...profile.socials.map((s) => ({
        group: 'Links',
        label: `Open ${s.label}`,
        hint: '↗',
        run: () => window.open(s.url, '_blank', 'noopener'),
      })),
      ...(profile.resumeUrl
        ? [{ group: 'Links', label: 'Download resume', hint: '↓', run: () => window.open(profile.resumeUrl, '_blank') }]
        : []),
    ];
  }, [theme, toggleTheme]);

  const filtered = actions.filter((a) => a.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (open) {
      setQuery('');
      setIndex(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  useEffect(() => setIndex(0), [query]);

  const runAt = (i) => {
    const a = filtered[i];
    if (!a) return;
    onClose();
    setTimeout(a.run, 60);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIndex((i) => (i + 1) % Math.max(filtered.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setIndex((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      runAt(index);
    }
  };

  let lastGroup = null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="palette-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            className="palette"
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={onKeyDown}
          >
            <div className="palette__search">
              <SearchIcon />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search…"
                aria-label="Search commands"
              />
              <kbd>esc</kbd>
            </div>
            <ul className="palette__list" role="listbox">
              {filtered.length === 0 && <li className="palette__empty">No results for “{query}”</li>}
              {filtered.map((a, i) => {
                const header = a.group !== lastGroup ? a.group : null;
                lastGroup = a.group;
                return (
                  <li key={a.label} role="presentation">
                    {header && <p className="palette__group mono">{header}</p>}
                    <button
                      role="option"
                      aria-selected={i === index}
                      className={`palette__item ${i === index ? 'is-active' : ''}`}
                      onMouseEnter={() => setIndex(i)}
                      onClick={() => runAt(i)}
                    >
                      <span className="palette__hint mono">{a.hint}</span>
                      {a.label}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="palette__footer mono">
              <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
              <span><kbd>↵</kbd> select</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
