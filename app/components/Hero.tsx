"use client";

import { useState, useEffect } from "react";

const PHRASES = [
  "production systems.",
  "Laravel backends.",
  "Flutter apps.",
  "B2B platforms.",
  "scalable web apps.",
];

function useTypewriter(phrases: string[], speed = 60, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setDisplay(current.slice(0, charIndex + 1));
            setCharIndex((c) => c + 1);
          } else {
            // Wait, then start deleting
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          if (charIndex > 0) {
            setDisplay(current.slice(0, charIndex - 1));
            setCharIndex((c) => c - 1);
          } else {
            setDeleting(false);
            setPhraseIndex((i) => (i + 1) % phrases.length);
          }
        }
      },
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex, phrases, speed, pause]);

  return display;
}

export default function Hero() {
  const typed = useTypewriter(PHRASES);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 2rem",
        maxWidth: "860px",
        margin: "0 auto",
      }}
    >
      {/* Eyebrow */}
      <p
        style={{
          fontSize: "13px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--muted)",
          marginBottom: "2rem",
        }}
      >
        Fullstack Developer · Indonesia
      </p>

      {/* Main headline */}
      {/* Main headline */}
      <h1
        style={{
          fontSize: "clamp(40px, 7vw, 72px)",
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          color: "var(--fg)",
          marginBottom: "1.5rem",
        }}
      >
        I build
        <br />
        <span style={{ position: "relative" }}>
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, #818cf8 0%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              paddingRight: "6px",
              display: "inline-block",
            }}
          >
            {typed}
          </span>
          <span
            style={{
              display: "inline-block",
              width: "3px",
              height: "0.85em",
              background: "#22d3ee",
              verticalAlign: "middle",
              animation: "blink 1s step-end infinite",
              boxShadow: "0 0 10px #22d3ee",
            }}
          />
        </span>
      </h1>

      {/* Sub */}
      <p
        style={{
          fontSize: "18px",
          color: "var(--muted)",
          maxWidth: "540px",
          lineHeight: 1.6,
          marginBottom: "3rem",
        }}
      >
        Specializing in Laravel, CodeIgniter, & Flutter. I&apos;ve shipped production systems
        handling real users — from B2B platforms to enterprise internal tools
        consolidating 24 web apps into one.
      </p>

      {/* CTAs */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <a
          href="#work"
          style={{
            padding: "12px 28px",
            background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
            color: "white",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 600,
            boxShadow: "0 4px 20px rgba(99, 102, 241, 0.25)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(99, 102, 241, 0.45)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(99, 102, 241, 0.25)";
          }}
        >
          View my work
        </a>
        <a
          href="#contact"
          style={{
            padding: "12px 28px",
            border: "1px solid var(--border)",
            background: "rgba(255, 255, 255, 0.03)",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 500,
            color: "var(--fg)",
            backdropFilter: "blur(8px)",
            transition: "border-color 0.2s, background-color 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.25)";
            (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255, 255, 255, 0.07)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
            (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255, 255, 255, 0.03)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          Get in touch
        </a>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
