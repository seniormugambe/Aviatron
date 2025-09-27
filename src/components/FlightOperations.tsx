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
      <div className="card p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Flight Operations Dashboard</h2>
            <p className="text-slate-600">Real-time monitoring and management of flight operations</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-slate-500">
            <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse-soft"></div>
            <span>Live Data</span>
          </div>
        </div>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="metric-card bg-gradient-to-br from-aviation-50 to-aviation-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-semibold text-aviation-700 uppercase tracking-wide">Active Flights</p>
                <p className="text-3xl font-bold text-aviation-900 mt-1">24</p>
              </div>
              <div className="p-3 bg-aviation-500 rounded-xl shadow-medium">
                <Plane className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex items-center text-sm text-aviation-600">
              <span className="text-success-600 font-medium">+3</span>
              <span className="ml-1">from yesterday</span>
            </div>
          </div>
          <div className="metric-card bg-gradient-to-br from-success-50 to-success-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-semibold text-success-700 uppercase tracking-wide">On-Time Rate</p>
                <p className="text-3xl font-bold text-success-900 mt-1">92%</p>
              </div>
              <div className="p-3 bg-success-500 rounded-xl shadow-medium">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex items-center text-sm text-success-600">
              <span className="text-success-600 font-medium">+2%</span>
              <span className="ml-1">this month</span>
            </div>
          </div>
          <div className="metric-card bg-gradient-to-br from-accent-50 to-accent-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-semibold text-accent-700 uppercase tracking-wide">Passengers Today</p>
                <p className="text-3xl font-bold text-accent-900 mt-1">3,247</p>
              </div>
              <div className="p-3 bg-accent-500 rounded-xl shadow-medium">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex items-center text-sm text-accent-600">
              <span className="text-success-600 font-medium">+12%</span>
              <span className="ml-1">vs last week</span>
            </div>
          </div>
          <div className="metric-card bg-gradient-to-br from-purple-50 to-purple-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-semibold text-purple-700 uppercase tracking-wide">Revenue Today</p>
                <p className="text-3xl font-bold text-purple-900 mt-1">$127K</p>
              </div>
              <div className="p-3 bg-purple-500 rounded-xl shadow-medium">
                <MapPin className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex items-center text-sm text-purple-600">
              <span className="text-success-600 font-medium">+8%</span>
              <span className="ml-1">daily average</span>
            </div>
          </div>
        </div>

        {/* Flight Schedule */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-slate-900">Current Flight Schedule</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse-soft"></div>
              <span className="text-sm text-slate-500">Updated 30s ago</span>
            </div>
          </div>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Flight</th>
                  <th>Route</th>
                  <th>Aircraft</th>
                  <th>Status</th>
                  <th>Departure</th>
                  <th>Passengers</th>
                  <th>Gate</th>
                </tr>
              </thead>
              <tbody>
                {flights.map((flight) => (
                  <tr key={flight.id} className="transition-colors duration-200">
                    <td className="font-mono font-semibold text-slate-900">{flight.id}</td>
                    <td className="text-slate-700 font-medium">{flight.route}</td>
                    <td className="text-slate-600 text-sm font-mono">{flight.aircraft}</td>
                    <td className="py-4 px-4">
                      <div className={`status-badge ${getStatusColor(flight.status)}`}>
                        {getStatusIcon(flight.status)}
                        <span>{flight.status}</span>
                      </div>
                    </td>
                    <td className="font-mono text-slate-700">{flight.departure}</td>
                    <td className="text-slate-700 font-medium">{flight.passengers}</td>
                    <td className="font-mono font-semibold text-aviation-600">{flight.gate}</td>
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