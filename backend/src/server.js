import dotenv from 'dotenv';
dotenv.config();

import app, { connectDatabase } from './app.js';

if (!process.env.MONGO_URI) {
  console.error('❌ MONGO_URI não definido no .env');
  process.exit(1);
}

if (!process.env.JWT_SECRET) {
  console.error('❌ JWT_SECRET não definido no .env');
  process.exit(1);
}

const PORT = process.env.PORT || 5000;

await connectDatabase();

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
