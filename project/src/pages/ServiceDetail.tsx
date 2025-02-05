import React from 'react';
import { Building2, Hammer, PaintBucket, Wrench, TreePine, FileSearch, CheckCircle2 } from 'lucide-react';

const servicesData = {
  consultoria: {
    icon: Building2,
    title: 'Consultoría y Planeación de proyectos',
    description: 'Ofrecemos un servicio integral en la planificación y gestión de proyectos de construcción, abarcando desde la estructuración técnica, jurídica y financiera hasta la promoción de inversiones. Garantizamos la viabilidad, el cumplimiento de plazos y costos, y la eficiencia en la ejecución, optimizando recursos y asegurando el éxito del proyecto.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80',
    features: [
      'Estructuración técnica, jurídica y financiera de proyectos de inversión',
      'Promoción de proyectos de inversión',
      'Estudio de factibilidad de proyetos de construcción',
      'Programación y control de obra',
      'Presupuestos de construcción'
    ],
    benefits: [
      'Viabilidad Asegurada',
      'Optimización de recursos',
      'Reducción de Riesgos',
      'Eficiencia en la ejecución',
      'Transparencia y Control Financiero'
    ],
    process: [
      'Análisis preliminar',
      'Estructuración y Planificación',
      'Promoción y Captación de inversores',
      'Gerencia y Ejecución',
      'Control y seguimiento'
    ]
  },
  PIA: {
    icon: Hammer,
    title: 'Proyectos de Ingeniería y Arquitectura',
    description: 'Diseñamos proyectos arquitectónicos, urbanísticos y de ingeniería, incluyendo estructuras, cimentaciones, redes hidráulicas, sanitarias, acueducto, alcantarillado y pavimentos, garantizando funcionalidad y eficiencia.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80',
    features: [
      'Diseño de Proyectos Arquitectónicos y Urbanísticos',
      'Diseño Estructural y de Cimentaciones',
      'Diseño de redes hidráulicas y sanitarias',
      'Diseño de redes de acueductos y alcantarillado',
      'Diseño de estructuras para pisos'
    ],
    benefits: [
      'Calidad y seguridad',
      'Eficiencia en infrastructura',
      'Durabilidad y resitencia',
      'Optimización de recursos',
      'Sostenibilidad'
    ],
    process: [
      'Estudio Preliminar y Diagnóstico',
      'Investigación y Cumplimiento Normativo',
      'Colaboración Multidisciplinaria',
      'Análisis de impacto ambiental',
      'Revisión y Optimización del Diseño',
      'Simulación y Modelación',
      'Evaluación de costos y Materiales',
      'Entrega de Documentación técnica',
      'Seguimiento Post-Diseño'
    ]
  },
  ITAO: {
    icon: PaintBucket,
    title: 'Interventoría técnica y admnistrativa de obras de construcción',
    description: 'La interventoría técnica y administrativa asegura que las obras se ejecuten según los planos, normativas y plazos establecidos. Se supervisan los procesos constructivos, la calidad de los materiales y el cumplimiento del presupuesto. Además, se gestionan los contratos, permisos y la comunicación entre las partes, garantizando eficiencia, transparencia y el éxito del proyecto.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
    features: [
      'Supervisión de Ejecución de Obras',
      'Control de Calidad y Seguridad',
      'Gestión Administrativa y Documental'
    ],
    benefits: [
      'Cumplimiento de Normativas',
      'Optimización de Recursos y costos',
      'Prevención de Riesgos'
    ],
    process: [
      'Evaluación Incial del Proyecto',
      'Monitoreo Diario de la Obra',
      'Revisión y control de Documentación'
    ]
  },
  COC: {
    icon: Wrench,
    title: 'Construcción y Obra Civil',
    description: 'Construimos viviendas, hoteles, bodegas, plazas de mercado y estaciones de servicio. Desarrollamos infraestructura vial, urbanismo, pilotajes y pavimentos. Además, ejecutamos acueductos, alcantarillados y plantas de tratamiento.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80',
    features: [
      'Proyectos de Vivienda',
      'Construcción hotelera',
      'Bodegas y hangares',
      'Plazas de mercado',
      'Mataderos - Plantas de Beneficios Animal',
      'Estaciones de servicio',
      'Carreteras y obra de infraestructura vial',
      'Obras de urbanismos',
      'Acueductos y alcantarillados',
      'Bocatomas, cabales de conducción, desarenaderos y plantas de tratamientos'
    ],
    benefits: [
      'Proyectos Diversificados',
      'Alta Calidad y Durabilidad',
      'Cumplinetno de Normativas',
      'Eficiencia en Costos',
      'Reducción de Tiempos en Ejecución'
    ],
    process: [
      'Estudios de Viabilidad y Diseño Inicial',
      'Planificación de Recursos y Cronograma',
      'Construcción y Supervisión de Obras',
      'Control de Calidad y Seguridad',
      'Entrega y Seguimiento Post-Obra'
    ]
  },
  sostenibilidad: {
    icon: TreePine,
    title: 'Sostenibilidad',
    description: 'Implementación de soluciones eco-amigables y eficientes energéticamente.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80',
    features: [
      'Certificación LEED',
      'Energías renovables',
      'Eficiencia energética',
      'Materiales sostenibles',
      'Gestión de residuos'
    ],
    benefits: [
      'Reducción de impacto ambiental',
      'Ahorro energético',
      'Certificaciones internacionales',
      'Valor agregado',
      'Responsabilidad social'
    ],
    process: [
      'Evaluación ambiental',
      'Diseño sostenible',
      'Implementación',
      'Certificación',
      'Monitoreo continuo'
    ]
  },
  MR: {
    icon: FileSearch,
    title: 'Mantenimiento y Remodalación',
    description: 'Ofrecemos mantenimiento para propiedades horizontales, comerciales e industriales, incluyendo remodelaciones y reparaciones de infraestructuras, sistemas eléctricos, hidráulicos y de climatización, asegurando eficiencia y prolongando la vida útil de las instalaciones.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    features: [
      'Mantenimiento Propiedad Raíz',
      'Mantenimiento Comercial',
      'Mantenimiento Industrial',
      'Remodelaciones'
    ],
    benefits: [
      'Prologanción de la Vida Util de las Propiedades',
      'Mejorar la Estética y Funcionalidad',
      'Reducción de Costos Operativos',
      'Cumpliento de Normativas y Seguridad',
      'Transparencia técnica y administrativa'
    ],
    process: [
      'Inspección y Diagnóstico Inicial',
      'Planificación y Ejecución del Mantenimiento',
      'Diseño y Ejecución de Remodelaciones',
      'Monitoreo Continuo y Ajustes',
      'Entrega y Cierre del proyecto'
    ]
  }
};

export default function ServiceDetail({ serviceId }) {
  const service = servicesData[serviceId];
  const Icon = service.icon;

  return (
    <section className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img 
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="flex items-center mb-4">
              <Icon className="h-12 w-12 mr-4" />
              <h1 className="text-4xl font-bold">{service.title}</h1>
            </div>
            <p className="text-xl max-w-2xl">{service.description}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Características */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Características</h2>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Beneficios */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Beneficios</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Proceso */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Proceso</h2>
            <ul className="space-y-4">
              {service.process.map((step, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3">
                    {index + 1}
                  </div>
                  <span className="text-gray-600">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-lg">
            Solicitar Información
          </button>
        </div>
      </div>
    </section>
  );
}