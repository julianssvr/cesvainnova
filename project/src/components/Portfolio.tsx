import React from 'react';

const projects = [
  {
    title: 'Centro Comercial Moderno',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1577493340887-b7bfff550145?auto=format&fit=crop&q=80'
  },
  {
    title: 'Conjunto Residencial',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80'
  },
  {
    title: 'Parque Industrial',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80'
  }
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div key={index} className="group relative overflow-hidden rounded-lg">
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
      </div>
    </section>
  );
}