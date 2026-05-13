import CriticalityStatus from './CriticalityStatus';
import MetricsCards from './MetricsCards';
import GasAnalysis from './GasAnalysis';
import LiveCameraFeed from './LiveCameraFeed';
import LiveMap from './LiveMap';
import LiveAlerts from './LiveAlerts';

export default function DashboardView() {
  return (
    <div className="h-full flex flex-col gap-4 pb-4">
      {/* Top Section - Criticality Status */}
      <div className="flex-shrink-0">
        <CriticalityStatus />
      </div>

      {/* Second Row - Metrics Cards */}
      <div className="flex-shrink-0">
        <MetricsCards />
      </div>

      {/* Third Row - Gas Analysis and Live Map */}
      <div className="grid grid-cols-2 gap-4 flex-shrink-0">
        <GasAnalysis />
        <LiveMap />
      </div>

      {/* Fourth Row - Live Camera Feed (spans full width) */}
      <div className="flex-1">
        <LiveCameraFeed />
      </div>

      {/* Bottom Section - Live Alerts */}
      <div className="flex-shrink-0">
        <LiveAlerts />
      </div>
    </div>
  );
}
