# Protocolo de Componentes — Catálogo

Este protocolo é um catálogo de componentes prontos. O aluno escolhe pelo nome ou descrição e o agente gera o HTML + CSS correto, seguindo as regras de `GEMINI.md` (BEM, tokens CSS, vanilla JS).

---

## Como usar

O aluno pode dizer:
- "Adiciona um hero com vídeo"
- "Quero uma seção de depoimentos"
- "Cria um FAQ"

O agente identifica o componente no catálogo e gera o código completo.

---

## Catálogo de Componentes

---

### HERO — Seção Principal

**Variante 1: Hero com texto + imagem**
- Headline H1 grande
- Subheadline
- 1-2 botões CTA
- Imagem ou ilustração ao lado

**Variante 2: Hero centralizado (sem imagem)**
- Headline H1 centralizado
- Subheadline
- Botão CTA único
- Fundo com gradiente ou cor sólida

**Variante 3: Hero com vídeo de fundo**
- Vídeo em loop autoplay muted (sem áudio)
- Overlay escuro para contraste
- Headline + CTA sobre o vídeo

**Variante 4: Hero com vídeo incorporado (VSL)**
- Headline acima do vídeo
- Player de vídeo centralizado (YouTube embed ou `<video>`)
- CTA abaixo do vídeo

Prompt para o aluno:
> "Adiciona um hero com [variante]. O título é [X] e o CTA vai para [link ou âncora]."

---

### CARDS — Grade de Itens

**Variante 1: Cards de benefícios/features**
- Ícone SVG
- Título curto
- Descrição de 1-2 linhas
- Grade de 3 colunas (desktop) / 1 coluna (mobile)

**Variante 2: Cards de serviços**
- Imagem ou ícone
- Título
- Descrição
- Botão "Saiba mais" (opcional)

**Variante 3: Cards de preços**
- Nome do plano
- Preço em destaque
- Lista de itens incluídos
- Botão CTA
- Destaque visual no plano recomendado

Prompt para o aluno:
> "Cria 3 cards de benefícios com ícones: [benefício 1], [benefício 2], [benefício 3]."

---

### DEPOIMENTOS — Prova Social

**Variante 1: Cards de depoimento**
- Foto (avatar circular)
- Nome e cargo/contexto
- Texto do depoimento com aspas
- Grade de 2-3 colunas

**Variante 2: Carrossel de depoimentos**
- Mesmo conteúdo em carrossel com navegação por setas
- Autoplay opcional

**Variante 3: Barra de logos**
- Logos de clientes ou parceiros em linha
- Scroll infinito em mobile (opcional)

Prompt para o aluno:
> "Adiciona 3 depoimentos. [Nome 1], [cargo], disse: '[texto]'. [Nome 2]..."

---

### FAQ — Perguntas Frequentes

**Variante única: Accordion**
- Pergunta como cabeçalho clicável
- Resposta que expande/colapsa com animação CSS
- Ícone + / x para indicar estado
- Lógica: apenas um item aberto por vez

Comportamento em vanilla JS:
- `querySelectorAll('.faq__item')` com toggle de classe `.faq__item--active`
- Transição CSS com `max-height`

Prompt para o aluno:
> "Cria um FAQ com as perguntas: [P1], [P2], [P3]. As respostas são: [R1], [R2], [R3]."

---

### FORMULARIO — Captura de Leads / Contato

**Variante 1: Formulário simples (lead)**
- Campo nome
- Campo e-mail
- Botão CTA
- Sem backend — envio via Formspree ou similar

**Variante 2: Formulário de contato**
- Nome, e-mail, telefone (opcional), mensagem (textarea)
- Botão enviar
- Feedback visual de sucesso/erro

**Variante 3: Formulário de orçamento**
- Nome, e-mail, telefone, tipo de serviço (select), mensagem
- Envio para WhatsApp via link `wa.me` ou Formspree

Prompt para o aluno:
> "Cria um formulário de captura de e-mail. O CTA do botão é '[texto]'."

---

### CTA — Call to Action

**Variante 1: Seção CTA isolada**
- Fundo colorido (cor primária ou gradiente)
- Headline curta
- Botão centralizado

**Variante 2: Botão flutuante WhatsApp**
- Ícone do WhatsApp fixo no canto inferior direito
- Link `wa.me/[número]?text=[mensagem pré-definida]`
- Aparece com delay de 3s

**Variante 3: Barra de urgência (countdown)**
- Barra fixa no topo
- Texto de oferta + contador regressivo em JS
- Botão CTA inline

Prompt para o aluno:
> "Adiciona um botão flutuante do WhatsApp com o número [X] e a mensagem '[Y]'."

---

### HEADER — Cabeçalho

**Variante 1: Header fixo simples**
- Logo à esquerda
- Menu de links à direita
- Fundo transparente → sólido ao rolar (JS)

**Variante 2: Header com CTA**
- Logo + menu + botão CTA
- Menu hambúrguer no mobile

**Regras obrigatórias:**
- `<nav>` com `aria-label="Navegação principal"`
- Links de âncora para seções da mesma página (#secao)
- `<button>` para o menu mobile (não `<div>`)

---

### FOOTER — Rodapé

**Variante 1: Footer simples**
- Logo
- Links úteis (âncoras ou páginas)
- Redes sociais (ícones SVG)
- Copyright

**Variante 2: Footer completo**
- 3-4 colunas: logo + contato + links + redes sociais
- Linha horizontal de separação
- Copyright e CNPJ (se aplicável)

---

### SECAO-NUMEROS — Credibilidade

- Contadores animados em JS (ex: "0 → 500 clientes")
- 3-4 números em destaque
- Descrição abaixo de cada número

Prompt para o aluno:
> "Cria uma seção com os números: [500+ clientes], [10 anos de experiência], [98% de satisfação]."

---

### GALERIA / PORTFOLIO

**Variante 1: Grade de imagens**
- Masonry ou grade uniforme
- Lightbox ao clicar (vanilla JS)

**Variante 2: Cards de projeto**
- Imagem, título, tags, botão "Ver projeto"
- Filtro por categoria (vanilla JS)

---

## Regras do Agente

1. Sempre perguntar a variante antes de gerar código.
2. Usar classes BEM: `.hero__titulo`, `.card__imagem`, `.faq__item--active`.
3. Textos como "Lorem ipsum" são permitidos apenas se o aluno não forneceu conteúdo.
4. Imagens sem URL devem usar `src=""` com `alt="[descrição]"` e comentário `<!-- substituir pela imagem real -->`.
5. Formulários sem backend: usar Formspree como padrão (`action="https://formspree.io/f/[ID]"`).
6. JavaScript de componentes vai em `src/js/modules/[nome-componente].js`.
