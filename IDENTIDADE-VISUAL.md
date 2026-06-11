> **SUBSTITUIDO:** Este arquivo foi absorvido por `DESIGN-SYSTEM.md` na raiz do projeto. Use `DESIGN-SYSTEM.md` como ponto de entrada.

# Protocolo de Identidade Visual — Design System Intake

Este protocolo é executado **quando o aluno não tem identidade visual definida**, ou quando precisa de ajuda para traduzir a marca em tokens CSS. O agente conduz as perguntas e preenche o `src/css/variables.css` antes de criar qualquer componente.

---

## Como usar

Se no `BRIEFING.md` constar "identidade visual: a definir", o agente inicia este protocolo:

> "Vamos definir a identidade visual do site. Isso garante que todas as cores, fontes e espaçamentos sejam consistentes. Vou fazer algumas perguntas."

---

## Perguntas Guiadas

### 1. Cores

> "Tem alguma cor que representa a marca? Pode ser um hex (#FF5733), nome ('azul escuro') ou 'não sei'."

Se "não sei", oferecer paletas prontas por estilo:

| Estilo | Paleta sugerida |
|--------|----------------|
| Minimalista | #1A1A1A (texto) + #FFFFFF (fundo) + #0066FF (destaque) |
| Elegante/Luxo | #1C1C1E (fundo) + #D4AF37 (dourado) + #F5F5F5 (claro) |
| Moderno/Tech | #0F172A (fundo) + #6366F1 (índigo) + #F8FAFC (claro) |
| Natural/Saúde | #F0FDF4 (fundo) + #16A34A (verde) + #1F2937 (texto) |
| Jovem/Criativo | #FFF7ED (fundo) + #F97316 (laranja) + #111827 (texto) |
| Confiança/Finanças | #EFF6FF (fundo) + #1D4ED8 (azul) + #1E293B (texto) |

> "Prefere algum desses estilos, ou quer descrever o seu?"

### 2. Fontes

> "Tem alguma fonte preferida? Se não, eu sugiro combinações prontas do Google Fonts."

Combinações sugeridas por estilo:

| Estilo | Título | Corpo |
|--------|--------|-------|
| Moderno Clean | Inter | Inter |
| Elegante | Playfair Display | Lato |
| Tech/SaaS | Space Grotesk | DM Sans |
| Humanista/Saúde | Nunito | Open Sans |
| Editorial | Merriweather | Source Sans 3 |
| Jovem/Bold | Syne | Manrope |

### 3. Estilo Visual

> "Como você descreveria o estilo do site?"

Opções:
- Minimalista (muito espaço em branco, poucos elementos)
- Moderno (linhas limpas, cores vibrantes, gradientes sutis)
- Elegante (tipografia refinada, paleta sóbria)
- Jovem/Energético (cores bold, animações, elementos gráficos)
- Corporativo (sóbrio, confiável, estruturado)

### 4. Tom de voz

> "Como a marca se comunica com o público?"

Opções:
- Formal e técnico
- Profissional mas acessível
- Descontraído e próximo
- Empático e acolhedor
- Direto e objetivo

Registrar no `BRIEFING.md` — influencia os textos gerados.

---

## Output: variables.css preenchido

Com base nas respostas, o agente gera ou atualiza `src/css/variables.css`:

```css
:root {
  /* Cores */
  --color-primary: #[valor];
  --color-primary-dark: #[valor 20% mais escuro];
  --color-primary-light: #[valor 20% mais claro];
  --color-secondary: #[valor];
  --color-background: #[valor];
  --color-surface: #[valor];
  --color-text: #[valor];
  --color-text-muted: #[valor 60% opacidade];
  --color-border: #[valor];
  --color-success: #16a34a;
  --color-error: #dc2626;

  /* Tipografia */
  --font-heading: '[Fonte título]', sans-serif;
  --font-body: '[Fonte corpo]', sans-serif;

  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */

  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Espaçamento (base 4px) */
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

  /* Bordas */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Sombras */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.07);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.10);

  /* Container */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;

  /* Transições */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;
}
```

---

## Checklist pós-preenchimento

O agente confirma antes de prosseguir:

- [ ] Cores têm contraste mínimo 4.5:1 entre texto e fundo (verificar com ferramenta online)
- [ ] Fontes do Google Fonts adicionadas no `<head>` do HTML
- [ ] `variables.css` importado antes de qualquer outro CSS no `main.css`
- [ ] Nenhuma cor ou fonte hardcoded — apenas tokens `var(--)`

---

## Regras do Agente

1. Nunca usar cores ou fontes hardcoded em componentes — sempre `var(--)`.
2. Se o aluno mudar uma cor depois, atualizar apenas `variables.css`, nunca arquivos de componentes.
3. Verificar contraste de acessibilidade antes de confirmar a paleta.
4. Registrar a paleta final no `BRIEFING.md`.
