import React from 'react';
import { Building2, Hammer, PaintBucket, Wrench, TreePine, FileSearch } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Construcción',
    description: 'Desarrollo de proyectos residenciales, comerciales e industriales con los más altos estándares de calidad.'
  },
  {
    icon: Hammer,
    title: 'Remodelación',
    description: 'Transformamos espacios existentes para darles nueva vida y funcionalidad.'
  },
  {
    icon: PaintBucket,
    title: 'Diseño Arquitectónico',
    description: 'Creación de diseños innovadores y funcionales que satisfacen las necesidades de nuestros clientes.'
  },
  {
    icon: Wrench,
    title: 'Mantenimiento',
    description: 'Servicios preventivos y correctivos para mantener sus instalaciones en óptimas condiciones.'
  },
  {
    icon: TreePine,
    title: 'Sostenibilidad',
    description: 'Implementación de soluciones eco-amigables y eficientes energéticamente.'
  },
  {
    icon: FileSearch,
    title: 'Consultoría',
    description: 'Asesoramiento experto en todas las fases de su proyecto constructivo.'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales en construcción y arquitectura, adaptadas a sus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}