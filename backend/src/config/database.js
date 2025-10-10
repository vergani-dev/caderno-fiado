import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    // Aqui pega a variável após dotenv.config()
    const uri = process.env.MONGO_URI;

    console.log('🔍 Conectando ao MongoDB em:', uri);

    if (!uri) throw new Error('MONGO_URI não definida no .env');

    await mongoose.connect(uri);

    console.log('✅ MongoDB conectado');
  } catch (error) {
    console.error('❌ Erro ao conectar no MongoDB:', error);
  }
};

export default connectDatabase;
