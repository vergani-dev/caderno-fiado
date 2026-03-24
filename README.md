# 📒 Caderno Fiado

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Node](https://img.shields.io/badge/node.js-18+-green)
![React](https://img.shields.io/badge/react-frontend-blue)
![MongoDB](https://img.shields.io/badge/mongodb-database-green)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 📌 Descrição

O **Caderno Fiado** é uma aplicação web e mobile que permite gerenciar dívidas e pagamentos de clientes de forma prática e organizada.

Ideal para pequenos comércios, vendedores autônomos e qualquer pessoa que precise controlar fiados e transações financeiras.

---

## 🚀 Demonstração

### 💻 Web

> *(adicione aqui um print do sistema)*

![print-web](./docs/print-web.png)

### 📱 Mobile

> *(adicione aqui um print ou gif do app)*

![print-mobile](./docs/print-mobile.png)

---

## 🎥 Preview em funcionamento

> *(opcional - muito forte para recrutador)*

![demo](./docs/demo.gif)

---

## 🌐 Deploy

* 🔗 Frontend: *(adicione link aqui — ex: Vercel)*
* 🔗 Backend: *(adicione link aqui — ex: Render, Railway)*

---

## ⚙️ Funcionalidades

* Cadastro de clientes
* Registro de dívidas e pagamentos
* Histórico financeiro detalhado
* Consulta de saldo em tempo real
* Relatórios de movimentação

---

## 🧱 Tecnologias Utilizadas

### Backend

* Node.js
* Express
* MongoDB
* Mongoose

### Frontend Web

* React.js
* Axios
* Vite

### Mobile

* React Native

---

## 📁 Estrutura do Projeto

```bash
caderno-fiado/
│
├─ backend/   # API REST
├─ web/       # React Web
└─ mobile/    # React Native
```

---

## 🧪 Pré-requisitos

* Node.js
* npm ou yarn
* MongoDB
* Git

---

## 🔧 Configuração e Execução

### 1. Clonar projeto

```bash
git clone <URL_DO_REPOSITORIO>
cd caderno-fiado
```

---

## 🔙 Backend

```bash
cd backend
npm install
```

Criar `.env`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/caderno-fiado
```

Rodar:

```bash
npm run dev
```

📍 Backend: http://localhost:5000

---

## 🌐 Frontend Web

```bash
cd web
npm install
npm run dev
```

📍 Web: http://localhost:5173

---

## 📱 Mobile

```bash
cd mobile
npm install
npm start
```

---

## 🔄 Fluxo de execução

1. Iniciar MongoDB
2. Iniciar backend
3. Iniciar frontend
4. Acessar sistema

---

## 📡 Endpoints

| Método | Rota         | Descrição         |
| ------ | ------------ | ----------------- |
| POST   | /cliente     | Criar cliente     |
| GET    | /cliente     | Listar clientes   |
| PUT    | /cliente/:id | Atualizar cliente |
| DELETE | /cliente/:id | Deletar cliente   |

---

## 📦 Exemplo de Payload

```json
{
  "nome": "Igor",
  "telefone": "11999999999",
  "endereco": "Rua Exemplo, 123"
}
```

---

## 🧠 Boas práticas

* Padrão de commits (`feat`, `fix`, `refactor`)
* Separação por camadas (MVC)
* Uso de variáveis de ambiente
* Código limpo e organizado

---

## 🛠️ Troubleshooting

### Backend não inicia

* Verifique dependências
* Verifique `.env`
* Verifique MongoDB

### Frontend não conecta

* Backend está rodando?
* URL do Axios correta?
* CORS liberado?

---

## 🚧 Melhorias Futuras

* 🔐 Autenticação de usuários
* 📊 Dashboard com gráficos
* 🔔 Notificações
* 📄 Swagger API
* ☁️ Deploy completo

---

## 👨‍💻 Autor

Desenvolvido por **Igor Aguiar**

---

## ⭐ Contribuição

Sinta-se à vontade para contribuir com melhorias no projeto.

---
