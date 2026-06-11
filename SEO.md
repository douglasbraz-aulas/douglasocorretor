# Protocolo de SEO

Este protocolo é ativado pelo agente **quando o site está estruturalmente pronto** (todas as seções existem, conteúdo principal preenchido). O agente faz 2 perguntas e executa o checklist completo automaticamente.

---

## Quando ativar

O agente deve perguntar ao aluno:

> "O site está quase pronto! Antes do deploy, vou otimizar o SEO. São só 2 perguntas rápidas."

---

## Perguntas obrigatórias

### 1. Palavra-chave principal

> "Qual é a palavra-chave principal do site? É o termo que seu cliente usaria no Google para te encontrar."

Exemplos:
- "personal trainer em São Paulo"
- "psicóloga online para ansiedade"
- "agência de tráfego pago para e-commerce"
- "advogado trabalhista Belo Horizonte"

Se o aluno não souber, ajudar a construir: `[serviço/produto] + [cidade/nicho]`

### 2. Frase descritiva do site

> "Em uma frase, o que o site oferece? (vai aparecer no Google)"

Exemplo: "Personal trainer especializado em emagrecimento feminino com treinos online e presenciais em São Paulo."

---

## Checklist automático

Após as respostas, o agente executa tudo sem perguntas adicionais:

### `<head>` de cada página HTML

```html
<!-- Title: inclui keyword, máx 60 caracteres -->
<title>[Keyword principal] | [Nome da marca]</title>

<!-- Description: inclui keyword, máx 160 caracteres -->
<meta name="description" content="[Frase descritiva do site]">

<!-- Open Graph (compartilhamento em redes sociais) -->
<meta property="og:title" content="[mesmo do title]">
<meta property="og:description" content="[mesmo da description]">
<meta property="og:image" content="[URL da imagem de capa — 1200x630px]">
<meta property="og:url" content="[URL final do site]">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[mesmo do title]">
<meta name="twitter:description" content="[mesmo da description]">
<meta name="twitter:image" content="[mesma imagem do OG]">

<!-- Canonical (evita conteúdo duplicado) -->
<link rel="canonical" href="[URL final do site]">

<!-- Robots -->
<meta name="robots" content="index, follow">

<!-- Charset e viewport (obrigatórios) -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Estrutura de headings

- [ ] Apenas 1 `<h1>` por página, contendo a keyword principal
- [ ] Seções secundárias usam `<h2>`
- [ ] Subseções usam `<h3>` (nunca pular níveis)

### Imagens

- [ ] Todo `<img>` tem `alt="[descrição com keyword quando relevante]"`
- [ ] Imagens em WebP (conforme `GEMINI.md`)
- [ ] Nenhuma imagem sem `alt` (mesmo que `alt=""` para decorativas)

### sitemap.xml

O agente gera `sitemap.xml` na raiz:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>[URL base]/</loc>
    <lastmod>[data de hoje YYYY-MM-DD]</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- adicionar uma <url> para cada página adicional -->
</urlset>
```

### robots.txt

O agente gera `robots.txt` na raiz:

```
User-agent: *
Allow: /
Sitemap: [URL base]/sitemap.xml
```

### Schema.org (dados estruturados)

O agente identifica o tipo pelo `BRIEFING.md` e adiciona o schema correto no `<head>`:

**Para prestadores de serviço local:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[Nome da marca]",
  "description": "[Frase descritiva]",
  "url": "[URL do site]",
  "telephone": "[Telefone se disponível]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[Cidade]",
    "addressCountry": "BR"
  }
}
</script>
```

**Para profissionais autônomos:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[Nome]",
  "jobTitle": "[Profissão]",
  "url": "[URL do site]"
}
</script>
```

---

## Performance básica (impacta SEO)

O agente verifica e corrige:

- [ ] Imagens com `loading="lazy"` (exceto as above-the-fold)
- [ ] CSS crítico no `<head>`, CSS não crítico com `defer` ou `media="print"`
- [ ] Scripts com `defer` ou `type="module"` (conforme `GEMINI.md`)
- [ ] Nenhum `console.log` em produção
- [ ] Fontes com `<link rel="preconnect">` para Google Fonts

---

## Após o deploy — Google Search Console

Passos para o aluno configurar após publicar:

1. Acessar search.google.com/search-console
2. Clicar em "Adicionar propriedade" → escolher "Prefixo de URL"
3. Colar a URL do site publicado
4. Fazer a verificação por meta tag HTML (o agente adiciona a tag no `<head>` se necessário)
5. Enviar o sitemap: Menu lateral → Sitemaps → colar `[URL]/sitemap.xml`
6. Aguardar indexação (1-7 dias)

---

## Regras do Agente

1. Nunca usar a mesma `<title>` em duas páginas diferentes.
2. A keyword principal deve aparecer no `<title>`, `<h1>`, e `<meta description>`.
3. Não inventar URL final — deixar como `[URL-DO-SITE]` se o domínio ainda não estiver definido.
4. OG image: se não existir, criar um placeholder de 1200x630px e documentar que precisa ser substituído.
5. Executar este checklist antes do deploy, nunca depois.
