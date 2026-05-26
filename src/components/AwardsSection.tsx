'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { Award, Trophy, Star, Medal, ShieldCheck, ExternalLink, X } from 'lucide-react';

const CDN = 'https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/';

interface AwardItem {
  title: string;
  organization: string;
  year: string;
  description: string;
  category: string;
  icon: React.ElementType;
  image: string | null;
}

const awards: AwardItem[] = [
  {
    title: 'Red Dot Design Award',
    organization: 'Red Dot Institute, Germany',
    year: '2020',
    description: 'Prestigious international design recognition for TOSTEM\'s innovative aluminium window and door systems, honouring exceptional product design and functional excellence.',
    category: 'Design Excellence',
    icon: Trophy,
    image: CDN + 'wp-content/uploads/2025/04/Red-dot-125x127.jpeg',
  },
  {
    title: 'Red Dot Design Award',
    organization: 'Red Dot Institute, Germany',
    year: '2024',
    description: 'Another prestigious Red Dot recognition for TOSTEM\'s continued design innovation and excellence in aluminium window and door systems.',
    category: 'Design Excellence',
    icon: Trophy,
    image: CDN + 'wp-content/uploads/2024/05/redot_img.jpg',
  },
  {
    title: 'iF Design Award',
    organization: 'iF International Forum Design, Germany',
    year: '2024',
    description: 'Recognised for outstanding design achievement in the building products category, TOSTEM\'s series set new benchmarks for aluminium window aesthetics and innovation.',
    category: 'International Design',
    icon: Award,
    image: CDN + 'wp-content/uploads/2024/05/if_designed.jpg',
  },
  {
    title: 'German Design Award',
    organization: 'German Design Council',
    year: '2024',
    description: 'Awarded by the German Design Council for TOSTEM\'s exceptional design quality and innovation in the building products category.',
    category: 'International Design',
    icon: Star,
    image: CDN + 'wp-content/uploads/2024/06/german_design.jpg',
  },
  {
    title: 'AAMA Certification',
    organization: 'American Architectural Manufacturers Association',
    year: '2021',
    description: 'Certification from AAMA confirming TOSTEM India\'s adherence to internationally recognised standards for window and door performance.',
    category: 'Quality Assurance',
    icon: Medal,
    image: CDN + 'wp-content/uploads/2021/05/aama.jpg',
  },
  {
    title: 'SGS Certification',
    organization: 'SGS International',
    year: '2021',
    description: 'SGS certification verifying TOSTEM\'s products meet rigorous international quality, safety, and performance standards.',
    category: 'Quality Assurance',
    icon: ShieldCheck,
    image: CDN + 'wp-content/uploads/2021/05/sgs.jpg',
  },
  {
    title: 'JIS Certification',
    organization: 'Japanese Industrial Standards',
    year: '2021',
    description: 'Japanese Industrial Standards certification confirming TOSTEM\'s manufacturing processes and products meet Japan\'s rigorous quality requirements.',
    category: 'Japanese Excellence',
    icon: ShieldCheck,
    image: CDN + 'wp-content/uploads/2021/05/jis.jpg',
  },
  {
    title: 'TIS Certification',
    organization: 'Thai Industrial Standards Institute',
    year: '2021',
    description: 'Thai Industrial Standards certification recognising TOSTEM\'s commitment to meeting Southeast Asian quality and performance benchmarks.',
    category: 'Quality Assurance',
    icon: ShieldCheck,
    image: CDN + 'wp-content/uploads/2021/05/tis.jpg',
  },
  {
    title: 'ASTM Certification',
    organization: 'ASTM International',
    year: '2021',
    description: 'ASTM International certification confirming TOSTEM products comply with globally recognised testing standards for building materials.',
    category: 'Quality Assurance',
    icon: Medal,
    image: CDN + 'wp-content/uploads/2021/05/astm-logo.jpg',
  },
];

export default function AwardsSection() {
  const { colorTheme, designTheme } = useTheme();
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const designId = designTheme.id;

  // ===== CLASSIC LAYOUT =====
  const renderClassic = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {awards.map((award, i) => {
        const Icon = award.icon;
        return (
          <div
            key={award.title}
            className={`group cursor-pointer transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
            onClick={() => setSelectedAward(award)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="h-full p-6 transition-all duration-400 hover:-translate-y-2"
              style={{
                borderRadius: designTheme.cardRadius,
                boxShadow: hoveredIndex === i ? designTheme.cardHoverShadow : designTheme.cardShadow,
                border: designTheme.cardBorder,
                background: designTheme.cardBg,
              }}
            >
              {/* Award image or icon */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110"
                  style={{ background: `${colorTheme.accent}15` }}
                >
                  {award.image ? (
                    <Image src={award.image} alt={award.title} width={40} height={40} unoptimized className="w-10 h-10 object-contain" />
                  ) : (
                    <Icon className="w-7 h-7" style={{ color: colorTheme.accent }} />
                  )}
                </div>
                <div>
                  <span
                    className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full mb-1"
                    style={{ color: colorTheme.accent, background: `${colorTheme.accent}15` }}
                  >
                    {award.category}
                  </span>
                  <span className="block text-xs text-gray-400 font-medium">{award.year}</span>
                </div>
              </div>
              <h4
                className="text-lg font-bold text-gray-900 mb-2 group-hover:translate-x-1 transition-transform duration-300"
                style={{ fontWeight: 'var(--design-heading-weight, 700)' }}
              >
                {award.title}
              </h4>
              <p className="text-xs font-semibold mb-2" style={{ color: colorTheme.accent }}>
                {award.organization}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{award.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );

  // ===== MODERN MINIMAL LAYOUT =====
  const renderModernMinimal = () => (
    <div className="space-y-4">
      {awards.map((award, i) => {
        const Icon = award.icon;
        return (
          <div
            key={award.title}
            className={`group cursor-pointer transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 ' + (i % 2 === 0 ? '-translate-x-8' : 'translate-x-8')}`}
            style={{ transitionDelay: `${i * 80}ms` }}
            onClick={() => setSelectedAward(award)}
          >
            <div
              className="flex items-center gap-6 p-6 transition-all duration-400 hover:bg-gray-50"
              style={{ borderRadius: designTheme.cardRadius }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110"
                style={{ background: `${colorTheme.accent}10` }}
              >
                {award.image ? (
                  <Image src={award.image} alt={award.title} width={36} height={36} unoptimized className="w-9 h-9 object-contain" />
                ) : (
                  <Icon className="w-7 h-7" style={{ color: colorTheme.accent }} />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="text-base font-semibold text-gray-900">{award.title}</h4>
                  <span className="text-[10px] font-medium text-gray-400">{award.year}</span>
                </div>
                <p className="text-sm text-gray-500">{award.organization}</p>
              </div>
              <span
                className="px-3 py-1 text-xs font-semibold shrink-0"
                style={{ color: colorTheme.accent, background: `${colorTheme.accent}10`, borderRadius: designTheme.buttonRadius }}
              >
                {award.category}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );

  // ===== BOLD & IMPACTFUL LAYOUT =====
  const renderBoldImpactful = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {awards.map((award, i) => {
        const Icon = award.icon;
        return (
          <div
            key={award.title}
            className={`group cursor-pointer transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
            onClick={() => setSelectedAward(award)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="relative h-full p-8 overflow-hidden transition-all duration-400"
              style={{
                background: hoveredIndex === i ? colorTheme.primary : '#111',
                color: 'white',
              }}
            >
              {/* Large background year */}
              <span
                className="absolute top-0 right-4 text-[120px] font-black leading-none opacity-10"
                style={{ color: hoveredIndex === i ? colorTheme.accent : 'white' }}
              >
                {award.year}
              </span>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 flex items-center justify-center"
                    style={{ background: hoveredIndex === i ? colorTheme.accent : 'rgba(255,255,255,0.1)' }}
                  >
                    {award.image ? (
                      <Image src={award.image} alt={award.title} width={36} height={36} unoptimized className="w-9 h-9 object-contain" />
                    ) : (
                      <Icon className="w-7 h-7" style={{ color: hoveredIndex === i ? 'white' : colorTheme.accent }} />
                    )}
                  </div>
                  <span
                    className="text-xs font-black uppercase tracking-widest"
                    style={{ color: hoveredIndex === i ? 'white' : colorTheme.accent }}
                  >
                    {award.category}
                  </span>
                </div>
                <h4 className="text-2xl font-black uppercase tracking-tight mb-2">{award.title}</h4>
                <p className="text-sm font-bold mb-3" style={{ color: colorTheme.accentLight }}>
                  {award.organization}
                </p>
                <p className="text-sm text-white/60 leading-relaxed">{award.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  // ===== GLASSMORPHISM LAYOUT =====
  const renderGlassmorphism = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {awards.map((award, i) => {
        const Icon = award.icon;
        return (
          <div
            key={award.title}
            className={`group cursor-pointer transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${i * 120}ms` }}
            onClick={() => setSelectedAward(award)}
          >
            <div
              className="h-full p-6 backdrop-blur-xl transition-all duration-400 hover:-translate-y-3 hover:scale-[1.02]"
              style={{
                borderRadius: designTheme.cardRadius,
                background: `${colorTheme.primary}12`,
                border: `1px solid ${colorTheme.accent}25`,
                boxShadow: `0 8px 32px ${colorTheme.primary}15`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: `${colorTheme.accent}20`, border: `1px solid ${colorTheme.accent}30` }}
                >
                  {award.image ? (
                    <Image src={award.image} alt={award.title} width={28} height={28} unoptimized className="w-7 h-7 object-contain" />
                  ) : (
                    <Icon className="w-6 h-6" style={{ color: colorTheme.accent }} />
                  )}
                </div>
                <div>
                  <span className="text-[10px] font-semibold" style={{ color: colorTheme.accent }}>{award.category}</span>
                  <span className="block text-[10px] text-gray-400">{award.year}</span>
                </div>
              </div>
              <h4 className="text-base font-bold mb-1" style={{ color: colorTheme.primary }}>{award.title}</h4>
              <p className="text-xs font-semibold mb-2" style={{ color: colorTheme.accent }}>{award.organization}</p>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{award.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );

  // ===== NEUMORPHIC LAYOUT =====
  const renderNeumorphic = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4" style={{ background: '#e8e8f0' }}>
      {awards.map((award, i) => {
        const Icon = award.icon;
        return (
          <div
            key={award.title}
            className={`group cursor-pointer transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
            onClick={() => setSelectedAward(award)}
          >
            <div
              className="h-full p-6 transition-all duration-400 hover:-translate-y-1"
              style={{
                borderRadius: designTheme.cardRadius,
                background: '#e8e8f0',
                boxShadow: '8px 8px 16px rgba(0,0,0,0.1), -8px -8px 16px rgba(255,255,255,0.9)',
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110"
                style={{
                  boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.08), inset -4px -4px 8px rgba(255,255,255,0.8)',
                }}
              >
                {award.image ? (
                  <Image src={award.image} alt={award.title} width={32} height={32} unoptimized className="w-8 h-8 object-contain" />
                ) : (
                  <Icon className="w-7 h-7" style={{ color: colorTheme.accent }} />
                )}
              </div>
              <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">{award.category}</span>
              <h4 className="text-base font-semibold text-gray-800 mt-1 mb-1">{award.title}</h4>
              <p className="text-xs font-semibold mb-2" style={{ color: colorTheme.accent }}>{award.organization}</p>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{award.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );

  // ===== EDITORIAL LAYOUT =====
  const renderEditorial = () => (
    <div>
      {/* Featured award */}
      <div
        className={`group cursor-pointer transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        onClick={() => setSelectedAward(awards[0])}
      >
        <div
          className="grid md:grid-cols-2 gap-8 mb-8 pb-8 border-b-2 border-gray-100"
        >
          <div className="flex items-center justify-center p-8" style={{ background: `${colorTheme.primary}05` }}>
            {awards[0].image ? (
              <Image src={awards[0].image!} alt={awards[0].title} width={120} height={120} unoptimized className="w-28 h-28 object-contain group-hover:scale-110 transition-transform duration-500" />
            ) : (
              <Trophy className="w-24 h-24" style={{ color: colorTheme.accent }} />
            )}
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest font-bold mb-2" style={{ color: colorTheme.accent }}>
              {awards[0].category} — {awards[0].year}
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2" style={{ fontWeight: 800 }}>
              {awards[0].title}
            </h3>
            <p className="text-sm font-bold mb-3" style={{ color: colorTheme.primary }}>{awards[0].organization}</p>
            <p className="text-gray-600 leading-relaxed">{awards[0].description}</p>
          </div>
        </div>
      </div>
      {/* Other awards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {awards.slice(1).map((award, i) => {
          const Icon = award.icon;
          return (
            <div
              key={award.title}
              className={`group cursor-pointer transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              onClick={() => setSelectedAward(award)}
            >
              <div className="flex items-start gap-4 p-5 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${colorTheme.accent}10` }}>
                  {award.image ? (
                    <Image src={award.image} alt={award.title} width={24} height={24} unoptimized className="w-6 h-6 object-contain" />
                  ) : (
                    <Icon className="w-5 h-5" style={{ color: colorTheme.accent }} />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <h4 className="text-sm font-extrabold text-gray-900">{award.title}</h4>
                    <span className="text-[10px] font-bold" style={{ color: colorTheme.accent }}>{award.year}</span>
                  </div>
                  <p className="text-xs text-gray-500">{award.organization} — {award.category}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // ===== GEOMETRIC LAYOUT =====
  const renderGeometric = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {awards.map((award, i) => {
        const Icon = award.icon;
        const offsets = ['translate-y-0', 'md:translate-y-6', 'translate-y-0', 'md:-translate-y-6', 'translate-y-0', 'md:translate-y-6'];
        return (
          <div
            key={award.title}
            className={`group cursor-pointer ${offsets[i]} transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
            onClick={() => setSelectedAward(award)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="h-full p-6 border-2 transition-all duration-300 group-hover:-translate-y-2"
              style={{
                borderColor: hoveredIndex === i ? colorTheme.accent : `${colorTheme.primary}20`,
                background: 'white',
                boxShadow: hoveredIndex === i ? `6px 6px 0 ${colorTheme.accent}30` : `4px 4px 0 ${colorTheme.primary}10`,
              }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center mb-3"
                style={{ background: `${colorTheme.accent}10` }}
              >
                {award.image ? (
                  <Image src={award.image} alt={award.title} width={28} height={28} unoptimized className="w-7 h-7 object-contain" />
                ) : (
                  <Icon className="w-6 h-6" style={{ color: colorTheme.accent }} />
                )}
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider" style={{ color: colorTheme.accent }}>
                {award.category}
              </span>
              <h4 className="text-sm font-extrabold text-gray-900 uppercase tracking-wide mt-1 mb-1">{award.title}</h4>
              <p className="text-[10px] text-gray-500">{award.year} — {award.organization}</p>
            </div>
          </div>
        );
      })}
    </div>
  );

  // ===== ORGANIC LAYOUT =====
  const renderOrganic = () => (
    <div className="flex flex-wrap justify-center gap-6">
      {awards.map((award, i) => {
        const Icon = award.icon;
        const sizes = ['w-48 h-56', 'w-52 h-60', 'w-44 h-52', 'w-48 h-56', 'w-44 h-52', 'w-52 h-60'];
        return (
          <div
            key={award.title}
            className={`group cursor-pointer transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
            style={{ transitionDelay: `${i * 150}ms` }}
            onClick={() => setSelectedAward(award)}
          >
            <div
              className={`${sizes[i]} flex flex-col items-center justify-center p-5 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-3`}
              style={{
                borderRadius: '2rem',
                background: `linear-gradient(135deg, ${colorTheme.primary}06, ${colorTheme.accent}12)`,
                border: `2px solid ${colorTheme.accent}20`,
                boxShadow: `0 8px 30px ${colorTheme.primary}08`,
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110"
                style={{ background: `${colorTheme.accent}15` }}
              >
                {award.image ? (
                  <Image src={award.image} alt={award.title} width={36} height={36} unoptimized className="w-9 h-9 object-contain" />
                ) : (
                  <Icon className="w-8 h-8" style={{ color: colorTheme.accent }} />
                )}
              </div>
              <h4 className="text-sm font-semibold text-gray-900 text-center mb-1">{award.title}</h4>
              <span className="text-[10px] font-semibold text-center" style={{ color: colorTheme.accent }}>
                {award.category}
              </span>
              <span className="text-[10px] text-gray-400 mt-1">{award.year}</span>
            </div>
          </div>
        );
      })}
    </div>
  );

  // ===== CORPORATE LAYOUT =====
  const renderCorporate = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {awards.map((award, i) => {
        const Icon = award.icon;
        return (
          <div
            key={award.title}
            className={`group cursor-pointer transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${i * 80}ms` }}
            onClick={() => setSelectedAward(award)}
          >
            <div
              className="flex gap-5 p-5 transition-all duration-300 hover:bg-gray-50"
              style={{
                borderRadius: designTheme.cardRadius,
                border: `1px solid rgba(0,0,0,0.06)`,
                borderLeft: `4px solid ${colorTheme.accent}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110"
                style={{ background: `${colorTheme.accent}10` }}
              >
                {award.image ? (
                  <Image src={award.image} alt={award.title} width={28} height={28} unoptimized className="w-7 h-7 object-contain" />
                ) : (
                  <Icon className="w-6 h-6" style={{ color: colorTheme.accent }} />
                )}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h4 className="text-sm font-bold text-gray-900">{award.title}</h4>
                  <span className="text-[10px] text-gray-400">{award.year}</span>
                </div>
                <p className="text-xs font-semibold mb-1" style={{ color: colorTheme.accent }}>{award.organization}</p>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{award.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  // ===== FUTURISTIC LAYOUT =====
  const renderFuturistic = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {awards.map((award, i) => {
        const Icon = award.icon;
        return (
          <div
            key={award.title}
            className={`group cursor-pointer transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
            onClick={() => setSelectedAward(award)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="h-full p-6 relative overflow-hidden transition-all duration-400 hover:-translate-y-2"
              style={{
                borderRadius: designTheme.cardRadius,
                background: 'rgba(15,20,40,0.9)',
                border: `1px solid ${hoveredIndex === i ? colorTheme.accent : colorTheme.accent}30`,
                boxShadow: hoveredIndex === i ? `0 0 30px ${colorTheme.accent}20` : `0 0 20px ${colorTheme.accent}10`,
              }}
            >
              {/* Scan line */}
              <div
                className="absolute top-0 left-0 right-0 h-px animate-shimmer"
                style={{ background: `linear-gradient(90deg, transparent, ${colorTheme.accent}60, transparent)`, backgroundSize: '200% 100%' }}
              />
              {/* Holographic corner */}
              <div className="absolute top-0 right-0 w-12 h-12" style={{
                background: `linear-gradient(135deg, ${colorTheme.accent}15, transparent)`,
              }} />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    style={{ background: `${colorTheme.accent}20`, boxShadow: `0 0 10px ${colorTheme.accent}20` }}
                  >
                    {award.image ? (
                      <Image src={award.image} alt={award.title} width={24} height={24} unoptimized className="w-6 h-6 object-contain" />
                    ) : (
                      <Icon className="w-5 h-5" style={{ color: colorTheme.accent }} />
                    )}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: colorTheme.accent }}>
                      {award.category}
                    </span>
                    <span className="block text-[10px] font-mono text-white/30">{award.year}</span>
                  </div>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{award.title}</h4>
                <p className="text-[11px] text-white/40 mb-2">{award.organization}</p>
                <p className="text-[11px] text-white/30 leading-relaxed line-clamp-2">{award.description}</p>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-6 h-6" style={{ borderTop: `1px solid ${colorTheme.accent}40`, borderLeft: `1px solid ${colorTheme.accent}40` }} />
            </div>
          </div>
        );
      })}
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
    <section ref={sectionRef} className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold rounded-full mb-4"
            style={{ color: colorTheme.accent, background: `${colorTheme.accent}15` }}
          >
            <Award className="w-4 h-4" /> Awards & Recognition
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900"
            style={{ fontWeight: 'var(--design-heading-weight, 700)' }}
          >
            Excellence Recognised Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            TOSTEM\'s commitment to design innovation, quality, and sustainability has been recognised by prestigious international and national award bodies.
          </p>
        </div>

        {/* Layout (changes with design theme) */}
        {renderLayout()}

        {/* View All Awards link */}
        <div className={`text-center mt-10 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105"
            style={{
              color: colorTheme.accent,
              border: `2px solid ${colorTheme.accent}`,
              borderRadius: designTheme.buttonRadius,
            }}
          >
            <Award className="w-4 h-4" /> View All Awards <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Award Detail Modal */}
      {selectedAward && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop"
          onClick={() => setSelectedAward(null)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto modal-content"
            style={{
              borderRadius: designTheme.cardRadius,
              background: designTheme.cardBg,
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAward(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Modal header */}
            <div
              className="p-8 text-white relative overflow-hidden"
              style={{ background: colorTheme.gradient }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10" style={{ background: 'white', transform: 'translate(30%, -30%)' }} />
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  {selectedAward.image ? (
                    <Image src={selectedAward.image} alt={selectedAward.title} width={48} height={48} unoptimized className="w-12 h-12 object-contain" />
                  ) : (
                    <selectedAward.icon className="w-8 h-8 text-white" />
                  )}
                </div>
                <div>
                  <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">{selectedAward.category}</span>
                  <h2 className="text-2xl font-bold text-white">{selectedAward.title}</h2>
                  <p className="text-sm text-white/70">{selectedAward.organization}</p>
                </div>
              </div>
            </div>

            {/* Modal content */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 text-xs font-bold rounded-full text-white"
                  style={{ background: colorTheme.accent }}
                >
                  {selectedAward.year}
                </span>
                <span className="text-sm text-gray-500">{selectedAward.organization}</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">{selectedAward.description}</p>
              <div
                className="p-4"
                style={{
                  borderRadius: designTheme.cardRadius,
                  background: `${colorTheme.accent}08`,
                  border: `1px solid ${colorTheme.accent}20`,
                }}
              >
                <p className="text-sm text-gray-600">
                  This recognition reinforces TOSTEM India&apos;s dedication to delivering world-class aluminium windows and doors, combining Japanese precision engineering with award-winning design to transform living spaces across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
