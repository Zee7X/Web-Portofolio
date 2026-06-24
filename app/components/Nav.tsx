"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "0 2rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(11, 12, 16, 0.8)" : "rgba(11, 12, 16, 0)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <a
        href="#"
        style={{
          fontWeight: 700,
          fontSize: "15px",
          letterSpacing: "-0.01em",
          color: "var(--fg)",
        }}
      >
        Rizick
      </a>
      <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              fontSize: "14px",
              color: "var(--muted)",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--fg)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--muted)")
            }
          >
            {l.label}
          </a>
        ))}
        <a
          href="https://github.com/Zee7X"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "13px",
            padding: "6px 14px",
            border: "1px solid var(--border)",
            borderRadius: "6px",
            color: "var(--fg)",
            transition: "border-color 0.15s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.borderColor = "var(--fg)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.borderColor = "var(--border)")
          }
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
