import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { X, Check } from 'lucide-react'

interface OQueMudouProps {
  antes: string[]
  depois: string[]
}

export function OQueMudou({ antes, depois }: OQueMudouProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-[#0f0f0f] py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6366f1] mb-10"
        >
          A transformação
        </motion.span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-[#131316] border border-[#fbbf24]/20 p-6 md:p-8"
          >
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#fbbf24] mb-5">Antes</p>
            <ul className="space-y-3">
              {antes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                  <X className="w-4 h-4 text-[#fbbf24]/70 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-[#131316] border border-[#34d399]/20 p-6 md:p-8"
          >
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#34d399] mb-5">Depois</p>
            <ul className="space-y-3">
              {depois.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                  <Check className="w-4 h-4 text-[#34d399]/70 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
