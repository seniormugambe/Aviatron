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
  ChevronDown
} from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

  const navSections = [
    {
      title: 'Operations',
      items: [
        { id: 'operations', label: 'Flight Operations', icon: Plane, description: 'Monitor flights and schedules' },
        { id: 'tracking', label: 'Flight Tracking', icon: Radar, description: 'Real-time aircraft positions' },
        { id: 'weather', label: 'Weather & Safety', icon: CloudRain, description: 'Weather monitoring and alerts' },
      ]
    },
    {
      title: 'Management',
      items: [
        { id: 'airport', label: 'Airport Resources', icon: Building, description: 'Manage gates, staff, and equipment' },
        { id: 'passengers', label: 'Passenger Services', icon: Users, description: 'Check-in and passenger flow' },
        { id: 'maintenance', label: 'Maintenance', icon: Settings, description: 'Aircraft maintenance and IoT' },
      ]
    },
    {
      title: 'Analytics & Support',
      items: [
        { id: 'analytics', label: 'Predictive Analytics', icon: TrendingUp, description: 'AI-powered insights' },
        { id: 'emergency', label: 'Emergency Response', icon: AlertTriangle, description: 'Emergency coordination' },
        { id: 'users', label: 'User Management', icon: UserCheck, description: 'Staff and access control' },
      ]
    }
  ];

  const allItems = navSections.flatMap(section => section.items);

  const getCurrentSection = () => {
    return navSections.find(section => 
      section.items.some(item => item.id === activeTab)
    )?.title || 'Operations';
  };

  const getCurrentItem = () => {
    return allItems.find(item => item.id === activeTab);
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
            <div className="text-right">
              <div className="text-sm text-slate-300">{getCurrentSection()}</div>
              <div className="text-xs text-slate-400">{getCurrentItem()?.description}</div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-aviation-400 transition-all duration-200 p-2 rounded-lg hover:bg-slate-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block border-t border-slate-700/50">
          <div className="flex space-x-1 py-3">
            {navSections.map((section) => (
              <div key={section.title} className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown(section.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    section.items.some(item => item.id === activeTab)
                      ? 'bg-aviation-600 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <span>{section.title}</span>
                  <ChevronDown className="h-3 w-3" />
                </button>

                {/* Dropdown */}
                {activeDropdown === section.title && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-strong border border-slate-200 py-2 z-50"
                    onMouseEnter={() => setActiveDropdown(section.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            onTabChange(item.id);
                            setActiveDropdown(null);
                          }}
                          className={`w-full flex items-start space-x-3 px-4 py-3 text-left hover:bg-slate-50 transition-colors ${
                            activeTab === item.id ? 'bg-aviation-50 border-r-2 border-aviation-500' : ''
                          }`}
                        >
                          <Icon className={`h-5 w-5 mt-0.5 ${
                            activeTab === item.id ? 'text-aviation-600' : 'text-slate-500'
                          }`} />
                          <div>
                            <div className={`font-medium ${
                              activeTab === item.id ? 'text-aviation-900' : 'text-slate-900'
                            }`}>
                              {item.label}
                            </div>
                            <div className="text-xs text-slate-600 mt-0.5">
                              {item.description}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-700/50 animate-slide-up">
            <div className="py-3 space-y-1">
              {navSections.map((section) => (
                <div key={section.title}>
                  <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {section.title}
                  </div>
                  {section.items.map((item) => {
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
                            ? 'bg-aviation-600 text-white'
                            : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <div>
                          <div className="font-medium">{item.label}</div>
                          <div className="text-xs opacity-75">{item.description}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;