import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">
    📦 StockFlow
</h1>

<nav>
    <ul>
        <li>Inicio</li>
        <li>Servicios</li>
        <li>Productos</li>
        <li>Contacto</li>
    </ul>
</nav>
    </header>
  );
}

export default Header;