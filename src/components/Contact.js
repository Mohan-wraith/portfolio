import { projects } from "@/data/projects";
import { GithubIcon, LinkedinIcon, MailIcon, ExternalIcon } from "./Icons";

const cinephile = projects.find((p) => p.id === "cinephile-tv");
const thesis = projects.find((p) => p.id === "gos-mumbai");

function LinkCard({ icon, label, sub, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-neutral-900/30
                 hover:border-white/10 hover:bg-neutral-900/50 transition-all duration-200 group"
    >
      <div className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0
                       text-neutral-300 group-hover:text-white transition-colors">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-sm font-medium text-white truncate">{label}</div>
        <div className="text-xs text-neutral-500 truncate">{sub}</div>
      </div>
      <ExternalIcon className="ml-auto text-neutral-600 group-hover:text-neutral-300 transition-colors flex-shrink-0" />
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono text-brand tracking-widest uppercase">04</span>
          <h2 className="text-2xl font-semibold text-white">Contact</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-3xl font-semibold text-white leading-tight mb-4">
              Let's build something<br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #0fbf92, #5ee9c5)" }}
              >
                worth shipping.
              </span>
            </p>
            <p className="text-neutral-400 leading-relaxed">
              I'm actively looking for full-stack, data science, or applied ML roles.
              If you have an interesting problem or an open position, I'd like to hear about it.
            </p>
          </div>

          <div className="space-y-3">
            {/* Primary: Email */}
            <a
              href="mailto:mohandevendra66666@gmail.com"
              className="flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 group"
              style={{ borderColor: "rgba(15,191,146,0.2)", backgroundColor: "rgba(15,191,146,0.05)" }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(15,191,146,0.15)", color: "var(--brand)" }}
              >
                <MailIcon />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-medium text-white">Email</div>
                <div className="text-xs text-neutral-400 truncate">mohandevendra66666@gmail.com</div>
              </div>
              <ExternalIcon className="ml-auto text-neutral-500 group-hover:text-neutral-300 transition-colors flex-shrink-0" />
            </a>

            {/* Secondary links grid */}
            <div className="grid grid-cols-2 gap-3">
              <LinkCard
                icon={<GithubIcon />}
                label="GitHub"
                sub="Mohan-wraith"
                href="https://github.com/Mohan-wraith"
              />
              <LinkCard
                icon={<LinkedinIcon />}
                label="LinkedIn"
                sub="mohan-devendra"
                href="https://www.linkedin.com/in/mohan-devendra/"
              />
              <LinkCard
                icon={<span className="text-xs font-bold" style={{ color: "var(--brand)" }}>CT</span>}
                label="Cinephile TV"
                sub="Live app"
                href={cinephile.links.demo}
              />
              <LinkCard
                icon={<span className="text-xs font-bold" style={{ color: "var(--brand)" }}>GM</span>}
                label="GOS Mapper"
                sub="Thesis app"
                href={thesis.links.demo}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
