import { Thermometer, Droplets, Gauge } from 'lucide-react';
import { motion } from 'motion/react';

export default function MetricsCards() {
  const metrics = [
    {
      id: 'temperature',
      label: 'Temperature',
      value: '28.5',
      unit: '°C',
      icon: Thermometer,
      colorStart: '#06b6d4',
      colorEnd: '#3b82f6',
      glowColor: 'rgba(6, 182, 212, 0.3)',
      percentage: 72,
    },
    {
      id: 'humidity',
      label: 'Humidity',
      value: '65',
      unit: '%',
      icon: Droplets,
      colorStart: '#06b6d4',
      colorEnd: '#0891b2',
      glowColor: 'rgba(6, 182, 212, 0.3)',
      percentage: 65,
    },
    {
      id: 'pressure',
      label: 'Pressure',
      value: '1013',
      unit: 'hPa',
      icon: Gauge,
      colorStart: '#0891b2',
      colorEnd: '#0e7490',
      glowColor: 'rgba(8, 145, 178, 0.3)',
      percentage: 85,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - (metric.percentage / 100) * circumference;

        return (
          <div
            key={metric.id}
            className="relative p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300"
            style={{
              boxShadow: `0 0 20px ${metric.glowColor}`,
            }}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-32 h-32">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="45"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="45"
                    fill="none"
                    stroke={`url(#gradient-${metric.id})`}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                  <defs>
                    <linearGradient id={`gradient-${metric.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={metric.colorStart} />
                      <stop offset="100%" stopColor={metric.colorEnd} />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Icon in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-white/80" />
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {metric.value}
                  <span className="text-2xl ml-1">{metric.unit}</span>
                </div>
                <div className="text-gray-400 mt-1 font-medium tracking-wide">
                  {metric.label}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
