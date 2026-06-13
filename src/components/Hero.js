import { stats } from "@/data/projects";

export default function Hero() {
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

      <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-20 w-full">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-brand/30 bg-brand/5 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          <span className="text-xs font-medium text-brand tracking-wide">
            Open to full-stack & data science roles
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6 animate-fade-up">
          I build things that
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #0fbf92 0%, #5ee9c5 100%)",
            }}
          >
            think and scale.
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg text-neutral-400 max-w-xl leading-relaxed mb-10 animate-fade-up animate-delay-100">
          M. Mohan Devendra — M.Sc. Data Science graduate from GITAM University.
          I ship full-stack applications, deep learning systems, and data pipelines
          that go from idea to production.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-20 animate-fade-up animate-delay-200">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand text-neutral-950 font-semibold text-sm hover:bg-brand-500 transition-all hover:scale-105 active:scale-100"
            style={{ backgroundColor: "var(--brand)" }}
          >
            See my work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-neutral-300 text-sm hover:border-white/30 hover:text-white transition-all"
          >
            Get in touch
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden max-w-xl animate-fade-up animate-delay-300">
          {stats.map((s) => (
            <div key={s.label} className="bg-neutral-950 px-6 py-5">
              <div className="text-2xl font-semibold text-white mb-1">{s.value}</div>
              <div className="text-xs text-neutral-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animate-delay-500">
        <span className="text-xs text-neutral-600 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-neutral-600 to-transparent" />
      </div>
    </section>
  );
}
