import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import ActivityContent from './components/ActivityContent';
import HomeContent from './components/HomeContent';
import { ACTIVITIES_DATA } from './constants';

const App: React.FC = () => {
  const [activeActivityId, setActiveActivityId] = useState<number>(0);

  const handleScrollToActivity = (id: number) => {
    const element = document.getElementById(`activity-${id}`);
    if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 60; // 60px offset from top
        window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  const handleScroll = useCallback(() => {
    let closestActivityId = 0;
    let minDistance = Infinity;
    const viewportCenter = window.innerHeight / 2;

    const allSections = [{ id: 0 }, ...ACTIVITIES_DATA];

    for (const activity of allSections) {
      const element = document.getElementById(`activity-${activity.id}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestActivityId = activity.id;
        }
      }
    }
    setActiveActivityId(closestActivityId);
  }, []);

  useEffect(() => {
    let scrollTimeout: number;
    const scrollListener = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = window.setTimeout(handleScroll, 100);
    };
    
    window.addEventListener('scroll', scrollListener, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', scrollListener);
      clearTimeout(scrollTimeout);
    };
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-deep-navy text-text-light selection:bg-amber-glow/30 relative">
      <div 
        className="fixed inset-0 z-0 h-full w-full animate-aurora"
        style={{
          backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(142, 202, 230, 0.15), transparent), radial-gradient(ellipse 80% 60% at 50% 120%, rgba(255, 195, 0, 0.1), transparent)',
          backgroundSize: '200% 200%',
        }}
      ></div>
      
      <div className="relative z-10">
        <Sidebar
          activities={ACTIVITIES_DATA}
          activeActivity={activeActivityId}
          setActiveActivity={handleScrollToActivity}
        />
        
        <main className="ml-72 transition-all duration-300">
          <div className="max-w-7xl mx-auto">
            <section id="activity-0" className="min-h-screen flex flex-col justify-center py-24">
              <HomeContent />
            </section>
            {ACTIVITIES_DATA.map((activity) => (
              <section id={`activity-${activity.id}`} key={activity.id} className="min-h-screen flex flex-col justify-center py-24">
                <ActivityContent activity={activity} />
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;