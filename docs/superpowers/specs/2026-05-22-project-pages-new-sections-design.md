# Design: Novas seções nas páginas de projeto

**Data:** 2026-05-22  
**Escopo:** AnalisePage, DestiladorPage, FDSPage

---

## Contexto

Cada página de projeto segue o fluxo: Hero → Narrativa → Tour → Destaque → Ecossistema. A estrutura apresenta bem o problema e a solução, mas termina sem oferecer uma próxima ação ao visitante. Duas seções serão adicionadas ao final de cada página.

## Público-alvo

Mistura equilibrada: clientes potenciais, recrutadores, pares técnicos. Ação desejada: entrar em contato ou navegar para outro projeto.

---

## Nova estrutura de cada página

```
Hero → Narrativa → Tour → Destaque → Ecossistema → O que mudou → CTA + Navegação
```

---

## Seção 1: "O que mudou"

**Posicionamento:** após Ecossistema, antes do CTA.  
**Objetivo:** fechar o argumento do projeto com impacto qualitativo antes de pedir ação.

### Layout

Dois cards lado a lado (em mobile: coluna única):

| Antes | Depois |
|-------|--------|
| Ícone âmbar/vermelho | Ícone verde |
| Fundo ligeiramente quente (`white/3` com borda âmbar sutil) | Fundo ligeiramente frio (`white/3` com borda verde sutil) |
| 3–4 bullets de texto curto | 3–4 bullets de texto curto |

Título da seção: sem título visível ou título minimalista acima dos cards (ex: "A transformação").

### Conteúdo por projeto (rascunhos — a confirmar com Mauro)

**Análise Lab**
- Antes: resultados espalhados em planilhas isoladas / sem rastreabilidade por lote / aprovações decididas de memória / retrabalho manual na geração de histórico
- Depois: lote identificado do início ao fim / alertas automáticos por produto / histórico consultável a qualquer hora / dashboard de qualidade em tempo real

**Destilador**
- Antes: relatórios do ERP parados em arquivos / análise feita manualmente em Excel / perguntas respondidas fora do sistema / sem visão consolidada do período
- Depois: upload único transforma o relatório em dashboard / IA responde dúvidas com contexto real dos dados / histórico de conversas por arquivo / inteligência sem conexão direta ao banco

**FDS Digital**
- Antes: FDS preenchida manualmente seção por seção / risco de inconsistências entre versões / IAs genéricas inventam dados toxicológicos / sem rastreabilidade de alterações
- Depois: geração guiada com IA treinada nas normas / validação automática de todas as 16 seções / FDS finalizada não pode ser regredida / PDF pronto para uso regulatório

---

## Seção 2: CTA + Navegação entre projetos

**Posicionamento:** última seção de cada página.  
**Objetivo:** converter o visitante em contato ou mantê-lo no portfólio.

### Layout

Dois blocos lado a lado (em mobile: "Outros projetos" acima, CTA abaixo):

**Bloco esquerdo — "Vamos conversar"**
- Título: "Tem um processo parecido com esse?"
- Subtítulo curto: 1 linha neutra, tom de autoridade
- Botões: WhatsApp · Email · LinkedIn
- Visual: fundo levemente destacado, borda da cor de acento do projeto

**Bloco direito — "Outros projetos"**
- 2 cards compactos com: nome do projeto + descrição de uma linha + link para a página
- Os cards mostram os outros 2 projetos (não o atual)
- Visual: mesmo estilo dos cards de projeto da home

### Dados de contato (reutilizar da seção Contato da home)
- WhatsApp / email / LinkedIn — já existem na seção Contato de HomePage

---

## Implementação

- Criar componentes `OQueMudou` e `CTANavegacao` em cada arquivo de página (seguindo o padrão de funções locais dos arquivos existentes)
- Alternativamente, se o conteúdo for idêntico em estrutura, criar componentes reutilizáveis em `src/components/sections/`
- Os textos "Antes/Depois" são específicos por projeto — podem ser arrays locais em cada page file
- Os dados dos outros projetos para os cards de navegação podem ser um array centralizado importado

---

## Fora do escopo

- Stack tecnológica (descartado)
- Métricas numéricas de impacto (não disponíveis)
- Depoimentos de usuários
