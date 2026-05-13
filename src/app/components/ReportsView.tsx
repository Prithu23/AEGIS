import { FileText, Download, Clock, MapPin, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

export default function ReportsView() {
  const reports = [
    {
      id: 'RPT-001',
      date: '13 May 2026',
      time: '09:15',
      severity: 'High',
      location: 'Zone A-12',
      status: 'Sent',
      color: 'red',
    },
    {
      id: 'RPT-002',
      date: '12 May 2026',
      time: '23:18',
      severity: 'High',
      location: 'Zone B-7',
      status: 'Downloaded',
      color: 'red',
    },
    {
      id: 'RPT-003',
      date: '12 May 2026',
      time: '22:05',
      severity: 'Medium',
      location: 'Zone C-3',
      status: 'Sent',
      color: 'orange',
    },
  ];

  const downloadableReport = {
    date: '13 May 2026',
    time: '09:15:32',
    latitude: '12.9716° N',
    longitude: '77.5946° E',
    humanCount: 3,
    rubbleCount: 12,
    gasSpill: 'Detected - MQ2: 35%',
    severity: 'High',
  };

  return (
    <div className="space-y-6">
      {/* Recent Reports */}
      <div>
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 tracking-wide">Recent Reports</h2>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {reports.slice(0, 3).map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
              style={{ boxShadow: '0 0 15px rgba(6, 182, 212, 0.2)' }}
            >
              <div className="flex items-start justify-between mb-4">
                <FileText className="w-8 h-8 text-cyan-400" />
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  report.severity === 'High'
                    ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                    : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                }`}>
                  {report.severity}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{report.id}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{report.date} at {report.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{report.location}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <span className="text-xs text-green-400">● {report.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Download Report Section */}
      <div className="rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 p-8"
        style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-cyan-400 tracking-wide">Download Report</h2>
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-medium flex items-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            <Download className="w-5 h-5" />
            Download PDF
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-sm text-gray-400 mb-1">Date & Time</div>
              <div className="text-white font-medium">{downloadableReport.date} at {downloadableReport.time}</div>
            </div>

            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-sm text-gray-400 mb-1">Location</div>
              <div className="text-white font-medium font-mono">
                {downloadableReport.latitude} / {downloadableReport.longitude}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-sm text-gray-400 mb-1">Severity Level</div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-medium">{downloadableReport.severity}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-sm text-gray-400 mb-1">Human Count</div>
              <div className="text-2xl text-cyan-400 font-bold">{downloadableReport.humanCount}</div>
            </div>

            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-sm text-gray-400 mb-1">Rubble Objects</div>
              <div className="text-2xl text-cyan-400 font-bold">{downloadableReport.rubbleCount}</div>
            </div>

            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-sm text-gray-400 mb-1">Gas Analysis</div>
              <div className="text-white font-medium">{downloadableReport.gasSpill}</div>
            </div>
          </div>
        </div>
      </div>

      {/* History Table */}
      <div className="rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 p-6"
        style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' }}
      >
        <h2 className="text-xl font-bold text-cyan-400 mb-4 tracking-wide">History of Reports</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Report ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Time</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Severity</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Status</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <motion.tr
                  key={report.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-4 text-cyan-400 font-medium">{report.id}</td>
                  <td className="py-4 px-4 text-white">{report.date}</td>
                  <td className="py-4 px-4 text-white">{report.time}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      report.severity === 'High'
                        ? 'bg-red-500/20 text-red-400'
                        : 'bg-cyan-500/20 text-cyan-400'
                    }`}>
                      {report.severity}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-green-400 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full" />
                      {report.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
