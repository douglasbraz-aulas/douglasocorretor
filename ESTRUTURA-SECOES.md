# Protocolo de Estrutura de Seções

Este protocolo define os templates de estrutura para os tipos de site mais comuns. O agente consulta o `BRIEFING.md` para identificar o tipo e propõe o esqueleto de seções ao aluno **antes de escrever qualquer HTML**.

---

## Como usar

Após o `PLANEJAMENTO.md`, o agente pergunta:

> "Com base no seu objetivo, seu site se encaixa melhor em qual desses modelos?"

Apresentar as opções abaixo ao aluno. Se o aluno não souber, o agente recomenda com base no objetivo registrado no `BRIEFING.md`.

---

## Templates de Estrutura

### 1. Sales Page (Página de Vendas de Produto/Serviço)

Objetivo: converter visitantes em compradores diretos.

```
01. HERO           — Manchete forte + subheadline + CTA principal
02. PROBLEMA       — Agitar a dor/problema do público-alvo
03. SOLUCAO        — Apresentar o produto/serviço como solução
04. BENEFICIOS     — Lista de benefícios (não funcionalidades)
05. COMO-FUNCIONA  — Passo a passo do processo ou uso
06. PROVA-SOCIAL   — Depoimentos, números, cases
07. OFERTA         — Detalhes do produto, preço, o que está incluído
08. OBJECOES       — FAQ ou seção de objeções comuns
09. GARANTIA       — Garantia de satisfação ou reembolso
10. CTA-FINAL      — Último CTA com urgência/escassez (se aplicável)
```

Ideal para: infoprodutos, cursos, mentorias, serviços de alto ticket.

---

### 2. VSL — Video Sales Letter

Objetivo: o vídeo faz a maior parte da conversão; o texto apoia.

```
01. HERO-VIDEO     — Headline + vídeo em destaque (acima da dobra)
02. BULLET-POINTS  — 3-5 bullet points do que o visitante vai descobrir
03. CTA-PRIMARIO   — Botão de compra logo abaixo do vídeo
04. PROVA-SOCIAL   — Depoimentos curtos (reforço)
05. BONUS          — Lista de bônus incluídos
06. GARANTIA       — Garantia de satisfação
07. CTA-FINAL      — Repetição do CTA com urgência
```

Ideal para: lançamentos, produtos digitais, afiliados.

---

### 3. Apresentação + Vendas

Objetivo: apresentar a empresa/profissional e converter em leads ou clientes.

```
01. HERO           — Quem é + proposta de valor + CTA
02. SOBRE          — História, credenciais, diferenciais
03. SERVICOS       — Cards com os serviços oferecidos
04. COMO-FUNCIONA  — Processo de trabalho em etapas
05. PORTFOLIO      — Casos ou projetos realizados
06. DEPOIMENTOS    — Prova social de clientes
07. PRECO          — Tabela de planos ou "solicite orçamento"
08. FAQ            — Perguntas frequentes
09. CTA-FINAL      — Formulário de contato ou link para WhatsApp
```

Ideal para: freelancers, agências, prestadores de serviço, coaches.

---

### 4. AIDA (Atenção, Interesse, Desejo, Ação)

Estrutura persuasiva clássica em 4 blocos.

```
A — ATENCAO        — Hero com headline impactante, imagem/vídeo marcante
I — INTERESSE      — Explora o problema/contexto, gera identificação
D — DESEJO         — Apresenta a solução, benefícios, prova social
A — ACAO           — CTA claro, formulário, link de compra
```

Pode ser expandida em quantas seções forem necessárias dentro de cada bloco.

Ideal para: landing pages de campanha, páginas de lançamento rápido.

---

### 5. Link na Bio

Objetivo: centralizar links das redes sociais em uma página simples.

```
01. PERFIL         — Avatar, nome, frase curta
02. LINKS          — Grade ou lista de botões com links
03. REDES-SOCIAIS  — Ícones para Instagram, YouTube, TikTok, etc.
04. RODAPE         — Opcional: e-mail ou formulário de contato
```

Ideal para: criadores de conteúdo, perfis pessoais, marcas nas redes.

---

### 6. Site Institucional

Objetivo: presença online profissional, múltiplas páginas.

```
HOME:
01. HERO           — Proposta de valor principal
02. SOBRE-RESUMO   — Breve apresentação da empresa
03. SERVICOS-CARD  — Cards dos principais serviços
04. NUMEROS        — Dados de credibilidade (anos, clientes, projetos)
05. DEPOIMENTOS    — Prova social
06. CTA-CONTATO    — Link para página de contato

PAGINAS ADICIONAIS:
- /sobre           — História completa, equipe, missão/visão/valores
- /servicos        — Detalhamento de cada serviço
- /portfolio       — Projetos realizados
- /contato         — Formulário, mapa, telefone
```

Ideal para: empresas, clínicas, escritórios, negócios estabelecidos.

---

## Comportamento do Agente

### Passo 1 — Identificação
Com base no `BRIEFING.md`, o agente recomenda um template:

> "Pelo seu objetivo de [X], recomendo o template [Y]. Quer usar esse ou prefere outro?"

### Passo 2 — Personalização
O agente pergunta se alguma seção deve ser removida ou adicionada.

### Passo 3 — Geração do esqueleto HTML
O agente cria o `index.html` com as seções como `<section>` comentadas:

```html
<!-- HERO: Manchete principal + CTA -->
<section id="hero" class="hero">
</section>

<!-- PROBLEMA: Agitar a dor do público -->
<section id="problema" class="problema">
</section>

<!-- ... e assim por diante -->
```

### Passo 4 — Registro no BRIEFING.md
O agente atualiza o campo "Tipo de site identificado" no `BRIEFING.md`.

---

## Regras do Agente

1. Nunca criar HTML antes de definir a estrutura de seções.
2. Sempre mostrar o template completo antes de gerar código.
3. Perguntar se o aluno quer remover, adicionar ou reordenar seções.
4. Usar os IDs das seções como nomes de classe BEM conforme `GEMINI.md`.
5. Seções de CTA devem sempre ter um botão visível acima da dobra no mobile.
