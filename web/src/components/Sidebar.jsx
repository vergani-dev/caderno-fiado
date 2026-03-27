import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Caderno Fiado</h2>
      <nav>
        <Link to="/clientes">Clientes</Link>
        <Link to="/dividas">Dívidas</Link>
      </nav>
    </div>
  );
}