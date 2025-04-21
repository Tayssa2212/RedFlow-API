Perfeito! Aqui está o **README.md completo** pronto para colar no GitHub. Ele está formatado em Markdown e com emojis para deixar a apresentação mais atrativa:

---

```md
# 🩸 RedFlow API

**Versão**: Node.js (armazenamento em memória)  
**Licença**: MIT  
**Curso**: Full Stack Web — Programadores do Amanhã (PdA)

---

## 🧬 Sobre o Projeto

> RedFlow é uma plataforma para **gerenciamento de bancos de sangue hospitalares**, desenvolvida com foco no aprendizado de backend e estruturação de APIs RESTful com **Node.js**.

Ela permite:
- Gerenciar doadores e doações
- Controlar o estoque por tipo sanguíneo
- Organizar toda a aplicação usando arquitetura **MVC**

---

## ⚙️ Funcionalidades

✅ **Cadastro e listagem de doadores**  
📝 **Registro e consulta de doações**  
🩸 **Controle de estoque por tipo sanguíneo**  
📚 **Organização em arquitetura MVC**  
🛠️ **Middleware de logging** em todas as requisições  
🗄️ **Persistência temporária em memória (arrays)**

---

## 🧱 Estrutura do Projeto

```
redflow-api/
├── controllers/       # Lógica de controle da aplicação
├── models/            # Modelos de dados em memória
├── routes/            # Rotas da API
├── middlewares/       # Logger de requisições
├── config/            # (Reservado para banco futuro)
├── app.js             # Configuração do Express
├── server.js          # Inicialização do servidor
├── package.json       # Configurações do projeto
```

---

## 🧩 Entidades

- **👤 doadorModel**: Armazena informações dos doadores (CPF, nome, tipo sanguíneo)
- **📦 doacaoModel**: Registra as doações (volume, data, doador)
- **📊 estoque**: Calculado com base nas doações por tipo sanguíneo
- **🧪 tipo_sanguineo**: Validado na lógica da aplicação

---

## 📋 Regras de Negócio

- Cada doador possui **CPF único** e **tipo sanguíneo fixo**
- As doações registram **data**, **volume** e **doador**
- O estoque pode ser consultado por tipo sanguíneo
- Toda requisição gera um **log com data/hora** via middleware

---

## ▶️ Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/redflow-api.git
cd redflow-api
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie a API com Nodemon

```bash
npm run dev
```

### 4. Teste via navegador ou Postman

```
http://localhost:3000/
```

---

## 💻 Tecnologias Utilizadas

- ⚙️ **Node.js** – Backend JavaScript
- 🚀 **Express** – Framework de rotas
- 🔁 **Nodemon** – Atualizações automáticas
- 🧱 **Arquitetura MVC** – Separação clara de responsabilidades
- 💾 **Arrays em memória** – Persistência temporária

---

## 👩‍💻 Contribuidores

- Tayssa Ramos Vergilio

---

## 📄 Licença

Este projeto está sob a Licença MIT.  
Consulte o arquivo `LICENSE` para mais informações.
```

---

### Próximos passos

a. Quer adicionar exemplos de chamadas com `curl` e JSON no README?  
b. Deseja que eu gere o `swagger.json` com documentação automática?  
c. Posso preparar uma estrutura futura para persistência com MongoDB ou SQLite?
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
