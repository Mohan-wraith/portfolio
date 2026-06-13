"use client";
import { useState } from "react";
import { GithubIcon, ExternalIcon, ChevronIcon } from "./Icons";

export default function ProjectCard({ project }) {
  const [showDemo, setShowDemo] = useState(false);
  const [loaded, setLoaded] = useState(false);

  function toggleDemo() {
    if (!showDemo) setLoaded(false);
    setShowDemo((v) => !v);
  }

  return (
    <article
      className="group relative rounded-2xl border border-white/5 bg-neutral-900/40 overflow-hidden
                 transition-all duration-300 ease-out
                 hover:-translate-y-1 hover:border-white/10
                 hover:shadow-[0_24px_48px_-24px_rgba(15,191,146,0.25)]"
    >
      {/* Gradient top accent — brightens on hover */}
      <div
        className="absolute top-0 inset-x-0 h-px opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accentFrom}, ${project.accentTo}, transparent)`,
        }}
      />

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-neutral-600 group-hover:text-[#0fbf92] transition-colors duration-300">
              {project.index}
            </span>
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          </div>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${project.typeColor} whitespace-nowrap`}>
            {project.type}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-sm font-medium text-neutral-300 mb-3">{project.tagline}</p>

        {/* Summary */}
        <p className="text-sm text-neutral-500 leading-relaxed mb-5">{project.summary}</p>

        {/* Bullets */}
        <ul className="space-y-2 mb-6">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-sm text-neutral-400">
              <span
                className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                style={{ backgroundColor: "var(--brand)", opacity: 0.6 }}
              />
              {b}
            </li>
          ))}
        </ul>

        {/* Metrics */}
        <div className="flex flex-wrap gap-3 mb-6">
          {project.metrics.map((m) => (
            <div key={m.label} className="px-3 py-1.5 rounded-lg bg-white/4 border border-white/5">
              <span className="text-xs text-neutral-500">{m.label}: </span>
              <span className="text-xs font-semibold text-white">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Stack chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-xs px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-400 border border-white/4
                         transition-colors duration-200 hover:border-[#0fbf9255] hover:text-neutral-200"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Action row */}
        <div className="flex flex-wrap items-center gap-3">
          {project.links.demo && (
            <button
              onClick={toggleDemo}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-all duration-300"
              style={
                showDemo
                  ? { backgroundColor: "var(--brand)", color: "#0a0a0a", borderColor: "var(--brand)" }
                  : { backgroundColor: "transparent", color: "var(--brand)", borderColor: "rgba(15,191,146,0.4)" }
              }
            >
              {!showDemo && (
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--brand)" }} />
              )}
              {showDemo ? "Close demo" : "Live demo"}
              <ChevronIcon className={`transition-transform duration-300 ${showDemo ? "rotate-90" : "rotate-0"}`} />
            </button>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <GithubIcon width="14" height="14" />
              Source code
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors inline-flex items-center gap-1"
            >
              Open in new tab <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      {/* Embedded live demo — smooth height transition */}
      {project.links.demo && (
        <div
          className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
          style={{ maxHeight: showDemo ? "580px" : "0px" }}
        >
          <div className="border-t border-white/5">
            <div className="relative bg-neutral-950" style={{ height: "560px" }}>
              {/* Loading overlay */}
              {!loaded && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-neutral-950">
                  <span
                    className="w-7 h-7 rounded-full border-2 border-neutral-800 animate-spin"
                    style={{ borderTopColor: "var(--brand)" }}
                  />
                  <p className="text-xs text-neutral-500 text-center px-10 leading-relaxed">
                    Loading live preview — free-tier servers can take up to 30s to wake up
                  </p>
                </div>
              )}

              {/* Fake browser chrome */}
              <div className="absolute top-3 left-4 flex items-center gap-1.5 z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="ml-2 text-xs text-neutral-600 font-mono truncate max-w-[80%]">
                  {project.links.demo}
                </span>
              </div>

              {showDemo && (
                <iframe
                  key={project.links.demo}
                  src={project.links.demo}
                  onLoad={() => setLoaded(true)}
                  className="w-full h-full pt-8"
                  title={`${project.title} live demo`}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
