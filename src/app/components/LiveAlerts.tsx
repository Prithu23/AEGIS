import { AlertTriangle, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function LiveAlerts() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const recentAlerts = [
    {
      id: 1,
      time: '09:15:32',
      type: 'Gas Leak Detected',
      location: 'Zone A-12',
      severity: 'high',
    },
    {
      id: 2,
      time: '08:42:18',
      type: 'Rubble Detected',
      location: 'Zone B-7',
      severity: 'medium',
    },
    {
      id: 3,
      time: '07:30:45',
      type: 'Human Presence',
      location: 'Zone C-3',
      severity: 'low',
    },
    {
      id: 4,
      time: '07:15:22',
      type: 'Oil Spill Detected',
      location: 'Zone A-5',
      severity: 'high',
    },
    {
      id: 5,
      time: '06:58:10',
      type: 'Temperature Spike',
      location: 'Zone D-1',
      severity: 'medium',
    },
  ];

  const formatDateTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const dateStr = date.toLocaleDateString('en-US', options);
    const timeStr = date.toLocaleTimeString('en-US', { hour12: false });
    return { dateStr, timeStr };
  };

  const { dateStr, timeStr } = formatDateTime(currentTime);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'text-red-400';
      case 'medium':
        return 'text-yellow-400';
      case 'low':
        return 'text-cyan-400';
      default:
        return 'text-gray-400';
    }
  };

  const getSeverityDot = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-cyan-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 p-6 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-cyan-400" />
          <h2 className="text-lg font-bold text-cyan-400 tracking-wide">Live Alerts Feed</h2>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span className="text-gray-300">{dateStr}</span>
          </div>
          <div className="font-mono text-xl text-cyan-400">
            {timeStr}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {recentAlerts.map((alert, index) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300"
          >
            <div className="flex items-start gap-2 mb-2">
              <div
                className={`w-2 h-2 rounded-full ${getSeverityDot(alert.severity)} mt-1 flex-shrink-0`}
                style={{
                  boxShadow: `0 0 8px ${
                    alert.severity === 'high'
                      ? '#ef4444'
                      : alert.severity === 'medium'
                      ? '#eab308'
                      : '#06b6d4'
                  }`,
                }}
              />
              <div className="flex-1 min-w-0">
                <div className={`text-sm font-medium ${getSeverityColor(alert.severity)} truncate`}>
                  {alert.type}
                </div>
              </div>
            </div>

            <div className="space-y-1 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{alert.time}</span>
              </div>
              <div className="truncate">{alert.location}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
