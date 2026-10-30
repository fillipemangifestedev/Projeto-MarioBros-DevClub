# Mario Bros — Encanadores Mario & Luigi

Landing page responsiva para um serviço fictício de encanamento, inspirada em Super Mario Bros. Feita com HTML, CSS e JavaScript puro, sem frameworks.

## Visão geral

A página apresenta os encanadores Mario & Luigi com vídeo de fundo, chamada para contato, botão fixo de WhatsApp e um formulário de orçamento que desliza pela lateral da tela.

## Funcionalidades

- Header com logo e navegação (Home, Fale Conosco, Nossos Serviços), com cores de hover diferentes para cada link
- Seção principal com logo, texto de apresentação, botão "Entre em contato" e imagem de Mario e Luigi
- Vídeo de fundo em loop, sem som, com máscara escura em degradê para dar contraste ao texto
- Botão fixo de WhatsApp no canto inferior direito
- Formulário "pedir orçamento" (nome, e-mail e dúvida) em painel lateral, controlado por `assets/js/script.js`
- Layout responsivo, do celular a monitores acima de 1920px

## Tecnologias

- HTML5
- CSS3 (variáveis, Flexbox, `clamp()`, media queries)
- JavaScript
- Fonte [Mukta](https://fonts.google.com/specimen/Mukta) via Google Fonts

## Estrutura de arquivos

```
.
├── index.html
└── assets/
    ├── CSS/
    │   ├── style.css         # estilos base, com valores fluidos
    │   └── responsive.css    # breakpoints
    ├── js/
    │   └── script.js         # abertura e fechamento do formulário
    └── visual/
        ├── img/
        │   ├── logo-header.png
        │   ├── logo.png
        │   ├── mario.png
        │   └── whatsapp.png
        └── video/
            └── video.mp4
```

## Como executar

1. Baixe ou clone o projeto.
2. Abra o `index.html` no navegador.

Não há etapa de build nem dependências. Para um servidor local, use a extensão Live Server do VS Code ou rode `npx serve` na pasta do projeto.

## Responsividade

| Largura da tela | Comportamento |
| --- | --- |
| Acima de 1920px | Conteúdo limitado a 1800px e centralizado |
| Até 1024px | Colunas de texto e imagem mais compactas |
| Até 768px | Layout em coluna única, header centralizado, texto alinhado à esquerda |
| Até 480px | Botão de contato em largura total, espaçamentos reduzidos |
| Celular deitado (altura até 500px) | Seção principal sem altura mínima, formulário com rolagem |

Decisões técnicas principais:

- Tamanhos de fonte, margens e imagens usam `clamp()` e unidades relativas, em vez de valores fixos em pixels.
- O formulário nunca ultrapassa 350px de largura nem a largura da tela, e tem rolagem interna em telas baixas.
- Os campos do formulário usam fonte de 16px para evitar o zoom automático do iOS.
- O vídeo usa `playsinline` para tocar na própria página no iOS.
- `prefers-reduced-motion` desativa as transições para quem prefere menos movimento.

## Cores

| Variável | Valor |
| --- | --- |
| `--vermelho` | `#e11b0f` |
| `--verde` | `#10900b` |
| `--verde-neon` | `#18d80f` |
| `--amarelo` | `#f9c40d` |
| `--branco` | `#ffffff` |

## Pendências conhecidas

- Os links de navegação e do WhatsApp ainda usam `href="#"`. Troque pelas seções reais e pelo link `https://wa.me/NUMERO`.
- O formulário não envia os dados para lugar nenhum. É preciso um back-end ou um serviço de formulários.
- O vídeo de fundo é pesado em conexões lentas. Vale considerar uma imagem de fallback.
- Os textos de `alt` das imagens (`logo-mario`, `mario&luigi`) podem ser mais descritivos.

## Aviso

Mario, Luigi e Super Mario Bros. pertencem à Nintendo. Este é um projeto de estudo, sem fins comerciais.
