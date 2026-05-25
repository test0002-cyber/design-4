'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';
import { Play, X } from 'lucide-react';

export default function VideoSection() {
  const { colorTheme, designTheme } = useTheme();
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <span
            className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-4"
            style={{ color: colorTheme.accent, background: `${colorTheme.accent}15` }}
          >
            Video
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900"
            style={{ fontWeight: 'var(--design-heading-weight, 700)' }}
          >
            See Our Products in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch how our premium aluminium windows and doors are manufactured and installed.
          </p>
        </div>

        {/* Video Player */}
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div
            className="relative aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden cursor-pointer group"
            style={{
              borderRadius: designTheme.cardRadius,
              boxShadow: designTheme.cardHoverShadow,
            }}
            onClick={() => setPlaying(!playing)}
          >
            {!playing ? (
              <>
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full" style={{ background: colorTheme.accent + '30' }} />
                  <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full" style={{ background: colorTheme.accent + '20' }} />
                </div>

                {/* Window frame illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-48 border-4 rounded-sm" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                    <div className="w-full h-1/2 border-b-2" style={{ borderColor: 'rgba(255,255,255,0.15)' }} />
                    <div className="absolute top-0 left-1/2 w-0.5 h-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-2xl"
                    style={{
                      background: colorTheme.accent,
                      boxShadow: `0 0 40px ${colorTheme.accent}60`,
                    }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-6 left-6 z-10">
                  <p className="text-white font-bold text-lg">TOSTEM Manufacturing Process</p>
                  <p className="text-white/60 text-sm">2:45 min</p>
                </div>
              </>
            ) : (
              <>
                {/* Simulated playing state */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: colorTheme.accent + '30' }}
                    >
                      <div className="flex gap-2">
                        <div className="w-2 h-8 bg-white rounded-full animate-pulse" />
                        <div className="w-2 h-12 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-2 h-6 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                        <div className="w-2 h-10 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                        <div className="w-2 h-7 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
                      </div>
                    </div>
                    <p className="text-white/60 text-sm">Video playing...</p>
                  </div>
                </div>
                <button
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all z-10"
                  onClick={(e) => { e.stopPropagation(); setPlaying(false); }}
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
