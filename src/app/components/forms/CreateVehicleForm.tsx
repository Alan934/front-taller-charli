'use client';

import { useState } from 'react';

// Datos hardcodeados de clientes para el dropdown
const FAKE_CLIENTS = [
    { id: 1, nombre: 'Juan Perez' },
    { id: 2, nombre: 'Maria Gomez' },
];

export default function CreateVehicleForm() {
  const [formData, setFormData] = useState({
    marca: '',
    patente: '',
    nombre: '', // Este campo 'nombre' se refiere al modelo del auto
    clienteId: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar los datos a la API/backend
    console.log('Nuevo Vehículo:', formData);
    alert('Vehicle created successfully! (Check console)');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-900/80 rounded-lg space-y-4">
      <h2 className="text-xl font-bold text-brand-light mb-4">Create New Vehicle</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Marca */}
        <div>
          <label htmlFor="marca" className="block text-sm font-medium text-gray-300">Marca</label>
          <input type="text" name="marca" id="marca" value={formData.marca} onChange={handleChange} required className="form-input" />
        </div>
        {/* Nombre/Modelo */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-300">Modelo</label>
          <input type="text" name="nombre" id="nombre" value={formData.nombre} onChange={handleChange} required className="form-input" />
        </div>
        {/* Patente */}
        <div className="md:col-span-2">
          <label htmlFor="patente" className="block text-sm font-medium text-gray-300">Patente</label>
          <input type="text" name="patente" id="patente" value={formData.patente} onChange={handleChange} required className="form-input" />
        </div>
         {/* Asignar a Cliente */}
        <div className="md:col-span-2">
           <label htmlFor="clienteId" className="block text-sm font-medium text-gray-300">Assign to Client</label>
           <select name="clienteId" id="clienteId" value={formData.clienteId} onChange={handleChange} required className="form-input">
                <option value="" disabled>Select a client</option>
                {FAKE_CLIENTS.map(client => (
                    <option key={client.id} value={client.id}>{client.nombre}</option>
                ))}
           </select>
        </div>
      </div>
      <div className="flex justify-end pt-4">
        <button type="submit" className="form-button">
          Save Vehicle
        </button>
      </div>
    </form>
  );
}