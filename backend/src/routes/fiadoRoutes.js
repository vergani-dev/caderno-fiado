import express from 'express';
import {
  listarFiados,
  criarFiado,
  pagarFiado,
} from '../controllers/fiadoController.js';

const router = express.Router();

router.get('/', listarFiados);
router.post('/', criarFiado);
router.patch('/:id/pagar', pagarFiado);

export default router;
