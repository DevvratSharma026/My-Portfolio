import React, { ReactNode } from 'react';

interface SkillMeterProps {
  name: string;
  icon: ReactNode;
  color: string;
}

const SkillMeter: React.FC<SkillMeterProps> = ({ name, icon, color }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div 
        className={`w-12 h-12 flex items-center justify-center rounded-lg bg-space-800 
        hover:bg-space-700 transition-all duration-300 cursor-pointer
        hover:scale-110 hover:shadow-lg`}
      >
        <div className={`w-6 h-6 ${color} text-space-100 
          group-hover:filter group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] 
          transition-all duration-300`}
        >
          {icon}
        </div>
      </div>
      <div className="text-xs text-space-300 text-center">
        {name}
      </div>
    </div>
  );
};

export default SkillMeter;