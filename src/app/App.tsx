import { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import ReportsView from './components/ReportsView';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');

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
            <div className="flex items-center justify-center h-full">
              <div className="glass-card p-12 text-center">
                <h2 className="text-2xl text-cyan-400">BBMP Integration</h2>
                <p className="text-gray-400 mt-4">Coming Soon</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
