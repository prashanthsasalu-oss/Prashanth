import React, { useEffect } from 'react';
import { useNotifications } from '../context/NotificationContext';
import { Bell, Sparkles, X, ArrowRight } from 'lucide-react';

export const LiveAlertToast: React.FC = () => {
  const { latestAlert, clearLatestAlert, setIsDrawerOpen } = useNotifications();

  useEffect(() => {
    if (latestAlert) {
      const timer = setTimeout(() => {
        clearLatestAlert();
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [latestAlert, clearLatestAlert]);

  if (!latestAlert) return null;

  return (
    <div 
      id="live-portal-alert-toast"
      className="fixed bottom-6 right-6 z-50 max-w-md w-full p-4 rounded-2xl bg-slate-900 border border-cyan-500 shadow-2xl shadow-cyan-950/60 animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="relative p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-500/40 flex-shrink-0">
          <Bell className="w-5 h-5 animate-bounce" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
        </div>

        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
              New In-Portal Notification
            </span>
            <button
              onClick={clearLatestAlert}
              className="text-slate-400 hover:text-white p-0.5 rounded transition"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-white font-medium leading-snug">
            {latestAlert}
          </p>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-[10px] text-slate-400 font-mono">
              Live Console Sync
            </span>
            <button
              onClick={() => {
                clearLatestAlert();
                setIsDrawerOpen(true);
              }}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition"
            >
              <span>Inspect in Console</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
