'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    setError(null);
    
    // --- Lógica de login hardcodeada ---
    // En una aplicación real, aquí llamarías a tu backend/Supabase.
    if (email === 'admin@charly.com' && password === 'password123') {
      console.log('Login exitoso!');
      // Redirigir al dashboard si las credenciales son correctas.
      router.push('/dashboard');
    } else {
      // Mostrar un mensaje de error si las credenciales son incorrectas.
      setError('Credenciales inválidas. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-brand-dark">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900/50 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-brand-light">
          Taller Charli - Acceso Administrativo
        </h1>
        <div className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Correo Electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
              placeholder="admin@charly.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
              placeholder="password123"
            />
          </div>
           {error && <p className="text-sm text-center text-red-500">{error}</p>}
          <div>
            <span
              onClick={handleLogin}
              className="w-full px-4 py-2 font-bold text-white transition-colors duration-300 bg-brand-accent rounded-md hover:bg-brand-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-brand-accent cursor-pointer block text-center"
            >
              Iniciar Sesión
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}