import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import connectDatabase from './config/database.js';

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI não definido');
    }

    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET não definido');
    }

    await connectDatabase();

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Erro ao iniciar servidor:', error.message);
    process.exit(1);
  }
}

startServer();
