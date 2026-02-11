import React from 'react';
import { PROPERTIES } from '@/lib/constants';
import { Property } from '@/lib/types';

interface PropertySelectorProps {
  onSelect: (property: Property) => void;
}

const PropertySelector: React.FC<PropertySelectorProps> = ({ onSelect }) => {
  return (
    <div className="min-h-screen bg-[#111] text-white p-4 flex flex-col items-center relative overflow-hidden">

      <div className="w-full max-w-md space-y-6 pb-20 z-10">
        {PROPERTIES.map((prop) => (
          <button
            key={prop.id}
            onClick={() => onSelect(prop)}
            className="w-full py-6 px-10 bg-white hover:bg-yellow-400 transition-all border-4 border-black text-left flex justify-between items-center group active:scale-95 shadow-[8px_8px_0px_0px_rgba(255,20,147,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
          >
            <div className="min-w-0 flex-1 mr-3">
              <span className="font-display text-2xl sm:text-3xl tracking-tighter block uppercase leading-none mb-1 text-black transition-colors truncate">{prop.name}</span>
              <span className="text-[11px] text-black/50 font-black uppercase tracking-[0.2em]">{prop.country}</span>
            </div>
            <div className="w-14 h-14 bg-black flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertySelector;
