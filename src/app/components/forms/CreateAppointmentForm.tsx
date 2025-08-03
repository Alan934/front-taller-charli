'use client';

import { useState } from 'react';

// Datos hardcodeados
const FAKE_CLIENTS = [
    { id: 1, nombre: 'Juan Perez' },
    { id: 2, nombre: 'Maria Gomez' },
];
// En un caso real, la lista de vehículos se actualizaría al seleccionar un cliente
const FAKE_VEHICLES = [
    { id: 101, patente: 'AB 123 CD', clienteId: 1 },
    { id: 102, patente: 'AF 456 GH', clienteId: 2 },
];
const TIPOS_TURNO = ['pendiente', 'confirmado', 'cancelado', 'finalizado'];


export default function CreateAppointmentForm() {
  const [formData, setFormData] = useState({
    fecha: '',
    hora: '',
    clienteId: '',
    vehiculoId: '',
    tipoTurno: 'pendiente',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar los datos a la API/backend
    console.log('Nuevo Turno:', formData);
    alert('Appointment created successfully! (Check console)');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-900/80 rounded-lg space-y-4">
      <h2 className="text-xl font-bold text-brand-light mb-4">Create New Appointment</h2>
      
      {/* Cliente y Vehículo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="clienteId" className="block text-sm font-medium text-gray-300">Client</label>
          <select name="clienteId" id="clienteId" value={formData.clienteId} onChange={handleChange} required className="form-input">
            <option value="" disabled>Select a client</option>
            {FAKE_CLIENTS.map(c => <option key={c.id} value={c.id}>{c.nombre}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="vehiculoId" className="block text-sm font-medium text-gray-300">Vehicle</label>
          <select name="vehiculoId" id="vehiculoId" value={formData.vehiculoId} onChange={handleChange} required className="form-input" disabled={!formData.clienteId}>
            <option value="" disabled>Select a vehicle</option>
            {/* Filtra vehículos basados en el cliente seleccionado */}
            {FAKE_VEHICLES
              .filter(v => v.clienteId === parseInt(formData.clienteId))
              .map(v => <option key={v.id} value={v.id}>{v.patente}</option>)
            }
          </select>
        </div>
      </div>

      {/* Fecha y Hora */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div>
          <label htmlFor="fecha" className="block text-sm font-medium text-gray-300">Date</label>
          <input type="date" name="fecha" id="fecha" value={formData.fecha} onChange={handleChange} required className="form-input" />
        </div>
        <div>
          <label htmlFor="hora" className="block text-sm font-medium text-gray-300">Time</label>
          <input type="time" name="hora" id="hora" value={formData.hora} onChange={handleChange} required className="form-input" />
        </div>
      </div>

      {/* Tipo de Turno */}
      <div>
        <label htmlFor="tipoTurno" className="block text-sm font-medium text-gray-300">Status</label>
        <select name="tipoTurno" id="tipoTurno" value={formData.tipoTurno} onChange={handleChange} required className="form-input capitalize">
          {TIPOS_TURNO.map(t => <option key={t} value={t} className="capitalize">{t}</option>)}
        </select>
      </div>

      <div className="flex justify-end pt-4">
        <button type="submit" className="form-button">
          Save Appointment
        </button>
      </div>
    </form>
  );
}