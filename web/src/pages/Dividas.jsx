import Sidebar from '../components/Sidebar.jsx';
import '../components/Sidebar.css';
import './Clientes.css';

export default function Dividas() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="conteudo">
        <h1 className="clientes-titulo">Dívidas</h1>
        <p>Página de dívidas funcionando.</p>
      </div>
    </div>
  );
}