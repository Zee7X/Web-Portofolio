"use client";

import { ExternalLink, GitFork } from "lucide-react";

type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  links: { github?: string; live?: string };
  highlight?: boolean;
};

const PROJECTS: Project[] = [
  {
    name: "Indoconnex",
    tagline: "B2B connection portal",
    description:
      "A comprehensive B2B business network platform featuring business directory listings, articles, marketplace (Buy & Sell), jobs, products & services, lost & found, and charity modules. Developed a dynamic social ecosystem with an interactive timeline supporting likes, comments, and shares, with real-time notifications powered by Laravel Reverb.",
    stack: ["Laravel", "Tailwind CSS", "MySQL", "Laravel Reverb"],
    links: { live: "https://www.indoconnex.com/" },
    highlight: true,
  },
  {
    name: "PLTU S2P Central App",
    tagline: "Enterprise internal platform",
    description:
      "Worked as a Backend Developer developing CodeIgniter 4 REST APIs to consolidate 24 separate web applications — attendance, environment monitoring, LK3, permits, and more — into a single unified platform for a power plant company. Built role-based access and modular app-switching architectures.",
    stack: ["CodeIgniter 4", "SQL Server", "JavaScript", "REST API"],
    links: {},
    highlight: true,
  },
  {
    name: "ITO PNC",
    tagline: "Campus profile mobile app",
    description:
      "Mobile application presenting the campus profile, structure, and information of Politeknik Negeri Cilacap. Built with Flutter to provide a clean, modern, and intuitive user interface for prospective and current students.",
    stack: ["Flutter", "Dart"],
    links: { live: "https://play.google.com/store/apps/details?id=com.pnc.itoapp&hl=id" },
    highlight: true,
  },
  {
    name: "Indoconnex CMS",
    tagline: "Back-office administration",
    description:
      "Administrative panel for the B2B network. Built using React and Inertia.js on top of Laravel. Developed a custom CMS builder, SEO configuration, transactional email broadcasting, and strict moderation systems for content compliance (profanity filters) and user verification.",
    stack: ["Laravel", "React", "Inertia.js", "MySQL", "Cloudflare", "cPanel"],
    links: {},
  },
  {
    name: "Bird-Shop (Kicau Mania)",
    tagline: "Flutter e-commerce app",
    description:
      "Mobile bird shop app with admin and buyer roles, manual bank transfer payment flow, and Provider state management. Full Supabase backend with row-level security policies, storage buckets, and role-based navigation via go_router.",
    stack: ["Flutter", "Dart", "Supabase", "go_router"],
    links: { github: "https://github.com/Zee7X/Bird-Shop" },
  },
  {
    name: "Literasi Digital Tuna Netra",
    tagline: "Accessibility-first Flutter app",
    description:
      "Digital literacy app built for visually impaired users. Accessibility and screen reader compatibility were core constraints from day one — not retrofitted later. Integrated with Firebase for database and data storage.",
    stack: ["Flutter", "Dart", "Firebase"],
    links: { github: "https://github.com/Zee7X/Literasi-Digital-Tuna-Netra" },
  },
  {
    name: "Sistem Informasi Cuti Pegawai",
    tagline: "HR leave management system",
    description:
      "Web-based employee leave request and approval system built with Laravel. Features a multi-level authorization flow, leave quota tracking, and comprehensive reporting.",
    stack: ["Laravel", "MySQL", "JavaScript", "HTML", "CSS"],
    links: {
      github:
        "https://github.com/Zee7X/Sistem-Informasi-Permohonan-Cuti-Pegawai",
    },
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      style={{
        padding: "2rem",
        background: "var(--card-bg)",
        backdropFilter: "blur(16px)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "1.2rem",
        transition: "transform 0.3s, border-color 0.3s, background-color 0.3s, box-shadow 0.3s",
        gridColumn: project.highlight ? "span 2" : "span 1",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px)";
        el.style.borderColor = "rgba(99, 102, 241, 0.35)";
        el.style.backgroundColor = "var(--card-bg-hover)";
        el.style.boxShadow = "0 12px 30px rgba(0, 0, 0, 0.25), 0 0 20px rgba(99, 102, 241, 0.04)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.borderColor = "var(--border)";
        el.style.backgroundColor = "var(--card-bg)";
        el.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "1rem",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(99, 102, 241, 0.85)",
              fontWeight: 600,
              marginBottom: "4px",
            }}
          >
            {project.tagline}
          </p>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--fg)",
            }}
          >
            {project.name}
          </h3>
        </div>
        <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--muted)", transition: "color 0.15s" }}
              aria-label="GitHub repository"
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--fg)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
              }
            >
              <GitFork size={18} />
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--muted)", transition: "color 0.15s" }}
              aria-label="Live demo"
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--fg)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
              }
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p style={{ fontSize: "14.5px", color: "var(--muted)", lineHeight: 1.65 }}>
        {project.description}
      </p>

      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {project.stack.map((tech) => (
          <span
            key={tech}
            style={{
              fontSize: "12px",
              padding: "4px 12px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "100px",
              color: "rgba(255, 255, 255, 0.75)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      style={{
        padding: "8rem 2rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <p
        style={{
          fontSize: "12px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--muted)",
          marginBottom: "3rem",
        }}
      >
        Selected work
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
        }}
      >
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
