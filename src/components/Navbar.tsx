'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import {
  Menu, X, ChevronDown, Palette, Layout, Phone,
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
  const [colorDropdownOpen, setColorDropdownOpen] = useState(false);
  const [designDropdownOpen, setDesignDropdownOpen] = useState(false);

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

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? `rgba(${hexToRgb(colorTheme.primary)}, 0.95)` : colorTheme.primary,
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.2)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
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

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="px-3 py-2 text-[13px] text-white/80 hover:text-white transition-colors flex items-center gap-1 font-medium"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3 h-3" />}
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

          {/* Right side: theme dropdowns + CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            {/* Color Theme Dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => { setColorDropdownOpen(!colorDropdownOpen); setDesignDropdownOpen(false); }}
                className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-all text-xs"
              >
                <Palette className="w-4 h-4" />
                <span className="hidden xl:inline">{colorTheme.name}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {colorDropdownOpen && (
                <div
                  className="absolute top-full right-0 mt-2 py-2 min-w-[200px] rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto animate-fade-in"
                  style={{
                    background: colorTheme.primaryLight,
                    border: `1px solid ${colorTheme.accent}30`,
                  }}
                >
                  <div className="px-3 py-1 text-xs text-white/40 uppercase tracking-wider">Color Theme</div>
                  {colorThemes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => { setColorTheme(t.id); setColorDropdownOpen(false); }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all"
                      style={t.id === colorTheme.id ? { background: `${colorTheme.accent}20`, color: colorTheme.accentLight } : {}}
                    >
                      <span
                        className="w-4 h-4 rounded-full shrink-0 border border-white/20"
                        style={{ background: t.swatch }}
                      />
                      <span>{t.name}</span>
                      <span className="w-3 h-3 rounded-full ml-auto shrink-0" style={{ background: t.accent }} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Design Theme Dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => { setDesignDropdownOpen(!designDropdownOpen); setColorDropdownOpen(false); }}
                className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-all text-xs"
              >
                <Layout className="w-4 h-4" />
                <span className="hidden xl:inline">{designTheme.name}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {designDropdownOpen && (
                <div
                  className="absolute top-full right-0 mt-2 py-2 min-w-[200px] rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto animate-fade-in"
                  style={{
                    background: colorTheme.primaryLight,
                    border: `1px solid ${colorTheme.accent}30`,
                  }}
                >
                  <div className="px-3 py-1 text-xs text-white/40 uppercase tracking-wider">Design Theme</div>
                  {designThemes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => { setDesignTheme(t.id); setDesignDropdownOpen(false); }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all"
                      style={t.id === designTheme.id ? { background: `${colorTheme.accent}20`, color: colorTheme.accentLight } : {}}
                    >
                      <Layout className="w-3.5 h-3.5 opacity-60" />
                      <span>{t.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: colorTheme.accent,
                borderRadius: designTheme.buttonRadius,
                boxShadow: `0 2px 10px ${colorTheme.accent}40`,
              }}
            >
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 top-16 z-40 overflow-y-auto animate-slide-down"
          style={{ background: colorTheme.primary }}
        >
          <div className="px-4 py-6 space-y-2">
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

            {/* Mobile theme selectors */}
            <div className="border-t border-white/10 pt-4 mt-4">
              <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Color Theme</div>
              <div className="grid grid-cols-2 gap-2">
                {colorThemes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setColorTheme(t.id)}
                    className="flex items-center gap-2 px-3 py-2 text-xs text-white/80 rounded-lg transition-all"
                    style={t.id === colorTheme.id ? { background: `${colorTheme.accent}30` } : { background: 'rgba(255,255,255,0.05)' }}
                  >
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ background: t.swatch }} />
                    {t.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 mt-4">
              <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Design Theme</div>
              <div className="grid grid-cols-2 gap-2">
                {designThemes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setDesignTheme(t.id)}
                    className="flex items-center gap-2 px-3 py-2 text-xs text-white/80 rounded-lg transition-all"
                    style={t.id === designTheme.id ? { background: `${colorTheme.accent}30` } : { background: 'rgba(255,255,255,0.05)' }}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="block w-full text-center py-3 font-semibold text-white mt-4"
              style={{ background: colorTheme.accent, borderRadius: designTheme.buttonRadius }}
            >
              <Phone className="w-4 h-4 inline mr-2" />Get a Quote
            </a>
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
