import React from 'react';

interface VaraxisLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

export const VaraxisLogo: React.FC<VaraxisLogoProps> = ({
  size = 'md',
  showTagline = true,
  className = '',
  onClick
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <div 
      id="varaxis-global-brand-logo"
      onClick={onClick}
      className={`flex items-center gap-3 select-none group cursor-pointer ${className}`}
    >
      {/* Geometric Hexa-Matrix Vector Icon */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center`}>
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-300" />
        
        {/* Animated Geometric Vector */}
        <svg 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-full h-full drop-shadow-[0_2px_8px_rgba(6,182,212,0.4)]"
        >
          {/* Outer Hexagonal Shield */}
          <polygon 
            points="24,3 43,14 43,34 24,45 5,34 5,14" 
            className="stroke-cyan-400 stroke-2 fill-slate-900/90 transition-all duration-300 group-hover:stroke-cyan-300" 
          />
          {/* Interlocking Inner Geometric Vector Axes (Varaxis = Variable Axes) */}
          <polygon 
            points="24,10 38,18 38,30 24,38 10,30 10,18" 
            className="stroke-blue-500/80 stroke-1 fill-cyan-950/40" 
          />
          {/* Coordinate Axes Lines */}
          <line x1="24" y1="3" x2="24" y2="45" className="stroke-cyan-500/60 stroke-1" strokeDasharray="2 2" />
          <line x1="5" y1="14" x2="43" y2="34" className="stroke-cyan-500/60 stroke-1" strokeDasharray="2 2" />
          <line x1="5" y1="34" x2="43" y2="14" className="stroke-cyan-500/60 stroke-1" strokeDasharray="2 2" />
          
          {/* Central Precision Core Node (100% Accuracy & Trust) */}
          <circle cx="24" cy="24" r="4.5" className="fill-cyan-400 animate-pulse" />
          <circle cx="24" cy="24" r="2" className="fill-white" />
          
          {/* Satellite Orbit Nodes */}
          <circle cx="24" cy="10" r="2" className="fill-blue-400" />
          <circle cx="38" cy="18" r="2" className="fill-emerald-400" />
          <circle cx="38" cy="30" r="2" className="fill-cyan-400" />
          <circle cx="24" cy="38" r="2" className="fill-indigo-400" />
          <circle cx="10" cy="30" r="2" className="fill-teal-400" />
          <circle cx="10" cy="18" r="2" className="fill-sky-400" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-black tracking-wider uppercase text-white ${titleSizes[size]}`}>
            VARAXIS
          </span>
          <span className={`font-light tracking-widest text-cyan-400 uppercase ${titleSizes[size]}`}>
            GLOBAL
          </span>
        </div>
        {showTagline && (
          <div className="flex items-center gap-1.5 -mt-0.5">
            <span className="text-[10px] tracking-widest uppercase font-medium text-slate-400">
              Process Automation & Precision Optimization
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" title="Systems Active 24/7" />
          </div>
        )}
      </div>
    </div>
  );
};
