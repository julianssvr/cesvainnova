import React, { useState } from 'react';
import { Menu, X, HardHat, ChevronDown } from 'lucide-react';
import cesvaLogo from '../img/cesva-logo.svg'

const services = [
  { id: 'consultoria', title: 'Consultoría y Planeación de proyectos' },
  { id: 'PIA', title: 'Proyectos de Ingeniería y Arquitectura' },
  { id: 'ITAO', title: 'Interventoría técnica y admnistrativa de obras de construcción' },
  { id: 'COC', title: 'Construcción y Obra Civil' },
  { id: 'MR', title: 'Mantenimiento y Remodalación' },
];

export default function Navbar({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const handleNavigation = (page) => {
    onNavigate(page);
    setIsOpen(false);
    setShowServices(false);
  };

  const handleServiceClick = (serviceId) => {
    onNavigate('service-detail', serviceId);
    setShowServices(false);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('home')}>
            <img className= "" src={cesvaLogo}/>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavigation('home')} className="text-gray-600 hover:text-blue-600">
              Inicio
            </button>
            <div className="relative">
              <button
                onClick={() => setShowServices(!showServices)}
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                Servicios
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {showServices && (
                <div className="absolute top-full left-0 w-56 mt-2 bg-white rounded-md shadow-lg py-1">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceClick(service.id)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={() => handleNavigation('portfolio')} className="text-gray-600 hover:text-blue-600">
              Portafolio
            </button>
            <button onClick={() => handleNavigation('team')} className="text-gray-600 hover:text-blue-600">
              Nuestro Equipo
            </button>
            <button onClick={() => handleNavigation('contact')} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Contacto
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => handleNavigation('home')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              Inicio
            </button>
            <div>
              <button
                onClick={() => setShowServices(!showServices)}
                className="flex items-center w-full px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Servicios
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {showServices && (
                <div className="pl-6 space-y-1">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceClick(service.id)}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => handleNavigation('portfolio')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              Portafolio
            </button>
            <button
              onClick={() => handleNavigation('team')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              Nuestro Equipo
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className="block w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}