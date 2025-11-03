import React from 'react';
import { Activity } from '../types';
import WindEnergyDiagram from './WindEnergyDiagram';
import BiomassEnergyDiagram from './BiomassEnergyDiagram';
import GeothermalEnergyDiagram from './GeothermalEnergyDiagram';

interface ActivityContentProps {
  activity: Activity | undefined;
}

const ExplanationCard: React.FC<{ title: string, content: string }> = ({ title, content }) => (
    <div className="bg-slate-blue/40 backdrop-blur-lg p-6 rounded-lg border border-slate-blue transition-all duration-300 hover:border-amber-glow/50 hover:shadow-2xl hover:shadow-amber-glow/10">
        <h3 className="text-lg font-semibold text-amber-glow mb-2">{title}</h3>
        <p className="text-text-medium leading-relaxed">{content}</p>
    </div>
);

const ActivityDiagram: React.FC<{ activityId: number }> = ({ activityId }) => {
    switch (activityId) {
        case 1:
            return <WindEnergyDiagram />;
        case 2:
            return <BiomassEnergyDiagram />;
        case 3:
            return <GeothermalEnergyDiagram />;
        default:
            return null;
    }
}

const ActivityContent: React.FC<ActivityContentProps> = ({ activity }) => {
  if (!activity) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-text-medium">Select an activity to begin.</p>
      </div>
    );
  }

  return (
    <div key={activity.id} className="animate-fade-in p-6 md:p-10 space-y-12">
      <header>
        <h2 className="text-4xl font-bold text-text-light tracking-tight">{activity.title}</h2>
      </header>

      <section>
        <h3 className="text-2xl font-semibold text-text-light mb-4">Problem Statement</h3>
        <blockquote className="border-l-4 border-sky-blue pl-6 py-2 bg-slate-blue/30 rounded-r-lg">
          <p className="text-text-medium italic leading-relaxed">{activity.problemStatement}</p>
        </blockquote>
      </section>
      
      <section>
        <h3 className="text-2xl font-semibold text-text-light mb-6">System Architecture</h3>
        <div className="bg-deep-navy/50 p-4 md:p-6 rounded-lg border border-slate-blue backdrop-blur-sm">
            <ActivityDiagram activityId={activity.id} />
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-text-light mb-6">Detailed Explanation</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ExplanationCard title="Source of Energy" content={activity.explanation.source} />
            <ExplanationCard title="Conversion Process" content={activity.explanation.conversion} />
            <ExplanationCard title="Output & Utilization" content={activity.explanation.output} />
            <ExplanationCard title="Real-world Application" content={activity.explanation.relevance} />
        </div>
      </section>
    </div>
  );
};

export default ActivityContent;