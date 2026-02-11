import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Property } from '@/lib/types';
import { PROPERTIES } from '@/lib/constants';
import PropertySelector from '@/components/PropertySelector';
import LandingPage from '@/components/LandingPage';

const Index: React.FC = () => {
  const { locationId } = useParams<{ locationId?: string }>();
  const navigate = useNavigate();
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    if (locationId) {
      const found = PROPERTIES.find(p => p.id === locationId);
      if (found) {
        setSelectedProperty(found);
        setIsStandalone(true);
      }
    } else {
      // Also support legacy ?h= param
      const params = new URLSearchParams(window.location.search);
      const hostId = params.get('h');
      if (hostId) {
        const found = PROPERTIES.find(p => p.id === hostId);
        if (found) {
          setSelectedProperty(found);
          setIsStandalone(true);
        }
      }
    }
  }, [locationId]);

  const handleSelectProperty = (property: Property) => {
    setSelectedProperty(property);
    navigate(`/${property.id}`);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const handleBackToSelector = () => {
    if (!isStandalone) {
      setSelectedProperty(null);
      navigate('/');
    }
  };

  const content = selectedProperty ? (
    <LandingPage
      property={selectedProperty}
      onBack={handleBackToSelector}
      isStandalone={isStandalone}
    />
  ) : (
    <PropertySelector onSelect={handleSelectProperty} />
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {content}
    </div>
  );
};

export default Index;
