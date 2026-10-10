import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { FavoritesProvider } from "../context/FavoritesContext";
import { AuthProvider } from "../context/AuthContext";

import Header from "./Header";

describe("Header", () => {
  test("muestra la navegación principal de StockFlow", () => {
    render(
      <AuthProvider>
        <FavoritesProvider>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </FavoritesProvider>
      </AuthProvider>
    );

    expect(screen.getByText(/StockFlow/i)).toBeInTheDocument();
    expect(screen.getByText(/Inicio/i)).toBeInTheDocument();
    expect(screen.getByText(/Catálogo/i)).toBeInTheDocument();
    expect(screen.getByText(/Favoritos/i)).toBeInTheDocument();
    expect(screen.getByText(/Cerrar sesión/i)).toBeInTheDocument();
  });
});