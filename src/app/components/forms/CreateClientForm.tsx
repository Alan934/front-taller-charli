'use client';

import { useState } from 'react';

export default function CreateClientForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    email: '',
    telefono: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar los datos a la API/backend
    // Por ahora, solo lo mostramos en la consola
    console.log('Nuevo Cliente:', { ...formData, rol: 'cliente' });
    alert('Client created successfully! (Check console)');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-900/80 rounded-lg space-y-4">
      <h2 className="text-xl font-bold text-brand-light mb-4">Create New Client</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-300">Nombre</label>
          <input type="text" name="nombre" id="nombre" value={formData.nombre} onChange={handleChange} required className="form-input" />
        </div>
        {/* Apellido */}
        <div>
          <label htmlFor="apellido" className="block text-sm font-medium text-gray-300">Apellido</label>
          <input type="text" name="apellido" id="apellido" value={formData.apellido} onChange={handleChange} required className="form-input" />
        </div>
        {/* DNI */}
        <div>
          <label htmlFor="dni" className="block text-sm font-medium text-gray-300">DNI</label>
          <input type="text" name="dni" id="dni" value={formData.dni} onChange={handleChange} required className="form-input" />
        </div>
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="form-input" />
        </div>
        {/* Teléfono */}
        <div className="md:col-span-2">
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-300">Teléfono</label>
          <input type="tel" name="telefono" id="telefono" value={formData.telefono} onChange={handleChange} required className="form-input" />
        </div>
      </div>
      <div className="flex justify-end pt-4">
        <button type="submit" className="form-button">
          Save Client
        </button>
      </div>
    </form>
  );
}