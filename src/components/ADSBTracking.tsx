import React from 'react';
import { Radar, MapPin, Clock, Plane, Activity, Globe, Navigation } from 'lucide-react';
import Map, { Marker, Popup, Source, Layer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const ADSBTracking: React.FC = () => {
  const [selectedFlight, setSelectedFlight] = React.useState<string | null>(null);
  const [viewState, setViewState] = React.useState({
    longitude: 32.4419,
    latitude: 0.3476,
    zoom: 7
  });

  const trackedFlights = [
    {
      callsign: 'UG001',
      aircraft: 'B738',
      altitude: '37000 ft',
      speed: '485 kts',
      heading: '095°',
      position: '0.3167°N, 32.4419°E',
      longitude: 32.4419,
      latitude: 0.3167,
      squawk: '2341',
      status: 'En Route',
      destination: 'Nairobi',
      origin: 'Entebbe'
    },
    {
      callsign: 'UG002',
      aircraft: 'A330',
      altitude: '3500 ft',
      speed: '180 kts',
      heading: '270°',
      position: '0.0481°N, 32.4419°E',
      longitude: 32.4419,
      latitude: 0.0481,
      squawk: '7000',
      status: 'Approach',
      destination: 'Dubai',
      origin: 'Entebbe'
    },
    {
      callsign: 'UG003',
      aircraft: 'DH8D',
      altitude: '0 ft',
      speed: '0 kts',
      heading: '180°',
      position: '2.2542°N, 32.4606°E',
      longitude: 32.4606,
      latitude: 2.2542,
      squawk: '2000',
      status: 'Ground',
      destination: 'Kampala',
      origin: 'Gulu'
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

  const getFlightIcon = (status: string) => {
    const baseStyle = "w-6 h-6 transform";
    switch (status.toLowerCase()) {
      case 'en route': return `${baseStyle} rotate-45 text-blue-600`;
      case 'approach': return `${baseStyle} rotate-12 text-orange-600`;
      case 'ground': return `${baseStyle} text-gray-600`;
      default: return `${baseStyle} text-gray-600`;
    }
  };

  // Mapbox access token - In production, this should be in environment variables
  const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

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
          <div className="bg-gray-50 rounded-lg p-6 order-2 lg:order-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Flight Tracking</h3>
            <div className="space-y-4">
              {trackedFlights.map((flight, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-lg p-4 border transition-all duration-200 cursor-pointer ${
                    selectedFlight === flight.callsign 
                      ? 'border-blue-500 shadow-md' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => {
                    setSelectedFlight(selectedFlight === flight.callsign ? null : flight.callsign);
                    setViewState({
                      longitude: flight.longitude,
                      latitude: flight.latitude,
                      zoom: 10
                    });
                  }}
                >
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
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500">{flight.origin} → {flight.destination}</span>
                      <button className="text-xs text-blue-600 hover:text-blue-800">
                        View on Map
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Map */}
          <div className="bg-gray-50 rounded-lg p-6 order-1 lg:order-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Real-Time Aircraft Map</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live Tracking</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden" style={{ height: '400px' }}>
              <Map
                {...viewState}
                onMove={evt => setViewState(evt.viewState)}
                mapboxAccessToken={MAPBOX_TOKEN}
                style={{ width: '100%', height: '100%' }}
                mapStyle="mapbox://styles/mapbox/light-v11"
                attributionControl={false}
              >
                {/* Aircraft Markers */}
                {trackedFlights.map((flight, index) => (
                  <Marker
                    key={index}
                    longitude={flight.longitude}
                    latitude={flight.latitude}
                    anchor="center"
                  >
                    <div 
                      className="relative cursor-pointer transform hover:scale-110 transition-transform duration-200"
                      onClick={() => setSelectedFlight(selectedFlight === flight.callsign ? null : flight.callsign)}
                    >
                      <div className={`p-2 rounded-full shadow-lg ${
                        flight.status === 'En Route' ? 'bg-blue-500' :
                        flight.status === 'Approach' ? 'bg-orange-500' : 'bg-gray-500'
                      }`}>
                        <Plane className="w-4 h-4 text-white" style={{ 
                          transform: `rotate(${parseInt(flight.heading)}deg)` 
                        }} />
                      </div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {flight.callsign}
                      </div>
                    </div>
                  </Marker>
                ))}

                {/* Flight Details Popup */}
                {selectedFlight && (
                  <Popup
                    longitude={trackedFlights.find(f => f.callsign === selectedFlight)?.longitude || 0}
                    latitude={trackedFlights.find(f => f.callsign === selectedFlight)?.latitude || 0}
                    anchor="bottom"
                    onClose={() => setSelectedFlight(null)}
                    closeButton={true}
                    closeOnClick={false}
                  >
                    {(() => {
                      const flight = trackedFlights.find(f => f.callsign === selectedFlight);
                      if (!flight) return null;
                      return (
                        <div className="p-3 min-w-48">
                          <div className="flex items-center space-x-2 mb-2">
                            <Plane className="h-4 w-4 text-blue-500" />
                            <span className="font-semibold">{flight.callsign}</span>
                            <span className="text-sm text-gray-600">({flight.aircraft})</span>
                          </div>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Route:</span>
                              <span>{flight.origin} → {flight.destination}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Altitude:</span>
                              <span>{flight.altitude}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Speed:</span>
                              <span>{flight.speed}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Heading:</span>
                              <span>{flight.heading}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Status:</span>
                              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(flight.status)}`}>
                                {flight.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </Popup>
                )}
              </Map>
            </div>

            {/* Map Controls */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>En Route</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>Approach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span>Ground</span>
                </div>
              </div>
              <button 
                onClick={() => setViewState({ longitude: 32.4419, latitude: 0.3476, zoom: 7 })}
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center space-x-1"
              >
                <Navigation className="h-4 w-4" />
                <span>Reset View</span>
              </button>
            </div>
          </div>
        </div>

        {/* ADS-B Coverage Statistics */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">ADS-B Coverage Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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