'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { Check, Shield, ArrowRight } from 'lucide-react';

const CDN = 'https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/';

const seriesData = [
  {
    id: 'grants',
    name: 'Grants',
    tagline: 'Break The Norm With Fine Line Of Design & Function',
    description: 'The Grants Series represents our flagship collection — where minimalist design meets cutting-edge functionality. Featuring ultra-slim profiles with maximum glass area, the Grants Series delivers panoramic views and seamless indoor-outdoor living. Engineered with Japanese precision, every detail is crafted to break the norm.',
    features: [
      'Ultra-slim profile design with fine lines',
      'Superior thermal insulation technology',
      'Enhanced sound reduction up to 40dB',
      'Multi-point locking system for security',
      'Dual sealing system for weather protection',
      'Available in 100+ colour options',
    ],
    image: CDN + 'wp-content/uploads/2025/04/AP-Palazzo-70.jpg',
  },
  {
    id: 'atis',
    name: 'ATIS',
    tagline: 'Framing The Beauty Of Living',
    description: 'The ATIS Series is designed to frame the beauty of your living spaces. With elegant profiles and premium finishes, ATIS transforms ordinary openings into stunning architectural features. Experience the perfect balance of aesthetics and performance, backed by TOSTEM\'s Japanese engineering heritage.',
    features: [
      'Elegant profile with premium finishes',
      'Advanced drainage system',
      'High-performance weather sealing',
      'Smooth sliding mechanism',
      'Low maintenance design',
      'Wide range of design configurations',
    ],
    image: CDN + 'wp-content/uploads/2025/04/Chantra-Khiri-20.jpg',
  },
  {
    id: 'we-plus',
    name: 'We Plus',
    tagline: 'Performance Oriented Design',
    description: 'We Plus Series delivers performance-oriented design for homeowners who demand the best. Built with advanced engineering and premium materials, this series excels in thermal performance, sound insulation, and security — all wrapped in a sleek, modern profile that complements any architecture.',
    features: [
      'Performance-driven engineering',
      'Superior thermal break technology',
      'High wind load resistance',
      'Premium hardware compatibility',
      'Enhanced security features',
      'Energy-efficient design',
    ],
    image: CDN + 'wp-content/uploads/2025/04/SJP1631-Enhanced-NR-Edit.jpg',
  },
  {
    id: 'we-70',
    name: 'We 70',
    tagline: 'Design Meets Performance & Reliability',
    description: 'We 70 Series is where design meets performance and reliability. This versatile series offers a comprehensive range of window and door configurations suitable for both residential and commercial applications. Trusted by architects and builders across India for consistent quality and lasting performance.',
    features: [
      'Versatile design configurations',
      'Proven reliability across Indian climates',
      'Excellent value for premium quality',
      'Wide availability across 860+ cities',
      'Quick installation system',
      'Comprehensive warranty coverage',
    ],
    image: CDN + 'wp-content/uploads/2025/04/Baan-Nawat-43.jpg',
  },
  {
    id: 'giesta',
    name: 'Giesta',
    tagline: 'Steel Entrance Doors',
    description: 'GIESTA brings Italian-designed steel entrance doors to Indian homes. Combining the strength of steel with sophisticated design, GIESTA doors create an impressive first impression while providing unmatched security and durability. Each door is a statement piece that reflects your refined taste.',
    features: [
      'Italian design excellence',
      'Robust steel construction',
      'Multi-point locking for maximum security',
      'Premium powder-coated finish',
      'Fire-rated options available',
      'Customizable design panels',
    ],
    image: CDN + 'wp-content/uploads/2025/04/DSC03783-1.jpg',
  },
];

export default function SeriesSection() {
  const { colorTheme, designTheme } = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [visible, setVisible] = useState(false);
  const [contentKey, setContentKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setActiveTab(index);
    setContentKey((prev) => prev + 1);
  };

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
            Each series is engineered for specific needs — from premium luxury to reliable performance.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {seriesData.map((series, i) => (
            <button
              key={series.id}
              onClick={() => handleTabChange(i)}
              className="px-5 py-2.5 text-sm font-semibold transition-all duration-300"
              style={{
                borderRadius: designTheme.buttonRadius,
                background: i === activeTab ? colorTheme.accent : 'transparent',
                color: i === activeTab ? 'white' : colorTheme.primary,
                border: `2px solid ${i === activeTab ? colorTheme.accent : colorTheme.primary}20`,
                boxShadow: i === activeTab ? `0 4px 12px ${colorTheme.accent}30` : 'none',
                transform: i === activeTab ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {series.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          className="grid md:grid-cols-2 gap-8 items-stretch"
          key={contentKey}
        >
          {/* Left: Image */}
          <div
            className="relative h-64 md:h-auto min-h-[350px] overflow-hidden animate-reveal-left"
            style={{
              borderRadius: designTheme.cardRadius,
              boxShadow: designTheme.cardShadow,
            }}
          >
            <Image
              src={activeSeries.image}
              alt={activeSeries.name + ' Series'}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(to top, ${colorTheme.primaryDark}cc, transparent 60%)` }}
            />
            {/* Series badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <span
                className="inline-block px-4 py-2 text-white font-bold text-xl tracking-wide"
                style={{ background: `${colorTheme.accent}dd`, borderRadius: designTheme.cardRadius }}
              >
                {activeSeries.name} Series
              </span>
              <p className="text-white/80 text-sm mt-2 max-w-xs">{activeSeries.tagline}</p>
            </div>
          </div>

          {/* Right: Description & Features */}
          <div className="flex flex-col justify-center animate-reveal-right">
            <h3
              className="text-2xl md:text-3xl mb-2 text-gray-900"
              style={{ fontWeight: 'var(--design-heading-weight, 700)' }}
            >
              {activeSeries.name} Series
            </h3>
            <p
              className="text-sm font-semibold mb-4"
              style={{ color: colorTheme.accent }}
            >
              {activeSeries.tagline}
            </p>
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
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold self-start transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: colorTheme.accent,
                borderRadius: designTheme.buttonRadius,
                boxShadow: `0 4px 15px ${colorTheme.accent}30`,
              }}
            >
              <Shield className="w-5 h-5" /> Explore {activeSeries.name} Series <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
