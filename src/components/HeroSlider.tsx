'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const CDN = 'https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/';

const slides = [
  {
    title: 'Grants Series',
    subtitle: 'Break The Norm',
    description: 'Fine line of design and function — redefining aluminium windows and doors with Japanese precision engineering.',
    image: CDN + 'wp-content/uploads/2020/08/ez-banner-slide-1171x506.jpg',
    video: 'https://www.tostemindia.com/wp-content/themes/tostem/video/WebsiteBanner_Grants.mp4',
    cta: 'Explore Grants',
  },
  {
    title: 'IN-16 Series',
    subtitle: 'Japanese Precision',
    description: 'Experience the next generation of slim-profile aluminium windows — crafted with meticulous Japanese engineering for modern Indian homes.',
    image: CDN + 'wp-content/uploads/2025/08/Header-Image_IN-16-1171x506.jpg',
    video: null,
    cta: 'Discover IN-16',
  },
  {
    title: 'Vive Series',
    subtitle: 'Premium Living',
    description: 'Elevate your living spaces with our premium Vive Series — where aesthetic elegance meets outstanding performance.',
    image: CDN + 'wp-content/uploads/2025/07/Vive-32-lowres-2-1171x506.jpg',
    video: null,
    cta: 'View Vive Series',
  },
];

export default function HeroSlider() {
  const { colorTheme, designTheme } = useTheme();
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [textVisible, setTextVisible] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === current) return;
    setIsTransitioning(true);
    setTextVisible(false);
    setShowVideo(false);
    setTimeout(() => {
      setCurrent(index);
      setTimeout(() => {
        setIsTransitioning(false);
        setTextVisible(true);
      }, 100);
    }, 500);
  }, [isTransitioning, current]);

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length);
  }, [current, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Auto-play video on first slide
  useEffect(() => {
    if (current === 0) {
      const timer = setTimeout(() => setShowVideo(true), 1500);
      return () => clearTimeout(timer);
    }
    return () => setShowVideo(false);
  }, [current]);

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background images with crossfade */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
          ref={i === 0 ? parallaxRef : undefined}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            unoptimized
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          {/* Video overlay for first slide */}
          {i === 0 && showVideo && (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={slide.video} type="video/mp4" />
            </video>
          )}
        </div>
      ))}

      {/* Dark gradient overlay for readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.55) 100%)`,
        }}
      />

      {/* Accent gradient strip */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 z-[2]"
        style={{ background: colorTheme.accent }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          {/* Animated badge */}
          <div
            className={`transition-all duration-700 ${
              textVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
              style={{
                color: colorTheme.accentLight,
                background: `${colorTheme.accent}30`,
                border: `1px solid ${colorTheme.accent}50`,
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: colorTheme.accent }} />
              TOSTEM India — Japanese Excellence
            </span>
          </div>

          {/* Series Name */}
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-2 transition-all duration-700 ${
              textVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: '0.2s',
              fontWeight: 900,
              letterSpacing: '-0.02em',
            }}
          >
            {slides[current].title}
          </h1>

          {/* Subtitle */}
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${
              textVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: '0.35s',
              color: colorTheme.accentLight,
            }}
          >
            {slides[current].subtitle}
          </h2>

          {/* Description */}
          <p
            className={`text-base sm:text-lg md:text-xl text-white/75 mb-10 max-w-xl leading-relaxed transition-all duration-700 ${
              textVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            {slides[current].description}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 ${
              textVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.65s' }}
          >
            <a
              href="#products"
              className="group px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
              style={{
                background: colorTheme.accent,
                borderRadius: designTheme.buttonRadius,
                boxShadow: `0 4px 20px ${colorTheme.accent}40`,
              }}
            >
              {slides[current].cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 text-base font-semibold text-white/90 border-2 border-white/30 hover:border-white/60 transition-all duration-300 hover:scale-105"
              style={{ borderRadius: designTheme.buttonRadius }}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full text-white/60 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/20"
        style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full text-white/60 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/20"
        style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="transition-all duration-500"
            style={{
              width: i === current ? '40px' : '10px',
              height: '10px',
              borderRadius: '5px',
              background: i === current ? colorTheme.accent : 'rgba(255,255,255,0.4)',
              boxShadow: i === current ? `0 0 12px ${colorTheme.accent}60` : 'none',
            }}
            aria-label={`Go to slide ${i + 1}: ${slide.title}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-2 text-white/50 text-sm font-mono">
        <span style={{ color: colorTheme.accentLight, fontWeight: 700 }}>
          {String(current + 1).padStart(2, '0')}
        </span>
        <span>/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 z-20 hidden md:flex flex-col items-center gap-2 text-white/40 text-xs">
        <span className="rotate-90 tracking-widest text-[10px]">SCROLL</span>
        <div className="w-px h-8 bg-white/20 relative overflow-hidden">
          <div className="w-full h-3 animate-scroll-down" style={{ background: colorTheme.accent }} />
        </div>
      </div>
    </section>
  );
}
