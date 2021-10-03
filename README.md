


# codingleo.com

- [Codebase](#codebase)
- [Tecnologias](#-tecnologias)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Ducks Pattern](#-ducks-pattern)
- [Code Style](#-code-style)
- [Primeiro setup](#primeiro-setup)
- [Rodando localmente](#-rodando-localmente)

## Codebase

### 💻 Tecnologias

Agora vamos falar um pouco da arquitetura deste projeto:

- **Fullstack JavaScript**: Nós usamos Node.js no nosso backend e React para o frontend. Todo o codebase relacionado ao Core Backoffice é feito em JavaScript.

Aqui está uma lista das principais tecnologias que usamos:

- **React**: Frontend React App
- **Styled Components**: Estilo para os componentes
- **Redux**: Container do estado da aplicação
- **Redux-Saga**: Middleware usado pela store do Redux para se comunicar com os diferentes estados de forma assíncrona.
- **Redux Sauce**: Ferramenta para criar e organizar reducers, actions e types do Redux.



###  🦆 Ducks Pattern

A principal diferença estrutural do padrão Ducks é que ele combina reducers, types e actions em um único arquivo, e com a ajuda do Redux Sauce, teremos um estado global, actions, types, reducers e estado inicial para cada página ou estrutura necessária. Assim, tornando os arquivos menos extensos e de fácil manutenção.


### ✨ Code Style

Nós rodamos o Prettier e o ESLint para manter padrões básicos de qualidade de código, os quais se baseiam no padrão [airbnb](https://github.com/airbnb/javascript). O ESLint também é rodado na pipeline para garantir que nenhum código de baixa qualidade entre no repositório. Para facilitar o processo de correção de pendências com a configuração do ESLint, baixe a extensão de VS Code [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) e a configure para formatar o código em "Format on save".


### ⚙️ Instalar

Temos apenas dois passos de instalação da aplicação:

1. **Instalar yarn**: Nós usamos [yarn](https://yarnpkg.com) para gerenciar as dependencias do código JavaScript. Leia a [documentação](https://yarnpkg.com/en/docs/install) para instruções de como instalar.
2. **Instalar dependências**: Para instalar as dependencias no projeto basta rodar o comando:
`yarn`

### 🔥 Rodando localmente

1. **Iniciar**: Para rodar localmente basta rodar o comando:
`yarn start`
2. **Lint**: Para testar a sintaxe de acordo com as configurações de lint rode o comando:
`yarn lint`
