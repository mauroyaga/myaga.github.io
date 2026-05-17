import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, FlaskConical, BarChart3, LineChart, Beaker } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Projeto {
  slug: string
  nome: string
  tags: string[]
  descricao: string
  icone: React.ReactNode
  cor: string
  corTexto: string
  rota: string
  emBreve?: boolean
}

const PROJETOS: Projeto[] = [
  {
    slug: 'fds',
    nome: 'FDS Digital',
    tags: ['Química', 'Conformidade', 'IA'],
    descricao:
      'Gestão de fichas de segurança química com IA — fluxo guiado, rastreável e assistido pelo químico responsável.',
    icone: <FlaskConical className="w-7 h-7" />,
    cor: '#34d399',
    corTexto: '#059669',
    rota: '/projetos/fds',
  },
  {
    slug: 'analise',
    nome: 'Análise Lab',
    tags: ['Laboratório', 'Dados', 'Automação'],
    descricao:
      'Resultados laboratoriais centralizados e em tempo real — fim das planilhas isoladas.',
    icone: <BarChart3 className="w-7 h-7" />,
    cor: '#60a5fa',
    corTexto: '#2563eb',
    rota: '/projetos/analise',
  },
  {
    slug: 'destilador',
    nome: 'Destilador',
    tags: ['ERP', 'Dashboards', 'Decisão'],
    descricao:
      'Transforma relatórios de ERP em dashboards interativos para decisão — sem conexão direta ao banco.',
    icone: <LineChart className="w-7 h-7" />,
    cor: '#a78bfa',
    corTexto: '#7c3aed',
    rota: '/projetos/destilador',
  },
  {
    slug: 'tinta',
    nome: 'Em desenvolvimento',
    tags: ['Tinta', 'Fórmula', 'IA'],
    descricao:
      'Suporte inteligente ao desenvolvimento de fórmulas de tinta. Próximo módulo do ecossistema.',
    icone: <Beaker className="w-7 h-7" />,
    cor: '#fbbf24',
    corTexto: '#d97706',
    rota: '/',
    emBreve: true,
  },
]

export function Projetos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projetos" ref={ref} className="bg-[#0f0f0f] py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6366f1] mb-4"
          >
            Soluções
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl md:text-4xl text-zinc-100 mb-3"
          >
            Cada projeto nasce de um processo real.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-zinc-500 max-w-[520px]"
          >
            Cada solução foi feita para ser usada, não apenas demonstrada.
          </motion.p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROJETOS.map((projeto, i) => (
            <CardProjeto key={projeto.slug} projeto={projeto} index={i} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  )
}

function CardProjeto({ projeto, index, inView }: { projeto: Projeto; index: number; inView: boolean }) {
  const conteudo = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className={[
        'group relative flex flex-col rounded-2xl bg-[#131316] border border-white/8 overflow-hidden',
        'transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:border-white/15',
        projeto.emBreve ? 'opacity-60' : '',
      ].join(' ')}
    >
      {/* Área visual */}
      <div
        className="h-[180px] flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: `${projeto.cor}18` }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: `${projeto.cor}25`, color: projeto.corTexto }}
        >
          {projeto.icone}
        </div>
        {projeto.emBreve && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-[#fbbf24]/20 text-[#d97706]">
            Em breve
          </span>
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-1 p-5 gap-3 min-w-0 overflow-hidden">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {projeto.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-semibold uppercase tracking-wide text-zinc-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Nome */}
        <h3 className="font-display text-xl text-zinc-100 leading-snug break-words">
          {projeto.nome}
        </h3>

        {/* Descrição */}
        <div className="flex-1 min-h-0 overflow-hidden">
          <p className="text-sm text-zinc-400 leading-relaxed">
            {projeto.descricao}
          </p>
        </div>

        {/* Link */}
        {!projeto.emBreve && (
          <div className="flex items-center gap-1.5 text-sm font-medium text-[#6366f1] group-hover:gap-2.5 transition-all mt-1">
            Ver projeto <ArrowRight className="h-4 w-4" />
          </div>
        )}
      </div>
    </motion.div>
  )

  if (projeto.emBreve) return conteudo

  return <Link to={projeto.rota}>{conteudo}</Link>
}
