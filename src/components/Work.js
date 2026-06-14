import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Work() {
  return (
    <section id="work" className="py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-brand tracking-widest uppercase">01</span>
            <h2 className="text-2xl font-semibold text-white">Selected Work</h2>
          </div>
          <p className="text-neutral-500 text-sm mb-12 ml-10">
            Research, models, and pipelines — each shipped end-to-end, each solving a real problem.
          </p>
        </Reveal>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
