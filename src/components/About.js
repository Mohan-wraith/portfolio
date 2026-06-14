import Reveal from "./Reveal";

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
              deep learning to satellite imagery to measure green space inequity in
              Mumbai's informal settlements, and that's the kind of problem I want
              to keep working on: real data, real constraints, real impact.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-4">
              I care about building things that actually work outside a notebook —
              models that get deployed, pipelines that handle messy real-world data,
              and dashboards that someone other than me can actually use.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              I'm currently looking for my first full-time role in data science,
              machine learning, or applied research — somewhere I can keep learning
              while shipping things that matter.
            </p>
          </Reveal>

          {/* Education & certs */}
          <div className="space-y-4">
            <Reveal delay={150}>
              <div className="p-5 rounded-xl border border-white/5 bg-neutral-900/30 transition-colors duration-300 hover:border-violet-400/20">
                <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Education</div>
                <div className="text-white font-medium mb-0.5">M.Sc. Data Science</div>
                <div className="text-sm text-neutral-400">GITAM (Deemed to be University), Visakhapatnam</div>
                <div className="text-xs text-neutral-600 mt-1">2024–2025</div>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="p-5 rounded-xl border border-white/5 bg-neutral-900/30 transition-colors duration-300 hover:border-brand/20">
                <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Certification</div>
                <div className="text-white font-medium mb-0.5">IBM Data Science Professional Certificate</div>
                <div className="text-sm text-neutral-400">Capstone: IT Job Market Analysis — IBM Cognos, SQL, Python</div>
              </div>
            </Reveal>

            <Reveal delay={350}>
              <div className="p-5 rounded-xl border border-white/5 bg-neutral-900/30 transition-colors duration-300 hover:border-violet-400/20">
                <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Research</div>
                <div className="text-white font-medium mb-0.5">VGG19-UNet for Urban Land Cover Segmentation</div>
                <div className="text-sm text-neutral-400">93.72% accuracy · 8,910 satellite patches · Pleiades-1A imagery</div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
