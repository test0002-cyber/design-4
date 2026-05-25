'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';
import { Check, Shield, Thermometer, Zap, Settings, Award } from 'lucide-react';

const seriesData = [
  {
    id: 'lz-series',
    name: 'LZ Series',
    description: 'Our flagship premium series featuring advanced Japanese engineering with superior thermal performance and sound insulation. Designed for luxury residences and commercial spaces demanding the highest quality.',
    features: ['Multi-chamber profile design', 'Superior thermal insulation', 'Enhanced sound reduction', 'Premium hardware compatibility', 'Dual sealing system'],
    gradient: 'from-slate-800 to-slate-600',
    icon: Award,
  },
  {
    id: 'lz-smart-series',
    name: 'LZ Smart Series',
    description: 'The smart choice for modern homes combining quality with value. Features innovative design elements that make premium aluminium windows accessible for every homeowner.',
    features: ['Cost-effective premium quality', 'Smart drainage system', 'Modern slim profiles', 'Easy installation', 'Low maintenance design'],
    gradient: 'from-zinc-800 to-zinc-600',
    icon: Zap,
  },
  {
    id: 'standard-series',
    name: 'Standard Series',
    description: 'Reliable and robust windows built for everyday performance. The standard series delivers consistent quality and durability that meets all essential requirements.',
    features: ['Proven durability', 'Standard thermal performance', 'Wide range of configurations', 'Quick delivery', 'Competitive pricing'],
    gradient: 'from-neutral-800 to-neutral-600',
    icon: Settings,
  },
  {
    id: 'thermal-break-series',
    name: 'Thermal Break Series',
    description: 'Engineered for extreme climates with polyamide thermal break technology. Provides exceptional insulation that significantly reduces energy costs and improves indoor comfort.',
    features: ['Polyamide thermal break', 'Up to 50% energy savings', 'Condensation resistance', 'All-climate performance', 'Green building certified'],
    gradient: 'from-emerald-900 to-emerald-700',
    icon: Thermometer,
  },
];

export default function SeriesSection() {
  const { colorTheme, designTheme } = useTheme();
  const [activeTab, setActiveTab] = useState(0);
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

  const activeSeries = seriesData[activeTab];

  return (
    <section id="designs" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <span
            className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-4"
            style={{ color: colorTheme.accent, background: `${colorTheme.accent}15` }}
          >
            Product Series
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900"
            style={{ fontWeight: 'var(--design-heading-weight, 700)' }}
          >
            Choose Your Series
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each series is engineered for specific needs, from premium luxury to energy efficiency.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {seriesData.map((series, i) => (
            <button
              key={series.id}
              onClick={() => setActiveTab(i)}
              className="px-5 py-2.5 text-sm font-semibold transition-all duration-300"
              style={{
                borderRadius: designTheme.buttonRadius,
                background: i === activeTab ? colorTheme.accent : 'transparent',
                color: i === activeTab ? 'white' : colorTheme.primary,
                border: `2px solid ${i === activeTab ? colorTheme.accent : colorTheme.primary}20`,
                boxShadow: i === activeTab ? `0 4px 12px ${colorTheme.accent}30` : 'none',
              }}
            >
              {series.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
          key={activeTab}
        >
          {/* Left: Image placeholder */}
          <div
            className={`relative h-64 md:h-auto min-h-[300px] bg-gradient-to-br ${activeSeries.gradient} flex items-center justify-center overflow-hidden`}
            style={{
              borderRadius: designTheme.cardRadius,
              boxShadow: designTheme.cardShadow,
            }}
          >
            {(() => {
              const Icon = activeSeries.icon;
              return <Icon className="w-24 h-24 text-white/30" />;
            })()}
            <div
              className="absolute bottom-4 left-4 px-4 py-2 text-white font-bold text-lg"
              style={{ background: `${colorTheme.accent}cc`, borderRadius: designTheme.cardRadius }}
            >
              {activeSeries.name}
            </div>
          </div>

          {/* Right: Description & Features */}
          <div className="flex flex-col justify-center">
            <h3
              className="text-2xl md:text-3xl mb-4 text-gray-900"
              style={{ fontWeight: 'var(--design-heading-weight, 700)' }}
            >
              {activeSeries.name}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {activeSeries.description}
            </p>
            <ul className="space-y-3 mb-8">
              {activeSeries.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: `${colorTheme.accent}15` }}
                  >
                    <Check className="w-3.5 h-3.5" style={{ color: colorTheme.accent }} />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold self-start transition-all hover:scale-105"
              style={{
                background: colorTheme.accent,
                borderRadius: designTheme.buttonRadius,
              }}
            >
              <Shield className="w-5 h-5" /> Explore {activeSeries.name}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
