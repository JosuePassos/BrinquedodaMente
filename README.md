# BrinquedodaMente

**Brincar, descobrir e aprender de novas formas.**

A BrinquedodaMente é uma iniciativa de criação de materiais educativos produzidos por impressão 3D, desenvolvidos para tornar as atividades de aprendizagem mais práticas, interativas e acessíveis.

Este projeto consiste em um catálogo digital para apresentar os produtos, divulgar os materiais e facilitar o contato entre clientes e a marca.

## Sobre o projeto

O site foi pensado para profissionais da educação e outras pessoas interessadas em materiais educativos que possam complementar atividades de aprendizagem.

### Funcionalidades

- **Catálogo de produtos:** fotos, descrições e preços dos materiais.
- **Busca de produtos:** pesquisa por nome, categoria ou descrição.
- **Filtros por categoria:** organização dos materiais para facilitar a navegação.
- **Pedidos pelo WhatsApp:** contato direto para consultar e solicitar produtos.
- **Layout responsivo:** adaptação para computadores, tablets e celulares.

## Tecnologias utilizadas

- HTML5 — estrutura do site.
- CSS3 — identidade visual, layout e responsividade.
- JavaScript — catálogo, pesquisa, filtros e integração com o WhatsApp.

## Estrutura do projeto

```text
BrinquedodaMente/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── alfabeto.jpeg
│   ├── mapa.jpeg
│   └── numeros.jpeg
└── README.md
```

A pasta `images/` armazena as fotografias utilizadas no catálogo.

## Como executar

1. Abra a pasta do projeto no Visual Studio Code.
2. Abra o arquivo `index.html` no navegador.

Para facilitar o desenvolvimento, recomenda-se utilizar a extensão Live Server no VS Code.

## Como adicionar produtos

Os produtos são cadastrados no array `products`, dentro do arquivo `script.js`.

Cada produto possui:

- `id`: identificador.
- `name`: nome do produto.
- `category`: categoria.
- `description`: descrição.
- `price`: preço em reais.
- `image`: caminho da fotografia.

Exemplo:

```javascript
{
  id: 1,
  name: "Alfabeto móvel",
  category: "Alfabetização",
  description: "Material educativo para atividades de alfabetização.",
  price: 49.90,
  image: "images/alfabeto.jpeg"
}
```

Substitua os dados demonstrativos pelas informações reais dos produtos.

## Configuração do WhatsApp

No início do arquivo `script.js`, configure a constante `WHATSAPP_PHONE` com o número que receberá os pedidos.

Utilize o código do país, o DDD e o número, sem espaços ou símbolos.

Exemplo de formato:

```javascript
const WHATSAPP_PHONE = "5547999999999";
```

Ao clicar no botão de um produto, o cliente será direcionado para uma conversa no WhatsApp. O site não realiza pagamentos nem armazena pedidos.

## Próximas etapas

- Adicionar fotos reais dos produtos.
- Definir a identidade visual definitiva da marca.
- Organizar o catálogo por categorias.
- Publicar o site na internet.
- Divulgar os materiais pelo Instagram e WhatsApp.

## Objetivo

Criar uma presença digital para a BrinquedodaMente, facilitando a divulgação dos materiais educativos e o contato com potenciais clientes.

---

**BrinquedodaMente — brincar também é aprender.**