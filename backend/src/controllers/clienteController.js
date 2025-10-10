import Cliente from '../models/Cliente.js';

// Criar um novo cliente
export const criarCliente = async (req, res) => {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ erro: 'O nome é obrigatório' });
  }

  if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
    return res
      .status(400)
      .json({ erro: 'O nome precisa ser com letras e não com numeros' });
  }

  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar cliente' });
  }
};

//Listar todos os clientes

export const listarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.find();
    res.status(201).json({ cliente });
  } catch (error) {
    res.status(500).json({ error: 'Não foi possivél listar os clientes' });
  }
};

// Atualizar um cliente

export const atualizarClientes = async (req, res) => {
  const { id } = req.params;

  try {
    const clienteAtualizado = await Cliente.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!clienteAtualizado) {
      return res.status(404).json({ error: 'Cliente não identificado' });
    }
    res.json(clienteAtualizado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o cliente' });
  }
};
//Deletar um cliente
export const deletarCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findByIdAndDelete(id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    res.json({ message: 'Cliente removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar cliente' });
  }
};
