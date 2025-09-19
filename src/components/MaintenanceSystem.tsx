import React from 'react';
import { Settings, AlertTriangle, CheckCircle, Clock, Wrench, Activity } from 'lucide-react';

const MaintenanceSystem: React.FC = () => {
  const aircraftStatus = [
    {
      id: '5X-UGA',
      model: 'Boeing 737-800',
      status: 'Active',
      lastInspection: '2024-01-15',
      nextMaintenance: '2024-02-15',
      flightHours: 4250,
      issues: 0
    },
    {
      id: '5X-UGB',
      model: 'Airbus A330',
      status: 'Maintenance',
      lastInspection: '2024-01-20',
      nextMaintenance: '2024-01-25',
      flightHours: 8750,
      issues: 3
    },
    {
      id: '5X-UGC',
      model: 'DHC-8-400',
      status: 'Active',
      lastInspection: '2024-01-18',
      nextMaintenance: '2024-02-18',
      flightHours: 2100,
      issues: 1
    }
  ];

  const iotSensors = [
    { name: 'Engine Temperature', value: '425°C', status: 'normal', threshold: '450°C' },
    { name: 'Fuel Pressure', value: '3.2 PSI', status: 'normal', threshold: '2.5 PSI' },
    { name: 'Hydraulic System', value: '2800 PSI', status: 'warning', threshold: '3000 PSI' },
    { name: 'Landing Gear', value: 'Operational', status: 'normal', threshold: 'N/A' },
    { name: 'Avionics Systems', value: '98% Health', status: 'normal', threshold: '95%' },
    { name: 'Cabin Pressure', value: '8000 ft', status: 'normal', threshold: '8500 ft' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': case 'normal': return 'text-green-600 bg-green-100';
      case 'Maintenance': case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': case 'normal': return <CheckCircle className="h-4 w-4" />;
      case 'Maintenance': case 'warning': return <AlertTriangle className="h-4 w-4" />;
      case 'critical': return <AlertTriangle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Predictive Maintenance & IoT Monitoring</h2>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Aircraft Fleet</p>
                <p className="text-2xl font-bold text-blue-900">12</p>
              </div>
              <Settings className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Operational</p>
                <p className="text-2xl font-bold text-green-900">10</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-600">In Maintenance</p>
                <p className="text-2xl font-bold text-yellow-900">2</p>
              </div>
              <Wrench className="h-8 w-8 text-yellow-500" />
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Cost Savings</p>
                <p className="text-2xl font-bold text-purple-900">$2.4M</p>
              </div>
              <Activity className="h-8 w-8 text-purple-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Aircraft Status */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Aircraft Status</h3>
            <div className="space-y-4">
              {aircraftStatus.map((aircraft) => (
                <div key={aircraft.id} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{aircraft.id}</h4>
                      <p className="text-sm text-gray-600">{aircraft.model}</p>
                    </div>
                    <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(aircraft.status)}`}>
                      {getStatusIcon(aircraft.status)}
                      <span>{aircraft.status}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Flight Hours</p>
                      <p className="font-medium">{aircraft.flightHours.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Issues</p>
                      <p className="font-medium text-red-600">{aircraft.issues}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Last Inspection</p>
                      <p className="font-medium">{aircraft.lastInspection}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Next Maintenance</p>
                      <p className="font-medium">{aircraft.nextMaintenance}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IoT Sensor Data */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time IoT Sensors</h3>
            <div className="space-y-3">
              {iotSensors.map((sensor, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">{sensor.name}</h4>
                      <p className="text-lg font-semibold text-gray-700">{sensor.value}</p>
                    </div>
                    <div className="text-right">
                      <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(sensor.status)}`}>
                        {getStatusIcon(sensor.status)}
                        <span className="capitalize">{sensor.status}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Limit: {sensor.threshold}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceSystem;