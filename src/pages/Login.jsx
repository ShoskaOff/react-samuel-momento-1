import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { alternarSesion } = useContext(AuthContext); // Extraemos nuestra función global
  const navigate = useNavigate(); // Hook para redireccionar

  const manejarLogin = (e) => {
    e.preventDefault();

    // Aquí (en el futuro) se haría el fetch(POST) a MongoDB para validar.
    // Por ahora, simulamos que el login es exitoso si escribe algo.
    if (email && password) {
      alternarSesion(); // Cambia el estado global a "conectado: true"
      navigate('/'); // Lo enviamos a la ruta raíz (El Dashboard)
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f1f5f9' }}>
      <form onSubmit={manejarLogin} style={{ background: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', width: '350px' }}>

        <h2 style={{ textAlign: 'center', color: '#0f172a', marginBottom: '10px' }}>Iniciar Sesión</h2>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '30px' }}>Ingresa a tu panel de administración</p>

        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', padding: '12px', marginBottom: '25px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
        />

        <button type="submit" style={{ width: '100%', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '15px' }}>
          Entrar al Sistema
        </button>

        <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#64748b' }}>
          ¿No tienes cuenta? <Link to="/registro" style={{ color: '#3b82f6', textDecoration: 'none' }}>Regístrate</Link>
        </p>
      </form>
    </div>
  );
}