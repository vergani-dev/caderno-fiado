// app.js
import express from 'express';
import cors from 'cors';
import fiadoRoutes from './routes/fiadoRoutes.js';
import clienteRoutes from './routes/clienteRoutes.js';
import connectDatabase from './config/database.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/fiado', fiadoRoutes);
app.use('/cliente', clienteRoutes);

export default app;
export { connectDatabase }; // exporta para chamar depois
