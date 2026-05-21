import Cliente from '../models/Cliente.js';

export async function criarClienteService(dados) {
  const clienteExiste = await Cliente.findOne({
    telefone: dados.telefone,
  });

  if (clienteExiste) {
    throw new Error('Cliente já cadastrado');
  }

  const cliente = await Cliente.create(dados);

  return cliente;
}
