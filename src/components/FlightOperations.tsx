import React from 'react';
import { Plane, Clock, MapPin, AlertCircle, CheckCircle, Users } from 'lucide-react';

const FlightOperations: React.FC = () => {
  const flights = [
    {
      id: 'UG001',
      route: 'Kampala → Nairobi',
      aircraft: 'Boeing 737-800',
      status: 'On Time',
      departure: '08:30',
      arrival: '10:45',
      passengers: 156,
      gate: 'A2'
    },
    {
      id: 'UG002',
      route: 'Entebbe → Dubai',
      aircraft: 'Airbus A330',
      status: 'Delayed',
      departure: '14:20',
      arrival: '20:30',
      passengers: 283,
      gate: 'B1'
    },
    {
      id: 'UG003',
      route: 'Gulu → Kampala',
      aircraft: 'DHC-8-400',
      status: 'Boarding',
      departure: '16:45',
      arrival: '17:30',
      passengers: 68,
      gate: 'C3'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Time': return 'text-green-600 bg-green-100';
      case 'Delayed': return 'text-red-600 bg-red-100';
      case 'Boarding': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'On Time': return <CheckCircle className="h-4 w-4" />;
      case 'Delayed': return <AlertCircle className="h-4 w-4" />;
      case 'Boarding': return <Clock className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Flight Operations Dashboard</h2>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Active Flights</p>
                <p className="text-2xl font-bold text-blue-900">24</p>
              </div>
              <Plane className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">On-Time Rate</p>
                <p className="text-2xl font-bold text-green-900">92%</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">Passengers Today</p>
                <p className="text-2xl font-bold text-orange-900">3,247</p>
              </div>
              <Users className="h-8 w-8 text-orange-500" />
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Revenue Today</p>
                <p className="text-2xl font-bold text-purple-900">$127K</p>
              </div>
              <MapPin className="h-8 w-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Flight Schedule */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Flight Schedule</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Flight</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Route</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Aircraft</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Departure</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Passengers</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Gate</th>
                </tr>
              </thead>
              <tbody>
                {flights.map((flight) => (
                  <tr key={flight.id} className="border-b border-gray-100 hover:bg-white transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-900">{flight.id}</td>
                    <td className="py-4 px-4 text-gray-700">{flight.route}</td>
                    <td className="py-4 px-4 text-gray-600 text-sm">{flight.aircraft}</td>
                    <td className="py-4 px-4">
                      <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(flight.status)}`}>
                        {getStatusIcon(flight.status)}
                        <span>{flight.status}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-700">{flight.departure}</td>
                    <td className="py-4 px-4 text-gray-700">{flight.passengers}</td>
                    <td className="py-4 px-4 text-gray-700">{flight.gate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightOperations;