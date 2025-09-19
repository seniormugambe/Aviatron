import React from 'react';
import { Users, Shield, Settings, Eye, UserCheck, Crown } from 'lucide-react';

const UserManagement: React.FC = () => {
  const userRoles = [
    {
      role: 'Air Traffic Controllers',
      count: 24,
      description: 'Monitor and direct aircraft movements, manage airspace',
      permissions: ['Flight Tracking', 'Weather Monitoring', 'Emergency Response', 'ADS-B Systems'],
      location: 'Control Tower',
      shift_pattern: '24/7 Coverage',
      certification: 'ICAO ATC License'
    },
    {
      role: 'Airport Operations Staff',
      count: 45,
      description: 'Manage daily airport operations, resource allocation',
      permissions: ['Airport Management', 'Resource Planning', 'Gate Assignment', 'Ground Operations'],
      location: 'Operations Center',
      shift_pattern: 'Day/Night Shifts',
      certification: 'Airport Operations Certificate'
    },
    {
      role: 'Maintenance Engineers',
      count: 18,
      description: 'Aircraft maintenance, predictive analytics, IoT monitoring',
      permissions: ['Maintenance Systems', 'IoT Sensors', 'Predictive Analytics', 'Aircraft Status'],
      location: 'Maintenance Hangar',
      shift_pattern: 'Scheduled Maintenance',
      certification: 'Aircraft Maintenance License'
    },
    {
      role: 'Security Personnel',
      count: 32,
      description: 'Passenger screening, biometric systems, threat assessment',
      permissions: ['Biometric Systems', 'Passenger Screening', 'Security Alerts', 'Access Control'],
      location: 'Security Checkpoints',
      shift_pattern: '24/7 Coverage',
      certification: 'Aviation Security Training'
    },
    {
      role: 'Ground Crew Supervisors',
      count: 12,
      description: 'Coordinate ground operations, baggage handling, aircraft servicing',
      permissions: ['Ground Operations', 'Resource Tracking', 'Staff Scheduling', 'Equipment Management'],
      location: 'Ramp Operations',
      shift_pattern: 'Flight Schedule Based',
      certification: 'Ground Operations Certificate'
    },
    {
      role: 'Passenger Service Agents',
      count: 28,
      description: 'Check-in, boarding, customer service, biometric processing',
      permissions: ['Passenger Processing', 'Biometric Check-in', 'Flight Information', 'Customer Service'],
      location: 'Terminal Areas',
      shift_pattern: 'Flight Schedule Based',
      certification: 'Customer Service Training'
    },
    {
      role: 'Weather Specialists',
      count: 8,
      description: 'Monitor weather conditions, issue safety alerts, forecast analysis',
      permissions: ['Weather Systems', 'Safety Alerts', 'Meteorological Data', 'Flight Planning Support'],
      location: 'Weather Station',
      shift_pattern: '24/7 Coverage',
      certification: 'Meteorology Certification'
    },
    {
      role: 'Emergency Response Team',
      count: 16,
      description: 'Fire rescue, medical emergency, crisis management',
      permissions: ['Emergency Systems', 'Alert Management', 'Response Coordination', 'Communication Systems'],
      location: 'Emergency Services',
      shift_pattern: '24/7 Standby',
      certification: 'Emergency Response Training'
    },
    {
      role: 'IT Systems Administrators',
      count: 6,
      description: 'Maintain platform infrastructure, data management, system monitoring',
      permissions: ['Full System Access', 'User Management', 'Data Analytics', 'System Configuration'],
      location: 'IT Operations Center',
      shift_pattern: 'Business Hours + On-call',
      certification: 'IT Systems Certification'
    },
    {
      role: 'Airport Management',
      count: 8,
      description: 'Strategic oversight, performance monitoring, regulatory compliance',
      permissions: ['Executive Dashboard', 'Performance Analytics', 'Strategic Planning', 'Compliance Monitoring'],
      location: 'Executive Offices',
      shift_pattern: 'Business Hours',
      certification: 'Aviation Management Degree'
    }
  ];

  const accessLevels = [
    { level: 'Executive', users: 8, color: 'bg-purple-500', description: 'Full strategic oversight and analytics' },
    { level: 'Supervisor', users: 24, color: 'bg-blue-500', description: 'Department management and coordination' },
    { level: 'Operator', users: 89, color: 'bg-green-500', description: 'Daily operations and system interaction' },
    { level: 'Specialist', users: 34, color: 'bg-orange-500', description: 'Technical expertise and system maintenance' },
    { level: 'Support', users: 28, color: 'bg-gray-500', description: 'Customer service and basic operations' }
  ];

  const systemUsage = [
    { system: 'Flight Operations', daily_users: 45, peak_hours: '06:00-22:00' },
    { system: 'Maintenance Systems', daily_users: 18, peak_hours: '22:00-06:00' },
    { system: 'Passenger Processing', daily_users: 67, peak_hours: '05:00-09:00, 17:00-21:00' },
    { system: 'Weather Monitoring', daily_users: 32, peak_hours: '24/7 Continuous' },
    { system: 'Emergency Response', daily_users: 16, peak_hours: 'On-demand' },
    { system: 'Airport Management', daily_users: 53, peak_hours: '08:00-18:00' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Users & Access Management</h2>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Total Users</p>
                <p className="text-2xl font-bold text-blue-900">183</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Active Now</p>
                <p className="text-2xl font-bold text-green-900">127</p>
              </div>
              <UserCheck className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">User Roles</p>
                <p className="text-2xl font-bold text-purple-900">10</p>
              </div>
              <Shield className="h-8 w-8 text-purple-500" />
            </div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">24/7 Operations</p>
                <p className="text-2xl font-bold text-orange-900">72</p>
              </div>
              <Eye className="h-8 w-8 text-orange-500" />
            </div>
          </div>
        </div>

        {/* User Roles */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">User Roles & Responsibilities</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {userRoles.map((user, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{user.role}</h4>
                  <div className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded">
                    {user.count} users
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{user.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="font-medium text-gray-700">Location:</p>
                    <p className="text-gray-600">{user.location}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Schedule:</p>
                    <p className="text-gray-600">{user.shift_pattern}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Certification:</p>
                    <p className="text-gray-600">{user.certification}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Systems Access:</p>
                    <p className="text-gray-600">{user.permissions.length} modules</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-xs font-medium text-gray-700 mb-1">System Permissions:</p>
                  <div className="flex flex-wrap gap-1">
                    {user.permissions.map((permission, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {permission}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Access Levels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Access Levels</h3>
            <div className="space-y-4">
              {accessLevels.map((level, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${level.color}`}></div>
                      <h4 className="font-medium text-gray-900">{level.level}</h4>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{level.users} users</span>
                  </div>
                  <p className="text-sm text-gray-600">{level.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">System Usage Patterns</h3>
            <div className="space-y-4">
              {systemUsage.map((usage, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{usage.system}</h4>
                    <span className="text-sm font-semibold text-blue-600">{usage.daily_users} users/day</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Eye className="h-4 w-4" />
                    <span>Peak: {usage.peak_hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Uganda-Specific Considerations */}
        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Uganda Aviation Workforce Integration</h3>
          <p className="text-green-800 text-sm mb-4">
            Platform designed to work with Uganda's existing aviation workforce while providing training pathways for new technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="h-5 w-5 text-green-600" />
                <h4 className="font-medium text-gray-900">Local Training Programs</h4>
              </div>
              <p className="text-sm text-gray-600">Partnership with Uganda Civil Aviation Authority for staff certification</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Settings className="h-5 w-5 text-green-600" />
                <h4 className="font-medium text-gray-900">Multi-Language Support</h4>
              </div>
              <p className="text-sm text-gray-600">Interface available in English, Luganda, and Swahili</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Crown className="h-5 w-5 text-green-600" />
                <h4 className="font-medium text-gray-900">Career Development</h4>
              </div>
              <p className="text-sm text-gray-600">Built-in progression paths from operator to specialist to supervisor levels</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;