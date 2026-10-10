import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext";

import Layout from "./layouts/Layout";
import RutaProtegida from "./components/RutaProtegida";

import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Favoritos from "./pages/Favoritos";
import Login from "./pages/Login";
import Registro from "./pages/Registro";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <FavoritesProvider>
          <Routes>

            {/* RUTAS PÚBLICAS */}
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />

            {/* RUTAS PROTEGIDAS */}
            <Route element={<RutaProtegida />}>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="catalogo" element={<Catalogo />} />
                <Route path="favoritos" element={<Favoritos />} />
              </Route>
            </Route>

          </Routes>
        </FavoritesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;