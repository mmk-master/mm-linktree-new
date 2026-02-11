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
      <div className="hidden lg:flex min-h-screen items-center justify-center">
        <div className="w-[430px] min-h-screen overflow-y-auto">
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
