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
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Flight Map</h3>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-blue-300">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Interactive Flight Map</h4>
              <p className="text-blue-700 text-sm max-w-md">
                Real-time visualization of aircraft positions, flight paths, and airspace coverage across Uganda and neighboring regions.
              </p>
              <div className="mt-4 flex justify-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-xs text-blue-700">En Route</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-blue-700">Climbing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-xs text-blue-700">Descending</span>
                </div>
              </div>
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