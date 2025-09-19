import React from 'react';
import { AlertTriangle, Phone, MapPin, Clock, Users, Shield } from 'lucide-react';

const EmergencyResponse: React.FC = () => {
  const emergencyContacts = [
    { service: 'Fire & Rescue', number: '+256-800-FIRE', response_time: '2 min', status: 'Ready' },
    { service: 'Medical Emergency', number: '+256-800-MEDICAL', response_time: '3 min', status: 'Ready' },
    { service: 'Security', number: '+256-800-SECURITY', response_time: '1 min', status: 'Active' },
    { service: 'Air Traffic Control', number: '+256-800-ATC', response_time: 'Immediate', status: 'Active' },
    { service: 'Airport Operations', number: '+256-800-OPS', response_time: '2 min', status: 'Ready' },
    { service: 'Uganda Police', number: '999', response_time: '5 min', status: 'External' }
  ];

  const emergencyProcedures = [
    {
      category: 'Aircraft Emergency',
      procedures: [
        'Immediately alert ATC and emergency services',
        'Clear runway and taxiways of all traffic',
        'Deploy fire and rescue equipment',
        'Activate emergency medical services',
        'Establish communication with aircraft crew'
      ]
    },
    {
      category: 'Medical Emergency',
      procedures: [
        'Contact medical emergency team immediately',
        'Prepare ambulance and medical equipment',
        'Coordinate with nearby hospitals',
        'Clear access routes for emergency vehicles',
        'Notify relevant family members if required'
      ]
    },
    {
      category: 'Security Threat',
      procedures: [
        'Activate security alert protocols',
        'Coordinate with Uganda Police and military',
        'Implement passenger and baggage screening',
        'Secure all access points to airport',
        'Evacuate areas as necessary'
      ]
    }
  ];

  const currentStatus = {
    alert_level: 'Normal',
    active_incidents: 0,
    response_teams_ready: 4,
    last_drill: '2024-01-15',
    next_drill: '2024-02-15'
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'ready': case 'normal': return 'text-green-600 bg-green-100';
      case 'active': return 'text-blue-600 bg-blue-100';
      case 'external': return 'text-purple-600 bg-purple-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Response Coordination</h2>
        
        {/* Current Status */}
        <div className="bg-green-50 rounded-lg p-6 mb-8 border border-green-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-green-900">Current Emergency Status</h3>
            <div className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-medium ${getStatusColor(currentStatus.alert_level)}`}>
              <Shield className="h-4 w-4 mr-1" />
              {currentStatus.alert_level}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-900">{currentStatus.active_incidents}</p>
              <p className="text-sm text-green-700">Active Incidents</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-900">{currentStatus.response_teams_ready}</p>
              <p className="text-sm text-green-700">Teams Ready</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-900">{currentStatus.last_drill}</p>
              <p className="text-sm text-green-700">Last Drill</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-900">{currentStatus.next_drill}</p>
              <p className="text-sm text-green-700">Next Drill</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Emergency Contacts */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Contacts</h3>
            <div className="space-y-3">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{contact.service}</h4>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                      {contact.status}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Phone className="h-4 w-4 text-blue-500" />
                      <span className="font-mono text-blue-600">{contact.number}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-green-500" />
                      <span className="text-gray-600">{contact.response_time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Procedures */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Procedures</h3>
            <div className="space-y-4">
              {emergencyProcedures.map((procedure, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <h4 className="font-semibold text-gray-900">{procedure.category}</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {procedure.procedures.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start space-x-2">
                        <span className="text-blue-500 font-bold">{stepIndex + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Action Panel */}
        <div className="mt-8 bg-red-50 rounded-lg p-6 border border-red-200">
          <h3 className="text-lg font-semibold text-red-900 mb-4">Emergency Action Panel</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
              <div className="flex items-center justify-center space-x-2">
                <AlertTriangle className="h-5 w-5" />
                <span>Declare Emergency</span>
              </div>
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Alert All Services</span>
              </div>
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Initiate Evacuation</span>
              </div>
            </button>
          </div>
        </div>

        {/* Regional Coordination */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Regional Emergency Coordination</h3>
          <p className="text-blue-800 text-sm mb-4">
            Integrated with Uganda's national emergency response system and neighboring countries for cross-border incidents.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <h4 className="font-medium text-gray-900">National Integration</h4>
              </div>
              <p className="text-sm text-gray-600">Connected to Uganda National Emergency Coordination Centre</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="h-5 w-5 text-blue-600" />
                <h4 className="font-medium text-gray-900">Cross-Border Support</h4>
              </div>
              <p className="text-sm text-gray-600">Coordination with Kenya, Tanzania, and Rwanda aviation authorities</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="h-5 w-5 text-blue-600" />
                <h4 className="font-medium text-gray-900">Community Response</h4>
              </div>
              <p className="text-sm text-gray-600">Local community volunteers trained in emergency support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyResponse;