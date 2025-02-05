import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="inicio" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Construyendo el Futuro<br />con Excelencia
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Especialistas en consultoría, diseño, construcción y mantenimiento de obras civiles y arquitectónicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contacto" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Solicitar Cotización
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#portafolio" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors"
            >
              Ver Proyectos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}