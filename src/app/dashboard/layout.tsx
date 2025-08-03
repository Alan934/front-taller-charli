import Link from 'next/link';
// En una aplicación real, aquí iría la lógica para proteger la ruta,
// por ejemplo, verificando la sesión del usuario.
// import { checkUserSession } from '@/lib/auth';
// import { redirect } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const user = await checkUserSession(); // Función hipotética
  // if (!user) redirect('/login');

  return (
    <div className="flex h-screen bg-brand-dark text-brand-light">
      <aside className="flex flex-col w-64 p-6 bg-gray-900/50">
        <div className="mb-8">
            <h1 className="text-xl font-bold text-brand-accent">TALLER CHARLI</h1>
            <p className="text-sm text-gray-400">Panel de Administración</p>
        </div>
        <nav className="flex-1">
          <ul className="space-y-4">
            <li><Link href="/dashboard" className="block px-4 py-2 rounded-md hover:bg-brand-accent hover:text-white">Inicio</Link></li>
            <li><Link href="/dashboard/clientes" className="block px-4 py-2 rounded-md hover:bg-brand-accent hover:text-white">Clientes</Link></li>
            <li><Link href="/dashboard/vehiculos" className="block px-4 py-2 rounded-md hover:bg-brand-accent hover:text-white">Vehículos</Link></li>
            <li><Link href="/dashboard/turnos" className="block px-4 py-2 rounded-md hover:bg-brand-accent hover:text-white">Turnos</Link></li>
          </ul>
        </nav>
        <div className="mt-auto">
            <Link href="/login" className="block w-full px-4 py-2 text-center text-red-400 border border-red-400 rounded-md hover:bg-red-400 hover:text-white">
                Cerrar Sesión
            </Link>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}