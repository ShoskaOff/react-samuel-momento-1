import Card from "./Card";
import "../styles/Features.css";

function Features() {
  return (
    <section className="features">

      <h2>¿Por qué elegir StockFlow?</h2>

      <div className="cards">

        <Card
          icono="📦"
          titulo="Gestión de Inventario"
          descripcion="Controla fácilmente todos los productos de tu empresa."
        />

        <Card
          icono="📊"
          titulo="Reportes"
          descripcion="Consulta el estado del inventario en cualquier momento."
        />

        <Card
          icono="🔒"
          titulo="Seguridad"
          descripcion="Protege la información de tu negocio."
        />

      </div>

    </section>
  );
}

export default Features;