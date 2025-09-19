import React, { useState } from 'react';
import Navigation from './components/Navigation';
import FlightOperations from './components/FlightOperations';
import MaintenanceSystem from './components/MaintenanceSystem';
import PassengerExperience from './components/PassengerExperience';
import WeatherSafety from './components/WeatherSafety';
import ADSBTracking from './components/ADSBTracking';
import PredictiveAnalytics from './components/PredictiveAnalytics';
import AirportManagement from './components/AirportManagement';
import EmergencyResponse from './components/EmergencyResponse';
import UserManagement from './components/UserManagement';

function App() {
  const [activeTab, setActiveTab] = useState('operations');

  const renderContent = () => {
    switch (activeTab) {
      case 'operations':
        return <FlightOperations />;
      case 'maintenance':
        return <MaintenanceSystem />;
      case 'passengers':
        return <PassengerExperience />;
      case 'weather':
        return <WeatherSafety />;
      case 'tracking':
        return <ADSBTracking />;
      case 'analytics':
        return <PredictiveAnalytics />;
      case 'airport':
        return <AirportManagement />;
      case 'emergency':
        return <EmergencyResponse />;
      case 'users':
        return <UserManagement />;
      default:
        return <FlightOperations />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;