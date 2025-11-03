import React from 'react';

const ComponentBox = ({ x, y, width, height, label, subLabel }: { x: number, y: number, width: number, height: number, label: string, subLabel?: string }) => (
  <g transform={`translate(${x}, ${y})`}>
    <rect width={width} height={height} rx="8" ry="8" className="fill-slate-blue stroke-sky-blue/30" />
    {subLabel ? (
      <>
        <text x={width / 2} y={height / 2 - 8} textAnchor="middle" className="fill-text-light font-semibold text-[10px]">{label}</text>
        <text x={width / 2} y={height / 2 + 12} textAnchor="middle" className="fill-text-medium text-[8px]">{subLabel}</text>
      </>
    ) : (
      <text x={width / 2} y={height / 2} dominantBaseline="middle" textAnchor="middle" className="fill-text-light font-semibold text-[10px]">{label}</text>
    )}
  </g>
);

const FlowArrow = ({ path, colorClass = 'stroke-amber-glow', animated = true, id }: { path: string, colorClass?: string, animated?: boolean, id: string }) => (
  <g>
    <defs>
      <marker id={`arrowhead-${id}`} markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" className={colorClass.replace('stroke', 'fill')} />
      </marker>
    </defs>
    <path d={path} className={`${colorClass} stroke-2 fill-none`} markerEnd={`url(#arrowhead-${id})`} />
    {animated && <path d={path} className={`${colorClass} stroke-2 fill-none opacity-50`} style={{ strokeDasharray: '10, 5', animation: 'dash 1s linear infinite' }} />}
  </g>
);

const AnimatedParticles = ({ path, colorClass, duration, particleSize = "2" }: { path: string, colorClass: string, duration: string, particleSize?: string }) => (
  <g>
    {Array.from({ length: 10 }).map((_, i) => (
      <circle key={i} r={particleSize} className={colorClass}>
        <animateMotion
          dur={duration}
          repeatCount="indefinite"
          path={path}
          begin={`${(i * parseFloat(duration)) / 10}s`}
        />
      </circle>
    ))}
  </g>
);

const SpinningTurbineIcon = ({ x, y, size = 20 }: { x: number, y: number, size?: number }) => (
    <g transform={`translate(${x}, ${y})`} className="opacity-40">
        <circle cx="0" cy="0" r={size / 2} className="stroke-text-medium/50 fill-none" strokeWidth="1"/>
        <g style={{ transformOrigin: '0 0', animation: 'spin 2s linear infinite' }}>
            <path d={`M0 0 L${size/2.2} ${-size/6}`} className="stroke-text-light" strokeWidth="1.5" />
            <path d={`M0 0 L-${size/3} ${-size/3}`} className="stroke-text-light" strokeWidth="1.5" />
            <path d={`M0 0 L-${size/6} ${size/2.2}`} className="stroke-text-light" strokeWidth="1.5" />
        </g>
    </g>
);

const RisingVapor = ({ x, y, count = 5 }: { x: number, y: number, count?: number }) => (
  <g>
    {Array.from({ length: count }).map((_, i) => (
      <circle 
        key={i} 
        cx={x + (Math.random() - 0.5) * 40} 
        cy={y} 
        r={Math.random() * 2 + 1} 
        className="fill-sky-blue/80" 
        style={{ animation: `rise 3s ease-out infinite`, animationDelay: `${Math.random() * 3}s` }} 
      />
    ))}
  </g>
);


const GeothermalEnergyDiagram = () => (
    <div className="flex justify-center items-center w-full min-h-[240px] p-4 text-text-light">
    <svg viewBox="0 0 800 500" className="w-full h-auto">
      <style>
        {`
          @keyframes dash {
            to { stroke-dashoffset: -15; }
          }
           @keyframes spin { 
            to { transform: rotate(360deg); } 
          }
          @keyframes shimmer { 
            50% { opacity: 0.7; } 
          }
          @keyframes rise {
            from { transform: translateY(0px); opacity: 0.7; }
            to { transform: translateY(-30px); opacity: 0; }
          }
        `}
      </style>
      
      {/* Zones */}
      <text x="10" y="20" className="fill-text-medium font-bold text-sm tracking-widest uppercase">Surface Zone</text>
      <line x1="0" y1="250" x2="800" y2="250" className="stroke-text-medium stroke-1" strokeDasharray="5,5" />
      <text x="10" y="270" className="fill-text-medium font-bold text-sm tracking-widest uppercase">Subsurface Zone</text>
      
      {/* Subsurface */}
      <rect x="0" y="250" width="800" height="250" className="fill-amber-glow/5" />
      <rect x="100" y="350" width="600" height="100" rx="20" className="fill-amber-glow/20" style={{ animation: 'shimmer 3s ease-in-out infinite' }}/>
      <text x="400" y="405" textAnchor="middle" className="fill-amber-glow font-bold text-lg">Geothermal Reservoir</text>

      {/* Wells */}
      <path d="M200 350 V120" className="stroke-text-medium stroke-[10px] fill-none" />
      <AnimatedParticles path="M200 350 V120" colorClass="fill-amber-glow" duration="3s" />
      <text x="170" y="240" className="fill-text-medium text-xs" transform="rotate(-90 170 240)">Production Well</text>
      
      <path d="M600 120 V350" className="stroke-text-medium stroke-[10px] fill-none" />
      <AnimatedParticles path="M600 120 V350" colorClass="fill-sky-blue" duration="3s" />
      <text x="630" y="240" className="fill-text-medium text-xs" transform="rotate(90 630 240)">Injection Well</text>

      {/* Surface Components */}
      <ComponentBox x={250} y={75} width={140} height={50} label="Turbine & Generator" subLabel="Power Generation" />
      <SpinningTurbineIcon x={320} y={100} size={32}/>
      
      <ComponentBox x={450} y={80} width={120} height={40} label="Cooling Tower" subLabel="Condense Steam" />
      <RisingVapor x={510} y={80} />

      <ComponentBox x={250} y={180} width={140} height={40} label="Power Grid" />

      {/* Connections */}
      <FlowArrow id="g3" path="M200 100 H250" colorClass="stroke-amber-glow" />
      <text x="225" y="75" textAnchor="middle" className="fill-amber-glow text-xs">High-Pressure Steam</text>
      
      <FlowArrow id="g4" path="M390 100 H450" colorClass="stroke-sky-blue" />
      <text x="420" y="125" textAnchor="middle" className="fill-sky-blue text-xs">Low-Pressure Steam</text>
      
      <FlowArrow id="g5" path="M570 100 H600" colorClass="stroke-sky-blue" />
      <text x="585" y="75" textAnchor="middle" className="fill-sky-blue text-xs">Condensed Water</text>

      <FlowArrow id="g6" path="M320 125 V180" colorClass="stroke-amber-glow" />
      <text x="320" y="155" textAnchor="middle" className="fill-amber-glow text-xs">Electricity Distribution</text>
    </svg>
  </div>
);

export default GeothermalEnergyDiagram;