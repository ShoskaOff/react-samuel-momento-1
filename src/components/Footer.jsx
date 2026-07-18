import "../styles/Footer.css";

function Footer() {

  const año = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {año} StockFlow - Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;