import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "../context/FavoritesContext";
import Catalogo from "./Catalogo";

describe("Catalogo", () => {
  test("muestra los productos actuales del catálogo", () => {
    render(
      <FavoritesProvider>
        <BrowserRouter>
          <Catalogo />
        </BrowserRouter>
      </FavoritesProvider>
    );

    expect(
      screen.getByText(/Teclado mecánico/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Mouse inalámbrico/i)
    ).toBeInTheDocument();
  });
});

test("muestra el buscador con el placeholder correcto", () => {
  render(
    <FavoritesProvider>
      <BrowserRouter>
        <Catalogo />
      </BrowserRouter>
    </FavoritesProvider>
  );

  const buscador = screen.getByPlaceholderText(/Buscar producto/i);

  expect(buscador).toBeInTheDocument();
}); 