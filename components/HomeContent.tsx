import React from 'react';

const StatCard: React.FC<{ title: string, content: string, className?: string }> = ({ title, content, className }) => (
    <div className={`relative bg-slate-blue/40 backdrop-blur-lg p-6 rounded-lg border border-slate-blue transition-all duration-300 hover:border-amber-glow/50 hover:shadow-2xl hover:shadow-amber-glow/10 ${className}`}>
        <h3 className="text-lg font-semibold text-sky-blue mb-2">{title}</h3>
        <p className="text-text-medium leading-relaxed">{content}</p>
    </div>
);


const HomeContent: React.FC = () => {
    return (
        <div className="animate-fade-in p-6 md:p-10 space-y-12">
            <header className="space-y-4">
                <h1 className="text-5xl font-bold text-text-light tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-text-light to-sky-blue">
                    Harnessing Nature's Power
                </h1>
                <h2 className="text-3xl font-semibold text-text-medium tracking-tight">
                    A Clean Energy Showcase
                </h2>
            </header>
            
            <section className="max-w-4xl text-lg text-text-medium leading-8 space-y-4">
                <p>
                    We stand at a pivotal moment in the global energy landscape. The transition from fossil fuels to sustainable sources is not merely an aspiration—it is a collection of intricate engineering puzzles demanding creative and robust solutions.
                </p>
                <p>
                    This portfolio explores three innovative systems designed to harness clean, green energy from the world around us. Each activity demonstrates a practical approach to generating power from the planet's natural forces: the kinetic power of <span className="text-amber-glow font-medium">wind</span>, the organic potential of <span className="text-amber-glow font-medium">biomass</span>, and the deep, persistent heat of the <span className="text-amber-glow font-medium">Earth</span> itself.
                </p>
                 <p>
                    Use the menu on the left to delve into each case study and discover the future of sustainable energy.
                </p>
            </section>
      
            <section>
                <h3 className="text-2xl font-semibold text-text-light mb-6">Did You Know?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard 
                        title="Wind Energy"
                        content="Modern wind turbines are marvels of engineering, with blades longer than a Boeing 747's wingspan, capable of powering thousands of homes with a single unit."
                        className="animate-float-up"
                    />
                    <StatCard 
                        title="Biomass Potential"
                        content="The energy potential from agricultural waste (biomass) is immense, with the capacity to significantly reduce reliance on coal and power millions of rural homes."
                        className="animate-float-up-delay-1"
                    />
                    <StatCard 
                        title="Geothermal Reliability"
                        content="Geothermal power plants have an impressive uptime, often operating 24/7 with over 98% availability, making them one of the most reliable renewable energy sources."
                        className="animate-float-up-delay-2"
                    />
                </div>
            </section>
        </div>
    );
};

export default HomeContent;