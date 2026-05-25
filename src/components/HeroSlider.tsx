'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from './ThemeProvider';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    title: 'Premium Aluminium Windows & Doors',
    subtitle: 'Japanese technology meets Indian craftsmanship',
    gradient: 'from-[var(--theme-primary)] via-[var(--theme-primary-light)] to-[var(--theme-primary-dark)]',
  },
  {
    title: 'Energy Efficient Solutions',
    subtitle: 'Thermal break technology for all seasons',
    gradient: 'from-[var(--theme-primary-dark)] via-[var(--theme-primary)] to-[var(--theme-primary-light)]',
  },
  {
    title: '100+ Colour Options',
    subtitle: 'Match every aesthetic with our premium finishes',
    gradient: 'from-[var(--theme-primary-light)] via-[var(--theme-primary-dark)] to-[var(--theme-primary)]',
  },
];

export default function HeroSlider() {
  const { colorTheme, designTheme } = useTheme();
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length);
  }, [current, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${colorTheme.primaryDark} 0%, ${colorTheme.primary} 40%, ${colorTheme.primaryLight} 100%)`,
        }}
      />

      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10"
          style={{ background: colorTheme.accent }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-5"
          style={{ background: colorTheme.accent }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
          style={{ background: colorTheme.accentLight }}
        />
        {/* Geometric lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="1" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="1" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}
          >
            {/* Small badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-white/90 mb-8 animate-fade-in"
              style={{ background: `${colorTheme.accent}30`, border: `1px solid ${colorTheme.accent}50` }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: colorTheme.accent }} />
              TOSTEM India - Japanese Excellence
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-slide-up"
              style={{ fontWeight: 900 }}
            >
              {slides[current].title}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto animate-fade-in-delay">
              {slides[current].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
              <a
                href="#contact"
                className="px-8 py-3.5 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2"
                style={{
                  background: colorTheme.accent,
                  borderRadius: designTheme.buttonRadius,
                  boxShadow: `0 4px 20px ${colorTheme.accent}40`,
                }}
              >
                Get a Quote <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#products"
                className="px-8 py-3.5 text-lg font-semibold text-white/90 border-2 border-white/30 hover:border-white/60 transition-all hover:scale-105"
                style={{ borderRadius: designTheme.buttonRadius }}
              >
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full text-white/60 hover:text-white transition-all hover:scale-110"
        style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full text-white/60 hover:text-white transition-all hover:scale-110"
        style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="transition-all duration-300"
            style={{
              width: i === current ? '32px' : '10px',
              height: '10px',
              borderRadius: '5px',
              background: i === current ? colorTheme.accent : 'rgba(255,255,255,0.4)',
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-2 text-white/40 text-xs">
        <span className="rotate-90 tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-white/20 relative overflow-hidden">
          <div className="w-full h-3 animate-scroll-down" style={{ background: colorTheme.accent }} />
        </div>
      </div>
    </section>
  );
}
