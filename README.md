🩸 RedFlow API
RedFlow é uma plataforma desenvolvida em Node.js com armazenamento em memória, criada para o gerenciamento de bancos de sangue hospitalares. O projeto foi construído como parte do curso Full Stack Web da iniciativa Programadores do Amanhã (PdA), utilizando arquitetura MVC, Express, Nodemon e middlewares personalizados.

A aplicação tem como objetivo permitir o cadastro de doadores, registro e consulta de doações, além do controle do estoque por tipo sanguíneo. Toda a lógica é gerenciada por arrays em memória, focando no aprendizado prático da estruturação de APIs RESTful e organização de código backend.

⚙️ Funcionalidades
✅ Cadastro e listagem de doadores

📝 Registro e consulta de doações

🩸 Controle de estoque por tipo sanguíneo

📚 Organização modular com arquitetura MVC

🛠️ Middleware de logging para todas as requisições

🗄️ Persistência temporária com arrays (sem banco de dados)

🧩 Regras de Negócio
Cada doador possui um CPF único e um tipo sanguíneo fixo. As doações são registradas com data, volume e CPF do doador, e o estoque é calculado automaticamente com base nesses registros. Todas as requisições são monitoradas por um middleware que gera logs com data e hora.

▶️ Como Rodar
bash
Copiar
Editar
git clone https://github.com/Tayssa2212/redflow-api.git
cd redflow-api
npm install
npm run dev
Acesse via navegador ou Postman:
http://localhost:3000/

🧱 Estrutura Interna
controllers/ – Controladores com lógica das rotas

models/ – Dados em arrays (doadores, doações)

routes/ – Endpoints da API

middlewares/ – Middleware de logging

server.js – Inicializa o servidor

app.js – Carrega rotas e middlewares

💻 Tecnologias
Node.js + Express

Nodemon (ambiente dev)

Arquitetura MVC

Arrays como persistência temporária

Middleware customizado para logs

👩‍💻 Autora
Tayssa Ramos Vergilio

📄 Licença
Distribuído sob a Licença MIT. Consulte o arquivo LICENSE para detalhes.
