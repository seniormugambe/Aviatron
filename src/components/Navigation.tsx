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
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Plane className="h-8 w-8 text-blue-400" />
            <h1 className="text-xl font-bold">Smart Aviation Platform</h1>
            <span className="bg-blue-600 text-xs px-2 py-1 rounded-full">Uganda</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block border-t border-slate-700">
          <div className="flex space-x-8 overflow-x-auto py-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === item.id
                      ? 'bg-blue-700 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-700">
            <div className="py-2 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onTabChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center space-x-2 w-full px-3 py-2 text-left text-sm font-medium transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-700 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-slate-700'
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