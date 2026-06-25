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
      id="hero"
      style={{
        minHeight: "100vh",
        background: "var(--burnt-orange)",
        color: "var(--canary-yellow)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6rem 2rem 2rem 2rem",
        overflow: "hidden",
      }}
    >
      {/* Top Section Layout */}
      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr",
          gap: "2rem",
          alignItems: "center",
          flexGrow: 1,
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Left Column: Branding / Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
          {/* Circular Branding Logo */}
          <div style={{ display: "inline-block" }}>
            <svg
              viewBox="0 0 100 100"
              width="90"
              height="90"
              fill="none"
              stroke="var(--canary-yellow)"
              strokeWidth="2.5"
              style={{ opacity: 0.95 }}
            >
              <circle cx="50" cy="50" r="45" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="35" strokeDasharray="4 4" />
              <text
                x="50%"
                y="58%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="38"
                fontWeight="900"
                fontFamily="var(--font-display)"
                fill="var(--canary-yellow)"
              >
                R
              </text>
            </svg>
          </div>

          {/* Metadata Block B */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--canary-yellow)",
                opacity: 0.75,
              }}
            >
              ■ (b;/) systems builder
            </p>
            <p
              style={{
                fontSize: "12.5px",
                lineHeight: "1.6",
                opacity: 0.7,
                letterSpacing: "0.01em",
                maxWidth: "280px",
              }}
            >
              Inventive and robust. Every line of code is optimized to drive value, scale backends, and shape high-performance web applications.
            </p>
          </div>
        </div>

        {/* Center Column: Portrait, Name & CTA Button */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2.5rem",
            height: "100%",
            minHeight: "450px",
          }}
        >
          {/* Image & Name Wrapper to ensure absolute centering over the face */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "480px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Portrait Image with CSS Filters */}
            <div
              style={{
                width: "100%",
                aspectRatio: "1/1",
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
                background: "#000",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portrait.png"
                alt="Rizick Portrait"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(100%) contrast(140%) brightness(85%)",
                  mixBlendMode: "screen",
                  opacity: 0.85,
                }}
              />
              {/* Color Overlay for filmic screen effect */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "var(--burnt-orange)",
                  mixBlendMode: "color-burn",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Massive Overlapping Name (Centered exactly over the portrait image) */}
            <div
              className="hero-name-container"
              style={{
                position: "absolute",
                pointerEvents: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                zIndex: 15,
              }}
            >
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(34px, 7.5vw, 110px)",
                  fontWeight: 900,
                  lineHeight: "0.85",
                  letterSpacing: "-0.04em",
                  textShadow: "0 4px 15px rgba(0,0,0,0.3)",
                  textTransform: "uppercase",
                  color: "var(--canary-yellow)",
                }}
              >
                RIZICK
                <br />
                SABILLAH
              </h1>
            </div>
          </div>

          {/* Interactive CTA Link */}
          <div style={{ zIndex: 30 }}>
            <a
              href="#work"
              className="cta-button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.85rem 2.25rem",
                border: "2px solid var(--canary-yellow)",
                borderRadius: "9999px",
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "var(--canary-yellow)",
                background: "transparent",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textDecoration: "none",
              }}
            >
              <span>Explore Selected Work</span>
              <span className="cta-arrow" style={{ fontSize: "16px", display: "inline-block" }}>↘</span>
            </a>
          </div>
        </div>

        {/* Right Column: Role / Subtitle */}
        <div
          className="hero-right-col"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5rem",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            textAlign: "right",
            height: "100%",
          }}
        >
          {/* Metadata Block A */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-end" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--canary-yellow)",
                opacity: 0.75,
              }}
            >
              (a;/) software architect
            </p>
            <p
              style={{
                fontSize: "12.5px",
                lineHeight: "1.6",
                opacity: 0.7,
                letterSpacing: "0.01em",
                maxWidth: "280px",
              }}
            >
              A systems mind and a modern stack. Shipped scalable backends, real-time sync systems, and production-ready applications.
            </p>
          </div>

          {/* Typewriter text aligned bottom-right */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "lowercase",
                letterSpacing: "0.05em",
                opacity: 0.55,
                marginBottom: "4px",
              }}
            >
              active_directory // system_log
            </p>
            <h2
              style={{
                fontSize: "clamp(16px, 2.2vw, 22px)",
                fontWeight: 700,
                fontFamily: "var(--font-mono)",
                color: "var(--canary-yellow)",
              }}
            >
              I build{" "}
              <span style={{ position: "relative" }}>
                <span>{typed}</span>
                <span
                  style={{
                    display: "inline-block",
                    width: "2px",
                    height: "1em",
                    background: "var(--canary-yellow)",
                    verticalAlign: "middle",
                    marginLeft: "2px",
                    animation: "blink 1s step-end infinite",
                  }}
                />
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Bottom Scrolling Marquee / Ticker */}
      <div
        style={{
          borderTop: "1.5px solid var(--canary-yellow)",
          borderBottom: "1.5px solid var(--canary-yellow)",
          padding: "10px 0",
          margin: "3rem -2rem 0 -2rem",
          overflow: "hidden",
          background: "rgba(0,0,0,0.05)",
          display: "flex",
        }}
      >
        <div className="animate-marquee" style={{ display: "flex", gap: "2rem" }}>
          {Array(4)
            .fill(
              "DYNAMIC BACKENDS · CAREFULLY CONSIDERED ARCHITECTURE · HYBRID MOBILE APPS · INVENTIVE AND SCALABLE · PRODUCTION WORKERS ·"
            )
            .map((text, idx) => (
              <span
                key={idx}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  whiteSpace: "nowrap",
                  textTransform: "uppercase",
                }}
              >
                {text}
              </span>
            ))}
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .hero-name-container {
          width: 140%;
        }
        .cta-button {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .cta-button:hover {
          background: var(--canary-yellow) !important;
          color: var(--burnt-orange) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2) !important;
        }
        .cta-button:hover .cta-arrow {
          transform: translate(2px, 2px);
        }
        .cta-arrow {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hero-right-col {
            align-items: flex-start !important;
            text-align: left !important;
          }
          .hero-right-col div {
            align-items: flex-start !important;
          }
        }
        @media (max-width: 640px) {
          .hero-name-container {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
