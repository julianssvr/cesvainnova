import React from 'react';
import { Briefcase, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Carlos Enrique Sierra',
    position: 'Gerente - Ingeniero Civil y Técnico',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    description: 'Líder visionario con más de 20 años de experiencia en el sector de la construcción. Especializado en gestión de proyectos de gran envergadura y desarrollo sostenible.',
    expertise: [
      'Gestión de proyectos',
      'Ingeniería estructural',
      'Desarrollo sostenible',
      'Dirección estratégica'
    ]
  },
  {
    name: 'Julián Sierra',
    position: 'Asesor Comercial - Ingeniero físico',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
    description: 'asñlkdjfñlaksdjflasdjk.',
    expertise: [
      'Diseño arquitectónico',
      'Gestión comercial',
      'Planificación urbana',
      'Asesoría técnica'
    ]
  }
];

export default function Team() {
  return (
    <section className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Profesionales comprometidos con la excelencia y la innovación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                <div className="flex items-center mt-2 text-blue-600">
                  <Briefcase className="h-5 w-5 mr-2" />
                  <span className="font-medium">{member.position}</span>
                </div>
                
                <p className="mt-4 text-gray-600">
                  {member.description}
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Áreas de Experiencia</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {member.expertise.map((skill, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="h-2 w-2 bg-blue-600 rounded-full mr-2"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700">
                  <Mail className="h-5 w-5 mr-2" />
                  Contactar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}