'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const CDN = 'https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/';

const testimonials = [
  {
    title: 'Mr. Amarnath',
    subtitle: 'Customer Testimonial',
    videoUrl: 'https://www.tostemindia.com/wp-content/uploads/2024/09/Customer-Testimonial-Mr.-Amarnath-Deltra-Global.mp4',
    thumbnail: CDN + 'wp-content/uploads/2024/09/Customer-Testimonial-Mr.-Amarnath-Deltra-Global.jpg',
    quote: 'We are extremely happy with TOSTEM windows. The quality and finish are outstanding, and the installation team was very professional.',
  },
  {
    title: 'Mr. Dheeraj',
    subtitle: 'Customer Testimonial — Hyderabad',
    videoUrl: 'https://www.tostemindia.com/wp-content/uploads/2024/09/Customer-Testimonial-Mr.-Dheeraj-Hyderabad-Deltra-Global.mp4',
    thumbnail: CDN + 'wp-content/uploads/2024/09/Customer-Testimonial-Mr.-Dheeraj-Hyderabad-Deltra-Global.jpg',
    quote: 'TOSTEM windows have completely transformed our home. The sound insulation is remarkable and the design is elegant.',
  },
  {
    title: 'Real Homes, Real Stories',
    subtitle: 'Deltra Aluminium Doors & Windows',
    videoUrl: 'https://www.tostemindia.com/wp-content/uploads/2024/09/Real-Homes-Real-Stories-Deltra-Aluminum-Doors-Windows.mp4',
    thumbnail: CDN + 'wp-content/uploads/2024/09/Real-Homes-Real-Stories-Deltra-Aluminum-Doors-Windows.jpg',
    quote: 'Real homes featuring TOSTEM aluminium doors and windows — hear directly from homeowners about their experience.',
  },
];

export default function TestimonialsSection() {
  const { colorTheme, designTheme } = useTheme();
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <span
            className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-4"
            style={{ color: colorTheme.accent, background: `${colorTheme.accent}15` }}
          >
            Testimonials
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900"
            style={{ fontWeight: 'var(--design-heading-weight, 700)' }}
          >
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We have a wealth of happy customers who can&apos;t help but shout about our excellent services.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className={`transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div
                key={testimonial.title}
                className={`group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div
                  className="overflow-hidden card-hover-lift"
                  style={{
                    borderRadius: designTheme.cardRadius,
                    boxShadow: designTheme.cardShadow,
                    border: designTheme.cardBorder,
                    background: designTheme.cardBg,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = designTheme.cardHoverShadow; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = designTheme.cardShadow; }}
                >
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video overflow-hidden cursor-pointer">
                    {playingVideo === testimonial.videoUrl ? (
                      <div className="relative w-full h-full">
                        <video
                          autoPlay
                          controls
                          className="w-full h-full object-cover"
                        >
                          <source src={testimonial.videoUrl} type="video/mp4" />
                        </video>
                        <button
                          onClick={() => setPlayingVideo(null)}
                          className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all z-10"
                          aria-label="Close video"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <Image
                          src={testimonial.thumbnail}
                          alt={testimonial.title}
                          fill
                          unoptimized
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500" />
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button
                            onClick={() => setPlayingVideo(testimonial.videoUrl)}
                            className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                            style={{
                              background: colorTheme.accent,
                              boxShadow: `0 0 20px ${colorTheme.accent}60`,
                            }}
                            aria-label={`Play ${testimonial.title} video`}
                          >
                            <Play className="w-6 h-6 text-white ml-0.5" />
                          </button>
                        </div>
                        {/* Duration badge */}
                        <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/60 text-white text-xs rounded">
                          Video
                        </div>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h4
                      className="text-lg font-bold text-gray-900 mb-1"
                      style={{ fontWeight: 'var(--design-heading-weight, 700)' }}
                    >
                      {testimonial.title}
                    </h4>
                    <p className="text-xs font-medium mb-3" style={{ color: colorTheme.accent }}>
                      {testimonial.subtitle}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300"
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === current ? colorTheme.accent : 'rgba(0,0,0,0.15)',
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {playingVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 modal-backdrop"
          onClick={() => setPlayingVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video overflow-hidden modal-content"
            style={{ borderRadius: designTheme.cardRadius }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              autoPlay
              controls
              className="w-full h-full object-cover"
            >
              <source src={playingVideo} type="video/mp4" />
            </video>
            <button
              onClick={() => setPlayingVideo(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all z-10"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
