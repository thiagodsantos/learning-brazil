# Memória do projeto — learning-brazil

Este diretório contém um arquivo markdown por tópico, documentando o que foi
implementado em cada página do site.

## Estrutura do site

- `index.html` — roteiro cronológico (roadmap) de todos os tópicos.
- `references.html` — referências (livros, cursos, vídeos, artigos) por tópico.
- `topics/*.html` — uma página dedicada por tópico, com explicação detalhada e
  diagrama Mermaid.
- `js/topics.js` — registro central de tópicos + injeção da barra lateral e
  navegação anterior/próximo.
- `css/styles.css` — estilos compartilhados (sidebar, cards, tabelas, roadmap).

## Stack

- HTML5 + Tailwind CSS (CDN)
- Vanilla JavaScript (sem framework)
- Mermaid 11 (ESM via CDN) para os diagramas

## Convenções de cada página de tópico

- `<body data-topic="ID">` — liga a página ao registro em `js/topics.js`.
- `#sidebar-mount` — onde a barra lateral é injetada.
- `#prevnext-mount` — onde os cartões anterior/próximo são injetados.
- Um bloco `.mermaid` com o diagrama do tópico.
- Seções: "O que aconteceu", "Efeitos colaterais", "Quem apoiou", "Envolvidos",
  "Como acabou" (conforme o tópico).
- Tabela de envolvidos + callouts + card de "Pontos-chave".
