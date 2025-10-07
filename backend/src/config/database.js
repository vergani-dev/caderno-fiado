import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

// conexão com o Mongoouse
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB conectado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar no MongoDB:', error);
    process.exit(1); // encerra o app se a conexão falhar
  }
};

export default connectDatabase;
