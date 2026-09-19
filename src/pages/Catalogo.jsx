import { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import "../styles/Catalogo.css";

const productos = [
  {
    id: 1,
    nombre: "Teclado mecánico",
    categoria: "Periféricos",
    precio: 129900,
    stock: 12,
    icono: "⌨️",
  },
  {
    id: 2,
    nombre: "Mouse inalámbrico",
    categoria: "Periféricos",
    precio: 79900,
    stock: 20,
    icono: "🖱️",
  },
  {
    id: 3,
    nombre: "Monitor 24 pulgadas",
    categoria: "Monitores",
    precio: 649900,
    stock: 8,
    icono: "🖥️",
  },
  {
    id: 4,
    nombre: "Memoria RAM 16GB",
    categoria: "Componentes",
    precio: 259900,
    stock: 15,
    icono: "💾",
  },
  {
    id: 5,
    nombre: "SSD 1TB",
    categoria: "Componentes",
    precio: 329900,
    stock: 10,
    icono: "💽",
  },
  {
    id: 6,
    nombre: "Laptop empresarial",
    categoria: "Computadores",
    precio: 2499900,
    stock: 5,
    icono: "💻",
  },
];

function Catalogo() {
  const [busqueda, setBusqueda] = useState("");

  const { toggleFavorite, isFavorite } = useFavorites();

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const formatoPrecio = (precio) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(precio);
  };

  return (
    <section className="catalogo-page">
      <div className="catalogo-header">
        <div>
          <h2>Catálogo de productos</h2>
          <p>
            Consulta los productos disponibles y agrega tus favoritos.
          </p>
        </div>

        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="search-input"
        />
      </div>

      {productosFiltrados.length === 0 ? (
        <p className="no-results">
          No se encontraron productos.
        </p>
      ) : (
        <div className="product-grid">
          {productosFiltrados.map((producto) => (
            <article className="product-card" key={producto.id}>
              <div className="product-icon">
                {producto.icono}
              </div>

              <div className="product-info">
                <span className="product-category">
                  {producto.categoria}
                </span>

                <h3>{producto.nombre}</h3>

                <p>
                  Stock disponible: <strong>{producto.stock}</strong>
                </p>

                <span className="product-price">
                  {formatoPrecio(producto.precio)}
                </span>

                <button
                  className={
                    isFavorite(producto.id)
                      ? "favorite-button active"
                      : "favorite-button"
                  }
                  onClick={() => toggleFavorite(producto)}
                >
                  {isFavorite(producto.id)
                    ? "★ Quitar de favoritos."
                    : "☆ Agregar a favoritos."}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Catalogo;