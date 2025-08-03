'use client';

import { useState } from 'react';

// Simulación de datos de vehículos
const FAKE_VEHICLES = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla', año: '2020', patente: 'ABC123', cliente: 'Juan Perez' },
    { id: 2, marca: 'Ford', modelo: 'Ranger', año: '2019', patente: 'XYZ789', cliente: 'Maria Gomez' },
    { id: 3, marca: 'Chevrolet', modelo: 'Cruze', año: '2021', patente: 'DEF456', cliente: 'Pedro Gonzalez' },
];

export default function VehiculosPage() {
  const [vehicles, setVehicles] = useState(FAKE_VEHICLES);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVehicles = vehicles.filter(vehicle => 
    vehicle.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.patente.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.cliente.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Gestión de Vehículos</h1>
        <button className="px-4 py-2 font-bold text-white transition-colors duration-300 bg-brand-accent rounded-md hover:bg-brand-accent-dark">
          + Agregar Vehículo
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por marca, modelo, patente o cliente..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
        />
      </div>

      <div className="overflow-x-auto bg-gray-900/50 rounded-lg">
        <table className="min-w-full text-left">
          <thead className="border-b border-gray-700">
            <tr>
              <th className="px-6 py-3 text-sm font-medium tracking-wider">Marca</th>
              <th className="px-6 py-3 text-sm font-medium tracking-wider">Modelo</th>
              <th className="px-6 py-3 text-sm font-medium tracking-wider">Año</th>
              <th className="px-6 py-3 text-sm font-medium tracking-wider">Patente</th>
              <th className="px-6 py-3 text-sm font-medium tracking-wider">Cliente</th>
              <th className="px-6 py-3 text-sm font-medium tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredVehicles.map((vehicle) => (
              <tr key={vehicle.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                <td className="px-6 py-4 whitespace-nowrap">{vehicle.marca}</td>
                <td className="px-6 py-4 whitespace-nowrap">{vehicle.modelo}</td>
                <td className="px-6 py-4 whitespace-nowrap">{vehicle.año}</td>
                <td className="px-6 py-4 whitespace-nowrap">{vehicle.patente}</td>
                <td className="px-6 py-4 whitespace-nowrap">{vehicle.cliente}</td>
                <td className="px-6 py-4 whitespace-nowrap space-x-4">
                  <button className="text-brand-accent hover:underline">Ver</button>
                  <button className="text-yellow-400 hover:underline">Editar</button>
                </td>
              </tr>
            ))}
             {filteredVehicles.length === 0 && (
                <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-gray-400">
                        No se encontraron vehículos.
                    </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
