# Protocolo de Analytics — Google Analytics 4

Este protocolo é ativado junto com `SEO.md`, **antes do deploy**. O agente instala o rastreamento em todas as páginas e configura os eventos básicos.

---

## Quando ativar

Executar imediatamente após o `SEO.md`, na fase de finalização:

> "Agora vou configurar o Google Analytics para você acompanhar quantas pessoas visitam o site. Tem uma conta no Google Analytics?"

---

## Perguntas

### 1. Tem conta no Google Analytics?

- Sim → pedir o ID de medição (formato `G-XXXXXXXXXX`)
- Não → orientar a criar:

> "Acesse analytics.google.com, clique em 'Começar a usar', crie uma conta com o nome da sua empresa, crie uma Propriedade GA4 com o nome do site, e copie o ID de medição que aparece (começa com G-)."

### 2. Tem botão de CTA principal?

> "Qual é o texto ou ID do botão principal de compra/contato? (ex: 'Quero contratar', '#btn-cta')"

---

## Instalação automática

Com o ID de medição em mãos, o agente:

### Passo 1 — Snippet no `<head>` de todas as páginas

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Substituir `G-XXXXXXXXXX` pelo ID real.

### Passo 2 — Evento de clique no CTA principal

No arquivo `src/js/modules/analytics.js` (criar se não existir):

```js
// Rastreia cliques nos CTAs principais
export function initAnalyticsEvents() {
  const ctaButtons = document.querySelectorAll('[data-analytics="cta"]');

  ctaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      gtag('event', 'cta_click', {
        event_category: 'engajamento',
        event_label: btn.textContent.trim(),
      });
    });
  });
}
```

E no `src/js/main.js`:
```js
import { initAnalyticsEvents } from './modules/analytics.js';
initAnalyticsEvents();
```

### Passo 3 — Atributo nos botões de CTA

O agente adiciona `data-analytics="cta"` em todos os botões de ação identificados:

```html
<a href="#contato" class="btn btn--primary" data-analytics="cta">Quero contratar</a>
```

### Passo 4 — Evento de scroll (opcional)

Adicionar ao `analytics.js` para rastrear engajamento:

```js
// Dispara evento quando o usuário chega a 50% e 90% da página
export function initScrollTracking() {
  const milestones = { 50: false, 90: false };

  window.addEventListener('scroll', () => {
    const percent = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );

    if (percent >= 50 && !milestones[50]) {
      milestones[50] = true;
      gtag('event', 'scroll_50', { event_category: 'engajamento' });
    }

    if (percent >= 90 && !milestones[90]) {
      milestones[90] = true;
      gtag('event', 'scroll_90', { event_category: 'engajamento' });
    }
  });
}
```

---

## Verificação após deploy

Passos para o aluno confirmar que está funcionando:

1. Publicar o site no Vercel (ver `DEPLOY.md`)
2. Acessar o site publicado
3. Abrir analytics.google.com → Relatórios → Tempo real
4. Se aparecer "1 usuário ativo", está funcionando

Tempo para dados aparecerem nos relatórios completos: 24-48h.

---

## Eventos rastreados por padrão (GA4 automático)

O GA4 já rastreia sem configuração extra:
- Pageviews (visualizações de página)
- Sessões
- Usuários
- Tempo na página
- Origem do tráfego (Google, Instagram, direto)
- Dispositivo (mobile, desktop)

Com este protocolo, são adicionados:
- `cta_click` — cliques nos botões de ação
- `scroll_50` — usuários que chegaram a 50% da página
- `scroll_90` — usuários que chegaram a 90% da página

---

## Privacidade — LGPD

Para sites brasileiros, adicionar aviso de cookies:

O agente gera um banner simples em `src/js/modules/cookie-banner.js`:

```js
export function initCookieBanner() {
  if (localStorage.getItem('cookies-aceitos')) return;

  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.innerHTML = `
    <p>Este site usa cookies para melhorar sua experiência e analisar o tráfego.</p>
    <button id="aceitar-cookies">Aceitar</button>
  `;
  document.body.appendChild(banner);

  document.getElementById('aceitar-cookies').addEventListener('click', () => {
    localStorage.setItem('cookies-aceitos', 'true');
    banner.remove();
  });
}
```

---

## Regras do Agente

1. Nunca hardcodar o ID de medição sem perguntar ao aluno — deixar `G-XXXXXXXXXX` como placeholder se não fornecido.
2. O snippet do GA4 sempre vai antes do fechamento do `</head>`.
3. Não usar Google Tag Manager neste projeto (aumenta complexidade desnecessária).
4. Atributo `data-analytics="cta"` em todos os botões de ação antes de finalizar.
5. Sempre orientar o aluno a verificar no Relatório em Tempo Real após o deploy.
