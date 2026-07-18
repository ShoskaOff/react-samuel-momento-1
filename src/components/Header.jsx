import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>📦 StockFlow</h1>

      <nav>
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Nosotros</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;