"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink, GitFork, Server, Smartphone, Database, Lock, Eye, CheckSquare } from "lucide-react";

type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  links: { github?: string; live?: string };
  code: string;
};

const PROJECTS: Project[] = [
  {
    name: "Indoconnex",
    tagline: "B2B connection portal",
    description:
      "A comprehensive B2B business network platform featuring business directory listings, articles, marketplace (Buy & Sell), jobs, products & services, lost & found, and charity modules. Developed a dynamic social ecosystem with an interactive timeline supporting likes, comments, and shares, with real-time notifications powered by Laravel Reverb.",
    stack: ["Laravel", "Tailwind CSS", "MySQL", "Laravel Reverb"],
    links: { live: "https://www.indoconnex.com/" },
    code: "(I;/)"
  },
  {
    name: "PLTU S2P Central App",
    tagline: "Enterprise internal platform",
    description:
      "Worked as a Backend Developer developing CodeIgniter 4 REST APIs to consolidate 24 separate web applications — attendance, environment monitoring, LK3, permits, and more — into a single unified platform for a power plant company. Built role-based access and modular app-switching architectures.",
    stack: ["CodeIgniter 4", "SQL Server", "JavaScript", "REST API"],
    links: {},
    code: "(S;/)"
  },
  {
    name: "ITO PNC",
    tagline: "Campus profile mobile app",
    description:
      "Mobile application presenting the campus profile, structure, and information of Politeknik Negeri Cilacap. Built with Flutter to provide a clean, modern, and intuitive user interface for prospective and current students.",
    stack: ["Flutter", "Dart"],
    links: { live: "https://play.google.com/store/apps/details?id=com.pnc.itoapp&hl=id" },
    code: "(M;/)"
  },
  {
    name: "Indoconnex CMS",
    tagline: "Back-office administration",
    description:
      "Administrative panel for the B2B network. Built using React and Inertia.js on top of Laravel. Developed a custom CMS builder, SEO configuration, transactional email broadcasting, and strict moderation systems for content compliance (profanity filters) and user verification.",
    stack: ["Laravel", "React", "Inertia.js", "MySQL", "Cloudflare", "cPanel"],
    links: {},
    code: "(C;/)"
  },
  {
    name: "Bird-Shop (Kicau Mania)",
    tagline: "Flutter e-commerce app",
    description:
      "Mobile bird shop app with admin and buyer roles, manual bank transfer payment flow, and Provider state management. Full Supabase backend with row-level security policies, storage buckets, and role-based navigation via go_router.",
    stack: ["Flutter", "Dart", "Supabase", "go_router"],
    links: { github: "https://github.com/Zee7X/Bird-Shop" },
    code: "(B;/)"
  },
  {
    name: "Literasi Digital Tuna Netra",
    tagline: "Accessibility-first Flutter app",
    description:
      "Digital literacy app built for visually impaired users. Accessibility and screen reader compatibility were core constraints from day one — not retrofitted later. Integrated with Firebase for database and data storage.",
    stack: ["Flutter", "Dart", "Firebase"],
    links: { github: "https://github.com/Zee7X/Literasi-Digital-Tuna-Netra" },
    code: "(L;/)"
  },
  {
    name: "Sistem Informasi Cuti Pegawai",
    tagline: "HR leave management system",
    description:
      "Web-based employee leave request and approval system built with Laravel. Features a multi-level authorization flow, leave quota tracking, and comprehensive reporting.",
    stack: ["Laravel", "MySQL", "JavaScript", "HTML", "CSS"],
    links: {
      github: "https://github.com/Zee7X/Sistem-Informasi-Permohonan-Cuti-Pegawai",
    },
    code: "(R;/)"
  },
];

// Helper to render customized tech mockups/schematics for each project on the left side
function ProjectSchematic({ code }: { code: string }) {
  const containerStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    background: "#080808",
    padding: "1.5rem",
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    color: "var(--crimson-red)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    position: "relative",
    border: "2px solid var(--crimson-red)",
    borderRadius: "12px",
  };

  switch (code) {
    case "(I;/)": // Indoconnex
      return (
        <div style={containerStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(230, 53, 47, 0.3)", paddingBottom: "6px" }}>
            <span>[SYS_LOG: INDOCONNEX]</span>
            <span>REVERB: ACTIVE</span>
          </div>
          <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><Server size={14} /> <span>Laravel Router WebSocket Listener</span></div>
            <div style={{ background: "rgba(230, 53, 47, 0.08)", padding: "8px", borderLeft: "2.5px solid var(--crimson-red)", fontSize: "10px" }}>
              WS CONNECTION ESTABLISHED<br />
              channel: private-notifications.user.81<br />
              event: NotificationSent (timeline_activity)
            </div>
            <div style={{ marginTop: "auto", display: "flex", gap: "8px", fontSize: "10px", opacity: 0.85 }}>
              <span>DIRECTORY ·</span>
              <span>MARKETPLACE ·</span>
              <span>TIMELINE</span>
            </div>
          </div>
        </div>
      );

    case "(S;/)": // PLTU S2P
      return (
        <div style={containerStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(230, 53, 47, 0.3)", paddingBottom: "6px" }}>
            <span>[SYS_LOG: PLTU S2P]</span>
            <span>API LISTENER</span>
          </div>
          <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.4rem", fontSize: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>GET /api/v1/attendance</span>
              <span style={{ color: "#34d399" }}>200 OK (210ms)</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>POST /api/v1/permits/apply</span>
              <span style={{ color: "#34d399" }}>201 CREATED (345ms)</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>GET /api/v1/environment/metrics</span>
              <span style={{ color: "#34d399" }}>200 OK (189ms)</span>
            </div>
            <div style={{ marginTop: "auto", borderTop: "1px dashed rgba(230, 53, 47, 0.25)", paddingTop: "6px" }}>
              <span>CONSOLIDATED: 24 APP SYSTEMS</span>
              <br />
              <span>DB: MS SQL SERVER CORE CONNECTION</span>
            </div>
          </div>
        </div>
      );

    case "(M;/)": // ITO PNC
      return (
        <div style={containerStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(230, 53, 47, 0.3)", paddingBottom: "6px" }}>
            <span>[APP_VIEW: ITO PNC]</span>
            <span>DEVICE: MOBILE</span>
          </div>
          <div style={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "120px", height: "190px", border: "2px solid var(--crimson-red)", borderRadius: "16px", padding: "8px", position: "relative", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ width: "30px", height: "4px", background: "var(--crimson-red)", margin: "0 auto 4px auto", borderRadius: "10px" }}></div>
              <div style={{ fontSize: "9px", textAlign: "center", fontWeight: 700 }}>ITO PNC MOBILE</div>
              <div style={{ height: "45px", background: "rgba(230, 53, 47, 0.1)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}><Smartphone size={16} /></div>
              <div style={{ fontSize: "8px", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span>■ PROFILE PNC</span>
                <span>■ CURRICULUM</span>
                <span>■ CAMPUS ROUTE</span>
              </div>
            </div>
          </div>
        </div>
      );

    case "(C;/)": // Indoconnex CMS
      return (
        <div style={containerStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(230, 53, 47, 0.3)", paddingBottom: "6px" }}>
            <span>[CMS: BACK-OFFICE]</span>
            <span>PORTAL: ADMIN</span>
          </div>
          <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}><Eye size={12} /> <span>Content Moderation Queue</span></div>
            <div style={{ fontSize: "10px", display: "flex", flexDirection: "column", gap: "3px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", background: "rgba(230, 53, 47, 0.05)", padding: "4px 8px" }}>
                <span>POST #2918 - PROFANITY FILTER:</span>
                <span style={{ color: "#ef4444" }}>FLAGGED</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", background: "rgba(230, 53, 47, 0.05)", padding: "4px 8px" }}>
                <span>USER #0482 - VERIFICATION:</span>
                <span style={{ color: "#34d399" }}>PASSED</span>
              </div>
            </div>
            <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", fontSize: "10px", opacity: 0.85 }}>
              <span>SEO ENGINE ·</span>
              <span>BROADCASTER ·</span>
              <span>INERTIA CORE</span>
            </div>
          </div>
        </div>
      );

    case "(B;/)": // Bird Shop
      return (
        <div style={containerStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(230, 53, 47, 0.3)", paddingBottom: "6px" }}>
            <span>[BACKEND: SUPABASE]</span>
            <span>ROUTER: GO_ROUTER</span>
          </div>
          <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><Database size={14} /> <span>Storage Bucket System</span></div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><Lock size={14} /> <span>RLS Policy: auth.uid() = user_id</span></div>
            <div style={{ background: "rgba(230, 53, 47, 0.08)", padding: "8px", fontSize: "9px" }}>
              SECURE BUCKET: bird-images-public<br />
              STATE MGMT: PROVIDER ENGINE
            </div>
          </div>
        </div>
      );

    case "(L;/)": // Literasi Digital
      return (
        <div style={containerStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(230, 53, 47, 0.3)", paddingBottom: "6px" }}>
            <span>[ACCESSIBILITY: FIREBASE]</span>
            <span>TUNA NETRA MODULE</span>
          </div>
          <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckSquare size={14} /> <span>Screen Reader Compatible</span></div>
            <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "4px" }}>
              <div style={{ display: "flex", gap: "2px", alignItems: "center", height: "40px" }}>
                <span style={{ width: "2px", height: "20px", background: "var(--crimson-red)" }}></span>
                <span style={{ width: "2px", height: "35px", background: "var(--crimson-red)" }}></span>
                <span style={{ width: "2px", height: "15px", background: "var(--crimson-red)" }}></span>
                <span style={{ width: "2px", height: "40px", background: "var(--crimson-red)" }}></span>
                <span style={{ width: "2px", height: "28px", background: "var(--crimson-red)" }}></span>
                <span style={{ width: "2px", height: "10px", background: "var(--crimson-red)" }}></span>
              </div>
              <span style={{ fontSize: "9px", opacity: 0.8 }}>TTS WAVEFORM STREAM</span>
            </div>
          </div>
        </div>
      );

    case "(R;/)": // Cuti Pegawai
      return (
        <div style={containerStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(230, 53, 47, 0.3)", paddingBottom: "6px" }}>
            <span>[HR_SYS: LARAVEL]</span>
            <span>LEAVE QUOTA</span>
          </div>
          <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px" }}>
              <span>Employee Leave Request:</span>
              <span style={{ color: "#34d399" }}>AUTHORIZED</span>
            </div>
            <div style={{ border: "1px solid rgba(230, 53, 47, 0.25)", padding: "6px", fontSize: "9px" }}>
              MULTILEVEL APPROVAL FLOW:<br />
              1. Supervisor Approval {"->"} APPROVED<br />
              2. HRD Authorization {"->"} PENDING
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function Work() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeProject = PROJECTS[activeIdx];
  const sectionRef = useRef<HTMLDivElement>(null);

  // Sync left-side project state automatically on scroll as project cards cross viewport center
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -40% 0px", // triggers when project card is near the vertical center
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const indexAttr = entry.target.getAttribute("data-index");
          if (indexAttr !== null) {
            const index = parseInt(indexAttr, 10);
            setActiveIdx(index);
          }
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll(".project-card-item");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      style={{
        background: "var(--mustard-yellow)",
        color: "var(--crimson-red)",
        padding: "8rem 2.5rem",
      }}
    >
      <div
        className="work-container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.25fr",
          gap: "4.5rem",
          maxWidth: "1400px",
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        {/* Left Side: Sticky Visual & Interactive Mockup (Slide 2 / 3 Aesthetic) */}
        <div
          className="work-visual-sticky"
          style={{
            position: "sticky",
            top: "100px",
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          {/* Section Indicator */}
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 700, textTransform: "uppercase" }}>
            ■ SELECTED WORK / SHIPPED PROD
          </div>

          {/* Technical Schematic graphic mockup */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1.15/1",
              boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
            }}
          >
            <ProjectSchematic code={activeProject.code} />
          </div>

          {/* Active project details block on left side */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: 700 }}>
              ■ {activeProject.code} {activeProject.tagline.toUpperCase()}
            </span>
            <p style={{ fontSize: "14px", lineHeight: "1.5", opacity: 0.9 }}>
              INVENTIVE AND ORIGINAL. DEVELOPED WITH STACK FOCUS: {activeProject.stack.join(" · ")}
            </p>
          </div>
        </div>

        {/* Right Side: Scrollable detailed Project list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4.5rem" }}>
          {PROJECTS.map((p, index) => {
            const isActive = index === activeIdx;
            return (
              <article
                key={p.name}
                className="project-card-item"
                data-index={index}
                onMouseEnter={() => setActiveIdx(index)}
                style={{
                  paddingBottom: "3rem",
                  borderBottom: `1.5px solid rgba(230, 53, 47, ${isActive ? "0.8" : "0.15"})`,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  cursor: "pointer",
                  transition: "border-color 0.3s ease, opacity 0.3s ease",
                  opacity: isActive ? 1 : 0.65,
                }}
              >
                {/* Meta details row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 700 }}>
                    {p.code} 0{index + 1}
                  </span>
                  
                  {/* Custom Action links */}
                  <div style={{ display: "flex", gap: "1rem" }}>
                    {p.links.github && (
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontFamily: "var(--font-mono)",
                          fontSize: "11px",
                          fontWeight: 700,
                          border: "1px solid var(--crimson-red)",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          transition: "background-color 0.2s, color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          const target = e.currentTarget as HTMLElement;
                          target.style.backgroundColor = "var(--crimson-red)";
                          target.style.color = "var(--mustard-yellow)";
                        }}
                        onMouseLeave={(e) => {
                          const target = e.currentTarget as HTMLElement;
                          target.style.backgroundColor = "transparent";
                          target.style.color = "var(--crimson-red)";
                        }}
                      >
                        <GitFork size={12} /> REPO
                      </a>
                    )}
                    {p.links.live && (
                      <a
                        href={p.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontFamily: "var(--font-mono)",
                          fontSize: "11px",
                          fontWeight: 700,
                          border: "1px solid var(--crimson-red)",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          transition: "background-color 0.2s, color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          const target = e.currentTarget as HTMLElement;
                          target.style.backgroundColor = "var(--crimson-red)";
                          target.style.color = "var(--mustard-yellow)";
                        }}
                        onMouseLeave={(e) => {
                          const target = e.currentTarget as HTMLElement;
                          target.style.backgroundColor = "transparent";
                          target.style.color = "var(--crimson-red)";
                        }}
                      >
                        <ExternalLink size={12} /> LIVE DEMO
                      </a>
                    )}
                  </div>
                </div>

                {/* Typography pairing: Big bold display title, elegant italic serif subtitle */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(32px, 5vw, 64px)",
                      fontWeight: 800,
                      lineHeight: "0.95",
                      textTransform: "uppercase",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(24px, 3.5vw, 38px)",
                      fontStyle: "italic",
                      lineHeight: 1,
                      marginTop: "-2px",
                    }}
                  >
                    {p.tagline}
                  </p>
                </div>

                {/* Project Description (Fullstack information retained) */}
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.6",
                    opacity: 0.95,
                    maxWidth: "600px",
                  }}
                >
                  {p.description}
                </p>

                {/* Tech Pills (Brutalist style) */}
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        fontWeight: 700,
                        border: "1.5px solid var(--crimson-red)",
                        padding: "3px 10px",
                        borderRadius: "100px",
                        textTransform: "uppercase",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .work-container {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .work-visual-sticky {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
