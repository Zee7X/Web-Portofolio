"use client";

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Zee7X",
    description: "See my code repository",
    code: "(G;/)"
  },
  {
    label: "Email",
    href: "mailto:rizick076@gmail.com",
    description: "Best for project inquiries",
    code: "(E;/)"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rizick-z-123594327/",
    description: "Professional background",
    code: "(L;/)"
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "var(--cream-white)",
        color: "var(--crimson-red)",
        padding: "8rem 2.5rem",
        borderTop: "1.5px solid rgba(230, 53, 47, 0.25)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "6rem",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Left Side: Call to action */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 700, textTransform: "uppercase" }}>
              ■ 03 / CONNECT WITH ME
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(42px, 8vw, 92px)",
                fontWeight: 900,
                lineHeight: "0.85",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
              }}
            >
              LET&apos;S BUILD
              <br />
              TOGETHER.
            </h2>
          </div>
          
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(18px, 2.5vw, 28px)",
              fontStyle: "italic",
              lineHeight: "1.4",
              maxWidth: "500px",
              opacity: 0.9,
            }}
          >
            Open to freelance projects, engineering collaboration, and full-time fullstack opportunities.
          </p>
        </div>

        {/* Right Side: Brutalist Interactive Link List */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "2rem 0",
                borderBottom: "1.5px solid rgba(230, 53, 47, 0.25)",
                transition: "transform 0.3s ease, border-color 0.3s ease",
                gap: "1.5rem",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateX(10px)";
                el.style.borderColor = "var(--crimson-red)";
                const arrow = el.querySelector(".contact-arrow") as HTMLElement;
                if (arrow) arrow.style.transform = "translate(4px, -4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateX(0)";
                el.style.borderColor = "rgba(230, 53, 47, 0.25)";
                const arrow = el.querySelector(".contact-arrow") as HTMLElement;
                if (arrow) arrow.style.transform = "none";
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", opacity: 0.8 }}>
                    {link.code}
                  </span>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "24px",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {link.label}
                  </h4>
                </div>
                <p style={{ fontSize: "13.5px", opacity: 0.85, textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                  {link.description}
                </p>
              </div>

              <span
                className="contact-arrow"
                style={{
                  fontSize: "32px",
                  lineHeight: 1,
                  transition: "transform 0.25s ease",
                }}
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer block */}
      <div
        style={{
          marginTop: "8rem",
          paddingTop: "2.5rem",
          borderTop: "1.5px solid rgba(230, 53, 47, 0.25)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          maxWidth: "1400px",
          margin: "8rem auto 0 auto",
        }}
      >
        <span>Rizick Sabillah · Developer Spec</span>
        <span>© {new Date().getFullYear()} [PROD SYSTEMS]</span>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
