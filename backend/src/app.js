import express from 'express';
import cors from 'cors';

import fiadoRoutes from './routes/fiadoRoutes.js';
import clienteRoutes from './routes/clienteRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/fiado', fiadoRoutes);
app.use('/clientes', clienteRoutes);
app.use('/users', userRoutes);

export default app;
