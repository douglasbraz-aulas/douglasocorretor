# Protocolo de Planejamento — Discovery

Este protocolo é executado **antes de qualquer código ser escrito**. O agente conduz as perguntas abaixo com o aluno e gera um `BRIEFING.md` na raiz do projeto ao final.

---

## Como usar

Ao abrir um projeto novo, o agente deve perguntar:

> "Antes de começar, preciso entender melhor o projeto para estruturar tudo certo. Vou fazer algumas perguntas rápidas."

---

## Perguntas de Discovery

### 1. Objetivo do site

> "Qual é o objetivo principal do site?"

Opções sugeridas ao aluno:
- Vender um produto ou serviço diretamente
- Capturar leads (e-mail, WhatsApp)
- Apresentar a empresa ou portfólio
- Página de link na bio (redes sociais)
- Página de evento ou lançamento

### 2. Público-alvo

> "Quem é o público-alvo? Descreva brevemente: nicho, faixa etária, nível de consciência do problema."

Exemplo de resposta esperada: "Mulheres de 30-45 anos que querem emagrecer mas não têm tempo para academia."

### 3. Identidade visual

> "Já tem identidade visual definida (logo, cores, fontes)?"

- Sim → pedir arquivos ou informar cores/fontes
- Não → o protocolo `IDENTIDADE-VISUAL.md` será executado antes de criar CSS

### 4. Páginas necessárias

> "Quantas páginas o site precisa ter?"

Exemplos comuns:
- 1 página (landing page)
- 3-5 páginas (home + sobre + serviços + contato)
- Mais de 5 (projeto maior, definir escopo)

### 5. Anúncios em redes sociais

> "Vai usar o site para anunciar no Instagram, Facebook ou TikTok?"

- Sim → landing page precisa de pixel de rastreamento, carregamento rápido, CTA acima da dobra
- Não → estrutura padrão

### 6. Prazo

> "Tem prazo definido para entrega?"

Registrar no briefing para priorização.

### 7. Referências visuais

> "Tem algum site que gosta do estilo ou que seja referência para este projeto?"

Registrar URLs no briefing.

---

## Output: BRIEFING.md

Ao final das perguntas, o agente gera o arquivo `BRIEFING.md` na raiz do projeto com este modelo:

```markdown
# Briefing do Projeto

## Objetivo
[resposta do aluno]

## Público-alvo
[resposta do aluno]

## Identidade visual
- Logo: [sim/não - descrição]
- Cores: [valores ou "a definir com IDENTIDADE-VISUAL.md"]
- Fontes: [valores ou "a definir com IDENTIDADE-VISUAL.md"]

## Páginas
[lista de páginas necessárias]

## Anúncios em redes sociais
[sim/não - impacto na estrutura]

## Prazo
[data ou "sem prazo definido"]

## Referências visuais
[URLs ou "sem referências"]

## Tipo de site identificado
[Sales Page / VSL / Apresentação + Vendas / AIDA / Link na Bio / Institucional]
```

> O campo "Tipo de site identificado" é preenchido pelo agente com base nas respostas, consultando `ESTRUTURA-SECOES.md`.

---

## Regras do agente

1. Nunca pular este protocolo em projetos novos.
2. Se o aluno não souber responder, oferecer as opções como múltipla escolha.
3. Gerar o `BRIEFING.md` mesmo com respostas incompletas — marcar campos com "a definir".
4. Após gerar o `BRIEFING.md`, informar: "Briefing salvo. Próximo passo: definir a estrutura de seções."
