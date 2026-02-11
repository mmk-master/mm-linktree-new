import React, { useState, useEffect } from 'react';
import { Property } from '@/lib/types';
import { PROPERTIES } from '@/lib/constants';
import PropertySelector from '@/components/PropertySelector';
import LandingPage from '@/components/LandingPage';

const Index: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const hostId = params.get('h');
    if (hostId) {
      const found = PROPERTIES.find(p => p.id === hostId);
      if (found) {
        setSelectedProperty(found);
        setIsStandalone(true);
      }
    }
  }, []);

  const handleSelectProperty = (property: Property) => {
    setSelectedProperty(property);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const handleBackToSelector = () => {
    if (!isStandalone) {
      setSelectedProperty(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Desktop: side-by-side layout */}
      <div className="hidden lg:flex min-h-screen items-stretch">
        {/* Left branding panel */}
        <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden bg-[#111]">
          <div
            className="absolute inset-0 opacity-[0.03] font-display text-[12vw] leading-none whitespace-nowrap select-none pointer-events-none flex flex-col justify-center gap-4 text-white"
          >
            <span>MAD MONKEY MAD MONKEY</span>
            <span>MAD MONKEY MAD MONKEY</span>
            <span>MAD MONKEY MAD MONKEY</span>
            <span>MAD MONKEY MAD MONKEY</span>
            <span>MAD MONKEY MAD MONKEY</span>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6 px-12 max-w-lg text-center">
            <div className="w-40 h-40 bg-yellow-400 border-4 border-white transform -rotate-6 shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] flex items-center justify-center p-3">
              <img
                src="https://picsum.photos/seed/madmonkey-main/400"
                alt="Mad Monkey Logo"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
            <h1 className="font-display text-7xl text-white tracking-tighter uppercase leading-none italic">
              MAD <span className="text-yellow-400">MONKEY</span>
            </h1>
            <p className="font-handwritten text-4xl text-pink-400">
              Southeast Asia's Wildest Stays
            </p>
            <div className="flex gap-3 mt-4">
              {['🇰🇭', '🇮🇩', '🇵🇭', '🇹🇭', '🇻🇳', '🇱🇦'].map((flag, i) => (
                <span key={i} className="text-3xl">{flag}</span>
              ))}
            </div>
            <p className="text-white/30 text-xs uppercase tracking-[0.3em] mt-6 font-bold">
              22 properties · 6 countries · 1 vibe
            </p>
          </div>
        </div>

        {/* Right: mobile container */}
        <div className="w-[430px] min-h-screen border-l-4 border-white/10 overflow-y-auto">
          {selectedProperty ? (
            <LandingPage
              property={selectedProperty}
              onBack={handleBackToSelector}
              isStandalone={isStandalone}
            />
          ) : (
            <PropertySelector onSelect={handleSelectProperty} />
          )}
        </div>
      </div>

      {/* Mobile: full-width */}
      <div className="lg:hidden min-h-screen">
        {selectedProperty ? (
          <LandingPage
            property={selectedProperty}
            onBack={handleBackToSelector}
            isStandalone={isStandalone}
          />
        ) : (
          <PropertySelector onSelect={handleSelectProperty} />
        )}
      </div>
    </div>
  );
};

export default Index;
