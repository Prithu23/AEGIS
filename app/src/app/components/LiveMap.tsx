import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export default function LiveMap() {
  const location = {
    latitude: '12.9716° N',
    longitude: '77.5946° E',
    name: 'Bangalore, India',
  };

  return (
    <div className="rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 p-6 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300"
      style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' }}
    >
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-cyan-400" />
        <h2 className="text-lg font-bold text-cyan-400 tracking-wide">Live Map</h2>
      </div>

      {/* Map Placeholder */}
      <div className="relative h-80 bg-gradient-to-br from-blue-950 to-gray-900 rounded-xl border border-cyan-500/30 overflow-hidden mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            {/* Pulsing Location Marker */}
            <motion.div
              className="relative mx-auto mb-3"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MapPin className="w-12 h-12 text-cyan-400" fill="currentColor" />

              {/* Pulse Rings */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-cyan-400 rounded-full"
                animate={{ scale: [1, 2, 2], opacity: [0.8, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-cyan-400 rounded-full"
                animate={{ scale: [1, 2, 2], opacity: [0.8, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
            <p className="text-cyan-400/70 text-sm">{location.name}</p>
          </div>
        </div>

        {/* GPS Signal Indicator */}
        <div className="absolute top-3 right-3 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded border border-green-500/30">
          <Navigation className="w-3 h-3 text-green-400" />
          <span className="text-xs text-green-400 font-medium">GPS ACTIVE</span>
        </div>
      </div>

      {/* Coordinates */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <div className="text-xs text-gray-400 mb-1">Latitude</div>
          <div className="text-sm font-mono text-cyan-400">{location.latitude}</div>
        </div>
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <div className="text-xs text-gray-400 mb-1">Longitude</div>
          <div className="text-sm font-mono text-cyan-400">{location.longitude}</div>
        </div>
      </div>
    </div>
  );
}
