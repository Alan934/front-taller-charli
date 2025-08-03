import Link from 'next/link';
import { FaUsers, FaCar, FaCalendarAlt } from 'react-icons/fa';

// Datos hardcodeados para las tarjetas de resumen
const summaryData = {
  clients: 12,
  vehicles: 18,
  pendingAppointments: 5,
};

export default function DashboardHomePage() {
  return (
    <div className="flex flex-col h-full">
      <main className="flex-1">
        <h1 className="text-3xl font-bold text-brand-light mb-8">
          Panel de Administración
        </h1>

        {/* Sección de Tarjetas de Resumen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900/50 p-6 rounded-lg flex items-center">
            <FaUsers className="text-brand-accent text-4xl mr-4" />
            <div>
              <p className="text-gray-400 text-sm">Total de Clientes</p>
              <p className="text-2xl font-bold">{summaryData.clients}</p>
            </div>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg flex items-center">
            <FaCar className="text-brand-accent text-4xl mr-4" />
            <div>
              <p className="text-gray-400 text-sm">Vehículos Registrados</p>
              <p className="text-2xl font-bold">{summaryData.vehicles}</p>
            </div>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg flex items-center">
            <FaCalendarAlt className="text-brand-accent text-4xl mr-4" />
            <div>
              <p className="text-gray-400 text-sm">Turnos Pendientes</p>
              <p className="text-2xl font-bold">{summaryData.pendingAppointments}</p>
            </div>
          </div>
        </div>

        {/* Sección de Acciones Rápidas */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Acciones Rápidas</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/dashboard/clientes">
              <span className="px-5 py-3 font-bold text-white transition-colors duration-300 bg-brand-accent rounded-md hover:bg-brand-accent-dark cursor-pointer block">
                Gestionar Clientes
              </span>
            </Link>
            <Link href="/dashboard/turnos">
              <span className="px-5 py-3 font-bold text-white transition-colors duration-300 bg-brand-accent rounded-md hover:bg-brand-accent-dark cursor-pointer block">
                Gestionar Turnos
              </span>
            </Link>
            <Link href="/dashboard/vehiculos">
              <span className="px-5 py-3 font-bold text-white transition-colors duration-300 bg-brand-accent rounded-md hover:bg-brand-accent-dark cursor-pointer block">
                Gestionar Vehículos
              </span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer del Dashboard */}
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Taller Charli. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}