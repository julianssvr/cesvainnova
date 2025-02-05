import React from 'react';
import { Building2, Hammer, PaintBucket, Wrench, TreePine, FileSearch } from 'lucide-react';

const services = [
  {
    id: 'consultoria',
    icon: Building2,
    title: 'Consultoría y Planeación de proyectos',
    description: 'Ofrecemos un servicio integral en la planificación y gestión de proyectos de construcción, abarcando desde la estructuración técnica, jurídica y financiera hasta la promoción de inversiones. Garantizamos la viabilidad, el cumplimiento de plazos y costos, y la eficiencia en la ejecución, optimizando recursos y asegurando el éxito del proyecto.'
  },
  {
    id: 'PIA',
    icon: Hammer,
    title: 'Proyectos de Ingeniería y Arquitectura',
    description: 'Diseñamos proyectos arquitectónicos, urbanísticos y de ingeniería, incluyendo estructuras, cimentaciones, redes hidráulicas, sanitarias, acueducto, alcantarillado y pavimentos, garantizando funcionalidad y eficiencia.'
  },
  {
    id: 'ITAO',
    icon: PaintBucket,
    title: 'Interventoría técnica y admnistrativa de obras de construcción',
    description: 'La interventoría técnica y administrativa asegura que las obras se ejecuten según los planos, normativas y plazos establecidos. Se supervisan los procesos constructivos, la calidad de los materiales y el cumplimiento del presupuesto. Además, se gestionan los contratos, permisos y la comunicación entre las partes, garantizando eficiencia, transparencia y el éxito del proyecto.'
  },
  {
    id: 'COC',
    icon: TreePine,
    title: 'Construcción y Obra Civil',
    description: 'Construimos viviendas, hoteles, bodegas, plazas de mercado y estaciones de servicio. Desarrollamos infraestructura vial, urbanismo, pilotajes y pavimentos. Además, ejecutamos acueductos, alcantarillados y plantas de tratamiento.'
  },
  {
    id: 'MR',
    icon: FileSearch,
    title: 'Mantenimiento y Remodalación',
    description: 'Ofrecemos mantenimiento para propiedades horizontales, comerciales e industriales, incluyendo remodelaciones y reparaciones de infraestructuras, sistemas eléctricos, hidráulicos y de climatización, asegurando eficiencia y prolongando la vida útil de las instalaciones.'
  }
];

export default function Services({ onServiceSelect }) {
  return (
    <section className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales en construcción y arquitectura, adaptadas a sus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => onServiceSelect(service.id)}
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