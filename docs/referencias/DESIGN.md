# DESIGN.md — Identidade Visual: Site de Portfólio

> Este documento define como o ecossistema Alquimista é interpretado visualmente
> no site de portfólio. Não substitui o BRAND.md — complementa.

---

## Filosofia de Design

O portfólio usa design como ferramenta de persuasão sutil. As decisões visuais
seguem três princípios:

1. **Proporção áurea** — composições e hierarquias seguem a razão 61.8/38.2 sempre
   que possível. O olho segue naturalmente sem perceber o porquê.

2. **Psicologia das cores** — cada cor tem uma função emocional deliberada.
   Azul (`#60a5fa`) ativa confiança e precisão. Indigo (`#6366f1`) sugere profundidade
   e criatividade. O fundo claro comunica abertura e acessibilidade.

3. **Narrativa persuasiva** — a ordem é sempre: emoção → identificação → ação.
   O visitante sente o problema antes de ver a solução. Só então é convidado a agir.

---

## Paleta do Site

Base do ecossistema Alquimista mantida. Adaptações para o contexto claro:

| Token | Valor | Uso no portfólio |
|---|---|---|
| **Background Base** | `#f8f7f4` | Fundo principal — off-white quente |
| **Background Alt** | `#f1f5f9` | Seções alternadas — cinza-azulado suave |
| **Background Dark** | `#0f0f0f` | Seções de contraste (hero bottom, footer) |
| **Background Card** | `#ffffff` | Cards de projeto com sombra sutil |
| **Brand Blue** | `#60a5fa` | Primeiro elemento visual que o olho toca |
| **Accent Indigo** | `#6366f1` | CTAs, links ativos, destaques |
| **Text Primary** | `#0f172a` | Títulos e corpo principal |
| **Text Secondary** | `#475569` | Subtítulos e texto de suporte |
| **Text Muted** | `#94a3b8` | Labels, metadata, rodapés de seção |

### Paleta das Ilustrações

Cores extraídas do próprio ecossistema — nenhuma cor nova:

| Cor | Hex | Papel na ilustração |
|---|---|---|
| Brand Blue | `#60a5fa` | Elemento principal |
| Accent Indigo | `#6366f1` | Sombras, profundidade, roupas |
| Emerald | `#34d399` | Elementos naturais, positivos, plantas |
| Amber | `#fbbf24` | Aquecimento, luz, materiais |
| Rose | `#fb7185` | Accents pontuais, detalhes |
| Zinc claro | `#e4e4e7` | Fundo interno das ilustrações |

**Cores de quebra — detalhes quentes (15–20% da ilustração):**

| Cor | Hex | Detalhe |
|---|---|---|
| Terracota | `#e07a5f` | Roupas, elementos de chão de fábrica |
| Coral quente | `#f4845f` | Accents pontuais, destaques de ação |
| Amarelo-mel | `#f9c74f` | Luz, brilho, reações químicas |
| Pêssego | `#ffb997` | Tom de pele inclusivo, tons neutros quentes |

> Regra: cores da marca para elementos principais — cores quentes para detalhes.
> Nunca dominam a composição. Criam contraste emocional contra a paleta fria do Alquimista.

---

## Tipografia

**Display / Headings:** DM Serif Display
- Fonte com serifa — aquece o design, traz personalidade editorial
- Usada em h1 e h2 de seção
- Tamanhos grandes, peso regular (a serifa faz o trabalho)

**Corpo / UI:** Geist Variable
- Mantém o DNA técnico do ecossistema
- Usada em h3 em diante, parágrafos, labels, navegação, botões
- Anti-aliased, tabular-nums onde há números

**Escala base:**

| Elemento | Fonte | Tamanho aprox. | Peso |
|---|---|---|---|
| Hero headline | DM Serif Display | 56–72px | 400 |
| Título de seção | DM Serif Display | 36–48px | 400 |
| Subtítulo | Geist Variable | 18–24px | 500 |
| Corpo | Geist Variable | 16px | 400 |
| Label / tag | Geist Variable | 12px | 600 uppercase |

---

## Ilustrações

**Estilo:** Flat illustration com figuras humanas estilizadas em contextos profissionais.
Influência Alegria — proporções quase naturais, formas fluidas mas com geometria contida
que ressoa com o DNA hexagonal do Alquimista.

**Personas:** Diversidade e inclusão são requisito de design, não detalhe.
Cada persona deve representar variedade real: gênero, etnia, tipo corporal, idade.
Exemplos de personas por contexto:
- Seção de laboratório → químico(a)
- Seção de dados/analytics → gestor(a) ou analista
- Seção de automação → operador(a) de fábrica
- Seção de IA → desenvolvedor(a) ou cientista

**Regra de cor:** usar exclusivamente a paleta de ilustrações definida acima.
Fundo interno das ilustrações sempre em zinc claro — cria moldura suave sem borda explícita.

**Geração:** Claude (Anthropic) ou Midjourney com prompts baseados neste guia.

---

## Animações

**Base — micro-animações (todas as seções):**
- Elementos entram ao rolar: `fade-in` + `translateY(16px → 0)` em 0.4s ease-out
- Botões: escala sutil no hover (`scale(1.02)`) + transição de cor
- Links: underline animado, não sublinhado estático
- Imagens/cards: sombra aumenta levemente no hover

**Momentos expressivos (1–2 por página):**
- Uma ilustração com animação contínua sutil — pulsação, flutuação leve ou elemento
  em movimento (ex: dados fluindo, reação química em loop)
- Localização preferencial: hero ou seção de destaque do ecossistema
- Duração: ciclo de 4–6s, `ease-in-out infinite` — nunca distrativo

**Princípio:** animação invisível = qualidade. O visitante sente que o site é refinado
sem saber dizer por quê.

---

## Estrutura Visual das Seções

### Seções claras (maioria)
- Fundo `#f8f7f4` ou `#f1f5f9`
- Texto escuro `#0f172a`
- Ilustração à direita ou integrada ao conteúdo
- Composição em proporção áurea: conteúdo 61.8% / visual 38.2%

### Seções escuras (contraste e impacto)
- Fundo `#0f0f0f` — mesma linguagem dos produtos Alquimista
- Elemento decorativo: favo de hexágonos em 7% de opacidade (vindo do ecossistema)
- Texto claro `#f4f4f5`
- Acento Brand Blue `#60a5fa` nos destaques
- Usadas para: hero inferior, seção de contato, footer

### Transição claro → escuro
- Gradiente suave de `#f8f7f4` para `#0f0f0f` ou divisor com forma geométrica
- Nunca corte abrupto entre seções de tons opostos

---

## Componentes

**Cards de projeto:**
- Fundo branco `#ffffff`, borda `#e4e4e7` 1px, `border-radius: 16px`
- Sombra: `0 4px 24px rgba(0,0,0,0.06)` em repouso → `0 8px 32px rgba(0,0,0,0.10)` no hover
- Ilustração da persona no topo do card
- Tag de tecnologia em Geist, 12px, uppercase, fundo `#f1f5f9`

**Botões primários:**
- Fundo `#6366f1`, texto branco, `border-radius: 10px`
- Hover: `#4f46e5` + `scale(1.02)`

**Botões secundários:**
- Borda `#6366f1`, fundo transparente, texto `#6366f1`
- Hover: fundo `#6366f1/10`

---

## Referências Visuais

- **Layout:** alura.com.br — ritmo de seções, alternância claro/escuro, energia visual
- **Marca:** ecossistema Alquimista (BRAND.md) — logo, hexágonos, azul, Geist
- **Psicologia:** Stripe, Linear — persuasão invisível, qualidade nas micro-animações
