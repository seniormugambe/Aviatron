import * as React from 'react';
import { Plane } from 'lucide-react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
//import React from 'react';
//import ReactMapGL, { Marker, Popup } from 'react-map-gl';
//import 'mapbox-gl/dist/mapbox-gl.css';

type Flight = {
  callsign: string;
  longitude: number;
  latitude: number;
  heading: string | number;
  status: string;
  // Add other properties as needed
};

const ADSBTracking: React.FC = () => {
  // Example state for tracked flights and selected flight
  const [trackedFlights, setTrackedFlights] = React.useState<Flight[]>([]);
  const [selectedFlight, setSelectedFlight] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Example: Update flights every 5 seconds
    const interval = setInterval(() => {
      // Replace this with your actual flight data fetching logic
      setTrackedFlights([
        {
          callsign: "TEST123",
          longitude: -0.1276,
          latitude: 51.5074,
          heading: 90,
          status: "En Route"
        }
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Update Map component to use ReactMapGL
  return (
    <div className="space-y-6">
      <ReactMapGL
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || 'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjazZqb2V4eWowMDAwM29wbnVpbzNlcjdkIn0.example'}
        initialViewState={{
          longitude: -0.1276,
          latitude: 51.5074,
          zoom: 10
        }}
        style={{width: '100%', height: '400px'}}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {trackedFlights.map((flight: Flight, index: number) => (
          <Marker
            key={index}
            longitude={flight.longitude}
            latitude={flight.latitude}
            offsetTop={-20}
            offsetLeft={-10}
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
                  transform: `rotate(${parseInt(flight.heading.toString())}deg)` 
                }} />
              </div>
            </div>
          </Marker>
          ))}

          {selectedFlight && (
            <Popup
              longitude={trackedFlights.find((f: Flight) => f.callsign === selectedFlight)?.longitude || 0}
              latitude={trackedFlights.find((f: Flight) => f.callsign === selectedFlight)?.latitude || 0}
              onClose={() => setSelectedFlight(null)}
              closeButton={true}
              closeOnClick={false}
            >
              {/* ...existing popup content... */}
            </Popup>
          )}
      </ReactMapGL>
    </div>
  );
};

export default ADSBTracking;