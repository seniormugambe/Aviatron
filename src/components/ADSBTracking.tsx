import React from 'react';
import { Radar, MapPin, Clock, Plane, Activity, Globe } from 'lucide-react';

const ADSBTracking: React.FC = () => {
  const trackedFlights = [
    {
      callsign: 'UG001',
      aircraft: 'B738',
      altitude: '37000 ft',
      speed: '485 kts',
      heading: '095°',
      position: '0.3167°N, 32.4419°E',
      squawk: '2341',
      status: 'En Route'
    },
    {
      callsign: 'UG002',
      aircraft: 'A330',
      altitude: '3500 ft',
      speed: '180 kts',
      heading: '270°',
      position: '0.0481°N, 32.4419°E',
      squawk: '7000',
      status: 'Approach'
    },
    {
      callsign: 'UG003',
      aircraft: 'DH8D',
      altitude: '0 ft',
      speed: '0 kts',
      heading: '180°',
      position: '2.2542°N, 32.4606°E',
      squawk: '2000',
      status: 'Ground'
    }
  ];

  const coverageStats = [
    { region: 'Central Uganda', coverage: '98%', stations: 12, status: 'Excellent' },
    { region: 'Northern Uganda', coverage: '85%', stations: 8, status: 'Good' },
    { region: 'Western Uganda', coverage: '78%', stations: 6, status: 'Good' },
    { region: 'Eastern Uganda', coverage: '82%', stations: 7, status: 'Good' }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'en route': return 'text-blue-600 bg-blue-100';
      case 'approach': return 'text-orange-600 bg-orange-100';
      case 'ground': return 'text-gray-600 bg-gray-100';
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'fair': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">ADS-B Surveillance & Flight Tracking</h2>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Tracked Aircraft</p>
                <p className="text-2xl font-bold text-blue-900">47</p>
              </div>
              <Radar className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Coverage Area</p>
                <p className="text-2xl font-bold text-green-900">95%</p>
              </div>
              <Globe className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">ADS-B Stations</p>
                <p className="text-2xl font-bold text-purple-900">33</p>
              </div>
              <MapPin className="h-8 w-8 text-purple-500" />
            </div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">Update Rate</p>
                <p className="text-2xl font-bold text-orange-900">1 sec</p>
              </div>
              <Activity className="h-8 w-8 text-orange-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Live Flight Tracking */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Flight Tracking</h3>
            <div className="space-y-4">
              {trackedFlights.map((flight, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Plane className="h-5 w-5 text-blue-500" />
                      <span className="font-semibold text-gray-900">{flight.callsign}</span>
                      <span className="text-sm text-gray-600">({flight.aircraft})</span>
                    </div>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(flight.status)}`}>
                      {flight.status}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Altitude</p>
                      <p className="font-medium text-gray-900">{flight.altitude}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Ground Speed</p>
                      <p className="font-medium text-gray-900">{flight.speed}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Heading</p>
                      <p className="font-medium text-gray-900">{flight.heading}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Squawk</p>
                      <p className="font-medium text-gray-900">{flight.squawk}</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-600">Position</p>
                    <p className="text-sm font-mono text-gray-700">{flight.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coverage Map */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">ADS-B Coverage Map</h3>
            
            {/* Simulated Coverage Visualization */}
            <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="h-12 w-12 text-blue-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Interactive Coverage Map</p>
                    <p className="text-xs text-gray-500">Showing ADS-B station coverage across Uganda</p>
                  </div>
                </div>
                
                {/* Simulated coverage circles */}
                <div className="absolute top-4 left-8 w-16 h-16 border-2 border-blue-400 rounded-full opacity-30"></div>
                <div className="absolute top-8 right-12 w-20 h-20 border-2 border-green-400 rounded-full opacity-30"></div>
                <div className="absolute bottom-6 left-16 w-12 h-12 border-2 border-orange-400 rounded-full opacity-30"></div>
                <div className="absolute bottom-8 right-8 w-18 h-18 border-2 border-purple-400 rounded-full opacity-30"></div>
              </div>
            </div>

            {/* Regional Coverage Stats */}
            <div className="space-y-3">
              {coverageStats.map((region, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{region.region}</h4>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(region.status)}`}>
                      {region.status}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Coverage: {region.coverage}</span>
                    <span className="text-sm text-gray-600">{region.stations} stations</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: region.coverage }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ICAO Compliance Notice */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">ICAO Standards Compliance</h3>
          <p className="text-blue-800 text-sm mb-4">
            This ADS-B implementation follows ICAO Annex 10 standards and integrates with regional African surveillance networks for enhanced flight safety and efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">DO-260B Compliant</h4>
              <p className="text-sm text-gray-600">Full compliance with RTCA DO-260B ADS-B Out standards</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Regional Integration</h4>
              <p className="text-sm text-gray-600">Connected to East African ADS-B network for seamless tracking</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Future Ready</h4>
              <p className="text-sm text-gray-600">Prepared for ICAO 2030 mandate implementation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ADSBTracking;