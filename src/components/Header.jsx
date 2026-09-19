import { NavLink, Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import "../styles/Header.css";

function Header() {
  const { favorites } = useFavorites();

  return (
    <header className="header">
      <Link to="/" className="logo">
        📦 StockFlow
      </Link>

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