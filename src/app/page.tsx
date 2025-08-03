'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirigir automáticamente al login
    router.push('/auth/login');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-brand-dark">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-brand-light mb-4">
          Taller Charli
        </h1>
        <p className="text-gray-400">
          Redirigiendo al login...
        </p>
      </div>
    </div>
  );
}
