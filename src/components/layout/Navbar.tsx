import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { CONTATO } from '../../config/contato'

const NAV_LINKS = [
  { label: 'Sobre', href: 'sobre' },
  { label: 'Projetos', href: 'projetos' },
  { label: 'Competências', href: 'competencias' },
  { label: 'Contato', href: 'contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(id: string) {
    setMenuOpen(false)
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0f0f0f]/95 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 flex items-center justify-between h-14 md:h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
          <LogoIcon />
          <div className="leading-tight">
            <span className="block text-[11px] font-bold tracking-[0.15em] text-zinc-100 uppercase">
              Alquimista
            </span>
            <span className="block text-[9px] font-medium tracking-[0.12em] text-zinc-600 uppercase">
              Mauro Yaga
            </span>
          </div>
        </Link>

        {/* Links — desktop */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={CONTATO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-[#6366f1] text-white hover:bg-[#4f46e5] transition-all hover:scale-[1.02]"
          >
            Vamos conversar
          </a>

          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-[#0f0f0f]/98 backdrop-blur-md border-t border-white/10 px-5 py-4 flex flex-col gap-1"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="text-left px-3 py-3 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {label}
              </button>
            ))}
            <a
              href={CONTATO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center px-4 py-3 rounded-lg text-sm font-medium bg-[#6366f1] text-white hover:bg-[#4f46e5] transition-colors"
            >
              Vamos conversar
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function LogoIcon() {
  return (
    <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 flex-shrink-0">
      <polygon
        points="18,2 32,10 32,26 18,34 4,26 4,10"
        stroke="#60a5fa"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="18" r="7.4" stroke="#60a5fa" strokeWidth="2.2" />
    </svg>
  )
}
