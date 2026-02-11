import React from 'react';
import { PROPERTIES } from '@/lib/constants';
import { Property } from '@/lib/types';

interface PropertySelectorProps {
  onSelect: (property: Property) => void;
}

const PropertySelector: React.FC<PropertySelectorProps> = ({ onSelect }) => {
  return (
    <div className="min-h-screen bg-[#111] text-white p-8 flex flex-col items-center relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 font-display text-[20vw] whitespace-nowrap overflow-hidden leading-none select-none">
        MAD MONKEY MAD MONKEY MAD MONKEY
      </div>

      <div className="w-32 h-32 bg-yellow-400 border-4 border-white mb-10 transform -rotate-6 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] flex items-center justify-center p-2 z-10">
        <img
          src="https://picsum.photos/seed/madmonkey-main/400"
          alt="Mad Monkey Logo"
          className="w-full h-full object-cover grayscale contrast-125"
        />
      </div>

      <h1 className="font-display text-6xl mb-2 text-center tracking-tighter uppercase leading-none z-10 italic">
        SELECT YOUR <span className="text-yellow-400">DESTINATION</span>
      </h1>
      <p className="font-handwritten text-3xl text-pink-400 mb-12 z-10">Where's the party at?</p>

      <div className="w-full max-w-md space-y-6 pb-20 z-10">
        {PROPERTIES.map((prop) => (
          <button
            key={prop.id}
            onClick={() => onSelect(prop)}
            className="w-full py-6 px-10 bg-white hover:bg-yellow-400 transition-all border-4 border-black text-left flex justify-between items-center group active:scale-95 shadow-[8px_8px_0px_0px_rgba(255,20,147,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
          >
            <div>
              <span className="font-display text-4xl tracking-tighter block uppercase leading-none mb-1 text-black transition-colors">{prop.name}</span>
              <span className="text-[12px] text-black/50 font-black uppercase tracking-[0.2em]">{prop.country}</span>
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
