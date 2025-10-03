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
  UserCheck,
  Activity,
  Moon,
  Sun,
  Brain
} from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' || 
             (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigationItems = [
    { 
      id: 'operations', 
      label: 'Flight Operations', 
      icon: Plane, 
      description: 'Monitor flights and schedules',
      status: 'operational'
    },
    { 
      id: 'tracking', 
      label: 'Flight Tracking', 
      icon: Radar, 
      description: 'Real-time aircraft positions',
      status: 'operational'
    },
    { 
      id: 'weather', 
      label: 'Weather & Safety', 
      icon: CloudRain, 
      description: 'Weather monitoring and alerts',
      status: 'warning'
    },
    { 
      id: 'airport', 
      label: 'Airport Management', 
      icon: Building, 
      description: 'Manage gates, staff, and equipment',
      status: 'operational'
    },
    { 
      id: 'passengers', 
      label: 'Passenger Services', 
      icon: Users, 
      description: 'Check-in and passenger flow',
      status: 'operational'
    },
    { 
      id: 'maintenance', 
      label: 'Maintenance', 
      icon: Settings, 
      description: 'Aircraft maintenance and IoT',
      status: 'warning'
    },
    { 
      id: 'analytics', 
      label: 'Predictive Analytics', 
      icon: TrendingUp, 
      description: 'AI-powered insights',
      status: 'operational'
    },
    { 
      id: 'ai-systems', 
      label: 'AI Control Center', 
      icon: Brain, 
      description: 'AI models and automation',
      status: 'operational'
    },
    { 
      id: 'emergency', 
      label: 'Emergency Response', 
      icon: AlertTriangle, 
      description: 'Emergency coordination',
      status: 'operational'
    },
    { 
      id: 'users', 
      label: 'User Management', 
      icon: UserCheck, 
      description: 'Staff and access control',
      status: 'operational'
    }
  ];

  const getCurrentItem = () => {
    return navigationItems.find(item => item.id === activeTab);
  };

  const getStatusIndicator = (status: string) => {
    switch (status) {
      case 'operational':
        return <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse-soft"></div>;
      case 'warning':
        return <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse-soft"></div>;
      case 'critical':
        return <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse-soft"></div>;
      default:
        return <div className="w-2 h-2 bg-slate-400 rounded-full"></div>;
    }
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-strong backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Plane className="h-8 w-8 text-aviation-400 transform rotate-45" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-success-500 rounded-full animate-pulse-soft"></div>
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-white to-aviation-200 bg-clip-text text-transparent">
                Smart Aviation Platform
              </h1>
              <div className="flex items-center space-x-2 mt-0.5">
                <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                  Uganda
                </span>
                <span className="text-xs text-slate-400">v2.1</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Current Section Indicator */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200"
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <div className="text-right">
              <div className="text-sm text-slate-300">{getCurrentItem()?.label}</div>
              <div className="text-xs text-slate-400">{getCurrentItem()?.description}</div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200"
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-aviation-400 transition-all duration-200 p-2 rounded-lg hover:bg-slate-800"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block border-t border-slate-700/50">
          <div className="flex flex-wrap gap-1 py-3">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    activeTab === item.id
                      ? 'bg-aviation-600 text-white shadow-medium'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50 hover:shadow-soft'
                  }`}
                >
                  <div className="relative">
                    <Icon className={`h-4 w-4 transition-all duration-200 ${
                      activeTab === item.id 
                        ? 'text-white' 
                        : 'text-slate-400 group-hover:text-aviation-400 group-hover:scale-110'
                    }`} />
                    <div className="absolute -top-1 -right-1">
                      {getStatusIndicator(item.status)}
                    </div>
                  </div>
                  <span className={`transition-all duration-200 ${
                    activeTab === item.id 
                      ? 'text-white font-semibold' 
                      : 'group-hover:text-white group-hover:font-medium'
                  }`}>
                    {item.label}
                  </span>
                  {activeTab === item.id && (
                    <div className="flex items-center space-x-1">
                      <Activity className="h-3 w-3 text-aviation-200 animate-pulse-soft" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-700/50 animate-slide-up">
            <div className="py-3 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onTabChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 w-full px-4 py-3 text-left text-sm transition-all duration-200 rounded-lg mx-2 ${
                      activeTab === item.id
                        ? 'bg-aviation-600 text-white shadow-medium'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    <div className="relative">
                      <Icon className={`h-4 w-4 transition-all duration-200 ${
                        activeTab === item.id ? 'text-white' : 'text-slate-400'
                      }`} />
                      <div className="absolute -top-1 -right-1">
                        {getStatusIndicator(item.status)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className={`font-medium transition-all duration-200 ${
                        activeTab === item.id ? 'text-white' : 'text-slate-300'
                      }`}>
                        {item.label}
                      </div>
                      <div className={`text-xs mt-0.5 transition-all duration-200 ${
                        activeTab === item.id ? 'text-aviation-200' : 'text-slate-400'
                      }`}>
                        {item.description}
                      </div>
                    </div>
                    {activeTab === item.id && (
                      <Activity className="h-4 w-4 text-aviation-200 animate-pulse-soft" />
                    )}
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