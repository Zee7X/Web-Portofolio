"use client";

import { Server, Smartphone, Wrench, Puzzle, Briefcase, GraduationCap } from "lucide-react";

const SKILLS = {
  Backend: ["Laravel", "CodeIgniter", "PHP", "SQL Server", "MySQL", "REST API", "Queue Workers"],
  "Frontend / Mobile": ["Flutter", "React", "Next.js", "Inertia.js", "Tailwind CSS", "Dart"],
  "Infra & Tools": ["cPanel", "Cloudflare", "Git", "Supabase", "Firebase", "Postman"],
  Integrations: ["Firebase Firestore", "Laravel Reverb", "Supabase Storage"],
};

function getSkillIcon(skill: string) {
  const iconStyle = { marginRight: "6px", display: "inline-block", flexShrink: 0 };
  
  switch (skill.toLowerCase()) {
    case "laravel":
      // Official Laravel: Isometric double-box logo
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#FF2D20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case "codeigniter":
      // Official CodeIgniter: Flame shape
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="#EE4326" style={iconStyle}>
          <path d="M12 2C12 2 6.5 8.5 6.5 12.5C6.5 15.5 8.9 18 12 18C15.1 18 17.5 15.5 17.5 12.5C17.5 8.5 12 2 12 2ZM12 15C10.6 15 9.5 13.9 9.5 12.5C9.5 11.5 10.3 10.3 12 8.7C13.7 10.3 14.5 11.5 14.5 12.5C14.5 13.9 13.4 15 12 15Z" />
        </svg>
      );
    case "php":
      // Official PHP: Oval brand with "php" text
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="#777BB4" style={iconStyle}>
          <ellipse cx="12" cy="12" rx="11" ry="7" />
          <text x="5" y="15" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">PHP</text>
        </svg>
      );
    case "mysql":
      // Official MySQL: Dolphin curve representation
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="#00758F" style={iconStyle}>
          <path d="M18.5 8.2c-.3-.8-.9-1.5-1.7-1.9-.9-.4-1.9-.5-2.8-.2l.8 1.4c.5-.1 1.1-.1 1.6.1.4.2.8.6.9 1.1.2.6 0 1.2-.4 1.7-.4.5-.9.7-1.5.7h-1l-1.5 2.6H17c1.3 0 2.4-1.1 2.4-2.4 0-.8-.4-1.6-.9-2.1z" />
          <path d="M12.6 15.5c-.8.8-2 1.3-3.2 1.3-1.6 0-3-1-3.6-2.5-.6-1.5-.2-3.3.9-4.3l-.8-1.4C4.3 9.8 3.8 11.4 4 13.1c.2 1.7 1.1 3.2 2.5 4.1 1.4.9 3.2 1.1 4.7.5l1.4-2.2z" fill="#F29111" />
        </svg>
      );
    case "sql server":
      // Official Microsoft SQL Server: Red database brand style
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="#CC292B" style={iconStyle}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
        </svg>
      );
    case "rest api":
      // Generic REST API: Tag brackets `</>`
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "queue workers":
      // Queue Workers: Clock sync process
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      );
    case "flutter":
      // Official Flutter: origami blue triangles
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" style={iconStyle}>
          <polygon points="14.3 0 2.3 12 5.9 15.6 17.9 3.6" fill="#39bcf3" />
          <polygon points="17.9 15.6 14.3 19.2 8.3 13.2 11.9 9.6" fill="#0196e3" />
          <polygon points="14.3 19.2 11.9 21.6 2.3 12 5.9 8.4" fill="#02569B" />
        </svg>
      );
    case "react":
      // Official React: Atom symbol
      return (
        <svg viewBox="-11.5 -10.2 23 20.4" width="12" height="12" fill="none" stroke="#61dafb" strokeWidth="1.2" style={iconStyle}>
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          <circle r="2" fill="#61dafb" />
        </svg>
      );
    case "next.js":
      // Official Next.js: N letter circle
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" style={iconStyle}>
          <circle cx="12" cy="12" r="11" fill="none" stroke="#ffffff" strokeWidth="2" />
          <path d="M7.5 16.5V7.5h1.5l6 7.5v-7.5h1.5v9h-1.5l-6-7.5v7.5z" fill="#ffffff" />
        </svg>
      );
    case "inertia.js":
      // Official Inertia.js: 3 horizontal layered arrows
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="#9553e6" style={iconStyle}>
          <path d="M3 6h18v2.5H3V6zm0 4.75h18v2.5H3v-2.5zm0 4.75h18v2.5H3v-2.5z" />
        </svg>
      );
    case "tailwind css":
      // Official Tailwind CSS: Dual waves
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="#38BDF8" style={iconStyle}>
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 14.805 11.8 18 11.8c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.018 15.197 4.8 12.001 4.8zm-6 7c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.316 2.376 5.512 2.376 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.177-1.194-2.316-2.376-5.512-2.376z"/>
        </svg>
      );
    case "dart":
      // Official Dart: Hexagon shape
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" style={iconStyle}>
          <polygon points="12 2 2 7 2 17 12 22 22 17 22 7" fill="none" stroke="#00B4AB" strokeWidth="2.5" />
          <polygon points="12 6 6 9 6 15 12 18 18 15 18 9" fill="#00B4AB" />
        </svg>
      );
    case "cpanel":
      // Official cPanel: "cP" stylized text
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="#FF6C2C" style={iconStyle}>
          <path d="M4 6h4v1.5H5.5v2H8v1.5H5.5v2H9V15H4V6zm7 0h3.5c.8 0 1.5.2 1.8.6.3.3.5.8.5 1.4s-.2 1.1-.5 1.4c-.3.4-.9.6-1.8.6h-2V15h-1.5V6zm1.5 1.5V10h2c.4 0 .6-.1.8-.2.2-.2.3-.4.3-.7s-.1-.5-.3-.7c-.2-.1-.4-.2-.8-.2h-2z" />
        </svg>
      );
    case "cloudflare":
      // Official Cloudflare: Cloud waves
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="#F38020" style={iconStyle}>
          <path d="M19.4 11.5c.1-.5.1-1 .1-1.5 0-3.6-2.9-6.5-6.5-6.5-2.6 0-4.9 1.5-5.9 3.7C6.7 7.1 6.2 7 5.7 7 3.1 7 1 9.1 1 11.7c0 2.2 1.5 4 3.6 4.5H19c2.2 0 4-1.8 4-4 0-1.8-1.2-3.3-2.8-3.7z" />
        </svg>
      );
    case "git":
      // Official Git: Tilted square branch node
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="#F05032" style={iconStyle}>
          <path d="M20.9 9.35L14.65 3.1c-.8-.8-2-.8-2.8 0L9.35 6.35l2.8 2.8c.6-.2 1.3-.1 1.8.4.5.5.6 1.3.4 1.8l2.8 2.8c.5-.2 1.3-.1 1.8.4.8.8.8 2 0 2.8s-2 .8-2.8 0c-.5-.5-.6-1.3-.4-1.8L13 12.15v4.5c.3.2.5.6.5 1.05 0 1.1-.9 2-2 2s-2-.9-2-2c0-.45.2-.85.5-1.05v-4.5c-.3-.2-.5-.6-.5-1.05 0-.45.2-.85.5-1.05L7.25 5.9 3.1 10.05c-.8.8-.8 2 0 2.8l10.25 10.25c.8.8 2 .8 2.8 0l7.6-7.6c.8-.8.8-2 0-2.8l-2.85-2.85z" />
        </svg>
      );
    case "supabase":
      // Official Supabase: Emerald lighting bolts
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="#3ECF8E" style={iconStyle}>
          <path d="M13.5 21.4l8.3-9.5c.4-.4.1-1.1-.5-1.1h-7.2V3.6c0-.6-.7-.9-1.1-.5L4.7 12.2c-.4.4-.1 1.1.5 1.1h7.2v7.2c0 .6.7.9 1.1.5z" />
        </svg>
      );
    case "firebase":
      // Official Firebase: Flame outline
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="#FFCA28" style={iconStyle}>
          <path d="M3.89 15.67L9.26 2.2a.5.5 0 0 1 .93 0l1.73 4.34 1.16-2.18a.5.5 0 0 1 .83.04l5.3 10c.26.49.1 1.1-.37 1.37l-8.52 4.93a.5.5 0 0 1-.5 0L3.89 15.67z" />
        </svg>
      );
    case "laravel reverb":
      // Laravel Reverb: Wave/Broadcasting signal icon (lucide-like Radio or signal icon)
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#FF2D20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
          <circle cx="12" cy="12" r="2" fill="#FF2D20" />
          <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
        </svg>
      );
      
    case "firebase firestore":
      // Firebase Firestore logo (orange-yellow flame)
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="#FFCA28" style={iconStyle}>
          <path d="M3.89 15.67L9.26 2.2a.5.5 0 0 1 .93 0l1.73 4.34 1.16-2.18a.5.5 0 0 1 .83.04l5.3 10c.26.49.1 1.1-.37 1.37l-8.52 4.93a.5.5 0 0 1-.5 0L3.89 15.67z" />
        </svg>
      );
    case "postman":
      // Postman logo (orange rocket shape)
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="#FF6C37" style={iconStyle}>
          <path d="M12 2L9 9H6l5 4-2 7 5-4 5 4-2-7 5-4h-3l-3-7z" />
        </svg>
      );
    case "supabase storage":
      // Storage: Folder database disk
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="#3ECF8E" style={iconStyle}>
          <path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-9 12H5v-2h5v2zm0-4H5V8h5v4zm9 4h-5v-2h5v2zm0-4h-5V8h5v4z" />
        </svg>
      );
      
    default:
      return (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="var(--muted)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
          <line x1="7" y1="2" x2="7" y2="22" />
          <line x1="17" y1="2" x2="17" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
      );
  }
}

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "8rem 2rem",
        maxWidth: "900px",
        margin: "0 auto",
        borderTop: "1px solid var(--border)",
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
        About
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
      >
        {/* Bio */}
        <div>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              lineHeight: 1.2,
              color: "var(--fg)",
            }}
          >
            Building real things,
            <br />
            from studies to industry.
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              color: "var(--muted)",
              fontSize: "15px",
              lineHeight: 1.7,
            }}
          >
            <p>
              I&apos;m Rizick, a Fullstack Developer and Informatics Engineering graduate (D3)
              from Politeknik Negeri Cilacap. I specialize in building robust web backends, B2B portals, and mobile applications, bridging modern frontend interfaces with secure and optimized backend systems.
            </p>
            <p>
              At PT Murni Solusindo Nusantara, I actively develop the Indoconnex B2B connection platform—building the member portal with Laravel and Tailwind CSS, and the CMS panel using React and Inertia.js. Previously, at CV Entwo Electrical & Engineering, I developed CodeIgniter 4 REST APIs to consolidate 24 internal web applications into a single platform (PLTU S2P Central App).
            </p>
            <p>
              I also build mobile applications using Flutter (such as an accessibility-focused digital literacy app utilizing Firebase, and an e-commerce application with Supabase), and I am comfortable handling database management, real-time notifications with Laravel Reverb, and deployment workflows.
            </p>
          </div>
        </div>

        {/* Skills Cards Column */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1rem",
          }}
        >
          {Object.entries(SKILLS).map(([group, items]) => {
            let Icon = Server;
            let accentGlow = "rgba(99, 102, 241, 0.35)";
            let iconColor = "#818cf8";
            if (group.includes("Frontend")) {
              Icon = Smartphone;
              accentGlow = "rgba(6, 182, 212, 0.35)";
              iconColor = "#22d3ee";
            } else if (group.includes("Infra")) {
              Icon = Wrench;
              accentGlow = "rgba(16, 185, 129, 0.35)";
              iconColor = "#34d399";
            } else if (group.includes("Integrations")) {
              Icon = Puzzle;
              accentGlow = "rgba(245, 158, 11, 0.35)";
              iconColor = "#fbbf24";
            }

            return (
              <div
                key={group}
                style={{
                  background: "var(--card-bg)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-3px)";
                  el.style.borderColor = accentGlow;
                  el.style.boxShadow = `0 10px 20px rgba(0, 0, 0, 0.2), 0 0 15px ${accentGlow.replace("0.35", "0.05")}`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = "var(--border)";
                  el.style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                  <Icon size={16} style={{ color: iconColor }} />
                  <p
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--fg)",
                      fontWeight: 700,
                    }}
                  >
                    {group}
                  </p>
                </div>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {items.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        fontSize: "11.5px",
                        padding: "4px 10px",
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        borderRadius: "100px",
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      {getSkillIcon(skill)}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Experience & Education Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          marginTop: "6rem",
          borderTop: "1px solid var(--border)",
          paddingTop: "4rem",
          alignItems: "start",
        }}
      >
        {/* Experience Column */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2.5rem",
            }}
          >
            <Briefcase size={18} style={{ color: "var(--accent)" }} />
            <p
              style={{
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--muted)",
                fontWeight: 600,
                margin: 0,
              }}
            >
              Experience
            </p>
          </div>

          {/* Timeline Connector Line */}
          <div
            style={{
              position: "absolute",
              left: "7px",
              top: "3rem",
              bottom: "1rem",
              width: "1px",
              background: "linear-gradient(to bottom, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0.02) 100%)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", paddingLeft: "1.75rem" }}>
            {/* PT Murni Solusindo Nusantara */}
            <div
              style={{
                position: "relative",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateX(4px)";
                const dot = el.querySelector(".timeline-dot") as HTMLElement;
                if (dot) dot.style.transform = "translateY(-50%) scale(1.3)";
                const line = el.querySelector(".active-line") as HTMLElement;
                if (line) line.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateX(0)";
                const dot = el.querySelector(".timeline-dot") as HTMLElement;
                if (dot) dot.style.transform = "translateY(-50%) scale(1)";
                const line = el.querySelector(".active-line") as HTMLElement;
                if (line) line.style.borderColor = "rgba(99, 102, 241, 0.25)";
              }}
            >
              {/* Node Dot */}
              <div
                className="timeline-dot"
                style={{
                  position: "absolute",
                  left: "-25px",
                  top: "22px",
                  transform: "translateY(-50%)",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#818cf8",
                  boxShadow: "0 0 8px #818cf8",
                  transition: "transform 0.2s",
                  zIndex: 2,
                }}
              />

              <div
                className="active-line"
                style={{
                  borderLeft: "2px solid rgba(99, 102, 241, 0.25)",
                  paddingLeft: "1.25rem",
                  transition: "border-color 0.3s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "0.25rem",
                  }}
                >
                  <h4 style={{ fontSize: "16px", fontWeight: 700, color: "var(--fg)" }}>
                    PT Murni Solusindo Nusantara
                  </h4>
                  <span style={{ fontSize: "12px", color: "var(--muted)", fontWeight: 500 }}>
                    Nov 2025 – Present
                  </span>
                </div>
                <p style={{ fontSize: "13.5px", color: "rgba(99, 102, 241, 0.85)", fontWeight: 600, marginBottom: "0.5rem" }}>
                  Fullstack Web Developer
                </p>
                <p style={{ fontSize: "13.5px", color: "var(--muted)", lineHeight: 1.6 }}>
                  Developing and maintaining <strong>Indoconnex</strong>, a B2B connection platform. Built the member portal (Laravel & Tailwind) featuring articles, marketplace (Buy & Sell), jobs, charity, and a real-time social timeline. Developed the back-office CMS (React & Inertia.js) with a custom CMS builder, SEO configurations, email broadcasting, and content/user moderation.
                </p>
              </div>
            </div>

            {/* CV Entwo Electrical & Engineering */}
            <div
              style={{
                position: "relative",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateX(4px)";
                const dot = el.querySelector(".timeline-dot") as HTMLElement;
                if (dot) dot.style.transform = "translateY(-50%) scale(1.3)";
                const line = el.querySelector(".active-line") as HTMLElement;
                if (line) line.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateX(0)";
                const dot = el.querySelector(".timeline-dot") as HTMLElement;
                if (dot) dot.style.transform = "translateY(-50%) scale(1)";
                const line = el.querySelector(".active-line") as HTMLElement;
                if (line) line.style.borderColor = "rgba(99, 102, 241, 0.25)";
              }}
            >
              {/* Node Dot */}
              <div
                className="timeline-dot"
                style={{
                  position: "absolute",
                  left: "-25px",
                  top: "22px",
                  transform: "translateY(-50%)",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#818cf8",
                  boxShadow: "0 0 8px #818cf8",
                  transition: "transform 0.2s",
                  zIndex: 2,
                }}
              />

              <div
                className="active-line"
                style={{
                  borderLeft: "2px solid rgba(99, 102, 241, 0.25)",
                  paddingLeft: "1.25rem",
                  transition: "border-color 0.3s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "0.25rem",
                  }}
                >
                  <h4 style={{ fontSize: "16px", fontWeight: 700, color: "var(--fg)" }}>
                    CV Entwo Electrical & Engineering
                  </h4>
                  <span style={{ fontSize: "12px", color: "var(--muted)", fontWeight: 500 }}>
                    Jul 2024 – Oct 2025
                  </span>
                </div>
                <p style={{ fontSize: "13.5px", color: "rgba(99, 102, 241, 0.85)", fontWeight: 600, marginBottom: "0.5rem" }}>
                  Backend Developer
                </p>
                <p style={{ fontSize: "13.5px", color: "var(--muted)", lineHeight: 1.6 }}>
                  Developed and maintained <strong>PLTU S2P Central App</strong>, an enterprise platform consolidating 24 internal web applications for a power plant. Engineered robust backend REST APIs using CodeIgniter 4.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Column */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2.5rem",
            }}
          >
            <GraduationCap size={18} style={{ color: "var(--accent-secondary)" }} />
            <p
              style={{
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--muted)",
                fontWeight: 600,
                margin: 0,
              }}
            >
              Education
            </p>
          </div>

          {/* Timeline Connector Line */}
          <div
            style={{
              position: "absolute",
              left: "7px",
              top: "3rem",
              bottom: "1rem",
              width: "1px",
              background: "linear-gradient(to bottom, rgba(6, 182, 212, 0.2) 0%, rgba(6, 182, 212, 0.02) 100%)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", paddingLeft: "1.75rem" }}>
            {/* Politeknik Negeri Cilacap */}
            <div
              style={{
                position: "relative",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateX(4px)";
                const dot = el.querySelector(".timeline-dot") as HTMLElement;
                if (dot) dot.style.transform = "translateY(-50%) scale(1.3)";
                const line = el.querySelector(".active-line") as HTMLElement;
                if (line) line.style.borderColor = "var(--accent-secondary)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateX(0)";
                const dot = el.querySelector(".timeline-dot") as HTMLElement;
                if (dot) dot.style.transform = "translateY(-50%) scale(1)";
                const line = el.querySelector(".active-line") as HTMLElement;
                if (line) line.style.borderColor = "rgba(6, 182, 212, 0.25)";
              }}
            >
              {/* Node Dot */}
              <div
                className="timeline-dot"
                style={{
                  position: "absolute",
                  left: "-25px",
                  top: "22px",
                  transform: "translateY(-50%)",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#22d3ee",
                  boxShadow: "0 0 8px #22d3ee",
                  transition: "transform 0.2s",
                  zIndex: 2,
                }}
              />

              <div
                className="active-line"
                style={{
                  borderLeft: "2px solid rgba(6, 182, 212, 0.25)",
                  paddingLeft: "1.25rem",
                  transition: "border-color 0.3s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "0.25rem",
                  }}
                >
                  <h4 style={{ fontSize: "16px", fontWeight: 700, color: "var(--fg)" }}>
                    Politeknik Negeri Cilacap
                  </h4>
                  <span style={{ fontSize: "12px", color: "var(--muted)", fontWeight: 500 }}>
                    2020 – 2023
                  </span>
                </div>
                <p style={{ fontSize: "13.5px", color: "rgba(6, 182, 212, 0.85)", fontWeight: 600, marginBottom: "0.5rem" }}>
                  D3 Teknik Informatika (Associate Degree in Informatics Engineering)
                </p>
                <p style={{ fontSize: "13.5px", color: "var(--muted)", lineHeight: 1.6 }}>
                  GPA (IPK): 3.62/4.00. Focused on database design, web application development, networking, and software engineering principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
