/* ------------------------------------------------------------------
 *  PORTFOLIO CONTENT
 *  Everything shown on the site comes from this file.
 *  Edit the values below — no need to touch the components.
 * ------------------------------------------------------------------ */

export const profile = {
  name: 'Ericson Bareno',
  firstName: 'Ericson',
  title: 'Software Developer',
  tagline: 'Building Real World Solutions',

  // Words that rotate in the hero headline ("I build ___")
  roles: ['web applications', 'scalable APIs', 'mobile apps', 'real-world solutions'],

  bio:
    "I'm a software developer who turns ideas into products people actually use. " +
    'I work across the whole stack — crafting fast, polished interfaces, designing reliable ' +
    'back-end services, and shipping mobile apps for iOS and Android.',

  // TODO: replace with your real details
  email: 'hello@ericsonbareno.dev',
  available: true,
  availabilityText: 'Open to freelance & full-time roles',

  socials: [
    { label: 'GitHub', url: 'https://github.com/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  ],

  // Set to '/resume.pdf' (and put the file in /public) when you have one
  resumeUrl: null,
};

export const skills = [
  {
    category: 'Frontend',
    key: 'frontend',
    blurb: 'Responsive, accessible interfaces with modern frameworks.',
    items: ['React.js', 'Next.js', 'Vue.js', 'Nuxt.js', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    key: 'backend',
    blurb: 'APIs and services built to be secure, fast and maintainable.',
    items: ['Node.js', 'NestJS', 'Next.js (Server)', 'Laravel', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Mobile',
    key: 'mobile',
    blurb: 'Native and cross-platform apps for iOS and Android.',
    items: ['React Native', 'Flutter', 'Swift (iOS)', 'Vue Capacitor'],
  },
];

/* ------------------------------------------------------------------
 *  PROJECTS — add your case studies here. While this list is empty
 *  the site shows a tasteful "coming soon" state.
 *
 *  Example:
 *  {
 *    title: 'Inventory Management System',
 *    category: 'Web App',
 *    summary: 'One-line description of what it is.',
 *    problem: 'What problem did the client/user have?',
 *    solution: 'What did you build to solve it?',
 *    result: 'Measurable outcome, e.g. "Cut processing time by 40%".',
 *    tech: ['Next.js', 'NestJS', 'PostgreSQL'],
 *    image: '/projects/inventory.png',   // put image in /public/projects
 *    liveUrl: 'https://...',
 *    repoUrl: 'https://github.com/...',
 *  },
 * ------------------------------------------------------------------ */
export const projects = [];

/* Optional: create a free form at https://formspree.io and paste the
 * endpoint here (e.g. 'https://formspree.io/f/abcdwxyz'). If left empty
 * the contact form opens the visitor's email app instead. */
export const formEndpoint = '';
