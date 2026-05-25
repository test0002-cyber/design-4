'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { ExternalLink, Handshake, ChevronLeft, ChevronRight } from 'lucide-react';

const CDN = 'https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/';

interface Partner {
  name: string;
  src: string;
  link: string;
  description: string;
  category: string;
}

const partners: Partner[] = [
  {
    name: 'LIXIL',
    src: CDN + 'wp-content/uploads/2020/07/lixil-sm.png',
    link: 'https://www.lixil.com/',
    description: 'Global leader in housing and building materials, TOSTEM\'s parent company driving innovation across living spaces worldwide.',
    category: 'Parent Company',
  },
  {
    name: 'TOSTEM',
    src: CDN + 'wp-content/uploads/2020/07/tostem-sm.png',
    link: 'https://www.tostem.com/en/',
    description: 'Japan\'s premier aluminium window and door brand, bringing 40+ years of precision engineering to the Indian market.',
    category: 'Core Brand',
  },
  {
    name: 'GROHE',
    src: CDN + 'wp-content/uploads/2020/07/grohe-sm.png',
    link: 'https://www.grohe.com/en/corporate/homepage.html',
    description: 'World-leading premium brand for bathroom solutions and kitchen fittings, renowned for German engineering and sustainable design.',
    category: 'LIXIL Group',
  },
  {
    name: 'American Standard',
    src: CDN + 'wp-content/uploads/2020/07/american-s-sm.png',
    link: 'https://www.americanstandard.in/',
    description: 'Iconic American brand offering high-quality bathroom and kitchen products, combining innovation with timeless design for modern Indian homes.',
    category: 'LIXIL Group',
  },
  {
    name: 'INAX',
    src: CDN + 'wp-content/uploads/2020/07/inax-sm.png',
    link: 'https://www.inax.com/',
    description: 'Japan\'s leading brand for premium bathroom fixtures and tiles, known for exquisite craftsmanship and cutting-edge technology.',
    category: 'LIXIL Group',
  },
  {
    name: 'PERMA',
    src: CDN + 'wp-content/uploads/2020/07/lixil-sm.png',
    link: 'https://www.lixil.com/',
    description: 'LIXIL\'s specialised brand for construction materials and housing solutions, supporting builders with comprehensive building systems.',
    category: 'LIXIL Group',
  },
];

export default function PartnersSection() {
  const { colorTheme, designTheme } = useTheme();
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-scroll for mobile
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let animFrame: number;
    let scrollDirection = 1;
    const scroll = () => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        scrollDirection = -1;
      } else if (container.scrollLeft <= 0) {
        scrollDirection = 1;
      }
      container.scrollLeft += 0.5 * scrollDirection;
      animFrame = requestAnimationFrame(scroll);
    };
    animFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animFrame);
  }, [visible]);

  const designId = designTheme.id;

  // ===== CLASSIC LAYOUT =====
  const renderClassic = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {partners.map((partner, i) => (
        <div
          key={partner.name}
          className={`group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: `${i * 100}ms` }}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <a
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center p-6 transition-all duration-400 hover:-translate-y-2"
            style={{
              borderRadius: designTheme.cardRadius,
              boxShadow: hoveredIndex === i ? designTheme.cardHoverShadow : designTheme.cardShadow,
              border: designTheme.cardBorder,
              background: designTheme.cardBg,
            }}
          >
            <div className="flex justify-center mb-4">
              <Image
                src={partner.src}
                alt={partner.name}
                width={80}
                height={32}
                unoptimized
                className="h-8 w-auto transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </div>
            <h4 className="text-sm font-bold text-gray-900 mb-1">{partner.name}</h4>
            <span
              className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full"
              style={{ color: colorTheme.accent, background: `${colorTheme.accent}15` }}
            >
              {partner.category}
            </span>
          </a>
        </div>
      ))}
    </div>
  );

  // ===== MODERN MINIMAL LAYOUT =====
  const renderModernMinimal = () => (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-8 md:gap-12 justify-center flex-wrap">
        {partners.map((partner, i) => (
          <div
            key={partner.name}
            className={`group transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 transition-all duration-300 hover:scale-105"
              style={{ borderRadius: designTheme.buttonRadius }}
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={60}
                height={24}
                unoptimized
                className="h-6 w-auto opacity-50 group-hover:opacity-100 transition-opacity duration-500"
              />
              <span className="text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors duration-300">
                {partner.name}
              </span>
            </a>
          </div>
        ))}
      </div>
      {/* Description row */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {partners.slice(0, 3).map((partner, i) => (
          <div
            key={partner.name + '-desc'}
            className={`p-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${(i + 6) * 100}ms`, borderRadius: designTheme.cardRadius }}
          >
            <p className="text-xs text-gray-500 leading-relaxed">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // ===== BOLD & IMPACTFUL LAYOUT =====
  const renderBoldImpactful = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {partners.map((partner, i) => (
        <div
          key={partner.name}
          className={`group relative transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 ' + (i % 2 === 0 ? '-translate-x-12' : 'translate-x-12')}`}
          style={{ transitionDelay: `${i * 100}ms` }}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <a
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 p-8 border-2 border-gray-100 transition-all duration-400 group-hover:border-current"
            style={{
              borderColor: hoveredIndex === i ? colorTheme.accent : 'rgba(0,0,0,0.06)',
              background: hoveredIndex === i ? `${colorTheme.accent}08` : 'transparent',
            }}
          >
            <div
              className="w-20 h-20 flex items-center justify-center shrink-0 transition-all duration-400 group-hover:scale-110"
              style={{ background: hoveredIndex === i ? colorTheme.accent : '#f5f5f5' }}
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={80}
                height={32}
                unoptimized
                className="h-7 w-auto transition-all duration-400"
                style={{ filter: hoveredIndex === i ? 'brightness(0) invert(1)' : 'none' }}
              />
            </div>
            <div>
              <h4
                className="text-xl font-black uppercase tracking-wide mb-1"
                style={{ fontWeight: 900, color: hoveredIndex === i ? colorTheme.accent : '#111' }}
              >
                {partner.name}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed max-w-sm">{partner.description}</p>
              <span
                className="inline-block mt-2 text-xs font-bold uppercase tracking-wider"
                style={{ color: colorTheme.accent }}
              >
                {partner.category} <ExternalLink className="w-3 h-3 inline" />
              </span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );

  // ===== GLASSMORPHISM LAYOUT =====
  const renderGlassmorphism = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {partners.map((partner, i) => (
        <div
          key={partner.name}
          className={`group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: `${i * 120}ms` }}
        >
          <a
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 backdrop-blur-xl transition-all duration-400 hover:-translate-y-3 hover:scale-[1.02]"
            style={{
              borderRadius: designTheme.cardRadius,
              background: `${colorTheme.primary}15`,
              border: `1px solid ${colorTheme.accent}25`,
              boxShadow: `0 8px 32px ${colorTheme.primary}15`,
            }}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              style={{ background: `${colorTheme.accent}20`, border: `1px solid ${colorTheme.accent}30` }}
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={48}
                height={20}
                unoptimized
                className="h-5 w-auto"
              />
            </div>
            <h4 className="text-sm font-bold text-center mb-1" style={{ color: colorTheme.primary }}>
              {partner.name}
            </h4>
            <span
              className="block text-center text-[10px] font-semibold"
              style={{ color: colorTheme.accent }}
            >
              {partner.category}
            </span>
          </a>
        </div>
      ))}
    </div>
  );

  // ===== NEUMORPHIC LAYOUT =====
  const renderNeumorphic = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-4" style={{ background: '#e8e8f0' }}>
      {partners.map((partner, i) => (
        <div
          key={partner.name}
          className={`group transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          <a
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 transition-all duration-400 hover:-translate-y-1"
            style={{
              borderRadius: designTheme.cardRadius,
              background: '#e8e8f0',
              boxShadow: '8px 8px 16px rgba(0,0,0,0.1), -8px -8px 16px rgba(255,255,255,0.9)',
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110"
              style={{
                boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.08), inset -4px -4px 8px rgba(255,255,255,0.8)',
              }}
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={56}
                height={24}
                unoptimized
                className="h-6 w-auto"
              />
            </div>
            <h4 className="text-sm font-semibold text-gray-800 mb-1">{partner.name}</h4>
            <span className="text-[10px] text-gray-500">{partner.category}</span>
          </a>
        </div>
      ))}
    </div>
  );

  // ===== EDITORIAL LAYOUT =====
  const renderEditorial = () => (
    <div className="space-y-0">
      {partners.map((partner, i) => (
        <div
          key={partner.name}
          className={`group transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <a
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 py-6 px-4 border-b border-gray-200 hover:border-gray-400 transition-all duration-300"
          >
            <div className="w-24 shrink-0">
              <Image
                src={partner.src}
                alt={partner.name}
                width={96}
                height={36}
                unoptimized
                className="h-8 w-auto grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-3 mb-1">
                <h4 className="text-lg font-extrabold text-gray-900 tracking-tight">{partner.name}</h4>
                <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: colorTheme.accent }}>
                  {partner.category}
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
                {partner.description}
              </p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-gray-600 transition-colors duration-300 shrink-0" />
          </a>
        </div>
      ))}
    </div>
  );

  // ===== GEOMETRIC LAYOUT =====
  const renderGeometric = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {partners.map((partner, i) => {
        const offsets = [
          'translate-y-0', 'md:-translate-y-4', 'translate-y-0',
          'md:translate-y-4', 'translate-y-0', 'md:-translate-y-4',
        ];
        return (
          <div
            key={partner.name}
            className={`group ${offsets[i]} transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 border-2 transition-all duration-300 group-hover:-translate-y-2"
              style={{
                borderColor: `${colorTheme.primary}20`,
                background: 'white',
                boxShadow: `4px 4px 0 ${colorTheme.primary}15`,
              }}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-3" style={{ background: `${colorTheme.accent}10` }}>
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={60}
                  height={24}
                  unoptimized
                  className="h-6 w-auto"
                />
              </div>
              <h4 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider mb-1">{partner.name}</h4>
              <span className="text-[10px] font-bold" style={{ color: colorTheme.accent }}>{partner.category}</span>
            </a>
          </div>
        );
      })}
    </div>
  );

  // ===== ORGANIC LAYOUT =====
  const renderOrganic = () => (
    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
      {partners.map((partner, i) => {
        const sizes = ['w-40 h-40', 'w-48 h-48', 'w-36 h-36', 'w-44 h-44', 'w-40 h-40', 'w-36 h-36'];
        return (
          <div
            key={partner.name}
            className={`group transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${sizes[i]} flex flex-col items-center justify-center p-4 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2`}
              style={{
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${colorTheme.primary}08, ${colorTheme.accent}10)`,
                border: `2px solid ${colorTheme.accent}15`,
                boxShadow: `0 8px 30px ${colorTheme.primary}10`,
              }}
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={64}
                height={28}
                unoptimized
                className="h-7 w-auto mb-3 transition-transform duration-500 group-hover:scale-110"
              />
              <span className="text-xs font-medium text-gray-700 text-center">{partner.name}</span>
            </a>
          </div>
        );
      })}
    </div>
  );

  // ===== CORPORATE LAYOUT =====
  const renderCorporate = () => (
    <div>
      {/* Partner logos in horizontal strip */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-gray-200 mb-8" style={{ borderRadius: designTheme.cardRadius, overflow: 'hidden' }}>
        {partners.map((partner, i) => (
          <div
            key={partner.name}
            className={`group bg-white p-6 flex flex-col items-center justify-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <a href={partner.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <Image
                src={partner.src}
                alt={partner.name}
                width={72}
                height={28}
                unoptimized
                className="h-7 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-500 mb-2"
              />
              <span className="text-[10px] font-bold text-gray-500 group-hover:text-gray-900 transition-colors duration-300 uppercase tracking-wider">
                {partner.name}
              </span>
            </a>
          </div>
        ))}
      </div>
      {/* Partnership statement */}
      <div
        className="p-6 text-center"
        style={{
          borderRadius: designTheme.cardRadius,
          border: `1px solid ${colorTheme.accent}20`,
          background: `${colorTheme.accent}05`,
        }}
      >
        <p className="text-sm text-gray-600">
          TOSTEM India is part of the <strong style={{ color: colorTheme.accent }}>LIXIL Group</strong>, a global leader in housing and building materials.
          Together with our partner brands, we deliver comprehensive living solutions across India and the world.
        </p>
      </div>
    </div>
  );

  // ===== FUTURISTIC LAYOUT =====
  const renderFuturistic = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {partners.map((partner, i) => (
        <div
          key={partner.name}
          className={`group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          <a
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 relative overflow-hidden transition-all duration-400 hover:-translate-y-2"
            style={{
              borderRadius: designTheme.cardRadius,
              background: `rgba(15,20,40,0.9)`,
              border: `1px solid ${colorTheme.accent}30`,
              boxShadow: `0 0 20px ${colorTheme.accent}10`,
            }}
          >
            {/* Scan line effect */}
            <div
              className="absolute top-0 left-0 right-0 h-px animate-shimmer"
              style={{ background: `linear-gradient(90deg, transparent, ${colorTheme.accent}60, transparent)`, backgroundSize: '200% 100%' }}
            />
            <div className="flex items-center gap-3 mb-3">
              <Image
                src={partner.src}
                alt={partner.name}
                width={48}
                height={20}
                unoptimized
                className="h-5 w-auto"
                style={{ filter: `drop-shadow(0 0 4px ${colorTheme.accent}40)` }}
              />
              <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: colorTheme.accent }}>
                {partner.category}
              </span>
            </div>
            <h4 className="text-sm font-bold text-white mb-2">{partner.name}</h4>
            <p className="text-[11px] text-white/50 leading-relaxed line-clamp-2">{partner.description}</p>
            {/* Corner accent */}
            <div className="absolute bottom-0 right-0 w-6 h-6" style={{ borderTop: `1px solid ${colorTheme.accent}40`, borderLeft: `1px solid ${colorTheme.accent}40` }} />
          </a>
        </div>
      ))}
    </div>
  );

  const renderLayout = () => {
    switch (designId) {
      case 'classic': return renderClassic();
      case 'modern-minimal': return renderModernMinimal();
      case 'bold-impactful': return renderBoldImpactful();
      case 'glassmorphism': return renderGlassmorphism();
      case 'neumorphic': return renderNeumorphic();
      case 'editorial': return renderEditorial();
      case 'geometric': return renderGeometric();
      case 'organic': return renderOrganic();
      case 'corporate': return renderCorporate();
      case 'futuristic': return renderFuturistic();
      default: return renderClassic();
    }
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold rounded-full mb-4"
            style={{ color: colorTheme.accent, background: `${colorTheme.accent}15` }}
          >
            <Handshake className="w-4 h-4" /> Our Partners
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900"
            style={{ fontWeight: 'var(--design-heading-weight, 700)' }}
          >
            Trusted Global Partnerships
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            As part of the LIXIL Group, TOSTEM India is backed by world-renowned brands delivering comprehensive living solutions across the globe.
          </p>
        </div>

        {/* Layout (changes with design theme) */}
        {renderLayout()}
      </div>
    </section>
  );
}
