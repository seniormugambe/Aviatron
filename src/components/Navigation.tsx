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
  ChevronDown,
  Activity,
  Clock,
  Shield,
  Zap
} from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = React.useState<NodeJS.Timeout | null>(null);

  const navSections = [
    {
      title: 'Operations',
      color: 'from-aviation-500 to-aviation-600',
      bgColor: 'bg-aviation-50',
      textColor: 'text-aviation-700',
      items: [
        { 
          id: 'operations', 
          label: 'Flight Operations', 
          icon: Plane, 
          description: 'Monitor flights and schedules',
          stats: '24 active flights',
          status: 'operational'
        },
        { 
          id: 'tracking', 
          label: 'Flight Tracking', 
          icon: Radar, 
          description: 'Real-time aircraft positions',
          stats: '500km coverage',
          status: 'operational'
        },
        { 
          id: 'weather', 
          label: 'Weather & Safety', 
          icon: CloudRain, 
          description: 'Weather monitoring and alerts',
          stats: '2 active warnings',
          status: 'warning'
        },
      ]
    },
    {
      title: 'Management',
      color: 'from-success-500 to-success-600',
      bgColor: 'bg-success-50',
      textColor: 'text-success-700',
      items: [
        { 
          id: 'airport', 
          label: 'Airport Resources', 
          icon: Building, 
          description: 'Manage gates, staff, and equipment',
          stats: '87% efficiency',
          status: 'operational'
        },
        { 
          id: 'passengers', 
          label: 'Passenger Services', 
          icon: Users, 
          description: 'Check-in and passenger flow',
          stats: '3,247 today',
          status: 'operational'
        },
        { 
          id: 'maintenance', 
          label: 'Maintenance', 
          icon: Settings, 
          description: 'Aircraft maintenance and IoT',
          stats: '2 in service',
          status: 'warning'
        },
      ]
    },
    {
      title: 'Analytics & Support',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      items: [
        { 
          id: 'analytics', 
          label: 'Predictive Analytics', 
          icon: TrendingUp, 
          description: 'AI-powered insights',
          stats: '90% accuracy',
          status: 'operational'
        },
        { 
          id: 'emergency', 
          label: 'Emergency Response', 
          icon: AlertTriangle, 
          description: 'Emergency coordination',
          stats: 'All systems ready',
          status: 'operational'
        },
        { 
          id: 'users', 
          label: 'User Management', 
          icon: UserCheck, 
          description: 'Staff and access control',
          stats: '183 users',
          status: 'operational'
        },
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

  const handleDropdownEnter = (sectionTitle: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(sectionTitle);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setDropdownTimeout(timeout);
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
                  onMouseEnter={() => handleDropdownEnter(section.title)}
                  onMouseLeave={handleDropdownLeave}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    section.items.some(item => item.id === activeTab)
                      ? 'bg-aviation-600 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <span>{section.title}</span>
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                    activeDropdown === section.title ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown */}
                {activeDropdown === section.title && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-strong border border-slate-200 py-3 z-50 animate-slide-up"
                    onMouseEnter={() => handleDropdownEnter(section.title)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {/* Section Header */}
                    <div className={`mx-4 mb-3 p-3 rounded-lg ${section.bgColor} border-l-4 border-gradient-to-b ${section.color}`}>
                      <h4 className={`font-semibold ${section.textColor} text-sm`}>{section.title}</h4>
                      <p className="text-xs text-slate-600 mt-1">
                        {section.items.length} modules available
                      </p>
                    </div>

                    {section.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            onTabChange(item.id);
                            setActiveDropdown(null);
                          }}
                          className={`w-full flex items-start space-x-3 px-4 py-3 text-left hover:bg-slate-50 transition-all duration-200 group ${
                            activeTab === item.id ? 'bg-aviation-50 border-r-4 border-aviation-500' : ''
                          }`}
                        >
                          <div className="relative">
                            <Icon className={`h-5 w-5 mt-0.5 transition-colors duration-200 ${
                              activeTab === item.id ? 'text-aviation-600' : 'text-slate-500 group-hover:text-slate-700'
                            }`} />
                            <div className="absolute -top-1 -right-1">
                              {getStatusIndicator(item.status)}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div className={`font-medium transition-colors duration-200 ${
                                activeTab === item.id ? 'text-aviation-900' : 'text-slate-900 group-hover:text-slate-800'
                              }`}>
                                {item.label}
                              </div>
                              {activeTab === item.id && (
                                <div className="flex items-center space-x-1">
                                  <Activity className="h-3 w-3 text-aviation-500" />
                                  <span className="text-xs text-aviation-600 font-medium">Active</span>
                                </div>
                              )}
                            </div>
                            <div className="text-xs text-slate-600 mt-0.5 group-hover:text-slate-700 transition-colors duration-200">
                              {item.description}
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3 text-slate-400" />
                                <span className="text-xs text-slate-500">{item.stats}</span>
                              </div>
                              <div className={`text-xs px-2 py-0.5 rounded-full ${
                                item.status === 'operational' 
                                  ? 'bg-success-100 text-success-700' 
                                  : item.status === 'warning'
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-red-100 text-red-700'
                              }`}>
                                {item.status}
                              </div>
                            </div>
                          </div>
                        </button>
                      );
                    })}

                    {/* Quick Actions Footer */}
                    <div className="mx-4 mt-3 pt-3 border-t border-slate-200">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2 text-slate-500">
                          <Shield className="h-3 w-3" />
                          <span>All systems monitored</span>
                        </div>
                        <div className="flex items-center space-x-1 text-success-600">
                          <Zap className="h-3 w-3" />
                          <span>Live data</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
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
                        <div className="relative">
                          <Icon className="h-4 w-4" />
                          <div className="absolute -top-1 -right-1">
                            {getStatusIndicator(item.status)}
                          </div>
                        </div>
                        <div>
                          <div className="font-medium">{item.label}</div>
                          <div className="text-xs opacity-75">{item.description}</div>
                          <div className="text-xs opacity-60 mt-1">{item.stats}</div>
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