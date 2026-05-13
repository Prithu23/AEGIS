import { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import ReportsView from './components/ReportsView';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');

  const alerts = [
    {
      agency: 'Fire Department',
      status: 'ACTIVE',
      last: '2 min ago',
      severity: 'RED',
      description: 'High temperature and smoke detected near Sector B-12.',
    },
    {
      agency: 'EMS / Ambulance',
      status: 'EN ROUTE',
      last: '1 min ago',
      severity: 'RED',
      description: 'Critical survivor vitals detected. Immediate assistance required.',
    },
    {
      agency: 'Police Coordination',
      status: 'MONITORING',
      last: '3 min ago',
      severity: 'YELLOW',
      description: 'Crowd movement detected near hazardous perimeter.',
    },
    {
      agency: 'Government Control Room',
      status: 'ESCALATED',
      last: 'JUST NOW',
      severity: 'BLACK',
      description: 'Full disaster escalation report transmitted successfully.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white overflow-hidden">
      {/* VERDE Logo */}
      <div className="absolute top-6 left-8 z-50">
        <h1 className="text-3xl font-bold text-blue-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)] tracking-wider">
          VERDE
        </h1>
      </div>

      <div className="flex h-screen">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />

        <main className="flex-1 p-6 overflow-y-auto mt-16">
          {activeView === 'dashboard' && <DashboardView />}
          {activeView === 'reports' && <ReportsView />}
          {activeView === 'bbmp' && (
            <div className="space-y-6">
              <div className="rounded-3xl bg-[#061223]/90 border border-cyan-500/10 p-8 shadow-xl shadow-cyan-500/10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-cyan-300">Live Emergency Feed</h3>
                    <p className="text-gray-400 mt-2 max-w-2xl text-sm">
                      Real-time alerts from emergency agencies, survivor vitals, and hazard telemetry.
                    </p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 px-5 py-3 rounded-2xl">
                    <p className="text-red-300 text-xs uppercase tracking-wider">Current Threat Level</p>
                    <h4 className="text-2xl font-bold text-red-400">RED</h4>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {alerts.map((alert, index) => (
                    <div
                      key={index}
                      className="bg-[#08132d]/90 border border-cyan-500/20 rounded-3xl p-6 shadow-xl hover:scale-[1.02] transition-all"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-cyan-300 font-semibold text-lg">{alert.agency}</span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            alert.severity === 'RED'
                              ? 'bg-red-500/20 text-red-300'
                              : alert.severity === 'BLACK'
                              ? 'bg-purple-500/20 text-purple-300'
                              : 'bg-yellow-500/20 text-yellow-300'
                          }`}
                        >
                          {alert.severity}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <p className="text-white text-xl font-bold">{alert.status}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{alert.description}</p>
                        <div className="pt-4 border-t border-cyan-500/10 text-sm text-gray-500">
                          Last Updated: {alert.last}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
