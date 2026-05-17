import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
}

export function Hero() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen bg-[#0f0f0f] flex items-center overflow-hidden">

      {/* Favo de hexágonos original */}
      <img
        src="/hexagon_honeycomb.svg"
        aria-hidden
        draggable={false}
        className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 h-[110%] w-auto opacity-[0.14] md:opacity-[0.07]"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-12 gap-6 items-center">

          {/* Texto — 7 colunas (≈ 61.8%) */}
          <div className="col-span-12 md:col-span-7 flex flex-col gap-6">

            {/* Tag */}
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-[11px] font-medium tracking-[0.12em] uppercase text-zinc-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa]" />
              Ecossistema Alquimista
            </motion.span>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.25}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-zinc-100 leading-tight"
            >
              Do chão de fábrica ao código — transformo processos em soluções digitais.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="text-base md:text-lg text-zinc-400 max-w-[520px] leading-relaxed"
            >
              Mauro Yaga — Técnico em Química e Analista de Sistemas.
              <br />
              Transformo processos em soluções com IA.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.55}
              className="flex items-center gap-4 flex-wrap"
            >
              <button
                onClick={() => scrollTo('projetos')}
                className="px-6 py-3 rounded-xl bg-[#6366f1] text-white text-sm font-medium hover:bg-[#4f46e5] transition-all hover:scale-[1.02]"
              >
                Conheça o trabalho
              </button>
              <button
                onClick={() => scrollTo('sobre')}
                className="text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1.5"
              >
                Sobre mim
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          </div>

          {/* Visual — 5 colunas (≈ 38.2%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="hidden md:flex col-span-5 items-center justify-center"
          >
            <LogoHero />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('sobre')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.button>
    </section>
  )
}

function LogoHero() {
  return (
    <motion.div
      animate={{ scale: [1, 1.03, 1] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      className="flex flex-col items-center gap-6"
    >
      <motion.svg
        viewBox="0 0 200 200"
        fill="none"
        className="w-48 h-48 lg:w-64 lg:h-64"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
        style={{
          filter: 'drop-shadow(0 0 24px rgba(96,165,250,0.35)) drop-shadow(0 0 64px rgba(96,165,250,0.15))',
        }}
      >
        <polygon
          points="100,8 178,54 178,146 100,192 22,146 22,54"
          stroke="#60a5fa"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <circle cx="100" cy="100" r="42" stroke="#60a5fa" strokeWidth="6" />
        {/* Juntas nos vértices */}
        {[
          [100, 8], [178, 54], [178, 146],
          [100, 192], [22, 146], [22, 54],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="8" fill="#60a5fa" />
            <circle cx={cx} cy={cy} r="4" fill="#0f0f0f" />
          </g>
        ))}
      </motion.svg>

      <div className="text-center">
        <p
          className="text-2xl font-black tracking-[0.25em] text-white"
          style={{ textShadow: '0 0 24px rgba(96,165,250,0.4)' }}
        >
          ALQUIMISTA
        </p>
        <p className="mt-1 text-[10px] font-semibold tracking-[0.35em] text-[#60a5fa]/50 uppercase">
          Mauro Yaga
        </p>
      </div>
    </motion.div>
  )
}

