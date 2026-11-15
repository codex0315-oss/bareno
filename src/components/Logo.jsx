import { motion } from 'framer-motion';

/**
 * "E" monogram — an E drawn as strokes, with a gold middle bar and a
 * blinking terminal-style cursor dot. The strokes draw themselves in on load.
 */
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: 0.15 + i * 0.35, duration: 0.7, ease: 'easeInOut' },
      opacity: { delay: 0.15 + i * 0.35, duration: 0.01 },
    },
  }),
};

export default function Logo({ size = 40, animate = true }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      initial={animate ? 'hidden' : 'visible'}
      animate="visible"
      role="img"
      aria-label="Ericson Bareno logo"
      className="logo-mark"
    >
      <defs>
        <linearGradient id="eb-logo-bg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2563EB" />
          <stop offset="1" stopColor="#0B1A3A" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#eb-logo-bg)" />
      <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="15.25" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
      <motion.path
        d="M44 18H22v28h22"
        fill="none"
        stroke="#ffffff"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        custom={0}
      />
      <motion.path
        d="M22 32h13"
        fill="none"
        stroke="#F5B82E"
        strokeWidth="7"
        strokeLinecap="round"
        variants={draw}
        custom={1}
      />
      <motion.circle
        cx="44"
        cy="32"
        r="3.5"
        fill="#F5B82E"
        initial={{ opacity: animate ? 0 : 1 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ delay: animate ? 1.1 : 0, duration: 1.1, repeat: Infinity, times: [0, 0.1, 0.6, 0.7] }}
      />
    </motion.svg>
  );
}
