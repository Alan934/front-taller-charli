import Link from 'next/link';
import { FaExclamationTriangle, FaHome, FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-brand-dark">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900/50 rounded-lg shadow-md text-center">
        {/* Icono de Error */}
        <div className="flex justify-center mb-6">
          <FaExclamationTriangle className="text-red-500 text-6xl" />
        </div>

        {/* Título y Mensaje */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-brand-light">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-brand-light">
            Página No Encontrada
          </h2>
          <p className="text-gray-400 text-lg">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="/dashboard">
            <button className="w-full sm:w-auto px-6 py-3 font-bold text-white transition-colors duration-300 bg-brand-accent rounded-md hover:bg-brand-accent-dark flex items-center justify-center gap-2">
              <FaHome className="text-sm" />
              Ir al Dashboard
            </button>
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-6 py-3 font-bold text-white transition-colors duration-300 border border-brand-accent rounded-md hover:bg-brand-accent hover:text-white flex items-center justify-center gap-2"
          >
            <FaArrowLeft className="text-sm" />
            Volver Atrás
          </button>
        </div>

        {/* Información Adicional */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-sm text-gray-500">
            Si crees que esto es un error, contacta al administrador del sistema.
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