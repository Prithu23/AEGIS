import { LayoutDashboard, FileText, Building2, Upload, ImageIcon, VideoIcon } from 'lucide-react';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export default function Sidebar({ activeView, setActiveView }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'bbmp', label: 'BBMP', icon: Building2 },
  ];

  return (
    <div className="w-64 bg-black/40 backdrop-blur-xl border-r border-cyan-500/20 p-6 flex flex-col gap-6">
      <div className="space-y-2 mt-16">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive
                  ? 'bg-cyan-500/20 border border-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,0.3)]'
                  : 'hover:bg-white/5 border border-transparent'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-400' : 'text-gray-400'}`} />
              <span className={`font-medium ${isActive ? 'text-cyan-400' : 'text-gray-300'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-2 mb-4 px-4">
          <Upload className="w-5 h-5 text-emerald-400" />
          <span className="font-medium text-emerald-400">Upload</span>
        </div>

        <div className="space-y-3">
          <button className="w-full px-4 py-3 rounded-lg bg-cyan-500/10 border border-cyan-400/50 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all duration-300 flex items-center gap-2 justify-center">
            <ImageIcon className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Upload JPG</span>
          </button>

          <button className="w-full px-4 py-3 rounded-lg bg-cyan-500/10 border border-cyan-400/50 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all duration-300 flex items-center gap-2 justify-center">
            <VideoIcon className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Upload MP4</span>
          </button>
        </div>
      </div>
    </div>
  );
}
