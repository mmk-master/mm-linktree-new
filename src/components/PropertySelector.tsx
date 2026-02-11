import React from 'react';
import { Property, PropertyCategory } from '@/lib/types';
import { PROPERTIES, THEMES, CATEGORY_EMOJIS } from '@/lib/constants';

interface PropertySelectorProps {
  onSelect: (property: Property) => void;
}

const PropertySelector: React.FC<PropertySelectorProps> = ({ onSelect }) => {
  const grouped = PROPERTIES.reduce((acc, prop) => {
    if (!acc[prop.category]) acc[prop.category] = [];
    acc[prop.category].push(prop);
    return acc;
  }, {} as Record<PropertyCategory, Property[]>);

  const categoryOrder: PropertyCategory[] = [
    PropertyCategory.BEACH,
    PropertyCategory.ADVENTURE,
    PropertyCategory.CITY,
    PropertyCategory.HANOI,
    PropertyCategory.BANGKOK,
    PropertyCategory.MANILA,
  ];

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <div className="relative overflow-hidden px-6 pt-10 pb-8">
        <div
          className="absolute inset-0 opacity-20 animate-blob-move"
          style={{
            background: 'radial-gradient(circle at 30% 50%, hsl(var(--primary)) 0%, transparent 70%)',
          }}
        />
        <div className="relative">
          <h1 className="font-display text-6xl tracking-wide text-foreground leading-none">
            MAD MONKEY
          </h1>
          <p className="font-handwritten text-3xl text-primary -mt-1 tilt-right inline-block">
            Direct Links
          </p>
          <p className="text-muted-foreground text-sm mt-2 font-medium">
            Select a property to get started
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 space-y-6">
        {categoryOrder.map((category) => {
          const props = grouped[category];
          if (!props || props.length === 0) return null;
          const theme = THEMES[category];
          const emoji = CATEGORY_EMOJIS[category];

          return (
            <div key={category}>
              <div className="flex items-center gap-2 mb-3 px-2">
                <span className="text-xl">{emoji}</span>
                <h2
                  className="font-display text-2xl tracking-wider"
                  style={{ color: theme.primary }}
                >
                  {category.toUpperCase()}
                </h2>
                <div
                  className="flex-1 h-0.5 rounded-full opacity-30"
                  style={{ background: `linear-gradient(to right, ${theme.primary}, transparent)` }}
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {props.map((property) => (
                  <button
                    key={property.id}
                    onClick={() => onSelect(property)}
                    className="group relative overflow-hidden rounded-xl border-2 border-border bg-card p-3.5 text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                    style={{
                      borderColor: theme.primary + '30',
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`,
                      }}
                    />
                    <div className="relative">
                      <p className="font-bold text-sm text-foreground leading-tight">
                        {property.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {property.country}
                      </p>
                    </div>
                    <div
                      className="absolute top-2 right-2 w-2 h-2 rounded-full opacity-60"
                      style={{ backgroundColor: theme.primary }}
                    />
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="text-center mt-10 px-6">
        <p className="text-muted-foreground text-xs">
          🐒 Mad Monkey Hostels — Southeast Asia's wildest stays
        </p>
      </div>
    </div>
  );
};

export default PropertySelector;
