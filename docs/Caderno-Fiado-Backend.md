# 🧾 Caderno de Fiado – Backend

API REST feita com Node.js, Express e MongoDB para gerenciar clientes e seus fiados (dívidas em aberto).
Permite cadastrar, listar, atualizar e remover clientes e lançamentos de fiado.

# 🚀 Tecnologias utilizadas

Node.js 

Express

MongoDB + Mongoose

Dotenv (variáveis de ambiente)

Nodemon (ambiente de desenvolvimento)

Cors (liberação de requisições externas)

# ⚙️ Instalação e execução

Clone o repositório:

git clone https://github.com/seu-usuario/caderno-fiado.git
cd caderno-fiado/backend


Instale as dependências:

npm install


Crie um arquivo .env na raiz do projeto (dentro de /backend) com:

MONGO_URI=mongodb://localhost:27017/cadernoFiado
PORT=5000


Inicie o servidor:

npm run dev


O servidor ficará disponível em:

http://localhost:5000

📡 API – Endpoints
🧱 Base URL
http://localhost:5000

👤 CLIENTES
🔹 GET /cliente

Lista todos os clientes cadastrados.

Exemplo de resposta:

[
  { "_id": "672e94f29b3e2b8f08a8df31", "nome": "Maria", "telefone": "99999-9999" },
  { "_id": "672e94f29b3e2b8f08a8df32", "nome": "João", "telefone": "98888-8888" }
]

🔹 GET /cliente/:id

Busca um cliente específico pelo ID.
Exemplo:
GET /cliente/672e94f29b3e2b8f08a8df31

Resposta:

{ "_id": "672e94f29b3e2b8f08a8df31", "nome": "Maria", "telefone": "99999-9999" }

🔹 POST /cliente

Cria um novo cliente.
Body (JSON):

{
  "nome": "Carlos Silva",
  "telefone": "99999-1111"
}


Resposta (201):

{
  "_id": "672e95a09b3e2b8f08a8df34",
  "nome": "Carlos Silva",
  "telefone": "99999-1111"
}

🔹 PUT /cliente/:id

Atualiza um cliente existente.
Parâmetro de rota: id → ID do cliente a ser atualizado.
Body (JSON):

{
  "nome": "Carlos Souza"
}


Resposta (200):

{
  "_id": "672e95a09b3e2b8f08a8df34",
  "nome": "Carlos Souza",
  "telefone": "99999-1111"
}

🔹 DELETE /cliente/:id

Remove um cliente do sistema.
Exemplo:

DELETE /cliente/672e95a09b3e2b8f08a8df34


Resposta (200):

{ "mensagem": "Cliente removido com sucesso" }

💰 FIADOS
🔹 GET /fiado

Lista todos os registros de fiado.
Exemplo de resposta:

[
  {
    "_id": "672e96b29b3e2b8f08a8df40",
    "cliente": "Maria",
    "valor": 50.0,
    "descricao": "Compra de mantimentos",
    "data": "2025-10-10"
  }
]

🔹 POST /fiado

Registra um novo fiado.
Body (JSON):

{
  "clienteId": "672e94f29b3e2b8f08a8df31",
  "valor": 75.50,
  "descricao": "Compra de arroz e feijão"
}


Resposta (201):

{
  "_id": "672e96b29b3e2b8f08a8df40",
  "clienteId": "672e94f29b3e2b8f08a8df31",
  "valor": 75.50,
  "descricao": "Compra de arroz e feijão",
  "data": "2025-10-10"
}

🔹 DELETE /fiado/:id

Remove um registro de fiado.
Exemplo:

DELETE /fiado/672e96b29b3e2b8f08a8df40


Resposta:

{ "mensagem": "Fiado removido com sucesso" }

# ✅ Validações básicas

O campo nome do cliente é obrigatório.

O campo valor do fiado deve ser maior ou igual a 0.

Caso algum campo esteja ausente ou inválido, o servidor retorna status 400 (Bad Request) com uma mensagem de erro.

🧠 Dica de teste no Insomnia

Crie uma nova requisição do tipo POST em http://localhost:5000/cliente.

Vá até a aba Body → JSON e envie:

{ "nome": "Ana", "telefone": "99999-2222" }


Verifique a resposta e copie o ID retornado para testar os endpoints de PUT e DELETE.

# 👨‍💻 Autor

Igor Vergani
💡 Projeto acadêmico – CRUD completo com Node.js + MongoDB
📅 2025