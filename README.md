# Projeto Store Manager
API desenvolvida utilizando a arquitetura MSC (model-service-controller). O projeto consiste em um sistema de gerenciamento de vendas no formato dropshipping no qual é possível criar, visualizar, deletar e atualizar produtos e vendas (CRUD), utilizando como banco de dados relacional o MySQL e seguindo os princípios de uma API RESTful.

Os testes unitários feitos utilizando as bibliotecas Mocha, Chai e Sinon.

<hr></hr>

## 🛠 Habilidades
Node.js, JavaScript, MySQL, Arquitetura MSC, testes unitários com Mocha, Chai, Sinon.

<hr></hr>

## Variáveis de Ambiente

Para rodar esse projeto, atente-se as variáveis de ambiente no seu .env


<hr></hr>

## Utilização

- Para clonar o projeto: `git@github.com:rafhaelgomes-dev/store-manager.git`.

- Já existe um arquivo `docker-compose.yml` (Disponibilizado pela Trybe). Bastando usar o comando `docker-compose up` para rodar o MySQL e o Node pelo docker.

- Os arquivos para criação das tabelas e de seed se encontram nos arquivos `migration.sql` e `seed.sql` respectivamente. E podem ser utilizados em alguma ferramenta de gerenciamento de bancos de dados (como DBeaver, Extensão no VSCode MySQL ou MySQL Workbench).

- `npm install` para instalar as dependências.

- `npm start` para rodar a aplicação usando o node.

- `npm run debug` para rodar a aplicação usando o nodemon.

- `npm test` para testar a aplicação.

- Utilizar alguma Plataforma de API para acessar os endpoints e fazer seus devidos experimentos. Exemplos: Postman e Insomnia.

<hr></hr>

## Diagrama

![Diagrama de relacionamentos das tabelas](diagrama.png)

<i> Imagem disponibilizada pela Trybe </i>

<hr></hr>

## Endpoints

- GET `/products` para listar todos os produtos.
- GET `/products/:id` para listar um produto pelo id.
- POST `/products` para cadastrar um novo produto. (Deve receber no body a propriedade `name`).
- POST `/sales` para cadastrar vendas. (Deve receber um array de objetos, contendo as propriedades `productId` e `quantity`).
- GET `/sales` para listar todas as vendas.
- GET `/sales/:id` para listar vendas por id.
- PUT `/products/:id` para atualizar o nome de um produto por id. (Deve receber no body a propriedade `name`).
- DELETE `/products/:id` para deletar um produto, buscando por id.
- DELETE `/sales/:id` para deletar uma venda, buscando por id.

<hr></hr>