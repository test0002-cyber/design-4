'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { Palette, Check } from 'lucide-react';

const CDN = 'https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/';

const colourOptions = [
  { name: 'Anthracite Grey', hex: '#383838' },
  { name: 'Jet Black', hex: '#0a0a0a' },
  { name: 'White', hex: '#f5f5f5' },
  { name: 'Cream', hex: '#f5f0e1' },
  { name: 'Signal White', hex: '#ececec' },
  { name: 'Window Grey', hex: '#7a7a7a' },
  { name: 'Agate Grey', hex: '#9e9e9e' },
  { name: 'Sea Blue', hex: '#2e5c8a' },
  { name: 'Steel Blue', hex: '#4682b4' },
  { name: 'Sapphire Blue', hex: '#0f52ba' },
  { name: 'Oak', hex: '#8b6914' },
  { name: 'Walnut', hex: '#5c4033' },
  { name: 'Mahogany', hex: '#4e0707' },
  { name: 'Nutmeg', hex: '#8b4513' },
  { name: 'Teak', hex: '#a87c50' },
  { name: 'Bronze', hex: '#cd7f32' },
  { name: 'Copper', hex: '#b87333' },
  { name: 'Gold', hex: '#c5a832' },
  { name: 'Silver', hex: '#c0c0c0' },
  { name: 'Champagne', hex: '#f7e7ce' },
  { name: 'Rust Red', hex: '#8b2500' },
  { name: 'Forest Green', hex: '#228b22' },
  { name: 'Slate Grey', hex: '#708090' },
  { name: 'Pearl', hex: '#eae0c8' },
];

export default function ColourSection() {
  const { colorTheme, designTheme } = useTheme();
  const [selectedColour, setSelectedColour] = useState(colourOptions[0]);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="colour" ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <span
            className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-4"
            style={{ color: colorTheme.accent, background: `${colorTheme.accent}15` }}
          >
            Colour Options
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900"
            style={{ fontWeight: 'var(--design-heading-weight, 700)' }}
          >
            100+ Premium Finishes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our extensive palette of colours and wood finishes to perfectly match your aesthetic vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Colour Preview */}
          <div
            className={`lg:col-span-1 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div
              className="sticky top-24 overflow-hidden"
              style={{
                borderRadius: designTheme.cardRadius,
                boxShadow: designTheme.cardShadow,
                border: designTheme.cardBorder,
              }}
            >
              {/* Window frame preview with real image */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Palette className="w-5 h-5" style={{ color: colorTheme.accent }} />
                  <span className="text-sm font-semibold text-gray-700">Colour Preview</span>
                </div>

                {/* Simulated window frame with background image */}
                <div className="relative bg-gradient-to-br from-sky-200 to-sky-400 h-52 mb-4 overflow-hidden">
                  <Image
                    src={CDN + 'wp-content/uploads/2020/08/ez-banner-slide-1171x506.jpg'}
                    alt="Colour preview background"
                    fill
                    unoptimized
                    className="object-cover opacity-30"
                    sizes="33vw"
                  />
                  {/* Window frame overlay */}
                  <div
                    className="absolute inset-2 border-4 transition-colors duration-500"
                    style={{ borderColor: selectedColour.hex }}
                  >
                    {/* Cross bars */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full" style={{ background: selectedColour.hex }} />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-full" style={{ background: selectedColour.hex }} />
                  </div>
                  {/* Sky reflection */}
                  <div className="absolute top-4 right-4 w-12 h-8 bg-white/30 rounded-full" />
                </div>

                <div className="text-center">
                  <div
                    className="w-16 h-16 mx-auto rounded-full border-4 border-white shadow-lg mb-3 transition-colors duration-500"
                    style={{ background: selectedColour.hex }}
                  />
                  <div className="font-bold text-gray-900">{selectedColour.name}</div>
                  <div className="text-sm text-gray-500">{selectedColour.hex}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Colour Swatches Grid */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div
              className="p-6"
              style={{
                borderRadius: designTheme.cardRadius,
                boxShadow: designTheme.cardShadow,
                border: designTheme.cardBorder,
                background: designTheme.cardBg,
              }}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-6">Select a Colour</h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                {colourOptions.map((colour) => (
                  <button
                    key={colour.name}
                    onClick={() => setSelectedColour(colour)}
                    className="group relative flex flex-col items-center gap-2 p-2 transition-all duration-300 hover:scale-110"
                    title={colour.name}
                  >
                    <div
                      className="w-12 h-12 rounded-lg border-2 transition-all duration-300 flex items-center justify-center"
                      style={{
                        background: colour.hex,
                        borderColor: selectedColour.name === colour.name ? colorTheme.accent : 'rgba(0,0,0,0.1)',
                        boxShadow: selectedColour.name === colour.name ? `0 0 0 3px ${colorTheme.accent}40` : 'none',
                        borderRadius: designTheme.cardRadius,
                      }}
                    >
                      {selectedColour.name === colour.name && (
                        <Check
                          className="w-5 h-5"
                          style={{ color: isLightColor(colour.hex) ? '#333' : '#fff' }}
                        />
                      )}
                    </div>
                    <span className="text-[10px] text-gray-600 text-center leading-tight line-clamp-2">
                      {colour.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
}
