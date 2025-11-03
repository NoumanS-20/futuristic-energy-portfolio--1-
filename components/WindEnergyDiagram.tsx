import React from 'react';

const ComponentBox = ({ x, y, width, height, label, subLabel }: { x: number, y: number, width: number, height: number, label: string, subLabel: string }) => (
  <g transform={`translate(${x}, ${y})`}>
    <rect width={width} height={height} rx="8" ry="8" className="fill-slate-blue stroke-sky-blue/30" />
    <text x={width / 2} y={height / 2 - 5} textAnchor="middle" className="fill-text-light font-semibold text-[10px]">{label}</text>
    <text x={width / 2} y={height / 2 + 10} textAnchor="middle" className="fill-text-medium text-[8px]">{subLabel}</text>
  </g>
);

const FlowArrow = ({ path, colorClass = 'stroke-amber-glow', animated = true }: { path: string, colorClass?: string, animated?: boolean }) => (
  <g>
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" className={colorClass.replace('stroke', 'fill')} />
      </marker>
    </defs>
    <path d={path} className={`${colorClass} stroke-2 fill-none`} markerEnd="url(#arrowhead)" />
    {animated && <path d={path} className={`${colorClass} stroke-2 fill-none opacity-50`} style={{ strokeDasharray: '10, 5', animation: 'dash 1s linear infinite' }} />}
  </g>
);

const TurbineIcon = ({ x, y }: { x: number, y: number }) => (
  <g transform={`translate(${x}, ${y})`}>
    <path d="M0 25 L0 50" className="stroke-text-medium" strokeWidth="2" />
    <g style={{ transformOrigin: '0px 25px', animation: 'spin 4s linear infinite' }}>
      <circle cx="0" cy="25" r="3" className="fill-text-light" />
      <path d="M0 25 L17.32 15" className="stroke-text-light" strokeWidth="2" />
      <path d="M0 25 L-17.32 15" className="stroke-text-light" strokeWidth="2" />
      <path d="M0 25 L0 45" className="stroke-text-light" strokeWidth="2" />
    </g>
  </g>
);

const WindEnergyDiagram = () => (
  <div className="flex justify-center items-center w-full min-h-[240px] p-4 text-text-light">
    <svg viewBox="0 0 800 400" className="w-full h-auto">
      <style>
        {`
          @keyframes dash {
            to { stroke-dashoffset: -15; }
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      {/* Zones */}
      <rect x="0" y="0" width="800" height="220" className="fill-transparent" />
      <text x="10" y="20" className="fill-text-medium font-bold text-sm tracking-widest uppercase">Offshore Zone</text>
      <line x1="0" y1="220" x2="800" y2="220" className="stroke-text-medium stroke-1" strokeDasharray="5,5" />
      <text x="10" y="240" className="fill-text-medium font-bold text-sm tracking-widest uppercase">Onshore Zone</text>

      {/* Water */}
      <path d="M0 220 Q 50 200, 100 220 T 200 220 T 300 220 T 400 220 T 500 220 T 600 220 T 700 220 T 800 220" className="stroke-sky-blue fill-sky-blue/10 stroke-2" />

      {/* Offshore Components */}
      <g>
        <text x="50" y="50" textAnchor="middle" className="fill-text-medium text-sm">Wind</text>
        <path d="M100 50 H20" className="stroke-sky-blue stroke-2 fill-none" markerEnd="url(#arrowhead)" />
        <TurbineIcon x={80} y={150} />
        <TurbineIcon x={140} y={150} />
        <TurbineIcon x={200} y={150} />
        <text x={140} y={215} textAnchor="middle" className="fill-text-light text-xs">Offshore Wind Farm</text>
      </g>
      
      <ComponentBox x={350} y={150} width={120} height={40} label="Offshore Substation" subLabel="Voltage Step-Up" />
      
      {/* Onshore Components */}
      <ComponentBox x={350} y={300} width={120} height={40} label="Onshore Substation" subLabel="Grid Integration" />
      <ComponentBox x={600} y={300} width={120} height={40} label="National Power Grid" subLabel="City Supply" />

      {/* Connections */}
      <FlowArrow path="M220 170 H350" colorClass="stroke-amber-glow" />
      <path d="M410 190 Q 460 245 410 300" className="stroke-text-medium" strokeWidth="8" fill="none" />
      <text x="450" y="245" className="fill-text-medium text-xs -rotate-90" textAnchor="middle">Sub-sea Cable</text>
      <FlowArrow path="M470 320 H600" colorClass="stroke-amber-glow" />

    </svg>
  </div>
);

export default WindEnergyDiagram;