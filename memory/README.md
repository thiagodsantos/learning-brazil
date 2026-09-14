# Memória do projeto

Este diretório registra o conteúdo implementado no site e decisões editoriais importantes.

- O site é estático: HTML5, CSS próprio, Tailwind CDN previsto no plano original, e JavaScript vanilla.
- A navegação lateral e os botões anterior/próximo são injetados por `assets/site.js`.
- Os diagramas usam Mermaid 11 via CDN ESM e podem exigir conexão com a internet.
- Conteúdos sobre pessoas ou investigações contemporâneas usam linguagem condicional e destacam a presunção de inocência.
- Consulte `references.html` para fontes públicas, livros, cursos e dados.

## Como atualizar

1. Edite o conteúdo da página correspondente em `topics/`.
2. Mantenha o `data-topic` alinhado com o ID em `assets/site.js`.
3. Ao adicionar um tópico, atualize `TOPICS`, o roteiro em `index.html`, o arquivo HTML e uma nota em `memory/topics/`.
4. Verifique links internos e valide o HTML antes de publicar.
