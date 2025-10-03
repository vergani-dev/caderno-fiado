const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// conexão com o Mongoouse
mongoose
  .connect("mongodb://localhost:27017/cadernoFiado")
  .then(() => console.log("MongoDB conectado com sucesso!"))
  .catch((err) => console.log(err));

// Rota teste

app.get("/", (req, res) => res.send("API de Caderno de fiado funcionando"));

app.get("/teste", (req, res) => res.send("Teste de rota"));

// Servidor
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
