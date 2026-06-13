export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono text-brand tracking-widest uppercase">03</span>
          <h2 className="text-2xl font-semibold text-white">About</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div>
            <p className="text-neutral-400 leading-relaxed mb-4">
              I'm Mohan — a full-stack developer and data scientist based in Visakhapatnam, India.
              I hold an M.Sc. in Data Science from GITAM University, where my thesis applied
              deep learning to satellite imagery to measure green space inequity in Mumbai's
              informal settlements.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-4">
              I care about building things that actually work in production — not just in notebooks.
              That means clean APIs, maintainable frontends, and ML systems that handle real data at real scale.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              I'm currently seeking roles in full-stack engineering, data science, or applied ML
              where I can keep shipping things that matter.
            </p>
          </div>

          {/* Education & certs */}
          <div className="space-y-4">
            <div className="p-5 rounded-xl border border-white/5 bg-neutral-900/30">
              <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Education</div>
              <div className="text-white font-medium mb-0.5">M.Sc. Data Science</div>
              <div className="text-sm text-neutral-400">GITAM (Deemed to be University), Visakhapatnam</div>
              <div className="text-xs text-neutral-600 mt-1">2024–2025</div>
            </div>

            <div className="p-5 rounded-xl border border-white/5 bg-neutral-900/30">
              <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Certification</div>
              <div className="text-white font-medium mb-0.5">IBM Data Science Professional Certificate</div>
              <div className="text-sm text-neutral-400">Capstone: IT Job Market Analysis — IBM Cognos, SQL, Python</div>
            </div>

            <div className="p-5 rounded-xl border border-white/5 bg-neutral-900/30">
              <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Research</div>
              <div className="text-white font-medium mb-0.5">VGG19-UNet for Urban Land Cover Segmentation</div>
              <div className="text-sm text-neutral-400">93.72% accuracy · 8,910 satellite patches · Pleiades-1A imagery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
