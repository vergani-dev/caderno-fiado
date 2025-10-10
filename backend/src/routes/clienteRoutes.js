import express from 'express';

import {
  criarCliente,
  listarCliente,
  atualizarClientes,
  deletarCliente,
} from '../controllers/clienteController.js';

const router = express.Router();

router.post('/', criarCliente);
router.get('/', listarCliente);
router.put('/:id', atualizarClientes);
router.delete('/:id', deletarCliente);

export default router;
