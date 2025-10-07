import express from 'express';
import cors from 'cors';
import connectDatabase from '../backend/src/config/database';

const app = express();
app.use(cors());
app.use(express.json());

// conectar ao banco
connectDatabase();

// Rota teste
app.get('/', (req, res) => res.send('API de Caderno de fiado funcionando'));

app.get('/teste', (req, res) => res.send('<h1>Teste de rota')); // teste funcionando.

app.get('/ping', (req, res) => res.json({ satus: 'OK' }));

// Servidor
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
