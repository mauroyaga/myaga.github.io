import { Github, Linkedin } from 'lucide-react'
import { CONTATO } from '../../config/contato'

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 py-6">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Logo mínimo */}
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 36 36" fill="none" className="w-5 h-5 flex-shrink-0">
            <polygon points="18,2 32,10 32,26 18,34 4,26 4,10" stroke="#60a5fa" strokeWidth="2.2" strokeLinejoin="round" />
            <circle cx="18" cy="18" r="7.4" stroke="#60a5fa" strokeWidth="2.2" />
          </svg>
          <span className="text-[11px] text-zinc-600">
            © {new Date().getFullYear()} Mauro Yaga
          </span>
        </div>

        {/* Links sociais */}
        <div className="flex items-center gap-4">
          <a
            href={CONTATO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-300 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={CONTATO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  )
}
