import { skills } from "@/data/projects";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-xs font-mono text-brand tracking-widest uppercase">02</span>
            <h2 className="text-2xl font-semibold text-white">Skills &amp; Stack</h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], idx) => (
            <Reveal key={category} delay={idx * 70}>
              <Spotlight className="group h-full">
                <div className="p-5 rounded-xl border border-white/5 bg-neutral-900/30 group-hover:border-white/10 transition-colors duration-300 h-full">
                  <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="text-sm px-3 py-1 rounded-md bg-neutral-800/80 text-neutral-300 border border-white/4
                                   transition-all duration-200 hover:border-[#0fbf9255] hover:text-white hover:-translate-y-0.5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
