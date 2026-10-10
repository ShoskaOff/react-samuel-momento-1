import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "../context/FavoritesContext";
import Header from "./Header";

describe("Header", () => {
  test("muestra la navegación principal de StockFlow", () => {
    render(
      <FavoritesProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </FavoritesProvider>
    );

    expect(screen.getByText(/StockFlow/i)).toBeInTheDocument();
    expect(screen.getByText(/Inicio/i)).toBeInTheDocument();
    expect(screen.getByText(/Catálogo/i)).toBeInTheDocument();
    expect(screen.getByText(/Favoritos/i)).toBeInTheDocument();
  });
}); 