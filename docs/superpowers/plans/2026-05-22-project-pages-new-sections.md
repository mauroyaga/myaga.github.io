# Project Pages — Novas Seções

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adicionar as seções "O que mudou" (antes/depois qualitativo) e "CTA + Navegação entre projetos" ao final de AnalisePage, DestiladorPage e FDSPage.

**Architecture:** Dois novos componentes reutilizáveis em `src/components/sections/` — `OQueMudou` (recebe arrays `antes` e `depois`) e `CTANavegacao` (recebe array `outrosProjetos`). Cada page file importa e usa esses componentes com seus dados específicos. Dados de contato vêm de `src/config/contato.ts` já existente.

**Tech Stack:** React 18, TypeScript, Tailwind CSS 3, Framer Motion, lucide-react, react-router-dom (Link)

---

## Mapa de arquivos

| Ação | Arquivo | Responsabilidade |
|------|---------|-----------------|
| Criar | `src/components/sections/OQueMudou.tsx` | Renderiza dois cards Antes/Depois com bullets |
| Criar | `src/components/sections/CTANavegacao.tsx` | Renderiza bloco de contato + cards de outros projetos |
| Modificar | `src/pages/projetos/AnalisePage.tsx` | Importar e usar os dois novos componentes |
| Modificar | `src/pages/projetos/DestiladorPage.tsx` | Importar e usar os dois novos componentes |
| Modificar | `src/pages/projetos/FDSPage.tsx` | Importar e usar os dois novos componentes |

---

## Task 1: Criar componente OQueMudou

**Files:**
- Create: `src/components/sections/OQueMudou.tsx`

- [ ] **Step 1: Criar o arquivo do componente**

Criar `src/components/sections/OQueMudou.tsx` com o seguinte conteúdo:

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/OQueMudou.tsx
git commit -m "feat: add OQueMudou section component"
```

---

## Task 2: Criar componente CTANavegacao

**Files:**
- Create: `src/components/sections/CTANavegacao.tsx`

- [ ] **Step 1: Criar o arquivo do componente**

Criar `src/components/sections/CTANavegacao.tsx` com o seguinte conteúdo:

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/CTANavegacao.tsx
git commit -m "feat: add CTANavegacao section component"
```

---

## Task 3: Adicionar seções em AnalisePage

**Files:**
- Modify: `src/pages/projetos/AnalisePage.tsx`

A cor de acento da AnalisePage é `#60a5fa` (azul).

- [ ] **Step 1: Adicionar imports no topo de AnalisePage.tsx**

Localizar o bloco de imports (linha ~1–15). Adicionar após os imports existentes de `../../components/layout/`:

```tsx
import { OQueMudou } from '../../components/sections/OQueMudou'
import { CTANavegacao } from '../../components/sections/CTANavegacao'
```

- [ ] **Step 2: Inserir as seções na função AnalisePage**

Localizar o `return` de `AnalisePage` (linha ~13–25). Substituir:

```tsx
        <EcossistemaAnalise />
      </main>
```

por:

```tsx
        <EcossistemaAnalise />
        <OQueMudou
          antes={[
            'Resultados espalhados em planilhas isoladas por analista',
            'Sem rastreabilidade por lote — histórico dependia de memória',
            'Aprovações decididas de cabeça, sem registro formal',
            'Retrabalho manual para gerar histórico em auditorias',
          ]}
          depois={[
            'Lote identificado do início ao fim, com data e hora de liberação',
            'Alertas automáticos disparam antes de qualquer dado ser salvo',
            'Histórico de análises consultável a qualquer hora por produto ou O.F.',
            'Dashboard de qualidade em tempo real com scatter PE Real × PE Teórico',
          ]}
        />
        <CTANavegacao
          outrosProjetos={[
            {
              nome: 'FDS Digital',
              descricao: 'Gestão de fichas de segurança química com IA: fluxo guiado, rastreável e assistido pelo químico responsável.',
              rota: '/projetos/fds',
              cor: '#34d399',
            },
            {
              nome: 'Destilador',
              descricao: 'Transforma relatórios de ERP em dashboards interativos para decisão, sem conexão direta ao banco.',
              rota: '/projetos/destilador',
              cor: '#a78bfa',
            },
          ]}
        />
      </main>
```

- [ ] **Step 3: Verificar que o app compila**

```bash
cd /home/myaga/projetos-dev/site-portfolio-mauro && npm run build 2>&1 | tail -20
```

Esperado: build sem erros de TypeScript.

- [ ] **Step 4: Commit**

```bash
git add src/pages/projetos/AnalisePage.tsx
git commit -m "feat(analise): add O que mudou and CTA sections"
```

---

## Task 4: Adicionar seções em DestiladorPage

**Files:**
- Modify: `src/pages/projetos/DestiladorPage.tsx`

A cor de acento da DestiladorPage é `#a78bfa` (roxo).

- [ ] **Step 1: Adicionar imports no topo de DestiladorPage.tsx**

Localizar o bloco de imports. Adicionar após os imports existentes de `../../components/layout/`:

```tsx
import { OQueMudou } from '../../components/sections/OQueMudou'
import { CTANavegacao } from '../../components/sections/CTANavegacao'
```

- [ ] **Step 2: Inserir as seções na função DestiladorPage**

Localizar o `return` de `DestiladorPage`. Substituir:

```tsx
        <EcossistemaDestilador />
      </main>
```

por:

```tsx
        <EcossistemaDestilador />
        <OQueMudou
          antes={[
            'Relatórios do ERP parados em arquivos, sem análise possível',
            'Extração de dados feita manualmente em Excel a cada período',
            'Perguntas sobre os dados respondidas fora do sistema, sem contexto',
            'Sem visão consolidada do período — cada arquivo, uma ilha',
          ]}
          depois={[
            'Upload único transforma o relatório em dashboard interativo',
            'IA responde dúvidas com contexto real dos dados do arquivo',
            'Histórico de conversas por arquivo — rastreável e consultável',
            'Inteligência sobre os dados sem conexão direta ao banco de dados',
          ]}
        />
        <CTANavegacao
          outrosProjetos={[
            {
              nome: 'FDS Digital',
              descricao: 'Gestão de fichas de segurança química com IA: fluxo guiado, rastreável e assistido pelo químico responsável.',
              rota: '/projetos/fds',
              cor: '#34d399',
            },
            {
              nome: 'Análise Lab',
              descricao: 'Resultados laboratoriais centralizados em tempo real. Fim das planilhas isoladas.',
              rota: '/projetos/analise',
              cor: '#60a5fa',
            },
          ]}
        />
      </main>
```

- [ ] **Step 3: Verificar que o app compila**

```bash
cd /home/myaga/projetos-dev/site-portfolio-mauro && npm run build 2>&1 | tail -20
```

Esperado: build sem erros de TypeScript.

- [ ] **Step 4: Commit**

```bash
git add src/pages/projetos/DestiladorPage.tsx
git commit -m "feat(destilador): add O que mudou and CTA sections"
```

---

## Task 5: Adicionar seções em FDSPage

**Files:**
- Modify: `src/pages/projetos/FDSPage.tsx`

A cor de acento da FDSPage é `#34d399` (verde).

- [ ] **Step 1: Adicionar imports no topo de FDSPage.tsx**

Localizar o bloco de imports. Adicionar após os imports existentes de `../../components/layout/`:

```tsx
import { OQueMudou } from '../../components/sections/OQueMudou'
import { CTANavegacao } from '../../components/sections/CTANavegacao'
```

- [ ] **Step 2: Inserir as seções na função FDSPage**

Localizar o `return` de `FDSPage`. Substituir:

```tsx
        <EcossistemaFDS />
      </main>
```

por:

```tsx
        <EcossistemaFDS />
        <OQueMudou
          antes={[
            'FDS preenchida manualmente seção por seção, sem validação',
            'Risco de inconsistências entre versões sem controle de alterações',
            'IAs genéricas inventam dados toxicológicos — perigoso em documentos de segurança',
            'Sem rastreabilidade: auditoria dependia de arquivos soltos',
          ]}
          depois={[
            'Geração guiada por IA treinada nas normas NBR 14725 e GHS',
            'Validação automática de todas as 16 seções antes de finalizar',
            'FDS finalizada não pode ser regredida — rastreabilidade garantida',
            'PDF pronto para uso regulatório com template configurável',
          ]}
        />
        <CTANavegacao
          outrosProjetos={[
            {
              nome: 'Análise Lab',
              descricao: 'Resultados laboratoriais centralizados em tempo real. Fim das planilhas isoladas.',
              rota: '/projetos/analise',
              cor: '#60a5fa',
            },
            {
              nome: 'Destilador',
              descricao: 'Transforma relatórios de ERP em dashboards interativos para decisão, sem conexão direta ao banco.',
              rota: '/projetos/destilador',
              cor: '#a78bfa',
            },
          ]}
        />
      </main>
```

- [ ] **Step 3: Verificar que o app compila**

```bash
cd /home/myaga/projetos-dev/site-portfolio-mauro && npm run build 2>&1 | tail -20
```

Esperado: build sem erros de TypeScript.

- [ ] **Step 4: Commit**

```bash
git add src/pages/projetos/FDSPage.tsx
git commit -m "feat(fds): add O que mudou and CTA sections"
```

---

## Notas de implementação

- O `path/to/project` nos comandos de build deve ser substituído pelo caminho real do projeto
- Os textos "Antes/Depois" foram redigidos com base no conteúdo existente das páginas (Narrativa e Tour) — podem ser ajustados pelo autor
- O componente `CTANavegacao` usa `CONTATO` de `src/config/contato.ts` — nenhuma alteração nesse arquivo é necessária
- Não há setup de testes neste projeto — verificação via build e inspeção visual no browser
