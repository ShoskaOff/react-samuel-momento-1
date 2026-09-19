import { NavLink } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function Header() {
  const { favorites } = useFavorites();

  return (
    <header className="header">
      <h1>📦 StockFlow</h1>

      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Inicio
        </NavLink>

        <NavLink
          to="/catalogo"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Catálogo
        </NavLink>

        <NavLink
          to="/favoritos"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Favoritos
          <span className="favorite-count">{favorites.length}</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;