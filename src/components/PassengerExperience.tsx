import React from 'react';
import { Users, Fingerprint, Shield, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const PassengerExperience: React.FC = () => {
  const biometricData = [
    { checkpoint: 'Check-in', processed: 156, average_time: '2.3 min', success_rate: '98%' },
    { checkpoint: 'Security', processed: 142, average_time: '4.1 min', success_rate: '96%' },
    { checkpoint: 'Immigration', processed: 138, average_time: '1.8 min', success_rate: '99%' },
    { checkpoint: 'Boarding', processed: 134, average_time: '1.2 min', success_rate: '100%' }
  ];

  const passengerFlow = [
    { zone: 'Terminal Entrance', occupancy: 45, capacity: 200, status: 'normal' },
    { zone: 'Check-in Area', occupancy: 89, capacity: 150, status: 'moderate' },
    { zone: 'Security Screening', occupancy: 134, capacity: 180, status: 'high' },
    { zone: 'Departure Lounge', occupancy: 267, capacity: 400, status: 'normal' },
    { zone: 'Gate Areas', occupancy: 156, capacity: 300, status: 'normal' },
    { zone: 'Baggage Claim', occupancy: 78, capacity: 150, status: 'normal' }
  ];

  const getOccupancyColor = (status: string) => {
    switch (status) {
      case 'normal': return 'bg-green-500';
      case 'moderate': return 'bg-yellow-500';
      case 'high': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'normal': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'moderate': return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'high': return <AlertCircle className="h-4 w-4 text-red-600" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Passenger Experience & Biometric Systems</h2>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Passengers Today</p>
                <p className="text-2xl font-bold text-blue-900">3,247</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Biometric Success</p>
                <p className="text-2xl font-bold text-green-900">98.2%</p>
              </div>
              <Fingerprint className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Avg Processing</p>
                <p className="text-2xl font-bold text-purple-900">2.4 min</p>
              </div>
              <Clock className="h-8 w-8 text-purple-500" />
            </div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">Security Alerts</p>
                <p className="text-2xl font-bold text-orange-900">0</p>
              </div>
              <Shield className="h-8 w-8 text-orange-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Biometric Processing */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Biometric Processing Performance</h3>
            <div className="space-y-4">
              {biometricData.map((checkpoint, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{checkpoint.checkpoint}</h4>
                    <Fingerprint className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Processed</p>
                      <p className="text-lg font-semibold text-gray-900">{checkpoint.processed}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Avg Time</p>
                      <p className="text-lg font-semibold text-blue-600">{checkpoint.average_time}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Success Rate</p>
                      <p className="text-lg font-semibold text-green-600">{checkpoint.success_rate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Passenger Flow Management */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Passenger Flow</h3>
            <div className="space-y-4">
              {passengerFlow.map((zone, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{zone.zone}</h4>
                    {getStatusIcon(zone.status)}
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">
                      {zone.occupancy} / {zone.capacity} people
                    </span>
                    <span className="text-sm font-medium">
                      {Math.round((zone.occupancy / zone.capacity) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getOccupancyColor(zone.status)}`}
                      style={{ width: `${(zone.occupancy / zone.capacity) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Integration Notice */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Mobile-First Approach for Uganda</h3>
          <p className="text-blue-800 text-sm mb-4">
            Optimized for Uganda's 87% mobile penetration rate with offline-capable features and SMS integration for areas with limited internet connectivity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <Users className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium text-blue-900">Mobile Check-in</p>
              <p className="text-xs text-blue-700">87% adoption rate</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <Fingerprint className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium text-blue-900">Biometric Integration</p>
              <p className="text-xs text-blue-700">Works offline</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <Shield className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium text-blue-900">SMS Notifications</p>
              <p className="text-xs text-blue-700">100% coverage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerExperience;