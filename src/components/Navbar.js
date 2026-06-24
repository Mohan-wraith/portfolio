"use client";
import { useState, useEffect } from "react";
import { LinkedinIcon } from "./Icons";

const links = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-white hover:text-brand transition-colors"
        >
          Mohan<span className="text-brand">.</span>
        </a>

        <div className="flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden sm:block text-sm text-neutral-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/mohan-devendra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all duration-200"
            >
              <LinkedinIcon width="14" height="14" />
            </a>
            <a
              href="https://github.com/Mohan-wraith"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-1.5 rounded-full border border-brand/40 text-brand hover:bg-brand hover:text-neutral-950 transition-all duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Scroll progress indicator */}
      <div className="h-px w-full bg-white/5">
        <div
          className="h-full transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%`, backgroundColor: "var(--brand)" }}
        />
      </div>
    </header>
  );
}
