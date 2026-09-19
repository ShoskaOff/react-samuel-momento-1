import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import "../styles/Favoritos.css";

function Favoritos() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <section className="favoritos-page">
      <div className="favoritos-header">
        <h2>Mis favoritos</h2>

        <p>
          Tienes {favorites.length}{" "}
          {favorites.length === 1 ? "producto favorito" : "productos favoritos"}.
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-favorites">
          <span>⭐</span>

          <h3>No tienes productos favoritos</h3>

          <p>
            Ve al catálogo y selecciona los productos que quieras guardar.
          </p>

          <Link to="/catalogo" className="catalog-link">
            Ir al catálogo
          </Link>
        </div>
      ) : (
        <div className="favorites-grid">
          {favorites.map((producto) => (
            <article className="favorite-card" key={producto.id}>
              <div className="favorite-icon">
                {producto.icono}
              </div>

              <div>
                <span>{producto.categoria}</span>

                <h3>{producto.nombre}</h3>

                <p>
                  Stock: {producto.stock}
                </p>
              </div>

              <button
                onClick={() => toggleFavorite(producto)}
                className="remove-favorite"
              >
                Quitar
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Favoritos;