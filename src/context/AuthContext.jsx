import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState({
    conectado: false,
  });

  const alternarSesion = () => {
    setUsuario((usuarioActual) => ({
      ...usuarioActual,
      conectado: !usuarioActual.conectado,
    }));
  };

  return (
    <AuthContext.Provider value={{ usuario, alternarSesion }}>
      {children}
    </AuthContext.Provider>
  );
}