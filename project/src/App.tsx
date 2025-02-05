import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Team from './pages/Team';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState('');

  const handleNavigation = (page, serviceId = '') => {
    setCurrentPage(page);
    if (serviceId) {
      setSelectedService(serviceId);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'services':
        return <Services onServiceSelect={(service) => {
          setSelectedService(service);
          setCurrentPage('service-detail');
        }} />;
      case 'service-detail':
        return <ServiceDetail serviceId={selectedService} />;
      case 'portfolio':
        return <Portfolio />;
      case 'team':
        return <Team />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={handleNavigation} />
      {renderPage()}
    </div>
  );
}

export default App;