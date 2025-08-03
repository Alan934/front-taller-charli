'use client';

import { useState } from 'react';

// Simulación de datos de turnos
const FAKE_APPOINTMENTS = [
    { 
        id: 1, 
        cliente: 'Juan Perez', 
        vehiculo: 'Toyota Corolla ABC123', 
        fecha: '2024-01-15', 
        hora: '09:00', 
        servicio: 'Cambio de aceite', 
        estado: 'Pendiente' 
    },
    { 
        id: 2, 
        cliente: 'Maria Gomez', 
        vehiculo: 'Ford Ranger XYZ789', 
        fecha: '2024-01-16', 
        hora: '14:30', 
        servicio: 'Revisión general', 
        estado: 'Confirmado' 
    },
    { 
        id: 3, 
        cliente: 'Pedro Gonzalez', 
        vehiculo: 'Chevrolet Cruze DEF456', 
        fecha: '2024-01-17', 
        hora: '11:00', 
        servicio: 'Frenos', 
        estado: 'Completado' 
    },
];

export default function TurnosPage() {
  const [appointments] = useState(FAKE_APPOINTMENTS);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAppointments = appointments.filter(appointment => 
    appointment.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.vehiculo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.servicio.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.estado.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pendiente':
        return 'text-yellow-400';
      case 'confirmado':
        return 'text-blue-400';
      case 'completado':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Gestión de Turnos</h1>
        <span className="px-4 py-2 font-bold text-white transition-colors duration-300 bg-brand-accent rounded-md hover:bg-brand-accent-dark cursor-pointer">
          + Crear Turno
        </span>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por cliente, vehículo, servicio o estado..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
        />
      </div>

      <div className="overflow-x-auto bg-gray-900/50 rounded-lg">
        <table className="min-w-full text-left">
          <thead className="border-b border-gray-700">
            <tr>
              <th className="px-6 py-3 text-sm font-medium tracking-wider">Cliente</th>
              <th className="px-6 py-3 text-sm font-medium tracking-wider">Vehículo</th>
              <th className="px-6 py-3 text-sm font-medium tracking-wider">Fecha</th>
              <th className="px-6 py-3 text-sm font-medium tracking-wider">Hora</th>
              <th className="px-6 py-3 text-sm font-medium tracking-wider">Servicio</th>
              <th className="px-6 py-3 text-sm font-medium tracking-wider">Estado</th>
              <th className="px-6 py-3 text-sm font-medium tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appointment) => (
              <tr key={appointment.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                <td className="px-6 py-4 whitespace-nowrap">{appointment.cliente}</td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.vehiculo}</td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.fecha}</td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.hora}</td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.servicio}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`${getStatusColor(appointment.estado)}`}>
                    {appointment.estado}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap space-x-4">
                  <span className="text-brand-accent hover:underline cursor-pointer">Ver</span>
                  <span className="text-yellow-400 hover:underline cursor-pointer">Editar</span>
                </td>
              </tr>
            ))}
             {filteredAppointments.length === 0 && (
                <tr>
                    <td colSpan={7} className="px-6 py-4 text-center text-gray-400">
                        No se encontraron turnos.
                    </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
