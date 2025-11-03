import React from 'react';
import { IconHome, IconWind, IconBiomass, IconGeothermal } from './Icons';
import { Activity } from '../types';

interface SidebarProps {
  activities: Activity[];
  activeActivity: number;
  setActiveActivity: (id: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activities, activeActivity, setActiveActivity }) => {
  const getIconForActivity = (id: number) => {
    switch (id) {
      case 1:
        return <IconWind className="h-6 w-6 shrink-0" />;
      case 2:
        return <IconBiomass className="h-6 w-6 shrink-0" />;
      case 3:
        return <IconGeothermal className="h-6 w-6 shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <nav className="fixed left-0 top-0 h-full w-72 bg-slate-blue/60 backdrop-blur-lg border-r border-slate-blue/40 flex flex-col py-6 px-4">
      <div className="w-full mb-8">
        <h1 className="text-text-light text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-light to-text-medium">Clean and Green</h1>
        <h1 className="text-text-light text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-text-light to-text-medium">Energy Portfolio</h1>
        <div className="w-full h-px bg-slate-blue/80 my-4"></div>
        <div className="text-text-medium text-sm space-y-1">
          <p><span className="font-semibold text-text-light">Name: </span>Aryan Navin Kumar Agrawal</p>
          <p><span className="font-semibold text-text-light">Reg No: </span>RA2311042010057</p>
          <p><span className="font-semibold text-text-light">Dept: </span>Data science and Business System</p>
          <p><span className="font-semibold text-text-light">Section: </span>AQ2</p>
        </div>
      </div>
      <ul className="w-full">
        <li className="w-full relative">
            <button
            onClick={() => setActiveActivity(0)}
            className={`flex items-center gap-4 w-full px-4 py-3 my-1 text-left rounded-md transition-all duration-300 relative z-10 ${
                activeActivity === 0
                  ? 'text-amber-glow'
                  : 'text-text-medium hover:bg-slate-blue/60 hover:text-text-light'
              }`}
            >
            <IconHome className="h-6 w-6 shrink-0" />
            <span className="font-medium">Home</span>
            </button>
            {activeActivity === 0 && (
                <div className="absolute inset-0 bg-gradient-to-r from-amber-glow/10 to-transparent rounded-md z-0 transition-all duration-300">
                    <div className="absolute left-0 top-1/4 h-1/2 w-1 bg-amber-glow rounded-r-full"></div>
                </div>
            )}
        </li>
        {activities.map((activity) => (
          <li key={activity.id} className="w-full relative">
            <button
              onClick={() => setActiveActivity(activity.id)}
              className={`flex items-center gap-4 w-full px-4 py-3 my-1 text-left rounded-md transition-all duration-300 relative z-10 ${
                activeActivity === activity.id
                  ? 'text-amber-glow'
                  : 'text-text-medium hover:bg-slate-blue/60 hover:text-text-light'
              }`}
            >
              {getIconForActivity(activity.id)}
              <span className="font-medium">{activity.navLabel}</span>
            </button>
            {activeActivity === activity.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-amber-glow/10 to-transparent rounded-md z-0 transition-all duration-300">
                    <div className="absolute left-0 top-1/4 h-1/2 w-1 bg-amber-glow rounded-r-full"></div>
                </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;