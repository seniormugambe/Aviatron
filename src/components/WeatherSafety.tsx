import React from 'react';
import { CloudRain, Wind, Thermometer, Eye, AlertTriangle, CheckCircle } from 'lucide-react';

const WeatherSafety: React.FC = () => {
  const weatherData = [
    { location: 'Entebbe Intl Airport', temp: '24°C', wind: '12 km/h NE', visibility: '10 km', conditions: 'Clear', risk: 'Low' },
    { location: 'Kampala', temp: '26°C', wind: '8 km/h E', visibility: '8 km', conditions: 'Partly Cloudy', risk: 'Low' },
    { location: 'Gulu Airport', temp: '28°C', wind: '15 km/h SW', visibility: '6 km', conditions: 'Thunderstorms', risk: 'High' },
    { location: 'Kasese Airstrip', temp: '22°C', wind: '20 km/h W', visibility: '12 km', conditions: 'Windy', risk: 'Medium' }
  ];

  const safetyAlerts = [
    {
      id: 1,
      type: 'Weather',
      severity: 'High',
      location: 'Gulu Airport',
      message: 'Severe thunderstorm approaching - recommend flight delays',
      time: '14:35',
      status: 'Active'
    },
    {
      id: 2,
      type: 'Wind',
      severity: 'Medium',
      location: 'Kasese Airstrip',
      message: 'Strong crosswinds detected - exercise caution during landing',
      time: '13:20',
      status: 'Active'
    },
    {
      id: 3,
      type: 'Visibility',
      severity: 'Low',
      location: 'Mbarara',
      message: 'Improved visibility conditions - operations resumed',
      time: '12:45',
      status: 'Resolved'
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return <AlertTriangle className="h-4 w-4" />;
      case 'resolved': return <CheckCircle className="h-4 w-4" />;
      default: return <AlertTriangle className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Weather Monitoring & Safety Systems</h2>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Airports Monitored</p>
                <p className="text-2xl font-bold text-blue-900">15</p>
              </div>
              <Eye className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Clear Conditions</p>
                <p className="text-2xl font-bold text-green-900">12</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-600">Weather Warnings</p>
                <p className="text-2xl font-bold text-yellow-900">2</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
            </div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">Avg Temperature</p>
                <p className="text-2xl font-bold text-orange-900">25°C</p>
              </div>
              <Thermometer className="h-8 w-8 text-orange-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current Weather Conditions */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Weather Conditions</h3>
            <div className="space-y-4">
              {weatherData.map((weather, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{weather.location}</h4>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(weather.risk)}`}>
                      <span>{weather.risk} Risk</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Thermometer className="h-4 w-4 text-red-500" />
                      <span>{weather.temp}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Wind className="h-4 w-4 text-blue-500" />
                      <span>{weather.wind}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="h-4 w-4 text-green-500" />
                      <span>{weather.visibility}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CloudRain className="h-4 w-4 text-gray-500" />
                      <span>{weather.conditions}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Alerts */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Alerts & Notifications</h3>
            <div className="space-y-4">
              {safetyAlerts.map((alert) => (
                <div key={alert.id} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(alert.status)}
                      <span className="font-medium text-gray-900">{alert.type} Alert</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </div>
                      <span className="text-xs text-gray-500">{alert.time}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{alert.message}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">{alert.location}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      alert.status === 'Active' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {alert.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Uganda-Specific Weather Considerations */}
        <div className="mt-8 bg-orange-50 rounded-lg p-6 border border-orange-200">
          <h3 className="text-lg font-semibold text-orange-900 mb-2">Uganda Climate Considerations</h3>
          <p className="text-orange-800 text-sm mb-4">
            Specialized monitoring for Uganda's tropical climate with two rainy seasons (March-May, Sept-Nov) and frequent afternoon thunderstorms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Rainy Season Monitoring</h4>
              <p className="text-sm text-gray-600">Enhanced precipitation tracking during peak months with 30-minute forecast updates</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Thunderstorm Detection</h4>
              <p className="text-sm text-gray-600">Real-time lightning detection network covering all major airports and flight routes</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Visibility Monitoring</h4>
              <p className="text-sm text-gray-600">Automated visibility sensors for morning fog and dust conditions from Sahara winds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherSafety;