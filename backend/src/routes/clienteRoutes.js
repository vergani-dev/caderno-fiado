import express from 'express';

import {
  criarCliente,
  Clientes,
  atualizarClientes,
  deletarCliente,
} from '../controllers/clienteController.js';

import { auth } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(auth);

router.post('/', criarCliente);

router.get('/', Clientes);

router.put('/:id', atualizarClientes);

router.delete('/:id', deletarCliente);

export default router;
