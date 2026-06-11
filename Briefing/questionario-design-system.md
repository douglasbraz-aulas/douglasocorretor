> **SUBSTITUIDO:** Este arquivo foi absorvido por `DESIGN-SYSTEM.md` na raiz do projeto. Use `DESIGN-SYSTEM.md` como ponto de entrada.

# Questionário de Design System — Protocolo do Agente

Este arquivo define o roteiro que o agente de IA deve seguir quando não existe um `BRIEFING.md` preenchido na raiz do projeto, ou quando o aluno pede para definir a identidade visual.

Execute as perguntas uma a uma, aguardando a resposta antes de continuar.

Ao final, preencha o `BRIEFING.md` com as respostas e anuncie: "Briefing salvo. Vou começar a construção."

---

## Abertura (sempre dizer)

> "Antes de criar qualquer código, preciso entender o projeto. Vou fazer algumas perguntas rápidas — leva menos de 5 minutos."

---

## BLOCO 1 — Negócio

**P1.** "Qual o nome da empresa ou marca do cliente?"

**P2.** "Qual o segmento de atuação?"
_(Saúde / Jurídico / Imóveis / Educação / Tech / Beleza / Alimentação / Outro)_

**P3.** "Quem é o público principal? Descreva com uma frase."
_(Ex: mulheres 30–50 anos que buscam tratamento estético / pequenas empresas que precisam de suporte jurídico)_

**P4.** "Escolha 3 palavras que descrevem como a marca quer ser percebida."
_(Ex: moderno, confiável, acessível)_

**P5.** "Qual o tom de voz da marca?"
_(Formal e técnico / Profissional e acessível / Descontraído e próximo / Empático e acolhedor)_

---

## BLOCO 2 — Design System

**P6.** "O cliente já tem um design system, guia de marca ou manual de identidade visual?"
_(Sim / Não)_

### Se Sim → BLOCO 2A

**P6A.** "Você tem o link ou arquivo PDF? Se sim, informe aqui."

**P6B.** "Descreva as principais informações do design system: cores (hex se souber), fontes usadas, e alguma regra importante de uso da marca."

_Registrar tudo no BRIEFING.md e pular para BLOCO 3._

### Se Não → BLOCO 2B

**P6C.** "Qual a cor principal da marca? Pode ser o nome da cor ou o código hex."

Se o aluno não souber, oferecer paletas prontas por estilo:

| Estilo | Sugestão de paleta |
|--------|-------------------|
| Moderno / Tech | `#6366F1` indigo sobre fundo dark `#0F172A` |
| Saúde / Natural | `#059669` verde sobre fundo claro `#F0FDF4` |
| Confiança / Jurídico | `#1D4ED8` azul sobre fundo `#EFF6FF` |
| Premium / Luxo | `#B8860B` dourado sobre fundo `#FAF9F6` |
| Energético / Jovem | `#F97316` laranja sobre fundo `#FFF7ED` |

**P6D.** "Tem uma segunda cor de destaque?"

**P6E.** "Qual o estilo visual que mais combina com a marca?"
- **Moderno** — linhas limpas, gradientes sutis, tecnológico
- **Minimalista** — muito espaço em branco, simples e elegante
- **Futurista** — dark, formas arrojadas, efeitos visuais
- **Profissional** — sóbrio, estruturado, corporativo

**P6F.** "Tem alguma fonte específica da marca? Ex: Montserrat, Playfair Display."
_(Se não souber, informar: "Posso sugerir combinações do Google Fonts baseadas no estilo escolhido.")_

Combinações sugeridas por estilo:

| Estilo | Heading | Body |
|--------|---------|------|
| Moderno | Inter | Inter |
| Minimalista | Playfair Display | Lato |
| Futurista | Space Grotesk | DM Sans |
| Profissional | Nunito | Open Sans |

**P6G.** "Que nível de animação você quer no site?"

| Opção | Descrição |
|-------|-----------|
| **Sem animações** | Estático e direto ao ponto |
| **Sutis** | Elementos aparecem suavemente ao rolar (scroll reveal) |
| **Moderadas** | Scroll reveal + efeitos hover nos botões e cards |
| **Expressivas** | Movimento contínuo, gradientes animados, impacto visual alto |

→ Registrar em `BRIEFING.md` como **Animações:**

---

## BLOCO 3 — Fotos e Imagens

**P7.** "Que tipo de imagens o cliente tem disponível?"
_(Fotos de ensaio profissional / Fotos do ambiente ou produto / Fotos pessoais/redes sociais / Vai criar com IA / Não tem nada ainda)_

**P8.** "Tem foto profissional (retrato) do responsável ou do profissional do site?"
_(Sim / Não)_

---

## BLOCO 4 — Textos e CTAs

**P9.** "O cliente tem slogan ou frase principal da marca?"
_(Se sim, qual? Se não, a IA vai criar sugestões.)_

**P10.** "Os textos do site estão prontos?"
_(Sim, tenho tudo / Tenho alguns, preciso de ajuda / Não — a IA vai criar)_

**P11.** "Qual o número de WhatsApp que vai aparecer no site para os visitantes entrarem em contato?"
_(DDI + DDD + número — ex: 5511999999999)_

**P12.** "Qual a principal ação que o visitante deve fazer ao entrar no site?"
_(Agendar uma consulta ou reunião / Comprar um produto ou serviço / Entrar em contato / Baixar material gratuito / Outro)_

---

## BLOCO 5 — Planejamento

**P13.** "Qual o objetivo principal do site?"
_(Apresentar a empresa ou serviços / Vender produto ou curso online / Captar contatos pelo formulário / Apresentar portfólio profissional / Outro)_

**P14.** "O site vai precisar de um formulário de pré-atendimento?"
_(Sim — qual segmento: médico/saúde, advocacia, imóveis, educação, outro / Não)_

**P15.** "O cliente tem redes sociais para incluir no site?"
_(Instagram, LinkedIn, YouTube — informar os links ou @)_

**P16.** "O domínio do site já está definido?"
_(Sim — qual? / Não / Não sei o que é isso)_

**P17.** "Qual o prazo desejado para entrega?"
_(Urgente — até 7 dias / Até 30 dias / Até 3 meses / Sem pressa)_

**P18.** "Tem algum site de referência que o cliente admira? Pode ser de concorrentes ou de outros segmentos."

---

## Ação final

Com as respostas em mãos:

1. Preencha o `BRIEFING.md` na raiz do projeto com todos os dados coletados.
2. Adapte o `Templates/css/variables.css` com as cores e fontes informadas.
3. Escolha o template base mais adequado conforme o objetivo do site:

| Objetivo | Template sugerido |
|----------|------------------|
| Vender produto / mentoria | `vendas.html` ou variação |
| Apresentar profissional liberal | `profissional.html` + formulário do segmento |
| Vídeo como centro da venda | `vsl.html` |
| Premium / consultoria | `vendas-minimal.html` |
| Tech / jovem / startup | `vendas-glass.html` ou `vendas-dark.html` |
| Varejo / agressivo | `vendas-bold.html` |
| Seções com estilos alternados | `vendas-intercalada.html` |

4. Anuncie: "Briefing salvo em BRIEFING.md. Vou iniciar a construção com o template [nome]."
