import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle, Mail, Linkedin } from 'lucide-react'
import { CONTATO } from '../../config/contato'

const LINKS = [
  {
    label: 'WhatsApp',
    desc: 'Resposta rápida',
    href: CONTATO.whatsapp,
    icone: <MessageCircle className="w-5 h-5" />,
    cor: '#34d399',
    bg: '#34d39915',
  },
  {
    label: 'E-mail',
    desc: 'trefliptech@gmail.com',
    href: CONTATO.email,
    icone: <Mail className="w-5 h-5" />,
    cor: '#60a5fa',
    bg: '#60a5fa15',
  },
{
    label: 'LinkedIn',
    desc: 'mauroyaga',
    href: CONTATO.linkedin,
    icone: <Linkedin className="w-5 h-5" />,
    cor: '#60a5fa',
    bg: '#60a5fa15',
  },
]

export function Contato() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contato" ref={ref} className="relative bg-[#0f0f0f] py-24 md:py-32 overflow-hidden">

      {/* Glow de fundo */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6366f1]/8 blur-3xl rounded-full" aria-hidden />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-y-8 md:gap-8 items-center">

          {/* Texto — esquerda */}
          <div className="col-span-12 md:col-span-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6366f1] mb-4"
            >
              Contato
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl text-zinc-100 leading-tight mb-6"
            >
              Vamos conversar.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#71717a] leading-relaxed max-w-[420px]"
            >
              Tem um processo para simplificar ou uma ideia para tirar do papel? É por aqui.
            </motion.p>
          </div>

          {/* Links — direita */}
          <div className="col-span-12 md:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-white/8 hover:border-white/15 bg-white/5 hover:bg-white/8 transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: link.bg, color: link.cor }}
                  >
                    {link.icone}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-zinc-200">{link.label}</p>
                    <p className="text-xs text-zinc-600 truncate">{link.desc}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
