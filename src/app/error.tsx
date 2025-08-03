'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { FaExclamationTriangle, FaHome, FaRedo } from 'react-icons/fa';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-brand-dark">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900/50 rounded-lg shadow-md text-center">
        {/* Icono de Error */}
        <div className="flex justify-center mb-6">
          <FaExclamationTriangle className="text-red-500 text-6xl" />
        </div>

        {/* Título y Mensaje */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-brand-light">
            Error Inesperado
          </h1>
          <h2 className="text-xl font-semibold text-brand-light">
            Algo salió mal
          </h2>
          <p className="text-gray-400 text-lg">
            Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.
          </p>
        </div>

        {/* Detalles del Error (solo en desarrollo) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-4 p-4 bg-gray-800 rounded-md">
            <p className="text-sm text-gray-300 font-mono break-all">
              {error.message}
            </p>
          </div>
        )}

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            onClick={reset}
            className="w-full sm:w-auto px-6 py-3 font-bold text-white transition-colors duration-300 bg-brand-accent rounded-md hover:bg-brand-accent-dark flex items-center justify-center gap-2"
          >
            <FaRedo className="text-sm" />
            Intentar de Nuevo
          </button>
          <Link href="/dashboard">
            <button className="w-full sm:w-auto px-6 py-3 font-bold text-white transition-colors duration-300 border border-brand-accent rounded-md hover:bg-brand-accent hover:text-white flex items-center justify-center gap-2">
              <FaHome className="text-sm" />
              Ir al Dashboard
            </button>
          </Link>
        </div>

        {/* Información Adicional */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-sm text-gray-500">
            Si el problema persiste, contacta al administrador del sistema.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Taller Charli. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
} 