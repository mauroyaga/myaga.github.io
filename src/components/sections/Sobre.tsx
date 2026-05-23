import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function Sobre() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="sobre" ref={ref} className="bg-[#131318] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-y-8 md:gap-8 items-center">

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
                12 anos no ramo das tintas. Da bancada à bancada: de colorista em
                fábrica ao laboratório de análise e controle de qualidade. No meio
                do caminho, enxerguei processos que poderiam ser melhores e decidi
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
                documentos. Escalou para aplicações com IA. Com 8 anos de laboratório,
                experiência profissional e formação em ADS, hoje me posiciono
                onde os dois mundos se encontram: entendo o laboratório e o chão de
                fábrica por dentro e construo a ferramenta que eles precisam.
              </motion.p>
            </div>

            {/* Assinatura */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 pt-6 border-t border-white/8 max-w-[620px]"
            >
              <p className="text-zinc-100 font-semibold text-sm mb-1">Mauro Cesar Yaga Junior</p>
              <p className="text-zinc-500 text-[12px]">Técnico em Química | Analista e Desenvolvedor de Sistemas</p>
              <p className="text-zinc-600 text-[11px] mt-1 font-mono">CRQ 09407428 · 9ª Região</p>
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
    <div
      className="w-full max-w-[420px] aspect-[4/3] overflow-hidden border border-white/8"
      style={{ borderRadius: '16px' }}
    >
      <img
        src="/imagem-sobre-alquimista.png"
        alt="Foto — Mauro Yaga"
        className="w-full h-full object-cover object-center"
        draggable={false}
      />
    </div>
  )
}
