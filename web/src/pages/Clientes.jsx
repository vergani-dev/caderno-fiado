import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  useEffect(() => {
    buscarClientes();
  }, []);


  
  async function buscarClientes() {
    const res = await api.get('/clientes');
    setClientes(res.data);
  }

  async function deletar(id) {
    await api.delete(`/clientes/${id}`);
    buscarClientes();
  }

  function iniciarEdicao(cliente) {
    setEditandoId(cliente._id);
    setNome(cliente.nome || '');
    setTelefone(cliente.telefone || '');
  }

  async function atualizarCliente() {
    await api.put(`/clientes/${editandoId}`, {
      nome,
      telefone,
      endereco,
    });

    setEditandoId(null);
    setNome('');
    setTelefone('');
    setEndereco('');
    buscarClientes();
  }

  return (
    <div>
      <h1 className='Titulos'>Clientes</h1>

      {clientes.map(c => (
        <div key={c._id}>
          <p>Nome: {c.nome}</p>
          <p>Telefone: {c.telefone}</p>
          <p>Endereço: {c.endereco}</p>

          <button onClick={() => deletar(c._id)}>Excluir</button>
          <button onClick={() => iniciarEdicao(c)}>Editar</button>
        </div>
      ))}

      {editandoId && (
        <div>
          <h2>Editar cliente</h2>

          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Nome"
          />

          <input
            type="text"
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
            placeholder="Telefone"
          />

          <ipunt
          type="text"
          value={endereco}
          onChange={e => setEnderco(e.target.value)}
          placeholder="Endereço"
          />

          <button onClick={atualizarCliente}>Salvar</button>
        </div>
      )}
    </div>
  );
}