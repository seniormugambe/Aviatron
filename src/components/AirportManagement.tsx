import React from 'react';
import { Building, Users, Truck, Fuel, Clock, Shield } from 'lucide-react';

const AirportManagement: React.FC = () => {
  const resources = [
    { name: 'Ground Crew', available: 24, scheduled: 18, utilization: '75%', status: 'Optimal' },
    { name: 'Baggage Handlers', available: 16, scheduled: 12, utilization: '75%', status: 'Optimal' },
    { name: 'Security Personnel', available: 32, scheduled: 28, utilization: '88%', status: 'High' },
    { name: 'Maintenance Staff', available: 8, scheduled: 6, utilization: '75%', status: 'Optimal' },
    { name: 'Fuel Trucks', available: 6, scheduled: 4, utilization: '67%', status: 'Normal' },
    { name: 'Ground Support Vehicles', available: 12, scheduled: 8, utilization: '67%', status: 'Normal' }
  ];

  const gates = [
    { id: 'A1', aircraft: 'UG001', status: 'Occupied', scheduled_departure: '08:30', passengers: 156 },
    { id: 'A2', aircraft: 'UG002', status: 'Boarding', scheduled_departure: '14:20', passengers: 283 },
    { id: 'A3', aircraft: null, status: 'Available', scheduled_departure: null, passengers: 0 },
    { id: 'B1', aircraft: 'UG003', status: 'Maintenance', scheduled_departure: '16:45', passengers: 68 },
    { id: 'B2', aircraft: null, status: 'Cleaning', scheduled_departure: null, passengers: 0 },
    { id: 'B3', aircraft: null, status: 'Available', scheduled_departure: null, passengers: 0 }
  ];

  const operationalMetrics = [
    { metric: 'Terminal Capacity', current: 2847, max: 3500, percentage: 81 },
    { metric: 'Runway Utilization', current: 24, max: 35, percentage: 69 },
    { metric: 'Parking Stands', current: 8, max: 12, percentage: 67 },
    { metric: 'Fuel Storage', current: 750000, max: 1000000, percentage: 75 }
  ];

  const getUtilizationColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-red-500';
    if (percentage >= 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'occupied': case 'boarding': return 'text-blue-600 bg-blue-100';
      case 'available': return 'text-green-600 bg-green-100';
      case 'maintenance': case 'cleaning': return 'text-yellow-600 bg-yellow-100';
      case 'optimal': case 'normal': return 'text-green-600 bg-green-100';
      case 'high': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Airport Resource Management</h2>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Daily Operations</p>
                <p className="text-2xl font-bold text-blue-900">47</p>
              </div>
              <Building className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Staff Efficiency</p>
                <p className="text-2xl font-bold text-green-900">87%</p>
              </div>
              <Users className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Equipment Active</p>
                <p className="text-2xl font-bold text-purple-900">42/48</p>
              </div>
              <Truck className="h-8 w-8 text-purple-500" />
            </div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">Fuel Efficiency</p>
                <p className="text-2xl font-bold text-orange-900">92%</p>
              </div>
              <Fuel className="h-8 w-8 text-orange-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Resource Allocation */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Resource Allocation</h3>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{resource.name}</h4>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(resource.status)}`}>
                      {resource.status}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm mb-2">
                    <div>
                      <p className="text-gray-600">Available</p>
                      <p className="font-semibold text-gray-900">{resource.available}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Scheduled</p>
                      <p className="font-semibold text-blue-600">{resource.scheduled}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Utilization</p>
                      <p className="font-semibold text-green-600">{resource.utilization}</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getUtilizationColor(parseInt(resource.utilization))}`}
                      style={{ width: resource.utilization }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gate Management */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Gate Management</h3>
            <div className="grid grid-cols-2 gap-3">
              {gates.map((gate, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-lg text-gray-900">Gate {gate.id}</h4>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(gate.status)}`}>
                      {gate.status}
                    </div>
                  </div>
                  {gate.aircraft ? (
                    <div className="text-sm space-y-1">
                      <p><span className="text-gray-600">Aircraft:</span> <span className="font-medium">{gate.aircraft}</span></p>
                      <p><span className="text-gray-600">Departure:</span> <span className="font-medium">{gate.scheduled_departure}</span></p>
                      <p><span className="text-gray-600">Passengers:</span> <span className="font-medium">{gate.passengers}</span></p>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">No aircraft assigned</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Operational Metrics */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Operational Capacity</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {operationalMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">{metric.metric}</h4>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">
                    {typeof metric.current === 'number' && metric.current > 1000 
                      ? `${(metric.current / 1000).toFixed(0)}K`
                      : metric.current
                    } / {typeof metric.max === 'number' && metric.max > 1000 
                      ? `${(metric.max / 1000).toFixed(0)}K`
                      : metric.max
                    }
                  </span>
                  <span className="text-sm font-medium">{metric.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getUtilizationColor(metric.percentage)}`}
                    style={{ width: `${metric.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Uganda Infrastructure Considerations */}
        <div className="mt-8 bg-purple-50 rounded-lg p-6 border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">Uganda Infrastructure Optimization</h3>
          <p className="text-purple-800 text-sm mb-4">
            Resource management optimized for Uganda's infrastructure challenges with backup power systems, mobile connectivity, and cost-effective operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-5 w-5 text-purple-600" />
                <h4 className="font-medium text-gray-900">Power Backup Systems</h4>
              </div>
              <p className="text-sm text-gray-600">Redundant power systems ensure 99.9% operational uptime</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="h-5 w-5 text-purple-600" />
                <h4 className="font-medium text-gray-900">Mobile-First Operations</h4>
              </div>
              <p className="text-sm text-gray-600">Staff equipped with mobile devices for real-time coordination</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Truck className="h-5 w-5 text-purple-600" />
                <h4 className="font-medium text-gray-900">Local Partnerships</h4>
              </div>
              <p className="text-sm text-gray-600">Integrated with local suppliers and service providers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirportManagement;