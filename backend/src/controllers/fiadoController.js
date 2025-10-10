import Fiado from '../models/Fiado.js';

// Listar todos os fiados
export const listarFiados = async (req, res) => {
  try {
    const fiados = await Fiado.find();
    res.json(fiados);
  } catch (error) {
    console.error('Erro ao buscar fiados:', error);
    res.status(500).json({ error: 'Erro ao buscar fiados' });
  }
};

// Criar um novo fiado
export const criarFiado = async (req, res) => {
  const { cliente, valor } = req.body;

  if (!cliente || !valor) {
    return res.status(400).json({ error: 'Cliente e valor são obrigatórios' });
  }

  try {
    const novoFiado = await Fiado.create({ cliente, valor });
    res.status(201).json(novoFiado);
  } catch (error) {
    console.error('Erro ao criar fiado:', error);
    res.status(500).json({ error: 'Erro ao criar fiado' });
  }
};

// Marcar um fiado como pago
export const pagarFiado = async (req, res) => {
  const { id } = req.params;

  if (!Fiado.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  try {
    const fiado = await Fiado.findById(id);

    if (!fiado) {
      return res.status(404).json({ error: 'Fiado não encontrado' });
    }

    fiado.pago = true;
    await fiado.save();

    res.json(fiado);
  } catch (error) {
    console.error('Erro ao atualizar fiado:', error);
    res.status(500).json({ error: 'Erro ao atualizar fiado' });
  }
};
