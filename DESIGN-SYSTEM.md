# Design System

> **Status: COMPLETO** | Projeto: Douglas o Corretor

---

## INSTRUCAO PARA O AGENTE

Leia este bloco antes de qualquer tarefa de HTML, CSS ou componente.

**Se Status = COMPLETO:**
Pode iniciar a construcao. Use apenas `var(--)` dos tokens na secao TOKENS abaixo. Nenhum valor hardcoded.

**Se Status = PENDENTE:**
Nao inicie a construcao. Execute o PROTOCOLO DE SETUP abaixo e conclua antes de continuar.

**Durante a construcao:**
Se surgir uma decisao de design nao coberta pelos tokens (ex: nova cor, novo componente, novo espacamento), pause e pergunte ao desenvolvedor antes de inventar um valor.

---

## PROTOCOLO DE SETUP

### PASSO 1 — Verificar PDD

Perguntar ao desenvolvedor:

> "O cliente tem um guia de marca, manual de identidade visual ou documento de design system (PDF, link, arquivo)?"

- **SIM** → seguir CAMINHO A
- **NAO** → seguir CAMINHO B

---

### CAMINHO A — PDD existe

1. Pedir o arquivo ou link ao desenvolvedor.
2. Ler o documento e extrair:
   - Cor primaria (hex)
   - Cor secundaria (hex)
   - Cor de fundo (hex)
   - Fontes usadas (heading e body)
   - Estilo visual geral (descricao livre)
3. Preencher a secao TOKENS com os valores extraidos.
4. Apresentar um resumo ao desenvolvedor e perguntar: "Extraí esses valores do PDD. Esta correto?"
5. Ajustar se necessario e ir para o PASSO 3.

---

### CAMINHO B — Sem PDD (briefing colaborativo)

Fazer as perguntas a seguir **uma de cada vez**, aguardando a resposta antes de continuar.

**B1. Negocio**

- "Qual o nome da empresa ou marca do cliente?"
- "Qual o segmento?" _(Saude / Juridico / Imoveis / Tech / Beleza / Educacao / Alimentacao / Outro)_
- "Quem e o publico principal? Uma frase."
- "Escolha 3 palavras que descrevem como a marca quer ser percebida."
- "Qual o tom de voz da marca?"
  - Formal e tecnico
  - Profissional e acessivel
  - Descontraido e proximo
  - Empatico e acolhedor

---

**B2. Cores**

> "Tem alguma cor que representa a marca? Pode ser hex, nome ou 'nao sei'."

Se nao souber, oferecer as paletas abaixo e perguntar qual se aproxima mais:

| Estilo | Primaria | Fundo |
|--------|----------|-------|
| Moderno / Tech | `#6366F1` indigo | `#0F172A` dark |
| Saude / Natural | `#059669` verde | `#F0FDF4` claro |
| Confianca / Juridico | `#1D4ED8` azul | `#EFF6FF` claro |
| Premium / Luxo | `#B8860B` dourado | `#FAF9F6` marfim |
| Jovem / Energetico | `#F97316` laranja | `#FFF7ED` claro |

Perguntar tambem: "Tem uma segunda cor de destaque?"

---

**B3. Tipografia**

> "Tem alguma fonte especifica da marca? Ex: Montserrat, Playfair Display."

Se nao souber, sugerir combinacoes por estilo:

| Estilo | Heading | Body |
|--------|---------|------|
| Moderno | Inter | Inter |
| Elegante | Playfair Display | Lato |
| Tech / SaaS | Space Grotesk | DM Sans |
| Humanista / Saude | Nunito | Open Sans |
| Editorial | Merriweather | Source Sans 3 |
| Jovem / Bold | Syne | Manrope |

---

**B4. Estilo visual**

> "Como voce descreveria o estilo do site?"

- **Moderno** — linhas limpas, gradientes sutis, tecnologico
- **Minimalista** — muito espaco em branco, simples e elegante
- **Futurista** — dark, formas arrojadas, efeitos visuais
- **Profissional** — sobrio, estruturado, corporativo

---

**B5. Nivel de animacao**

| Opcao | Descricao |
|-------|-----------|
| Sem animacoes | Estatico, direto ao ponto |
| Sutis | Elementos aparecem suavemente ao rolar |
| Moderadas | Scroll reveal + efeitos hover em botoes e cards |
| Expressivas | Gradientes animados, alto impacto visual |

---

### PASSO 3 — Gerar Tokens

Com os valores coletados (Caminho A ou B):

1. Preencher a secao TOKENS abaixo com todos os valores.
2. Atualizar `src/css/variables.css` com os mesmos valores.
3. Calcular e preencher as variacoes derivadas:
   - `--color-primary-dark`: versao 20% mais escura da primaria
   - `--color-primary-light`: versao 20% mais clara da primaria
   - `--color-text-muted`: cor de texto com 60% de opacidade

---

### PASSO 4 — Checklist de conclusao

Verificar cada item antes de marcar COMPLETO:

- [ ] Contraste entre texto e fundo e >= 4.5:1
- [ ] Google Fonts adicionado no `<head>` do HTML
- [ ] `variables.css` importado antes de qualquer outro CSS no `main.css`
- [ ] Nenhum valor hardcoded no projeto — apenas `var(--)`

Ao concluir o checklist: executar o PASSO 5 antes de marcar COMPLETO.

---

### PASSO 5 — Gerar Style Guide

Gerar o arquivo `src/style-guide.html` com preview visual de todos os tokens e componentes base do projeto. Este arquivo e uma ferramenta de referencia para o desenvolvimento — nao vai para o deploy.

O arquivo deve:
1. Importar `css/variables.css` e `css/reset.css`
2. Ter estilos inline minimos para a pagina do style guide (nao usar arquivos de componentes)
3. Exibir todas as secoes abaixo com os valores reais dos tokens definidos

**Secoes obrigatorias no style-guide.html:**

- **Cabecalho:** nome do projeto, data de geracao, status do design system
- **Cores:** swatches visuais para cada `--color-*`, mostrando o nome do token e o valor hex
- **Tipografia:** cada nivel `--text-*` aplicado com a fonte real, mostrando tamanho e peso
- **Espacamento:** barras visuais para cada `--space-*`, mostrando o valor em rem e px
- **Bordas:** exemplos de cada `--radius-*` aplicado em um quadrado
- **Sombras:** exemplos de cada `--shadow-*` aplicado em um card
- **Botoes:** variantes primario, secundario e outline com os tokens do projeto
- **Formulario:** input, textarea e label com estilo base
- **Cards:** card simples com titulo, texto e botao usando os tokens

Anunciar ao finalizar: "Style guide gerado em src/style-guide.html. Abra no Live Server para visualizar o design system completo."

**Atualizar Status para COMPLETO** no topo deste arquivo.

---

## TOKENS

```css
:root {
  /* === CORES === */
  --color-primary: #0b2240;
  --color-primary-dark: #051020;
  --color-primary-light: #163a66;
  --color-secondary: #d4af37;
  --color-background: #faf9f6;
  --color-surface: #ffffff;
  --color-text: #1a202c;
  --color-text-muted: #68768e;
  --color-border: #e2e8f0;
  --color-success: #16a34a;
  --color-error: #dc2626;

  /* === TIPOGRAFIA === */
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Inter', sans-serif;

  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;

  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* === ESPACAMENTO (base 4px) === */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;

  /* === BORDAS === */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* === SOMBRAS === */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.07);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.10);

  /* === CONTAINERS === */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;

  /* === TRANSICOES === */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;

  /* === ANIMACAO === */
  /* Nivel escolhido: Moderadas */
}
```

---

## REGRAS PERMANENTES

1. **Nunca usar valores hardcoded** em componentes — sempre `var(--)`.
2. **Se o cliente mudar uma cor:** atualizar apenas `variables.css`. Nunca editar arquivos de componentes para corrigir cor.
3. **Se o desenvolvedor trouxer um novo PDD** durante a construcao: re-executar o PROTOCOLO DE SETUP e atualizar os TOKENS.
4. **Se surgir um novo componente** nao previsto: checar se os tokens existentes cobrem. Se nao, propor nova variavel ao desenvolvedor antes de hardcodar.
