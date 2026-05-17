# LAYOUT.md — Estrutura e Proporções: Site de Portfólio

> Define a arquitetura visual da página — hierarquia, proporções, grid e comportamento
> responsivo. Lido em conjunto com DESIGN.md e CONTENT.md.

---

## Arquitetura Geral

**Tipo:** Híbrido — página principal com scroll + páginas de detalhe por projeto.

**Rotas:**
```
/                       → Página principal (scroll único)
/projetos/fds           → Detalhe: FDS Digital
/projetos/analise       → Detalhe: Análise Lab
/projetos/destilador    → Detalhe: Destilador
```

**Abordagem responsiva:** Mobile-first. Design concebido para tela pequena,
expandido progressivamente para desktop.

---

## Grid e Container

**Container máximo:** `max-width: 1280px` — centralizado, com padding lateral.
**Colunas:** Grid de 12 colunas com `gap: 24px`.
**Padding lateral:**
- Mobile: `px-5` (20px)
- Tablet: `px-8` (32px)
- Desktop: `px-12` (48px)

**Regra de texto:** Blocos de texto puro têm `max-width: 680px` dentro do container.
O espaço restante vira respiro — não vazio.

**Proporção áurea:** Seções com dois elementos (texto + visual) seguem 61.8% / 38.2%.
- Desktop: texto em 7 colunas (58%) / visual em 5 colunas (42%) — aproximação prática
- Mobile: empilhados, visual abaixo do texto

---

## Navegação

**Tipo:** Sticky — fixa no topo, acompanha o scroll.
**Altura:** 64px desktop / 56px mobile.
**Conteúdo:**
- Esquerda: logo Alquimista (hexágono SVG + "ALQUIMISTA" em uppercase)
- Centro: links de navegação (Sobre · Projetos · Competências · Contato)
- Direita: botão "Vamos conversar" (CTA secundário, sempre visível)

**Comportamento:** Fundo transparente na hero → fundo com `backdrop-blur` e
borda inferior sutil ao rolar. Transição suave.

**Mobile:** Links colapsam em menu hambúrguer. CTA mantido visível.

---

## Página Principal — Seções

### Seção 1 — Hero
**Fundo:** Escuro (`#0f0f0f`) com favo de hexágonos em 7% opacidade à direita.
**Altura:** `100vh` — ocupa a viewport inteira.
**Layout desktop:** Proporção áurea — texto à esquerda (61.8%), ilustração à direita (38.2%).
**Layout mobile:** Empilhado — headline, subheadline, CTA, ilustração abaixo.

**Elementos:**
- Headline em DM Serif Display (56–72px desktop / 36px mobile)
- Subheadline em Geist Variable (18px)
- Botão CTA "Conheça o trabalho ↓"
- Ilustração flat com persona — laboratório ou dados
- Scroll indicator sutil no rodapé (chevron animado)

---

### Seção 2 — Sobre
**Fundo:** Claro (`#f8f7f4`)
**Padding vertical:** `py-24` desktop / `py-16` mobile

**Layout desktop:** Texto à esquerda (7 col) / ilustração à direita (5 col).
**Layout mobile:** Ilustração acima, texto abaixo.

**Elementos:**
- Título "Sobre" em DM Serif Display (36px)
- Corpo em Geist Variable (16px, max-width 620px)
- Ilustração flat — persona com bancada + tela, cores quentes nos detalhes

---

### Seção 3 — Método / Alquimista
**Fundo:** Escuro (`#0f0f0f`) com favo de hexágonos em 7% opacidade.
**Padding vertical:** `py-24`

**Layout:** Centralizado — texto ao centro com `max-width: 720px`.
O logo Alquimista aparece acima do título com animação sutil (pulsação/glow).

**Elementos:**
- Logo Alquimista animado (pulsação 4s ease-in-out)
- Título "O método" em DM Serif Display (36–48px), texto claro
- Corpo em Geist Variable (18px), espaçamento generoso
- Tagline em destaque: *Analisar. Projetar. Transformar. Com inteligência aplicada.*

---

### Seção 4 — Projetos
**Fundo:** Claro (`#f1f5f9`)
**Padding vertical:** `py-24`

**Título da seção:** "Soluções" — DM Serif Display, alinhado à esquerda.
**Subtítulo:** Geist Variable, text-secondary, max-width 560px.

**Grid de cards:**
- Desktop: 3 colunas (`col-span-4` cada) — 3 projetos por linha
- Tablet: 2 colunas
- Mobile: 1 coluna, scroll vertical

**Card individual:**
- Altura mínima: 380px desktop
- Ilustração da persona no topo (altura fixa 180px, `object-fit: cover`)
- Tag de categoria (Geist, 11px, uppercase, badge)
- Título do projeto (DM Serif Display, 22px)
- Descrição curta (Geist, 14px, 3 linhas max)
- Link "Ver projeto →" (Geist, indigo, sem botão — link sutil)
- Card 4 (em desenvolvimento): estado visual diferente — opacidade reduzida, tag "Em breve"

---

### Seção 5 — Competências
**Fundo:** Claro (`#f8f7f4`)
**Padding vertical:** `py-24`

**Título:** "Onde os dois mundos se encontram" — DM Serif Display, centralizado.

**Layout desktop:** Duas colunas iguais (`col-span-6` cada).
**Layout mobile:** Empilhado.

**Coluna esquerda:** Química & Laboratório
**Coluna direita:** Tecnologia & Desenvolvimento

**Estilo dos itens:** Lista simples com marcador em Brand Blue (`#60a5fa`).
Sem barras de progresso, sem estrelinhas — a competência se demonstra pelos projetos.

---

### Seção 6 — Contato
**Fundo:** Escuro (`#0f0f0f`)
**Padding vertical:** `py-24`

**Layout desktop:** Texto à esquerda (6 col) / formulário à direita (6 col).
**Layout mobile:** Texto acima, formulário abaixo.

**Elementos:**
- Título "Vamos conversar" em DM Serif Display, texto claro
- Corpo em Geist, texto secundário claro
- Ilustração flat à esquerda ou integrada — duas personas em conversa, cores quentes
- Formulário: nome + e-mail + mensagem + botão "Enviar"

---

### Footer
**Fundo:** Mais escuro que o contato (`#080808`)
**Altura:** Compacto — uma linha.
**Conteúdo:** Logo mínimo · © Mauro Yaga · Links sociais (LinkedIn, GitHub)

---

## Páginas de Projeto (detalhe)

**Layout padrão para todas as páginas `/projetos/*`:**

```
┌─────────────────────────────────────┐
│  ← Voltar aos projetos              │  navegação de retorno
├─────────────────────────────────────┤
│  TAG · CATEGORIA                    │
│  Título do Projeto                  │  hero da página
│  Descrição expandida                │
├─────────────────────────────────────┤
│  O problema                         │  seção clara
│  [texto]           [ilustração]     │
├─────────────────────────────────────┤
│  A solução                          │  seção levemente diferente
│  [texto]           [visual/screen]  │
├─────────────────────────────────────┤
│  Tecnologias usadas                 │  badges compactos
├─────────────────────────────────────┤
│  Próximo projeto →                  │  navegação entre projetos
└─────────────────────────────────────┘
```

**Fundo:** Claro com seção hero em escuro.
**Container:** `max-width: 960px` — mais estreito que a principal. Leitura mais focada.

---

## Breakpoints

| Nome | Largura | Comportamento |
|---|---|---|
| Mobile | < 640px | 1 coluna, menu hambúrguer, ilustrações empilhadas |
| Tablet | 640–1024px | 2 colunas, adaptações de padding |
| Desktop | > 1024px | Layout completo, grid 12 colunas, proporção áurea |
| Wide | > 1280px | Container centralizado, espaço lateral como respiro |

---

## Espaçamento Vertical entre Seções

Transições entre seções claras e escuras:
- Gradiente suave de `24px` entre claro → escuro
- Divisor geométrico opcional (forma hexagonal ou diagonal) para variar o ritmo
- Nunca corte abrupto entre fundos opostos
