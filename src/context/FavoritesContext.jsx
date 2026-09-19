import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (producto) => {
    setFavorites((favoritosActuales) => {
      const existe = favoritosActuales.some(
        (favorito) => favorito.id === producto.id
      );

      if (existe) {
        return favoritosActuales.filter(
          (favorito) => favorito.id !== producto.id
        );
      }

      return [...favoritosActuales, producto];
    });
  };

  const isFavorite = (id) => {
    return favorites.some((favorito) => favorito.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useFavorites debe utilizarse dentro de FavoritesProvider"
    );
  }

  return context;
}