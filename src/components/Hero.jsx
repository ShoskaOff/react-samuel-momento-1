import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";
import heroImage from "../assets/images/hero.png";

function Hero() {
  const navigate = useNavigate();
  const empresa = "StockFlow";

  return (
    <section className="hero">
      <img
        src={heroImage}
        alt="Sistema de Inventario"
        className="hero-image"
      />

      <h2>Bienvenido a {empresa}</h2>

      <p>
        Administra tu inventario de manera rápida, segura y organizada
        desde una plataforma moderna y fácil de usar.
      </p>

      <button onClick={() => navigate("/catalogo")}>
        Comenzar
      </button>
    </section>
  );
}

export default Hero;