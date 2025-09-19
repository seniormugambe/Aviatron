import React from 'react';
import { TrendingUp, Brain, AlertCircle, BarChart3, Target, Zap } from 'lucide-react';

const PredictiveAnalytics: React.FC = () => {
  const predictions = [
    {
      category: 'Flight Delays',
      prediction: '15% increase expected',
      confidence: '87%',
      timeframe: 'Next 7 days',
      factors: ['Weather patterns', 'Aircraft maintenance', 'Traffic volume'],
      impact: 'Medium',
      recommended_action: 'Adjust schedule buffers'
    },
    {
      category: 'Maintenance Needs',
      prediction: 'Engine service required',
      confidence: '94%',
      timeframe: '3-5 days',
      factors: ['Vibration patterns', 'Temperature anomalies', 'Flight hours'],
      impact: 'High',
      recommended_action: 'Schedule immediate inspection'
    },
    {
      category: 'Passenger Flow',
      prediction: 'Peak traffic Thu-Fri',
      confidence: '92%',
      timeframe: 'This week',
      factors: ['Historical patterns', 'Events calendar', 'Seasonal trends'],
      impact: 'Low',
      recommended_action: 'Increase staffing levels'
    }
  ];

  const aiModels = [
    { name: 'Flight Delay Predictor', accuracy: '89%', last_trained: '2024-01-20', status: 'Active' },
    { name: 'Maintenance Forecaster', accuracy: '94%', last_trained: '2024-01-18', status: 'Active' },
    { name: 'Passenger Flow Model', accuracy: '87%', last_trained: '2024-01-22', status: 'Active' },
    { name: 'Weather Impact Analyzer', accuracy: '91%', last_trained: '2024-01-19', status: 'Training' }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'training': return 'text-blue-600 bg-blue-100';
      case 'inactive': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Predictive Analytics</h2>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Active Models</p>
                <p className="text-2xl font-bold text-blue-900">8</p>
              </div>
              <Brain className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Avg Accuracy</p>
                <p className="text-2xl font-bold text-green-900">90%</p>
              </div>
              <Target className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Predictions Today</p>
                <p className="text-2xl font-bold text-purple-900">247</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-500" />
            </div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">Cost Savings</p>
                <p className="text-2xl font-bold text-orange-900">$1.2M</p>
              </div>
              <Zap className="h-8 w-8 text-orange-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current Predictions */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Predictions</h3>
            <div className="space-y-4">
              {predictions.map((prediction, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{prediction.category}</h4>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(prediction.impact)}`}>
                      {prediction.impact} Impact
                    </div>
                  </div>
                  <p className="text-lg font-medium text-gray-700 mb-2">{prediction.prediction}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <p className="text-gray-600">Confidence</p>
                      <p className="font-semibold text-green-600">{prediction.confidence}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Timeframe</p>
                      <p className="font-semibold text-blue-600">{prediction.timeframe}</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <p className="text-gray-600 text-sm mb-1">Key Factors:</p>
                    <div className="flex flex-wrap gap-1">
                      {prediction.factors.map((factor, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {factor}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-600">Recommended Action:</p>
                    <p className="text-sm font-medium text-gray-900">{prediction.recommended_action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Model Performance */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Model Performance</h3>
            <div className="space-y-4">
              {aiModels.map((model, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{model.name}</h4>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(model.status)}`}>
                      {model.status}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Accuracy</p>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: model.accuracy }}
                          />
                        </div>
                        <span className="font-semibold text-green-600">{model.accuracy}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600">Last Trained</p>
                      <p className="font-medium text-gray-900">{model.last_trained}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Sources and Integration */}
        <div className="mt-8 bg-green-50 rounded-lg p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Uganda-Specific AI Implementation</h3>
          <p className="text-green-800 text-sm mb-4">
            AI models trained on local weather patterns, flight operations data, and regional factors specific to Uganda's aviation environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <BarChart3 className="h-5 w-5 text-green-600" />
                <h4 className="font-medium text-gray-900">Local Data Integration</h4>
              </div>
              <p className="text-sm text-gray-600">Historical flight data from Entebbe and regional airports spanning 10+ years</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Brain className="h-5 w-5 text-green-600" />
                <h4 className="font-medium text-gray-900">Climate Adaptation</h4>
              </div>
              <p className="text-sm text-gray-600">Models adapted for tropical weather patterns and seasonal variations</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <AlertCircle className="h-5 w-5 text-green-600" />
                <h4 className="font-medium text-gray-900">Resource Optimization</h4>
              </div>
              <p className="text-sm text-gray-600">Optimized for limited infrastructure and cost-effective operations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;