/**
 * Site-wide content. Edit this file to change any text on the homepage,
 * navbar, footer and meta tags. Projects live in `src/content/projects/`.
 *
 * Lines marked `PLACEHOLDER` are invented and must be replaced with real data.
 */

import type { ImageMetadata } from 'astro';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  /** Short text shown next to the label, e.g. a handle. */
  handle: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  /** Optional link to the organization's website. */
  organizationUrl?: string;
  location: string;
  /** Free text, e.g. "Jul 2026 — Oct 2026" or "Sep 2026 — Present". */
  period: string;
  highlights: string[];
  stack?: string[];
}

export interface SectionCopy {
  /** Mono notebook label, e.g. "Work" → rendered as "01 — Work". */
  label: string;
  heading: string;
  intro?: string;
}

// ---------------------------------------------------------------------------
// Identity & meta
// ---------------------------------------------------------------------------

export const site = {
  name: 'Muhammad Luthfi Arief',
  /** Shown as the logo in the navbar. */
  shortName: 'Luthfi Arief',
  /** <title> on the homepage and default meta description. */
  metaTitle: 'Muhammad Luthfi Arief — Software engineer in the making',
  metaDescription:
    'Portfolio of Muhammad Luthfi Arief, an automation and robotics student in Bandung building software that talks to the physical world.',
  locale: 'en',

  hero: {
    eyebrow: 'Bandung, Indonesia · Automation → Software',
    tagline: 'Software engineer in the making — building where software meets the physical world.',
    status: {
      label: 'Open to internships',
      detail: 'Currently grinding backend & system design',
    },
  },

  /** File inside `public/`. Replace public/cv.pdf with your real CV. */
  cvHref: '/cv.pdf',
  cvFileName: 'Muhammad-Luthfi-Arief-CV.pdf',

  email: 'hello@example.com', // PLACEHOLDER — your public email

  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/your-handle', // PLACEHOLDER
      handle: 'in/your-handle',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/luthfiarief-code',
      handle: 'luthfiarief-code',
    },
  ] satisfies SocialLink[],

  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'Experience', href: '/#experience' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ] satisfies NavItem[],
};

// ---------------------------------------------------------------------------
// Homepage sections (order: 01 Work, 02 Experience, 03 About, 04 Contact)
// ---------------------------------------------------------------------------

export const sections = {
  work: {
    label: 'Work',
    heading: 'Selected work',
    intro:
      'A mix of software and hardware: a production web tool from my internship, my thesis on motor fault detection, and a few things I built to learn.',
  },
  experience: {
    label: 'Experience',
    heading: 'Where I’ve worked',
  },
  about: {
    label: 'About',
    heading: 'From wiring panels to writing services',
  },
  contact: {
    label: 'Contact',
    heading: 'Let’s talk',
    intro:
      'I’m looking for a software engineering internship, ideally on backend or systems work. If you have a role, a project, or just a question about motors, my inbox is open.',
  },
} satisfies Record<string, SectionCopy>;

// ---------------------------------------------------------------------------
// 02 — Experience (newest first; the first item is highlighted)
// ---------------------------------------------------------------------------

export const experience: ExperienceItem[] = [
  {
    role: 'Developer Intern',
    organization: 'KNS Group',
    location: 'Bandung · Hybrid', // PLACEHOLDER
    period: 'Jul 2026 — Oct 2026', // PLACEHOLDER
    highlights: [
      'Built DataScout, an internal tool that turns a shopping request into a normalized, comparable product catalog across several online stores.',
      'Moved long-running searches onto a PostgreSQL-backed job queue with leases and row locking, so a refresh or a worker restart no longer loses work.',
      'Set up CI that tests against a real PostgreSQL database, checks migrations, and runs a restart-recovery smoke test on the full Docker Compose stack.',
    ],
    stack: ['React', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Undergraduate Researcher',
    organization: 'Universitas Pendidikan Indonesia',
    organizationUrl: 'https://www.upi.edu',
    location: 'Bandung · On-site',
    period: 'Sep 2026 — Present',
    highlights: [
      'Thesis on early fault detection for three-phase induction motors using motor current signature analysis and a small on-device model.',
      'Built a reusable Python pipeline on an open dataset first, which exposed that accuracy drops sharply at load levels the model has not seen.',
    ],
    stack: ['Python', 'ESP32', 'TinyML'],
  },
  {
    role: 'Industrial Automation Intern', // PLACEHOLDER — confirm role title
    organization: 'PT Jacron',
    location: 'Indonesia · On-site', // PLACEHOLDER
    period: '2026', // PLACEHOLDER
    highlights: [
      'Placeholder: documented control panel wiring and I/O lists for maintenance handover.', // PLACEHOLDER
      'Placeholder: assisted with testing and commissioning of PLC-controlled equipment on the shop floor.', // PLACEHOLDER
    ],
  },
];

// ---------------------------------------------------------------------------
// 03 — About
// ---------------------------------------------------------------------------

export const about = {
  paragraphs: [
    'I started out on the hardware side. My degree is in Industrial Automation & Robotics Education, so my first projects were PLC ladder logic, motor drivers, and an ESP32 sumo robot that mostly taught me how many ways a wire can come loose.',
    'Somewhere along the way I noticed the part I enjoyed most was the software around the hardware: the code that reads a sensor, stores what happened, and turns it into something a person can act on. My internship at KNS Group made it official. I spent it building a web tool with a real database, real users, and real failure modes.',
    'Now I’m deliberately going deeper on backend engineering and system design, while finishing a thesis that sits right where both worlds meet: detecting motor faults from current signals, on a microcontroller.',
  ],
  education: {
    school: 'Universitas Pendidikan Indonesia (UPI)',
    degree: 'B.Ed. Industrial Automation & Robotics Education',
    period: '2023 — 2027 (expected)', // PLACEHOLDER — confirm graduation year
    location: 'Bandung',
  },
  /** One compact line. Keep it honest and short. */
  skills: [
    'Python',
    'TypeScript',
    'FastAPI',
    'React',
    'PostgreSQL',
    'Docker',
    'C++ / Arduino',
    'ESP32',
    'PLC basics',
    'Git',
  ],
  /**
   * Profile photo. Put the image in src/assets/ and import it here, e.g.
   *   import portrait from '../assets/portrait.jpg';
   *   photo: { src: portrait, alt: 'Luthfi smiling, standing in the lab' },
   * Leave as null to show the placeholder frame.
   */
  photo: null as { src: ImageMetadata; alt: string } | null,
};

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export const footer = {
  note: 'Designed and built in Bandung with Astro.',
};
