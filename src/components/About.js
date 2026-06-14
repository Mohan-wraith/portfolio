import Reveal from "./Reveal";
import { resumeUrl } from "@/data/projects";

const certifications = [
  { name: "Microsoft Azure Data Scientist Associate (DP-100)", issuer: "Microsoft", date: "Aug 2025" },
  { name: "Google Advanced Data Analytics", issuer: "Google", date: "Jun 2025" },
  { name: "Meta Data Analyst", issuer: "Meta", date: "Jul 2025" },
  { name: "IBM Data Analyst", issuer: "IBM", date: "Mar 2025" },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-xs font-mono text-brand tracking-widest uppercase">03</span>
            <h2 className="text-2xl font-semibold text-white">About</h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <Reveal delay={100}>
            <p className="text-neutral-400 leading-relaxed mb-4">
              I'm Mohan — an aspiring data scientist based in Visakhapatnam, India,
              with an M.Sc. in Data Science from GITAM University. My thesis applied
              deep learning to satellite imagery to measure green and open space
              inequity in Mumbai's informal settlements, and that's the kind of
              problem I want to keep working on: real data, real constraints, real impact.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-4">
              I care about building things that actually work outside a notebook —
              models that get deployed, pipelines that handle messy real-world data,
              and dashboards that someone other than me can actually use.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-6">
              I'm currently looking for my first full-time role in data science,
              machine learning, or applied research — somewhere I can keep learning
              while shipping things that matter.
            </p>

            <a
              href={resumeUrl}
              download
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand/30 text-sm font-medium transition-all duration-300 hover:bg-brand hover:text-neutral-950"
              style={{ color: "var(--brand)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-y-0.5">
                <path d="M7 1v8M3.5 6L7 9.5 10.5 6M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download full resume (PDF)
            </a>
          </Reveal>

          {/* Education & certs */}
          <div className="space-y-4">
            <Reveal delay={150}>
              <div className="p-5 rounded-xl border border-white/5 bg-neutral-900/30 transition-colors duration-300 hover:border-violet-400/20">
                <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Education</div>
                <div className="text-white font-medium mb-0.5">M.Sc. Data Science</div>
                <div className="text-sm text-neutral-400">GITAM University, Visakhapatnam</div>
                <div className="text-xs text-neutral-600 mt-1">Jul 2024 – May 2026</div>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="p-5 rounded-xl border border-white/5 bg-neutral-900/30 transition-colors duration-300 hover:border-violet-400/20">
                <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Research</div>
                <div className="text-white font-medium mb-0.5">VGG19-UNet for Urban Land Cover Segmentation</div>
                <div className="text-sm text-neutral-400">93.72% accuracy · 8,910 satellite patches · Pleiades-1A imagery</div>
              </div>
            </Reveal>

            <Reveal delay={350}>
              <div className="p-5 rounded-xl border border-white/5 bg-neutral-900/30 transition-colors duration-300 hover:border-brand/20">
                <div className="text-xs text-neutral-500 uppercase tracking-wider mb-3">Certifications</div>
                <div className="space-y-2.5">
                  {certifications.map((c) => (
                    <div key={c.name} className="flex items-start justify-between gap-3">
                      <span className="text-sm text-neutral-300 leading-snug">{c.name}</span>
                      <span className="text-xs text-neutral-600 whitespace-nowrap flex-shrink-0 mt-0.5">{c.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
