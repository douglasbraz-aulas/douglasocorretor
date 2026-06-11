# Passo a Passo — Do Zero ao Site no Ar

Siga esta ordem sempre que iniciar um projeto novo.

---

## PASSO 0 — Estruturar o Projeto

Antes de qualquer código, verificar se `src/` existe. Se não existir:

> "Crie a estrutura do projeto."

O agente cria `src/` com todas as subpastas e arquivos base vazios:
- `src/css/variables.css` (vazio — preenchido no PASSO 3)
- `src/css/reset.css` e `src/css/main.css` (base mínimo)
- `src/js/main.js` (entry point)
- `src/css/components/`, `src/js/modules/`, `src/assets/images/`, `src/assets/icons/`

**Regra:** `src/` é a única pasta que vai para o deploy. Protocolos ficam na raiz. Templates/ é só referência — nunca é copiada.

---

## PASSO 1 — Planejamento

**Arquivo:** `PLANEJAMENTO.md`

Peça ao agente:
> "Leia o arquivo PLANEJAMENTO.md e inicie o processo de planejamento do projeto."

O agente vai fazer perguntas sobre objetivo, público, identidade visual, páginas e prazo.
Ao final, ele gera o `BRIEFING.md` automaticamente.

---

## PASSO 2 — Estrutura de Seções

**Arquivo:** `ESTRUTURA-SECOES.md`

Peça ao agente:
> "Leia o BRIEFING.md e o arquivo ESTRUTURA-SECOES.md e me mostre qual estrutura de seções se encaixa no meu projeto."

O agente identifica o tipo de site (Sales Page, VSL, AIDA, etc.) e propõe a ordem das seções.
Após aprovação, ele cria o esqueleto do `index.html`.

---

## PASSO 3 — Design System

**Arquivo:** `DESIGN-SYSTEM.md`

Peça ao agente:
> "Leia o arquivo DESIGN-SYSTEM.md e execute o protocolo de setup."

O agente verifica se o cliente tem um guia de marca (PDD). Se sim, extrai os tokens do documento. Se não, faz perguntas sobre cores, fontes e estilo. Ao final, preenche o `src/css/variables.css` com todos os tokens e marca o design system como COMPLETO.

---

## PASSO 4 — Produção

**Arquivo:** `COMPONENTES.md`

Agora é hora de construir as seções uma a uma.

Peça ao agente usando o catálogo de componentes:
> "Crie a seção hero com headline '[seu título]', subheadline '[seu subtítulo]' e botão CTA '[texto do botão]'."

> "Adicione 3 cards de benefícios com ícones: [benefício 1], [benefício 2], [benefício 3]."

> "Crie uma seção de depoimentos com 3 cards."

> "Adicione um FAQ accordion com as perguntas: [P1], [P2], [P3]."

Repita para cada seção do seu projeto. O agente segue as regras da `REGRA INICIAL.md` automaticamente.

---

## PASSO 5 — SEO

**Arquivo:** `SEO.md`

Quando o site estiver com todas as seções prontas, peça:
> "Leia o arquivo SEO.md e otimize o site para SEO."

O agente vai perguntar a palavra-chave principal e uma frase descritiva.
Depois aplica automaticamente: title, meta description, OG tags, H1, alt texts, sitemap.xml e robots.txt.

---

## PASSO 6 — Analytics

**Arquivo:** `ANALYTICS.md`

Logo após o SEO, peça:
> "Leia o arquivo ANALYTICS.md e instale o Google Analytics no projeto."

O agente vai pedir o ID de medição (G-XXXXXXXXXX) e instalar o snippet em todas as páginas.

> Se ainda não tem conta no Google Analytics, acesse analytics.google.com e crie antes deste passo.

---

## PASSO 7 — Acessibilidade

**Arquivo:** `ACESSIBILIDADE.md`

Peça ao agente:
> "Leia o arquivo ACESSIBILIDADE.md e revise o site para acessibilidade."

O agente percorre o HTML e corrige: contraste, alt texts, labels, foco visível e roles ARIA.

---

## PASSO 8 — Deploy

**Arquivo:** `DEPLOY.md`

Peça ao agente:
> "Leia o arquivo DEPLOY.md e me guie para publicar o site."

O agente guia passo a passo:
1. Subir o código no GitHub
2. Conectar ao Vercel
3. Registrar o domínio (Registro BR ou Hostinger)
4. Configurar o DNS
5. Verificar HTTPS

---

## PASSO 9 — Manutenção

**Arquivo:** `MANUTENCAO.md`

Depois que o site estiver no ar, use este arquivo sempre que precisar:
> "Leia o arquivo MANUTENCAO.md e me ajude a [atualizar um texto / trocar uma imagem / adicionar uma seção]."

---

## Resumo visual

```
PASSO 0   SCAFFOLD           → cria src/ com estrutura base
PASSO 1   PLANEJAMENTO       → gera BRIEFING.md na raiz
PASSO 2   ESTRUTURA-SECOES   → gera esqueleto do src/index.html
PASSO 3   DESIGN-SYSTEM      → preenche src/css/variables.css
PASSO 4   COMPONENTES        → constrói as seções em src/
PASSO 5   SEO                → otimiza para Google
PASSO 6   ANALYTICS          → instala GA4
PASSO 7   ACESSIBILIDADE     → revisão final
PASSO 8   DEPLOY             → publica src/ no Vercel
PASSO 9   MANUTENCAO         → atualizações pós-lançamento
```
