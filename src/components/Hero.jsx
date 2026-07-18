import "../styles/Hero.css";

function Hero() {
  const empresa = "StockFlow";

  return (
    <section className="hero">
      <h2>Bienvenido a {empresa}</h2>

      <p>
        Administra tu inventario de manera rápida, segura y organizada.
      </p>

      <button>Comenzar</button>
    </section>
  );
}

export default Hero;