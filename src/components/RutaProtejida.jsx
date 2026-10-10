import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function RutaProtegida(){
  const { usuario } = useContext(AuthContext);

  // Si no está conectado, lo "pateamos" a la pantalla de login.
  // La propiedad 'replace' borra el historial para que no pueda volver atrás con la flecha del navegador.
  if (!usuario.conectado) {
    return <Navigate to="/login" replace />;
  }

  // Si está conectado, renderiza las rutas hijas (el Dashboard)
  return <Outlet />;
}