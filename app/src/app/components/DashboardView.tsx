import MetricsCards from './MetricsCards';
import GasAnalysis from './GasAnalysis';
import LiveCameraFeed from './LiveCameraFeed';
import LiveMap from './LiveMap';
import LiveAlerts from './LiveAlerts';

export default function DashboardView() {
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

  // Check if there are any RED severity alerts
  const hasHighAlert = alerts.some((alert) => alert.severity === 'RED');
  const highAlertDescription = alerts.find((alert) => alert.severity === 'RED')?.description;

  return (
    <div className="h-full flex flex-col gap-4 pb-4">
      {/* High Alert Banner - Only shown if there's a RED severity alert */}
      {hasHighAlert && (
        <div className="flex-shrink-0 rounded-2xl bg-gradient-to-r from-red-500/20 to-red-600/10 border border-red-500/40 p-4 shadow-lg shadow-red-500/20 animate-pulse">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-red-300 mb-1">🚨 HIGH ALERT - CRITICAL SITUATION</h3>
              <p className="text-red-200 text-sm leading-relaxed">{highAlertDescription}</p>
            </div>
          </div>
        </div>
      )}

      {/* Climate Parameters Section */}
      <div className="flex-shrink-0">
        <div className="mb-3">
          <h2 className="text-lg font-bold text-cyan-400 tracking-wide">Climate Parameters</h2>
        </div>
        <MetricsCards />
      </div>

      {/* Third Row - Gas Analysis and Live Map */}
      <div className="grid grid-cols-2 gap-4 flex-shrink-0">
        <GasAnalysis />
        <LiveMap />
      </div>

      {/* Fourth Row - Live Camera Feed and Air Toxicity */}
      <div className="grid grid-cols-3 gap-4 flex-1">
        {/* Live Camera Feed - Takes 2 columns */}
        <div className="col-span-2 flex flex-col">
          <LiveCameraFeed />
        </div>

        {/* Air Toxicity Box */}
        <div className="rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 p-6 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300"
          style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' }}
        >
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 8l-9-2m9 2l9-2" />
            </svg>
            <h2 className="text-lg font-bold text-cyan-400 tracking-wide">Air Toxicity</h2>
          </div>

          <div className="space-y-4 flex-1 flex flex-col justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">37%</div>
              <div className="text-sm text-gray-400">Toxicity Level</div>
            </div>

            <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-red-500"
                style={{ width: '37%' }}
              />
            </div>

            <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30">
              <p className="text-xs text-red-300 text-center">
                ⚠️ High toxicity detected - Monitor air quality
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Live Alerts */}
      <div className="flex-shrink-0">
        <LiveAlerts />
      </div>
    </div>
  );
}
