import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function Metodo() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="metodo"
      ref={ref}
      className="relative bg-[#0f0f0f] py-24 md:py-36 overflow-hidden"
    >
      {/* Favo de hexágonos original */}
      <img
        src="/hexagon_honeycomb.svg"
        aria-hidden
        draggable={false}
        className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 h-[110%] w-auto opacity-[0.10] md:opacity-[0.05]"
      />

      {/* Glow central */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div className="w-[500px] h-[500px] rounded-full bg-[#60a5fa]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="max-w-[720px] mx-auto flex flex-col items-center text-center gap-8">

          {/* Logo animado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <LogoAnimado />
          </motion.div>

          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#60a5fa]/60"
          >
            O método
          </motion.span>

          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-zinc-100 leading-tight -mt-4"
          >
            Alquimia é a arte de transformar matéria bruta em algo refinado.
          </motion.h2>

          {/* Corpo */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="space-y-4 text-[#71717a] text-base md:text-lg leading-relaxed"
          >
            <p>
              É também a ideia por trás de cada solução que desenvolvo.
            </p>
            <p>
              Analiso processos, mapeio o problema real — não o sintoma — e construo
              soluções que melhoram a experiência de quem trabalha com elas, todos os dias.
              A inteligência artificial entra como ferramenta, não como promessa.
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-2 flex flex-wrap justify-center gap-2"
          >
            {['Analisar.', 'Projetar.', 'Transformar.', 'Com inteligência aplicada.'].map((step, i) => (
              <span
                key={step}
                className={[
                  'px-4 py-2 rounded-lg text-sm font-medium border',
                  i < 3
                    ? 'border-white/10 text-zinc-300 bg-white/5'
                    : 'border-[#6366f1]/30 text-[#6366f1] bg-[#6366f1]/10',
                ].join(' ')}
              >
                {step}
              </span>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function LogoAnimado() {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      fill="none"
      className="w-20 h-20"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      style={{
        filter: 'drop-shadow(0 0 12px rgba(96,165,250,0.5)) drop-shadow(0 0 32px rgba(96,165,250,0.2))',
      }}
    >
      <polygon
        points="60,4 108,32 108,88 60,116 12,88 12,32"
        stroke="#60a5fa"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="60" r="26" stroke="#60a5fa" strokeWidth="4" />
      {[
        [60, 4], [108, 32], [108, 88],
        [60, 116], [12, 88], [12, 32],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="5" fill="#60a5fa" />
          <circle cx={cx} cy={cy} r="2.5" fill="#0f0f0f" />
        </g>
      ))}
    </motion.svg>
  )
}

