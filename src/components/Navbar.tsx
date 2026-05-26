'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import {
  Menu, X, ChevronDown, Settings, Phone,
} from 'lucide-react';

const CDN = 'https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/';

const navLinks = [
  {
    label: 'About Tostem',
    children: [
      { items: ['About Tostem', 'Leader\'s Message', 'Our Purpose And Behaviour', 'LIXIL Window System', 'Awards'] },
    ],
  },
  {
    label: 'Why Tostem',
    children: [
      { items: ['Total Housing Solutions', 'Japanese Innovation', 'Pre Engineered System Windows', 'Quality Assurance', 'Product Performance', 'Surface & Colour Protection', 'Anodised Aluminium', 'Sound Insulated'] },
    ],
  },
  {
    label: 'Our Product',
    megaMenu: true,
    children: [
      {
        group: 'Aluminium Doors',
        designs: ['Sliding', 'Casement', 'French', 'Folding', 'Corner Slider', 'Slide & Fold', 'Ventilation'],
        series: ['Grants', 'ATIS', 'We Plus', 'We 70'],
      },
      {
        group: 'Aluminium Windows',
        designs: ['Sliding', 'Casement', 'Awning', 'Fixed', 'Glass To Glass', 'French', 'Tilt & Slide', 'Slit', 'Vertical Sliding'],
        series: ['Grants', 'ATIS', 'We Plus', 'We 70'],
      },
      {
        group: 'Steel Entrance Doors',
        designs: ['Single Door', 'Double Door'],
        series: ['Giesta'],
      },
      {
        group: 'Airflow System',
        designs: ['Ventilator', 'Louver'],
        series: ['Grants', 'ATIS'],
      },
      {
        group: 'Facades',
        designs: ['Curtain Wall', 'Store Front'],
        series: [],
      },
      {
        group: 'Interior',
        designs: ['Hanging', 'Swing', 'Fixed Divider'],
        series: [],
      },
    ],
  },
  {
    label: 'Driving Experience',
    children: [
      { items: ['E-catalogue', 'Modern Design', 'GIESTA Simulation', 'Gallery'] },
    ],
  },
  {
    label: 'TADA',
    children: [
      { items: ['TADA 2025', 'TADA 2024', 'TADA 2023'] },
    ],
  },
  {
    label: 'Knowledge Experience',
    children: [
      { items: ['Blog', 'Glossary', 'Testimonials', 'FAQ', 'Guide'] },
    ],
  },
  {
    label: 'Reach Us',
    children: [
      { items: ['Offices', 'Find Studio'] },
    ],
  },
];

export default function Navbar() {
  const { colorTheme, designTheme, setColorTheme, setDesignTheme, colorThemes, designThemes } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close settings panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setSettingsOpen(false);
      }
    };
    if (settingsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [settingsOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? `rgba(${hexToRgb(colorTheme.primary)}, 0.97)` : colorTheme.primary,
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.2)' : 'none',
      }}
    >
      {/* ===== TOP BAR: Logo + Get a Quote ===== */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 shrink-0">
              <Image
                src={CDN + 'wp-content/uploads/2024/07/logo-tostemindia.png'}
                alt="TOSTEM India"
                width={160}
                height={40}
                unoptimized
                className="h-8 md:h-10 w-auto"
                priority
              />
            </a>

            {/* Right side: Get a Quote + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: colorTheme.accent,
                  borderRadius: designTheme.buttonRadius,
                  boxShadow: `0 2px 10px ${colorTheme.accent}40`,
                }}
              >
                <Phone className="w-4 h-4" />
                Get a Quote
              </a>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-white/80 hover:text-white"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM BAR: Nav Links + Settings ===== */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11">
            {/* Nav Links */}
            <div className="flex items-center gap-0 flex-1 min-w-0 overflow-hidden">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="px-2.5 py-1.5 text-[12px] text-white/80 hover:text-white transition-colors flex items-center gap-1 font-medium whitespace-nowrap"
                  >
                    {link.label}
                    {link.children && <ChevronDown className="w-3 h-3 shrink-0" />}
                  </button>

                  {/* Mega Menu for Our Product */}
                  {openDropdown === link.label && link.megaMenu && link.children && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-0 py-6 px-8 min-w-[700px] rounded-b-lg shadow-2xl z-50 animate-fade-in"
                      style={{
                        background: colorTheme.primaryLight,
                        border: `1px solid ${colorTheme.accent}20`,
                      }}
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {link.children.map((group: { group: string; designs: string[]; series: string[] }) => (
                          <div key={group.group}>
                            <div
                              className="text-xs font-bold uppercase tracking-wider mb-3 pb-1 border-b"
                              style={{ color: colorTheme.accent, borderColor: `${colorTheme.accent}30` }}
                            >
                              {group.group}
                            </div>
                            <div className="mb-2">
                              <span className="text-[10px] uppercase text-white/40 tracking-wider">Designs</span>
                            </div>
                            {group.designs.map((design: string) => (
                              <a
                                key={design}
                                href="#"
                                className="block py-1 text-sm text-white/70 hover:text-white hover:pl-1 transition-all"
                              >
                                {design}
                              </a>
                            ))}
                            {group.series.length > 0 && (
                              <>
                                <div className="mt-3 mb-2">
                                  <span className="text-[10px] uppercase text-white/40 tracking-wider">Series</span>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                  {group.series.map((s: string) => (
                                    <span
                                      key={s}
                                      className="px-2 py-0.5 text-xs rounded"
                                      style={{ background: `${colorTheme.accent}20`, color: colorTheme.accentLight }}
                                    >
                                      {s}
                                    </span>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Standard dropdown */}
                  {openDropdown === link.label && !link.megaMenu && link.children && (
                    <div
                      className="absolute top-full left-0 mt-0 py-3 px-4 min-w-[220px] rounded-b-lg shadow-xl z-50 animate-fade-in"
                      style={{
                        background: colorTheme.primaryLight,
                        border: `1px solid ${colorTheme.accent}20`,
                      }}
                    >
                      {link.children.map((group) =>
                        group.items.map((item: string) => (
                          <a
                            key={item}
                            href="#"
                            className="block py-1.5 text-sm text-white/70 hover:text-white hover:pl-2 transition-all"
                          >
                            {item}
                          </a>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Settings / Configurator Button */}
            <div className="relative shrink-0 ml-2" ref={settingsRef}>
              <button
                onClick={() => setSettingsOpen(!settingsOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-all"
                title="Theme Settings"
              >
                <Settings className={`w-4 h-4 transition-transform duration-500 ${settingsOpen ? 'rotate-90' : ''}`} />
                <span className="text-[11px] font-medium hidden xl:inline">Customize</span>
              </button>

              {/* Settings Panel - Two Column Radio Buttons */}
              {settingsOpen && (
                <div
                  className="absolute top-full right-0 mt-2 py-4 px-4 min-w-[420px] rounded-xl shadow-2xl z-50 animate-fade-in"
                  style={{
                    background: colorTheme.primaryLight,
                    border: `1px solid ${colorTheme.accent}30`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                    <Settings className="w-4 h-4" style={{ color: colorTheme.accent }} />
                    <span className="text-sm font-semibold text-white">Theme Customizer</span>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {/* Color Theme Column */}
                    <div>
                      <div className="text-[10px] text-white/40 uppercase tracking-wider mb-3 font-semibold">Color Theme</div>
                      <div className="space-y-1">
                        {colorThemes.map((t) => (
                          <button
                            key={t.id}
                            onClick={() => setColorTheme(t.id)}
                            className="w-full flex items-center gap-2.5 px-2.5 py-2 text-[12px] rounded-lg transition-all group"
                            style={
                              t.id === colorTheme.id
                                ? { background: `${colorTheme.accent}20`, color: colorTheme.accentLight }
                                : { color: 'rgba(255,255,255,0.6)' }
                            }
                          >
                            {/* Radio button */}
                            <span
                              className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all"
                              style={{
                                borderColor: t.id === colorTheme.id ? colorTheme.accentLight : 'rgba(255,255,255,0.2)',
                              }}
                            >
                              {t.id === colorTheme.id && (
                                <span
                                  className="w-2 h-2 rounded-full"
                                  style={{ background: colorTheme.accentLight }}
                                />
                              )}
                            </span>
                            {/* Swatch */}
                            <span
                              className="w-4 h-4 rounded-full shrink-0 border border-white/20"
                              style={{ background: t.swatch }}
                            />
                            <span className="truncate">{t.name}</span>
                            <span className="w-2.5 h-2.5 rounded-full ml-auto shrink-0" style={{ background: t.accent }} />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Design Theme Column */}
                    <div>
                      <div className="text-[10px] text-white/40 uppercase tracking-wider mb-3 font-semibold">Design Theme</div>
                      <div className="space-y-1">
                        {designThemes.map((t) => (
                          <button
                            key={t.id}
                            onClick={() => setDesignTheme(t.id)}
                            className="w-full flex items-center gap-2.5 px-2.5 py-2 text-[12px] rounded-lg transition-all"
                            style={
                              t.id === designTheme.id
                                ? { background: `${colorTheme.accent}20`, color: colorTheme.accentLight }
                                : { color: 'rgba(255,255,255,0.6)' }
                            }
                          >
                            {/* Radio button */}
                            <span
                              className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all"
                              style={{
                                borderColor: t.id === designTheme.id ? colorTheme.accentLight : 'rgba(255,255,255,0.2)',
                              }}
                            >
                              {t.id === designTheme.id && (
                                <span
                                  className="w-2 h-2 rounded-full"
                                  style={{ background: colorTheme.accentLight }}
                                />
                              )}
                            </span>
                            <span className="truncate">{t.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Current selection info */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] text-white/30">Current: {colorTheme.name} + {designTheme.name}</span>
                    <span className="text-[10px] font-mono" style={{ color: colorTheme.accent }}>
                      100 combinations
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 top-14 z-40 overflow-y-auto animate-slide-down"
          style={{ background: colorTheme.primary }}
        >
          <div className="px-4 py-6 space-y-2">
            {/* Get a Quote - Mobile */}
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full py-3 font-semibold text-white sm:hidden"
              style={{ background: colorTheme.accent, borderRadius: designTheme.buttonRadius }}
            >
              <Phone className="w-4 h-4" />Get a Quote
            </a>

            {navLinks.map((link) => (
              <div key={link.label}>
                <button
                  onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                  className="w-full flex items-center justify-between py-3 px-2 text-white/80 hover:text-white border-b border-white/10"
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                  )}
                </button>
                {openDropdown === link.label && link.children && !link.megaMenu && (
                  <div className="pl-4 py-2 animate-fade-in">
                    {link.children.map((group) =>
                      group.items.map((item: string) => (
                        <a key={item} href="#" className="block py-1.5 text-sm text-white/60 hover:text-white transition-colors">
                          {item}
                        </a>
                      ))
                    )}
                  </div>
                )}
                {openDropdown === link.label && link.megaMenu && link.children && (
                  <div className="pl-4 py-2 animate-fade-in max-h-96 overflow-y-auto">
                    {link.children.map((group: { group: string; designs: string[]; series: string[] }) => (
                      <div key={group.group} className="mb-4">
                        <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: colorTheme.accent }}>
                          {group.group}
                        </div>
                        {group.designs.map((d: string) => (
                          <a key={d} href="#" className="block py-1 text-sm text-white/60 hover:text-white transition-colors">
                            {d}
                          </a>
                        ))}
                        {group.series.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {group.series.map((s: string) => (
                              <span key={s} className="px-2 py-0.5 text-[10px] rounded" style={{ background: `${colorTheme.accent}20`, color: colorTheme.accentLight }}>
                                {s}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile theme selectors - Two columns with radio buttons */}
            <div className="border-t border-white/10 pt-4 mt-4">
              <div className="flex items-center gap-2 mb-3">
                <Settings className="w-4 h-4" style={{ color: colorTheme.accent }} />
                <span className="text-sm font-semibold text-white">Theme Customizer</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* Color Themes */}
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider mb-2">Color Theme</div>
                  <div className="space-y-1">
                    {colorThemes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setColorTheme(t.id)}
                        className="w-full flex items-center gap-2 px-2 py-1.5 text-[11px] rounded-lg transition-all"
                        style={t.id === colorTheme.id ? { background: `${colorTheme.accent}30`, color: 'white' } : { color: 'rgba(255,255,255,0.5)' }}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center shrink-0"
                          style={{ borderColor: t.id === colorTheme.id ? colorTheme.accentLight : 'rgba(255,255,255,0.2)' }}
                        >
                          {t.id === colorTheme.id && (
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: colorTheme.accentLight }} />
                          )}
                        </span>
                        <span className="w-3 h-3 rounded-full shrink-0" style={{ background: t.swatch }} />
                        <span className="truncate">{t.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
                {/* Design Themes */}
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider mb-2">Design Theme</div>
                  <div className="space-y-1">
                    {designThemes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setDesignTheme(t.id)}
                        className="w-full flex items-center gap-2 px-2 py-1.5 text-[11px] rounded-lg transition-all"
                        style={t.id === designTheme.id ? { background: `${colorTheme.accent}30`, color: 'white' } : { color: 'rgba(255,255,255,0.5)' }}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center shrink-0"
                          style={{ borderColor: t.id === designTheme.id ? colorTheme.accentLight : 'rgba(255,255,255,0.2)' }}
                        >
                          {t.id === designTheme.id && (
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: colorTheme.accentLight }} />
                          )}
                        </span>
                        <span className="truncate">{t.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '0,0,0';
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}
