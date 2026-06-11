# Protocolo de Acessibilidade — WCAG Básico

Este protocolo complementa o checklist do `README.md` com um guia mais detalhado. O agente executa estas verificações **antes do deploy**, junto com `SEO.md` e `ANALYTICS.md`.

---

## Por que acessibilidade importa

- Aumenta o alcance do site (pessoas com deficiência visual, motora ou cognitiva)
- Melhora o SEO (leitores de tela e rastreadores do Google leem o mesmo código)
- É requisito legal em muitos contextos no Brasil (LBI - Lei Brasileira de Inclusão)
- Sites acessíveis carregam mais rápido e são mais bem estruturados

---

## Checklist automático do agente

O agente percorre o HTML e verifica cada item:

### 1. Contraste de cores

- [ ] Texto sobre fundo tem contraste mínimo de **4.5:1** (texto normal) ou **3:1** (texto grande, ≥18px)
- [ ] Botões CTA têm contraste suficiente entre texto e fundo do botão
- [ ] Verificar com os tokens do `variables.css` antes de finalizar

Ferramenta de verificação: webaim.org/resources/contrastchecker

### 2. Textos alternativos em imagens

- [ ] Todo `<img>` tem atributo `alt`
- [ ] Imagens informativas: `alt="descrição do conteúdo da imagem"`
- [ ] Imagens decorativas (apenas visuais): `alt=""` (string vazia, não omitir)
- [ ] Ícones com texto ao lado: `aria-hidden="true"` no ícone SVG

```html
<!-- Correto: imagem informativa -->
<img src="foto-personal.webp" alt="Personal trainer João Silva trabalhando com cliente">

<!-- Correto: imagem decorativa -->
<img src="background-pattern.webp" alt="">

<!-- Correto: ícone com texto -->
<svg aria-hidden="true">...</svg>
<span>Instagram</span>
```

### 3. Navegação por teclado

- [ ] Todos os elementos interativos (links, botões, inputs) acessíveis via Tab
- [ ] Ordem de foco segue a ordem visual da página
- [ ] Foco visível — nunca usar `outline: none` sem substituto visual

```css
/* Nunca fazer isso sem substituto */
*:focus {
  outline: none; /* PROIBIDO sem alternativa */
}

/* Correto: outline personalizado mantendo visibilidade */
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### 4. Estrutura de headings

- [ ] `<h1>` único por página
- [ ] Hierarquia lógica: h1 → h2 → h3 (sem pular)
- [ ] Não usar heading apenas para estilo visual — usar CSS para isso

### 5. Links com texto descritivo

- [ ] Links têm texto que descreve o destino
- [ ] Evitar "clique aqui", "saiba mais", "acesse"

```html
<!-- Evitar -->
<a href="/servicos">Clique aqui</a>

<!-- Correto -->
<a href="/servicos">Ver todos os serviços</a>

<!-- Se precisar de texto genérico, usar aria-label -->
<a href="/servicos" aria-label="Ver todos os serviços de personal training">Saiba mais</a>
```

### 6. Formulários acessíveis

- [ ] Todo `<input>` tem um `<label>` associado via `for` / `id`
- [ ] Mensagens de erro são textuais (não apenas cor vermelha)
- [ ] Campos obrigatórios marcados com `required` e indicador visual

```html
<!-- Correto -->
<label for="email">E-mail *</label>
<input type="email" id="email" name="email" required placeholder="seu@email.com">

<!-- Evitar: label sem associação -->
<p>E-mail</p>
<input type="email" placeholder="seu@email.com">
```

### 7. Roles ARIA para componentes customizados

- [ ] Menu mobile tem `role="navigation"` e `aria-label`
- [ ] Botão do menu hambúrguer tem `aria-expanded` e `aria-controls`
- [ ] FAQ accordion tem `aria-expanded` em cada botão
- [ ] Modal (se houver) tem `role="dialog"` e `aria-modal="true"`

```html
<!-- Menu hambúrguer acessível -->
<button
  class="header__menu-btn"
  aria-expanded="false"
  aria-controls="menu-principal"
  aria-label="Abrir menu"
>
  <svg>...</svg>
</button>

<nav id="menu-principal" aria-label="Navegação principal">
  ...
</nav>
```

### 8. Vídeos e mídia

- [ ] Vídeos têm legendas (CC) ou transcrição disponível
- [ ] Vídeos com autoplay são sempre `muted` (sem áudio automático)
- [ ] Elementos `<video>` têm `controls` visível para o usuário

### 9. Idioma da página

- [ ] `<html lang="pt-BR">` presente em todas as páginas

### 10. Semântica HTML

- [ ] Usar `<button>` para ações, `<a>` para navegação
- [ ] Usar `<main>`, `<header>`, `<footer>`, `<nav>`, `<section>`, `<article>` corretamente
- [ ] `<main>` deve ter apenas um por página

---

## Teste rápido manual

O agente orienta o aluno a:

1. Navegar o site inteiro usando apenas o teclado (Tab, Enter, Esc)
2. Verificar se todos os elementos interativos são alcançáveis
3. Usar o leitor de tela do navegador:
   - Windows: NVDA (gratuito) ou Narrador nativo
   - Mac: VoiceOver (Cmd+F5)
4. Rodar Lighthouse no Chrome (F12 → Lighthouse → Accessibility) — meta: pontuação ≥ 90

---

## Regras do Agente

1. Nunca usar `outline: none` sem substituto visual.
2. Todo `<img>` precisa de `alt` — sem exceção.
3. Usar `<button>` para toggles e ações, nunca `<div>` clicável.
4. Verificar contraste antes de finalizar o design system em `IDENTIDADE-VISUAL.md`.
5. Registrar score do Lighthouse Accessibility no `BRIEFING.md` antes do deploy.
