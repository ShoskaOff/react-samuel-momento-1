import { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { AuthContext } from "../context/AuthContext";
import "../styles/Header.css";

function Header() {
  const { favorites } = useFavorites();
  const { alternarSesion } = useContext(AuthContext);
  const navigate = useNavigate();

  const cerrarSesion = () => {
    alternarSesion();
    navigate("/login");
  };

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

        <button
          type="button"
          className="logout-button"
          onClick={cerrarSesion}
        >
          Cerrar sesión
        </button>
      </nav>
    </header>
  );
}

export default Header;