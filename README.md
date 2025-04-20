Plataforma RedFlow
versão: Node.js (armazenamento em memória)
licença: MIT

RedFlow é uma plataforma para gerenciamento de bancos de sangue hospitalares. O sistema foi desenvolvido para auxiliar hospitais na gestão de doadores, doações, tipos sanguíneos e estoques, permitindo um fluxo organizado das operações. Este projeto foi desenvolvido como parte da formação no curso Full Stack Web da Programadores do Amanhã (PdA).

📝 Descrição
O projeto consiste em uma API RESTful construída com Node.js, utilizando Express, Nodemon e arquitetura MVC. Toda a lógica de negócio e os dados são gerenciados em memória por meio de arrays, com foco no aprendizado de estruturação backend e rotas HTTP. A plataforma permite registrar doadores, controlar doações e consultar o estoque por tipo sanguíneo.

⚙️ Funcionalidades da API
Cadastro e listagem de doadores

Registro e consulta de doações

Controle de estoque por tipo sanguíneo

Organização por arquitetura MVC

Middleware de logging para todas as requisições

Estrutura preparada para futura persistência (banco ou arquivo)

📁 Estrutura do Projeto
Backend: Node.js + Express + MVC

Persistência: Arrays em memória (sem banco de dados)

Execução: Nodemon para ambiente de desenvolvimento

Middleware: Logger de requisições

🗃️ Estrutura das Entidades
doadorModel: Representa e armazena dados de doadores

doacaoModel: Armazena doações realizadas

estoque: Calculado com base nas doações registradas

tipo_sanguineo: Validado dentro da lógica de aplicação

▶️ Como Rodar a API
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/redflow-api.git
cd redflow-api
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o servidor com nodemon:

bash
Copiar
Editar
npm run dev
Teste no navegador ou via Postman:

arduino
Copiar
Editar
http://localhost:3000/
📋 Regras de Negócio
Cada doador tem CPF único e tipo sanguíneo definido

O volume total disponível por tipo sanguíneo é consultável

Doações são registradas com data, doador e volume

Toda requisição gera log com data/hora

💻 Tecnologias Utilizadas
Node.js – Ambiente de execução JavaScript no backend

Express – Framework web leve e robusto

Nodemon – Reload automático durante o desenvolvimento

Arquitetura – MVC com organização modular

Armazenamento – Arrays em memória

👥 Contribuidores
Tayssa Ramos Vergilio

📄 Licença
Este projeto está licenciado sob a Licença MIT – consulte o arquivo LICENSE para mais informações.
