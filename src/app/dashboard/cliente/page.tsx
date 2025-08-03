'use client';

import { useState } from 'react';

// Simulación de los datos que vendrían de la tabla 'Usuario' con rol 'cliente'
const FAKE_CLIENTS = [
    { id: 1, nombre: 'Juan', apellido: 'Perez', email: 'juan.perez@email.com', telefono: '261-555-1234', dni: '30123456' },
    { id: 2, nombre: 'Maria', apellido: 'Gomez', email: 'maria.gomez@email.com', telefono: '261-555-5678', dni: '32987654' },
    { id: 3, nombre: 'Pedro', apellido: 'Gonzalez', email: 'pedro.gonzalez@email.com', telefono: '261-555-8765', dni: '28456789' },
];

export default function ClientesPage() {
  const [clients] = useState(FAKE_CLIENTS);
  const [searchTerm, setSearchTerm] = useState('');

  // En una aplicación real, usarías useEffect para obtener datos de tu API
  // useEffect(() => {
  //   fetchClients();
  // }, []);

  const filteredClients = clients.filter(client => 
    client.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.dni.includes(searchTerm)
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Gestión de Clientes</h1>
        <span className="px-4 py-2 font-bold text-white transition-colors duration-300 bg-brand-accent rounded-md hover:bg-brand-accent-dark cursor-pointer">
          + Agregar Cliente
        </span>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por nombre, apellido o DNI..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
        />
      </div>

      <div className="overflow-x-auto bg-gray-900/50 rounded-lg">
        <table className="min-w-full text-left">
          <thead className="border-b border-gray-700">
            <tr>
              <th className="px-6 py-3 text-sm font-medium tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-sm font-medium tracking-wider">Apellido</th>
              <th className="px-6 py-3 text-sm font-medium tracking-wider">Email</th>
              <th className="px-6 py-3 text-sm font-medium tracking-wider">DNI</th>
              <th className="px-6 py-3 text-sm font-medium tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => (
              <tr key={client.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                <td className="px-6 py-4 whitespace-nowrap">{client.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap">{client.apellido}</td>
                <td className="px-6 py-4 whitespace-nowrap">{client.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{client.dni}</td>
                <td className="px-6 py-4 whitespace-nowrap space-x-4">
                  <span className="text-brand-accent hover:underline cursor-pointer">Ver</span>
                  <span className="text-yellow-400 hover:underline cursor-pointer">Editar</span>
                </td>
              </tr>
            ))}
             {filteredClients.length === 0 && (
                <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-gray-400">
                        No se encontraron clientes.
                    </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}