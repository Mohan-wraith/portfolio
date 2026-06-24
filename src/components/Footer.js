import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="#" className="text-sm font-semibold text-white hover:text-[#0fbf92] transition-colors">
          Mohan<span style={{ color: "var(--brand)" }}>.</span>
        </a>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Mohan-wraith"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-500 hover:text-white transition-colors duration-200"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/mohan-devendra/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-500 hover:text-white transition-colors duration-200"
          >
            <LinkedinIcon />
          </a>
          <a
            href="mailto:mohandevendra66666@gmail.com"
            aria-label="Email"
            className="text-neutral-500 hover:text-white transition-colors duration-200"
          >
            <MailIcon />
          </a>
        </div>

        <p className="text-xs text-neutral-600">&copy; {year} Mohan Devendra</p>
      </div>
    </footer>
  );
}
