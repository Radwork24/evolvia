import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroLanding from './components/HeroLanding';
import Dashboard from './components/Dashboard';

export default function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModule = (moduleName) => {
    setCurrentView('dashboard');
    setActiveModal(moduleName);
  };

  return (
    <div className="app-container">
      {/* Universal Navbar */}
      <Navbar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        openModule={handleOpenModule} 
      />

      {/* Main View */}
      {currentView === 'landing' ? (
        <HeroLanding 
          onGetStarted={() => setCurrentView('dashboard')}
          openModule={handleOpenModule}
        />
      ) : (
        <Dashboard 
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
      )}
    </div>
  );
}
