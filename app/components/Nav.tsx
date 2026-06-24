"use client";

import { useState, useEffect } from "react";

type NavStyle = {
  text: string;
  border: string;
  bg: string;
};

const THEMES: Record<string, NavStyle> = {
  hero: {
    text: "var(--canary-yellow)",
    border: "rgba(239, 220, 83, 0.2)",
    bg: "rgba(209, 77, 24, 0.95)"
  },
  work: {
    text: "var(--crimson-red)",
    border: "rgba(230, 53, 47, 0.2)",
    bg: "rgba(254, 217, 59, 0.95)"
  },
  about: {
    text: "var(--crimson-red)",
    border: "rgba(230, 53, 47, 0.2)",
    bg: "rgba(18, 18, 18, 0.95)"
  },
  contact: {
    text: "var(--crimson-red)",
    border: "rgba(230, 53, 47, 0.2)",
    bg: "rgba(250, 240, 230, 0.95)"
  }
};

export default function Nav() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Intersection observer to swap header colors dynamically based on active section
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = ["hero", "work", "about", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const activeTheme = THEMES[activeSection] || THEMES.hero;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 2.5rem",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        background: scrolled ? activeTheme.bg : "transparent",
        borderBottom: `1px solid ${scrolled ? activeTheme.border : "transparent"}`,
        color: activeTheme.text,
        transition: "background-color 0.4s ease, border-color 0.4s ease, color 0.4s ease",
      }}
    >
      {/* Left: Navigation links */}
      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        <a href="#hero" style={{ fontWeight: 700 }}>
          HOME
        </a>
        <a href="#work" style={{ textDecoration: activeSection === "work" ? "underline" : "none" }}>
          PROJECTS
        </a>
      </div>

      {/* Center: Territories (Hidden on mobile) */}
      <div
        className="nav-territory"
        style={{
          display: "flex",
          gap: "0.25rem",
        }}
      >
        <span>TERRITORIES</span>
        <span style={{ opacity: 0.85 }}>[INDONESIA]</span>
      </div>

      {/* Right: Contact anchor */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <a
          href="https://github.com/Zee7X"
          target="_blank"
          rel="noopener noreferrer"
          style={{ opacity: 0.95 }}
        >
          <span className="nav-follow-long">FOLLOW RIZICK [GITHUB]</span>
          <span className="nav-follow-short" style={{ display: "none" }}>GITHUB</span>
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-territory {
            display: none !important;
          }
          .nav-follow-long {
            display: none !important;
          }
          .nav-follow-short {
            display: inline-block !important;
          }
        }
      `}</style>
    </header>
  );
}
