import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PROPERTIES } from '@/lib/constants';
import LandingPage from '@/components/LandingPage';

const Index: React.FC = () => {
  const { locationId } = useParams<{ locationId: string }>();
  const property = PROPERTIES.find(p => p.id === locationId);

  if (!property) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <LandingPage property={property} onBack={() => {}} isStandalone />
    </div>
  );
};

export default Index;
