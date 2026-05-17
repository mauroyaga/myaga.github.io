import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const QUIMICA = [
  'Análise e controle de qualidade',
  'Desenvolvimento de FDS (NR-26, ABNT)',
  'Ensaios físico-químicos e registros técnicos',
  'Processos de fabricação de tintas',
  'CRQ ativo',
]

const TECNOLOGIA = [
  'Aplicações com IA generativa e RAG',
  'Automação de processos operacionais',
  'Desenvolvimento orientado ao problema real',
  'Integração de dados industriais e sistemas digitais',
  'Prototipagem e entrega de MVPs funcionais',
]

export function Competencias() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="competencias" ref={ref} className="bg-[#131318] py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6366f1] mb-4"
          >
            Competências
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl md:text-4xl text-zinc-100"
          >
            Onde os dois mundos se encontram.
          </motion.h2>
        </div>

        {/* Duas colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">

          {/* Química */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl bg-[#1c1c22] border border-white/8 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#34d399]/15 flex items-center justify-center">
                <IconQuimica />
              </div>
              <h3 className="font-semibold text-zinc-100">Química & Laboratório</h3>
            </div>
            <ul className="space-y-3">
              {QUIMICA.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                  className="flex items-start gap-3 text-sm text-zinc-400"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#60a5fa] flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tecnologia */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl bg-[#1c1c22] border border-white/8 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#6366f1]/15 flex items-center justify-center">
                <IconTech />
              </div>
              <h3 className="font-semibold text-zinc-100">Tecnologia & Desenvolvimento</h3>
            </div>
            <ul className="space-y-3">
              {TECNOLOGIA.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                  className="flex items-start gap-3 text-sm text-zinc-400"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#60a5fa] flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function IconQuimica() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-[#34d399]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3v7.5L5.5 17A2 2 0 007.36 20h9.28a2 2 0 001.86-3L15 10.5V3" />
      <path d="M9 3h6M7 14h10" />
    </svg>
  )
}

function IconTech() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-[#6366f1]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M12 5l-2 14" />
    </svg>
  )
}
