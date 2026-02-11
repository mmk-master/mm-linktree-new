import React from 'react';
import madMonkeyLogo from '@/assets/mad-monkey-logo.png';
import { Property } from '@/lib/types';
import { THEMES } from '@/lib/constants';

interface LandingPageProps {
  property: Property;
  onBack: () => void;
  isStandalone?: boolean;
}

const LandingPage: React.FC<LandingPageProps> = ({ property, onBack, isStandalone = false }) => {
  const theme = THEMES[property.category];
  const utmCampaign = property.name.toLowerCase().replace(/\s+/g, '_');
  const utmSuffix = `?utm_source=property_qr&utm_medium=linkinbio&utm_campaign=${utmCampaign}`;
  const cleanHandle = property.name.toLowerCase().replace(/\s+/g, '');

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center pb-12 relative"
      style={{ background: `linear-gradient(135deg, ${theme.gradientFrom}dd, ${theme.gradientTo}dd)` }}
    >
      {/* Back button */}
      {!isStandalone && (
        <button
          onClick={onBack}
          className="absolute top-4 left-4 p-3 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all z-40"
          aria-label="Back to selection"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      )}

      <div className="w-full max-w-md px-6 flex flex-col gap-8 mt-20 z-10">
        {/* A. THE HEADER */}
        <section className="bg-white border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center relative">
          <div className="absolute -top-4 -right-4 bg-black text-white px-4 py-1 font-bold text-xl rotate-[12deg] shadow-lg z-20 border-2 border-white pointer-events-none uppercase tracking-tighter">
            MAD VIBES
          </div>

          <div className="w-32 h-32 rounded-full border-4 border-black mb-6 transform hover:scale-105 transition-transform shadow-lg overflow-hidden flex items-center justify-center bg-white">
             <img
               src={madMonkeyLogo}
               alt="Mad Monkey Logo"
               className="w-2/3 h-2/3 object-contain"
             />
          </div>

          <h1 className="font-bold text-lg text-neutral-900 mb-1 tracking-tight w-full text-center">
            @madmonkey{cleanHandle}
          </h1>

          <p className="font-medium text-[10px] text-neutral-500 mb-6 uppercase tracking-[0.2em]">
            Mad Monkey {property.name}, {property.country}
          </p>

          <div className="flex justify-center gap-6">
            <a href={`https://instagram.com/madmonkey${property.handle}`} target="_blank" rel="noopener noreferrer" className="p-4 bg-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:scale-110 transition-all rounded-full" aria-label="Instagram">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.312.06-2.208.267-2.993.573-.81.314-1.498.736-2.183 1.421-.686.685-1.107 1.373-1.421 2.183-.306.785-.513 1.681-.573 2.993-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.06 1.312.267 2.208.573 2.993.314.81.736 1.498 1.421 2.183.685.686 1.373 1.107 2.183 1.421.785.306 1.681.513 2.993.573 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.312-.06 2.208-.267 2.993-.573.81-.314 1.498-.736 2.183-1.421.686-.685 1.107-1.373 1.421-2.183.306-.785.513-1.681.573-2.993.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.06-1.312-.267-2.208-.573-2.993-.314-.81-.736-1.498-1.421-2.183-.685-.686-1.373-1.107-2.183-1.421-.785-.306-1.681-.513-2.993-.573-1.28-.058-1.688-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href={`https://tiktok.com/@madmonkey${property.handle}`} target="_blank" rel="noopener noreferrer" className="p-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-110 transition-all rounded-full flex items-center justify-center" aria-label="TikTok">
              <svg className="w-6 h-6 fill-black flex-shrink-0" viewBox="0 0 448 512"><path d="M448 209.9a210.1 210.1 0 01-122.8-39.3v178.8A162.6 162.6 0 11185 188.3v89.9a74.6 74.6 0 1052.2 71.2V0h88a121 121 0 00122.8 121.3z"/></svg>
            </a>
          </div>
        </section>

        {/* B. THE UTILITY STACK */}
        <section className="flex flex-col gap-4">
          <a href="#" className="w-full py-5 px-8 bg-white border-4 border-black flex items-center justify-between font-medium text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase tracking-tight text-lg">
            <span>Connect to WiFi</span>
            <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-black animate-pulse"></div>
          </a>
          <a href="https://madmonkeyhostels.com/check-in" className="w-full py-5 px-8 bg-yellow-400 border-4 border-black flex items-center justify-between font-medium text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase tracking-tight text-lg">
            <div className="flex flex-col">
              <span>Skip the Queue</span>
              <span className="text-base normal-case tracking-normal opacity-70">Check-in Online</span>
            </div>
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
          </a>
          <a href={`https://madmonkeyhostels.com/loyalty${utmSuffix}`} className="w-full py-5 px-8 bg-pink-500 border-4 border-black flex items-center justify-between font-medium text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase tracking-tight text-lg">
            <span>Unlock Loyalty Perks</span>
            <span className="text-xl">⚡️</span>
          </a>
          <a href="https://wa.me/madmonkey" className="w-full py-5 px-8 bg-green-400 border-4 border-black flex items-center justify-between font-medium text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase tracking-tight text-lg">
            <span>Join the WhatsApp Group</span>
            <svg className="w-6 h-6 fill-black" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
           </a>
          <a href="https://madmonkey.celitech.com/" className="w-full py-5 px-8 bg-blue-500 border-4 border-black flex items-center justify-between font-medium text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase tracking-tight text-lg">
            <span>Mad Monkey eSIM</span>
            <span className="text-xl">📱</span>
          </a>
        </section>

        {/* C. THE "BOOK DIRECT" ANCHOR */}
        <section className="bg-black text-white border-4 border-white p-10 shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] flex flex-col items-center text-center relative overflow-hidden group mt-4">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rotate-45 transform translate-x-10 translate-y-[-20px]"></div>

          <h2 className="font-bold text-3xl mb-4 tracking-tight leading-none uppercase">
            20% OFF <span className="text-yellow-400">YOUR STAY</span>
          </h2>

          <p className="text-sm text-white/90 mb-8 px-2 leading-relaxed font-medium">
            Book direct to score the lowest guaranteed prices and a <span className="text-yellow-400 font-bold">20% discount on us</span>. Plus, stay flexible with easy, free cancellation.
          </p>

          <div className="relative w-full">
            <div className="absolute top-[-20px] left-[-20px] bg-yellow-400 text-black px-4 py-1 font-bold text-sm rotate-[-8deg] shadow-lg z-10 border-2 border-black tracking-tighter uppercase">
              BEST PRICE
            </div>

            <a
              href={`https://madmonkeyhostels.com/bookings${utmSuffix}`}
              className="block w-full py-6 bg-white text-black font-medium text-2xl tracking-widest text-center shadow-[6px_6px_0px_0px_rgba(255,20,147,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase"
            >
              BOOK MY BED
            </a>
          </div>
        </section>

        {/* D. THE FOOTER */}
        <footer className="mt-12 mb-8 flex flex-col items-center gap-8">
          <div className="relative">
            <p className="font-bold text-3xl text-black tracking-tighter uppercase">JOIN THE CHAOS</p>
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-black"></div>
          </div>

          <div className="flex gap-14">
            <a href="https://instagram.com/madmonkeyhostels" className="hover:scale-125 transition-all filter drop-shadow-md" aria-label="Instagram">
              <svg className="w-9 h-9 fill-black" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.312.06-2.208.267-2.993.573-.81.314-1.498.736-2.183 1.421-.686.685-1.107 1.373-1.421 2.183-.306.785-.513 1.681-.573 2.993-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.06 1.312.267 2.208.573 2.993.314.81.736 1.498 1.421 2.183.685.686 1.373 1.107 2.183 1.421.785.306 1.681.513 2.993.573 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.312-.06 2.208-.267 2.993-.573.81-.314 1.498-.736 2.183-1.421.686-.685 1.107-1.373 1.421-2.183.306-.785.513-1.681.573-2.993.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.06-1.312-.267-2.208-.573-2.993-.314-.81-.736-1.498-1.421-2.183-.685-.686-1.373-1.107-2.183-1.421-.785-.306-1.681-.513-2.993-.573-1.28-.058-1.688-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://tiktok.com/@madmonkeyhostels" className="hover:scale-125 transition-all filter drop-shadow-md" aria-label="TikTok">
              <svg className="w-9 h-9 fill-black" viewBox="0 0 448 512"><path d="M448 209.9a210.1 210.1 0 01-122.8-39.3v178.8A162.6 162.6 0 11185 188.3v89.9a74.6 74.6 0 1052.2 71.2V0h88a121 121 0 00122.8 121.3z"/></svg>
            </a>
          </div>

          <p className="font-bold text-[10px] opacity-50 text-black uppercase tracking-[0.2em] mt-4">See you at the bar! 🍻</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
