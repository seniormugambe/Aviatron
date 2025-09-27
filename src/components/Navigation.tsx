import React from 'react';
import { 
  Plane, 
  Settings, 
  Users, 
  CloudRain, 
  Radar, 
  TrendingUp, 
  Building, 
  AlertTriangle,
  Menu,
  X,
  UserCheck
} from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'operations', label: 'Flight Operations', icon: Plane },
    { id: 'maintenance', label: 'Maintenance', icon: Settings },
    { id: 'passengers', label: 'Passengers', icon: Users },
    { id: 'weather', label: 'Weather & Safety', icon: CloudRain },
    { id: 'tracking', label: 'ADS-B Tracking', icon: Radar },
    { id: 'analytics', label: 'Predictive Analytics', icon: TrendingUp },
    { id: 'airport', label: 'Airport Management', icon: Building },
    { id: 'emergency', label: 'Emergency Response', icon: AlertTriangle },
    { id: 'users', label: 'User Management', icon: UserCheck },
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-strong backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Plane className="h-9 w-9 text-aviation-400 transform rotate-45" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-success-500 rounded-full animate-pulse-soft"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-white to-aviation-200 bg-clip-text text-transparent">
                Smart Aviation Platform
              </h1>
              <div className="flex items-center space-x-2 mt-0.5">
                <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-soft">
                  Uganda
                </span>
                <span className="text-xs text-slate-400">v2.1</span>
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-aviation-400 transition-all duration-200 p-2 rounded-lg hover:bg-slate-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block border-t border-slate-700/50">
          <div className="flex space-x-2 overflow-x-auto py-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap relative group ${
                    activeTab === item.id
                      ? 'bg-aviation-600 text-white shadow-medium'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Icon className={`h-4 w-4 transition-transform duration-200 ${activeTab === item.id ? 'scale-110' : 'group-hover:scale-105'}`} />
                  <span>{item.label}</span>
                  {activeTab === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent-400 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-700/50 animate-slide-up">
            <div className="py-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onTabChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 w-full px-4 py-3 text-left text-sm font-medium transition-all duration-200 rounded-lg mx-2 ${
                      activeTab === item.id
                        ? 'bg-aviation-600 text-white'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;