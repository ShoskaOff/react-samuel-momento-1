import "../styles/Card.css";

function Card({ icono, titulo, descripcion }) {
  return (
    <div className="card">
      <div className="card-icon">{icono}</div>

      <h3>{titulo}</h3>

      <p>{descripcion}</p>
    </div>
  );
}

export default Card;