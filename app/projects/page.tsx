import { Metadata } from 'next';
import styles from './projects.module.scss';

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of products and applications I've built, focusing on payment tracking, community platforms, and football prediction tools.",
};

const projects = [
  {
    id: 'world-cup-predictor',
    title: 'World Cup Predictor',
    tech: ['Next.js', 'ElysiaJS', 'Neon PostgreSQL', 'Drizzle ORM', 'Clerk'],
    description: 'A social football prediction platform where fans compete, track rankings, and predict tournament outcomes. Built for the 2026 FIFA World Cup.',
    live: 'https://world-cup-predictor-taupe.vercel.app/',
    github: 'https://github.com/DevYoma/world-cup-predictor'
  },
  {
    id: 'fybvault',
    title: 'FYBVault',
    tech: ['Next.js', 'TypeScript', 'ElysiaJS', 'Supabase'],
    description: 'Helping university students manage group savings and event contributions without spreadsheets, missed payments, or WhatsApp confusion.',
    live: 'https://fybvault.com',
    github: '' // Private codebase
  },
  {
    id: 'digital-logbook',
    title: 'Digital Logbook',
    tech: ['React', 'TypeScript', 'SCSS', 'Supabase'],
    description: 'A productivity web app for students to track daily internship activities. Designed with a relational data model (Postgres) for efficient log management and authentication.',
    live: 'http://digital-logbook-elv7.vercel.app/',
    github: 'https://github.com/DevYoma/digital-logbook/'
  },
  {
    id: 'nfcs-oau',
    title: 'NFCS OAU',
    tech: ['React', 'TypeScript', 'SCSS', 'Firebase'],
    description: 'A live community platform for a university fellowship serving 100+ active users. Features automated daily birthday celebrations, team member data management, and role-based data access.',
    live: 'https://nfcs-oau.vercel.app/',
    github: 'https://github.com/DevYoma/nfcs'
  }
];

export default function ProjectsPage() {
  return (
    <div className={styles.projectsContainer}>
      <h1>Things I have worked on</h1>
      
      <div className={styles.projectList}>
        {projects.map((project) => (
          <section key={project.id} className={styles.project}>
            <h2>{project.title}</h2>
            <div className={styles.tech}>
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.links}>
              <a href={project.live} target="_blank" rel="noopener noreferrer">Live Site</a>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
