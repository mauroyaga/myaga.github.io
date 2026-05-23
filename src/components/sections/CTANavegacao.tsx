import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle, Mail, Linkedin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CONTATO } from '../../config/contato'

interface ProjetoNav {
  nome: string
  descricao: string
  rota: string
  cor: string
}

interface CTANavegacaoProps {
  outrosProjetos: ProjetoNav[]
}

export function CTANavegacao({ outrosProjetos }: CTANavegacaoProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-[#0f0f0f] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-6">
              Outros projetos
            </p>
            <div className="flex flex-col gap-3">
              {outrosProjetos.map((p, i) => (
                <Link
                  key={i}
                  to={p.rota}
                  className="group flex items-start gap-4 rounded-xl bg-[#131316] border border-white/8 p-4 hover:border-white/15 transition-all"
                >
                  <div
                    className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: p.cor }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                      {p.nome}
                    </p>
                    <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{p.descricao}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 mt-0.5 flex-shrink-0 transition-colors" />
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-6">
              Contato
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-zinc-100 mb-3">
              Tem um processo parecido com esse?
            </h3>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              Construo soluções a partir do problema — se você tem um processo manual que deveria ser automatizado, faz sentido conversar.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={CONTATO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#34d399]/10 border border-[#34d399]/20 text-[#34d399] text-sm font-medium hover:bg-[#34d399]/15 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href={CONTATO.email}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-zinc-300 text-sm font-medium hover:bg-white/8 transition-colors"
              >
                <Mail className="w-4 h-4" /> trefliptech@gmail.com
              </a>
              <a
                href={CONTATO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-zinc-300 text-sm font-medium hover:bg-white/8 transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
