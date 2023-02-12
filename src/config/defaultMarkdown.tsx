export const defaultMarkdown = `# Conheça meu SPA "Markdown Previewer"!

Você já ouviu falar do Markdown? É uma linguagem de marcação de texto que permite criar documentos com formatação e organização de forma simples e fácil. E agora, eu desenvolvi um SPA chamado "Markdown Previewer" para que você possa experimentar tudo isso!

Com o meu SPA, você pode escrever o seu texto em Markdown e ver uma prévia do resultado final em tempo real. Além disso, também é possível fazer edições no texto e ver as alterações instantaneamente. Tudo isso em uma interface simples e intuitiva, sem precisar instalar nada!

O "Markdown Previewer" é perfeito para quem quer criar documentos mais elaborados, como relatórios, artigos, apresentações e até mesmo páginas da web. E o melhor de tudo, é completamente gratuito!

Abaixo tem um guia rápido que apresenta todos os elementos suportados:

## Títulos

# Título 1
## Título 2
### Título 3
#### Título 4
##### Título 5
###### Título 6

## Ênfase

**negrito**
__negrito__
*itálico*
_itálico_
~~riscado~~

## Listas

### Não ordenada

- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3

### Ordenada

1. Item 1
2. Item 2
   1. Subitem 2.1
   2. Subitem 2.2
3. Item 3

## Links

[texto do link](https://www.github.com)

## Imagens

![texto alternativo](https://picsum.photos/350)

## Tabelas

| Coluna 1 | Coluna 2 | Coluna 3 |
| -------- | -------- | -------- |
| Linha 1, Coluna 1 | Linha 1, Coluna 2 | Linha 1, Coluna 3 |
| Linha 2, Coluna 1 | Linha 2, Coluna 2 | Linha 2, Coluna 3 |

## Citações

> Esta é uma citação.

## Código

### Inline

\`código inline\`

### Bloco de código

\`\`\`javascript
function exemplo() {
  console.log('Exemplo');
}
\`\`\`
## Tarefas

- [x] Tarefa concluída
- [ ] Tarefa não concluída`

export const defaultMarkdown2: string = `# Header 1

## Header 2

This is an [example link](http://example.com/).

\`inline code\`

\`\`\`js
function teste () {
  const vini = "string";
}
\`\`\`

- List item 1
- List item 2

> blockquote

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1920px-Markdown-mark.svg.png "Image Title")

**bolded text**`
