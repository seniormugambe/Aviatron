import React from 'react';
import { Plane, Radar, MapPin, Clock, Activity, AlertTriangle } from 'lucide-react';

const ADSBTracking: React.FC = () => {
  const trackedFlights = [
    {
      id: 'UG001',
      callsign: 'UGA001',
      aircraft: 'Boeing 737-800',
      altitude: '35,000 ft',
      speed: '450 kts',
      heading: '090°',
      origin: 'Entebbe (EBB)',
      destination: 'Nairobi (NBO)',
      status: 'En Route',
      latitude: 0.0481,
      longitude: 32.4419,
      squawk: '2000'
    },
    {
      id: 'UG002',
      callsign: 'UGA002',
      aircraft: 'Airbus A330',
      altitude: '37,000 ft',
      speed: '480 kts',
      heading: '045°',
      origin: 'Entebbe (EBB)',
      destination: 'Dubai (DXB)',
      status: 'Climbing',
      latitude: 1.3733,
      longitude: 32.2903,
      squawk: '2001'
    },
    {
      id: 'UG003',
      callsign: 'UGA003',
      aircraft: 'DHC-8-400',
      altitude: '15,000 ft',
      speed: '280 kts',
      heading: '180°',
      origin: 'Gulu (ULU)',
      destination: 'Entebbe (EBB)',
      status: 'Descending',
      latitude: 2.7816,
      longitude: 32.2719,
      squawk: '2002'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'en route': return 'text-blue-600 bg-blue-100';
      case 'climbing': return 'text-green-600 bg-green-100';
      case 'descending': return 'text-yellow-600 bg-yellow-100';
      case 'approach': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'en route': return <Plane className="h-4 w-4" />;
      case 'climbing': return <Activity className="h-4 w-4" />;
      case 'descending': return <Activity className="h-4 w-4" />;
      case 'approach': return <AlertTriangle className="h-4 w-4" />;
      default: return <Plane className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">ADS-B Flight Tracking System</h2>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Tracked Flights</p>
                <p className="text-2xl font-bold text-blue-900">24</p>
              </div>
              <Radar className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Coverage Area</p>
                <p className="text-2xl font-bold text-green-900">500 km</p>
              </div>
              <MapPin className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Update Rate</p>
                <p className="text-2xl font-bold text-purple-900">1 sec</p>
              </div>
              <Clock className="h-8 w-8 text-purple-500" />
            </div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">System Status</p>
                <p className="text-2xl font-bold text-orange-900">Online</p>
              </div>
              <Activity className="h-8 w-8 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Flight Map</h3>
          <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-lg h-96 overflow-hidden border border-slate-300 dark:border-slate-600">
            {/* Map Background Grid */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" className="text-slate-400 dark:text-slate-500" />
              </svg>
            </div>

            {/* Uganda Map Outline */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
              <path
                d="M120 80 L280 85 L285 120 L275 180 L250 220 L180 225 L140 200 L115 150 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="text-slate-400 dark:text-slate-500 animate-pulse"
              />
              <text x="200" y="155" textAnchor="middle" className="text-xs font-medium fill-slate-500 dark:fill-slate-400">
                UGANDA
              </text>
            </svg>

            {/* Airport Markers */}
            <div className="absolute top-16 left-32">
              <div className="relative group cursor-pointer">
                <div className="w-3 h-3 bg-aviation-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Entebbe Intl (EBB)
                </div>
              </div>
            </div>
            
            <div className="absolute top-8 left-48">
              <div className="relative group cursor-pointer">
                <div className="w-2 h-2 bg-slate-500 rounded-full border border-white shadow"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Gulu Airport (ULU)
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 left-24">
              <div className="relative group cursor-pointer">
                <div className="w-2 h-2 bg-slate-500 rounded-full border border-white shadow"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Kasese Airstrip
                </div>
              </div>
            </div>

            {/* Aircraft Icons with Flight Paths */}
            {/* UGA001 - En Route to Nairobi */}
            <div className="absolute top-24 left-52 animate-pulse">
              <div className="relative group cursor-pointer">
                <div className="transform rotate-45">
                  <Plane className="h-4 w-4 text-blue-600 drop-shadow-lg" />
                </div>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  <div className="font-semibold">UGA001</div>
                  <div>Boeing 737-800</div>
                  <div>35,000 ft • 450 kts</div>
                  <div>EBB → NBO</div>
                </div>
                {/* Flight path trail */}
                <svg className="absolute -top-2 -left-16 w-20 h-8 pointer-events-none">
                  <path
                    d="M0 4 Q10 2 20 4"
                    stroke="rgb(37 99 235)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="3,2"
                    className="opacity-60"
                  />
                </svg>
              </div>
            </div>

            {/* UGA002 - Climbing to Dubai */}
            <div className="absolute top-20 left-36 animate-pulse" style={{ animationDelay: '0.5s' }}>
              <div className="relative group cursor-pointer">
                <div className="transform rotate-12">
                  <Plane className="h-4 w-4 text-green-600 drop-shadow-lg" />
                </div>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  <div className="font-semibold">UGA002</div>
                  <div>Airbus A330</div>
                  <div>37,000 ft • 480 kts</div>
                  <div>EBB → DXB</div>
                </div>
                {/* Climbing indicator */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              </div>
            </div>

            {/* UGA003 - Descending to Entebbe */}
            <div className="absolute top-12 left-44 animate-pulse" style={{ animationDelay: '1s' }}>
              <div className="relative group cursor-pointer">
                <div className="transform rotate-180">
                  <Plane className="h-3 w-3 text-yellow-600 drop-shadow-lg" />
                </div>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  <div className="font-semibold">UGA003</div>
                  <div>DHC-8-400</div>
                  <div>15,000 ft • 280 kts</div>
                  <div>ULU → EBB</div>
                </div>
                {/* Descending indicator */}
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Radar Coverage Circles */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <circle
                cx="128"
                cy="64"
                r="60"
                fill="none"
                stroke="rgb(59 130 246)"
                strokeWidth="1"
                strokeDasharray="5,5"
                className="opacity-30 animate-pulse"
              />
              <circle
                cx="128"
                cy="64"
                r="40"
                fill="none"
                stroke="rgb(59 130 246)"
                strokeWidth="1"
                strokeDasharray="3,3"
                className="opacity-40"
              />
            </svg>

            {/* Map Controls */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              <button className="bg-white dark:bg-slate-700 p-2 rounded shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-600">
                <span className="text-slate-600 dark:text-slate-300 text-xs font-medium">+</span>
              </button>
              <button className="bg-white dark:bg-slate-700 p-2 rounded shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-600">
                <span className="text-slate-600 dark:text-slate-300 text-xs font-medium">−</span>
              </button>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg border border-slate-200 dark:border-slate-600">
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">Legend</div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-aviation-500 rounded-full"></div>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Major Airport</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Plane className="h-3 w-3 text-blue-600" />
                  <span className="text-xs text-slate-600 dark:text-slate-400">En Route</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Plane className="h-3 w-3 text-green-600" />
                  <span className="text-xs text-slate-600 dark:text-slate-400">Climbing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Plane className="h-3 w-3 text-yellow-600" />
                  <span className="text-xs text-slate-600 dark:text-slate-400">Descending</span>
                </div>
              </div>
            </div>

            {/* Live Data Indicator */}
            <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white dark:bg-slate-800 px-3 py-2 rounded-lg shadow-lg border border-slate-200 dark:border-slate-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Live ADS-B Data</span>
            </div>
          </div>
        </div>

        {/* Flight List */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Currently Tracked Flights</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Callsign</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Aircraft</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Route</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Altitude</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Speed</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Squawk</th>
                </tr>
              </thead>
              <tbody>
                {trackedFlights.map((flight) => (
                  <tr key={flight.id} className="border-b border-gray-100 hover:bg-white transition-colors">
                    <td className="py-3 px-4 font-mono font-semibold text-blue-600">{flight.callsign}</td>
                    <td className="py-3 px-4 text-gray-700">{flight.aircraft}</td>
                    <td className="py-3 px-4 text-gray-700 text-sm">{flight.origin} → {flight.destination}</td>
                    <td className="py-3 px-4 font-mono text-gray-700">{flight.altitude}</td>
                    <td className="py-3 px-4 font-mono text-gray-700">{flight.speed}</td>
                    <td className="py-3 px-4">
                      <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(flight.status)}`}>
                        {getStatusIcon(flight.status)}
                        <span>{flight.status}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-mono text-gray-700">{flight.squawk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Uganda ADS-B Network Info */}
        <div className="mt-8 bg-green-50 rounded-lg p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Uganda ADS-B Network</h3>
          <p className="text-green-800 text-sm mb-4">
            Comprehensive flight tracking coverage across Uganda with receivers at major airports and strategic locations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Radar className="h-5 w-5 text-green-600" />
                <h4 className="font-medium text-gray-900">Coverage Zones</h4>
              </div>
              <p className="text-sm text-gray-600">Entebbe, Gulu, Arua, Kasese, and border monitoring stations</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Activity className="h-5 w-5 text-green-600" />
                <h4 className="font-medium text-gray-900">Real-Time Updates</h4>
              </div>
              <p className="text-sm text-gray-600">1-second position updates with 99.9% uptime reliability</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="h-5 w-5 text-green-600" />
                <h4 className="font-medium text-gray-900">Regional Integration</h4>
              </div>
              <p className="text-sm text-gray-600">Connected to Kenya, Tanzania, and Rwanda ADS-B networks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ADSBTracking;