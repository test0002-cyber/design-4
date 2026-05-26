'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const CDN = 'https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/';

const galleryItems = [
  { id: 1, title: 'Grants Series Sliding Window', image: CDN + 'wp-content/uploads/2020/07/home-gallery-img-1-748x441.jpg', aspect: 'wide' },
  { id: 2, title: 'Casement Window Detail', image: CDN + 'wp-content/uploads/2020/07/home-gallery-img-2-461x629.jpg', aspect: 'tall' },
  { id: 3, title: 'Premium Interior Installation', image: CDN + 'wp-content/uploads/2020/07/home-gallery-img-3.jpg', aspect: 'square' },
  { id: 4, title: 'Modern Facade Design', image: CDN + 'wp-content/uploads/2020/07/home-gallery-img-4-869x484.jpg', aspect: 'wide' },
  { id: 5, title: 'AP Palazzo Project', image: CDN + 'wp-content/uploads/2025/04/AP-Palazzo-70.jpg', aspect: 'wide' },
  { id: 6, title: 'Baan Nawat Residence', image: CDN + 'wp-content/uploads/2025/04/Baan-Nawat-43.jpg', aspect: 'tall' },
  { id: 7, title: 'Luxury Living Space', image: CDN + 'wp-content/uploads/2025/04/DSC03783-1.jpg', aspect: 'wide' },
  { id: 8, title: 'Chantra Khiri Villa', image: CDN + 'wp-content/uploads/2025/04/Chantra-Khiri-13.jpg', aspect: 'square' },
  { id: 9, title: 'Nature Island Project', image: CDN + 'wp-content/uploads/2025/04/d-Natures-Island-58.jpg', aspect: 'wide' },
  { id: 10, title: 'Exteriors Project', image: CDN + 'wp-content/uploads/2025/04/Exteriors-23.jpg', aspect: 'wide' },
  { id: 11, title: 'Sarin Vista Residence', image: CDN + 'wp-content/uploads/2025/04/Sarin-Vista-24-lowres.jpg', aspect: 'wide' },
  { id: 12, title: 'Oxygen Project', image: CDN + 'wp-content/uploads/2025/04/Oxygen_51.jpg', aspect: 'square' },
  { id: 13, title: 'Nirvana Beyond', image: CDN + 'wp-content/uploads/2025/04/Nirvana-Beyond-03-lowres.jpg', aspect: 'wide' },
  { id: 14, title: 'Exion Project', image: CDN + 'wp-content/uploads/2025/04/Exion-11.jpg', aspect: 'wide' },
  { id: 15, title: 'Formal Living Space', image: CDN + 'wp-content/uploads/2025/04/Formal-living-to-landscape.jpg', aspect: 'tall' },
  { id: 16, title: 'Plover Residence', image: CDN + 'wp-content/uploads/2025/04/Plover-13.jpg', aspect: 'wide' },
  { id: 17, title: 'Tara Keree Villa', image: CDN + 'wp-content/uploads/2025/04/Tara-Keree-43.jpg', aspect: 'tall' },
  { id: 18, title: 'The Connect Project', image: CDN + 'wp-content/uploads/2025/04/The-Connect-13-lowres.jpg', aspect: 'wide' },
  { id: 19, title: 'Warangkana House', image: CDN + 'wp-content/uploads/2025/04/Warangkana-House-57.jpg', aspect: 'wide' },
  { id: 20, title: 'Tostem Chevalife', image: CDN + 'wp-content/uploads/2025/04/Tostem-Chevalife_10.jpg', aspect: 'square' },
  { id: 21, title: 'SJP Residence', image: CDN + 'wp-content/uploads/2025/04/SJP1631-Enhanced-NR-Edit.jpg', aspect: 'wide' },
  { id: 22, title: 'De Vielle Residence', image: CDN + 'wp-content/uploads/2025/04/De-Vielle_36.jpg', aspect: 'tall' },
  { id: 23, title: 'DJI Aerial View', image: CDN + 'wp-content/uploads/2025/04/DJI_0528-1.jpg', aspect: 'wide' },
  { id: 24, title: 'Central Dry Court', image: CDN + 'wp-content/uploads/2025/04/05-Central-Dry-Court-18.jpg', aspect: 'wide' },
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
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our collection of beautifully installed aluminium windows and doors across India.
          </p>
        </div>

        {/* Masonry / Collage Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`break-inside-avoid group cursor-pointer transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => openLightbox(i)}
            >
              <div
                className="relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl"
                style={{
                  borderRadius: designTheme.cardRadius,
                  boxShadow: designTheme.cardShadow,
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={item.aspect === 'wide' ? 800 : item.aspect === 'tall' ? 500 : 600}
                  height={item.aspect === 'wide' ? 500 : item.aspect === 'tall' ? 700 : 600}
                  unoptimized
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
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
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
            className="absolute top-4 right-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] w-full mx-16 overflow-hidden modal-content"
            style={{ borderRadius: designTheme.cardRadius }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[75vh]">
              <Image
                src={galleryItems[lightboxIndex].image}
                alt={galleryItems[lightboxIndex].title}
                fill
                unoptimized
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center">
              <p className="text-lg font-bold">{galleryItems[lightboxIndex].title}</p>
              <p className="text-white/60 text-sm">{lightboxIndex + 1} / {galleryItems.length}</p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
}
