'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { Play, X } from 'lucide-react';

const CDN = 'https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/';

const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/YUFlLe4N3rA?autoplay=1&rel=0';
const VIDEO_THUMBNAIL = CDN + 'wp-content/uploads/2020/08/ez-banner-slide-1171x506.jpg';
const VIDEO_TITLE = 'Tostem India: Leading Aluminium Windows, Doors Manufacturer & Supplier';

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
            Discover how TOSTEM&apos;s premium aluminium windows and doors are manufactured with Japanese precision and installed across India.
          </p>
        </div>

        {/* Video Player */}
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div
            className="relative aspect-video overflow-hidden group"
            style={{
              borderRadius: designTheme.cardRadius,
              boxShadow: designTheme.cardHoverShadow,
            }}
          >
            {!playing ? (
              <>
                {/* Thumbnail image */}
                <Image
                  src={VIDEO_THUMBNAIL}
                  alt={VIDEO_TITLE}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-500" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <button
                    onClick={() => setPlaying(true)}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl cursor-pointer"
                    style={{
                      background: colorTheme.accent,
                      boxShadow: `0 0 40px ${colorTheme.accent}60`,
                    }}
                    aria-label="Play video"
                  >
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
                  </button>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-6 left-6 z-10">
                  <p className="text-white font-bold text-lg md:text-xl">{VIDEO_TITLE}</p>
                  <p className="text-white/60 text-sm mt-1">Click to play</p>
                </div>

                {/* Accent bar at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: colorTheme.accent }} />
              </>
            ) : (
              <div className="relative w-full h-full">
                <iframe
                  src={YOUTUBE_EMBED_URL}
                  title={VIDEO_TITLE}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: designTheme.cardRadius }}
                />
                <button
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-300 hover:scale-110"
                  onClick={() => setPlaying(false)}
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
