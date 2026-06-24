"use client";
import { useState, useEffect } from "react";
import { stats, resumeUrl } from "@/data/projects";

const roles = ["Data Science", "Deep Learning", "Machine Learning", "Computer Vision"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center hero-grid overflow-hidden">
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(15,191,146,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Floating ambient orbs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl animate-float-slow"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-40 w-[28rem] h-[28rem] rounded-full opacity-15 blur-3xl animate-float-slower"
        style={{ background: "radial-gradient(circle, #0fbf92, transparent 70%)" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-20 w-full">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-brand/30 bg-brand/5 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          <span className="text-xs font-medium text-brand tracking-wide">
            Aspiring Data Scientist — open to opportunities
          </span>
        </div>

        {/* Headline with cycling role word */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6 animate-fade-up">
          I build with
          <br />
          <span className="relative inline-grid">
            {roles.map((role, i) => (
              <span
                key={role}
                className="col-start-1 row-start-1 text-transparent bg-clip-text transition-all duration-500"
                style={{
                  backgroundImage: "linear-gradient(135deg, #0fbf92 0%, #5ee9c5 100%)",
                  opacity: roleIndex === i ? 1 : 0,
                  transform: roleIndex === i ? "translateY(0)" : "translateY(12px)",
                  filter: roleIndex === i ? "blur(0px)" : "blur(4px)",
                }}
                aria-hidden={roleIndex !== i}
              >
                {role}.
              </span>
            ))}
            {/* Reserve space using the longest word, invisible */}
            <span className="invisible" aria-hidden="true">Machine Learning.</span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg text-neutral-400 max-w-xl leading-relaxed mb-10 animate-fade-up animate-delay-100">
          M.Sc. Data Science graduate from GITAM University (2024–2026),
          building deep learning systems and end-to-end ML pipelines that go
          from research notebook to production.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-20 animate-fade-up animate-delay-200">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand text-neutral-950 font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_-4px_rgba(15,191,146,0.6)] active:scale-100"
            style={{ backgroundColor: "var(--brand)" }}
          >
            See my work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href={resumeUrl}
            download
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-neutral-300 text-sm transition-all duration-300 hover:border-white/30 hover:text-white hover:bg-white/5"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-y-0.5">
              <path d="M7 1v8M3.5 6L7 9.5 10.5 6M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-neutral-300 text-sm transition-all duration-300 hover:border-white/30 hover:text-white hover:bg-white/5"
          >
            Get in touch
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden max-w-xl animate-fade-up animate-delay-300">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-neutral-950 px-6 py-5 transition-colors duration-300 hover:bg-neutral-900"
            >
              <div className="text-2xl font-semibold text-white mb-1 tabular-nums">{s.value}</div>
              <div className="text-xs text-neutral-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator — line only, no text */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animate-delay-500">
        <div className="w-px h-10 bg-gradient-to-b from-neutral-600 to-transparent animate-pulse-slow" />
      </div>
    </section>
  );
}
