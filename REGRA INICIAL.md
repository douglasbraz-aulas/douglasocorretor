# Regra Inicial — Protocolo Base do Projeto

Este arquivo define as regras e o contexto do projeto para o agente de IA.
Leia tudo antes de gerar qualquer código.

---

## Protocolos Complementares

Este projeto usa protocolos por fase. Consulte o arquivo correto no momento certo:

| Fase | Arquivo | Quando usar |
|------|---------|-------------|
| **Briefing do cliente** | `BRIEFING.md` | **Leia sempre primeiro** — contém todas as decisões do projeto |
| Questionário (sem briefing) | `Briefing/questionario-design-system.md` | Se não há BRIEFING.md — conduza o questionário antes de qualquer código |
| Início do projeto | `PLANEJAMENTO.md` | Sempre — antes de qualquer código |
| Estrutura das páginas | `ESTRUTURA-SECOES.md` | Após o planejamento, antes do HTML |
| Identidade visual | `IDENTIDADE-VISUAL.md` | Se não há paleta/fontes definidas |
| Componentes | `COMPONENTES.md` | Durante a produção, ao criar seções |
| SEO | `SEO.md` | Quando o site estiver quase pronto |
| Analytics | `ANALYTICS.md` | Junto com SEO, antes do deploy |
| Acessibilidade | `ACESSIBILIDADE.md` | Revisão final antes do deploy |
| Publicação | `DEPLOY.md` | Ao publicar o site |
| Pós-lançamento | `MANUTENCAO.md` | Para atualizações e backup |

Se existir um `BRIEFING.md` na raiz do projeto, leia-o antes de qualquer ação — ele contém o objetivo, público-alvo, tipo de site e identidade visual definidos pelo aluno.

Se **não existir** `BRIEFING.md`: leia `Briefing/questionario-design-system.md` e conduza o questionário completo com o aluno. Só inicie a construção após salvar as respostas em `BRIEFING.md`.

---

## Sobre o Projeto

Site institucional / landing page desenvolvido com HTML5, CSS3 e JavaScript vanilla.
Sem frameworks de JavaScript. Sem bibliotecas CSS externas além de fontes.

---

## Estrutura de Pastas

```
/
├── GEMINI.md              este arquivo
├── README.md              guia do time
├── src/                   todo o código-fonte fica aqui
│   ├── index.html         página principal
│   ├── pages/             páginas adicionais (sobre.html, contato.html, etc.)
│   ├── css/
│   │   ├── variables.css  tokens de design (cores, tipografia, espaçamento)
│   │   ├── reset.css      normalização de estilos
│   │   ├── main.css       importa todos os módulos na ordem correta
│   │   ├── layout/        header.css, footer.css, grid.css
│   │   └── components/    buttons.css, cards.css, forms.css, etc.
│   ├── js/
│   │   ├── main.js        ponto de entrada (type="module")
│   │   └── modules/       sub-módulos importados pelo main.js
│   └── assets/
│       ├── images/        fotos e imagens (.webp preferido, .jpg e .png aceitos)
│       ├── videos/        vídeos (.mp4 com fallback .webm)
│       ├── fonts/         fontes locais (.woff2 obrigatório, .woff opcional)
│       └── icons/         ícones SVG, favicon, logo
└── dist/                  gerado automaticamente no build — nunca editar manualmente
```

---

## Regras de HTML

- Sempre HTML5 semântico: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`.
- Todo `<img>` deve ter `alt` descritivo. Imagens decorativas: `alt=""` com `aria-hidden="true"`.
- Formulários: todo `<input>` deve ter `<label>` associado via `for`/`id`.
- Botões interativos: usar `<button type="button">`. Links de navegação: usar `<a href>`.
- Sequência de headings sem pular níveis: `h1` > `h2` > `h3`.
- Nunca usar `<div>` onde existe uma tag semântica adequada.
- Idioma padrão: `<html lang="pt-BR">`.
- Sempre incluir meta tags: `charset`, `viewport`, `description`, Open Graph.
- Scripts: sempre `<script type="module" src="js/main.js">` no final do `<body>`.

---

## Regras de CSS

- Convenção de nomenclatura: BEM.
  ```
  .block {}
  .block__element {}
  .block--modifier {}
  ```
- Toda cor, espaçamento, fonte e borda deve usar variável de `variables.css`.
  ```css
  /* correto */
  color: var(--color-text);
  padding: var(--space-4);

  /* errado */
  color: #333;
  padding: 16px;
  ```
- Escrever estilos mobile-first. Usar `@media (min-width: X)` para expandir.
- Novos componentes: criar arquivo próprio em `css/components/` e importar em `main.css`.
- Nunca usar `!important`.
- Nunca remover `outline` sem adicionar estilo de foco alternativo visível.

---

## Regras de JavaScript

- Sempre ES Modules: `type="module"` no HTML, `import`/`export` entre arquivos.
- Nunca usar `var` — usar `const` e `let`.
- Nunca usar `document.write()`.
- Nunca deixar `console.log()` no código final.
- Acessar o DOM com `document.querySelector()` e `document.querySelectorAll()`.
- Sempre verificar se o elemento existe antes de manipulá-lo:
  ```js
  const el = document.querySelector('.meu-seletor');
  if (el) { /* ... */ }
  ```
- Comunicação com backend: usar `fetch()`. Nunca usar XMLHttpRequest.
- Nunca modificar arquivos em `dist/` — apenas `src/`.

---

## Arquivos de Mídia

- Imagens: preferir `.webp`. Sempre definir `width` e `height` no HTML para evitar CLS.
- Imagens acima da dobra: `loading="eager"`. Abaixo da dobra: `loading="lazy"`.
- Ícones: usar SVG inline ou referenciados. Nunca usar icon fonts (ex: Font Awesome).
- Vídeos: sempre incluir `<track>` com legenda para acessibilidade.
- Fontes locais: sempre em `.woff2`. Declarar com `@font-face` em `variables.css`.
- Nunca colocar arquivos de mídia fora de `src/assets/`.

---

## O que Nunca Fazer

- Instalar React, Vue, Angular, Svelte ou qualquer framework JS.
- Usar Tailwind, Bootstrap, Foundation ou qualquer framework CSS.
- Criar arquivos diretamente em `dist/`.
- Usar `var` em JavaScript.
- Usar valores de cor, espaçamento ou fonte sem variável CSS.
- Pular níveis de heading (h1 direto para h3).
- Usar `<div>` com role="button" no lugar de `<button>`.

---

## Tokens de Design (referência rápida)

Defina os valores reais em `src/css/variables.css`. Use sempre via `var()`.

```css
:root {
  /* Cores */
  --color-primary-500: /* cor principal */;
  --color-text:        /* texto padrão */;
  --color-text-muted:  /* texto secundário */;
  --color-bg:          /* fundo da página */;
  --color-bg-muted:    /* fundo alternado de seção */;
  --color-surface:     /* fundo de card/input */;
  --color-border:      /* bordas */;
  --color-error:       /* estados de erro */;

  /* Tipografia */
  --font-sans:   /* família principal */;
  --text-sm:     0.875rem;
  --text-base:   1rem;
  --text-lg:     1.125rem;
  --text-xl:     1.25rem;
  --text-2xl:    1.5rem;
  --text-3xl:    1.875rem;
  --text-4xl:    2.25rem;

  /* Espaçamento (escala de 4px) */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* Bordas */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Layout */
  --container-max:    1200px;
  --container-gutter: var(--space-6);
}
```
