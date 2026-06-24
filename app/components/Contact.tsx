"use client";

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Zee7X",
    description: "See my code",
  },
  {
    label: "Email",
    href: "mailto:rizick076@gmail.com",
    description: "Best for project inquiries",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rizick-z-123594327/",
    description: "Professional background",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
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
        Contact
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Let&apos;s work
            <br />
            together.
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: 1.7 }}>
            Open to freelance projects, collaboration, and full-time
            opportunities. I respond within 24 hours.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
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
                padding: "1.25rem 0",
                borderBottom: "1px solid var(--border)",
                transition: "border-color 0.3s, transform 0.3s",
                gap: "1rem",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateX(6px)";
                el.style.borderColor = "rgba(99, 102, 241, 0.4)";
                const arrow = el.querySelector(".arrow-icon") as HTMLElement;
                if (arrow) {
                  arrow.style.transform = "translate(2px, -2px)";
                  arrow.style.color = "var(--accent)";
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateX(0)";
                el.style.borderColor = "var(--border)";
                const arrow = el.querySelector(".arrow-icon") as HTMLElement;
                if (arrow) {
                  arrow.style.transform = "none";
                  arrow.style.color = "var(--muted)";
                }
              }}
            >
              <div>
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "var(--fg)",
                    marginBottom: "2px",
                  }}
                >
                  {link.label}
                </p>
                <p style={{ fontSize: "13px", color: "var(--muted)" }}>
                  {link.description}
                </p>
              </div>
              <span
                className="arrow-icon"
                style={{
                  color: "var(--muted)",
                  fontSize: "20px",
                  transition: "transform 0.2s, color 0.2s",
                }}
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "6rem",
          paddingTop: "2rem",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "var(--muted)",
          fontSize: "13px",
        }}
      >
        <span>Rizick · Fullstack Developer</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </section>
  );
}
