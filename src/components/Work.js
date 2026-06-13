import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section id="work" className="py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-brand tracking-widest uppercase">01</span>
          <h2 className="text-2xl font-semibold text-white">Selected Work</h2>
        </div>
        <p className="text-neutral-500 text-sm mb-12 ml-10">
          Three projects — each shipped to production, each solving a real problem.
        </p>

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
