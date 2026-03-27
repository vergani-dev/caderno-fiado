import { useEffect, useState } from 'react';
import api from '../services/api';
import './Clientes.css';

export default function Clientes() {
  const [clientes, setClientes] = useState([]);

  const [modalAdicionarAberto, setModalAdicionarAberto] = useState(false);
  const [modalEditarAberto, setModalEditarAberto] = useState(false);

  const [editandoId, setEditandoId] = useState(null);

  const [novoNome, setNovoNome] = useState('');
  const [novoTelefone, setNovoTelefone] = useState('');
  const [novoEndereco, setNovoEndereco] = useState('');

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  useEffect(() => {
    buscarClientes();
  }, []);

  async function buscarClientes() {
    try {
      const res = await api.get('/clientes');
      setClientes(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
      setClientes([]);
    }
  }

  function abrirModalAdicionar() {
    setNovoNome('');
    setNovoTelefone('');
    setNovoEndereco('');
    setModalAdicionarAberto(true);
  }

  function fecharModalAdicionar() {
    setModalAdicionarAberto(false);
  }

  async function criarCliente() {
    try {
      if (!novoNome.trim()) {
        alert('O nome é obrigatório');
        return;
      }

      await api.post('/clientes', {
        nome: novoNome,
        telefone: novoTelefone,
        endereco: novoEndereco,
      });

      fecharModalAdicionar();
      await buscarClientes();
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
      alert('Não foi possível adicionar o cliente.');
    }
  }

  async function deletar(id) {
    try {
      await api.delete(`/clientes/${id}`);
      await buscarClientes();
    } catch (error) {
      console.error('Erro ao deletar cliente:', error);
      alert('Não foi possível excluir o cliente.');
    }
  }

  function iniciarEdicao(cliente) {
    setEditandoId(cliente._id);
    setNome(cliente.nome || '');
    setTelefone(cliente.telefone || '');
    setEndereco(cliente.endereco || '');
    setModalEditarAberto(true);
  }

  function fecharModalEditar() {
    setModalEditarAberto(false);
    setEditandoId(null);
    setNome('');
    setTelefone('');
    setEndereco('');
  }

  async function atualizarCliente() {
    try {
      await api.put(`/clientes/${editandoId}`, {
        nome,
        telefone,
        endereco,
      });

      fecharModalEditar();
      await buscarClientes();
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
      alert('Não foi possível atualizar o cliente.');
    }
  }

  return (
    <div className="clientes-page">
      <header className="page-header">
        <div>
          <h1 className="page-title">Clientes</h1>
          <p className="page-subtitle">
            Gerencie os clientes cadastrados no sistema.
          </p>
        </div>

        <button className="btn btn-primary" onClick={abrirModalAdicionar}>
          + Adicionar cliente
        </button>
      </header>

      <section className="panel">
        <div className="panel-header">
          <h2>Clientes cadastrados</h2>
          <span className="panel-tag">{clientes.length} registro(s)</span>
        </div>

        {clientes.length === 0 ? (
          <div className="empty-state">
            <p>Nenhum cliente cadastrado até o momento.</p>
          </div>
        ) : (
          <div className="clientes-lista">
            {clientes.map((cliente) => (
              <article key={cliente._id} className="cliente-card">
                <div className="cliente-topo">
                  <h3>{cliente.nome}</h3>
                </div>

                <div className="cliente-dados">
                  <p>
                    <span>Telefone</span>
                    {cliente.telefone || 'Não informado'}
                  </p>

                  <p>
                    <span>Endereço</span>
                    {cliente.endereco || 'Não informado'}
                  </p>
                </div>

                <div className="cliente-acoes">
                  <button
                    className="btn btn-secondary"
                    onClick={() => iniciarEdicao(cliente)}
                  >
                    Editar
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => deletar(cliente._id)}
                  >
                    Excluir
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {modalAdicionarAberto && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <h2>Novo cliente</h2>
              <button className="btn-close" onClick={fecharModalAdicionar}>
                ×
              </button>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Nome</label>
                <input
                  type="text"
                  value={novoNome}
                  onChange={(e) => setNovoNome(e.target.value)}
                  placeholder="Digite o nome do cliente"
                />
              </div>

              <div className="form-group">
                <label>Telefone</label>
                <input
                  type="text"
                  value={novoTelefone}
                  onChange={(e) => setNovoTelefone(e.target.value)}
                  placeholder="Digite o telefone"
                />
              </div>

              <div className="form-group form-group-full">
                <label>Endereço</label>
                <input
                  type="text"
                  value={novoEndereco}
                  onChange={(e) => setNovoEndereco(e.target.value)}
                  placeholder="Digite o endereço"
                />
              </div>
            </div>

            <div className="form-actions">
              <button className="btn btn-primary" onClick={criarCliente}>
                Salvar cliente
              </button>

              <button className="btn btn-secondary" onClick={fecharModalAdicionar}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {modalEditarAberto && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <h2>Editar cliente</h2>
              <button className="btn-close" onClick={fecharModalEditar}>
                ×
              </button>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Nome</label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Nome"
                />
              </div>

              <div className="form-group">
                <label>Telefone</label>
                <input
                  type="text"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="Telefone"
                />
              </div>

              <div className="form-group form-group-full">
                <label>Endereço</label>
                <input
                  type="text"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  placeholder="Endereço"
                />
              </div>
            </div>

            <div className="form-actions">
              <button className="btn btn-primary" onClick={atualizarCliente}>
                Salvar alterações
              </button>

              <button className="btn btn-secondary" onClick={fecharModalEditar}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}