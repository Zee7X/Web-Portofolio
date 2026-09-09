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
  isPrivate?: boolean;
  privateReason?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Indoconnex",
    tagline: "B2B connection portal",
    description:
      "A comprehensive B2B business network platform featuring directory listings, marketplace, job boards, and structural charity modules. Architected a dynamic real-time social timeline supporting high-concurrency interactions (likes, comments, feeds) powered by a customized Laravel Reverb WebSocket broadcaster.",
    stack: ["Laravel", "Tailwind CSS", "MySQL", "Laravel Reverb"],
    links: { live: "https://www.indoconnex.com/" },
    code: "(I;/)"
  },
  {
    name: "PLTU S2P Central App",
    tagline: "Enterprise internal platform",
    description:
      "Consolidated 24 disjointed legacy web tools (permits, environment monitoring, LK3, attendance) into a unified enterprise gateway. Built high-performance REST APIs in CodeIgniter 4 connected to SQL Server, designing a centralized role-based authorization system and a custom modular token switcher to maintain high availability and seamless transitions.",
    stack: ["CodeIgniter 4", "SQL Server", "JavaScript", "REST API"],
    links: {},
    code: "(S;/)",
    isPrivate: true,
    privateReason: "Enterprise internal — not publicly accessible"
  },
  {
    name: "ITO PNC",
    tagline: "Campus profile mobile app",
    description:
      "Architected an offline-first Flutter application featuring structured Provider state management to cache campus academic data, routes, and structural profiles locally. Implemented custom canvas rendering for campus navigation mapping and local indexing search, reducing API roundtrips and optimizing data efficiency over low-bandwidth client networks.",
    stack: ["Flutter", "Dart"],
    links: { live: "https://play.google.com/store/apps/details?id=com.pnc.itoapp&hl=id" },
    code: "(M;/)"
  },
  {
    name: "Indoconnex CMS",
    tagline: "Back-office administration",
    description:
      "Engineered a high-integrity back-office CMS using React and Inertia.js integrated into a Laravel core. Designed dynamic SEO meta injectors, safe cPanel deploy pipelines via Cloudflare cache-purging APIs, and a high-performance content moderation filter with regex-based profanity detection algorithms to maintain compliance.",
    stack: ["Laravel", "React", "Inertia.js", "MySQL", "Cloudflare", "cPanel"],
    links: {},
    code: "(C;/)",
    isPrivate: true,
    privateReason: "Enterprise internal — NDA protected"
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
      "Developed a secure, transaction-safe HR leave management system using Laravel. Built custom authorization middleware to handle complex multi-tier manager review pipelines, and resolved race conditions in leave quota updates using raw MySQL database locks. Offloaded notification broadcasts and digest generation to asynchronous Laravel queues. Live demo with pre-filled demo credentials — just hit Login.",
    stack: ["Laravel", "MySQL", "JavaScript", "HTML", "CSS", "Docker", "Render"],
    links: {
      github: "https://github.com/Zee7X/Sistem-Informasi-Permohonan-Cuti-Pegawai",
      live: "https://sicute.onrender.com/login?nip=200302094&password=test",
    },
    code: "(R;/)"
  },
  {
    name: "Sistem Informasi BHP Lab",
    tagline: "Lab consumables inventory system",
    description:
      "Inventory management system for laboratory consumables (Bahan Habis Pakai) at Politeknik Negeri Cilacap, covering stock in/out tracking, low-stock alerts, and request approval flows. Built with Laravel, Inertia.js, and React on top of a role-based authorization core, deployed as a Dockerized web service. Live demo with pre-filled admin credentials — just hit Masuk.",
    stack: ["Laravel", "Inertia.js", "React", "Tailwind CSS", "MySQL", "Docker"],
    links: {
      github: "https://github.com/Zee7X/sistem-infromasi-bhp",
      live: "https://bhp-lab.onrender.com/login?email=admin%40bhp.com&password=12345",
    },
    code: "(H;/)"
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
            <span>[SYS_LOG: ITO PNC]</span>
            <span>PLATFORM: FLUTTER</span>
          </div>
          <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><Smartphone size={14} /> <span>Local Cache Database Status</span></div>
            <div style={{ background: "rgba(230, 53, 47, 0.08)", padding: "8px", borderLeft: "2.5px solid var(--crimson-red)", fontSize: "10px" }}>
              [PROVIDER] Initializing AcademicState...<br />
              [SQLITE] Loading cached campus profile: 48 items<br />
              [ROUTING] campus_map_coords initialized (12 nodes)<br />
              [CACHE] offline-first storage active.
            </div>
            <div style={{ marginTop: "auto", display: "flex", gap: "8px", fontSize: "10px", opacity: 0.85 }}>
              <span>FLUTTER ENGINE ·</span>
              <span>PROVIDER STATE ·</span>
              <span>SQLITE</span>
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
            <span>[SYS_LOG: BIRD SHOP]</span>
            <span>SUPABASE RLS</span>
          </div>
          <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><Database size={14} /> <span>Table: product_listing</span></div>
            <div style={{ background: "rgba(230, 53, 47, 0.08)", padding: "8px", borderLeft: "2.5px solid var(--crimson-red)", fontSize: "10px" }}>
              [RLS POLICY] ON select USING (auth.uid() IS NOT NULL);<br />
              [RLS POLICY] ON insert WITH CHECK (auth.uid() = seller_id);<br />
              [STORAGE] Bucket upload: bird-images-public/prod_91.jpg<br />
              [NAV] go_router: dispatched to /auth/callback
            </div>
            <div style={{ marginTop: "auto", display: "flex", gap: "8px", fontSize: "10px", opacity: 0.85 }}>
              <span>DART SDK ·</span>
              <span>SUPABASE CLIENT ·</span>
              <span>PROVIDER</span>
            </div>
          </div>
        </div>
      );

    case "(L;/)": // Literasi Digital
      return (
        <div style={containerStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(230, 53, 47, 0.3)", paddingBottom: "6px" }}>
            <span>[SYS_LOG: LIT_TUNA_NETRA]</span>
            <span>FIREBASE FIRESTORE</span>
          </div>
          <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckSquare size={14} /> <span>Accessibility Controller</span></div>
            <div style={{ background: "rgba(230, 53, 47, 0.08)", padding: "8px", borderLeft: "2.5px solid var(--crimson-red)", fontSize: "10px" }}>
              [TTS ENGINE] Speak: "Selamat datang di Literasi Digital"<br />
              [COMPAT] Screen Reader focus: aria-live="assertive"<br />
              [DB_SYNC] Firestore snap listening: user_progress_db<br />
              [AUDIO] Waveform frequency output ready: 44.1kHz
            </div>
            <div style={{ marginTop: "auto", display: "flex", gap: "8px", fontSize: "10px", opacity: 0.85 }}>
              <span>TALKBACK SUPPORT ·</span>
              <span>FIREBASE SDK ·</span>
              <span>TTS LAYER</span>
            </div>
          </div>
        </div>
      );

    case "(R;/)": // Cuti Pegawai
      return (
        <div style={containerStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(230, 53, 47, 0.3)", paddingBottom: "6px" }}>
            <span>[SYS_LOG: LEAVE_MGR]</span>
            <span>AUTH_FLOW</span>
          </div>
          <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><Server size={14} /> <span>Transaction Isolation Level</span></div>
            <div style={{ background: "rgba(230, 53, 47, 0.08)", padding: "8px", borderLeft: "2.5px solid var(--crimson-red)", fontSize: "10px" }}>
              [SQL_TX] START TRANSACTION;<br />
              [SELECT] SELECT quota FROM employee_leave WHERE id=14 FOR UPDATE;<br />
              [UPDATE] UPDATE employee_leave SET quota=quota-2 WHERE id=14;<br />
              [QUEUE] Dispatched Job: LeaveApprovalNotification (Email Queue)
            </div>
            <div style={{ marginTop: "auto", display: "flex", gap: "8px", fontSize: "10px", opacity: 0.85 }}>
              <span>LARAVEL CORE ·</span>
              <span>DB LOCK FOR UPDATE ·</span>
              <span>REDIS QUEUE</span>
            </div>
          </div>
        </div>
      );

    case "(H;/)": // BHP Lab
      return (
        <div style={containerStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(230, 53, 47, 0.3)", paddingBottom: "6px" }}>
            <span>[SYS_LOG: BHP_LAB]</span>
            <span>INVENTORY CORE</span>
          </div>
          <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}><Database size={14} /> <span>Stock Movement Ledger</span></div>
            <div style={{ background: "rgba(230, 53, 47, 0.08)", padding: "8px", borderLeft: "2.5px solid var(--crimson-red)", fontSize: "10px" }}>
              [STOCK_IN] SKEMATIK-200mA fuse set +24 unit (OP-2214)<br />
              [STOCK_OUT] Kabel jumper M-M −12 unit (PRK-0187)<br />
              [ALERT] threshold breached: multimeter digital &lt; 5 unit<br />
              [APPROVAL] request #58 → pending lab admin review
            </div>
            <div style={{ marginTop: "auto", display: "flex", gap: "8px", fontSize: "10px", opacity: 0.85 }}>
              <span>LARAVEL ·</span>
              <span>INERTIA + REACT ·</span>
              <span>DOCKER/RENDER</span>
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
                    {p.isPrivate && (
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          fontFamily: "var(--font-mono)",
                          fontSize: "10px",
                          fontWeight: 700,
                          border: "1px dashed rgba(230, 53, 47, 0.4)",
                          background: "rgba(230, 53, 47, 0.05)",
                          padding: "4px 10px",
                          borderRadius: "4px",
                          color: "var(--crimson-red)",
                          letterSpacing: "0.02em",
                        }}
                        title={p.privateReason}
                      >
                        <Lock size={11} /> {p.privateReason ? p.privateReason.toUpperCase() : "INTERNAL SYSTEM"}
                      </div>
                    )}
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
