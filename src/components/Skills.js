import { skills } from "@/data/projects";

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono text-brand tracking-widest uppercase">02</span>
          <h2 className="text-2xl font-semibold text-white">Skills & Stack</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="p-5 rounded-xl border border-white/5 bg-neutral-900/30 hover:border-white/10 transition-colors"
            >
              <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 rounded-md bg-neutral-800/80 text-neutral-300 border border-white/4"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
