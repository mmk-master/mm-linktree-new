import React from 'react';
import { Property } from '@/lib/types';
import { THEMES } from '@/lib/constants';
import { ArrowLeft, ExternalLink, Instagram, MessageCircle, Calendar, MapPin, Music, Star } from 'lucide-react';

interface LandingPageProps {
  property: Property;
  onBack: () => void;
  isStandalone: boolean;
}

interface LinkItem {
  label: string;
  url: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const LandingPage: React.FC<LandingPageProps> = ({ property, onBack, isStandalone }) => {
  const theme = THEMES[property.category];

  const links: LinkItem[] = [
    {
      label: '📅 Book Now — Best Price',
      url: `https://www.madmonkeyhostels.com/${property.handle}?utm_source=linkinbio&utm_medium=social&utm_campaign=${property.id}`,
      icon: <Calendar className="w-5 h-5" />,
      highlight: true,
    },
    {
      label: '📸 Follow on Instagram',
      url: `https://instagram.com/madmonkeyhostels`,
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      label: '💬 Chat on WhatsApp',
      url: `https://wa.me/message/madmonkey${property.handle}`,
      icon: <MessageCircle className="w-5 h-5" />,
    },
    {
      label: '⭐ Leave a Review',
      url: `https://g.page/madmonkey${property.handle}`,
      icon: <Star className="w-5 h-5" />,
    },
    {
      label: '📍 Get Directions',
      url: `https://maps.google.com/?q=Mad+Monkey+${encodeURIComponent(property.name)}`,
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      label: '🎶 Our Playlist',
      url: `https://open.spotify.com/madmonkey`,
      icon: <Music className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen pb-12 relative overflow-hidden">
      {/* Background blobs */}
      <div
        className="fixed w-[500px] h-[500px] rounded-full animate-blob-move animate-pulse-glow pointer-events-none"
        style={{
          background: theme.gradientFrom,
          filter: 'blur(100px)',
          top: '-100px',
          left: '-100px',
          opacity: 0.15,
        }}
      />
      <div
        className="fixed w-[400px] h-[400px] rounded-full animate-blob-move animate-pulse-glow pointer-events-none"
        style={{
          background: theme.gradientTo,
          filter: 'blur(100px)',
          bottom: '-100px',
          right: '-100px',
          opacity: 0.15,
          animationDelay: '-5s',
        }}
      />

      {/* Back button */}
      {!isStandalone && (
        <button
          onClick={onBack}
          className="sticky top-4 left-4 z-50 ml-4 flex items-center gap-1.5 rounded-full bg-card/80 backdrop-blur-md px-3 py-1.5 text-sm text-muted-foreground border border-border hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      )}

      {/* Hero */}
      <div className="px-6 pt-8 pb-6 text-center relative">
        {/* Animated avatar circle */}
        <div
          className="mx-auto w-24 h-24 rounded-full flex items-center justify-center text-4xl animate-float neo-shadow-sm mb-4 border-4"
          style={{
            background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`,
            borderColor: theme.primary,
          }}
        >
          🐒
        </div>
        <h1 className="font-display text-5xl tracking-wide text-foreground leading-none">
          MAD MONKEY
        </h1>
        <p
          className="font-handwritten text-3xl -mt-1 tilt-right inline-block"
          style={{ color: theme.primary }}
        >
          {property.name}
        </p>
        <p className="text-muted-foreground text-sm mt-2">
          📍 {property.name}, {property.country}
        </p>
      </div>

      {/* Links */}
      <div className="px-5 space-y-3">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative block w-full rounded-2xl border-2 p-4 text-center font-bold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
              link.highlight ? 'neo-shadow' : 'neo-shadow-sm'
            }`}
            style={{
              background: link.highlight
                ? `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`
                : 'hsl(var(--card))',
              borderColor: link.highlight ? theme.primary : theme.primary + '40',
              color: link.highlight ? '#000' : 'hsl(var(--foreground))',
            }}
          >
            <span className="flex items-center justify-center gap-2">
              {link.label}
              <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </span>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-10 px-6 space-y-2">
        <p className="font-handwritten text-2xl text-muted-foreground tilt-left inline-block">
          Live wild. Stay mad. 🤙
        </p>
        <p className="text-muted-foreground text-xs">
          © Mad Monkey Hostels
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
