import React, { useState } from 'react';
import { X } from 'lucide-react';

const projects = [
  {
    title: 'Centro Comercial Moderno',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1577493340887-b7bfff550145?auto=format&fit=crop&q=80',
    description: 'Desarrollo de un centro comercial de última generación con más de 100 locales comerciales, área de entretenimiento y restaurantes.',
    details: {
      location: 'Bogotá, Colombia',
      area: '45,000 m²',
      year: '2024',
      services: [
        'Diseño arquitectónico',
        'Gestión de construcción',
        'Supervisión de obra',
        'Certificación LEED'
      ]
    }
  },
  {
    title: 'Conjunto Residencial',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80',
    description: 'Complejo residencial de lujo con apartamentos modernos, áreas comunes y zonas verdes integradas.',
    details: {
      location: 'Medellín, Colombia',
      area: '25,000 m²',
      year: '2023',
      services: [
        'Diseño integral',
        'Construcción',
        'Paisajismo',
        'Gestión de proyecto'
      ]
    }
  },
  {
    title: 'Parque Industrial',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80',
    description: 'Centro logístico y de manufactura con instalaciones de última generación y certificación ambiental.',
    details: {
      location: 'Cali, Colombia',
      area: '75,000 m²',
      year: '2023',
      services: [
        'Planificación',
        'Construcción industrial',
        'Sistemas especializados',
        'Certificación ambiental'
      ]
    }
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestro Portafolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra algunos de nuestros proyectos más destacados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="text-blue-400 text-sm font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mt-2">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para detalles del proyecto */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
                >
                  <X className="h-6 w-6" />
                </button>
                <img 
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="p-6">
                <span className="text-blue-600 text-sm font-medium">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 mt-4">
                  {selectedProject.description}
                </p>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Ubicación</h4>
                    <p className="text-gray-600">{selectedProject.details.location}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Área</h4>
                    <p className="text-gray-600">{selectedProject.details.area}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Año</h4>
                    <p className="text-gray-600">{selectedProject.details.year}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Servicios Realizados</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {selectedProject.details.services.map((service, index) => (
                      <li key={index} className="text-gray-600">{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}