'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from './ThemeProvider';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

export default function CTABand() {
  const { colorTheme, designTheme } = useTheme();
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: colorTheme.gradient }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
          style={{ background: colorTheme.accentLight }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ background: 'white' }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <pattern id="cta-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.5" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
        </div>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4"
        >
          Ready to Transform Your Space?
        </h2>
        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
          Get a free consultation and quote from our experts. Discover the perfect aluminium solution for your home or project.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 flex items-center gap-2 animate-pulse-soft"
            style={{
              background: colorTheme.accent,
              borderRadius: designTheme.buttonRadius,
              boxShadow: `0 8px 30px ${colorTheme.accent}50`,
            }}
          >
            Get a Quote <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 hover:border-white/60 transition-all hover:scale-105 flex items-center gap-2"
            style={{ borderRadius: designTheme.buttonRadius }}
          >
            <Download className="w-5 h-5" /> Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
