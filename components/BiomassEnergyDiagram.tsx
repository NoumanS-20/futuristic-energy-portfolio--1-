import React from 'react';

const ComponentBox = ({ x, y, width, height, label, subLabel }: { x: number, y: number, width: number, height: number, label: string, subLabel: string }) => (
  <g transform={`translate(${x}, ${y})`}>
    <rect width={width} height={height} rx="8" ry="8" className="fill-slate-blue stroke-sky-blue/30" />
    <text x={width / 2} y={height / 2 - 5} textAnchor="middle" className="fill-text-light font-semibold text-[10px]">{label}</text>
    <text x={width / 2} y={height / 2 + 10} textAnchor="middle" className="fill-text-medium text-[8px]">{subLabel}</text>
  </g>
);

const FlowArrow = ({ path, colorClass = 'stroke-amber-glow', animated = true, id, animationDuration = "1s" }: { path: string, colorClass?: string, animated?: boolean, id: string, animationDuration?: string }) => (
  <g>
    <defs>
      <marker id={`arrowhead-${id}`} markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" className={colorClass.replace('stroke', 'fill')} />
      </marker>
    </defs>
    <path d={path} className={`${colorClass} stroke-2 fill-none`} markerEnd={`url(#arrowhead-${id})`} />
    {animated && <path d={path} className={`${colorClass} stroke-2 fill-none opacity-50`} style={{ strokeDasharray: '10, 5', animation: `dash ${animationDuration} linear infinite` }} />}
  </g>
);

const AnimatedParticles = ({ path, colorClass, duration, particleSize = "1.5" }: { path: string, colorClass: string, duration: string, particleSize?: string }) => (
  <g>
    {Array.from({ length: 8 }).map((_, i) => (
      <circle key={i} r={particleSize} className={colorClass}>
        <animateMotion
          dur={duration}
          repeatCount="indefinite"
          path={path}
          begin={`${(i * parseFloat(duration)) / 8}s`}
        />
      </circle>
    ))}
  </g>
);

const SpinningGears = ({ x, y, size = 18 }: { x: number, y: number, size?: number }) => (
    <g transform={`translate(${x}, ${y})`}>
        <g style={{ transformOrigin: `${size*0.75}px ${size/2}px`, animation: 'spin 4s linear infinite' }}>
            <path d="M15 5 L17 6 L19 5 L20 7 L19 9 L17 8 L15 9 L14 7 Z" className="fill-text-medium" />
            <path d="M15 5 L17 6 L19 5 L20 7 L19 9 L17 8 L15 9 L14 7 Z" transform={`rotate(60 ${size*0.75} ${size/2})`} className="fill-text-medium" />
            <path d="M15 5 L17 6 L19 5 L20 7 L19 9 L17 8 L15 9 L14 7 Z" transform={`rotate(120 ${size*0.75} ${size/2})`} className="fill-text-medium" />
             <circle cx={size*0.75} cy={size/2} r="3" className="fill-slate-blue"/>
        </g>
         <g style={{ transformOrigin: `${size*0.25}px ${size/2}px`, animation: 'spin 4s linear infinite reverse' }}>
            <path d="M5 5 L7 6 L9 5 L10 7 L9 9 L7 8 L5 9 L4 7 Z" className="fill-text-medium" />
            <path d="M5 5 L7 6 L9 5 L10 7 L9 9 L7 8 L5 9 L4 7 Z" transform={`rotate(60 ${size*0.25} ${size/2})`} className="fill-text-medium" />
            <path d="M5 5 L7 6 L9 5 L10 7 L9 9 L7 8 L5 9 L4 7 Z" transform={`rotate(120 ${size*0.25} ${size/2})`} className="fill-text-medium" />
            <circle cx={size*0.25} cy={size/2} r="2" className="fill-slate-blue"/>
        </g>
    </g>
);


const BiomassEnergyDiagram = () => (
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
          @keyframes pulse {
            50% { opacity: 0.5; }
          }
        `}
      </style>
      
      {/* Column 1: Biomass Prep */}
      <ComponentBox x={50} y={50} width={140} height={40} label="Agricultural Waste" subLabel="e.g., Rice Husks" />
      <FlowArrow id="b1" path="M120 90 V150" colorClass="stroke-sky-blue" animated={false} />
      <AnimatedParticles path="M120 90 V150" colorClass="fill-sky-blue" duration="2s" />
      <ComponentBox x={50} y={150} width={140} height={40} label="Biomass Dryer" subLabel="Moisture Removal" />
      <FlowArrow id="b2" path="M120 190 V250" colorClass="stroke-sky-blue" animated={false} />
      <AnimatedParticles path="M120 190 V250" colorClass="fill-sky-blue" duration="2s" />
      <ComponentBox x={50} y={250} width={140} height={40} label="Dried Biomass Storage" subLabel="Feedstock Buffer" />
      
      {/* Column 2: Gasification */}
      <FlowArrow id="b3" path="M190 270 H280" colorClass="stroke-sky-blue" animated={false}/>
      <AnimatedParticles path="M190 270 H280" colorClass="fill-sky-blue" duration="2s" />
      <ComponentBox x={280} y={250} width={140} height={40} label="Biomass Gasifier" subLabel="High-Temp Conversion" />
      <circle cx="350" cy="270" r="15" className="fill-amber-glow/50" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
      <FlowArrow id="g1" path="M350 250 V190" colorClass="stroke-amber-glow" animated={false}/>
      <AnimatedParticles path="M350 250 V190" colorClass="fill-amber-glow" duration="2.5s" particleSize="2" />
      <ComponentBox x={280} y={150} width={140} height={40} label="Gas Cleanup System" subLabel="Tar & Particulate Removal" />
      <FlowArrow id="s1" path="M350 310 H400 V400" colorClass="stroke-text-medium" />
      <text x={375} y={300} className="fill-text-medium text-xs">Biochar</text>
      <ComponentBox x={330} y={400} width={140} height={40} label="Biochar" subLabel="Soil Amendment" />


      {/* Column 3: Power Generation */}
      <FlowArrow id="g2" path="M350 150 V90 H500" colorClass="stroke-amber-glow" animated={false}/>
      <AnimatedParticles path="M350 150 V90 H500" colorClass="fill-amber-glow" duration="3s" particleSize="2"/>
      <text x={425} y={80} className="fill-amber-glow text-xs">Clean Syngas</text>
      <ComponentBox x={500} y={70} width={180} height={50} label="Syngas Engine-Generator" subLabel="Electricity Production" />
      <SpinningGears x={515} y={86} />

      <FlowArrow id="e1" path="M590 120 V180" colorClass="stroke-amber-glow" animationDuration="0.5s"/>
      <ComponentBox x={500} y={180} width={180} height={40} label="Microgrid Control Station" subLabel="Load Management" />
      <circle cx="590" cy="185" r="3" className="fill-amber-glow" style={{ animation: 'pulse 1s ease-in-out infinite' }} />

      {/* Column 4: Distribution */}
      <FlowArrow id="e2" path="M680 200 H750 V150" colorClass="stroke-amber-glow" animationDuration="0.5s"/>
      <text x={700} y={160} className="fill-text-light text-xs">Village Homes</text>
      <FlowArrow id="e3" path="M680 200 H750 V250" colorClass="stroke-amber-glow" animationDuration="0.5s"/>
      <text x={700} y="260" className="fill-text-light text-xs">Water Pumps</text>
      <FlowArrow id="e4" path="M680 200 H750 V350" colorClass="stroke-amber-glow" animationDuration="0.5s"/>
      <text x={700} y="360" className="fill-text-light text-xs">Community Center</text>

    </svg>
  </div>
);

export default BiomassEnergyDiagram;