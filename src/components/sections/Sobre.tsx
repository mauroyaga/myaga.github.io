import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function Sobre() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="sobre" ref={ref} className="bg-[#131318] py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-8 items-center">

          {/* Texto — 7 colunas */}
          <div className="col-span-12 md:col-span-7 order-2 md:order-1">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6366f1] mb-4"
            >
              Sobre
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-3xl md:text-4xl text-zinc-100 leading-tight mb-6"
            >
              Da bancada ao código.
            </motion.h2>

            <div className="space-y-4 max-w-[620px]">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-zinc-400 leading-relaxed"
              >
                12 anos no ramo das tintas. Da bancada à bancada — de colorista em
                fábrica ao laboratório de análise e controle de qualidade. No meio
                do caminho, enxerguei processos que poderiam ser melhores — e decidi
                ser quem os melhoraria.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-zinc-400 leading-relaxed"
              >
                Formei-me Técnico em Química e fui buscar a tecnologia não para sair
                da química, mas para aplicá-la. Começou com planilhas substituindo
                documentos. Escalou para aplicações com IA. Com CRQ ativo e formação
                em ADS, hoje me posiciono onde os dois mundos se encontram — entendo
                o laboratório por dentro e construo a ferramenta que ele precisa.
              </motion.p>
            </div>

            {/* Destaques */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {['12 anos em tintas', '8 anos em laboratório', 'CRQ ativo', 'ADS'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-[12px] font-medium text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Visual — 5 colunas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="col-span-12 md:col-span-5 order-1 md:order-2 flex justify-center"
          >
            <SobreIllustration />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function SobreIllustration() {
  return (
    <div className="w-full max-w-[340px] aspect-square rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center relative overflow-hidden">
      <div className="flex flex-col items-center gap-3 text-center px-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#e07a5f]/20 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-[#e07a5f]" strokeWidth="1.8">
              <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
            </svg>
          </div>
          <div className="w-8 h-0.5 bg-[#60a5fa]/40 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-r-2 border-t-2 border-[#60a5fa]/40 rotate-45" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#6366f1]/20 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-[#6366f1]" strokeWidth="1.8">
              <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M12 5l-2 14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <p className="text-[11px] text-zinc-600 tracking-wide">Química + Tecnologia</p>
      </div>
      <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[#60a5fa]/5" />
      <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-[#6366f1]/5" />
    </div>
  )
}
