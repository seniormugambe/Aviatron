import React, { useState } from 'react';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Target, 
  Activity, 
  Settings, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp,
  Eye,
  Shield,
  Clock,
  BarChart3,
  Layers,
  Network,
  Database,
  Gauge
} from 'lucide-react';

const AIControlCenter: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState('flight-optimizer');

  const aiModels = [
    {
      id: 'flight-optimizer',
      name: 'Flight Path Optimizer',
      type: 'Route Planning',
      status: 'Active',
      accuracy: 94,
      last_updated: '2 min ago',
      cpu_usage: 23,
      memory_usage: 1.2,
      predictions_today: 847,
      cost_savings: '$12,400',
      description: 'Optimizes flight routes for fuel efficiency and time savings',
      features: ['Real-time weather integration', 'Traffic avoidance', 'Fuel optimization', 'Cost analysis']
    },
    {
      id: 'maintenance-predictor',
      name: 'Predictive Maintenance AI',
      type: 'Maintenance',
      status: 'Active',
      accuracy: 96,
      last_updated: '5 min ago',
      cpu_usage: 31,
      memory_usage: 2.1,
      predictions_today: 156,
      cost_savings: '$45,200',
      description: 'Predicts aircraft maintenance needs before failures occur',
      features: ['IoT sensor analysis', 'Failure prediction', 'Maintenance scheduling', 'Parts inventory']
    },
    {
      id: 'passenger-flow',
      name: 'Passenger Flow AI',
      type: 'Operations',
      status: 'Active',
      accuracy: 89,
      last_updated: '1 min ago',
      cpu_usage: 18,
      memory_usage: 0.8,
      predictions_today: 1247,
      cost_savings: '$8,900',
      description: 'Optimizes passenger flow and reduces wait times',
      features: ['Queue management', 'Staff allocation', 'Capacity planning', 'Bottleneck detection']
    },
    {
      id: 'weather-analyzer',
      name: 'Weather Impact Analyzer',
      type: 'Safety',
      status: 'Training',
      accuracy: 92,
      last_updated: '15 min ago',
      cpu_usage: 45,
      memory_usage: 3.2,
      predictions_today: 324,
      cost_savings: '$18,600',
      description: 'Analyzes weather patterns for flight safety and planning',
      features: ['Storm prediction', 'Visibility forecasting', 'Wind analysis', 'Safety alerts']
    },
    {
      id: 'security-ai',
      name: 'Security Threat Detection',
      type: 'Security',
      status: 'Active',
      accuracy: 98,
      last_updated: '30 sec ago',
      cpu_usage: 52,
      memory_usage: 4.1,
      predictions_today: 2847,
      cost_savings: '$67,300',
      description: 'Advanced threat detection and behavioral analysis',
      features: ['Facial recognition', 'Behavioral analysis', 'Threat assessment', 'Real-time alerts']
    },
    {
      id: 'fuel-optimizer',
      name: 'Fuel Consumption AI',
      type: 'Efficiency',
      status: 'Active',
      accuracy: 91,
      last_updated: '3 min ago',
      cpu_usage: 27,
      memory_usage: 1.6,
      predictions_today: 456,
      cost_savings: '$23,800',
      description: 'Optimizes fuel consumption across all operations',
      features: ['Consumption prediction', 'Route optimization', 'Load balancing', 'Cost analysis']
    }
  ];

  const systemMetrics = {
    total_models: 12,
    active_models: 10,
    training_models: 2,
    total_predictions: 5877,
    accuracy_average: 93,
    cost_savings_today: '$176,200',
    cpu_utilization: 34,
    memory_usage: 12.8,
    gpu_utilization: 67
  };

  const automationRules = [
    {
      id: 1,
      name: 'Auto Flight Delay Alerts',
      trigger: 'Delay prediction > 15 minutes',
      action: 'Notify passengers and staff',
      status: 'Active',
      executions_today: 23
    },
    {
      id: 2,
      name: 'Maintenance Alert System',
      trigger: 'Component failure risk > 80%',
      action: 'Schedule immediate inspection',
      status: 'Active',
      executions_today: 7
    },
    {
      id: 3,
      name: 'Security Threat Response',
      trigger: 'Threat level > Medium',
      action: 'Alert security team',
      status: 'Active',
      executions_today: 2
    },
    {
      id: 4,
      name: 'Resource Optimization',
      trigger: 'Passenger flow > 85% capacity',
      action: 'Deploy additional staff',
      status: 'Active',
      executions_today: 12
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'text-success-600 bg-success-100 dark:bg-success-900/20';
      case 'training': return 'text-aviation-600 bg-aviation-100 dark:bg-aviation-900/20';
      case 'inactive': return 'text-slate-600 bg-slate-100 dark:bg-slate-800';
      default: return 'text-slate-600 bg-slate-100 dark:bg-slate-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return <CheckCircle className="h-4 w-4" />;
      case 'training': return <Activity className="h-4 w-4" />;
      case 'inactive': return <AlertTriangle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const selectedModelData = aiModels.find(model => model.id === selectedModel);

  return (
    <div className="space-y-6">
      <div className="card p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">AI Control Center</h2>
            <p className="text-slate-600 dark:text-slate-400">Advanced AI systems powering intelligent aviation operations</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
            <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse-soft"></div>
            <span>AI Systems Online</span>
          </div>
        </div>

        {/* System Overview Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="metric-card bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wide">Active Models</p>
                <p className="text-3xl font-bold text-purple-900 dark:text-purple-100 mt-1">{systemMetrics.active_models}</p>
              </div>
              <div className="p-3 bg-purple-500 rounded-xl shadow-medium">
                <Brain className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex items-center text-sm text-purple-600 dark:text-purple-400">
              <span className="text-success-600 dark:text-success-400 font-medium">+2</span>
              <span className="ml-1">this week</span>
            </div>
          </div>

          <div className="metric-card bg-gradient-to-br from-success-50 to-success-100 dark:from-success-900/20 dark:to-success-800/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-semibold text-success-700 dark:text-success-300 uppercase tracking-wide">Avg Accuracy</p>
                <p className="text-3xl font-bold text-success-900 dark:text-success-100 mt-1">{systemMetrics.accuracy_average}%</p>
              </div>
              <div className="p-3 bg-success-500 rounded-xl shadow-medium">
                <Target className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex items-center text-sm text-success-600 dark:text-success-400">
              <span className="text-success-600 dark:text-success-400 font-medium">+1.2%</span>
              <span className="ml-1">this month</span>
            </div>
          </div>

          <div className="metric-card bg-gradient-to-br from-aviation-50 to-aviation-100 dark:from-aviation-900/20 dark:to-aviation-800/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-semibold text-aviation-700 dark:text-aviation-300 uppercase tracking-wide">Predictions Today</p>
                <p className="text-3xl font-bold text-aviation-900 dark:text-aviation-100 mt-1">{systemMetrics.total_predictions.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-aviation-500 rounded-xl shadow-medium">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex items-center text-sm text-aviation-600 dark:text-aviation-400">
              <span className="text-success-600 dark:text-success-400 font-medium">+15%</span>
              <span className="ml-1">vs yesterday</span>
            </div>
          </div>

          <div className="metric-card bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-semibold text-accent-700 dark:text-accent-300 uppercase tracking-wide">Cost Savings</p>
                <p className="text-3xl font-bold text-accent-900 dark:text-accent-100 mt-1">{systemMetrics.cost_savings_today}</p>
              </div>
              <div className="p-3 bg-accent-500 rounded-xl shadow-medium">
                <Zap className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex items-center text-sm text-accent-600 dark:text-accent-400">
              <span className="text-success-600 dark:text-success-400 font-medium">+8%</span>
              <span className="ml-1">daily average</span>
            </div>
          </div>
        </div>

        {/* AI Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* AI Models List */}
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">AI Models</h3>
            <div className="space-y-3">
              {aiModels.map((model) => (
                <div 
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                    selectedModel === model.id 
                      ? 'border-aviation-300 bg-aviation-50 dark:border-aviation-600 dark:bg-aviation-900/20' 
                      : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        <Brain className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{model.name}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{model.type}</p>
                      </div>
                    </div>
                    <div className={`status-badge ${getStatusColor(model.status)}`}>
                      {getStatusIcon(model.status)}
                      <span>{model.status}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div>
                      <p className="text-slate-500 dark:text-slate-400">Accuracy</p>
                      <p className="font-semibold text-slate-900 dark:text-white">{model.accuracy}%</p>
                    </div>
                    <div>
                      <p className="text-slate-500 dark:text-slate-400">CPU</p>
                      <p className="font-semibold text-slate-900 dark:text-white">{model.cpu_usage}%</p>
                    </div>
                    <div>
                      <p className="text-slate-500 dark:text-slate-400">Savings</p>
                      <p className="font-semibold text-success-600 dark:text-success-400">{model.cost_savings}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Model Details */}
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Model Details</h3>
            {selectedModelData && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{selectedModelData.name}</h4>
                    <div className={`status-badge ${getStatusColor(selectedModelData.status)}`}>
                      {getStatusIcon(selectedModelData.status)}
                      <span>{selectedModelData.status}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{selectedModelData.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className="h-4 w-4 text-success-500" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Accuracy</span>
                    </div>
                    <p className="text-2xl font-bold text-success-600 dark:text-success-400">{selectedModelData.accuracy}%</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Cpu className="h-4 w-4 text-aviation-500" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">CPU Usage</span>
                    </div>
                    <p className="text-2xl font-bold text-aviation-600 dark:text-aviation-400">{selectedModelData.cpu_usage}%</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Database className="h-4 w-4 text-purple-500" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Memory</span>
                    </div>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{selectedModelData.memory_usage}GB</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-accent-500" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Predictions</span>
                    </div>
                    <p className="text-2xl font-bold text-accent-600 dark:text-accent-400">{selectedModelData.predictions_today}</p>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-slate-900 dark:text-white mb-3">Key Features</h5>
                  <div className="space-y-2">
                    {selectedModelData.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* System Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">System Resources</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Cpu className="h-4 w-4 text-aviation-500" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">CPU Utilization</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">{systemMetrics.cpu_utilization}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-aviation-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${systemMetrics.cpu_utilization}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Database className="h-4 w-4 text-purple-500" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Memory Usage</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">{systemMetrics.memory_usage}GB</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(systemMetrics.memory_usage / 32) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Gauge className="h-4 w-4 text-accent-500" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">GPU Utilization</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">{systemMetrics.gpu_utilization}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-accent-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${systemMetrics.gpu_utilization}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Automation Rules</h3>
            <div className="space-y-3">
              {automationRules.map((rule) => (
                <div key={rule.id} className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-slate-900 dark:text-white text-sm">{rule.name}</h4>
                    <div className={`status-badge ${getStatusColor(rule.status)}`}>
                      {getStatusIcon(rule.status)}
                      <span>{rule.status}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                    <span className="font-medium">Trigger:</span> {rule.trigger}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                    <span className="font-medium">Action:</span> {rule.action}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-400">Executions today:</span>
                    <span className="text-xs font-semibold text-aviation-600 dark:text-aviation-400">{rule.executions_today}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Uganda AI Implementation */}
        <div className="bg-gradient-to-r from-success-50 to-aviation-50 dark:from-success-900/20 dark:to-aviation-900/20 rounded-xl p-6 border border-success-200 dark:border-success-800">
          <h3 className="text-lg font-semibold text-success-900 dark:text-success-100 mb-2">Uganda AI Aviation Initiative</h3>
          <p className="text-success-800 dark:text-success-200 text-sm mb-4">
            Advanced AI systems designed specifically for Uganda's aviation infrastructure, climate, and operational requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Network className="h-5 w-5 text-success-600 dark:text-success-400" />
                <h4 className="font-medium text-slate-900 dark:text-white">Local Data Training</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">AI models trained on 10+ years of Uganda aviation data</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Layers className="h-5 w-5 text-success-600 dark:text-success-400" />
                <h4 className="font-medium text-slate-900 dark:text-white">Climate Adaptation</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Specialized models for tropical weather patterns</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="h-5 w-5 text-success-600 dark:text-success-400" />
                <h4 className="font-medium text-slate-900 dark:text-white">Edge Computing</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Offline-capable AI for reliable operations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIControlCenter;