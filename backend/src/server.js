import dotenv from 'dotenv';
dotenv.config(); // garante que .env esteja carregado

import app, { connectDatabase } from './app.js';

const PORT = process.env.PORT || 5000;

console.log('🔍 URI recebida:', process.env.MONGO_URI);

await connectDatabase(); // agora process.env.MONGO_URI existe

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
