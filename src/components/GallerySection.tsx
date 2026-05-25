'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';
import { X, ChevronLeft, ChevronRight, Maximize2, ImageIcon } from 'lucide-react';

const galleryItems = [
  { id: 1, title: 'Modern Sliding Window', gradient: 'from-blue-900 to-indigo-700', aspect: 'tall' },
  { id: 2, title: 'Casement Window Detail', gradient: 'from-teal-800 to-cyan-600', aspect: 'wide' },
  { id: 3, title: 'Thermal Break Profile', gradient: 'from-emerald-900 to-green-700', aspect: 'square' },
  { id: 4, title: 'Fold & Slide Door', gradient: 'from-amber-900 to-yellow-700', aspect: 'tall' },
  { id: 5, title: 'Sliding Door View', gradient: 'from-violet-900 to-purple-700', aspect: 'wide' },
  { id: 6, title: 'Fixed Window Panorama', gradient: 'from-rose-900 to-pink-700', aspect: 'square' },
  { id: 7, title: 'Colour Swatch Display', gradient: 'from-slate-800 to-zinc-600', aspect: 'tall' },
  { id: 8, title: 'Installation Detail', gradient: 'from-orange-900 to-red-700', aspect: 'wide' },
];

export default function GallerySection() {
  const { colorTheme, designTheme } = useTheme();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((prev) => prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null);
  const nextImage = () => setLightboxIndex((prev) => prev !== null ? (prev + 1) % galleryItems.length : null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <span
            className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-4"
            style={{ color: colorTheme.accent, background: `${colorTheme.accent}15` }}
          >
            Gallery
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900"
            style={{ fontWeight: 'var(--design-heading-weight, 700)' }}
          >
            Our Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our collection of beautifully installed windows and doors across India.
          </p>
        </div>

        {/* Masonry / Collage Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`break-inside-avoid group cursor-pointer transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => openLightbox(i)}
            >
              <div
                className={`relative overflow-hidden bg-gradient-to-br ${item.gradient} transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl`}
                style={{
                  borderRadius: designTheme.cardRadius,
                  height: item.aspect === 'tall' ? '320px' : item.aspect === 'wide' ? '220px' : '260px',
                }}
              >
                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-white/30" />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                    <Maximize2 className="w-8 h-8 text-white mb-2" />
                    <p className="text-white text-sm font-semibold text-center px-4">{item.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Gallery Button */}
        <div className={`text-center mt-10 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold transition-all hover:scale-105"
            style={{
              color: colorTheme.accent,
              border: `2px solid ${colorTheme.accent}`,
              borderRadius: designTheme.buttonRadius,
            }}
          >
            View Full Gallery <Maximize2 className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image */}
          <div
            className="max-w-4xl max-h-[80vh] w-full mx-16 overflow-hidden"
            style={{ borderRadius: designTheme.cardRadius }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`w-full h-[70vh] bg-gradient-to-br ${galleryItems[lightboxIndex].gradient} flex items-center justify-center relative`}
            >
              <ImageIcon className="w-24 h-24 text-white/20" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xl font-bold">{galleryItems[lightboxIndex].title}</p>
                <p className="text-white/60 text-sm">{lightboxIndex + 1} / {galleryItems.length}</p>
              </div>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
}
